import Link from "next/link";
import FeatureTabs from "@/components/FeatureTabs";

export default function InvestmentSection() {
  return (
    <section className="relative min-h-[990px] overflow-hidden bg-[#1a4570] lg:min-h-[1070px]">
      {/* Fixed background image — does not move with tab card */}
      <div
        className="pointer-events-none absolute inset-x-0 top-[550px] z-0 h-[360px] bg-[url('/images/investment/background.png')] bg-cover bg-bottom bg-no-repeat sm:top-[590px] sm:h-[400px] lg:top-[610px] lg:h-[460px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-14 pb-16 lg:px-16 lg:py-20 lg:pb-20">
        {/* Top header */}
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[28px] font-normal leading-[1.25] text-white sm:text-[34px] lg:text-[38px]">
            Comprehensive Investment{" "}
            <span className="font-bold">
              Management Across the Complete Investment Lifecycle
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-[780px] text-[14px] leading-relaxed text-white/85 sm:text-[15px] lg:text-base">
            Manage diverse asset classes, portfolios, transactions, valuations,
            and performance through one centralized platform designed for
            greater visibility and control.
          </p>
        </div>

        {/* Two-column content */}
        <div className="mt-12 grid items-start gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div className="relative z-10 flex flex-col justify-start pt-2 lg:pt-8">
            <h3 className="text-[26px] font-normal leading-snug text-white sm:text-[30px] lg:text-[34px]">
              Multi-Asset-Class{" "}
              <br />
              <span className="font-bold">Investment Management</span>
            </h3>
            <p className="mt-4 max-w-[480px] text-[14px] leading-relaxed text-white/85 sm:text-[15px]">
              Investera Pro enables organizations to manage multiple investment
              categories through one centralized platform.
            </p>
            <div className="mt-8 mb-2 flex flex-wrap items-center gap-4">
              <Link
                href="#discover"
                className="rounded-full bg-white px-7 py-3 text-[13px] font-semibold text-[#1a4570] transition-opacity hover:opacity-90"
              >
                Discover Now
              </Link>
              <Link
                href="#free"
                className="rounded-full bg-[#c4a035] px-7 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-[#b08f2e]"
              >
                Start for Free
              </Link>
            </div>
          </div>

          <FeatureTabs />
        </div>
      </div>
    </section>
  );
}
