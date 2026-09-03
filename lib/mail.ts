import { setDefaultResultOrder } from "node:dns";
import { lookup as dnsLookup } from "node:dns/promises";
import nodemailer from "nodemailer";
import {
  buildContactEmailHtml,
  buildContactEmailText,
  type ContactPayload,
} from "@/lib/contact-email-template";

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

export async function sendContactEmail(payload: ContactPayload) {
  const mailTo = requiredEnv(
    "Mail_To / MAIL_TO",
    process.env.Mail_To || process.env.MAIL_TO,
  )
    .split(/[,;]/)
    .map((email) => email.trim())
    .filter(Boolean);

  if (!mailTo.length) {
    throw new Error("Missing required environment variable: Mail_To / MAIL_TO");
  }
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
}
