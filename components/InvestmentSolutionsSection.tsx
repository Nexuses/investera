"use client";

import CaseStudyCard from "./CaseStudyCard";

const caseStudies = [
  {
    image: "/images/stakeholder-solutions/card-1-image.png",
    imageAlt: "Corporate building representing Murbiha investment office",
    logo: "/images/stakeholder-solutions/murbiha-logo.png",
    logoAlt: "Murbiha logo",
    description:
      "Murbiha moved away from complex Excel-based reporting to streamline public investment management, including average cost calculations and sector-based allocation, through Investera’s centralized platform",
    delay: 0.2,
  },
  {
    image: "/images/stakeholder-solutions/card-2-image.png",
    imageAlt: "Fleet trucks at logistics warehouse for Lilypeck",
    logo: "/images/stakeholder-solutions/lilypeck-logo.png",
    logoAlt: "Lilypeck logo",
    description:
      "Investera helped Lilypeck improve investment reporting, fund valuations, public securities visibility, and data security while bringing its investments together within one centralized management system.",
    delay: 0.35,
  },
  {
    image: "/images/stakeholder-solutions/card-3-image.png",
    imageAlt: "Plant growing from coins representing investment growth",
    title: "Investment Management Client",
    description:
      "By adopting Investera, the client streamlined investment workflows, strengthened compliance processes, and gained clearer insights through an easy-to-use, centralized investment management platform",
    delay: 0.5,
  },
];

export default function InvestmentSolutionsSection() {
  return (
    <section className="bg-[#17467B] py-14 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <div className="mx-auto max-w-[1180px]">
          <h2 className="text-center text-[28px] font-normal leading-tight text-white sm:text-[36px] lg:text-[48px]">
            Investment Management{" "}
            <span className="font-bold">Solutions</span> for{" "}
            <span className="font-bold">Every Stakeholder</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[750px] text-center text-[15px] leading-relaxed text-white/90 sm:text-[17px] lg:text-[18px]">
            Purpose-built solutions that help investment professionals manage
            portfolios, opportunities, workflows, and reporting through one
            unified platform.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-10">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={study.title ?? study.logoAlt ?? `case-study-${index}`}
                {...study}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
