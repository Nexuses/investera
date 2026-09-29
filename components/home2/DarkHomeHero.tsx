"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CurrencyExposureCard from "@/components/CurrencyExposureCard";
import Header from "@/components/Header";

const trustAvatars = [
  {
    src: "https://investera.s3.us-east-2.amazonaws.com/629_1788522406122_jdp6.jpg",
    alt: "Investment professional",
  },
  {
    src: "https://investera.s3.us-east-2.amazonaws.com/59335_1788522406122_cepg.jpg",
    alt: "Portfolio manager",
  },
  {
    src: "https://investera.s3.us-east-2.amazonaws.com/56066_1788522406122_jq4w.jpg",
    alt: "Family office advisor",
  },
  {
    src: "https://investera.s3.us-east-2.amazonaws.com/129417_1788522406123_1pf8.jpg",
    alt: "Fund manager",
  },
  {
    src: "https://investera.s3.us-east-2.amazonaws.com/1497_1788522406123_mxlf.jpg",
    alt: "Investment analyst",
  },
];

export default function DarkHomeHero() {
  return (
    <>
      <Header />

      <section className="relative overflow-hidden bg-[#020817] pt-[88px]">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[42%] h-[640px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(40,90,180,0.22)_0%,transparent_68%)]"
        />

        <div className="relative z-10 mx-auto max-w-[900px] px-6 pb-4 pt-10 text-center sm:pb-5 sm:pt-14 lg:pt-16">
          <motion.h1
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[42px] font-normal leading-[1.15] tracking-[-0.03em] text-white sm:text-[56px] lg:text-[68px]"
          >
            Bringing Investment
            <br />
            <span className="mt-2 inline-block -skew-x-[12deg] bg-[#CCA400] px-4 py-1 sm:mt-3 sm:px-5 sm:py-1.5 lg:px-6">
              <span className="inline-block skew-x-[12deg] font-semibold text-white">
                Management Together
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.12 }}
            className="mx-auto mt-5 max-w-[620px] text-[16px] leading-[1.3] text-white/70 sm:mt-6"
          >
            A suite of smart financial tools that streamlines your operations,
            optimises cash flow and drives better decisions across every asset
            class you hold.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.22 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-9 sm:gap-4"
          >
            <Link
              href="/book-a-demo"
              className="rounded-full bg-[#CCA400] px-7 py-3 text-[14px] font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Book a demo
            </Link>
            <Link
              href="/platform"
              className="rounded-full border border-white/40 bg-transparent px-7 py-3 text-[14px] font-semibold text-white transition-colors hover:border-white hover:bg-white/5"
            >
              Discover the platform
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.32 }}
            className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:mt-6 sm:gap-4"
          >
            <div className="flex items-center">
              {trustAvatars.map((avatar, index) => (
                <div
                  key={avatar.src}
                  className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white shadow-[0_4px_12px_rgba(0,0,0,0.28)] sm:h-10 sm:w-10"
                  style={{ marginLeft: index === 0 ? 0 : -10, zIndex: index + 1 }}
                >
                  <Image
                    src={avatar.src}
                    alt={avatar.alt}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-left text-[14px] leading-[1.35] sm:text-[15px]">
              <span className="font-semibold text-white">
                Portfolio managers, family offices and fund teams
              </span>{" "}
              <span className="font-normal text-white/55">run on Investera</span>
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="relative z-10 mx-auto max-w-[1100px] px-4 pb-0 sm:px-8 lg:px-12"
        >
          <div className="relative mx-auto">
            <div className="overflow-hidden rounded-t-[20px] sm:rounded-t-[28px] lg:rounded-t-[32px]">
              <Image
                src="https://investera.s3.us-east-2.amazonaws.com/Hero_Dashboard__1__1790064047492_e095.png"
                alt="Investera dashboard showing total assets under management and 30-day live trend"
                width={1920}
                height={1200}
                priority
                unoptimized
                className="h-auto w-full"
              />
            </div>

            <motion.div
              className="pointer-events-none absolute right-[-2%] top-[18%] z-20 w-[32%] sm:right-[-4%] sm:top-[16%] sm:w-[28%] lg:w-[24%]"
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              >
                <CurrencyExposureCard codes={["USD", "EUR", "GBP", "JPY"]} />
              </motion.div>
            </motion.div>

            <motion.div
              className="pointer-events-none absolute right-[0%] top-[calc(36%+40px)] z-20 w-[30%] sm:right-[-1%] sm:top-[calc(34%+40px)] sm:w-[26%] lg:w-[22%]"
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.7,
                }}
              >
                <CurrencyExposureCard
                  codes={["AED", "SAR", "KWD"]}
                  startDelayMs={1400}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
