import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const quotes = [
  {
    lead: "Private, public and cash finally sit side by side.",
    rest: " I can answer an allocation question in the meeting instead of promising to send it later.",
    role: "Portfolio Manager",
    org: "Investment company · U.A.E.",
    avatar: "/images/about/testimonials/helen-2.png",
    verified: true,
  },
  {
    lead: "This is the first software our board has actually asked to see.",
    rest: " The reporting comes straight out of the underlying records, so nobody spends the meeting arguing about which number is right.",
    role: "Group CFO",
    org: "Diversified holding · Saudi Arabia",
    avatar: "/images/about/team/member-3.png",
    verified: true,
  },
  {
    lead: "Cut our valuation cycle from three weeks down to six days.",
    rest: "",
    role: "Finance Director",
    org: "Private equity firm · Bahrain",
    avatar: "/images/about/team/member-2.png",
    verified: false,
    beige: true,
  },
  {
    lead: "Every approval has a name and a timestamp against it.",
    rest: " When the auditors ask how a decision was made, the answer is already in the system.",
    role: "Fund Operations Lead",
    org: "Asset manager · Qatar",
    avatar: "/images/about/testimonials/helen-3.png",
    verified: true,
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill="#CCA400" aria-hidden>
          <path d="M8 1.2 9.9 5.3l4.5.4-3.4 2.9 1 4.4L8 11.2 3.9 13l1-4.4L1.6 5.7l4.5-.4L8 1.2Z" />
        </svg>
      ))}
    </div>
  );
}

function Verified() {
  return (
    <span className="inline-flex shrink-0 items-center gap-1 text-[12px] font-medium text-[#16A34A]">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
        <circle cx="8" cy="8" r="7" fill="#16A34A" />
        <path
          d="M5 8.1 7 10.1 11.2 5.8"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Verified client
    </span>
  );
}

export default function RegionalTrustSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <FadeIn>
          <h2 className="max-w-[640px] text-[32px] font-normal leading-[1.2] tracking-[-0.02em] sm:text-[40px]">
            <span className="font-normal text-[#1a1a1a]">Investment teams across the region </span>
            <span className="font-bold text-[#0c2d57]">trust Investera</span>
          </h2>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 items-start gap-5 lg:mt-12 lg:grid-cols-2 lg:gap-6">
          <div className="flex flex-col gap-5">
            <QuoteCard {...quotes[0]} delay={0.06} />
            <QuoteCard {...quotes[2]} delay={0.12} />
          </div>
          <div className="flex flex-col gap-5">
            <QuoteCard {...quotes[1]} delay={0.1} />
            <QuoteCard {...quotes[3]} delay={0.16} />
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteCard({
  lead,
  rest,
  role,
  org,
  avatar,
  verified,
  beige,
  delay = 0,
}: (typeof quotes)[number] & { delay?: number }) {
  return (
    <FadeIn delay={delay}>
      <article
        className={`rounded-[24px] px-6 py-6 shadow-[0_10px_30px_rgba(12,45,87,0.06)] sm:px-7 sm:py-7 ${
          beige ? "bg-[#F6EFE3]" : "border border-[#EEF0F3] bg-white"
        }`}
      >
        {!beige ? <Stars /> : null}
        <p
          className={`text-[16px] leading-[1.5] ${
            beige ? "mt-0 font-semibold text-[#111111]" : "mt-4 text-[#111111]"
          }`}
        >
          {lead}
          {rest ? <span className="text-[#6B7280]">{rest}</span> : null}
        </p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
              <Image src={avatar} alt="" fill unoptimized className="object-cover" />
            </div>
            <div className="min-w-0">
              <p className="text-[14px] font-semibold text-[#111111]">{role}</p>
              <p className="text-[13px] text-[#6B7280]">{org}</p>
            </div>
          </div>
          {verified ? <Verified /> : null}
        </div>
      </article>
    </FadeIn>
  );
}
