"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type DashboardPreviewProps = {
  src: string;
  alt: string;
  delay?: number;
  className?: string;
  width?: number;
  height?: number;
  imageClassName?: string;
  float?: boolean;
};

export default function DashboardPreview({
  src,
  alt,
  delay = 0.15,
  className = "",
  width = 720,
  height = 480,
  imageClassName = "h-auto w-full rounded-xl",
  float = true,
}: DashboardPreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, ease: "easeOut", delay }}
      className={className}
    >
      <motion.div
        animate={float ? { y: [0, -12, 0] } : undefined}
        transition={
          float
            ? {
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
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
