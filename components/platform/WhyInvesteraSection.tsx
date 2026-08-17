"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

const cards = [
  {
    title: "One Dynamic Workspace",
    description:
      "Access portfolio performance, market intelligence, opportunities, approvals, treasury insights, and AI assistance without switching between disconnected systems.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Faster Understanding",
    description:
      "Use interactive visualizations and AI-generated summaries to interpret complex portfolio and deal information more quickly.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 19V5M4 19h16"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M8 15v-4M12 15V8M16 15v-7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Better-Informed Decisions",
    description:
      "Bring internal investment information and external market signals together to support timely, evidence-led decisions.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M12 8v4l3 2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Visibility Wherever You Are",
    description:
      "Stay connected to your portfolio through a responsive investor experience across desktop and mobile devices.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="5" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="17" y="8" width="5" height="11" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 16h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function WhyInvesteraSection() {
  return (
    <section className="bg-[#F7F8FA] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <FadeIn className="mx-auto max-w-[720px] text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#CCA400] sm:text-[13px]">
            Why Investera?
          </p>
          <h2 className="mt-4 text-[32px] font-normal leading-tight tracking-[-0.02em] sm:text-[40px]">
            <span className="font-normal text-[#1a1a1a]">A More Connected Way </span>
            <span className="heading-accent text-[#0c2d57]">to Invest</span>
          </h2>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-4">
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.1 }}
              className="flex flex-col rounded-[16px] bg-white px-7 py-8 shadow-[0_10px_30px_rgba(12,45,87,0.08)] sm:px-8 sm:py-9"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2F6FE4] text-white">
                {card.icon}
              </div>
              <h3 className="mt-6 text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#0c2d57]">
                {card.title}
              </h3>
              <p className="mt-3 text-[16px] leading-[1.3] text-[#4B5563]">
                {card.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
