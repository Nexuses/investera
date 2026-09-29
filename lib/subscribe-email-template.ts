function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function submittedAt() {
  return new Date().toLocaleString("en-GB", {
    timeZone: "Asia/Dubai",
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export function buildSubscriberEmailHtml(email: string, source: string) {
  const safeEmail = escapeHtml(email);

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New newsletter subscriber</title>
  </head>
  <body style="margin:0;padding:0;background:#F4F5F7;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F4F5F7;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="background:#050B1F;padding:28px 32px;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#CCA400;">
                  Investera
                </p>
                <h1 style="margin:10px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:26px;line-height:1.25;font-weight:700;color:#ffffff;">
                  New Newsletter Subscriber
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 32px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#111111;">
                <p style="margin:0 0 8px;"><strong>Email:</strong>
                  <a href="mailto:${safeEmail}" style="color:#0c2d57;font-weight:600;text-decoration:none;">${safeEmail}</a>
                </p>
                <p style="margin:0 0 8px;"><strong>Source:</strong> ${escapeHtml(source)}</p>
                <p style="margin:0;"><strong>Subscribed:</strong> ${escapeHtml(submittedAt())} (GST)</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function buildSubscriberEmailText(email: string, source: string) {
  return [
    "New Newsletter Subscriber — Investera",
    "",
    `Email: ${email}`,
    `Source: ${source}`,
    `Subscribed: ${submittedAt()} (GST)`,
  ].join("\n");
}
