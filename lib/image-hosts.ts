/** External hosts whose images go through the Next.js image optimizer. */
export const OPTIMIZED_IMAGE_HOSTS = [
  "investera.s3.us-east-2.amazonaws.com",
  "d2ol7oe51mr4n9.cloudfront.net",
  "assets.nexuses.xyz",
];

/**
 * Whether `next/image` can optimize this src. Image URLs pasted into the CMS can
 * point anywhere; other hosts must be rendered with `unoptimized` or next/image throws.
 */
export function canOptimizeImage(src: string) {
  if (src.startsWith("/")) return true;
  try {
    const url = new URL(src);
    return url.protocol === "https:" && OPTIMIZED_IMAGE_HOSTS.includes(url.hostname);
  } catch {
    return false;
  }
}
