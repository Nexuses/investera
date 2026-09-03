"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import {
  filterInsights,
  insightFilters,
  type InsightFilter,
} from "@/components/insights-data";

type BlogHeroProps = {
  activeFilter: InsightFilter;
  onFilterChange: (filter: InsightFilter) => void;
};

export default function BlogHero({
  activeFilter,
  onFilterChange,
}: BlogHeroProps) {
  const filtered = filterInsights(activeFilter);
  const featured = filtered[0] ?? null;

  return (
    <section className="bg-white py-[60px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <FadeIn>
          <h1 className="text-[40px] font-normal leading-tight tracking-[-0.02em]">
            <span className="font-normal text-[#1a1a1a]">Blogs & </span>
            <span className="heading-accent text-[#0c2d57]">Insights</span>
          </h1>
        </FadeIn>

        <FadeIn
          delay={0.08}
          className="mt-6 flex flex-wrap items-center gap-2.5 sm:mt-8 sm:gap-3"
        >
          {insightFilters.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => onFilterChange(filter)}
                className={`rounded-full px-4 py-2 text-[13px] font-medium leading-[1.3] transition-colors sm:px-5 sm:py-2.5 sm:text-[14px] ${
                  isActive
                    ? "bg-[#111111] text-white"
                    : "border border-[#E5E7EB] bg-white text-[#344054] hover:border-[#D1D5DB] hover:bg-[#F9FAFB]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </FadeIn>

        {featured ? (
          <FadeIn delay={0.14} key={featured.description}>
            <article className="mt-10 grid items-center gap-8 lg:mt-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] sm:rounded-[24px]">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  unoptimized
                  priority
                  className="object-cover object-center"
                />
              </div>

              <div className="max-w-[520px]">
                <span className="inline-flex rounded-[6px] bg-[#F3F4F6] px-3 py-1 text-[12px] font-medium text-[#111111]">
                  {featured.category}
                </span>
                <h2 className="mt-5 text-[34px] font-semibold leading-[1.15] tracking-[-0.01em] text-[#0c2d57]">
                  {featured.description}
                </h2>
                <p className="mt-4 text-[16px] leading-[1.3] text-[#4B5563]">
                  {featured.subtitle}
                </p>
                <Link
                  href={featured.href}
                  className="mt-7 inline-flex items-center justify-center rounded-full bg-[#111111] px-7 py-3 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Read more
                </Link>
              </div>
            </article>
          </FadeIn>
        ) : (
          <FadeIn delay={0.14}>
            <p className="mt-10 text-[16px] leading-[1.3] text-[#6B7280] lg:mt-14">
              No insights in this category yet. Check back soon.
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
