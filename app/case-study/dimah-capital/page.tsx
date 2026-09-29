import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata, SITE_URL } from "@/lib/seo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = pageMetadata({
  title: "Dimah Capital Case Study: IMS Implementation",
  cardTitle: "Dimah Capital: Investment Management System",
  description:
    "How Investera implemented a centralised Investment Management System for Dimah Capital in Kuwait, covering multi-asset portfolios, reporting and governance.",
  path: "/case-study/dimah-capital",
});

const PLATFORM_BG =
  "https://investera.s3.us-east-2.amazonaws.com/Platform_BG_1786612003256_5z5e.png";

const capabilities = [
  "Multi-entity portfolio structure",
  "Consolidated reporting across asset classes",
  "Data migration and structured onboarding",
  "Configurable workflows and access controls",
  "On-Premises Installation",
  "Investor Mobile Application",
];

function SectionTitle({
  lead,
  accent,
}: {
  lead: string;
  accent: string;
}) {
  return (
    <h2 className="text-[32px] font-normal leading-tight tracking-[-0.02em] text-[#111111] sm:text-[36px]">
      {lead}{" "}
      <span className="heading-accent text-[#2F6FE4]">{accent}</span>
    </h2>
  );
}

export default function DimahCapitalCaseStudyPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Dimah Capital Case Study: Investera implementation for Dimah Capital",
            url: `${SITE_URL}/case-study/dimah-capital`,
            about: { "@type": "Organization", name: "Dimah Capital", address: "Kuwait" },
            author: { "@id": `${SITE_URL}/#organization` },
            publisher: { "@id": `${SITE_URL}/#organization` },
          },
          breadcrumbJsonLd([
            { name: "Case Studies", path: "/case-study" },
            { name: "Dimah Capital", path: "/case-study/dimah-capital" },
          ]),
        ]} />
      <Header variant="dark" />
      <main>
        <section
          className="bg-[#050B1F] bg-cover bg-center bg-no-repeat px-6 pb-16 pt-[132px] text-center sm:pb-20 sm:pt-[148px] lg:px-16 lg:pb-24 lg:pt-[168px]"
          style={{ backgroundImage: `url('${PLATFORM_BG}')` }}
        >
          <div className="mx-auto max-w-[920px]">
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#CCA400]">
              Dimah Capital · Kuwait
            </p>
            <h1 className="mt-5 text-[34px] font-semibold leading-[1.2] tracking-[-0.02em] text-white sm:text-[44px] lg:text-[52px]">
              Investment Management System (IMS) Implementation for Dimah Capital
            </h1>
          </div>
        </section>

        <article className="mx-auto max-w-[920px] px-6 py-14 sm:px-10 sm:py-16 lg:px-12 lg:py-20">
          <section>
            <SectionTitle lead="Company" accent="Overview" />
            <div className="mt-4 space-y-4 text-[16px] leading-[1.55] text-[#1f1f1f]">
              <p>
                Dimah Capital is a Kuwait-based investment management company with a
                focus on Shariah-compliant international real estate investments.
              </p>
              <p>
                The company manages diversified portfolios across public and private
                asset classes, with requirements around reporting, governance, and
                structured portfolio oversight.
              </p>
            </div>
          </section>

          <section className="mt-14">
            <SectionTitle lead="Project" accent="Scope" />
            <div className="mt-4 space-y-4 text-[16px] leading-[1.55] text-[#1f1f1f]">
              <p>Multi-asset portfolio management, reporting, and system consolidation.</p>
              <p>
                Investera implemented a centralised Investment Management System (IMS)
                for Dimah Capital in 2019.
              </p>
              <p>
                The solution enabled consolidation of investment data, structured
                reporting, and improved visibility across portfolios and entities.
              </p>
            </div>
          </section>

          <section className="mt-14">
            <SectionTitle lead="Solution" accent="Approach" />
            <p className="mt-4 text-[16px] leading-[1.55] text-[#1f1f1f]">
              Investera supports Dimah Capital in its investment
              management operations through a centralised investment management
              platform.
            </p>
            <h3 className="mt-8 text-[18px] font-semibold leading-snug text-[#2F6FE4]">
              What the Platform Supports
            </h3>
            <p className="mt-4 text-[16px] leading-[1.55] text-[#1f1f1f]">
              The platform supports the management of diversified portfolios across
              public and private asset classes and provides structured reporting
              capabilities.
            </p>

            <div className="mt-8 rounded-[12px] bg-[#0c2d57] px-6 py-6 text-white sm:px-8 sm:py-8">
              <h3 className="text-[18px] font-semibold leading-snug">
                Key Capabilities Delivered
              </h3>
              <ul className="mt-4 grid list-disc gap-x-10 gap-y-1.5 pl-5 text-[15px] leading-[1.45] text-white/95 sm:grid-cols-2">
                {capabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-14">
            <SectionTitle lead="Outcomes &" accent="Impact" />
            <p className="mt-4 text-[16px] leading-[1.55] text-[#1f1f1f]">
              Enhanced portfolio visibility and reporting efficiency, enabling
              streamlined investment monitoring and decision-making in line with CMA
              regulations in Kuwait.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
