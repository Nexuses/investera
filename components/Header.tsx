"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Platform", href: "/platform" },
  { label: "Pricing", href: "/pricing" },
];

const mobileNavLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Platform", href: "/platform" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog & Insights", href: "/blog" },
  { label: "Case Study", href: "/case-study" },
  { label: "Contact", href: "/contact" },
  { label: "Book a Demo", href: "/book-a-demo" },
];

const COLORED_LOGO =
  "https://investera.s3.us-east-2.amazonaws.com/Group_1000005956_1788521419921_sf5o.png";
const WHITE_LOGO =
  "https://investera.s3.us-east-2.amazonaws.com/Group_1000005957_1788521419921_l4cp.png";

type HeaderProps = {
  variant?: "dark" | "light";
};

export default function Header({ variant = "dark" }: HeaderProps) {
  const pathname = usePathname();
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isLight = variant === "light";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setResourcesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

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

  const menuIconClass = isLight ? "text-[#0c2d57]" : "text-white";

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${headerClass}`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-16 lg:py-6">
          <Link href="/" className="shrink-0">
            <Image
              src={isLight ? COLORED_LOGO : WHITE_LOGO}
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
                Insights
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
                    href="/blog"
                    className={dropdownLinkClass}
                    onClick={() => setResourcesOpen(false)}
                  >
                    Blog & Insights
                  </Link>
                  <Link
                    href="/case-study"
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
              href="/book-a-demo"
              className="rounded-full bg-[#CCA400] px-5 py-2.5 text-[13px] font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Book a demo
            </Link>
          </div>

          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center xl:hidden ${menuIconClass}`}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden>
              <path d="M1 1.5h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M1 8h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M1 14.5h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-[#F7F8F6] xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between px-6 py-5">
            <Link href="/" onClick={() => setMenuOpen(false)} className="shrink-0">
              <Image
                src={COLORED_LOGO}
                alt="Investera"
                width={160}
                height={40}
                unoptimized
                className="h-[28px] w-auto"
              />
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center text-[#111111]"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path
                  d="M2 2l14 14M16 2 2 16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center px-6 pb-8 pt-4">
            <ul className="space-y-1">
              {mobileNavLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`inline-block py-2.5 text-[28px] font-medium leading-[1.15] tracking-[-0.02em] text-[#111111] transition-opacity hover:opacity-70 ${
                        active ? "underline decoration-1 underline-offset-[6px]" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="border-t border-[#D9D9D9] px-6 py-7">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-[14px] font-semibold text-[#111111]">Sales</p>
                <a
                  href="tel:+97123093880"
                  className="mt-2 block text-[14px] leading-[1.45] text-[#555555]"
                >
                  +971 2 309 3880
                </a>
                <a
                  href="mailto:info@investera.com"
                  className="mt-1 block text-[14px] leading-[1.45] text-[#555555]"
                >
                  info@investera.com
                </a>
              </div>
              <div>
                <p className="text-[14px] font-semibold text-[#111111]">Office</p>
                <p className="mt-2 text-[14px] leading-[1.45] text-[#555555]">
                  12th Floor, CI Tower
                  <br />
                  Abu Dhabi, UAE
                  <br />
                  P.O. Box 112230
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
