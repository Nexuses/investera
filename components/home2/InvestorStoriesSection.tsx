"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const stories = [
  {
    heading: "Portfolio Managers",
    body: "Track investment pipelines, opportunities, valuations, and portfolio performance. Gain centralized visibility for faster, informed decisions.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Investment professionals collaborating in a meeting",
  },
  {
    heading: "Family Offices",
    body: "Centralize diverse investments and wealth-management activities in one secure platform. Access a consolidated, real-time view of holdings and performance.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Family office leadership meeting around a conference table",
  },
  {
    heading: "Private Equity & VC Firms",
    body: "Manage deals, portfolio companies, valuations, and due diligence across the investment lifecycle. Strengthen oversight with structured workflows and reporting.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Private equity team discussing portfolio strategy",
  },
  {
    heading: "Investment & Fund Managers",
    body: "Streamline investment operations, performance tracking, and reporting. Improve portfolio oversight with greater efficiency, transparency, and control.",
    image:
      "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Fund manager reviewing performance on a laptop",
  },
];

const LOOP = [...stories, ...stories, ...stories];
const SET_SIZE = stories.length;

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

  const scrollByCard = (direction: 1 | -1) => {
    scrollToIndex(closestIndex() + direction, true);
    window.setTimeout(normalizeLoop, 450);
  };

  return (
    <section className="bg-white pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-24">
      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{
            paddingLeft: "max(24px, calc(50% - 270px))",
            paddingRight: "max(24px, calc(50% - 270px))",
          }}
        >
          {LOOP.map((story, index) => (
            <article
              key={`${story.heading}-${index}`}
              className="relative h-[460px] w-[86vw] max-w-[540px] shrink-0 snap-center overflow-hidden rounded-[20px] sm:h-[540px] sm:w-[480px] lg:h-[580px] lg:w-[520px]"
            >
              <Image
                src={story.image}
                alt={story.imageAlt}
                fill
                unoptimized
                className="object-cover"
              />
              {index === activeIndex ? (
                <>
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/20"
                  />
                  <h3 className="absolute left-5 top-5 max-w-[80%] text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:left-6 sm:top-6 sm:text-[34px]">
                    {story.heading}
                  </h3>
                  <div className="absolute inset-x-0 bottom-0 px-7 pb-8">
                    <p className="text-[16px] leading-[1.4] text-white">
                      {story.body}
                    </p>
                  </div>
                </>
              ) : null}
            </article>
          ))}
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-24 lg:w-36"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-24 lg:w-36"
        />

        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-3 lg:px-8">
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
