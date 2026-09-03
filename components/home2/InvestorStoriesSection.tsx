"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const stories = [
  {
    heading: "Portfolio Managers",
    body: "Track investment pipelines, opportunities, valuations, and portfolio performance. Gain centralized visibility for faster, informed decisions.",
    image:
      "https://investera.s3.us-east-2.amazonaws.com/image__3__1787224535026_i1d4.png",
    imageAlt: "Portfolio manager reviewing market data on a trading desk",
  },
  {
    heading: "Family Offices",
    body: "Centralize diverse investments and wealth-management activities in one secure platform. Access a consolidated, real-time view of holdings and performance.",
    image:
      "https://investera.s3.us-east-2.amazonaws.com/image__4__1787224619077_5ly3.png",
    imageAlt: "Abstract visualization of investment growth and market momentum",
  },
  {
    heading: "Private Equity & VC Firms",
    body: "Manage deals, portfolio companies, valuations, and due diligence across the investment lifecycle. Strengthen oversight with structured workflows and reporting.",
    image:
      "https://investera.s3.us-east-2.amazonaws.com/image__5__1787224662945_8qi9.png",
    imageAlt: "Investor reviewing portfolio performance on mobile and laptop",
  },
  {
    heading: "Investment & Fund Managers",
    body: "Streamline investment operations, performance tracking, and reporting. Improve portfolio oversight with greater efficiency, transparency, and control.",
    image:
      "https://investera.s3.us-east-2.amazonaws.com/133407090_a17e1cc3-64aa-440a-80ce-3cfbd992f77a_1787224581466_7yva.jpg",
    imageAlt: "Emirates Towers and modern financial district plaza in Dubai",
  },
];

const LOOP = [...stories, ...stories, ...stories];
const SET_SIZE = stories.length;

