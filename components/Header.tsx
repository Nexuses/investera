"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Platform", href: "/#platform" },
];

const COLORED_LOGO =
  "https://investera.s3.us-east-2.amazonaws.com/Investera_logo_colored_2_1786434355587_no0s.png";

type HeaderProps = {
  variant?: "dark" | "light";
};

export default function Header({ variant = "dark" }: HeaderProps) {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isLight = variant === "light";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClass = isLight
    ? scrolled
      ? "border-[#EAECF0]/80 bg-white/70 shadow-[0_8px_30px_rgba(12,45,87,0.08)] backdrop-blur-xl"
      : "border-transparent bg-white/55 backdrop-blur-md"
    : scrolled
      ? "border-white/10 bg-[#050B1F]/55 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl"
      : "border-transparent bg-[#050B1F]/35 backdrop-blur-md";

  const linkClass = isLight
    ? "whitespace-nowrap text-[14px] font-normal text-[#344054] transition-colors hover:text-[#0c2d57]"
    : "whitespace-nowrap text-[14px] font-normal text-white/90 transition-colors hover:text-white";

  const dropdownClass = isLight
    ? "absolute left-1/2 top-full z-30 mt-3 w-40 -translate-x-1/2 rounded-xl border border-[#EAECF0] bg-white/95 py-2 shadow-xl backdrop-blur-xl"
    : "absolute left-1/2 top-full z-30 mt-3 w-40 -translate-x-1/2 rounded-xl border border-white/10 bg-[#0B152E]/90 py-2 shadow-xl backdrop-blur-xl";

  const dropdownLinkClass = isLight
    ? "block px-4 py-2 text-[13px] text-[#344054] hover:bg-[#F2F4F7] hover:text-[#0c2d57]"
    : "block px-4 py-2 text-[13px] text-white/90 hover:bg-white/5 hover:text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${headerClass}`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-16 lg:py-6">
        <Link href="/" className="shrink-0">
          <Image
            src={isLight ? COLORED_LOGO : "/images/logo-white.png"}
            alt="Investera"
            width={160}
            height={40}
            priority
            unoptimized
            className="h-[28px] w-auto lg:h-[32px]"
          />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex xl:gap-9">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}

          <div className="relative">
            <button
              type="button"
              onClick={() => setResourcesOpen((v) => !v)}
              className={`flex items-center gap-1.5 ${linkClass}`}
              aria-expanded={resourcesOpen}
            >
              Resources
              <svg
                viewBox="0 0 12 12"
                className={`h-3 w-3 transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
                fill="none"
                aria-hidden
              >
                <path
                  d="M2.5 4.5 6 8l3.5-3.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {resourcesOpen && (
              <div className={dropdownClass}>
                <Link
                  href="/#insights"
                  className={dropdownLinkClass}
                  onClick={() => setResourcesOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/#insights"
                  className={dropdownLinkClass}
                  onClick={() => setResourcesOpen(false)}
                >
                  Case Study
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact" className={linkClass}>
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-5 xl:flex">
          <Link
            href="/#signin"
            className={`text-[14px] font-medium transition-colors ${
              isLight
                ? "text-[#344054] hover:text-[#0c2d57]"
                : "text-white/90 hover:text-white"
            }`}
          >
            Sign in
          </Link>
          <Link
            href="/#demo"
            className="rounded-full bg-[#CCA400] px-5 py-2.5 text-[13px] font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            Book a demo
          </Link>
        </div>

        <Link
          href="/#demo"
          className="rounded-full bg-[#CCA400] px-4 py-2 text-[12px] font-semibold text-white xl:hidden"
        >
          Book a demo
        </Link>
      </div>
    </header>
  );
}
