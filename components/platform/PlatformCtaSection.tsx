"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";

const TABLET =
  "https://investera.s3.us-east-2.amazonaws.com/Group_1000005978_1786688998844_qgh7.png";
const UAE_CARD =
  "https://investera.s3.us-east-2.amazonaws.com/screencapture-investera-investorapp-base44-app-home-2026-07-27-14_47_33_9_1786628568796_1xnc.png";
const US_CARD =
  "https://investera.s3.us-east-2.amazonaws.com/screencapture-investera-investorapp-base44-app-home-2026-07-27-14_47_33_10_1786628568796_8kke.png";

const appleEase = [0.16, 1, 0.3, 1] as const;

type PlatformCtaSectionProps = {
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  deviceImage?: string;
  deviceImageAlt?: string;
  deviceImageClassName?: string;
  showOverlayCards?: boolean;
  titleSingleLine?: boolean;
  backgroundVariant?: "default" | "hero";
  deviceComposition?: {
    laptop: string;
    phone: string;
  };
};

export default function PlatformCtaSection({
  titleLine1 = "Transform Investment",
  titleLine2 = "Data into Strategy",
  description = "Monitor your portfolio, evaluate exposure, stay ahead of market developments, and capitalize on new opportunities through one connected investor portal.",
  deviceImage = TABLET,
  deviceImageAlt = "Investera investor portal on tablet",
  deviceImageClassName = "relative z-[1] h-auto w-full mix-blend-screen",
  showOverlayCards = true,
  titleSingleLine = false,
  backgroundVariant = "default",
  deviceComposition,
}: PlatformCtaSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isHeroBg = backgroundVariant === "hero";

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden ${isHeroBg ? "bg-[#050B1F]" : "bg-[#05070F]"}`}
    >
      {isHeroBg ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-[radial-gradient(ellipse_80%_55%_at_50%_85%,rgba(37,99,235,0.28)_0%,rgba(37,99,235,0.1)_40%,transparent_70%)]"
        />
      ) : (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute -left-[12%] -top-[18%] h-[78%] w-[62%] rounded-full bg-[#1A8FA8]/28 blur-[140px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-[28%] top-[8%] h-[48%] w-[46%] rounded-full bg-[#3A2A78]/18 blur-[120px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-10%] left-1/2 h-[42%] w-[70%] -translate-x-1/2 rounded-full bg-[#0B4C7A]/22 blur-[110px]"
          />
        </>
      )}

      <div className="relative z-20 mx-auto max-w-[1440px] px-6 pt-16 text-center sm:pt-20 lg:px-16 lg:pt-24">
        <h2 className="text-[36px] font-normal leading-[1.12] tracking-[-0.03em] text-white sm:text-[48px] lg:text-[56px]">
          {titleSingleLine ? (
            <>
              <span className="font-normal">{titleLine1} </span>
              <span className="heading-accent">{titleLine2}</span>
            </>
          ) : (
            <>
              <span className="block font-normal">{titleLine1}</span>
              <span className="block heading-accent">{titleLine2}</span>
            </>
          )}
        </h2>

        <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-[1.5] text-white/82 sm:mt-6 sm:text-[17px] lg:text-[18px]">
          {description}
        </p>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4">
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

      <div className="relative z-10 mx-auto mt-8 h-[300px] w-full max-w-[1080px] sm:mt-10 sm:h-[420px] lg:mt-12 lg:h-[520px]">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[8%] h-[70%] w-[78%] -translate-x-1/2 rounded-full bg-[#4CC9F0]/12 blur-[70px]"
        />

        <motion.div
          className="absolute inset-x-0 top-0 will-change-transform"
          initial={{ opacity: 0, y: 80, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: appleEase }}
        >
          <div className="relative mx-auto w-[92%] sm:w-[88%] lg:w-[84%]">
            <div className="relative drop-shadow-[0_40px_80px_rgba(0,0,0,0.55)]">
              {deviceComposition ? (
                <div className="relative mx-auto flex w-full max-w-[900px] items-end justify-center pb-2">
                  <Image
                    src={deviceComposition.laptop}
                    alt="Investera dashboard on laptop"
                    width={1400}
                    height={980}
                    unoptimized
                    className="relative z-[1] h-auto w-[82%] object-contain mix-blend-screen"
                  />
                  <div className="absolute bottom-0 right-[0%] z-[2] w-[30%] sm:right-[2%] sm:w-[28%] lg:right-[4%] lg:w-[26%]">
                    <Image
                      src={deviceComposition.phone}
                      alt="Investera dashboard on smartphone"
                      width={420}
                      height={860}
                      unoptimized
                      className="h-auto w-full object-contain mix-blend-screen drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                </div>
              ) : (
                <Image
                  src={deviceImage}
                  alt={deviceImageAlt}
                  width={1400}
                  height={980}
                  unoptimized
                  className={deviceImageClassName}
                />
              )}

              {showOverlayCards ? (
                <>
                  <motion.div
                    className="pointer-events-none absolute right-[-2.5%] top-[33%] z-[3] w-[23%] sm:right-[-3%] sm:top-[32%] sm:w-[22%] lg:w-[21%]"
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

                  <motion.div
                    className="pointer-events-none absolute right-[-0.5%] top-[48%] z-[3] w-[21.5%] sm:right-[-1%] sm:top-[47%] sm:w-[20.5%] lg:w-[19.5%]"
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
                </>
              ) : null}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
