"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type DashboardImageProps = {
  src: string;
  alt: string;
  delay?: number;
  className?: string;
  width?: number;
  height?: number;
  imageClassName?: string;
  float?: boolean;
  floatDelay?: number;
};

export default function DashboardImage({
  src,
  alt,
  delay = 0.15,
  className = "",
  width = 560,
  height = 360,
  imageClassName = "h-auto w-full object-cover object-top",
  float = true,
  floatDelay = 0,
}: DashboardImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, ease: "easeOut", delay }}
      className={`relative w-full ${className}`}
    >
      <motion.div
        animate={float ? { y: [0, -10, 0] } : undefined}
        transition={
          float
            ? {
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: floatDelay,
              }
            : undefined
        }
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          unoptimized
          className={imageClassName}
        />
      </motion.div>
    </motion.div>
  );
}
