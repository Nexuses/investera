"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function QuoteBlock({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div className={className}>
      <Image
        src="/images/investment-hero/quote-marks.png"
        alt=""
        width={150}
        height={109}
        unoptimized
        aria-hidden="true"
        className="mb-3 h-auto w-[52px] sm:w-[64px] lg:w-[68px]"
      />
      {compact ? (
        <p className="max-w-[320px] text-[16px] font-normal leading-[1.3] text-[#4A5F73]">
          Make faster, smarter investment decisions
          <br />
          with clarity, control, and confidence
        </p>
      ) : (
        <p className="text-[16px] font-normal leading-[1.3] text-[#4A5F73]">
          Make faster, smarter
          <br />
          investment decisions
          <br />
          with clarity, control,
          <br />
          and confidence
        </p>
      )}
    </div>
  );
}

export default function InvestmentHero() {
  return (
    <section className="overflow-hidden bg-[#D9EEF7] pt-14 pb-0 lg:pt-20 lg:pb-0">
      <div className="relative mx-auto max-w-[1440px] px-6 pt-12 pb-0 lg:h-[600px] lg:px-16 lg:py-0">
        <div className="grid h-full items-center gap-8 lg:grid-cols-[minmax(0,48%)_minmax(0,52%)] lg:gap-6">
          {/* Left content */}
          <div className="relative z-10 flex max-w-[560px] flex-col justify-center">
            <h5 className="text-[22px] font-normal leading-none tracking-[-0.01em] text-[#0c2d57]">
              For Investment Professionals
            </h5>

            <h4 className="mt-5 text-[28px] font-normal leading-[1.12] tracking-[-0.02em] text-[#0c2d57] lg:mt-6">
              Investment Management
              <br />
              Shouldn&apos;t Be Scattered Across
              <br />
              Multiple Systems
            </h4>

            <p className="mt-5 max-w-[480px] text-[16px] leading-[1.3] text-[#5B6F86] lg:mt-6">
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

            {/* Phone: quote after Since 2018 — 2 lines */}
            <QuoteBlock compact className="mt-8 max-w-[320px] lg:hidden" />
          </div>

          {/* Right: person (+ desktop quote) */}
          <div className="relative -mt-[30px] min-h-[290px] w-full sm:min-h-[320px] lg:mt-0 lg:h-full lg:min-h-0">
            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute bottom-0 left-1/2 w-[min(100%,420px)] -translate-x-1/2 sm:w-[min(100%,480px)] lg:w-[min(100%,565px)] lg:-translate-x-[calc(50%+180px)]"
            >
              <Image
                src="https://investera.s3.us-east-2.amazonaws.com/Investera_111_1786445546670_hgir.png"
                alt="Investment professional"
                width={565}
                height={595}
                unoptimized
                priority
                className="mx-auto h-auto w-full max-w-[565px] object-contain object-bottom lg:h-[595px] lg:w-[565px]"
              />
            </motion.div>

            {/* Desktop quote overlay */}
            <QuoteBlock className="absolute right-0 top-[calc(28%+80px)] z-10 hidden w-[38%] max-w-[280px] lg:block xl:max-w-[280px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
