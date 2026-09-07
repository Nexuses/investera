import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function BookDemoCtaSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <FadeIn className="relative overflow-hidden rounded-[16px] border border-[#F0E8DA] bg-[#F6EFE3] lg:h-[430px]">
          <Image
            src="/images/cta/card-bg.png"
            alt=""
            fill
            unoptimized
            aria-hidden="true"
            className="object-cover object-center"
          />

          <div className="relative z-[1] grid h-full min-w-0 items-center gap-6 px-6 py-8 sm:gap-8 sm:px-9 sm:py-9 lg:grid-cols-[42%_58%] lg:gap-0 lg:py-0 lg:pl-9 lg:pr-0">
            <div className="flex min-w-0 max-w-[420px] flex-col justify-center">
              <h1 className="text-[32px] font-normal leading-[1.2] tracking-[-0.01em] text-[#222222] sm:text-[42px] lg:text-[55px] lg:leading-[1.25]">
                Unlock Better
                <br />
                <span className="heading-accent text-[#17477F]">
                  Opportunities.
                </span>
              </h1>

              <p className="mt-4 max-w-[360px] text-[15px] leading-[1.35] text-[#555555] sm:text-[16px] sm:leading-[1.3]">
                Bring portfolios, deals, reporting, workflows, and investment
                data together in one connected platform built for greater
                efficiency, visibility, and control.
              </p>

              <Link
                href="/book-a-demo"
                className="mt-5 inline-flex w-fit items-center justify-center rounded-full bg-[#D8A900] px-6 py-2.5 text-[12px] font-semibold tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C49A00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17477F] sm:mt-6 sm:text-[13px]"
              >
                BOOK A DEMO
              </Link>
            </div>

            <div className="relative flex min-h-[220px] w-full min-w-0 items-end justify-center sm:min-h-[260px] sm:justify-end lg:h-full lg:pr-[40px]">
              <div className="relative w-full max-w-[520px] lg:absolute lg:bottom-0 lg:right-[40px] lg:max-w-none lg:w-[88%]">
                <Image
                  src="https://investera.s3.us-east-2.amazonaws.com/CTA_Laptop_1786445622098_h9pb.png"
                  alt="Laptop and mobile showing Investera investment dashboard and AI assistant"
                  width={594}
                  height={449}
                  unoptimized
                  className="h-auto max-h-[280px] w-full origin-bottom object-contain object-bottom sm:max-h-[360px] sm:origin-bottom-right sm:object-right-bottom lg:max-h-[390px]"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
