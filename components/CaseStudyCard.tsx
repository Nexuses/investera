"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type CaseStudyCardProps = {
  image: string;
  imageAlt: string;
  logo?: string;
  logoAlt?: string;
  title?: string;
  description: string;
  href?: string;
  delay?: number;
};

export default function CaseStudyCard({
  image,
  imageAlt,
  logo,
  logoAlt,
  title,
  description,
  href = "#",
  delay = 0.2,
}: CaseStudyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className="group flex h-full flex-col overflow-hidden rounded-[14px] bg-white shadow-none transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
    >
      <div className="relative h-[190px] w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          unoptimized
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col items-center px-6 pb-8 pt-6 text-center sm:px-7">
        {logo ? (
          <Image
            src={logo}
            alt={logoAlt ?? ""}
            width={180}
            height={48}
            unoptimized
            className="h-10 w-auto object-contain sm:h-11"
          />
        ) : (
          <h4 className="text-[28px] font-bold leading-snug text-[#0c2d57]">
            {title}
          </h4>
        )}

        <p className="mt-5 flex-1 text-[16px] leading-[1.65] text-[#475569] lg:text-[18px]">
          {description}
        </p>

        <Link
          href={href}
          className="mt-6 text-[11px] font-semibold tracking-[0.12em] text-[#0c2d57] transition-all duration-300 hover:tracking-[0.18em] sm:text-[12px]"
        >
          READ FULL CASE STUDY
        </Link>
      </div>
    </motion.article>
  );
}
