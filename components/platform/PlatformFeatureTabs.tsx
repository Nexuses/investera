"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const tabs = [
  {
    label: "Market Intelligence",
    titleLines: ["Understand Markets", "Through Your Portfolio"],
    description:
      "Bring market developments, global news, financial reports, and investment signals into one connected view. Investera helps you understand how external market changes impact your holdings and identify areas that may require attention.",
    points: [
      "Monitor Live Market Data",
      "Stay Updated with Global Insights",
      "Identify Emerging Trends",
    ],
    image: "/images/investera-pro/pipeline-dashboard.png",
    imageAlt: "Market intelligence dashboard",
    panel: "#E9F2FE",
  },
  {
    label: "Investments Hub",
    titleLines: ["Manage All Investments", "in One Connected View"],
    description:
      "Bring diverse investment categories into a unified portfolio hub. Monitor portfolio value, asset allocation, performance, and exposure across treasury, capital markets, real estate, private equity, commodities, and other investments from a single platform.",
    points: [
      "Track Account Performance",
      "Review AUM Growth Trends",
      "Analyze Portfolio Allocation",
    ],
    image: "/images/features/reporting-dashboard.png",
    imageAlt: "Investments hub dashboard",
    panel: "#EDE7F6",
  },
  {
    label: "Treasury Exposure",
    titleLines: ["Monitor Currency Exposure", "and Treasury Performance"],
    description:
      "Gain visibility into treasury holdings and foreign exchange movements through a connected dashboard. Track currency allocation, balances, FX trends, and treasury AUM to understand portfolio-level currency exposure.",
    points: [
      "Track Currency Holdings",
      "Monitor FX Movements",
      "Analyze Treasury AUM Trends",
    ],
    image: "/images/features/document-management.png",
    imageAlt: "Treasury and currency exposure dashboard",
    panel: "#E8F5E9",
  },
  {
    label: "Opportunities Module",
    titleLines: ["Manage Investment", "Opportunities Seamlessly"],
    description:
      "Streamline opportunity management with a connected workspace for tracking potential investments, approvals, and deal progress. Keep teams aligned with clear visibility across the investment pipeline.",
    points: [
      "Visualize Deal Flow",
      "Track Approval Progress",
      "Align Stakeholder Decisions",
    ],
    image: "/images/features/governance-dashboard.png",
    imageAlt: "Investment opportunities pipeline",
    panel: "#FFF3DF",
  },
  {
    label: "AI Investment Assistant",
    titleLines: ["Make Smarter Decisions", "with AI Insights"],
    description:
      "Interact with your investment data using natural language and receive actionable insights from connected portfolio information. Simplify analysis, uncover trends, and accelerate investment decision-making.",
    points: [
      "Summarize Investment Insights",
      "Explore Portfolio Trends",
      "Identify Key Observations",
    ],
    image:
      "https://investera.s3.us-east-2.amazonaws.com/Frame_2147255962_1786621365117_aae9.png",
    imageAlt: "AI investment assistant insights",
    panel: "#E3F2FD",
  },
];

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden
      className="mt-[2px] shrink-0"
    >
      <circle cx="9" cy="9" r="9" fill="#2F6FE4" />
      <path
        d="M5.5 9.2L7.7 11.4L12.5 6.6"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PlatformFeatureTabs() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <div className="overflow-x-auto border-b border-[#E5E7EB]">
          <div className="flex min-w-full items-end justify-center gap-7 lg:gap-10">
            {tabs.map((item, index) => {
              const isActive = index === active;
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`relative whitespace-nowrap pb-4 text-[15px] leading-[1.3] transition-colors ${
                    isActive
                      ? "font-medium text-[#1a1a1a]"
                      : "font-normal text-[#6B7280] hover:text-[#344054]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-px h-[2px] bg-[#1a1a1a]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <FadeIn className="mt-12 grid items-center gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-[560px]">
            <h2 className="text-[32px] font-normal leading-tight tracking-[-0.02em] sm:text-[40px]">
              <span className="font-normal text-[#1a1a1a]">{tab.titleLines[0]}</span>
              <br />
              <span className="font-bold text-[#0c2d57]">{tab.titleLines[1]}</span>
            </h2>
            <p className="mt-5 text-[16px] leading-[1.3] text-[#4B5563] sm:mt-6">
              {tab.description}
            </p>
            <ul className="mt-6 space-y-3">
              {tab.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-[16px] leading-[1.3] text-[#0c2d57]"
                >
                  <CheckIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#CCA400] px-7 py-3 text-[15px] font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Discover More
            </Link>
          </div>

          <div
            className="flex min-h-[320px] items-center justify-center overflow-hidden rounded-[24px] px-6 py-8 sm:min-h-[400px] sm:px-10 sm:py-10 lg:min-h-[460px]"
            style={{ backgroundColor: tab.panel }}
          >
            <Image
              src={tab.image}
              alt={tab.imageAlt}
              width={900}
              height={640}
              unoptimized
              className="h-auto w-full max-w-[520px] object-contain"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
