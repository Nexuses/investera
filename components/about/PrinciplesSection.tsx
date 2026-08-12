"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const principles = [
  {
    title: "Connected Management",
    description:
      "Centralize portfolio management, deal tracking, investment reporting, and due diligence activities",
    icon: "https://investera.s3.us-east-2.amazonaws.com/fi_2889666-1_1786534353217_txg9.png",
  },
  {
    title: "Smarter Automation",
    description:
      "Simplify document management and investment processes through structured workflow automation",
    icon: "https://investera.s3.us-east-2.amazonaws.com/vdfv_1786534299376_o7iv.png",
  },
  {
    title: "AI-Powered Insights",
    description:
      "Access AI-powered market intelligence and investment information through connected mobile applications.",
    icon: "https://investera.s3.us-east-2.amazonaws.com/fi_2889666-2_1786534382145_0gm0.png",
  },
];

export default function PrinciplesSection() {
  return (
    <section className="mx-auto max-w-[1440px] bg-white px-4 pb-8 sm:px-6 sm:pb-10 lg:px-[44px] lg:pb-12">
      <div className="rounded-[12px] bg-[#F3F3F3] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex rounded-lg bg-[#E8E8E8] px-3.5 py-1.5 text-[13px] font-medium text-[#4B5563]"
        >
          Introduction
        </motion.span>

        <motion.h4
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          className="mt-6 w-full text-[28px] font-normal leading-[1.3] tracking-[-0.02em] text-[#111111]"
        >
          Investera Business Solutions develops financial technology and
          data-driven business applications that help investment professionals
          manage complex investment activities with greater efficiency,
          transparency, and control.
        </motion.h4>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-3">
          {principles.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: 0.12 + index * 0.08,
              }}
              className="rounded-[12px] bg-white px-7 py-8 sm:px-8 sm:py-9"
            >
              <div className="relative h-10 w-10 overflow-hidden rounded-[10px]">
                <Image
                  src={item.icon}
                  alt=""
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <h3 className="mt-7 text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#111111]">
                {item.title}
              </h3>
              <p className="mt-3 text-[16px] leading-[1.3] text-[#6B7280]">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
