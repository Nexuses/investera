"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import DashboardImage from "./DashboardImage";

type FeatureCardProps = {
  title: ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  background: string;
  delay?: number;
  imageDelay?: number;
};

export default function FeatureCard({
  title,
  description,
  image,
  imageAlt,
  background,
  delay = 0,
  imageDelay = 0.15,
}: FeatureCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className="relative flex h-auto min-h-0 flex-col overflow-hidden rounded-[18px] border border-[#eeeeee] px-8 pt-8 pb-0 lg:h-[520px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[length:100%_100%] bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      />

      <div className="relative z-[1] flex min-h-0 flex-1 flex-col">
        <h3 className="text-[28px] font-normal leading-[1.15] text-[#1e293b] sm:text-[32px] lg:text-[36px]">
          {title}
        </h3>
        <p className="mt-4 w-[85%] text-[13px] leading-[1.5] text-[#333333] lg:mt-5">
          {description}
        </p>

        <div className="relative mt-auto -mx-8 w-[calc(100%+4rem)]">
          <DashboardImage
            src={image}
            alt={imageAlt}
            delay={delay + imageDelay}
          />
        </div>
      </div>
    </motion.article>
  );
}
