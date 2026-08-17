"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Investera has made portfolio management more efficient and user-friendly. Its comprehensive reporting gives us valuable insights and supports better investment decisions.",
    name: "Hafiz A.",
    title: "Shared Services Administrator, Saudi Arabia",
  },
  {
    quote:
      "Investera has streamlined my day-to-day portfolio management and saved considerable time. The responsive support and strong data security provide additional confidence.",
    name: "Joseph",
    title: "Head of Investment, Singapore",
  },
  {
    quote:
      "The platform is easy to use, supports multiple asset classes, and is backed by a helpful support team. We have relied on it for more than two years.",
    name: "Uday",
    title: "Analyst, UAE",
  },
  {
    quote:
      "Investera has become an important asset for our investment team. Its customization, integration, portfolio monitoring, and risk assessment capabilities address our core business requirements.",
    name: "Omar",
    title: "CFO, UAE",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#CCA400" aria-hidden>
          <path d="M8 1.2 9.9 5.3l4.5.4-3.4 2.9 1 4.4L8 11.2 3.9 13l1-4.4L1.6 5.7l4.5-.4L8 1.2Z" />
        </svg>
      ))}
    </div>
  );
}

function PaginationDots({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-2">
      {testimonials.map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Go to testimonial ${index + 1}`}
          onClick={() => onSelect(index)}
          className={`h-1.5 w-1.5 rounded-full transition-colors ${
            index === active ? "bg-[#64748B]" : "bg-[#CBD5E1]"
          }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = testimonials[active];

  useEffect(() => {
    if (paused) return undefined;
    const id = window.setInterval(() => {
      setActive((index) => (index + 1) % testimonials.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [paused, active]);

  const goTo = (index: number) => {
    const next = (index + testimonials.length) % testimonials.length;
    setActive(next);
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-[34px] font-normal leading-[1.2] tracking-[-0.02em] sm:text-[40px]">
            <span className="font-normal text-[#1a1a1a]">Real Outcomes with </span>
            <span className="heading-accent text-[#0c2d57]">Investera Pro</span>
          </h2>
          <p className="mt-3 text-[16px] text-[#64748B] sm:text-[18px]">
            You don&apos;t have to trust our word
          </p>
        </motion.div>

        <div className="mx-auto mt-10 max-w-[820px] sm:mt-12">
          <PaginationDots active={active} onSelect={setActive} />

          <div
            className="relative mt-6 flex items-center gap-3 sm:mt-8 sm:gap-5"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => goTo(active - 1)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#64748B] shadow-[0_6px_20px_rgba(12,45,87,0.10)] transition-transform hover:scale-105 sm:h-11 sm:w-11"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
                aria-hidden
              >
                <path
                  d="M15 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="relative min-h-[240px] flex-1 overflow-hidden rounded-[20px] bg-white px-7 py-8 shadow-[0_16px_40px_rgba(12,45,87,0.08)] sm:min-h-[260px] sm:px-10 sm:py-9 lg:rounded-[24px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex min-h-[176px] flex-col sm:min-h-[196px]"
                >
                  <p className="text-[18px] font-semibold leading-[1.45] tracking-[-0.01em] text-[#0c2d57] sm:text-[20px] lg:text-[22px]">
                    &ldquo;{current.quote}&rdquo;
                  </p>

                  <div className="mt-auto flex items-end justify-between gap-4 pt-8">
                    <div>
                      <p className="text-[15px] font-bold text-[#0c2d57] sm:text-[16px]">
                        {current.name}
                      </p>
                      <p className="mt-0.5 text-[13px] text-[#64748B] sm:text-[14px]">
                        {current.title}
                      </p>
                    </div>
                    <Stars />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => goTo(active + 1)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#64748B] shadow-[0_6px_20px_rgba(12,45,87,0.10)] transition-transform hover:scale-105 sm:h-11 sm:w-11"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
                aria-hidden
              >
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="mt-6 sm:mt-8">
            <PaginationDots active={active} onSelect={setActive} />
          </div>
        </div>
      </div>
    </section>
  );
}
