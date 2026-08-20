"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";

const UAE_CARD =
  "https://investera.s3.us-east-2.amazonaws.com/screencapture-investera-investorapp-base44-app-home-2026-07-27-14_47_33_9_1786628568796_1xnc.png";
const US_CARD =
  "https://investera.s3.us-east-2.amazonaws.com/screencapture-investera-investorapp-base44-app-home-2026-07-27-14_47_33_10_1786628568796_8kke.png";

const trustAvatars = [
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80",
    alt: "Investment professional",
  },
  {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&h=120&q=80",
    alt: "Portfolio manager",
  },
  {
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80",
    alt: "Family office advisor",
  },
  {
    src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&h=120&q=80",
    alt: "Fund manager",
  },
  {
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=120&h=120&q=80",
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
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(100,140,200,0.07) 0, rgba(100,140,200,0.07) 1px, transparent 1px, transparent 80px)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[42%] h-[640px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(40,90,180,0.22)_0%,transparent_68%)]"
        />

        <div className="relative z-10 mx-auto max-w-[900px] px-6 pb-4 pt-10 text-center sm:pb-5 sm:pt-14 lg:pt-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[42px] font-semibold leading-[1.15] tracking-[-0.03em] text-white sm:text-[56px] lg:text-[68px]"
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
                src="https://investera.s3.us-east-2.amazonaws.com/dashboard_1787226251574_8y2l.png"
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
