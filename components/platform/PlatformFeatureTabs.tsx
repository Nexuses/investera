"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

type FeatureTab = {
  label: string;
  titleLines: [string, string];
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
  panel: string;
  align?: "center" | "inset" | "corner" | "bottom" | "middle";
  overlay?: { src: string; alt: string; className?: string; imageClassName?: string };
  floaters?: { src: string; alt: string; className?: string }[];
  flipFloaters?: boolean;
  shift?: string;
  imageShift?: string;
  panelHeight?: string;
};

const tabs: FeatureTab[] = [
  {
    label: "See the Full Picture",
    titleLines: ["See the Full", "Investment Picture"],
    description:
      "Replace scattered reports with a centralised dashboard to track AUM, portfolio growth, allocations, investment activity, and insights in one view.",
    points: [
      "Centralise AUM & Growth",
      "Track Allocations & Activity",
      "Unify Insights in One View",
    ],
    image: "/images/platform/dash-1.png",
    imageAlt: "Investera dashboard with total assets under management",
    panel: "#BEDBFF",
    align: "bottom" as const,
  },
  {
    label: "Portfolio Performance",
    titleLines: ["Track Portfolio", "Performance Clearly"],
    description:
      "Track total assets, portfolio growth, allocation, and performance through clear, interactive dashboards.",
    points: [
      "Monitor Total Assets & AUM",
      "Track Portfolio Growth Trends",
      "Review Allocation Dashboards",
    ],
    image:
      "https://investera.s3.us-east-2.amazonaws.com/Portfolio_Performance_01_1791873662622_sv0o.png",
    imageAlt: "Live FX and treasury AUM trend chart",
    panel: "#E9F2FE",
    align: "middle" as const,
    overlay: {
      src: "https://investera.s3.us-east-2.amazonaws.com/Portfolio_Performance_02_1791874138894_gtxh.png",
      alt: "Currency allocation of treasury holdings",
      className: "left-[-7%] top-1/2 w-full -translate-y-1/2",
    },
    floaters: [
      {
        src: "/images/platform/asset-1.png",
        alt: "Treasury holding, AED 126.33M",
      },
      {
        src: "/images/platform/asset-2.png",
        alt: "Real Estate holding, AED 333.01M",
      },
      {
        src: "/images/platform/asset-3.png",
        alt: "Capital Markets holding, AED 927.39M",
      },
    ],
    flipFloaters: true,
  },
  {
    label: "Market Intelligence",
    titleLines: ["Understand Markets", "Through Your Portfolio"],
    description:
      "Access relevant market data, global news, financial information, and macro signals alongside your portfolio. Investera helps you understand how external market changes impact your holdings and identify areas that may require attention.",
    points: [
      "Monitor Live Market Data",
      "Stay Updated with Global Insights",
      "Identify Emerging Trends",
    ],
    image: "/images/platform/market.png",
    imageAlt: "Market Intelligence dashboard with live prices and global news",
    panel: "#E9F2FE",
    align: "center" as const,
    overlay: {
      src: "https://investera.s3.us-east-2.amazonaws.com/Market_Intelligence_02_1791874138894_hsix.png",
      alt: "Asset allocation across sectors",
      className: "left-0 top-0 w-full",
    },
  },
  {
    label: "Opportunities Module",
    titleLines: ["Manage Investment", "Opportunities Seamlessly"],
    description:
      "Streamline opportunity management with a connected workspace for tracking potential investments, approvals, and deal progress. Keep teams aligned with clear visibility across the investment pipeline.",
    points: [
      "Visualise Deal Flow",
      "Track Approval Progress",
      "Align Stakeholder Decisions",
    ],
    image:
      "https://investera.s3.us-east-2.amazonaws.com/Opportunities_01_1791873662622_lin2.png",
    imageAlt: "Opportunities pipeline board with deals by stage",
    panel: "#FFF3DF",
    align: "center" as const,
    overlay: {
      src: "https://investera.s3.us-east-2.amazonaws.com/Opportunities_02_1791874138895_25pj.png",
      alt: "Total deals value and average deal size",
      className: "left-0 top-0 w-full",
    },
  },
  {
    label: "AI Investment Assistant",
    titleLines: ["Make Smarter Decisions", "with AI Insights"],
    description:
      "Interact with your investment data using natural language and receive actionable insights from connected portfolio information. Simplify analysis, uncover trends, and accelerate investment decision-making.",
    points: [
      "Summarise Investment Insights",
      "Explore Portfolio Trends",
      "Identify Key Observations",
    ],
    image:
      "https://investera.s3.us-east-2.amazonaws.com/kjsbcjsad_1786708161223_hs74.png",
    imageAlt: "AI investment assistant insights",
    panel: "#E3F2FD",
    align: "center" as const,
    shift: "translate-x-10",
    overlay: {
      src: "https://investera.s3.us-east-2.amazonaws.com/Ai_Chant21313_1786708334695_gup8.png",
      alt: "AI assistant sector distribution reply",
      className: "left-[-22%] top-[8%] w-[95%] sm:left-[-26%] sm:top-[6%] sm:w-[90%]",
    },
  },
  {
    label: "Investments Hub",
    titleLines: ["Manage All Investments", "in One Connected View"],
    description:
      "Bring diverse investment categories into a unified portfolio hub. Monitor portfolio value, asset allocation, performance, and exposure across treasury, capital markets, real estate, private equity, commodities, and other investments from a single platform.",
    points: [
      "Track Account Performance",
      "Review AUM Growth Trends",
      "Analyse Portfolio Allocation",
    ],
    image:
      "https://investera.s3.us-east-2.amazonaws.com/ChatGPT_Image_Aug_14__2026__10_23_28_AM_2_1786698329768_pfl6.png",
    imageAlt: "Investments hub dashboard",
    panel: "#FFF3DF",
    align: "center" as const,
  },
  {
    label: "Treasury Exposure",
    titleLines: ["Monitor Currency Exposure", "and Treasury Performance"],
    description:
      "Gain visibility into treasury holdings and foreign exchange movements through a connected dashboard. Track currency allocation, balances, FX trends, and treasury AUM to understand portfolio-level currency exposure.",
    points: [
      "Track Currency Holdings",
      "Monitor FX Movements",
      "Analyse Treasury AUM Trends",
    ],
    image:
      "https://investera.s3.us-east-2.amazonaws.com/Group_1000004877dfbd_1786704372324_8rqp.png",
    imageAlt: "Treasury and currency exposure dashboard",
    panel: "#BEDBFF",
    align: "inset" as const,
    overlay: {
      src: "https://investera.s3.us-east-2.amazonaws.com/Group_1000004877sdf_1786704530103_wojw.png",
      alt: "Currency breakdown table",
    },
  },
  {
    label: "AI-Powered Insights",
    titleLines: ["Uncover Insights", "with AI Assistance"],
    description:
      "Ask investment questions, summarise deal metrics, and explore portfolio trends through an intuitive AI assistant.",
    points: [
      "Ask Investment Questions",
      "Summarise Deal Metrics",
      "Explore Portfolio Trends",
    ],
    image:
      "https://investera.s3.us-east-2.amazonaws.com/image__81__1791900860797_djca.png",
    imageAlt: "AI investment assistant",
    panel: "#E3F2FD",
    align: "center" as const,
    imageShift: "translate-x-16 sm:translate-x-28 rounded-[16px]",
    overlay: {
      src: "https://investera.s3.us-east-2.amazonaws.com/image__79__1791900318439_hxe1.png",
      alt: "AI assistant answer for the current total AUM",
      className: "left-[-30%] top-[22%] w-[92%] sm:left-[-40%] sm:top-[18%] sm:w-[88%]",
      imageClassName: "rounded-[16px]",
    },
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

function panelClassFor(tab: FeatureTab) {
  const height =
    tab.panelHeight ??
    (tab.align === "inset"
      ? "h-[320px] sm:h-[400px] lg:h-[460px]"
      : "h-[200px] sm:h-[280px] lg:h-[340px]");
  const base = `flex rounded-[24px] ${height}`;
  switch (tab.align) {
    case "center":
      return `${base} items-end justify-center px-6 pt-6 sm:px-8 sm:pt-8 ${
        tab.overlay ? "overflow-visible" : "overflow-hidden"
      }`;
    case "inset":
      return `${base} items-center justify-center overflow-visible p-5`;
    case "bottom":
      return `${base} items-end justify-center overflow-hidden px-[30px]`;
    case "middle":
      return `${base} items-center justify-center overflow-hidden`;
    case "corner":
      return `${base} items-end justify-end overflow-hidden`;
    default:
      return `${base} items-end justify-end overflow-hidden pl-6 pt-8 sm:pl-10 sm:pt-10`;
  }
}

const overlayFloat = {
  duration: 4.4,
  repeat: Infinity,
  ease: "easeInOut" as const,
  delay: 0.35,
};

function FlippingAssetCards({
  cards,
}: {
  cards: NonNullable<FeatureTab["floaters"]>;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % cards.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [cards.length]);

  const card = cards[index];

  return (
    <div className="pointer-events-none absolute right-[4%] top-1/2 z-20 w-[44%] -translate-y-1/2">
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={overlayFloat}
      >
        <div className="[perspective:900px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={card.src}
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 90, opacity: 0 }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src={card.src}
                alt={card.alt}
                width={330}
                height={190}
                className="h-auto w-full drop-shadow-[0_16px_28px_rgba(12,45,87,0.28)]"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

function FeaturePanel({ tab }: { tab: FeatureTab }) {
  return (
    <div
      className={`${panelClassFor(tab)} ${tab.floaters ? "relative" : ""}`}
      style={{ backgroundColor: tab.panel }}
    >
      <div
        className={
          tab.align === "center"
            ? `relative flex h-full w-full max-w-[90%] items-end justify-center ${tab.shift ?? ""}`
            : tab.align === "bottom"
              ? `relative flex h-full w-full items-end justify-center ${tab.shift ?? ""}`
              : tab.align === "middle"
                ? `relative flex h-full w-full items-center justify-center ${tab.shift ?? ""}`
                : `relative flex h-full w-full items-end justify-end ${tab.shift ?? ""}`
        }
      >
        <motion.div
          className={`relative flex h-full max-h-full ${
            tab.align === "middle" ? "items-center justify-center" : "items-end"
          } ${
            tab.align === "corner"
              ? "w-full justify-end"
              : tab.align === "bottom"
                ? "h-full w-full items-end justify-center"
                : tab.align === "middle"
                  ? ""
                  : tab.align === "center" || tab.align === "inset"
                    ? "justify-center"
                    : "justify-end"
          }`}
          animate={tab.align === "inset" ? { y: [0, -10, 0] } : undefined}
          transition={
            tab.align === "inset"
              ? { duration: 5.2, repeat: Infinity, ease: "easeInOut" }
              : undefined
          }
        >
          <Image
            src={tab.image}
            alt={tab.imageAlt}
            width={900}
            height={640}
            className={`max-h-full max-w-full object-contain ${
              tab.align === "corner"
                ? "h-full w-full object-right-bottom drop-shadow-[0_24px_50px_rgba(12,45,87,0.28)]"
                : tab.align === "bottom"
                  ? "h-full w-full object-contain object-bottom drop-shadow-[0_24px_50px_rgba(12,45,87,0.28)]"
                  : tab.align === "middle"
                    ? "h-auto max-h-full w-auto object-center"
                    : "h-full w-auto object-bottom"
            } ${
              tab.align === "inset"
                ? "drop-shadow-[0_24px_50px_rgba(12,45,87,0.28)]"
                : ""
            } ${tab.imageShift ?? ""}`}
          />
          {tab.overlay ? (
            <motion.div
              className={`pointer-events-none absolute z-10 ${
                tab.overlay.className ??
                "right-0 top-[22%] w-[58%] sm:top-[20%] sm:w-[54%]"
              }`}
              animate={{ y: [0, -14, 0] }}
              transition={overlayFloat}
            >
              <Image
                src={tab.overlay.src}
                alt={tab.overlay.alt}
                width={720}
                height={420}
                className={`h-auto w-full drop-shadow-[0_28px_55px_rgba(5,11,31,0.42)] ${tab.overlay.imageClassName ?? ""}`}
              />
            </motion.div>
          ) : null}
        </motion.div>
      </div>
      {tab.flipFloaters && tab.floaters ? (
        <FlippingAssetCards cards={tab.floaters} />
      ) : tab.floaters ? (
        <div className="pointer-events-none absolute inset-0">
          {tab.floaters.map((floater) => (
            <div key={floater.src} className={`absolute ${floater.className ?? ""}`}>
              <Image
                src={floater.src}
                alt={floater.alt}
                width={330}
                height={190}
                className="h-auto w-full drop-shadow-[0_16px_28px_rgba(12,45,87,0.28)]"
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function PlatformFeatureTabs() {
  const visibleTabs = tabs.slice(0, 5);
  const [active, setActive] = useState(0);
  const tab = visibleTabs[active];

  return (
    <section id="platform-features" className="relative overflow-x-clip bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-16">
        <h2 className="text-center text-[32px] font-normal leading-[1.15] tracking-[-0.02em] text-[#111111] sm:text-[40px]">
          One Platform for{" "}
          <span className="heading-accent text-[#0c2d57]">
            Smarter Investment Management
          </span>
        </h2>

        <div
          role="tablist"
          aria-label="Platform features"
          className="mx-auto mt-8 flex max-w-[1100px] flex-wrap justify-center gap-2 sm:mt-10"
        >
          {visibleTabs.map((item, index) => {
            const selected = index === active;
            return (
              <button
                key={item.label}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(index)}
                className={`rounded-full px-4 py-2.5 text-[13px] font-semibold transition-colors sm:px-5 sm:text-[14px] ${
                  selected
                    ? "bg-[#0c2d57] text-white"
                    : "bg-[#F3F6FB] text-[#0c2d57] hover:bg-[#E6EEF8]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab.label}
            role="tabpanel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mt-12 grid items-center gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16"
          >
            <div className="mx-auto max-w-[560px] text-center lg:mx-0 lg:text-left">
              <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#2F6FE4]">
                {tab.label}
              </p>
              <h3 className="mt-3 text-[32px] font-normal leading-tight tracking-[-0.02em] sm:text-[40px]">
                <span className="font-normal text-[#1a1a1a]">{tab.titleLines[0]}</span>
                <br />
                <span className="heading-accent text-[#0c2d57]">{tab.titleLines[1]}</span>
              </h3>
              <p className="mt-5 text-[16px] leading-[1.3] text-[#4B5563] sm:mt-6">
                {tab.description}
              </p>
              <ul className="mt-6 inline-flex flex-col items-center space-y-3 lg:items-start">
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
              <div className="mt-8 flex justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#CCA400] px-7 py-3 text-[15px] font-semibold text-white transition-transform hover:scale-[1.03]"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <FeaturePanel tab={tab} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
