"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const WHITE_LOGO =
  "https://investera.s3.us-east-2.amazonaws.com/Group_1000005957_1788521419921_l4cp.png";

const platformLinks = [
  { label: "Everything You Need", href: "/platform#platform-insights" },
  { label: "One Platform.", href: "/platform#platform-features" },
  { label: "Why Investera?", href: "/platform#why-investera" },
  { label: "Pricing", href: "/pricing" },
];

const companyLinks = [
  { label: "About us", href: "/about-us" },
  { label: "Why Investera", href: "/platform#why-investera" },
  { label: "Blog & Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Book a demo", href: "/book-a-demo" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/investera-ad/",
    icon: "https://investera.s3.us-east-2.amazonaws.com/linkedin_1786434478756_22ys.png",
  },
  {
    label: "X",
    href: "https://x.com/InvesteraAE",
    icon: "x",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/investeraae/",
    icon: "https://investera.s3.us-east-2.amazonaws.com/instagram_1786434478756_p383.png",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@investeraae6244",
    icon: "youtube",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#050B1F]">
      <div className="mx-auto max-w-[1440px] px-6 py-12 lg:px-16 lg:py-14">
        <FadeIn className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-12">
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src={WHITE_LOGO}
                alt="Investera"
                width={156}
                height={34}
                unoptimized
                className="h-8 w-auto object-contain"
              />
            </Link>

            <p className="mt-4 max-w-[320px] text-[16px] leading-[1.5] text-white/70">
              One connected platform for portfolios, market intelligence, deals,
              reporting, and documents.
            </p>

            <div className="mt-5 flex max-w-[320px] items-center gap-2 rounded-full border border-white/15 bg-white/10 p-1">
              <input
                type="email"
                placeholder="Work email"
                className="h-[40px] w-full rounded-full bg-transparent px-4 text-[14px] text-white placeholder:text-white/45 focus:outline-none"
              />
              <button
                type="button"
                className="h-[40px] shrink-0 rounded-full bg-[#CCA400] px-5 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
              >
                Subscribe
              </button>
            </div>

            <div className="mt-4 flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 transition-opacity hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {social.icon === "youtube" ? (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="h-4 w-4 text-white"
                    >
                      <path
                        d="M21.6 8.2a2.6 2.6 0 0 0-1.8-1.9C18.1 6 12 6 12 6s-6.1 0-7.8.3A2.6 2.6 0 0 0 2.4 8.2 27 27 0 0 0 2 12a27 27 0 0 0 .4 3.8 2.6 2.6 0 0 0 1.8 1.9C5.9 18 12 18 12 18s6.1 0 7.8-.3a2.6 2.6 0 0 0 1.8-1.9A27 27 0 0 0 22 12a27 27 0 0 0-.4-3.8Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.2 14.6 14.8 12l-4.6-2.6v5.2Z"
                        fill="currentColor"
                      />
                    </svg>
                  ) : social.icon === "x" ? (
                    <svg
                      viewBox="0 0 1226.37 1226.37"
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-white"
                      fill="currentColor"
                    >
                      <path d="m727.348 519.284 446.727-519.284h-105.86l-387.893 450.887-309.809-450.887h-357.328l468.492 681.821-468.492 544.549h105.866l409.625-476.152 327.181 476.152h357.328l-485.863-707.086zm-144.998 168.544-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721h-162.604l-323.311-462.446z" />
                    </svg>
                  ) : (
                    <Image
                      src={social.icon}
                      alt=""
                      width={18}
                      height={18}
                      unoptimized
                      aria-hidden="true"
                      className="h-4 w-4 object-contain"
                      style={{
                        filter: "brightness(0) invert(1)",
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h6 className="text-[18px] font-semibold tracking-normal text-white">
              Platform
            </h6>
            <ul className="mt-4 space-y-3">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[16px] leading-[1.3] font-normal text-white/65 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-[18px] font-semibold tracking-normal text-white">
              Company
            </h6>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[16px] leading-[1.3] font-normal text-white/65 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-[13px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Investera. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="transition-colors hover:text-white/75">
                Privacy policy
              </Link>
              <Link href="/contact" className="transition-colors hover:text-white/75">
                Terms of service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
