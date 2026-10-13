"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

export default function CaseStudyHeroLight() {
  return (
    <section className="bg-white p-3 pt-[88px] sm:p-4 sm:pt-[92px]">
      <div className="relative isolate overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#FFFFFF_0%,#E9F2FE_45%,#BEDBFF_100%)] px-6 pb-14 pt-20 sm:rounded-[32px] sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(rgba(12,45,87,0.22)_1px,transparent_1.2px)] [background-size:20px_20px] [mask-image:linear-gradient(to_top,black_0%,transparent_65%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-[-30%] -z-10 mx-auto h-[70%] max-w-[1100px] rounded-full bg-[#2F6FE4]/25 blur-[90px]"
        />

        <div className="mx-auto max-w-[1000px] text-center">
          <motion.p
            {...fadeUp()}
            className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#CCA400] sm:text-[13px]"
          >
            Case Studies
          </motion.p>

          <motion.h1
            {...fadeUp(0.05)}
            className="mt-4 text-[40px] font-normal leading-[1.08] tracking-[-0.03em] text-[#0c2d57] sm:text-[56px] lg:text-[72px]"
          >
            Real Results Across the
            <br />
            <span className="heading-accent text-[#143F73]">Investment Lifecycle</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.1)}
            className="mx-auto mt-6 max-w-[600px] text-[16px] leading-[1.5] text-[#0c2d57]/75 sm:text-[17px]"
          >
            Explore how leading investment firms use Investera to unify operations,
            improve portfolio visibility, and make faster, data-driven decisions across
            asset classes.
          </motion.p>

          <motion.div {...fadeUp(0.15)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/book-a-demo"
              className="inline-flex items-center justify-center rounded-[10px] bg-gradient-to-b from-[#D9B21A] to-[#B99400] px-5 py-3 text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(204,164,0,0.30)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6FE4] focus-visible:ring-offset-2"
            >
              Book a Demo
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-[10px] border border-[#0c2d57]/20 bg-white px-5 py-3 text-[14px] font-semibold text-[#0c2d57] transition-colors hover:border-[#0c2d57]/40 hover:bg-[#E9F2FE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6FE4] focus-visible:ring-offset-2"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
