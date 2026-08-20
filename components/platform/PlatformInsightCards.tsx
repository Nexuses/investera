import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const cards = [
  {
    title: "Portfolio Performance",
    id: "portfolio-performance",
    description:
      "Track total assets, portfolio growth, allocation, and performance through clear, interactive dashboards.",
    image:
      "https://investera.s3.us-east-2.amazonaws.com/portfolio_1787227241834_mv7q.png",
    imageAlt: "Portfolio breakdown table with market values",
  },
  {
    title: "Market Intelligence",
    id: "market-intelligence",
    description:
      "Access relevant market data, global news, financial information, and macro signals alongside your portfolio.",
    image:
      "https://investera.s3.us-east-2.amazonaws.com/Frame_ghk_1786626912728_a6v7.png",
    imageAlt: "Market intelligence trend chart",
  },
  {
    title: "AI-Powered Insights",
    id: "ai-powered-insights",
    description:
      "Ask investment questions, summarize deal metrics, and explore portfolio trends through an intuitive AI assistant.",
    image:
      "https://investera.s3.us-east-2.amazonaws.com/Frame_10000hjk03850_1786626912728_rjlq.png",
    imageAlt: "AI-powered asset allocation insights",
  },
  {
    title: "See the Full Picture",
    id: "full-picture",
    description:
      "Replace scattered reports with a centralized dashboard to track AUM, portfolio growth, allocations, investment activity, and insights in one view.",
    image:
      "https://investera.s3.us-east-2.amazonaws.com/Frame_hjk_1786626912728_7jog.png",
    imageAlt: "Investera dashboard with total assets under management",
    flushRight: true,
    imageClass: "h-full w-auto max-w-full object-contain object-right-bottom",
  },
];

export default function PlatformInsightCards() {
  return (
    <section id="platform-insights" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <FadeIn className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[32px] font-normal leading-tight tracking-[-0.02em] sm:text-[40px]">
            <span className="font-normal text-[#1a1a1a]">
              Everything You Need to Manage{" "}
            </span>
            <span className="heading-accent text-[#0c2d57]">
              Investments Smarter
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-[16px] leading-[1.45] text-[#4B5563] sm:mt-5">
            Track portfolio performance, access market intelligence, and uncover
            actionable insights, all from one unified platform.
          </p>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {cards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 0.1}>
              <article
                id={card.id}
                className="flex h-full flex-col overflow-hidden rounded-[12px] bg-white shadow-[0_12px_32px_rgba(15,23,42,0.10)]"
              >
                <div
                  className={`relative -mt-[20px] bg-[#EBF5FF] pt-0 ${
                    card.flushRight
                      ? "pl-4 pr-0 sm:pl-5"
                      : "px-4 sm:px-5"
                  }`}
                >
                  <div
                    className={`relative flex h-[200px] w-full items-end overflow-hidden sm:h-[220px] ${
                      card.flushRight
                        ? "justify-end rounded-tl-[12px]"
                        : "justify-center rounded-t-[12px]"
                    }`}
                  >
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      width={640}
                      height={480}
                      unoptimized
                      className={
                        card.imageClass ??
                        "h-full w-auto max-w-full object-contain object-bottom"
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6 sm:pb-7 sm:pt-6">
                  <h3 className="text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#0c2d57]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-[1.3] text-[#4B5563]">
                    {card.description}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
