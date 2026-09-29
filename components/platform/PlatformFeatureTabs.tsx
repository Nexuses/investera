"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

type FeatureTab = {
  label: string;
  titleLines: [string, string];
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
  panel: string;
  align?: "center" | "inset" | "corner";
  overlay?: { src: string; alt: string; className?: string };
  shift?: string;
};

const tabs: FeatureTab[] = [
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
    image:
      "https://investera.s3.us-east-2.amazonaws.com/Frame_ghk_1786626912728_a6v7.png",
    imageAlt: "Market intelligence trend chart",
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
      "https://investera.s3.us-east-2.amazonaws.com/Frame_2147255960345_1786705843268_rvjl.png",
    imageAlt: "Investment opportunities pipeline",
    panel: "#FFF3DF",
    align: "inset" as const,
    overlay: {
      src: "https://investera.s3.us-east-2.amazonaws.com/image_830_1786707045583_jb6d.png",
      alt: "5-year AUM trend",
      className: "right-[-2%] top-[6%] w-[56%] sm:top-[4%] sm:w-[52%]",
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
      "https://investera.s3.us-east-2.amazonaws.com/portfolio_1787227241834_mv7q.png",
    imageAlt: "Portfolio breakdown table with market values",
    panel: "#E9F2FE",
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
      "https://investera.s3.us-east-2.amazonaws.com/Frame_10000hjk03850_1786626912728_rjlq.png",
    imageAlt: "AI-powered asset allocation insights",
    panel: "#E3F2FD",
    align: "center" as const,
  },
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
    image:
      "https://investera.s3.us-east-2.amazonaws.com/Frame_hjk_1786626912728_7jog.png",
    imageAlt: "Investera dashboard with total assets under management",
    panel: "#BEDBFF",
    align: "corner" as const,
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
  const [scrollDriven, setScrollDriven] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const stickyContentRef = useRef<HTMLDivElement>(null);
  const tab = tabs[active];

  useEffect(() => {
    const widthMedia = window.matchMedia("(min-width: 1024px)");
    const HEADER_OFFSET = 88;

    const sync = () => {
      if (!widthMedia.matches) {
        setScrollDriven(false);
        return;
      }

      const content = stickyContentRef.current;
      if (!content) {
        setScrollDriven(false);
        return;
      }

      // Only pin + scroll-spy when the full panel (tabs, copy, image, CTA) fits.
      const available = window.innerHeight - HEADER_OFFSET;
      setScrollDriven(content.scrollHeight <= available - 16);
    };

    sync();
    widthMedia.addEventListener("change", sync);
    window.addEventListener("resize", sync);

    const content = stickyContentRef.current;
    const observer = content ? new ResizeObserver(sync) : null;
    if (content && observer) observer.observe(content);

    return () => {
      widthMedia.removeEventListener("change", sync);
      window.removeEventListener("resize", sync);
      observer?.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (!scrollDriven) return;
    const next = Math.min(
      tabs.length - 1,
      Math.max(0, Math.floor(value * tabs.length)),
    );
    setActive((prev) => (prev === next ? prev : next));
  });

  const goToTab = (index: number) => {
    setActive(index);
    if (!scrollDriven) return;

    const el = sectionRef.current;
    if (!el) return;
    const start = el.getBoundingClientRect().top + window.scrollY;
    const track = el.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: start + (index / tabs.length) * track + 4,
      behavior: "smooth",
    });
  };

  const panelClass =
    tab.align === "center"
      ? `flex h-[320px] items-end justify-center rounded-[24px] px-6 pt-6 sm:h-[400px] sm:px-8 sm:pt-8 lg:h-[460px] ${
          tab.overlay ? "overflow-visible" : "overflow-hidden"
        }`
      : tab.align === "inset"
        ? "flex h-[320px] items-center justify-center overflow-visible rounded-[24px] p-5 sm:h-[400px] lg:h-[460px]"
        : tab.align === "corner"
          ? "flex h-[320px] items-end justify-end overflow-hidden rounded-[24px] sm:h-[400px] lg:h-[460px]"
          : "flex h-[320px] items-end justify-end overflow-hidden rounded-[24px] pl-6 pt-8 sm:h-[400px] sm:pl-10 sm:pt-10 lg:h-[460px]";

  return (
    <section id="platform-features" ref={sectionRef} className="relative bg-white">
      <div className={scrollDriven ? "h-[680vh]" : "h-auto"}>
        <div
          className={
            scrollDriven
              ? "sticky top-[88px] flex min-h-[calc(100vh-88px)] items-center py-10 lg:py-14"
              : "flex items-center py-14 sm:py-16"
          }
        >
          <div
            ref={stickyContentRef}
            className="mx-auto w-full max-w-[1440px] px-6 lg:px-16"
          >
            <h2 className="-mt-[30px] mb-8 text-center text-[32px] font-normal leading-[1.15] tracking-[-0.02em] text-[#111111] sm:mb-10 sm:text-[40px]">
              One Platform.{" "}
              <span className="heading-accent text-[#0c2d57]">
                Complete Investment Intelligence.
              </span>
            </h2>

            <div className="border-b border-[#E5E7EB]">
              <div className="flex flex-wrap items-end justify-center gap-x-5 gap-y-2 lg:gap-x-8">
                {tabs.map((item, index) => {
                  const isActive = index === active;
                  return (
                    <button
                      key={`${item.label}-${index}`}
                      type="button"
                      onClick={() => goToTab(index)}
                      className={`relative whitespace-nowrap pb-4 text-[14px] leading-[1.3] transition-colors sm:text-[15px] ${
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

            <div className="mt-10 grid items-center gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-16">
              <motion.div
                key={`copy-${active}`}
                initial={scrollDriven ? { opacity: 0, y: 16 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: scrollDriven ? 0.45 : 0, ease: "easeOut" }}
                className="mx-auto max-w-[560px] text-center lg:mx-0 lg:text-left"
              >
                <h2 className="text-[32px] font-normal leading-tight tracking-[-0.02em] sm:text-[40px]">
                  <span className="font-normal text-[#1a1a1a]">{tab.titleLines[0]}</span>
                  <br />
                  <span className="heading-accent text-[#0c2d57]">{tab.titleLines[1]}</span>
                </h2>
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
              </motion.div>

              <motion.div
                key={`panel-${active}`}
                initial={scrollDriven ? { opacity: 0, y: 28, scale: 0.96 } : false}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: scrollDriven ? 0.55 : 0,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={panelClass}
                style={{ backgroundColor: tab.panel }}
              >
                <div
                  className={
                    tab.align === "center"
                      ? `relative flex h-full w-full max-w-[90%] items-end justify-center ${tab.shift ?? ""}`
                      : `relative flex h-full w-full items-end justify-end ${tab.shift ?? ""}`
                  }
                >
                  <motion.div
                    className={`relative flex h-full max-h-full items-end ${
                      tab.align === "corner"
                        ? "w-full justify-end"
                        : tab.align === "center" || tab.align === "inset"
                          ? "justify-center"
                          : "justify-end"
                    }`}
                    animate={
                      scrollDriven && tab.align === "inset"
                        ? { y: [0, -10, 0] }
                        : undefined
                    }
                    transition={
                      scrollDriven && tab.align === "inset"
                        ? { duration: 5.2, repeat: Infinity, ease: "easeInOut" }
                        : undefined
                    }
                  >
                    <Image
                      src={tab.image}
                      alt={tab.imageAlt}
                      width={900}
                      height={640}
                      unoptimized
                      className={`max-h-full max-w-full object-contain ${
                        tab.align === "corner"
                          ? "h-full w-full object-right-bottom drop-shadow-[0_24px_50px_rgba(12,45,87,0.28)]"
                          : "h-full w-auto object-bottom"
                      } ${
                        tab.align === "inset"
                          ? "drop-shadow-[0_24px_50px_rgba(12,45,87,0.28)]"
                          : ""
                      }`}
                    />
                    {tab.overlay ? (
                      <motion.div
                        className={`pointer-events-none absolute z-10 ${
                          tab.overlay.className ??
                          "right-0 top-[22%] w-[58%] sm:top-[20%] sm:w-[54%]"
                        }`}
                        animate={scrollDriven ? { y: [0, -14, 0] } : undefined}
                        transition={
                          scrollDriven
                            ? {
                                duration: 4.4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.35,
                              }
                            : undefined
                        }
                      >
                        <Image
                          src={tab.overlay.src}
                          alt={tab.overlay.alt}
                          width={720}
                          height={420}
                          unoptimized
                          className="h-auto w-full drop-shadow-[0_28px_55px_rgba(5,11,31,0.42)]"
                        />
                      </motion.div>
                    ) : null}
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 flex -translate-y-[40px] justify-center lg:mt-10 lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#CCA400] px-7 py-3 text-[15px] font-semibold text-white transition-transform hover:scale-[1.03]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
