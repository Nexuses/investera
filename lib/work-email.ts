const PERSONAL_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.co.uk",
  "yahoo.co.in",
  "yahoo.in",
  "ymail.com",
  "rocketmail.com",
  "hotmail.com",
  "hotmail.co.uk",
  "outlook.com",
  "outlook.co.uk",
  "live.com",
  "live.co.uk",
  "msn.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "pm.me",
  "gmx.com",
  "gmx.net",
  "mail.com",
  "email.com",
  "inbox.com",
  "zoho.com",
  "yandex.com",
  "yandex.ru",
  "rediffmail.com",
  "qq.com",
  "163.com",
  "126.com",
  "naver.com",
  "hey.com",
  "fastmail.com",
  "tutanota.com",
  "tuta.com",
  "mail.ru",
  "bk.ru",
  "list.ru",
  "inbox.ru",
]);

export const WORK_EMAIL_ERROR =
  "Please use your work email. Personal addresses such as Gmail, Yahoo, or Outlook are not accepted.";

export function isWorkEmail(email: string) {
  const domain = email.trim().toLowerCase().split("@")[1] ?? "";
  if (!domain || domain.includes(" ") || !domain.includes(".")) {
    return false;
  }
  return !PERSONAL_EMAIL_DOMAINS.has(domain);
}
