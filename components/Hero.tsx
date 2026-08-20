"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Wave background - full hero height, stops below header */}
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/images/hero-section-ref.png')] bg-bottom bg-no-repeat bg-[length:100%_100%]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center px-6 pt-[96px] pb-[20px] lg:px-16 lg:pt-[112px]">
        <div className="flex max-w-[860px] flex-col items-center text-center">
          <h1 className="text-[55px] font-normal leading-[1.15] tracking-[-0.01em] text-[#0c2d57]">
            Bringing Investment
            <br />
            <span className="heading-accent">
              Management Together
            </span>
          </h1>
          <p className="mt-5 max-w-[720px] text-[18px] leading-[1.75] text-[#64748b] lg:mt-6">
            Manage portfolios, deals, transactions, reporting, and investment
            data through one unified platform built for greater visibility,
            accuracy, and control.
          </p>

          <Link
            href="/book-a-demo"
            id="demo"
            className="mt-8 rounded-full bg-[#c4a035] px-11 py-3.5 text-[13px] font-bold tracking-[0.14em] text-white transition-colors hover:bg-[#b08f2e] lg:mt-10 lg:px-12 lg:py-4"
          >
            BOOK A DEMO
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
          className="relative mt-9 w-full max-w-[840px] lg:mt-11"
        >
          <Image
            src="/images/hero-collage.png"
            alt="Investment management dashboard with portfolio analytics, deal tracking, and asset allocation charts"
            width={2240}
            height={1420}
            priority
            className="mx-auto h-auto w-full mix-blend-screen"
          />
        </motion.div>
      </div>
    </section>
  );
}
