"use client";

import { motion } from "framer-motion";

const principles = [
  {
    title: "Connected Management",
    description:
      "Centralize portfolio management, deal tracking, investment reporting, and due diligence activities",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[18px] w-[18px]"
        aria-hidden
      >
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Smarter Automation",
    description:
      "Simplify document management and investment processes through structured workflow automation",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[18px] w-[18px]"
        aria-hidden
      >
        <path d="M21 12a9 9 0 0 0-15.5-6.36" />
        <path d="M3 4v5h5" />
        <path d="M3 12a9 9 0 0 0 15.5 6.36" />
        <path d="M21 20v-5h-5" />
      </svg>
    ),
  },
  {
    title: "AI-Powered Insights",
    description:
      "Access AI-powered market intelligence and investment information through connected mobile applications.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[18px] w-[18px]"
        aria-hidden
      >
        <path d="M12 3l1.4 4.2L18 9l-4.6 1.8L12 15l-1.4-4.2L6 9l4.6-1.8L12 3z" />
        <path d="M19 14l.7 2.1L22 17l-2.3.9L19 20l-.7-2.1L16 17l2.3-.9L19 14z" />
      </svg>
    ),
  },
];

export default function PrinciplesSection() {
  return (
    <section className="mx-auto max-w-[1440px] bg-white px-4 pb-8 sm:px-6 sm:pb-10 lg:px-[44px] lg:pb-12">
      <div className="rounded-[12px] bg-[#F3F3F3] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex rounded-lg bg-[#E8E8E8] px-3.5 py-1.5 text-[13px] font-medium text-[#4B5563]"
        >
          Introduction
        </motion.span>

        <motion.h4
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          className="mt-6 w-full text-[28px] font-normal leading-[1.3] tracking-[-0.02em] text-[#111111]"
        >
          Investera Business Solutions develops financial technology and
          data-driven business applications that help investment professionals
          manage complex investment activities with greater efficiency,
          transparency, and control.
        </motion.h4>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-3">
          {principles.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: 0.12 + index * 0.08,
              }}
              className="rounded-[12px] bg-white px-7 py-8 sm:px-8 sm:py-9"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#143F73] text-white">
                {item.icon}
              </div>
              <h3 className="mt-7 text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#111111]">
                {item.title}
              </h3>
              <p className="mt-3 text-[16px] leading-[1.3] text-[#6B7280]">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
