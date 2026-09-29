import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import BookDemoCtaSection from "@/components/BookDemoCtaSection";

const PLATFORM_BG =
  "https://investera.s3.us-east-2.amazonaws.com/Platform_BG_1786612003256_5z5e.png";

export type CaseStudy = {
  eyebrow: string;
  title: string;
  logo: { src: string; width: number; height: number };
  client: string;
  facts: { label: string; value: string }[];
  image: { src: string; alt: string; width: number; height: number };
  overview: string[];
  focusAreas: string[];
  scope: string[];
  approach: string[];
  supports: string;
  capabilities: string[];
  outcomes: string[];
  next: { name: string; eyebrow: string; href: string };
};

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden className="h-4 w-4" fill="none">
      <path
        d="M5 10.5l3.2 3.2L15 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Section({
  number,
  lead,
  accent,
  children,
}: {
  number: string;
  lead: string;
  accent: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-[#E5E7EB] pt-10 first:border-t-0 first:pt-0">
      <p className="text-[13px] font-semibold tracking-[0.16em] text-[#CCA400]">{number}</p>
      <h2 className="mt-2 text-[30px] font-normal leading-tight tracking-[-0.02em] text-[#111111] sm:text-[36px]">
        {lead} <span className="heading-accent text-[#2F6FE4]">{accent}</span>
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="space-y-4 text-[17px] leading-[1.65] text-[#374151]">
      {items.map((text) => (
        <p key={text}>{text}</p>
      ))}
    </div>
  );
}

export default function CaseStudyDetail({ study }: { study: CaseStudy }) {
  return (
    <main>
      <section
        className="bg-[#050B1F] bg-cover bg-center bg-no-repeat px-6 pb-40 pt-[132px] sm:pb-48 sm:pt-[148px] lg:px-16 lg:pb-56 lg:pt-[168px]"
        style={{ backgroundImage: `url('${PLATFORM_BG}')` }}
      >
        <div className="mx-auto max-w-[1040px]">
          <Link
            href="/case-study"
            className="text-[14px] font-medium text-white/70 transition-colors hover:text-white"
          >
            ← Back to Case Studies
          </Link>
          <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#CCA400]">
            {study.eyebrow}
          </p>
          <h1 className="mt-4 max-w-[900px] text-[34px] font-semibold leading-[1.2] tracking-[-0.02em] text-white sm:text-[44px] lg:text-[52px]">
            {study.title}
          </h1>
          <dl className="mt-8 hidden flex-wrap gap-3 sm:flex">
            {study.facts.slice(0, 4).map((fact) => (
              <div
                key={fact.label}
                className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[14px] backdrop-blur-sm"
              >
                <dt className="sr-only">{fact.label}</dt>
                <dd className="text-white/85">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <figure className="mx-auto -mt-28 max-w-[1040px] px-6 sm:-mt-36 lg:-mt-44">
        <div className="overflow-hidden rounded-[18px] border border-[#E5E7EB] bg-white shadow-[0_24px_60px_rgba(5,11,31,0.35)] sm:rounded-[22px]">
          <div aria-hidden className="flex items-center gap-1.5 bg-[#F3F5F8] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#34D399]" />
          </div>
          <Image
            src={study.image.src}
            alt={study.image.alt}
            width={study.image.width}
            height={study.image.height}
            priority
            sizes="(max-width: 1040px) 100vw, 1040px"
            className="h-auto w-full"
          />
        </div>
        <figcaption className="mt-3 text-center text-[13px] text-[#6B7280]">
          Investera platform (illustrative view)
        </figcaption>
      </figure>

      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-14 sm:px-10 sm:py-16 lg:grid-cols-[300px_1fr] lg:gap-16 lg:px-12 lg:py-20">
        <aside className="lg:sticky lg:top-[120px] lg:self-start">
          <div className="rounded-[20px] border border-[#E5E7EB] bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
            <Image
              src={study.logo.src}
              alt={study.client}
              width={study.logo.width}
              height={study.logo.height}
              unoptimized
              className="h-12 w-auto object-contain object-left"
            />
            <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
              At a Glance
            </p>
            <dl className="mt-3 divide-y divide-[#EEF1F5]">
              {study.facts.map((fact) => (
                <div key={fact.label} className="py-3">
                  <dt className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#9CA3AF]">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-[15px] font-semibold leading-snug text-[#0c2d57]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
            <Link
              href="/book-a-demo"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#CCA400] px-5 py-3 text-[15px] font-semibold text-[#0B1220] transition-opacity hover:opacity-90"
            >
              Book a Demo
            </Link>
          </div>
        </aside>

        <article className="min-w-0 space-y-14">
          <Section number="01" lead="Company" accent="Overview">
            <Paragraphs items={study.overview} />
          </Section>

          <Section number="02" lead="Project" accent="Scope">
            <ul className="flex flex-wrap gap-2.5">
              {study.focusAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-[#D6E2F5] bg-[#F4F8FD] px-4 py-2 text-[14px] font-medium text-[#0c2d57]"
                >
                  {area}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Paragraphs items={study.scope} />
            </div>
          </Section>

          <Section number="03" lead="Solution" accent="Approach">
            <Paragraphs items={study.approach} />

            <div className="mt-8 rounded-[16px] border-l-4 border-[#2F6FE4] bg-[#F4F8FD] px-6 py-5">
              <h3 className="text-[17px] font-semibold text-[#0c2d57]">What the Platform Supports</h3>
              <p className="mt-2 text-[16px] leading-[1.6] text-[#4B5563]">{study.supports}</p>
            </div>

            <h3 className="mt-10 text-[20px] font-semibold text-[#0c2d57]">
              Key Capabilities Delivered
            </h3>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {study.capabilities.map((item, index) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-[16px] border border-[#E5E7EB] bg-white p-5 shadow-[0_6px_20px_rgba(15,23,42,0.04)]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0c2d57] text-[#CCA400]">
                    <CheckIcon />
                  </span>
                  <div>
                    <p className="text-[12px] font-semibold tracking-[0.12em] text-[#9CA3AF]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-0.5 text-[16px] font-medium leading-snug text-[#111827]">{item}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          <Section number="04" lead="Outcomes &" accent="Impact">
            <div className="overflow-hidden rounded-[20px] bg-[#0c2d57] bg-[radial-gradient(ellipse_70%_60%_at_100%_0%,rgba(47,111,228,0.35),transparent)] p-6 text-white sm:p-8">
              <ul className={`grid gap-6 ${study.outcomes.length > 1 ? "md:grid-cols-2" : ""}`}>
                {study.outcomes.map((text) => (
                  <li key={text} className="flex gap-4">
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#CCA400] text-[#0B1220]">
                      <CheckIcon />
                    </span>
                    <p className="text-[18px] leading-[1.55] text-white/95">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          <Link
            href={study.next.href}
            className="group flex items-center justify-between gap-6 rounded-[20px] border border-[#E5E7EB] bg-[#F4F4F4] px-6 py-6 transition-shadow hover:shadow-[0_12px_28px_rgba(12,45,87,0.08)] sm:px-8"
          >
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#CCA400]">
                Next Case Study · {study.next.eyebrow}
              </p>
              <p className="mt-2 text-[22px] font-semibold text-[#0c2d57]">{study.next.name}</p>
            </div>
            <span className="text-[15px] font-semibold text-[#0c2d57] group-hover:opacity-80">
              Read More →
            </span>
          </Link>
        </article>
      </div>

      <BookDemoCtaSection />
    </main>
  );
}
