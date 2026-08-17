"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const UAE_US_GROUP =
  "https://investera.s3.us-east-2.amazonaws.com/Group_1000002886_1786617498790_2iaw.png";
const ASSET_ALLOCATION =
  "https://investera.s3.us-east-2.amazonaws.com/Group_1000002879_1786617498790_0u37.png";
const SECTOR_DISTRIBUTION =
  "https://investera.s3.us-east-2.amazonaws.com/image_823_1786617498790_2vhi.png";
const TOP_ARROW =
  "https://investera.s3.us-east-2.amazonaws.com/Vector_68_1786617498790_hmnd.png";
const LEFT_ARROW =
  "https://investera.s3.us-east-2.amazonaws.com/Vector_69_1786617498790_6eg1.png";
const BUSINESSMAN =
  "https://investera.s3.us-east-2.amazonaws.com/ChatGPT_Image_Aug_13__2026__09_52_55_AM_1_1786617498790_095e.png";

export default function PlatformHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#050B1F] bg-cover bg-center bg-no-repeat pt-[118px]"
      style={{
        backgroundImage:
          "url('https://investera.s3.us-east-2.amazonaws.com/Platform_BG_1786612003256_5z5e.png')",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <div className="mx-auto flex max-w-[980px] flex-col items-center text-center">
          <h1 className="text-[40px] font-normal leading-[1.12] tracking-[-0.03em] text-white sm:text-[56px] lg:text-[64px]">
            <span className="block font-normal">Bring Every</span>
            <span className="block heading-accent">Investment Together</span>
          </h1>

          <p className="mt-6 max-w-[900px] text-[16px] leading-[1.45] text-white/80 sm:mt-7 sm:text-[18px] lg:text-[19px]">
            Investera Pro brings portfolios, deals, reporting, documents,
            workflows, and investment insights into one secure
            platform, helping investment teams save time, improve visibility,
            and make informed decisions faster.
          </p>

          <div className="mt-8 flex w-full max-w-[420px] flex-col items-stretch gap-3 sm:mt-9 sm:max-w-none sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <Link
              href="/contact"
              className="rounded-full border border-white/40 bg-transparent px-7 py-3 text-[14px] font-semibold text-white transition-colors hover:border-white hover:bg-white/5"
            >
              Contact Us
            </Link>
            <Link
              href="/book-a-demo"
              className="rounded-full bg-[#CCA400] px-7 py-3 text-[14px] font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Start A Free Trial
            </Link>
          </div>
        </div>

        <div className="relative mx-auto mt-12 h-[360px] w-full max-w-[1020px] sm:mt-14 sm:h-[480px] lg:mt-16 lg:h-[560px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="pointer-events-none absolute left-[34%] top-[1%] z-[8] hidden w-[34%] sm:block"
          >
            <Image
              src={TOP_ARROW}
              alt=""
              width={391}
              height={110}
              unoptimized
              className="h-auto w-full mix-blend-screen"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="pointer-events-none absolute left-[7%] top-[38%] z-[8] hidden w-[13%] sm:block"
          >
            <Image
              src={LEFT_ARROW}
              alt=""
              width={183}
              height={186}
              unoptimized
              className="h-auto w-full mix-blend-screen"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="absolute left-[3%] top-[8%] z-[16] w-[32%]"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.9,
              }}
            >
              <Image
                src={UAE_US_GROUP}
                alt="UAE and US allocation cards"
                width={555}
                height={404}
                unoptimized
                className="h-auto w-full mix-blend-screen"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.28, ease: "easeOut" }}
            className="absolute right-0 top-[10%] z-[16] w-[38%]"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5.1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.1,
              }}
            >
              <Image
                src={ASSET_ALLOCATION}
                alt="Asset allocation"
                width={558}
                height={430}
                unoptimized
                className="h-auto w-full mix-blend-screen"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.1, ease: "easeOut" }}
            className="absolute bottom-0 left-[27%] z-[24] w-[44%]"
          >
            <Image
              src={BUSINESSMAN}
              alt="Investment professional reviewing portfolios on a laptop"
              width={830}
              height={906}
              priority
              unoptimized
              className="h-auto w-full mix-blend-screen"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="absolute left-[6%] top-[58%] z-[26] w-[24%]"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              }}
            >
              <Image
                src={SECTOR_DISTRIBUTION}
                alt="Sector distribution"
                width={389}
                height={292}
                unoptimized
                className="h-auto w-full mix-blend-screen"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
