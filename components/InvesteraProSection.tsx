"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  "Manage investment opportunities through configurable deal pipelines and customized stages.",
  "Track holdings, transactions, valuations, and portfolio performance from one centralized platform.",
  "Gain consolidated visibility across private, public, and multi-asset investments.",
  "Manage investor relationships, interactions, and onboarding through integrated CRM workflows.",
];

export default function InvesteraProSection({
  className = "bg-white pt-14 pb-0 lg:pt-20 lg:pb-0",
}: {
  className?: string;
}) {
  return (
    <section id="products" className={className}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        {/* Header */}
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="text-[40px] font-normal leading-tight text-[#1e293b]">
            Meet{" "}
            <span className="font-bold text-[#0c2d57]">Investera Pro</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[760px] text-[16px] leading-[1.3] text-[#64748b]">
            An end-to-end investment management platform that unifies portfolios,
            transactions, workflows, reporting, and documents for greater
            visibility and control.
          </p>
        </div>

        {/* Feature card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
          className="relative mt-12 overflow-visible rounded-[28px] bg-[url('/images/investera-pro/dashboard.png')] bg-cover bg-center lg:mt-14 lg:rounded-[32px]"
        >
          <div className="grid items-end gap-8 lg:grid-cols-[38%_62%] lg:gap-0">
            {/* Left content */}
            <div className="px-8 py-8 sm:py-10 lg:py-14">
              <h3 className="text-[34px] font-normal leading-[1.15] text-[#1e293b]">
                Portfolio &
                <br />
                <span className="font-bold text-[#0c2d57]">Deal Management</span>
              </h3>

              <ul className="mt-6 space-y-4">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="text-[16px] leading-[1.3] text-[#475569]"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="#portfolio-management"
                className="mt-8 inline-flex items-center gap-1 text-[16px] font-semibold text-[#0c2d57] transition-opacity hover:opacity-80"
              >
                Explore Portfolio Management
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Right dashboard image — screening panel floats */}
            <div className="relative flex min-w-0 justify-end self-end overflow-visible pr-[12px] pt-6 lg:pt-10">
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
                className="relative w-full max-w-[1400px] shrink-0"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                >
                  <Image
                    src="/images/investera-pro/pipeline-dashboard.png"
                    alt="Investera Pro pipeline dashboard showing deal tracking and portfolio management"
                    width={1400}
                    height={965}
                    unoptimized
                    className="h-auto w-full max-w-[1400px] shrink-0 translate-x-4 object-contain object-right-bottom lg:translate-x-8"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
