"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const cards = [
  {
    title: "One Dynamic Workspace",
    description:
      "Access portfolio performance, market intelligence, opportunities, approvals, treasury insights, and AI assistance without switching between disconnected systems.",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="8" height="8" rx="1.5" />
        <rect x="13" y="3" width="8" height="8" rx="1.5" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" />
        <rect x="13" y="13" width="8" height="8" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "Faster Understanding",
    description:
      "Use interactive visualisations and AI-generated summaries to interpret complex portfolio and deal information more quickly.",
    icon: (
      <svg {...iconProps}>
        <path d="M4 19V5M4 19h16" />
        <path d="M8 15v-4M12 15V8M16 15v-7" />
      </svg>
    ),
  },
  {
    title: "Better-Informed Decisions",
    description:
      "Bring internal investment information and external market signals together to support timely, evidence-led decisions.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </svg>
    ),
  },
  {
    title: "Visibility Wherever You Are",
    description:
      "Stay connected to your portfolio through a responsive investor experience across desktop and mobile devices.",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="5" width="12" height="14" rx="1.5" />
        <rect x="17" y="8" width="5" height="11" rx="1.2" />
        <path d="M7 16h4" />
      </svg>
    ),
  },
];

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className={className}>
      <path
        d="M4 10L10 4M5 4h5v5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhyInvesteraLightSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="why-investera"
      className="relative isolate overflow-hidden bg-[#F5F8FD] py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(47,111,228,0.14),transparent_55%),radial-gradient(ellipse_at_85%_60%,rgba(76,201,240,0.10),transparent_45%),radial-gradient(ellipse_at_10%_90%,rgba(20,63,115,0.08),transparent_50%)]"
      />

      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        <FadeIn className="mx-auto max-w-[640px] text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#CCA400] sm:text-[13px]">
            Why Investera?
          </p>
          <h2 className="mt-4 text-[32px] font-normal leading-[1.15] tracking-[-0.02em] text-[#1a1a1a] sm:text-[40px] lg:text-[44px]">
            A More Connected Way
            <br />
            <span className="heading-accent text-[#0c2d57]">to Invest</span>
          </h2>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 md:grid-cols-2 md:gap-6">
          {cards.map((card, index) => {
            const isActive = index === active;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.1 }}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`relative isolate flex gap-5 overflow-hidden rounded-[18px] border p-6 transition-[background-color,border-color,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6FE4] focus-visible:ring-offset-2 sm:p-7 ${
                  isActive
                    ? "border-white/10 bg-[#050B1F] shadow-[0_18px_40px_rgba(5,11,31,0.35)]"
                    : "border-[#E3EAF5] bg-white shadow-[0_10px_30px_rgba(12,45,87,0.06)]"
                }`}
              >
                <span
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(47,111,228,0.30),transparent_55%),radial-gradient(ellipse_at_85%_60%,rgba(76,201,240,0.14),transparent_45%),radial-gradient(ellipse_at_10%_90%,rgba(20,63,115,0.45),transparent_50%)] transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] transition-colors duration-300 ${
                    isActive
                      ? "bg-white text-[#0c2d57] shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
                      : "bg-[#0c2d57] text-white shadow-[0_8px_20px_rgba(12,45,87,0.25)]"
                  }`}
                >
                  {card.icon}
                </span>
                <div className="flex flex-col">
                  <h3
                    className={`text-[19px] font-semibold leading-[1.3] transition-colors duration-300 ${
                      isActive ? "text-white" : "text-[#0c2d57]"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`mt-2.5 text-[15px] leading-[1.55] transition-colors duration-300 ${
                      isActive ? "text-white/75" : "text-[#4B5563]"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center sm:mt-14">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-[10px] bg-gradient-to-b from-[#D9B21A] to-[#B99400] px-6 py-3.5 text-[15px] font-semibold text-[#0b1426] shadow-[0_10px_30px_rgba(204,164,0,0.30)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6FE4] focus-visible:ring-offset-2"
          >
            Contact Us
            <ArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
