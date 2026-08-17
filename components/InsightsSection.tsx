import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const insights = [
  {
    title: "Investment Trends",
    description: "Family Offices and Their Challenges in the MENA Region",
    subtitle:
      "Explore the key portfolio, reporting, and governance challenges facing family offices across MENA.",
    image: "/images/insights/card-1.png",
    imageAlt:
      "Family office meeting discussing investment trends in the MENA region",
    href: "/blog",
  },
  {
    title: "FinTech",
    description: "Digital Assets in FinTech",
    subtitle:
      "Discover how digital assets are reshaping FinTech while creating new risks and opportunities.",
    image: "/images/insights/card-2.png",
    imageAlt: "Digital assets and FinTech technology visualization",
    href: "/blog",
  },
  {
    title: "Real Estate PropTech",
    description: "The Disruptive Force in Real Estate",
    subtitle:
      "Explore how PropTech is transforming real estate through data, automation, and smarter insights.",
    image: "/images/insights/card-3.png",
    imageAlt: "Modern real estate PropTech and property technology",
    href: "/blog",
  },
];

export default function InsightsSection({
  allInsightsHref = "/blog",
  compact = false,
}: {
  allInsightsHref?: string;
  compact?: boolean;
}) {
  return (
    <section
      id="insights"
      className={`${compact ? "bg-[#F4F4F4] py-[60px]" : "bg-[#F4F4F4] py-20 sm:py-24 lg:py-28"}`}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        {!compact && (
          <FadeIn className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <div className="max-w-[720px]">
              <h2 className="text-[34px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0c2d57] sm:text-[40px] lg:text-[44px]">
                Insights
              </h2>
              <p className="mt-4 max-w-[560px] text-[16px] leading-[1.3] text-[#6B7280]">
                Explore perspectives on investment management, financial
                technology, market trends, and the evolving investment landscape.
              </p>
            </div>

            <Link
              href={allInsightsHref}
              className="inline-flex w-fit shrink-0 items-center justify-center rounded-full border border-[#D1D5DB] bg-white px-5 py-2.5 text-[14px] font-semibold text-[#111111] transition-colors hover:border-[#9CA3AF] hover:bg-[#F9FAFB]"
            >
              All insights
            </Link>
          </FadeIn>
        )}

        <div
          className={`grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 ${
            compact ? "" : "mt-10 sm:mt-12 lg:mt-14"
          }`}
        >
          {insights.map((insight, index) => (
            <FadeIn key={insight.title} delay={index * 0.1}>
            <article
              className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-[#E5E7EB] bg-white transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_12px_28px_rgba(12,45,87,0.08)] sm:rounded-[20px]"
            >
              <Link
                href={insight.href}
                className="flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0c2d57]"
              >
                <div className="relative h-[200px] w-full overflow-hidden sm:h-[220px]">
                  <Image
                    src={insight.image}
                    alt={insight.imageAlt}
                    fill
                    unoptimized
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-300 motion-safe:group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[#0c2d57]/45 mix-blend-multiply"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.22) 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.06em] text-[#0c2d57]">
                    {insight.title}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
                  <h3 className="text-[20px] font-bold leading-[1.3] tracking-[-0.01em] text-[#0c2d57] sm:text-[22px]">
                    {insight.description}
                  </h3>
                  <p className="mt-2 flex-1 text-[16px] leading-[1.3] text-[#6B7280]">
                    {insight.subtitle}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[16px] font-semibold tracking-[0.04em] text-[#0c2d57] transition-opacity group-hover:opacity-80">
                    READ MORE
                    <span aria-hidden="true" className="text-[15px]">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