function StoryCard({
  story,
  active = false,
  compact = false,
  className = "",
}: {
  story: (typeof stories)[number];
  active?: boolean;
  compact?: boolean;
  className?: string;
}) {
  return (
    <article
      className={`relative shrink-0 snap-center overflow-hidden rounded-[20px] ${
        compact
          ? "h-[360px] w-full max-w-none lg:h-[380px]"
          : "h-[460px] w-[86vw] max-w-[540px] sm:h-[540px] sm:w-[480px]"
      } ${className}`}
    >
      <Image
        src={story.image}
        alt={story.imageAlt}
        fill
        unoptimized
        className="object-cover"
      />
      <div
        aria-hidden
        className={`absolute inset-0 transition-colors duration-300 ${
          active
            ? "bg-gradient-to-t from-black/80 via-black/25 to-black/20"
            : "bg-gradient-to-t from-black/75 via-black/35 to-black/25"
        }`}
      />
      <h3
        className={`absolute left-5 top-5 max-w-[85%] font-semibold leading-[1.15] tracking-[-0.02em] text-white ${
          compact
            ? "text-[22px] sm:text-[24px]"
            : "text-[28px] sm:left-6 sm:top-6 sm:text-[34px]"
        }`}
      >
        {story.heading}
      </h3>
      <div
        className={`absolute inset-x-0 bottom-0 ${
          compact ? "px-5 pb-5" : "px-7 pb-8"
        }`}
      >
        <p
          className={`leading-[1.4] text-white ${
            compact ? "text-[14px] sm:text-[15px]" : "text-[16px]"
          }`}
        >
          {story.body}
        </p>
      </div>
    </article>
  );
}

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={direction === "prev" ? "Previous story" : "Next story"}
      onClick={onClick}
      className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0c2d57] text-white shadow-[0_10px_24px_rgba(12,45,87,0.28)] transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d={direction === "prev" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function InvestorStoriesSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const jumpingRef = useRef(false);
  const pausedRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(SET_SIZE);

  const cards = () =>
    scrollerRef.current
      ? Array.from(scrollerRef.current.querySelectorAll("article"))
      : [];

  const centerOf = (card: HTMLElement, scroller: HTMLElement) =>
    card.offsetLeft - (scroller.clientWidth - card.offsetWidth) / 2;

  const closestIndex = useCallback(() => {
    const scroller = scrollerRef.current;
    const items = cards();
    if (!scroller || items.length === 0) return SET_SIZE;
    const midpoint = scroller.scrollLeft + scroller.clientWidth / 2;
    let best = 0;
    let min = Infinity;
    items.forEach((card, index) => {
      const center = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(center - midpoint);
      if (distance < min) {
        min = distance;
        best = index;
      }
    });
    setActiveIndex(best);
    return best;
  }, []);

  const scrollToIndex = useCallback((index: number, smooth: boolean) => {
    const scroller = scrollerRef.current;
    const card = cards()[index];
    if (!scroller || !card) return;
    scroller.scrollTo({
      left: centerOf(card, scroller),
      behavior: smooth ? "smooth" : "auto",
    });
  }, []);

  const normalizeLoop = useCallback(() => {
    const index = closestIndex();
    if (index < SET_SIZE) {
      jumpingRef.current = true;
      scrollToIndex(index + SET_SIZE, false);
    } else if (index >= SET_SIZE * 2) {
      jumpingRef.current = true;
      scrollToIndex(index - SET_SIZE, false);
    }
  }, [closestIndex, scrollToIndex]);

  const scrollByCard = useCallback(
    (direction: 1 | -1) => {
      scrollToIndex(closestIndex() + direction, true);
      window.setTimeout(normalizeLoop, 450);
    },
    [closestIndex, normalizeLoop, scrollToIndex],
  );

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    scrollToIndex(SET_SIZE, false);

    const onScroll = () => {
      if (jumpingRef.current) {
        jumpingRef.current = false;
        return;
      }
      window.clearTimeout((onScroll as { t?: number }).t);
      (onScroll as { t?: number }).t = window.setTimeout(normalizeLoop, 80);
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    scroller.addEventListener("scrollend", normalizeLoop);
    return () => {
      scroller.removeEventListener("scroll", onScroll);
      scroller.removeEventListener("scrollend", normalizeLoop);
    };
  }, [normalizeLoop, scrollToIndex]);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const id = window.setInterval(() => {
      if (pausedRef.current || document.hidden) return;
      scrollByCard(1);
    }, 4500);

    return () => window.clearInterval(id);
  }, [scrollByCard]);

  const pauseAuto = () => {
    pausedRef.current = true;
  };
  const resumeAuto = () => {
    pausedRef.current = false;
  };

  return (
    <section className="bg-white pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-24">
      <div className="mx-auto hidden max-w-[1440px] grid-cols-2 gap-5 px-6 lg:grid xl:grid-cols-4 lg:px-16">
        {stories.map((story) => (
          <StoryCard key={story.heading} story={story} compact />
        ))}
      </div>

      <div
        className="relative lg:hidden"
        onMouseEnter={pauseAuto}
        onMouseLeave={resumeAuto}
        onFocusCapture={pauseAuto}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
            resumeAuto();
          }
        }}
      >
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{
            paddingLeft: "max(24px, calc(50% - 270px))",
            paddingRight: "max(24px, calc(50% - 270px))",
          }}
          onPointerDown={pauseAuto}
        >
          {LOOP.map((story, index) => (
            <StoryCard
              key={`${story.heading}-${index}`}
              story={story}
              active={index === activeIndex}
            />
          ))}
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-24"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-24"
        />

        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-3">
          <div className="pointer-events-auto">
            <ArrowButton direction="prev" onClick={() => scrollByCard(-1)} />
          </div>
          <div className="pointer-events-auto">
            <ArrowButton direction="next" onClick={() => scrollByCard(1)} />
          </div>
        </div>
      </div>
    </section>
  );
}
