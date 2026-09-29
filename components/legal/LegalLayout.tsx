import type { ReactNode } from "react";
import FadeIn from "@/components/FadeIn";

export const LEGAL_ENTITY =
  "Investera Solutions Business Applications – Sole Proprietorship L.L.C.";
export const LEGAL_ADDRESS = "12th Floor, CI Tower, Abu Dhabi, United Arab Emirates, P.O. Box 112230";

export const legalLinkClass =
  "font-medium text-[#0c2d57] underline decoration-[#0c2d57]/30 underline-offset-2 hover:decoration-[#0c2d57]";

export function LegalPage({
  lead,
  accent,
  updated,
  intro,
  children,
}: {
  lead: string;
  accent: string;
  updated: string;
  intro: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[920px] px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-[40px] font-normal leading-tight tracking-[-0.02em] sm:text-[48px]">
            <span className="font-normal text-[#1a1a1a]">{lead} </span>
            <span className="heading-accent text-[#0c2d57]">{accent}</span>
          </h1>
          <p className="mt-3 text-[14px] font-medium leading-[1.3] text-[#CCA400]">
            Last updated {updated}
          </p>
          <div className="mt-8 space-y-5 text-[16px] leading-[1.6] text-[#4B5563]">
            {intro}
          </div>
        </FadeIn>
        <div className="mt-12 space-y-12">{children}</div>
      </div>
    </section>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <FadeIn>
      <article className="[&_h3]:mt-6 [&_h3]:text-[18px] [&_h3]:font-semibold [&_h3]:leading-[1.3] [&_h3]:text-[#0c2d57] [&_li]:mt-2 [&_p]:mt-4 [&_p]:text-[16px] [&_p]:leading-[1.6] [&_p]:text-[#4B5563] [&_strong]:font-semibold [&_strong]:text-[#344054] [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:text-[16px] [&_ul]:text-[#4B5563]">
        <h2 className="text-[28px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#0c2d57] sm:text-[32px]">
          {title}
        </h2>
        {children}
      </article>
    </FadeIn>
  );
}

export function LegalContact() {
  return (
    <p>
      <strong>{LEGAL_ENTITY}</strong>
      <br />
      {LEGAL_ADDRESS}
      <br />
      Email:{" "}
      <a href="mailto:info@investera.com" className={legalLinkClass}>
        info@investera.com
      </a>
      <br />
      Phone:{" "}
      <a href="tel:+97123093880" className={legalLinkClass}>
        +971 2 309 3880
      </a>
    </p>
  );
}
