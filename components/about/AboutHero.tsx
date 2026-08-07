"use client";

import { motion } from "framer-motion";

const HERO_VIDEO =
  "https://investera.s3.us-east-2.amazonaws.com/0_Cityscape_Night_1920x1080__1__1786101904637_fxx8.mp4";

export default function AboutHero() {
  return (
    <section className="mx-auto max-w-[1440px] bg-white px-4 pb-8 pt-1 sm:px-6 sm:pb-10 sm:pt-2 lg:px-[44px] lg:pb-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-[min(72vh,620px)] min-h-[380px] overflow-hidden rounded-[24px] shadow-[0_24px_50px_rgba(0,0,0,0.16)] sm:rounded-[32px] lg:rounded-[40px]"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-black/50"
        />

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="text-center text-[44px] font-normal leading-none tracking-[-0.03em] text-white sm:text-[60px] lg:text-[72px]"
          >
            About Investera
          </motion.h1>
        </div>
      </motion.div>
    </section>
  );
}
