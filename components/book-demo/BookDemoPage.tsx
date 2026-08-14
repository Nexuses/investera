"use client";

import Script from "next/script";
import FadeIn from "@/components/FadeIn";

export default function BookDemoPage() {
  return (
    <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-16 lg:py-16">
      <div className="mx-auto max-w-[1200px] rounded-[28px] bg-white px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:px-10 sm:py-12 lg:px-14 lg:py-16">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <FadeIn className="max-w-[460px]">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#CCA400]">
              We&apos;re here to help you
            </p>
            <h1 className="mt-4 text-[40px] font-normal leading-tight tracking-[-0.02em]">
              <span className="font-normal text-[#1a1a1a]">Discuss Your </span>
              <span className="font-bold text-[#0c2d57]">Investment Platform Needs</span>
            </h1>
            <p className="mt-4 text-[16px] leading-[1.3] text-[#4B5563]">
              Looking for a connected way to manage portfolios, deals, and
              reporting? Reach out to us.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2F6FE4]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white" aria-hidden>
                    <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
                    <path
                      d="M4 7l8 6 8-6"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-[16px] leading-[1.3] text-[#6B7280]">E-mail</p>
                  <a
                    href="mailto:info@investera.com"
                    className="mt-1 block text-[16px] font-semibold leading-[1.3] text-[#0c2d57]"
                  >
                    info@investera.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2F6FE4]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white" aria-hidden>
                    <path
                      d="M6.5 3.8h2.2c.4 0 .8.3.9.7l.8 2.3c.1.4 0 .8-.3 1.1L8.6 9.4c1.2 2.3 3.1 4.2 5.4 5.4l1.5-1.5c.3-.3.7-.4 1.1-.3l2.3.8c.4.1.7.5.7.9v2.2c0 .5-.4.9-.9.9C10.8 19.8 4.2 13.2 4.2 4.7c0-.5.4-.9.9-.9Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-[16px] leading-[1.3] text-[#6B7280]">Phone number</p>
                  <a
                    href="tel:+97123093880"
                    className="mt-1 block text-[16px] font-semibold leading-[1.3] text-[#0c2d57]"
                  >
                    +971 2 309 3880
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="min-w-0">
            <div
              className="calendly-inline-widget overflow-hidden rounded-[24px] bg-white shadow-[0_16px_50px_rgba(15,23,42,0.10)]"
              data-url="https://calendly.com/-investera/30min"
              style={{ minWidth: 320, height: 700 }}
            />
            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="lazyOnload"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
