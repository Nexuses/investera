"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InvestmentHero() {
  return (
    <section className="overflow-hidden bg-[#D9EEF7]">
      <div className="relative mx-auto max-w-[1440px] px-6 py-12 lg:h-[600px] lg:px-16 lg:py-0">
        <div className="grid h-full items-center gap-10 lg:grid-cols-[minmax(0,48%)_minmax(0,52%)] lg:gap-6">
          {/* Left content */}
          <div className="relative z-10 flex max-w-[560px] flex-col justify-center">
            <p className="text-[28px] font-normal leading-none tracking-[-0.01em] text-[#0c2d57]">
              For Investment Professionals
            </p>

            <h2 className="mt-5 text-[40px] font-normal leading-[1.12] tracking-[-0.02em] text-[#0c2d57] lg:mt-6">
              Investment Management
              <br />
              Shouldn&apos;t Be Scattered Across
              <br />
              Multiple Systems
            </h2>

            <p className="mt-5 max-w-[480px] text-[18px] leading-[1.55] text-[#5B6F86] lg:mt-6">
              Bring portfolios, transactions, valuations,
              <br className="hidden sm:block" />
              documents, and reporting together in one
              <br className="hidden sm:block" />
              unified platform built to save time and improve
              <br className="hidden sm:block" />
              information accuracy
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5 lg:mt-10 lg:gap-7">
              <Link
                href="#demo"
                className="inline-flex items-center justify-center rounded-full bg-[#C9A227] px-12 py-3.5 text-[15px] font-bold tracking-[0.08em] text-white transition-transform duration-300 hover:scale-[1.03] sm:px-14 sm:py-4 sm:text-[17px]"
              >
                BOOK A DEMO
              </Link>

              <div className="flex items-center gap-2.5 text-[#0c2d57]">
                <span className="text-[13px] font-normal leading-none sm:text-[14px]">
                  Since
                </span>
                <span className="text-[42px] font-bold leading-none tracking-[-0.03em] sm:text-[50px]">
                  2018
                </span>
                <span className="text-[11px] font-medium leading-[1.25] sm:text-[12px]">
                  Investment
                  <br />
                  Technology
                </span>
              </div>
            </div>
          </div>

          {/* Right: person + quote */}
          <div className="relative min-h-[420px] w-full sm:min-h-[480px] lg:h-full lg:min-h-0">
            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute bottom-0 left-1/2 w-[min(100%,565px)] -translate-x-[calc(50%+180px)]"
            >
              <Image
                src="/images/investment-hero/person.png"
                alt="Investment professional"
                width={565}
                height={595}
                unoptimized
                priority
                className="h-auto w-full max-w-[565px] object-contain object-bottom lg:h-[595px] lg:w-[565px]"
              />
            </motion.div>

            <div className="absolute right-0 top-[calc(26%+80px)] z-10 w-[44%] max-w-[240px] sm:max-w-[260px] lg:right-0 lg:top-[calc(28%+80px)] lg:w-[38%] xl:max-w-[280px]">
              <Image
                src="/images/investment-hero/quote-marks.png"
                alt=""
                width={150}
                height={109}
                unoptimized
                aria-hidden="true"
                className="mb-3 h-auto w-[52px] sm:w-[64px] lg:w-[68px]"
              />
              <p className="text-[15px] font-normal leading-[1.4] text-[#4A5F73] sm:text-[17px] lg:text-[18px] xl:text-[20px]">
                Make faster, smarter
                <br />
                investment decisions
                <br />
                with clarity, control,
                <br />
                and confidence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
