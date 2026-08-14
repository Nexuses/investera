"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";

export default function DarkHomeHero() {
  return (
    <>
      <Header />

      <section className="relative overflow-hidden bg-[#050B1F] pt-[88px]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-[radial-gradient(ellipse_80%_55%_at_50%_85%,rgba(37,99,235,0.28)_0%,rgba(37,99,235,0.1)_40%,transparent_70%)]"
        />

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
              href="/book-a-demo"
              className="rounded-full bg-[#CCA400] px-7 py-3 text-[14px] font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Book a demo
            </Link>
            <Link
              href="/platform"
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
    </>
  );
}
