"use client";

import ContactOfficeSection from "@/components/contact/ContactOfficeSection";
import { useContactForm } from "@/hooks/useContactForm";

const fieldClass =
  "h-[42px] w-full border border-[#C9CDD3] px-3 text-[16px] leading-[1.3] text-[#1a1a1a] outline-none focus:border-[#0c2d57]";

const labelClass =
  "mb-1.5 block text-left text-[16px] font-medium leading-[1.3] text-[#1a1a1a]";

export default function ContactPage2() {
  const { status, error, handleSubmit, isLoading } = useContactForm(
    "Contact page (/contact)",
  );

  return (
    <div className="bg-[#F7F8FA] pt-[88px]">
      <div className="relative mx-auto max-w-[1440px] px-6 pt-[30px] lg:px-16">
        <div
          className="relative overflow-hidden rounded-t-[24px] bg-[#050B1F] bg-cover bg-center bg-no-repeat px-6 pb-20 pt-14 sm:px-10 sm:pb-24 sm:pt-16 lg:min-h-[400px] lg:px-16 lg:py-[72px]"
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
          className="relative z-20 mx-auto -mt-12 w-full max-w-[480px] rounded-[16px] bg-white px-6 py-7 shadow-[0_18px_50px_rgba(15,23,42,0.16)] sm:-mt-14 sm:px-8 sm:py-8 lg:absolute lg:right-24 lg:top-[118px] lg:mx-0 lg:mt-0 lg:w-[440px] xl:right-28"
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

            <button
              type="submit"
              disabled={isLoading}
              className="h-[48px] w-full rounded-[4px] px-4 text-[16px] font-medium leading-[1.3] text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
              style={{ backgroundColor: "#CCA400" }}
            >
              {isLoading ? "Sending..." : "Submit"}
            </button>

            {status === "success" ? (
              <p className="text-[14px] leading-[1.4] text-[#059669]">
                Thanks — your message was sent. Our team will get back to you soon.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="text-[14px] leading-[1.4] text-[#DC2626]">{error}</p>
            ) : null}
          </div>
        </form>

        {/* Spacer area in screenshot: put quick contact info here on large screens */}
        <div className="hidden rounded-b-[24px] bg-white lg:block min-h-[460px]">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <div className="flex h-full items-start justify-between pt-16 pb-0">
              <div className="w-full max-w-[780px] -ml-[80px]">
                <div className="grid grid-cols-1 gap-y-8 pl-[40px] sm:grid-cols-2 sm:gap-y-8">
                  <div>
                    <p className="text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#111111]">
                      Phone
                    </p>
                    <a
                      href="https://wa.me/971502114603"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-2.5 text-[16px] leading-[1.3] text-[#0c2d57] transition-opacity hover:opacity-80"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0c2d57]">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-4 w-4 text-white"
                          aria-hidden
                        >
                          <path
                            d="M12 3.5c-4.7 0-8.5 3.7-8.5 8.3 0 1.5.4 2.9 1.2 4.1L3.5 20.5l4.8-1.3c1.2.6 2.5 1 3.7 1 4.7 0 8.5-3.7 8.5-8.3S16.7 3.5 12 3.5Z"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.3 9.4c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.3l.7 1.7c.1.2 0 .4-.1.5l-.4.5c-.1.1-.1.3 0 .4.4.7 1.1 1.4 1.9 1.8.2.1.3.1.4 0l.6-.4c.2-.1.4-.1.5 0l1.5.8c.2.1.3.3.2.5-.2.6-.8 1-1.4 1-.3 0-.6-.1-.9-.2-1.4-.5-2.7-1.4-3.7-2.6-.5-.6-.9-1.3-1.1-2-.1-.3-.2-.6-.2-.9 0-.5.2-1 .5-1.4Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      +971 50 211 4603
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
                      Socials
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-2.5">
                      <a
                        href="https://www.linkedin.com/company/investera-ad/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0c2d57] transition-opacity hover:opacity-90"
                      >
                        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-white" aria-hidden>
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
                        href="https://www.instagram.com/investeraae/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0c2d57] transition-opacity hover:opacity-90"
                      >
                        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-white" aria-hidden>
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
                        href="https://x.com/InvesteraAE"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0c2d57] transition-opacity hover:opacity-90"
                      >
                        <svg
                          viewBox="0 0 1226.37 1226.37"
                          className="h-3.5 w-3.5 text-white"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="m727.348 519.284 446.727-519.284h-105.86l-387.893 450.887-309.809-450.887h-357.328l468.492 681.821-468.492 544.549h105.866l409.625-476.152 327.181 476.152h357.328l-485.863-707.086zm-144.998 168.544-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721h-162.604l-323.311-462.446z" />
                        </svg>
                      </a>

                      <a
                        href="https://www.youtube.com/@investeraae6244"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0c2d57] transition-opacity hover:opacity-90"
                      >
                        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-white" aria-hidden>
                          <path
                            d="M21.6 8.2a2.6 2.6 0 0 0-1.8-1.9C18.1 6 12 6 12 6s-6.1 0-7.8.3A2.6 2.6 0 0 0 2.4 8.2 27 27 0 0 0 2 12a27 27 0 0 0 .4 3.8 2.6 2.6 0 0 0 1.8 1.9C5.9 18 12 18 12 18s6.1 0 7.8-.3a2.6 2.6 0 0 0 1.8-1.9A27 27 0 0 0 22 12a27 27 0 0 0-.4-3.8Z"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.2 14.6 14.8 12l-4.6-2.6v5.2Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                    </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 pb-10 pt-8 lg:hidden lg:px-16">
        <div className="grid grid-cols-1 gap-6 rounded-[16px] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)] sm:grid-cols-2">
          <div>
            <p className="text-[18px] font-semibold text-[#111111]">Phone</p>
            <a
              href="https://wa.me/971502114603"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-2.5 text-[16px] text-[#0c2d57]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0c2d57]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 text-white"
                  aria-hidden
                >
                  <path
                    d="M12 3.5c-4.7 0-8.5 3.7-8.5 8.3 0 1.5.4 2.9 1.2 4.1L3.5 20.5l4.8-1.3c1.2.6 2.5 1 3.7 1 4.7 0 8.5-3.7 8.5-8.3S16.7 3.5 12 3.5Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.3 9.4c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.3l.7 1.7c.1.2 0 .4-.1.5l-.4.5c-.1.1-.1.3 0 .4.4.7 1.1 1.4 1.9 1.8.2.1.3.1.4 0l.6-.4c.2-.1.4-.1.5 0l1.5.8c.2.1.3.3.2.5-.2.6-.8 1-1.4 1-.3 0-.6-.1-.9-.2-1.4-.5-2.7-1.4-3.7-2.6-.5-.6-.9-1.3-1.1-2-.1-.3-.2-.6-.2-.9 0-.5.2-1 .5-1.4Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              +971 50 211 4603
            </a>
          </div>
          <div>
            <p className="text-[18px] font-semibold text-[#111111]">Email</p>
            <a href="mailto:info@investera.com" className="mt-1 block text-[16px] text-[#6B7280]">
              info@investera.com
            </a>
          </div>
          <div>
            <p className="text-[18px] font-semibold text-[#111111]">Socials</p>
            <div className="mt-3 flex flex-wrap items-center gap-2.5">
              <a
                href="https://www.linkedin.com/company/investera-ad/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0c2d57]"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-white" aria-hidden>
                  <path d="M6.5 10.5V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M6.5 6.5V7.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M10.5 18V10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
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
                href="https://www.instagram.com/investeraae/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0c2d57]"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-white" aria-hidden>
                  <rect x="6.5" y="6.5" width="11" height="11" rx="3" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M15.8 8.6H15.7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                  <path
                    d="M12 10.2c-1.2 0-2.2 1-2.2 2.2S10.8 14.6 12 14.6s2.2-1 2.2-2.2S13.2 10.2 12 10.2Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="https://x.com/InvesteraAE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0c2d57]"
              >
                <svg
                  viewBox="0 0 1226.37 1226.37"
                  className="h-4 w-4 text-white"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="m727.348 519.284 446.727-519.284h-105.86l-387.893 450.887-309.809-450.887h-357.328l468.492 681.821-468.492 544.549h105.866l409.625-476.152 327.181 476.152h357.328l-485.863-707.086zm-144.998 168.544-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721h-162.604l-323.311-462.446z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@investeraae6244"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0c2d57]"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-white" aria-hidden>
                  <path
                    d="M21.6 8.2a2.6 2.6 0 0 0-1.8-1.9C18.1 6 12 6 12 6s-6.1 0-7.8.3A2.6 2.6 0 0 0 2.4 8.2 27 27 0 0 0 2 12a27 27 0 0 0 .4 3.8 2.6 2.6 0 0 0 1.8 1.9C5.9 18 12 18 12 18s6.1 0 7.8-.3a2.6 2.6 0 0 0 1.8-1.9A27 27 0 0 0 22 12a27 27 0 0 0-.4-3.8Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path d="M10.2 14.6 14.8 12l-4.6-2.6v5.2Z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <ContactOfficeSection />
    </div>
  );
}
