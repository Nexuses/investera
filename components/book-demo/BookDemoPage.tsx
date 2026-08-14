"use client";

const industries = [
  "Family office",
  "Portfolio manager",
  "Private equity & VC",
  "Fund manager",
  "Corporate treasury",
  "Other",
];

export default function BookDemoPage() {
  return (
    <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-16 lg:py-16">
      <div className="mx-auto max-w-[1200px] rounded-[28px] bg-white px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:px-10 sm:py-12 lg:px-14 lg:py-16">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div className="max-w-[460px]">
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
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#0c2d57]">
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
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#0c2d57]">
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
          </div>

          <form className="rounded-[24px] bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.10)] sm:p-8">
            <label className="block text-[16px] font-medium leading-[1.3] text-[#1a1a1a]">
              Name
              <input
                type="text"
                name="name"
                placeholder="Jane Smith"
                className="mt-2 h-[48px] w-full rounded-[12px] bg-[#F3F4F6] px-4 text-[16px] leading-[1.3] text-[#111111] outline-none placeholder:text-[#9CA3AF] focus:ring-2 focus:ring-[#0c2d57]/25"
              />
            </label>

            <label className="mt-5 block text-[16px] font-medium leading-[1.3] text-[#1a1a1a]">
              Email
              <input
                type="email"
                name="email"
                placeholder="jane@investera.com"
                className="mt-2 h-[48px] w-full rounded-[12px] bg-[#F3F4F6] px-4 text-[16px] leading-[1.3] text-[#111111] outline-none placeholder:text-[#9CA3AF] focus:ring-2 focus:ring-[#0c2d57]/25"
              />
            </label>

            <label className="mt-5 block text-[16px] font-medium leading-[1.3] text-[#1a1a1a]">
              Industry
              <span className="relative mt-2 block">
                <select
                  name="industry"
                  defaultValue=""
                  className="h-[48px] w-full appearance-none rounded-[12px] bg-[#F3F4F6] px-4 pr-10 text-[16px] leading-[1.3] text-[#111111] outline-none focus:ring-2 focus:ring-[#0c2d57]/25"
                >
                  <option value="" disabled>
                    Select...
                  </option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280]">
                  ▾
                </span>
              </span>
            </label>

            <label className="mt-5 block text-[16px] font-medium leading-[1.3] text-[#1a1a1a]">
              Message
              <textarea
                name="message"
                rows={4}
                placeholder="Type your message"
                className="mt-2 w-full resize-none rounded-[12px] bg-[#F3F4F6] px-4 py-3 text-[16px] leading-[1.3] text-[#111111] outline-none placeholder:text-[#9CA3AF] focus:ring-2 focus:ring-[#0c2d57]/25"
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#CCA400] py-2 pl-2 pr-6 text-[16px] font-semibold leading-[1.3] text-white transition-opacity hover:opacity-90"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#CCA400]">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Book a Demo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
