"use client";

import Image from "next/image";
import { useState } from "react";

const features = [
  {
    icon: "/images/investment/icon-private.png",
    label: "Private Investments",
    color: "#3d9a8f",
    description:
      "Manage private equity, real estate, and other private assets with centralized tracking of valuations, cash flows, and performance.",
  },
  {
    icon: "/images/investment/icon-public.png",
    label: "Public Investments",
    color: "#b86b4f",
    description:
      "Monitor listed securities, market valuations, transactions, and portfolio performance through a unified investment view.",
  },
  {
    icon: "/images/investment/icon-cash.png",
    label: "Cash Management",
    color: "#7a8fa8",
    description:
      "Track cash positions, inflows, outflows, and investment-related transactions for better liquidity visibility and control.",
  },
];

function ChevronDown({
  color,
  open,
}: {
  color: string;
  open: boolean;
}) {
  return (
    <span
      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      style={{ backgroundColor: `${color}22`, color }}
      aria-hidden="true"
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M3 4.5L6 7.5L9 4.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function FeatureTabs() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const openTab = (index: number) => {
    setOpenIndices((prev) => new Set(prev).add(index));
  };

  const closeTab = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      next.delete(index);
      return next;
    });
  };

  return (
    <div className="relative z-20 mt-10 rounded-2xl bg-white p-6 shadow-[0_8px_40px_rgba(0,0,0,0.18)] sm:p-8 lg:mt-20">
      <div className="flex flex-col gap-5">
        {features.map((feature, index) => {
          const expanded = openIndices.has(index);

          return (
            <div
              key={feature.label}
              className="flex flex-col"
              onMouseEnter={() => openTab(index)}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Image
                    src={feature.icon}
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11 shrink-0 rounded-xl object-cover"
                  />
                  <span
                    className="rounded-full px-4 py-1.5 text-[13px] font-medium text-white"
                    style={{ backgroundColor: feature.color }}
                  >
                    {feature.label}
                  </span>
                </div>
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-label={`${expanded ? "Collapse" : "Expand"} ${feature.label}`}
                  onClick={() => {
                    if (expanded) closeTab(index);
                    else openTab(index);
                  }}
                  className="cursor-pointer rounded-full transition-opacity hover:opacity-80"
                >
                  <ChevronDown color={feature.color} open={expanded} />
                </button>
              </div>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  expanded
                    ? "mt-3 grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-[13px] leading-relaxed text-[#64748b] sm:pl-[56px] sm:text-[14px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
