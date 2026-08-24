"use client";

import { FormEvent } from "react";
import ContactOfficeSection from "@/components/contact/ContactOfficeSection";

const fieldClass =
  "h-[42px] w-full border border-[#C9CDD3] px-3 text-[16px] leading-[1.3] text-[#1a1a1a] outline-none focus:border-[#0c2d57]";

const labelClass =
  "mb-1.5 block text-left text-[16px] font-medium leading-[1.3] text-[#1a1a1a]";

export default function ContactPage2() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="bg-[#F7F8FA] pt-[88px]">
      <div className="relative mx-auto max-w-[1440px] px-6 pt-[30px] lg:px-16">
        <div
          className="relative overflow-hidden rounded-t-[24px] bg-[#050B1F] bg-cover bg-center bg-no-repeat px-6 py-14 sm:px-10 sm:py-16 lg:min-h-[400px] lg:px-16 lg:py-[72px]"
          style={{
            backgroundImage:
              "url('https://investera.s3.us-east-2.amazonaws.com/Platform_BG_1786612003256_5z5e.png')",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(47,111,228,0.28)_0%,transparent_55%)]"
          />
          <div className="relative z-10 max-w-[560px] lg:max-w-[54%]">
            <h1 className="text-[36px] font-normal leading-tight tracking-[-0.03em] text-white sm:text-[44px] lg:text-[48px]">
              <span className="font-normal">Let&apos;s Transform the Way</span>
              <br />
              <span className="heading-accent">You Manage Investments</span>
            </h1>
            <p className="mt-4 max-w-[520px] text-[16px] leading-[1.3] text-white/80 sm:text-[18px]">
              Connect with our team to see how Investera can unify your
              portfolios, deals, documents, workflows, reporting, and insights
              on one secure platform, tailored to your investment needs.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="relative z-20 mx-auto mt-8 w-full max-w-[480px] rounded-[16px] bg-white px-6 py-7 shadow-[0_18px_50px_rgba(15,23,42,0.16)] sm:px-8 sm:py-8 lg:absolute lg:right-24 lg:top-[118px] lg:mx-0 lg:mt-0 lg:w-[440px] xl:right-28"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="first-name" className={labelClass}>
                First Name <span className="text-[#DC2626]">*</span>
              </label>
              <input id="first-name" name="firstName" required className={fieldClass} />
            </div>

            <div>
              <label htmlFor="last-name" className={labelClass}>
                Last Name <span className="text-[#DC2626]">*</span>
              </label>
              <input id="last-name" name="lastName" required className={fieldClass} />
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email <span className="text-[#DC2626]">*</span>
              </label>
              <input id="email" name="email" type="email" required className={fieldClass} />
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone Number
              </label>
              <input id="phone" name="phone" type="tel" className={fieldClass} />
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="min-h-[90px] w-full resize-y border border-[#C9CDD3] px-3 py-2 text-[16px] leading-[1.3] text-[#1a1a1a] outline-none focus:border-[#0c2d57]"
              />
            </div>

            <div className="flex w-full items-center justify-between border border-[#D1D5DB] px-3 py-2">
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 border border-[#4B5563]" />
                <span className="text-[16px] leading-[1.3] text-[#1a1a1a]">I&apos;m not a robot</span>
              </div>
              <div className="text-right text-[10px] text-[#6B7280]">
                <div className="ml-auto h-7 w-7 rounded bg-[#E5E7EB]" />
                reCAPTCHA
              </div>
            </div>

            <button
              type="submit"
              className="h-[48px] w-full rounded-[4px] px-4 text-[16px] font-medium leading-[1.3] text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#CCA400" }}
            >
              Submit
            </button>
          </div>
        </form>

        {/* Spacer area in screenshot: put quick contact info here on large screens */}
        <div className="hidden rounded-b-[24px] bg-white lg:block h-[400px]">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <div className="flex h-full items-start justify-between pt-16 pb-0">
              <div className="w-full max-w-[780px] -ml-[80px]">
                <div className="grid grid-cols-1 gap-y-8 pl-[40px] sm:grid-cols-2 sm:gap-y-8">
                  <div>
                    <p className="text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#111111]">
                      Phone
                    </p>
                    <a
                      href="tel:+97123093880"
                      className="mt-2 block text-[16px] leading-[1.3] text-[#0c2d57] transition-opacity hover:opacity-80"
                    >
                      +971 2 309 3880
                    </a>
                  </div>

                  <div>
                    <p className="text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#111111]">
                      Work Hours
                    </p>
                    <p className="mt-2 text-[16px] leading-[1.3] text-[#6B7280]">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 1:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>

                  <div>
                    <p className="text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#111111]">
                      Email
                    </p>
                    <a
                      href="mailto:info@investera.com"
                      className="mt-2 block text-[16px] leading-[1.3] text-[#6B7280] transition-colors hover:text-[#0c2d57]"
                    >
                      info@investera.com
                    </a>
                  </div>

                  <div>
                    <p className="text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#111111]">
                      Socials
                    </p>
                    <div className="mt-4 flex items-center gap-5">
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0c2d57] transition-opacity hover:opacity-90"
                      >
                        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white" aria-hidden>
                          <path d="M6.5 10.5V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                          <path d="M6.5 6.5V7.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                          <path
                            d="M10.5 18V10.5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                          <path
                            d="M10.5 13.2C11.2 11.9 12.4 10.8 14 10.8C16.2 10.8 17.2 12.3 17.2 14.5V18"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>

                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0c2d57] transition-opacity hover:opacity-90"
                      >
                        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white" aria-hidden>
                          <rect x="6.5" y="6.5" width="11" height="11" rx="3" stroke="currentColor" strokeWidth="1.8" />
                          <path
                            d="M15.8 8.6H15.7"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                          />
                          <path
                            d="M12 10.2c-1.2 0-2.2 1-2.2 2.2S10.8 14.6 12 14.6s2.2-1 2.2-2.2S13.2 10.2 12 10.2Z"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>

                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0c2d57] transition-opacity hover:opacity-90"
                      >
                        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white" aria-hidden>
                          <path
                            d="M14 8.2V6.6c0-.9.6-1.6 1.5-1.6H17"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.5 20V12H9.8V9.7h1.7V8.2c0-2 1.2-3.2 3-3.2h1.6V7h-1.2c-.7 0-1.1.4-1.1 1.2V9.7H17l-.4 2.3h-2.2V20"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>

                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0c2d57] transition-opacity hover:opacity-90"
                      >
                        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white" aria-hidden>
                          <path
                            d="M7 17L17 7"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                          <path
                            d="M7 7l10 10"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactOfficeSection />
    </div>
  );
}
