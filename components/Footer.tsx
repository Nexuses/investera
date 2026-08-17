"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const platformLinks = [
  { label: "Investera Pro", href: "/platform" },
  { label: "Market Intelligence", href: "/platform" },
  { label: "Investments Hub", href: "/platform" },
  { label: "Reporting & dashboards", href: "/platform" },
  { label: "Document management", href: "/platform" },
];

const solutionsLinks = [
  { label: "Portfolio managers", href: "/#who-we-serve" },
  { label: "Family offices", href: "/#who-we-serve" },
  { label: "Private equity & VC", href: "/#who-we-serve" },
  { label: "Fund managers", href: "/#who-we-serve" },
  { label: "Technology partners", href: "/#connectivity" },
];

const companyLinks = [
  { label: "About us", href: "/about-us" },
  { label: "Why Investera", href: "/platform" },
  { label: "Blog & Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Book a demo", href: "/book-a-demo" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: "https://investera.s3.us-east-2.amazonaws.com/facebook_1786434478756_xb9n.png",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: "https://investera.s3.us-east-2.amazonaws.com/linkedin_1786434478756_22ys.png",
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: "https://investera.s3.us-east-2.amazonaws.com/twitter_1786434478756_bnq3.png",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: "https://investera.s3.us-east-2.amazonaws.com/instagram_1786434478756_p383.png",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#050B1F]">
      <div className="mx-auto max-w-[1440px] px-6 py-12 lg:px-16 lg:py-14">
        <FadeIn className="grid grid-cols-1 gap-10 lg:grid-cols-[1.25fr_1fr_1fr_1fr] lg:gap-12">
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/logo-white.png"
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
              Solutions
            </h6>
            <ul className="mt-4 space-y-3">
              {solutionsLinks.map((link) => (
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
