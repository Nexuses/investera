"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const studies = [
  {
    name: "Dimah Capital",
    logo: "https://investera.s3.us-east-2.amazonaws.com/image_994_1786952976419_agxe.png",
    logoWidth: 220,
    logoHeight: 56,
    tag: "Dimah Capital",
    titleLead: "One View Across a",
    titleAccent: "Diversified Investment Portfolio",
    description:
      "Centralized multi-asset data, reporting, and governance for stronger portfolio visibility and investment oversight.",
    image:
      "https://investera.s3.us-east-2.amazonaws.com/image__2__1786961662080_w9ot.png",
    imageAlt:
      "Dimah Capital headquarters representing a diversified investment portfolio",
  },
  {
    name: "Al Kifah Holding",
    logo: "https://investera.s3.us-east-2.amazonaws.com/PhotoshopExtension_Image_1786952692009_thxq.png",
    logoWidth: 240,
    logoHeight: 56,
    tag: "Al Kifah Holding",
    titleLead: "Turning Portfolio Data into",
    titleAccent: "Better Investment Oversight",
    description:
      "A centralized PMS for performance tracking, structured reporting, and more efficient investment decision-making.",
    image:
      "https://investera.s3.us-east-2.amazonaws.com/SYVpecYPAb4ElFC9_1786962061440_2wgk.jpg",
    imageAlt:
      "Al Kifah Holding headquarters building",
  },
];

export default function InvestmentSolutionsSection() {
  const [active, setActive] = useState(0);
  const study = studies[active];

  return (
    <section id="case-studies" className="bg-white">
      <div className="bg-white px-6 pt-16 pb-[50px] lg:px-16 lg:pt-24 lg:pb-[50px]">
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

      <div className="grid grid-cols-2 border-b border-[#E5E7EB]">
        {studies.map((item, index) => {
          const isActive = index === active;
          return (
            <button
              key={item.name}
              type="button"
              onClick={() => setActive(index)}
              aria-label={item.name}
              className={`relative flex min-h-[80px] items-center justify-center px-4 py-5 text-center transition-colors sm:min-h-[96px] sm:px-8 ${
                index > 0 ? "border-l border-[#E5E7EB]" : ""
              } ${
                isActive
                  ? "bg-white after:absolute after:inset-x-0 after:bottom-[-1px] after:h-[3px] after:bg-[#2F6FE4]"
                  : "bg-[#F4F4F4] hover:bg-[#EEEEEE]"
              }`}
              aria-pressed={isActive}
            >
              <Image
                src={item.logo}
                alt={item.name}
                width={item.logoWidth}
                height={item.logoHeight}
                unoptimized
                className={`h-10 w-auto object-contain sm:h-12 ${
                  isActive ? "opacity-100" : "opacity-80"
                }`}
              />
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <FadeIn
          key={`${study.name}-copy`}
          className="flex min-h-[420px] flex-col justify-center bg-white px-8 py-14 sm:px-12 sm:py-16 lg:min-h-[560px] lg:px-20 lg:py-24 xl:px-28"
        >
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#8A94A6]">
            {study.tag}
          </p>
          <h3 className="mt-4 max-w-[480px] text-[40px] font-normal leading-[1.15] tracking-[-0.02em] text-[#111111]">
            {study.titleLead}{" "}
            <span className="heading-accent text-[#0c2d57]">
              {study.titleAccent}
            </span>
          </h3>
          <p className="mt-5 max-w-[460px] text-[16px] leading-[1.3] text-[#6B7280]">
            {study.description}
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex w-fit items-center gap-1.5 text-[13px] font-bold uppercase tracking-[0.06em] text-[#0c2d57] transition-opacity hover:opacity-70"
          >
            Read full case study
            <span aria-hidden="true">→</span>
          </Link>
        </FadeIn>

        <FadeIn
          key={`${study.name}-image`}
          delay={0.12}
          className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-full"
        >
          <Image
            src={study.image}
            alt={study.imageAlt}
            fill
            unoptimized
            className="object-cover"
          />
        </FadeIn>
      </div>
    </section>
  );
}
