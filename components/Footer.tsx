import Image from "next/image";
import Link from "next/link";

const primaryLinks = [
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Features", href: "#features" },
];

const secondaryLinks = [
  { label: "Why Choose Investera", href: "#why-choose-investera" },
  { label: "Media", href: "#media" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: "/images/footer/facebook.png",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: "/images/footer/linkedin.png",
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: "/images/footer/twitter.png",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: "/images/footer/instagram.png",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#17477F] text-white">
      <div className="mx-auto max-w-[1440px] px-6 pt-14 pb-8 lg:px-16 lg:pt-16 lg:pb-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
          {/* Brand + social */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/footer/logo-white.png"
                alt="Investera"
                width={180}
                height={40}
                unoptimized
                className="h-9 w-auto object-contain lg:h-10"
              />
            </Link>

            <p className="mt-5 text-[16px] font-normal text-white lg:text-[18px]">
              Subscribe to our newsletter
            </p>

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/80 transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Image
                    src={social.icon}
                    alt=""
                    width={18}
                    height={18}
                    unoptimized
                    aria-hidden="true"
                    className="h-[18px] w-[18px] object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Primary links */}
          <div>
            <h6 className="text-[22px] font-bold text-white">
              Home
            </h6>
            <ul className="mt-4 space-y-3">
              {primaryLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[16px] font-normal text-white/95 transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Secondary links */}
          <div className="sm:pt-[41px] lg:pt-[41px]">
            <ul className="space-y-3">
              {secondaryLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[16px] font-normal text-white/95 transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-14 text-center text-[16px] font-normal text-white/90 sm:mt-16">
          @ 2026 Investera. All rights reserved
        </p>
      </div>
    </footer>
  );
}
