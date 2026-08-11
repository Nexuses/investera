"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Platform", href: "/#platform" },
];

export default function DarkHomeHero() {
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#050B1F]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-[radial-gradient(ellipse_80%_55%_at_50%_85%,rgba(37,99,235,0.28)_0%,rgba(37,99,235,0.1)_40%,transparent_70%)]"
      />

      <header className="relative z-20">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-16 lg:py-6">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo-white.png"
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
              <Link
                key={link.label}
                href={link.href}
                className="whitespace-nowrap text-[14px] font-normal text-white/90 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}

            <div className="relative">
              <button
                type="button"
                onClick={() => setResourcesOpen((v) => !v)}
                className="flex items-center gap-1.5 text-[14px] font-normal text-white/90 transition-colors hover:text-white"
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
                <div className="absolute left-1/2 top-full z-30 mt-3 w-40 -translate-x-1/2 rounded-xl border border-white/10 bg-[#0B152E] py-2 shadow-xl">
                  <Link
                    href="/#insights"
                    className="block px-4 py-2 text-[13px] text-white/90 hover:bg-white/5 hover:text-white"
                    onClick={() => setResourcesOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/#insights"
                    className="block px-4 py-2 text-[13px] text-white/90 hover:bg-white/5 hover:text-white"
                    onClick={() => setResourcesOpen(false)}
                  >
                    Case Study
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/#demo"
              className="whitespace-nowrap text-[14px] font-normal text-white/90 transition-colors hover:text-white"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden items-center gap-5 xl:flex">
            <Link
              href="/#signin"
              className="text-[14px] font-medium text-white/90 transition-colors hover:text-white"
            >
              Sign in
            </Link>
            <Link
              href="/#demo"
              className="rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-[#050B1F] transition-transform hover:scale-[1.03]"
            >
              Book a demo
            </Link>
          </div>

          <Link
            href="/#demo"
            className="rounded-full bg-white px-4 py-2 text-[12px] font-semibold text-[#050B1F] xl:hidden"
          >
            Book a demo
          </Link>
        </div>
      </header>

      <div className="relative z-10 mx-auto max-w-[900px] px-6 pb-8 pt-10 text-center sm:pb-10 sm:pt-14 lg:pt-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[42px] font-normal leading-[1.12] tracking-[-0.03em] text-white sm:text-[56px] lg:text-[68px]"
        >
          Bringing Investment
          <br />
          Management Together
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.12 }}
          className="mx-auto mt-5 max-w-[620px] text-[16px] leading-[1.3] text-white/70 sm:mt-6"
        >
          A suite of smart financial tools that streamlines your operations,
          optimises cash flow and drives better decisions across every asset
          class you hold.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.22 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-9 sm:gap-4"
        >
          <Link
            href="/#demo"
            className="rounded-full bg-white px-7 py-3 text-[14px] font-semibold text-[#050B1F] transition-transform hover:scale-[1.03]"
          >
            Book a demo
          </Link>
          <Link
            href="/#platform"
            className="rounded-full border border-white/40 bg-transparent px-7 py-3 text-[14px] font-semibold text-white transition-colors hover:border-white hover:bg-white/5"
          >
            Discover the platform
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="relative z-10 mx-auto max-w-[1100px] px-4 pb-0 sm:px-8 lg:px-12"
      >
        <div className="relative mx-auto overflow-hidden rounded-t-[20px] sm:rounded-t-[28px] lg:rounded-t-[32px]">
          <Image
            src="/images/home-3/dashboard-clean.png"
            alt="Investera dashboard showing total assets under management and 30-day live trend"
            width={1920}
            height={1200}
            priority
            unoptimized
            className="h-auto w-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
