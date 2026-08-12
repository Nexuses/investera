"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const values = [
  {
    title: "Portfolio & Deal Management",
    description:
      "Track opportunities, transactions, valuations, holdings, and portfolio performance across the investment lifecycle.",
    icon: "https://investera.s3.us-east-2.amazonaws.com/fi_2889666_1786534403165_5s3e.png",
  },
  {
    title: "Reporting & Dashboards",
    description:
      "Turn investment data into actionable insights through configurable reports, dashboards, and performance metrics.",
    icon: "https://investera.s3.us-east-2.amazonaws.com/fi_1828765_1786534433452_knxn.png",
  },
  {
    title: "Documents & Workflows",
    description:
      "Securely manage investment documents, due diligence, approvals, e-signatures, and maker-checker controls.",
    icon: "https://investera.s3.us-east-2.amazonaws.com/fi_8211294_1786534458109_7oxb.png",
  },
  {
    title: "Investment Intelligence",
    titleLines: ["Investment", "Intelligence"],
    description:
      "Connect market data, portfolio analytics, risk monitoring, benchmarks, and AI-powered insights in one view.",
    icon: "https://investera.s3.us-east-2.amazonaws.com/fi_3427119_1786534481129_41d4.png",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="bg-[#EBF2FB] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-[720px] text-center"
        >
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#3B82F6] sm:text-[13px]">
            What We Do
          </p>
          <h2 className="mt-4 text-[40px] font-normal leading-tight tracking-[-0.02em]">
            <span className="font-normal text-[#1a1a1a]">Our </span>
            <span className="font-bold text-[#0c2d57]">Core Capabilities</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.article
              key={value.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: 0.08 + index * 0.07,
              }}
              className="rounded-[12px] bg-white px-6 py-7 shadow-[0_10px_30px_rgba(12,45,87,0.08)] sm:px-7 sm:py-8"
            >
              <div className="relative h-11 w-11 overflow-hidden">
                <Image
                  src={value.icon}
                  alt=""
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
              <h3 className="mt-6 text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#111111]">
                {"titleLines" in value && value.titleLines
                  ? value.titleLines.map((line, i) => (
                      <span key={line}>
                        {i > 0 && <br />}
                        {line}
                      </span>
                    ))
                  : value.title}
              </h3>
              <p className="mt-3 text-[16px] leading-[1.3] text-[#6B7280]">
                {value.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
