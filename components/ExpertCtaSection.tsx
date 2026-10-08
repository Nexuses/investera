"use client";

import Link from "next/link";
import { useId, useRef, type CSSProperties, type MouseEvent } from "react";

type ExpertCtaSectionProps = {
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

const VIEW_W = 1440;
const VIEW_H = 520;
const MID_Y = VIEW_H / 2;

// Vertical offsets from the centre line; curves fan out toward the edges.
const OFFSETS = [-230, -175, -128, -88, -52, -20, 20, 52, 88, 128, 175, 230];

function curvePath(offset: number) {
  const edge = MID_Y + offset * 1.08;
  const centre = MID_Y + offset * 0.2;
  return `M-60 ${edge} C 380 ${edge}, 540 ${centre}, 720 ${centre} S 1060 ${edge}, 1500 ${edge}`;
}

const curves = OFFSETS.map((offset, index) => ({
  d: curvePath(offset),
  depth: index % 2 === 0 ? "back" : "front",
}));

const streaks = [
  { line: 1, color: "#4CC9F0", duration: 7.5, delay: 0 },
  { line: 4, color: "#2F6FE4", duration: 9, delay: 2.4 },
  { line: 6, color: "#4CC9F0", duration: 8, delay: 4.1 },
  { line: 8, color: "#CCA400", duration: 10, delay: 1.2 },
  { line: 10, color: "#4CC9F0", duration: 8.5, delay: 5.6 },
  { line: 3, color: "#7DB3FF", duration: 11, delay: 6.8 },
];

const layerTransform = (x: number, y: number): CSSProperties => ({
  transform: `translate3d(calc(var(--mx, 0) * ${x}px), calc(var(--my, 0) * ${y}px), 0) scale(1.04)`,
});

function CurveLayer({
  depth,
  withStreaks,
  idPrefix,
}: {
  depth: "back" | "front";
  withStreaks: boolean;
  idPrefix: string;
}) {
  const lineId = `${idPrefix}-line-${depth}`;
  const glowId = `${idPrefix}-glow-${depth}`;
  const layerCurves = curves
    .map((curve, index) => ({ ...curve, index }))
    .filter((curve) => curve.depth === depth);

  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden
      focusable="false"
    >
      <defs>
        <linearGradient id={lineId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8FB8FF" stopOpacity="0" />
          <stop offset="18%" stopColor="#8FB8FF" stopOpacity={depth === "front" ? 0.34 : 0.22} />
          <stop offset="50%" stopColor="#8FB8FF" stopOpacity="0.06" />
          <stop offset="82%" stopColor="#8FB8FF" stopOpacity={depth === "front" ? 0.34 : 0.22} />
          <stop offset="100%" stopColor="#8FB8FF" stopOpacity="0" />
        </linearGradient>
        <filter id={glowId} x="-20%" y="-200%" width="140%" height="500%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {layerCurves.map((curve) => (
        <path
          key={curve.index}
          d={curve.d}
          fill="none"
          stroke={`url(#${lineId})`}
          strokeWidth={depth === "front" ? 1.1 : 0.8}
        />
      ))}

      {withStreaks
        ? streaks
            .filter((streak) => curves[streak.line]?.depth === depth)
            .map((streak) => (
              <path
                key={`streak-${streak.line}`}
                d={curves[streak.line].d}
                pathLength={1}
                fill="none"
                stroke={streak.color}
                strokeWidth={depth === "front" ? 1.8 : 1.4}
                strokeLinecap="round"
                filter={`url(#${glowId})`}
                className="expert-cta-streak"
                style={
                  {
                    "--streak-duration": `${streak.duration}s`,
                    "--streak-delay": `${streak.delay}s`,
                  } as CSSProperties
                }
              />
            ))
        : null}
    </svg>
  );
}

export default function ExpertCtaSection({
  titleLine1 = "Talk to an",
  titleLine2 = "expert today",
  description,
  ctaLabel = "Get in touch",
  ctaHref = "/contact",
  secondaryCtaLabel,
  secondaryCtaHref,
}: ExpertCtaSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const idPrefix = useId().replace(/:/g, "");
  const headingId = `${idPrefix}-heading`;

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    el.style.setProperty("--mx", x.toFixed(3));
    el.style.setProperty("--my", y.toFixed(3));
  };

  const handleMouseLeave = () => {
    const el = sectionRef.current;
    if (!el) return;
    el.style.setProperty("--mx", "0");
    el.style.setProperty("--my", "0");
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-labelledby={headingId}
      className="relative isolate overflow-hidden border-t border-white/[0.06] bg-[#050B1F]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_60%_at_50%_45%,rgba(47,111,228,0.26)_0%,rgba(20,63,115,0.14)_40%,transparent_72%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[58%] -z-10 h-[260px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4CC9F0]/10 blur-[90px] sm:w-[560px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_34%_42%_at_50%_50%,transparent_0%,black_100%)]"
      >
        <div className="expert-cta-layer absolute inset-0" style={layerTransform(-10, -6)}>
          <CurveLayer depth="back" withStreaks idPrefix={idPrefix} />
        </div>
        <div className="expert-cta-layer absolute inset-0" style={layerTransform(18, 12)}>
          <CurveLayer depth="front" withStreaks idPrefix={idPrefix} />
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-[#050B1F] to-transparent"
      />

      <div className="mx-auto flex min-h-[380px] max-w-[1440px] flex-col items-center justify-center px-6 py-24 text-center sm:min-h-[440px] sm:py-28 lg:min-h-[500px] lg:px-16 lg:py-32">
        <h2
          id={headingId}
          className="text-[40px] font-light leading-[1.1] tracking-[-0.035em] text-white sm:text-[52px] lg:text-[64px]"
        >
          <span className="sm:block">{titleLine1}</span>{" "}
          <span className="sm:block">{titleLine2}</span>
        </h2>

        {description ? (
          <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-[1.55] text-white/75 sm:mt-6 sm:text-[16px] lg:text-[17px]">
            {description}
          </p>
        ) : null}

        <div className="mt-9 flex w-full max-w-[420px] flex-col items-stretch gap-3 sm:mt-10 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          {secondaryCtaLabel && secondaryCtaHref ? (
            <Link
              href={secondaryCtaHref}
              className="inline-flex items-center justify-center rounded-[12px] border border-white/25 bg-white/[0.04] px-6 py-3.5 text-[15px] font-semibold text-white backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CC9F0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B1F]"
            >
              {secondaryCtaLabel}
            </Link>
          ) : null}
        <Link
          href={ctaHref}
          className="group inline-flex items-center justify-center gap-2.5 rounded-[12px] bg-gradient-to-b from-[#D9B21A] to-[#B99400] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_28px_rgba(204,164,0,0.28),inset_0_1px_0_rgba(255,255,255,0.22)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(204,164,0,0.45),inset_0_1px_0_rgba(255,255,255,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CC9F0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B1F]"
        >
          {ctaLabel}
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden
            className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
          >
            <path
              d="M6 3.5L10.5 8L6 12.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        </div>
      </div>
    </section>
  );
}
