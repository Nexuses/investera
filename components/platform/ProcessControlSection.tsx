import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const DASHBOARD =
  "https://investera.s3.us-east-2.amazonaws.com/Frame_2147255962_1786621365117_aae9.png";
const AUM_CARD =
  "https://investera.s3.us-east-2.amazonaws.com/Frame_2147255951_1786621365117_1xg2.png";

export default function ProcessControlSection() {
  return (
    <section id="full-picture" className="bg-[#F5F7FA] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn className="max-w-[560px]">
            <h2 className="text-[40px] font-normal leading-tight tracking-[-0.02em]">
              <span className="font-normal text-[#1a1a1a]">See the Full Picture,</span>
              <br />
              <span className="heading-accent text-[#0c2d57]">Instantly</span>
            </h2>
            <p className="mt-5 text-[16px] leading-[1.3] text-[#4B5563] sm:mt-6">
              Replace scattered reports and spreadsheets with one centralized
              dashboard to track AUM, portfolio growth, sector allocation,
              investment activity, and detailed insights, all from a single view.
            </p>
          </FadeIn>

          <FadeIn delay={0.12} className="relative overflow-hidden rounded-[20px] bg-[#E9F2FE] px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pt-10">
            <div className="relative z-[1]">
              <Image
                src={DASHBOARD}
                alt="Investera dashboard with total assets under management"
                width={725}
                height={441}
                unoptimized
                className="h-auto w-full rounded-t-[12px]"
              />
              <div className="pointer-events-none absolute left-[16%] top-[18%] z-[2] w-[78%] sm:left-[18%] sm:top-[16%] sm:w-[74%]">
                <Image
                  src={AUM_CARD}
                  alt="Total assets under management"
                  width={664}
                  height={364}
                  unoptimized
                  className="h-auto w-full drop-shadow-[0_18px_40px_rgba(5,11,31,0.28)]"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
