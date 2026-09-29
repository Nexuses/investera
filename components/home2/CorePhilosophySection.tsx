"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const lifecycleImage =
  "https://investera.s3.us-east-2.amazonaws.com/image__43__1790658331924_l4cj.png";

export default function CorePhilosophySection() {
  return (
    <section id="platform" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-16">
        <div className="flex flex-col items-center gap-12 lg:grid lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-center lg:gap-10">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full max-w-[660px] lg:max-w-none"
          >
            <h2 className="text-[40px] font-normal leading-[1.15] tracking-[-0.02em] text-[#111111]">
              Comprehensive
              <br />
              Investment{" "}
              <span className="heading-accent text-[#143F73]">
                Management Across
              </span>
              <br />
              <span className="heading-accent text-[#143F73]">
                the Complete Investment Lifecycle
              </span>
            </h2>

            <p className="mt-6 text-[16px] leading-[1.3] text-[#1f1f1f]">
              Manage diverse asset classes, portfolios, transactions, valuations,
              and performance through one centralized platform designed for greater
              visibility and control.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="w-full max-w-[560px] overflow-hidden rounded-[28px] lg:max-w-none lg:justify-self-end"
          >
            <Image
              src={lifecycleImage}
              alt="Investment lifecycle dashboard"
              width={1200}
              height={900}
              unoptimized
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
