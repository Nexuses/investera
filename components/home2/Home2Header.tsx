"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function AssetAllocationCard() {
  return (
    <motion.div
      className="relative w-[195px] overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_rgba(20,10,60,0.28)] sm:w-[225px]"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
    >
      <Image
        src="/images/home-2/card-allocation.png"
        alt="Total Asset Allocation chart"
        width={600}
        height={520}
        unoptimized
        className="h-auto w-full"
      />

      {/* Pie/donut draw-in overlay */}
      <svg
        viewBox="0 0 120 120"
        className="pointer-events-none absolute left-1/2 top-[38%] h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 -rotate-90"
        aria-hidden
      >
        {[
          { color: "#0c2d57", len: 72, delay: 0.35 },
          { color: "#CBA400", len: 113, delay: 0.5 },
          { color: "#1F6F6A", len: 85, delay: 0.65 },
          { color: "#6B7C93", len: 44, delay: 0.8 },
        ].map((seg, index) => (
          <motion.circle
            key={seg.color}
            cx="60"
            cy="60"
            r="36"
            fill="none"
            stroke={seg.color}
            strokeWidth="14"
            strokeDasharray={`${seg.len} 314`}
            strokeDashoffset={-[0, 72, 185, 270][index]}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.55, 0] }}
            transition={{ duration: 1.1, delay: seg.delay, ease: "easeOut" }}
          />
        ))}
      </svg>

      {/* Circular reveal sweep */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[38%] h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#CBA400]/50"
        initial={{ scale: 0.4, opacity: 0, rotate: -40 }}
        animate={{ scale: 1.05, opacity: [0, 0.8, 0], rotate: 50 }}
        transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
      />
    </motion.div>
  );
}

function GainersCard() {
  const bars = [100, 78, 28, 16, 14];

  return (
    <motion.div
      className="relative w-[210px] overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_rgba(20,10,60,0.28)] sm:w-[240px]"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
    >
      <motion.div
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        animate={{ clipPath: "inset(0% 0 0 0)" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      >
        <Image
          src="/images/home-2/card-gainers.png"
          alt="Top 5 Gainers and Top 5 Losers chart"
          width={640}
          height={480}
          unoptimized
          className="h-auto w-full"
        />
      </motion.div>

      {/* Staggered bar grow accents */}
      <div className="pointer-events-none absolute bottom-[18%] left-[10%] right-[8%] flex h-[48%] items-end justify-between gap-[4%]">
        {bars.map((height, index) => (
          <motion.div
            key={`${height}-${index}`}
            className="flex-1 origin-bottom rounded-t-md bg-[#3d4454]/35"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: [0, 0.5, 0] }}
            transition={{
              duration: 0.85,
              delay: 0.65 + index * 0.1,
              ease: "easeOut",
            }}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Home2Header() {
  return (
    <section className="mx-auto max-w-[1440px] bg-white px-1 pb-3 pt-3 sm:pb-4 sm:pt-4 lg:px-[44px] lg:pb-5">
      <div className="home2-hero relative h-[580px] overflow-hidden rounded-[20px] border-2 border-white">
        {/* Hero background image */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/home-2/hero-bg.png')",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto h-full max-w-[1240px] px-[60px]">
          {/* Hero composition */}
          <div className="relative flex h-full items-center justify-center py-8">
            {/* Left floating card — asset allocation */}
            <motion.div
              initial={{ opacity: 0, y: 40, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              className="absolute left-0 top-[calc(12%+40px)] hidden xl:block"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <AssetAllocationCard />
              </motion.div>
            </motion.div>

            {/* Right floating card — top gainers */}
            <motion.div
              initial={{ opacity: 0, y: 40, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
              className="absolute right-0 top-[calc(18%+40px)] hidden xl:block"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
              >
                <GainersCard />
              </motion.div>
            </motion.div>

            {/* Center copy */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mx-auto max-w-[720px] text-center"
            >
              <h1 className="text-[55px] font-normal leading-[1.15] tracking-[-0.01em] text-[#0c2d57]">
                Innovating Finance,
                <br />
                <span className="heading-accent">Empowering Success</span>
              </h1>

              <p className="mx-auto mt-6 max-w-[560px] text-[18px] leading-[1.75] text-[#64748b]">
                Discover a suite of smart financial tools designed to streamline
                your operations, optimize cash flow, and drive better
                decision-making.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="#insights"
                  className="rounded-lg bg-[#CBA400] px-7 py-3.5 text-[13px] font-bold tracking-[0.08em] text-white transition-transform hover:scale-[1.03]"
                >
                  Gain Insights
                </Link>
                <Link
                  href="#options"
                  className="rounded-lg border border-[#143F73] bg-transparent px-7 py-3.5 text-[13px] font-bold tracking-[0.08em] text-[#143F73] transition-transform hover:scale-[1.03]"
                >
                  Explore Options
                </Link>
              </div>
            </motion.div>

            {/* Mobile / tablet floating cards */}
            <div className="absolute inset-x-0 bottom-4 flex justify-center gap-3 xl:hidden">
              <div className="origin-bottom scale-[0.55] sm:scale-[0.7]">
                <AssetAllocationCard />
              </div>
              <div className="hidden origin-bottom scale-[0.7] sm:block">
                <GainersCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
