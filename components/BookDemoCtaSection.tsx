import Image from "next/image";
import Link from "next/link";

export default function BookDemoCtaSection() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <div className="relative overflow-hidden rounded-[16px] border border-[#F0E8DA] bg-[#F6EFE3] lg:h-[430px]">
          {/* Soft beige card background */}
          <Image
            src="/images/cta/card-bg.png"
            alt=""
            fill
            unoptimized
            aria-hidden="true"
            className="object-cover object-center"
          />

          <div className="relative z-[1] grid h-full items-center gap-8 px-8 py-8 sm:px-9 sm:py-9 lg:grid-cols-[42%_58%] lg:gap-0 lg:py-0 lg:pl-9 lg:pr-0">
            {/* Left content — static text, no animation */}
            <div className="flex max-w-[420px] flex-col justify-center">
              <h1 className="text-[28px] font-normal leading-[1.25] tracking-[-0.01em] text-[#222222] sm:text-[34px] lg:text-[38px]">
                Unlock Better
                <br />
                <span className="font-semibold text-[#17477F]">Opportunities.</span>
              </h1>

              <p className="mt-4 max-w-[360px] text-[13px] leading-[1.45] text-[#555555] sm:text-[14px]">
                Bring portfolios, deals, reporting, workflows, and investment
                data together in one connected platform built for greater
                efficiency, visibility, and control.
              </p>

              <Link
                href="#demo"
                className="mt-5 inline-flex w-fit items-center justify-center rounded-full bg-[#D8A900] px-6 py-2.5 text-[12px] font-semibold tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C49A00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17477F] sm:mt-6 sm:text-[13px]"
              >
                BOOK A DEMO
              </Link>
            </div>

            {/* Right devices visual — flush to right edge */}
            <div className="relative mx-auto flex min-h-[200px] w-full items-end justify-end lg:mx-0 lg:h-full">
              <div className="relative w-full max-w-[480px] lg:absolute lg:bottom-0 lg:right-0 lg:max-w-none lg:w-[88%]">
                <Image
                  src="/images/cta/devices.png"
                  alt="Laptop and mobile showing Investera investment dashboard and AI assistant"
                  width={594}
                  height={449}
                  unoptimized
                  className="h-auto max-h-[280px] w-full object-contain object-right-bottom lg:max-h-[390px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
