export default function ContactOfficeSection() {
  return (
    <section className="bg-[#F7F8FA] py-16 sm:py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-10 px-6 lg:grid-cols-2 lg:gap-14 lg:px-10">
        <div>
          <h2 className="text-[40px] font-normal leading-tight tracking-[-0.02em]">
            <span className="heading-accent text-[#0c2d57]">Office</span>
          </h2>
          <p className="mt-4 max-w-[480px] text-[16px] leading-[1.3] text-[#4B5563]">
            Visit our headquarters or get in touch for the nearest location to
            your organization.
          </p>
          <div className="mt-6 h-px w-full bg-[#0c2d57]/40" />

          <div className="mt-8 flex gap-4">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center text-[#0c2d57]">
              <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden>
                <path
                  d="M4 20V8.5L12 4l8 4.5V20"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
                <path d="M9 20v-7h6v7" stroke="currentColor" strokeWidth="1.7" />
                <path d="M4 20h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </span>
            <div>
              <p className="text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#111111]">Abu Dhabi</p>
              <p className="mt-2 text-[16px] leading-[1.3] text-[#6B7280]">
                12th Floor, CI Tower
                <br />
                Abu Dhabi, UAE
                <br />
                P.O. Box 112230
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center text-[#0c2d57]">
              <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden>
                <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
                <path
                  d="M12 8v4.2l2.5 1.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <p className="text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#111111]">Business Hours:</p>
              <p className="mt-2 text-[16px] leading-[1.3] text-[#6B7280]">
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 9:00 AM - 1:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[12px] bg-white shadow-[0_12px_40px_rgba(12,45,87,0.10)]">
          <iframe
            title="Investera office, CI Tower, Abu Dhabi"
            src="https://maps.google.com/maps?q=CI%20Tower%20Abu%20Dhabi%20UAE&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="h-[360px] w-full border-0 sm:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
