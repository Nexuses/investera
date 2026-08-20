"use client";

import { motion } from "framer-motion";

export default function IdentityVisionSection() {
  return (
    <section className="mx-auto max-w-[1440px] bg-white px-4 pb-[55px] pt-4 sm:px-6 sm:pt-6 lg:px-[44px]">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="text-center text-[40px] font-normal leading-tight tracking-[-0.02em] text-[#1a1a1a]"
      >
        <span className="font-normal text-[#1a1a1a]">Our Identity,</span>
        <br />
        <span className="heading-accent text-[#0c2d57]">Vision and Values</span>
      </motion.h2>

      <div className="relative mx-auto mt-[-5px] max-w-[1100px] pt-20 sm:mt-[3px] sm:pt-24 lg:pt-28">
        {/* Identity card - overlaps white card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          className="absolute left-1/2 top-0 z-10 w-[min(100%,880px)] -translate-x-1/2 rounded-[12px] bg-[#0c2d57] px-6 py-7 text-center sm:px-10 sm:py-8 lg:px-14 lg:py-9"
        >
          <h4 className="text-[28px] font-normal leading-[1.25] tracking-[-0.02em] text-white">
            Bringing Multi-Asset Investment{" "}
            <span className="heading-accent">Together</span>
          </h4>
          <p className="mt-4 text-[16px] leading-[1.3] text-white/95">
            A secure, unified investment management platform that brings
            portfolios, deals, reporting, workflows, documents, and insights
            together for faster, informed decisions.
          </p>
        </motion.div>

        {/* Vision + Mission card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
          className="rounded-[12px] bg-white px-6 pb-10 pt-28 shadow-[0_18px_50px_rgba(12,45,87,0.10)] sm:px-10 sm:pb-12 sm:pt-32 lg:px-14 lg:pb-14 lg:pt-36"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-0">
            {/* Vision */}
            <div className="lg:pr-12 xl:pr-14">
              <div className="flex items-center gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-7 w-7 shrink-0 text-[#0c2d57]"
                  aria-hidden
                >
                  <path
                    d="M2.5 12s3.5-6.5 9.5-6.5S21.5 12 21.5 12s-3.5 6.5-9.5 6.5S2.5 12 2.5 12Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                </svg>
                <h3 className="text-[28px] font-bold leading-none tracking-[-0.02em] text-[#0c2d57]">
                  Vision
                </h3>
              </div>
              <p className="mt-5 text-[16px] leading-[1.3] text-[#1a1a1a]">
                Enable investment organizations to manage complex, multi-asset
                portfolios with greater visibility, efficiency, transparency,
                and control.
              </p>
            </div>

            {/* Mission */}
            <div className="border-t border-[#E5E7EB] pt-10 lg:border-l lg:border-t-0 lg:pt-0 lg:pl-12 xl:pl-14">
              <div className="flex items-center gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-7 w-7 shrink-0 text-[#0c2d57]"
                  aria-hidden
                >
                  <path
                    d="M4 8V5a1 1 0 0 1 1-1h3"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16 4h3a1 1 0 0 1 1 1v3"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                  <path
                    d="M20 16v3a1 1 0 0 1-1 1h-3"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 20H5a1 1 0 0 1-1-1v-3"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="2.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                </svg>
                <h3 className="text-[28px] font-bold leading-none tracking-[-0.02em] text-[#0c2d57]">
                  Mission
                </h3>
              </div>
              <p className="mt-5 text-[16px] leading-[1.3] text-[#1a1a1a]">
                Centralize investment information, reduce manual processes,
                strengthen governance, and support better-informed investment
                decisions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
