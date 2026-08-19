"use client";

export default function WhoWeServeSection() {
  return (
    <section id="who-we-serve" className="bg-white pt-16 pb-0 lg:pt-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
          <span className="inline-flex rounded-full bg-[#E8F1FA] px-4 py-1.5 text-[13px] font-medium text-[#17477F]">
            Who We Serve
          </span>

          <h2 className="mt-5 text-[40px] font-normal leading-tight text-[#1e293b]">
            Solutions for{" "}
            <span className="heading-accent text-[#17477F]">
              Every Investor
            </span>
          </h2>

          <p className="mt-4 max-w-[1000px] text-[16px] leading-[1.3] text-[#4A4A4A]">
            Purpose-built investment management solutions for professionals and
            organizations managing complex, multi-asset portfolios.
          </p>
        </div>
      </div>
    </section>
  );
}
