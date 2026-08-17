"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AUM =
  "https://investera.s3.us-east-2.amazonaws.com/Frame_2147255962zxcz_1786967280007_zzwr.png";
const ALLOCATION =
  "https://investera.s3.us-east-2.amazonaws.com/image_817_1786967280008_55eu.png";
const US =
  "https://investera.s3.us-east-2.amazonaws.com/screencapture-investera-investorapp-base44-app-home-2026-07-27-14_47_33_7_1786967280008_2ks8.png";
const UAE =
  "https://investera.s3.us-east-2.amazonaws.com/screencapture-investera-investorapp-base44-app-home-2026-07-27-14_47_33_8_1786967280008_bkzu.png";
const MARKET =
  "https://investera.s3.us-east-2.amazonaws.com/screencapture-investera-investorapp-base44-app-home-2026-07-27-14_47_33_9_1786967280008_yz3a.png";

const PLATFORM_BG =
  "https://investera.s3.us-east-2.amazonaws.com/Platform_BG_1786612003256_5z5e.png";

function Card({
  src,
  alt,
  className,
  width,
  height,
  delay = 0,
  float = 10,
  floatDuration = 4.6,
}: {
  src: string;
  alt: string;
  className: string;
  width: number;
  height: number;
  delay?: number;
  float?: number;
  floatDuration?: number;
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      <motion.div
        animate={{ y: [0, -float, 0] }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.7,
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          unoptimized
          className="h-auto w-full mix-blend-screen"
        />
      </motion.div>
    </motion.div>
  );
}

export default function CaseStudyHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#050B1F] bg-cover bg-center bg-no-repeat pt-[88px]"
      style={{ backgroundImage: `url('${PLATFORM_BG}')` }}
    >
      <div className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-10 px-6 py-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-6 lg:px-16 lg:py-8 xl:py-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[520px]"
        >
          <h1 className="text-[40px] font-normal leading-[1.12] tracking-[-0.03em] text-white sm:text-[48px] lg:text-[56px]">
            Real
            <br />
            Results Across the
            <br />
            <span className="heading-accent">Investment Lifecycle</span>
          </h1>
          <p className="mt-5 max-w-[480px] text-[16px] leading-[1.3] text-white/80 sm:mt-6">
            Explore how leading investment firms use Investera to unify
            operations, improve portfolio visibility, and make faster,
            data-driven decisions across asset classes.
          </p>
        </motion.div>

        <div className="relative mx-auto h-[400px] w-full max-w-[680px] sm:h-[500px] lg:mx-0 lg:h-[580px] lg:max-w-none">
          <motion.div
            className="absolute z-0"
            style={{
              top: "-14%",
              bottom: "-14%",
              left: "calc(-14% + 50px)",
              right: "calc(-14% - 50px)",
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05, ease: "easeOut" }}
          >
            <Image
              src={AUM}
              alt="Total assets under management AED 1,425.59M with 30-day live trend"
              fill
              priority
              unoptimized
              className="object-contain object-center mix-blend-screen"
            />
          </motion.div>
          <Card
            src={ALLOCATION}
            alt="Asset allocation across treasury, real estate, capital markets, commodities, and private equity"
            className="right-[-2%] top-[2%] z-[20] w-[46%] sm:w-[44%]"
            width={521}
            height={402}
            delay={0.18}
            float={12}
            floatDuration={5.1}
          />
          <Card
            src={MARKET}
            alt="Market intelligence for S&P 500 and TSMC"
            className="bottom-[calc(6%-30px)] left-[-4%] z-[5] w-[52%] sm:w-[48%]"
            width={464}
            height={338}
            delay={0.28}
            float={8}
            floatDuration={4.2}
          />
          <Card
            src={US}
            alt="US allocation 0 percent"
            className="bottom-[1%] right-[8%] z-[15] w-[34%] sm:w-[32%]"
            width={495}
            height={317}
            delay={0.34}
            float={10}
            floatDuration={4.6}
          />
          <Card
            src={UAE}
            alt="UAE allocation 100 percent"
            className="bottom-[14%] right-[-4%] z-[30] w-[36%] sm:w-[34%]"
            width={554}
            height={339}
            delay={0.4}
            float={14}
            floatDuration={3.8}
          />
        </div>
      </div>
    </section>
  );
}
