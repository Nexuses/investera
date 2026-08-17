"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";

const UAE_CARD =
  "https://investera.s3.us-east-2.amazonaws.com/screencapture-investera-investorapp-base44-app-home-2026-07-27-14_47_33_9_1786628568796_1xnc.png";
const US_CARD =
  "https://investera.s3.us-east-2.amazonaws.com/screencapture-investera-investorapp-base44-app-home-2026-07-27-14_47_33_10_1786628568796_8kke.png";

export default function DarkHomeHero() {
  return (
    <>
      <Header />

      <section className="relative overflow-hidden bg-[#050B1F] pt-[88px]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-[radial-gradient(ellipse_80%_55%_at_50%_85%,rgba(37,99,235,0.28)_0%,rgba(37,99,235,0.1)_40%,transparent_70%)]"
        />

        <div className="relative z-10 mx-auto max-w-[900px] px-6 pb-8 pt-10 text-center sm:pb-10 sm:pt-14 lg:pt-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[42px] font-normal leading-[1.12] tracking-[-0.03em] text-white sm:text-[56px] lg:text-[68px]"
          >
            Bringing Investment
            <br />
            <span className="heading-accent">
              management together
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
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
                src="/images/home-3/dashboard-clean.png"
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
                <Image
                  src={UAE_CARD}
                  alt="UAE allocation 100 percent"
                  width={420}
                  height={180}
                  unoptimized
                  className="h-auto w-full mix-blend-screen drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
                />
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
                <Image
                  src={US_CARD}
                  alt="US allocation 0 percent"
                  width={400}
                  height={170}
                  unoptimized
                  className="h-auto w-full mix-blend-screen drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
