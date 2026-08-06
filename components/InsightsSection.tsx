import Image from "next/image";
import Link from "next/link";

const insights = [
  {
    title: "Investment Trends",
    description: "Family Offices and Their Challenges in the MENA Region",
    image: "/images/insights/card-1.png",
    imageAlt:
      "Family office meeting discussing investment trends in the MENA region",
    href: "#insight-investment-trends",
  },
  {
    title: "FinTech",
    description: "Digital Assets in FinTech",
    image: "/images/insights/card-2.png",
    imageAlt: "Digital assets and FinTech technology visualization",
    href: "#insight-fintech",
  },
  {
    title: "Real Estate PropTech",
    description: "The Disruptive Force in Real Estate",
    image: "/images/insights/card-3.png",
    imageAlt: "Modern real estate PropTech and property technology",
    href: "#insight-proptech",
  },
];

export default function InsightsSection() {
  return (
    <section className="bg-[#17477F] pt-[72px] pb-[80px] lg:pt-[95px] lg:pb-[105px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        {/* Static heading — no animation */}
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <h2 className="text-[40px] font-semibold leading-tight text-white">
            Insights
          </h2>
          <p className="mt-6 text-[16px] leading-[1.4] text-white/90 lg:text-[18px]">
            Explore perspectives on investment management, financial technology,
            market trends, and the evolving investment landscape.
          </p>
        </div>

        <div className="mt-11 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 lg:mt-[85px] lg:grid-cols-3 lg:gap-5">
          {insights.map((insight) => (
            <article
              key={insight.title}
              className="group flex h-auto flex-col overflow-hidden rounded-[20px] border border-[#EEEEEE] bg-white transition-all duration-300 motion-safe:hover:-translate-y-[5px] motion-safe:hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] lg:h-[390px]"
            >
              <Link
                href={insight.href}
                className="flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <div className="mx-3.5 mt-3.5 overflow-hidden rounded-[18px]">
                  <div className="relative h-[190px] w-full overflow-hidden lg:h-[215px]">
                    <Image
                      src={insight.image}
                      alt={insight.imageAlt}
                      fill
                      unoptimized
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-300 motion-safe:group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-4 pb-5 pt-4">
                  <h5 className="text-[24px] font-semibold leading-[1.2] text-[#111111]">
                    {insight.title}
                  </h5>
                  <p className="mt-3 text-[16px] leading-[1.4] text-[#4A4A4A] lg:text-[18px]">
                    {insight.description}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
