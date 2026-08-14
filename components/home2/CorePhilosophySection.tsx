"use client";

import { motion } from "framer-motion";

const barSets = [
  { dark: 55, light: 38, label: "2 Apr" },
  { dark: 78, light: 52, label: "9 Apr" },
  { dark: 48, light: 70, label: "16 Apr" },
  { dark: 88, light: 60, label: "23 Apr" },
];

const growthPoints = "4,42 28,36 52,48 76,28 100,34 124,18 148,24 172,12";

export default function CorePhilosophySection() {
  return (
    <section id="platform" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-10 lg:px-16">
        {/* Left copy */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-[660px]"
        >
          <h2 className="text-[40px] font-normal leading-[1.15] tracking-[-0.02em] text-[#111111]">
            Comprehensive
            <br />
            Investment{" "}
            <span className="font-bold text-[#143F73]">Management Across</span>
            <br />
            <span className="font-bold text-[#143F73]">
              the Complete Investment Lifecycle
            </span>
          </h2>

          <p className="mt-6 text-[16px] leading-[1.3] text-[#1f1f1f]">
            Manage diverse asset classes, portfolios, transactions, valuations,
            and performance through one centralized platform designed for greater
            visibility and control.
          </p>
        </motion.div>

        {/* Right dashboard composition */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          {/* Soft glow panel */}
          <div className="relative overflow-hidden rounded-[28px] bg-[#EAF2FF] px-5 py-8 sm:px-8 sm:py-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_45%,rgba(120,90,255,0.28),transparent_55%),radial-gradient(ellipse_at_35%_70%,rgba(56,189,248,0.35),transparent_50%),radial-gradient(ellipse_at_75%_75%,rgba(74,222,128,0.22),transparent_45%)]"
            />

            <div className="relative grid grid-cols-[0.85fr_1.15fr] gap-3 sm:gap-4">
              {/* 95% card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="flex h-fit items-center gap-3 self-start rounded-2xl bg-white px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#2F6FE4] text-white">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path
                      d="M7 11V3M7 3L3.5 6.5M7 3L10.5 6.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-[28px] font-semibold leading-none tracking-[-0.03em] text-[#111111]">
                  95%
                </span>
              </motion.div>

              {/* Unique visitors card */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.28 }}
                className="row-span-2 rounded-2xl bg-white p-4 shadow-[0_14px_34px_rgba(15,23,42,0.1)] sm:p-5"
              >
                <p className="text-[13px] font-medium text-[#6B7280]">Unique visitors</p>
                <div className="mt-2 flex items-end gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[34px] font-semibold leading-none tracking-[-0.03em] text-[#111111]">
                      25.7K
                    </span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                      <path
                        d="M3 9.5L7 4.5L11 9.5"
                        stroke="#111111"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="mb-1 text-[12px] text-[#9CA3AF]">860+ Visitor</span>
                </div>

                <div className="mt-5 flex h-[88px] items-end gap-3 sm:h-[100px]">
                  {barSets.map((bar, index) => (
                    <div key={bar.label} className="flex flex-1 flex-col items-center gap-2">
                      <div className="flex h-[72px] w-full items-end justify-center gap-1 sm:h-[84px]">
                        <motion.div
                          className="w-[45%] origin-bottom rounded-t-[3px] bg-[#374151]"
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.4 + index * 0.08, ease: "easeOut" }}
                          style={{ height: `${bar.dark}%` }}
                        />
                        <motion.div
                          className="w-[45%] origin-bottom rounded-t-[3px] bg-[#D1D5DB]"
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.48 + index * 0.08, ease: "easeOut" }}
                          style={{ height: `${bar.light}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-[#9CA3AF]">{bar.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Company Growth card */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.36 }}
                className="rounded-2xl bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
              >
                <p className="text-[13px] font-medium text-[#6B7280]">Company Growth</p>
                <div className="relative mt-3 h-[88px]">
                  <svg viewBox="0 0 180 70" className="h-full w-full overflow-visible">
                    <line x1="8" y1="62" x2="172" y2="62" stroke="#E5E7EB" strokeWidth="1" />
                    <line x1="8" y1="8" x2="8" y2="62" stroke="#E5E7EB" strokeWidth="1" />
                    <motion.polyline
                      fill="none"
                      stroke="#111111"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points={growthPoints}
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.45, ease: "easeOut" }}
                    />
                    <motion.circle
                      cx="124"
                      cy="18"
                      r="3.5"
                      fill="#111111"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 1.2 }}
                    />
                    <motion.rect
                      x="108"
                      y="2"
                      width="28"
                      height="12"
                      rx="2"
                      fill="#111111"
                      initial={{ opacity: 0, y: 4 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 1.25 }}
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Score card */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.42 }}
                className="col-span-2 flex items-center gap-4 rounded-2xl bg-white px-4 py-3.5 shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:gap-5 sm:px-5"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2F6FE4] text-[18px] font-semibold text-white">
                  9.8
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                  <motion.div
                    className="h-2.5 origin-left rounded-full bg-[#E5E7EB]"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
                    style={{ width: "88%" }}
                  />
                  <motion.div
                    className="h-2.5 origin-left rounded-full bg-[#E5E7EB]"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
                    style={{ width: "68%" }}
                  />
                </div>
                <span className="shrink-0 text-[18px] font-semibold text-[#22C55E]">+ 72%</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
