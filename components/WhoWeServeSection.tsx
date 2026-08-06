"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const audience = [
  "Portfolio Managers",
  "Family Office",
  "Private Equity & VC Firms",
  "Investment & Fund Managers",
];

const partnerLogos = [
  { src: "/images/who-we-serve/logo-1.png", alt: "Technology partner logo 1" },
  { src: "/images/who-we-serve/logo-2.png", alt: "Technology partner logo 2" },
  { src: "/images/who-we-serve/logo-3.png", alt: "Technology partner logo 3" },
  { src: "/images/who-we-serve/logo-4.png", alt: "Technology partner logo 4" },
  { src: "/images/who-we-serve/logo-5.png", alt: "Technology partner logo 5" },
  { src: "/images/who-we-serve/logo-6.png", alt: "Technology partner logo 6" },
  { src: "/images/who-we-serve/logo-7.png", alt: "Technology partner logo 7" },
  { src: "/images/who-we-serve/logo-8.png", alt: "Mithaq Holding partner logo" },
];

const floatingUi = [
  {
    src: "/images/who-we-serve/ui-1.png",
    alt: "Won Deals dashboard widget",
    className:
      "left-[4%] top-[calc(48%-30px)] w-[42%] max-w-[190px] sm:left-[6%] sm:top-[calc(46%-30px)] lg:left-[5%] lg:top-[calc(44%-60px)]",
    anim: "who-float-a",
  },
  {
    src: "/images/who-we-serve/ui-2.png",
    alt: "Dropped Deals dashboard widget",
    className:
      "left-[6%] top-[62%] w-[42%] max-w-[190px] sm:left-[8%] sm:top-[60%] lg:left-[7%] lg:top-[58%]",
    anim: "who-float-b",
  },
  {
    src: "/images/who-we-serve/ui-3.png",
    alt: "Performance chart dashboard widget",
    className:
      "right-[6%] top-[52%] w-[38%] max-w-[170px] sm:right-[8%] sm:top-[50%] lg:right-[7%] lg:top-[48%]",
    anim: "who-float-c",
  },
];

function LogoTile({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-[8px] bg-white p-2.5 shadow-none">
      <Image
        src={src}
        alt={alt}
        width={64}
        height={64}
        unoptimized
        loading="lazy"
        className="h-full w-full object-contain shadow-none drop-shadow-none"
      />
    </div>
  );
}

function MarqueeRow({
  direction,
  duration,
  offset = 0,
}: {
  direction: "ltr" | "rtl";
  duration: number;
  offset?: number;
}) {
  const logos = [...partnerLogos, ...partnerLogos, ...partnerLogos];
  const rotated = [...logos.slice(offset), ...logos.slice(0, offset)];

  return (
    <div className="who-marquee-row flex overflow-hidden">
      <div
        className={`who-marquee-track flex w-max gap-[30px] ${
          direction === "ltr" ? "who-marquee-ltr" : "who-marquee-rtl"
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {rotated.map((logo, index) => (
          <LogoTile key={`${logo.src}-${index}`} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </div>
  );
}

export default function WhoWeServeSection() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <div className="mx-auto max-w-[1240px]">
          {/* Header — static, no entrance animation */}
          <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
            <span className="inline-flex rounded-full bg-[#E8F1FA] px-4 py-1.5 text-[13px] font-medium text-[#17477F]">
              Who We Serve
            </span>

            <h2 className="mt-5 text-[40px] font-normal leading-tight text-[#1e293b]">
              Solutions for{" "}
              <span className="font-bold text-[#17477F]">Every Investor</span>
            </h2>

            <p className="mt-4 max-w-[1000px] text-[18px] leading-relaxed text-[#4A4A4A]">
              Purpose-built investment management solutions for professionals and
              organizations managing complex, multi-asset portfolios.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-[60px] grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* Left card */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="group relative flex min-h-[600px] flex-col overflow-hidden rounded-2xl border border-[#E8E8E8] bg-white lg:h-[640px]"
            >
              <div className="relative z-10 p-7 pb-4">
                <h3 className="text-[34px] font-normal leading-snug text-[#1e293b]">
                  Built for{" "}
                  <span className="font-bold text-[#17477F]">
                    Investment Professionals
                  </span>
                </h3>

                <ul className="mt-5 space-y-3">
                  {audience.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[18px] text-[#4A4A4A]"
                    >
                      <Image
                        src="/images/who-we-serve/tick.png"
                        alt=""
                        width={20}
                        height={20}
                        unoptimized
                        aria-hidden="true"
                        className="h-5 w-5 shrink-0 object-contain"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#solutions"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#D8A900] px-5 py-2.5 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C49A00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17477F]"
                >
                  Explore Solutions
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className="relative mt-auto min-h-[280px] flex-1 bg-white sm:min-h-[320px]">
                <Image
                  src="/images/who-we-serve/person.png"
                  alt="Investment professional working on a laptop"
                  width={888}
                  height={624}
                  unoptimized
                  loading="lazy"
                  className="absolute inset-x-0 bottom-0 h-auto w-full bg-transparent object-contain object-bottom shadow-none drop-shadow-none"
                />

                {floatingUi.map((item) => (
                  <div
                    key={item.src}
                    className={`who-float absolute z-10 ${item.anim} ${item.className} transition-transform duration-300 group-hover:scale-[1.02]`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={220}
                      height={120}
                      unoptimized
                      loading="lazy"
                      className="h-auto w-full shadow-none drop-shadow-none"
                    />
                  </div>
                ))}
              </div>
            </motion.article>

            {/* Right card */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
              className="relative flex min-h-[620px] flex-col overflow-hidden rounded-2xl bg-[#17477F] lg:h-[640px]"
            >
              <div className="relative z-10 px-7 pt-7">
                <h3 className="text-[34px] font-normal leading-snug text-white">
                  Our <span className="font-bold">Technology Partners</span>
                </h3>
                <p className="mt-4 max-w-[500px] text-[18px] leading-relaxed text-white/90">
                  Integrate Investera with leading technology, market data,
                  document, and business platforms to create a connected
                  investment management ecosystem.
                </p>
                <Link
                  href="#partners"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[14px] font-semibold text-[#17477F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F3F6FA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Partner with Us
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className="who-marquee-area relative mt-8 flex-1 overflow-hidden pb-0 pt-2">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#17477F] to-transparent sm:w-14" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#17477F] to-transparent sm:w-14" />

                <div className="flex flex-col gap-[22px] py-2">
                  <MarqueeRow direction="ltr" duration={28} offset={0} />
                  <MarqueeRow direction="rtl" duration={32} offset={2} />
                  <MarqueeRow direction="ltr" duration={26} offset={4} />
                  <MarqueeRow direction="rtl" duration={30} offset={1} />
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
