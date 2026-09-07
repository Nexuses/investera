"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import FadeIn from "@/components/FadeIn";

const studies = [
  {
    name: "Dimah Capital",
    logo: "https://investera.s3.us-east-2.amazonaws.com/image_994_1786952976419_agxe.png",
    logoWidth: 220,
    logoHeight: 56,
    tag: "Dimah Capital",
    subtitle:
      "KUWAIT · INVESTMENT MANAGEMENT & SHARIAH-COMPLIANT REAL ESTATE",
    titleLines: ["One View", "Across a Diversified", "Investment Portfolio"],
    description:
      "Centralized multi-asset data, reporting, and governance for stronger portfolio visibility and investment oversight.",
    challenge:
      "Investment data was spread across multiple portfolios and entities. Complex reporting and governance requirements made oversight difficult.",
    solution:
      "Investera centralised investment data, performance tracking and reporting. Role-based controls and workflows improved portfolio governance and visibility.",
    href: "https://investera.s3.us-east-2.amazonaws.com/Dimah_Capital_Case_study_1788498077238_7hxq.pdf",
  },
  {
    name: "Al Kifah Holding",
    logo: "https://investera.s3.us-east-2.amazonaws.com/logo_1788420370908_befu.png",
    logoWidth: 240,
    logoHeight: 56,
    tag: "Al Kifah Holding",
    subtitle: "SAUDI ARABIA · DIVERSIFIED HOLDING GROUP",
    titleLines: [
      "Turning",
      "Portfolio Data into",
      "Better Investment Oversight",
    ],
    description:
      "A centralized PMS for performance tracking, structured reporting, and more efficient investment decision-making.",
    challenge:
      "An expanding portfolio increased reporting and monitoring complexity. Manual processes limited visibility and slowed investment decisions.",
    solution:
      "Investera centralised multi-asset portfolio data and reporting on one platform, and streamlined workflows, access controls and portfolio monitoring.",
    href: "https://investera.s3.us-east-2.amazonaws.com/Al_Kaifah_Case_study_1788498041555_07h6.pdf",
  },
];

type Study = (typeof studies)[number];

function CardShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
      {children}
    </div>
  );
}

function CaseStudyFront({
  study,
  moreInfo,
}: {
  study: Study;
  moreInfo?: ReactNode;
}) {
  return (
    <CardShell>
      <div className="flex items-center justify-center border-b border-[#E5E7EB] bg-[#F4F4F4] px-6 py-8 sm:py-9">
        <Image
          src={study.logo}
          alt={study.name}
          width={study.logoWidth}
          height={study.logoHeight}
          unoptimized
          className="h-14 w-auto max-w-[85%] object-contain sm:h-16 lg:h-[72px]"
        />
      </div>

      <div className="flex flex-1 flex-col px-6 py-8 sm:px-8 sm:py-10">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#8A94A6]">
          {study.tag}
        </p>
        <h3 className="mt-4 text-[28px] font-normal leading-[1.15] tracking-[-0.02em] text-[#111111] sm:text-[32px]">
          {study.titleLines.map((line, index) => (
            <span
              key={line}
              className={
                index === study.titleLines.length - 1
                  ? "heading-accent block text-[#0c2d57]"
                  : "block"
              }
            >
              {line}
            </span>
          ))}
        </h3>
        <p className="mt-4 text-[16px] leading-[1.3] text-[#6B7280]">
          {study.description}
        </p>
        {moreInfo}
      </div>
    </CardShell>
  );
}

