"use client";

import { animate, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Exposure = {
  code: string;
  name: string;
  percent: number;
  amount: string;
  color: string;
};

// Portfolio split in base currency (USD); percentages sum to 100.
const EXPOSURES: Record<string, Exposure> = {
  USD: { code: "USD", name: "US Dollar", percent: 38, amount: "471.20M", color: "#22D3EE" },
  EUR: { code: "EUR", name: "Euro", percent: 18, amount: "223.20M", color: "#A78BFA" },
  AED: { code: "AED", name: "UAE Dirham", percent: 14, amount: "173.60M", color: "#34D399" },
  SAR: { code: "SAR", name: "Saudi Riyal", percent: 11, amount: "136.40M", color: "#FBBF24" },
  GBP: { code: "GBP", name: "British Pound", percent: 9, amount: "111.60M", color: "#F472B6" },
  KWD: { code: "KWD", name: "Kuwaiti Dinar", percent: 6, amount: "74.40M", color: "#60A5FA" },
  JPY: { code: "JPY", name: "Japanese Yen", percent: 4, amount: "49.60M", color: "#FB923C" },
};

const RADIUS = 40;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function CurrencyExposureCard({
  codes,
  intervalMs = 2800,
  startDelayMs = 0,
}: {
  codes: string[];
  intervalMs?: number;
  startDelayMs?: number;
}) {
  const items = codes.map((code) => EXPOSURES[code]).filter(Boolean);
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState(items[0]?.percent ?? 0);
  const current = items[index];

  useEffect(() => {
    if (items.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let interval: number | undefined;
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        setIndex((value) => (value + 1) % items.length);
      }, intervalMs);
    }, startDelayMs);

    return () => {
      window.clearTimeout(start);
      if (interval !== undefined) window.clearInterval(interval);
    };
  }, [items.length, intervalMs, startDelayMs]);

  useEffect(() => {
    if (!current) return;
    const controls = animate(displayed, current.percent, {
      duration: 0.8,
      ease: "easeOut",
      onUpdate: (value) => setDisplayed(Math.round(value)),
    });
    return () => controls.stop();
    // Only re-run when the active currency changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current?.code]);

  if (!current) return null;

  return (
    <div className="@container w-full">
      <div className="flex items-center gap-[7cqw] rounded-[7cqw] border border-white/10 bg-[#0B1220]/95 p-[6cqw] shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
        <div className="relative aspect-square w-[36cqw] shrink-0">
          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
            <circle
              cx="50"
              cy="50"
              r={RADIUS}
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="10"
            />
            <motion.circle
              cx="50"
              cy="50"
              r={RADIUS}
              fill="none"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              initial={false}
              animate={{
                stroke: current.color,
                strokeDashoffset: CIRCUMFERENCE * (1 - current.percent / 100),
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ filter: `drop-shadow(0 0 4px ${current.color})` }}
            />
          </svg>
          <motion.span
            className="absolute inset-0 flex items-center justify-center text-[10cqw] font-semibold"
            animate={{ color: current.color }}
            transition={{ duration: 0.8 }}
          >
            {displayed}%
          </motion.span>
        </div>

        <div className="min-w-0 flex-1">
          <motion.div
            key={current.code}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <p className="text-[9cqw] font-semibold leading-tight text-white">
              {current.code}
            </p>
            <p className="mt-[1cqw] truncate text-[5.2cqw] leading-tight text-white/55">
              {current.name}
            </p>
            <p className="mt-[1cqw] text-[5.2cqw] leading-tight text-white/75">
              USD {current.amount}
            </p>
          </motion.div>
          <div className="mt-[4cqw] flex gap-[1.8cqw]">
            {items.map((item, itemIndex) => (
              <span
                key={item.code}
                className="h-[2.2cqw] rounded-full transition-all duration-500"
                style={{
                  width: itemIndex === index ? "7cqw" : "2.2cqw",
                  backgroundColor:
                    itemIndex === index ? item.color : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
