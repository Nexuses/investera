"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Investera Pro helped save significant time in day-to-day work, improve the handling of investment data and reports, provide responsive support, and enhance confidence in data security.",
    name: "Sophie",
    title: "Head of Investment",
    avatar: "/images/about/testimonials/helen.png",
  },
  {
    quote:
      "Investera Pro helped save significant time in day-to-day work, improve the handling of investment data and reports, provide responsive support, and enhance confidence in data security.",
    name: "Sophie",
    title: "Head of Investment",
    avatar: "/images/about/testimonials/helen.png",
  },
  {
    quote:
      "Investera Pro helped save significant time in day-to-day work, improve the handling of investment data and reports, provide responsive support, and enhance confidence in data security.",
    name: "Sophie",
    title: "Head of Investment",
    avatar: "/images/about/testimonials/helen.png",
  },
];

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
  const current = testimonials[active];

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
            <span className="font-bold text-[#0c2d57]">Investera Pro</span>
          </h2>
          <p className="mt-3 text-[16px] text-[#64748B] sm:text-[18px]">
            You don&apos;t have to trust our word
          </p>
        </motion.div>

        <div className="mx-auto mt-10 max-w-[820px] sm:mt-12">
          <PaginationDots active={active} onSelect={setActive} />

          <div className="relative mt-6 flex items-center gap-3 sm:mt-8 sm:gap-5">
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

            <div className="relative min-h-[240px] flex-1 overflow-hidden rounded-[20px] bg-white px-7 py-8 shadow-[0_16px_40px_rgba(12,45,87,0.08)] sm:min-h-[220px] sm:px-10 sm:py-9 lg:rounded-[24px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <p className="text-[18px] font-semibold leading-[1.45] tracking-[-0.01em] text-[#0c2d57] sm:text-[20px] lg:text-[22px]">
                    &ldquo;{current.quote}&rdquo;
                  </p>

                  <div className="mt-8 flex items-center gap-3">
                    <div className="relative h-11 w-11 overflow-hidden rounded-full sm:h-12 sm:w-12">
                      <Image
                        src={current.avatar}
                        alt={current.name}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[15px] font-bold text-[#0c2d57] sm:text-[16px]">
                        {current.name}
                      </p>
                      <p className="mt-0.5 text-[13px] text-[#64748B] sm:text-[14px]">
                        {current.title}
                      </p>
                    </div>
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
