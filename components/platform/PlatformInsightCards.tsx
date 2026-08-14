import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const cards = [
  {
    title: "Portfolio Performance",
    description:
      "Track total assets, portfolio growth, allocation, and performance through clear, interactive dashboards.",
    image:
      "https://investera.s3.us-east-2.amazonaws.com/Frame_hjk_1786626912728_7jog.png",
    imageAlt: "Portfolio performance dashboard",
    flushRight: true,
  },
  {
    title: "Market Intelligence",
    description:
      "Access relevant market data, global news, financial information, and macro signals alongside your portfolio.",
    image:
      "https://investera.s3.us-east-2.amazonaws.com/Frame_ghk_1786626912728_a6v7.png",
    imageAlt: "Market intelligence trend chart",
  },
  {
    title: "AI-Powered Insights",
    description:
      "Ask investment questions, summarize deal metrics, and explore portfolio trends through an intuitive AI assistant.",
    image:
      "https://investera.s3.us-east-2.amazonaws.com/Frame_10000hjk03850_1786626912728_rjlq.png",
    imageAlt: "AI-powered asset allocation insights",
  },
];

export default function PlatformInsightCards() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {cards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 0.1}>
            <article
              className="flex h-full flex-col overflow-hidden rounded-[12px] bg-white shadow-[0_12px_32px_rgba(15,23,42,0.10)]"
            >
              <div
                className={`relative bg-[#EBF5FF] pt-4 sm:pt-5 ${
                  card.flushRight
                    ? "pl-4 pr-0 sm:pl-5"
                    : "px-4 sm:px-5"
                }`}
              >
                <div
                  className={`relative aspect-[4/3] w-full overflow-hidden ${
                    card.flushRight ? "rounded-tl-[12px]" : "rounded-t-[12px]"
                  }`}
                >
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    unoptimized
                    className="object-cover object-top"
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
