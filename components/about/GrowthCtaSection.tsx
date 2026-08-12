"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const squares = [
  { top: "8%", left: "6%", size: 28, opacity: 0.12 },
  { top: "18%", left: "22%", size: 16, opacity: 0.1 },
  { top: "6%", left: "48%", size: 22, opacity: 0.14 },
  { top: "14%", left: "72%", size: 34, opacity: 0.1 },
  { top: "10%", left: "88%", size: 18, opacity: 0.12 },
  { top: "38%", left: "4%", size: 20, opacity: 0.1 },
  { top: "42%", left: "16%", size: 40, opacity: 0.08 },
  { top: "36%", left: "82%", size: 24, opacity: 0.12 },
  { top: "48%", left: "92%", size: 14, opacity: 0.14 },
  { top: "62%", left: "8%", size: 18, opacity: 0.1 },
  { top: "70%", left: "20%", size: 30, opacity: 0.09 },
  { top: "78%", left: "42%", size: 16, opacity: 0.12 },
  { top: "68%", left: "68%", size: 26, opacity: 0.1 },
  { top: "74%", left: "84%", size: 36, opacity: 0.08 },
  { top: "86%", left: "12%", size: 22, opacity: 0.11 },
  { top: "88%", left: "58%", size: 18, opacity: 0.1 },
  { top: "84%", left: "90%", size: 20, opacity: 0.12 },
  { top: "28%", left: "58%", size: 14, opacity: 0.1 },
  { top: "52%", left: "38%", size: 12, opacity: 0.08 },
  { top: "58%", left: "74%", size: 16, opacity: 0.11 },
];

export default function GrowthCtaSection() {
  return (
    <section className="bg-[#020B2A] px-4 py-8 sm:px-6 sm:py-10 lg:px-[44px] lg:py-12">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[24px] px-6 py-16 text-center sm:rounded-[28px] sm:px-10 sm:py-20 lg:rounded-[32px] lg:px-16 lg:py-24"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 45%, #1A5A9E 0%, #143F73 45%, #0F325C 80%, #0A2748 100%)",
          }}
        >
          {/* Scattered square pattern */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            {squares.map((sq, index) => (
              <span
                key={index}
                className="absolute rounded-[3px] bg-white"
                style={{
                  top: sq.top,
                  left: sq.left,
                  width: sq.size,
                  height: sq.size,
                  opacity: sq.opacity,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 mx-auto max-w-[820px]">
            <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-white sm:text-[40px] lg:text-[48px]">
              Bring Your Investment Operations Into One Intelligent Platform
            </h2>

            <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-[1.6] text-white/95 sm:mt-6 sm:text-[17px] lg:text-[18px]">
              Centralize portfolios, deals, reporting, workflows, and insights
              with Investera Pro.
            </p>

            <Link
              href="/#demo"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-[14px] font-semibold text-[#020B2A] transition-transform hover:scale-[1.03] sm:mt-10 sm:px-9 sm:py-4 sm:text-[15px]"
            >
              Book a Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
