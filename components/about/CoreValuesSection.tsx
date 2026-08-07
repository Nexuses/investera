"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Portfolio & Deal Management",
    description:
      "Track opportunities, transactions, valuations, holdings, and portfolio performance across the investment lifecycle.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden
      >
        <path d="M9 18h6" />
        <path d="M10 21h4" />
        <path d="M12 3a6 6 0 0 0-4 10.5V15a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1.5A6 6 0 0 0 12 3Z" />
        <circle cx="12" cy="10" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Reporting & Dashboards",
    description:
      "Turn investment data into actionable insights through configurable reports, dashboards, and performance metrics.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden
      >
        <circle cx="6.5" cy="12" r="2.5" />
        <circle cx="17.5" cy="7" r="2.5" />
        <circle cx="17.5" cy="17" r="2.5" />
        <path d="M8.7 10.8 15.3 8.2" />
        <path d="M8.7 13.2 15.3 15.8" />
      </svg>
    ),
  },
  {
    title: "Documents & Workflows",
    description:
      "Securely manage investment documents, due diligence, approvals, e-signatures, and maker-checker controls.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden
      >
        <path d="M8 13c0 1.5 1.5 3 4 3s4-1.5 4-3c0-3-4-2.5-4-5" />
        <path d="M11 18h2" />
        <circle cx="8" cy="8" r="2.5" />
        <circle cx="16" cy="8" r="2.5" />
        <path d="M10 9.2c.6.5 1.3.8 2 .8s1.4-.3 2-.8" />
      </svg>
    ),
  },
  {
    title: "Investment Intelligence",
    titleLines: ["Investment", "Intelligence"],
    description:
      "Connect market data, portfolio analytics, risk monitoring, benchmarks, and AI-powered insights in one view.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden
      >
        <path d="M12 3 4.5 6.5v5.2c0 4.6 3.2 8.5 7.5 9.8 4.3-1.3 7.5-5.2 7.5-9.8V6.5L12 3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export default function CoreValuesSection() {
  return (
    <section className="bg-[#EBF2FB] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-[720px] text-center"
        >
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#3B82F6] sm:text-[13px]">
            What We Do
          </p>
          <h2 className="mt-4 text-[32px] leading-[1.2] tracking-[-0.02em] sm:text-[40px] lg:text-[44px]">
            <span className="font-normal text-[#1a1a1a]">Our </span>
            <span className="font-bold text-[#0c2d57]">Core Capabilities</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.article
              key={value.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: 0.08 + index * 0.07,
              }}
              className="rounded-[20px] bg-white px-6 py-7 shadow-[0_10px_30px_rgba(12,45,87,0.08)] sm:rounded-[24px] sm:px-7 sm:py-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#DBEAFE] text-[#2563EB]">
                {value.icon}
              </div>
              <h3 className="mt-6 text-[18px] font-bold leading-[1.25] tracking-[-0.01em] text-[#111111] sm:text-[20px]">
                {"titleLines" in value && value.titleLines
                  ? value.titleLines.map((line, i) => (
                      <span key={line}>
                        {i > 0 && <br />}
                        {line}
                      </span>
                    ))
                  : value.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.55] text-[#6B7280] sm:text-[15px]">
                {value.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
