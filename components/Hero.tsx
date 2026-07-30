import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Wave background */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] bg-[url('/images/hero-section-ref.png')] bg-bottom bg-no-repeat bg-[length:100%_auto]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center px-6 pt-8 pb-0 lg:px-16 lg:pt-12">
        <div className="flex max-w-[860px] flex-col items-center text-center">
          <h1 className="text-[34px] font-bold leading-[1.15] tracking-[-0.01em] text-[#0c2d57] sm:text-[42px] lg:text-[50px]">
            Bringing Investment Management Together
          </h1>

          <p className="mt-5 max-w-[720px] text-[15px] leading-[1.75] text-[#64748b] sm:text-base lg:mt-6 lg:text-[17px]">
            Manage portfolios, deals, transactions, reporting, and investment
            data through one unified platform built for greater visibility,
            accuracy, and control.
          </p>

          <Link
            href="#demo"
            id="demo"
            className="mt-8 rounded-full bg-[#c4a035] px-11 py-3.5 text-[13px] font-bold tracking-[0.14em] text-white transition-colors hover:bg-[#b08f2e] lg:mt-10 lg:px-12 lg:py-4"
          >
            BOOK A DEMO
          </Link>
        </div>

        <div className="relative -mb-2 mt-9 w-full max-w-[1120px] lg:mt-11">
          <Image
            src="/images/hero-collage.png"
            alt="Investment management dashboard with portfolio analytics, deal tracking, and asset allocation charts"
            width={2240}
            height={1420}
            priority
            className="mx-auto h-auto w-full mix-blend-screen"
          />
        </div>
      </div>
    </section>
  );
}
