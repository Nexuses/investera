"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Family Offices & High Net Worth Individuals",
    titleLines: ["Family Offices & High", "Net Worth Individuals"],
    description:
      "Maintain consolidated visibility across diverse personal and family investment holdings.",
    image: "/images/about/advantage/card-1.png",
    imageAlt: "Professionals collaborating with a tablet in an office",
  },
  {
    title: "Private Equity Firms",
    titleLines: ["Private Equity", "Firms"],
    description:
      "Manage investments, valuations, portfolio companies, and deal activities with improved control.",
    image: "/images/about/advantage/card-2.png",
    imageAlt: "Business partners reviewing plans on a tablet",
  },
  {
    title: "Portfolio & Fund Managers",
    titleLines: ["Portfolio & Fund", "Managers"],
    description:
      "Track investment pipelines, operations, reporting, performance, and portfolio oversight.",
    image: "/images/about/advantage/card-3.png",
    imageAlt: "Professionals smiling while reviewing work on a tablet",
  },
  {
    title: "Holding Companies",
    titleLines: ["Holding", "Companies"],
    description:
      "Simplify investment workflows, reporting, and governance across diverse business holdings.",
    image: "/images/about/advantage/card-1.png",
    imageAlt: "Professionals collaborating in a modern office",
  },
];

export default function AdvantageSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-[760px] text-center"
        >
          <h2 className="text-[40px] font-normal leading-tight tracking-[-0.02em]">
            <span className="font-normal text-[#1a1a1a]">Who </span>
            <span className="font-bold text-[#0c2d57]">We Support</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[16px] leading-[1.3] text-[#4B5563] sm:mt-6">
            Built for Investment Professionals
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: 0.08 + index * 0.07,
              }}
              className="flex flex-col overflow-hidden rounded-[12px] bg-white shadow-[0_10px_30px_rgba(12,45,87,0.08)]"
            >
              <div className="flex flex-1 flex-col px-5 pt-5 sm:px-6 sm:pt-6">
                <h3 className="text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#111111]">
                  {card.titleLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h3>
                <p className="mt-3 flex-1 text-[16px] leading-[1.3] text-[#6B7280]">
                  {card.description}
                </p>
              </div>
              <div className="relative mt-5 aspect-[4/3] w-full overflow-hidden sm:mt-6">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  unoptimized
                  className="object-cover object-center"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
