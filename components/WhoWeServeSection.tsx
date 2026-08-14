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
      "right-[6%] top-[calc(52%+30px)] w-[38%] max-w-[170px] sm:right-[8%] sm:top-[calc(50%+30px)] lg:right-[7%] lg:top-[calc(48%+30px)]",
    anim: "who-float-c",
  },
];

export default function WhoWeServeSection() {
  return (
    <section id="who-we-serve" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <div className="mx-auto max-w-[1240px]">
          <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
            <span className="inline-flex rounded-full bg-[#E8F1FA] px-4 py-1.5 text-[13px] font-medium text-[#17477F]">
              Who We Serve
            </span>

            <h2 className="mt-5 text-[40px] font-normal leading-tight text-[#1e293b]">
              Solutions for{" "}
              <span className="font-bold text-[#17477F]">Every Investor</span>
            </h2>

            <p className="mt-4 max-w-[1000px] text-[16px] leading-[1.3] text-[#4A4A4A]">
              Purpose-built investment management solutions for professionals and
              organizations managing complex, multi-asset portfolios.
            </p>
          </div>

          <div className="mt-[60px] grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col"
            >
              <h3 className="text-[34px] font-normal leading-[1.2] text-[#1e293b] lg:text-[40px]">
                Built for
                <br />
                <span className="font-bold text-[#17477F]">
                  Investment Professionals
                </span>
              </h3>

              <ul className="mt-8 space-y-4">
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
                href="/platform"
                className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-[#D8A900] px-6 py-3 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C49A00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17477F]"
              >
                Explore Solutions
                <span aria-hidden="true">→</span>
              </Link>
            </motion.div>

            {/* Right — visual */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="group relative min-h-[360px] overflow-hidden rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] sm:min-h-[440px] lg:h-[480px]"
            >
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
