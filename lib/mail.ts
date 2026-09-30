import { setDefaultResultOrder } from "node:dns";
import { lookup as dnsLookup } from "node:dns/promises";
import nodemailer from "nodemailer";
import {
  buildContactEmailHtml,
  buildContactEmailText,
  buildThankYouEmailHtml,
  buildThankYouEmailText,
  type ContactPayload,
} from "@/lib/contact-email-template";
import {
  buildSubscriberEmailHtml,
  buildSubscriberEmailText,
} from "@/lib/subscribe-email-template";

const NOTIFICATION_EMAIL = "info@investera.com";

setDefaultResultOrder("ipv4first");

function requiredEnv(name: string, value: string | undefined) {
  if (!value?.trim()) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value.trim();
}

function isRetryable(error: unknown) {
  const code =
    typeof error === "object" && error && "code" in error
      ? String((error as { code?: string }).code)
      : "";
  return ["ENOTFOUND", "EAI_AGAIN", "ETIMEDOUT", "ECONNRESET", "ECONNREFUSED"].includes(
    code,
  );
}

async function withRetry<T>(fn: () => Promise<T>, attempts = 3) {
  let lastError: unknown;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      if (!isRetryable(error) || attempt === attempts) {
        throw error;
      }
      await new Promise((resolve) => setTimeout(resolve, 400 * attempt));
    }
  }
  throw lastError;
}

async function resolveIpv4(hostname: string) {
  const { address } = await dnsLookup(hostname, { family: 4 });
  return address;
}

async function createMailer() {
  // info@ always receives notifications; Mail_To can add more recipients.
  const extraRecipients = (process.env.Mail_To || process.env.MAIL_TO || "")
    .split(/[,;]/)
    .map((email) => email.trim())
    .filter(Boolean);
  const mailTo = [
    ...new Map(
      [NOTIFICATION_EMAIL, ...extraRecipients].map((email) => [email.toLowerCase(), email]),
    ).values(),
  ];
  const fromEmail = requiredEnv("FROM_EMAIL", process.env.FROM_EMAIL);
  const host = requiredEnv("SMTP_HOST", process.env.SMTP_HOST);
  const port = Number(requiredEnv("SMTP_PORT", process.env.SMTP_PORT));
  const user = requiredEnv("SMTP_USER", process.env.SMTP_USER);
  const pass = requiredEnv("SMTP_PASS", process.env.SMTP_PASS);
  const secure =
    String(process.env.SMTP_SECURE || "").toLowerCase() === "true" ||
    port === 465;

  const ipv4Host = await withRetry(() => resolveIpv4(host));

  const transporter = nodemailer.createTransport({
    host: ipv4Host,
    port,
    secure,
    requireTLS: !secure,
    name: host,
    connectionTimeout: 20_000,
    greetingTimeout: 15_000,
    socketTimeout: 20_000,
    auth: { user, pass },
    tls: {
      minVersion: "TLSv1.2",
      servername: host,
    },
  });

  return { transporter, mailTo, fromEmail };
}

export async function sendContactEmail(payload: ContactPayload) {
  const { transporter, mailTo, fromEmail } = await createMailer();
  const fullName = `${payload.firstName} ${payload.lastName}`.trim();

  await withRetry(() =>
    transporter.sendMail({
      from: `"Investera Website" <${fromEmail}>`,
      to: mailTo,
      replyTo: payload.email,
      subject: `New contact enquiry from ${fullName}`,
      text: buildContactEmailText(payload),
      html: buildContactEmailHtml(payload),
    }),
  );

  await withRetry(() =>
    transporter.sendMail({
      from: `"Investera" <${fromEmail}>`,
      to: payload.email,
      replyTo: mailTo[0],
      subject: "Thank you for contacting Investera",
      text: buildThankYouEmailText(payload),
      html: buildThankYouEmailHtml(payload),
    }),
  );
}

export async function sendSubscriberNotification(email: string, source: string) {
  const { transporter, mailTo, fromEmail } = await createMailer();

  await withRetry(() =>
    transporter.sendMail({
      from: `"Investera Website" <${fromEmail}>`,
      to: mailTo,
      replyTo: email,
      subject: `New newsletter subscriber: ${email}`,
      text: buildSubscriberEmailText(email, source),
      html: buildSubscriberEmailHtml(email, source),
    }),
  );
}
