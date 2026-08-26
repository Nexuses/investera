"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

const steps = [
  {
    n: "Step One",
    title: "A 30-Minute Working Call",
    body: "We walk through your asset classes, entities, team structure and the systems you're replacing. You see the platform against your own scenario, not a generic demo script.",
    dur: "Same week, usually",
    side: "left" as const,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M8.2 4.4h2.1c.4 0 .7.3.8.6l.6 2.2c.1.3 0 .7-.2.9L9.8 9.8c1.1 2.1 2.9 3.9 5 5l1.7-1.7c.3-.3.6-.4.9-.2l2.2.6c.4.1.6.4.6.8v2.1c0 .5-.4.9-.9.9C11.4 17.3 6.7 12.6 6.7 5.3c0-.5.4-.9.9-.9Z"
          stroke="#2F6FE4"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    n: "Step Two",
    title: "A Written Proposal",
    body: "Licence, modules, integrations and implementation set out line by line, with the assumptions we priced against stated in full. Nothing conditional, nothing to uncover later.",
    dur: "Within 3 working days",
    side: "right" as const,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M6 3.8h7.2L18 8.6v11.2a1.6 1.6 0 0 1-1.6 1.6H6A1.6 1.6 0 0 1 4.4 19.8V5.4A1.6 1.6 0 0 1 6 3.8Z"
          stroke="#2F6FE4"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M13 4v5h5M8 13h7M8 16.5h5"
          stroke="#2F6FE4"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    n: "Step Three",
    title: "A Pilot On Your Data",
    body: "Before any commitment, we load a slice of your real portfolio so your team can judge the platform on their own numbers rather than on a sample dataset.",
    dur: "Optional, at no cost",
    side: "left" as const,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect
          x="3.4"
          y="4.4"
          width="17.2"
          height="15.2"
          rx="2.4"
          stroke="#2F6FE4"
          strokeWidth="1.6"
        />
        <path
          d="M7.2 15.2V11M12 15.2V8.4M16.8 15.2v-2.8"
          stroke="#2F6FE4"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

function TimelineCard({
  step,
  progress,
  appearAt,
}: {
  step: (typeof steps)[number];
  progress: MotionValue<number>;
  appearAt: number;
}) {
  const opacity = useTransform(
    progress,
    [appearAt - 0.02, appearAt + 0.03],
    [0, 1],
  );
  const x = useTransform(
    progress,
    [appearAt - 0.02, appearAt + 0.04],
    [step.side === "left" ? -40 : 40, 0],
  );
  const scale = useTransform(
    progress,
    [appearAt - 0.02, appearAt + 0.04],
    [0.96, 1],
  );
  const y = useTransform(
    progress,
    [appearAt - 0.02, appearAt + 0.04],
    [12, 0],
  );

  const isLeft = step.side === "left";

  return (
    <motion.article
      style={{ opacity, x, scale, y }}
      className={`relative w-full max-w-[520px] rounded-[24px] border border-[#DCEAF8] bg-gradient-to-br from-[#F4F9FF] via-white to-[#EAF3FC] p-5 shadow-[0_14px_36px_rgba(47,111,228,0.09)] sm:p-6 lg:max-w-[560px] ${
        isLeft
          ? "lg:mr-auto lg:pr-6 xl:pr-8"
          : "lg:ml-auto lg:pl-6 xl:pl-8"
      }`}
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F1FA]">
        {step.icon}
      </div>
      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#2F6FE4]">
        {step.n}
      </p>
      <h3 className="mt-2 text-[20px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#0c2d57] sm:text-[22px]">
        {step.title}
      </h3>
      <p className="mt-2.5 text-[16px] leading-[1.35] text-[#4B5563]">{step.body}</p>
      <p className="mt-3 text-[13px] font-medium text-[#6B7280]">● {step.dur}</p>
    </motion.article>
  );
}

function TimelineDot({
  progress,
  appearAt,
}: {
  progress: MotionValue<number>;
  appearAt: number;
}) {
  const opacity = useTransform(
    progress,
    [appearAt - 0.01, appearAt + 0.02],
    [0, 1],
  );
  const scale = useTransform(
    progress,
    [appearAt - 0.01, appearAt + 0.03],
    [0.3, 1],
  );

  return (
    <motion.span
      style={{ opacity, scale }}
      className="absolute left-1/2 top-0 z-20 h-4 w-4 -translate-x-1/2 rounded-full bg-[#2F6FE4] shadow-[0_0_0_6px_rgba(47,111,228,0.18)] lg:h-[18px] lg:w-[18px]"
      aria-hidden
    />
  );
}

export default function PricingTimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.55"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.25,
  });
  const lineScale = useTransform(progress, [0, 1], [0, 1]);

  // Dot/card reveal points along the scroll journey (earlier = faster feel)
  const thresholds = [0.02, 0.28, 0.55];

  return (
    <section
      id="process"
      className="scroll-mt-[90px] bg-white py-14 lg:py-16"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-[32px] font-normal leading-tight tracking-[-0.02em] text-[#111111] sm:text-[40px]">
            Exactly What Happens{" "}
            <span className="heading-accent text-[#0c2d57]">When You Book</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[66ch] text-[16px] leading-[1.45] text-[#4B5563] sm:text-[18px]">
            No discovery maze, no three-week qualification cycle. You&apos;ll
            have a number and a scope you can take to your board.
          </p>
        </div>

        <div ref={containerRef} className="relative mt-10 sm:mt-12 lg:mt-14">
          {/* Desktop center track */}
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-6 left-1/2 top-2 hidden w-px -translate-x-1/2 lg:block"
          >
            <div className="absolute inset-0 bg-[#D6E6F8]" />
            <motion.div
              className="absolute inset-x-0 top-0 origin-top bg-[#2F6FE4]"
              style={{ height: "100%", scaleY: lineScale }}
            />
          </div>

          {/* Mobile left track */}
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-6 left-[15px] top-2 w-px lg:hidden"
          >
            <div className="absolute inset-0 bg-[#D6E6F8]" />
            <motion.div
              className="absolute inset-x-0 top-0 origin-top bg-[#2F6FE4]"
              style={{ height: "100%", scaleY: lineScale }}
            />
          </div>

          <div className="relative flex flex-col gap-10 sm:gap-12 lg:gap-14">
            {steps.map((step, index) => {
              const appearAt = thresholds[index];
              const isLeft = step.side === "left";

              return (
                <div
                  key={step.n}
                  className="relative grid grid-cols-1 lg:grid-cols-2 lg:items-start"
                >
                  {/* Dot: mobile left, desktop center */}
                  <div className="absolute left-[15px] top-6 z-20 -translate-x-1/2 lg:left-1/2 lg:top-8">
                    <TimelineDot progress={progress} appearAt={appearAt} />
                  </div>

                  {/* Left column (desktop) */}
                  <div
                    className={`pl-10 lg:pl-0 ${
                      isLeft ? "lg:pr-10 xl:pr-14" : "hidden lg:block"
                    }`}
                  >
                    {isLeft ? (
                      <TimelineCard
                        step={step}
                        progress={progress}
                        appearAt={appearAt}
                      />
                    ) : null}
                  </div>

                  {/* Right column (desktop) / stacked (mobile for right cards) */}
                  <div
                    className={`${
                      isLeft
                        ? "hidden lg:block"
                        : "pl-10 lg:pl-10 xl:pl-14"
                    }`}
                  >
                    {!isLeft ? (
                      <TimelineCard
                        step={step}
                        progress={progress}
                        appearAt={appearAt}
                      />
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5 sm:mt-12 lg:mt-14">
          <Link
            href="/book-a-demo"
            className="inline-flex items-center justify-center rounded-full bg-[#CCA400] px-7 py-3 text-[14px] font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            Book a pricing call
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[#D1D5DB] bg-white px-7 py-3 text-[14px] font-semibold text-[#111111] transition-colors hover:border-[#9CA3AF] hover:bg-[#F9FAFB]"
          >
            Send a question instead
          </Link>
        </div>
      </div>
    </section>
  );
}