function CaseStudyBack({ study }: { study: Study }) {
  return (
    <CardShell>
      <div className="flex flex-1 flex-col justify-between px-6 py-8 sm:px-8 sm:py-10">
        <div>
          <p className="text-[11px] font-medium uppercase leading-relaxed tracking-[0.08em] text-[#8A94A6] sm:text-[12px] sm:tracking-[0.14em]">
            {study.subtitle}
          </p>
          <h3 className="mt-3 text-[28px] font-normal leading-[1.12] tracking-[-0.02em] text-[#111111] sm:text-[36px]">
            {study.name}
          </h3>

          <div className="mt-6 grid grid-cols-1 gap-6 border-t border-[#E5E7EB] pt-6 sm:mt-8 sm:grid-cols-2 sm:gap-10 sm:pt-8">
            <div>
              <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#0c2d57]">
                Challenge
              </p>
              <span
                aria-hidden
                className="mt-2 block h-[3px] w-10 bg-[#CCA400]"
              />
              <p className="mt-4 text-[15px] leading-[1.45] text-[#4B5563] sm:text-[16px]">
                {study.challenge}
              </p>
            </div>
            <div>
              <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#0c2d57]">
                Solution
              </p>
              <span
                aria-hidden
                className="mt-2 block h-[3px] w-10 bg-[#CCA400]"
              />
              <p className="mt-4 text-[15px] leading-[1.45] text-[#4B5563] sm:text-[16px]">
                {study.solution}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10">
          <Link
            href={study.href}
            target={study.href.startsWith("http") ? "_blank" : undefined}
            rel={
              study.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            onClick={(event) => event.stopPropagation()}
            className="inline-flex w-fit items-center gap-1.5 text-[13px] font-bold uppercase tracking-[0.06em] text-[#0c2d57] transition-opacity hover:opacity-70"
          >
            Read full case study
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </CardShell>
  );
}

function CaseStudyFlipCard({ study }: { study: Study }) {
  const [flipped, setFlipped] = useState(false);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const [minHeight, setMinHeight] = useState<number>();

  useLayoutEffect(() => {
    const front = frontRef.current;
    const back = backRef.current;
    if (!front || !back) return;

    const measure = () => {
      setMinHeight(Math.max(front.offsetHeight, back.offsetHeight));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(front);
    observer.observe(back);
    return () => observer.disconnect();
  }, []);

  const flip = () => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 1024px)").matches
    ) {
      return;
    }
    setFlipped((value) => !value);
  };

  return (
    <div
      className="group w-full text-left [perspective:1200px] max-lg:cursor-pointer"
      onClick={flip}
    >
      <div
        className={`relative w-full min-h-[460px] transition-transform duration-700 ease-in-out [transform-style:preserve-3d] sm:min-h-[480px] lg:group-hover:[transform:rotateY(180deg)] lg:group-focus-within:[transform:rotateY(180deg)] ${
          flipped ? "max-lg:[transform:rotateY(180deg)]" : ""
        }`}
        style={minHeight ? { minHeight } : undefined}
      >
        <div
          ref={frontRef}
          className="absolute inset-x-0 top-0 w-full [backface-visibility:hidden] [-webkit-backface-visibility:hidden]"
        >
          <CaseStudyFront
            study={study}
            moreInfo={
              <button
                type="button"
                className="mt-auto inline-flex w-fit items-center gap-1.5 pt-6 text-[13px] font-bold uppercase tracking-[0.06em] text-[#0c2d57] transition-opacity hover:opacity-70 lg:hidden"
                onClick={(event) => {
                  event.stopPropagation();
                  setFlipped(true);
                }}
              >
                More Info
                <span aria-hidden="true">→</span>
              </button>
            }
          />
        </div>
        <div
          ref={backRef}
          className="absolute inset-x-0 top-0 w-full [backface-visibility:hidden] [transform:rotateY(180deg)] [-webkit-backface-visibility:hidden]"
        >
          <CaseStudyBack study={study} />
        </div>
      </div>
    </div>
  );
}

export default function InvestmentSolutionsSection() {
  return (
    <section id="case-studies" className="bg-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <div className="pt-16 pb-[50px] lg:pt-24 lg:pb-[50px]">
          <FadeIn>
            <h2 className="text-center text-[40px] font-normal leading-tight text-[#111111]">
              Investment Management{" "}
              <span className="heading-accent text-[#0c2d57]">
                Solutions for Every Stakeholder
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-[750px] text-center text-[16px] leading-[1.3] text-[#6B7280]">
              Purpose-built solutions that help investment professionals manage
              portfolios, opportunities, workflows, and reporting through one
              unified platform.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-16 lg:grid-cols-2 lg:gap-8 lg:pb-24">
          {studies.map((study, index) => (
            <FadeIn key={study.name} delay={index * 0.08}>
              <CaseStudyFlipCard study={study} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
