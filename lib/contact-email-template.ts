export type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message?: string;
  source?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:14px 16px;border-bottom:1px solid #E8ECF1;width:34%;vertical-align:top;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;color:#6B7280;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:14px 16px;border-bottom:1px solid #E8ECF1;vertical-align:top;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;color:#111111;">
        ${value}
      </td>
    </tr>
  `;
}

export function buildContactEmailHtml(payload: ContactPayload) {
  const fullName = `${payload.firstName} ${payload.lastName}`.trim();
  const phone = payload.phone?.trim() || "—";
  const message = payload.message?.trim()
    ? escapeHtml(payload.message.trim()).replace(/\n/g, "<br />")
    : "—";
  const source = payload.source?.trim() || "Website contact form";
  const submittedAt = new Date().toLocaleString("en-GB", {
    timeZone: "Asia/Dubai",
    dateStyle: "medium",
    timeStyle: "short",
  });

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New contact enquiry</title>
  </head>
  <body style="margin:0;padding:0;background:#F4F5F7;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F4F5F7;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 12px 40px rgba(15,23,42,0.08);">
            <tr>
              <td style="background:#050B1F;padding:28px 32px;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#CCA400;">
                  Investera
                </p>
                <h1 style="margin:10px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:26px;line-height:1.25;font-weight:700;color:#ffffff;">
                  New Contact Enquiry
                </h1>
                <p style="margin:10px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:rgba(255,255,255,0.72);">
                  A visitor submitted the contact form on the website.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 16px 0;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:8px;border:1px solid #E8ECF1;border-radius:12px;overflow:hidden;">
                  ${row("Name", escapeHtml(fullName))}
                  ${row(
                    "Email",
                    `<a href="mailto:${escapeHtml(payload.email)}" style="color:#0c2d57;text-decoration:none;font-weight:600;">${escapeHtml(payload.email)}</a>`,
                  )}
                  ${row("Phone", escapeHtml(phone))}
                  ${row("Source", escapeHtml(source))}
                  ${row("Submitted", escapeHtml(`${submittedAt} (GST)`))}
                  ${row("Message", message)}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 32px;">
                <a href="mailto:${escapeHtml(payload.email)}" style="display:inline-block;background:#CCA400;color:#ffffff;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;padding:12px 22px;border-radius:999px;">
                  Reply to ${escapeHtml(payload.firstName)}
                </a>
                <p style="margin:18px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.5;color:#6B7280;">
                  This email was sent automatically from the Investera website contact form.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function buildContactEmailText(payload: ContactPayload) {
  return [
    "New Contact Enquiry — Investera",
    "",
    `Name: ${payload.firstName} ${payload.lastName}`.trim(),
    `Email: ${payload.email}`,
    `Phone: ${payload.phone?.trim() || "—"}`,
    `Source: ${payload.source?.trim() || "Website contact form"}`,
    "",
    "Message:",
    payload.message?.trim() || "—",
  ].join("\n");
}
