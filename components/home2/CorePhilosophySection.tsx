"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const lifecycleImage = "/images/home/investment.png";

export default function CorePhilosophySection() {
  return (
    <section id="platform" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-16">
        <div className="flex flex-col items-center gap-12 lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-14">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full max-w-[660px] lg:max-w-none"
          >
            <h2 className="text-balance text-[28px] font-normal leading-[1.2] tracking-[-0.02em] text-[#111111] sm:text-[34px] lg:text-[28px] xl:text-[40px]">
              Comprehensive Investment{" "}
              <span className="heading-accent text-[#143F73]">
                Management Across the Complete Investment Lifecycle
              </span>
            </h2>

            <p className="mt-6 text-[16px] leading-[1.3] text-[#1f1f1f]">
              Manage diverse asset classes, portfolios, transactions, valuations,
              and performance through one centralized platform designed for greater
              visibility and control.
            </p>
          </motion.div>

          {/* Right dashboard image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="w-full max-w-[680px] overflow-hidden rounded-[28px] lg:max-w-none lg:justify-self-end"
          >
            <Image
              src={lifecycleImage}
              alt="Investera consolidated dashboard showing IRR, category allocation and portfolio totals"
              width={750}
              height={562}
              sizes="(min-width: 1024px) 680px, 100vw"
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
