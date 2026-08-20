"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InvesteraProSection({
  className = "bg-white pt-14 pb-0 lg:pt-20 lg:pb-0",
  sectionId = "products",
}: {
  className?: string;
  sectionId?: string;
}) {
  return (
    <section id={sectionId || undefined} className={className}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        {/* Header */}
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="text-[40px] font-normal leading-tight text-[#1e293b]">
            Meet{" "}
            <span className="heading-accent text-[#0c2d57]">
              Investera Pro
            </span>
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
          className="relative mt-12 overflow-hidden rounded-[28px] bg-[url('/images/investera-pro/dashboard.png')] bg-cover bg-center lg:mt-14 lg:h-[320px] lg:rounded-[32px]"
        >
          <div className="grid h-full items-center gap-6 lg:grid-cols-[38%_62%] lg:gap-0">
            {/* Left content */}
            <div className="flex flex-col justify-center px-8 py-8 sm:px-8 sm:py-8 lg:py-0">
              <h3 className="text-[34px] font-normal leading-[1.15] text-[#1e293b]">
                Reporting &
                <br />
                <span className="heading-accent text-[#0c2d57]">Dashboards</span>
              </h3>

              <p className="mt-4 text-[16px] leading-[1.3] text-[#475569] lg:mt-5">
                Gain clear visibility into portfolio performance with customizable
                dashboards, key metrics, and comprehensive investment reports for
                faster, informed decisions.
              </p>

              <Link
                href="#reporting-dashboards"
                className="mt-6 inline-flex items-center gap-1 text-[16px] font-semibold text-[#0c2d57] transition-opacity hover:opacity-80"
              >
                Explore Reporting & Dashboards
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Right dashboard image */}
            <div className="relative flex min-h-0 min-w-0 items-center justify-end self-stretch overflow-hidden pr-[12px] lg:overflow-visible">
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
                className="relative w-full max-w-[900px] shrink-0 lg:absolute lg:bottom-0 lg:right-0 lg:w-[92%]"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
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
                    className="h-auto w-full translate-x-2 object-contain object-right-bottom lg:translate-x-4 lg:translate-y-[18%]"
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
