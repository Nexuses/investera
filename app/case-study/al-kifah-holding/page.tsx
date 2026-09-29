import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Al Kifah Holding Case Study | Investera",
  description:
    "How Investera implemented a Portfolio Management System for Al Kifah Holding in Saudi Arabia, centralizing investment data, reporting, and governance.",
};

const PLATFORM_BG =
  "https://investera.s3.us-east-2.amazonaws.com/Platform_BG_1786612003256_5z5e.png";

const capabilities = [
  "Centralized investment data management",
  "Portfolio-level performance tracking",
  "Reporting dashboards and analytics",
  "Role-based access and governance controls",
  "Configurable workflows",
  "Portfolio performance reporting",
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

export default function AlKifahHoldingCaseStudyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="dark" />
      <main>
        <section
          className="bg-[#050B1F] bg-cover bg-center bg-no-repeat px-6 pb-16 pt-[132px] text-center sm:pb-20 sm:pt-[148px] lg:px-16 lg:pb-24 lg:pt-[168px]"
          style={{ backgroundImage: `url('${PLATFORM_BG}')` }}
        >
          <div className="mx-auto max-w-[920px]">
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#CCA400]">
              Al Kifah Holding · KSA
            </p>
            <h1 className="mt-5 text-[34px] font-semibold leading-[1.2] tracking-[-0.02em] text-white sm:text-[44px] lg:text-[52px]">
              Portfolio Management System (PMS) Implementation for Al Kifah Holding
            </h1>
          </div>
        </section>

        <article className="mx-auto max-w-[920px] px-6 py-14 sm:px-10 sm:py-16 lg:px-12 lg:py-20">
          <section>
            <SectionTitle lead="Company" accent="Overview" />
            <div className="mt-4 space-y-4 text-[16px] leading-[1.55] text-[#1f1f1f]">
              <p>
                Al Kifah Holding is a diversified holding group with investments
                across multiple sectors.
              </p>
              <p>
                As its investment portfolio expanded, the organization required a
                centralized solution to improve portfolio visibility, strengthen
                governance, and streamline investment reporting.
              </p>
            </div>
          </section>

          <section className="mt-14">
            <SectionTitle lead="Project" accent="Scope" />
            <div className="mt-4 space-y-4 text-[16px] leading-[1.55] text-[#1f1f1f]">
              <p>
                Investment portfolio management, performance tracking, reporting, and
                operational oversight.
              </p>
              <p>
                Investera implemented its Portfolio Management System (PMS) for Al
                Kifah Holding to centralize investment data and provide a single
                platform for monitoring portfolio performance.
              </p>
            </div>
          </section>

          <section className="mt-14">
            <SectionTitle lead="Solution" accent="Approach" />
            <div className="mt-4 space-y-4 text-[16px] leading-[1.55] text-[#1f1f1f]">
              <p>
                The solution enabled Al Kifah Holding to consolidate investment
                information, automate reporting processes, and improve visibility
                across its investment portfolio while supporting governance and
                management oversight.
              </p>
              <p>
                Investera continues to support Al Kifah Holding in managing its
                investment portfolio through a centralized PMS platform.
              </p>
            </div>
            <h3 className="mt-8 text-[18px] font-semibold leading-snug text-[#2F6FE4]">
              What the platform supports
            </h3>
            <p className="mt-4 text-[16px] leading-[1.55] text-[#1f1f1f]">
              The implementation provides management with portfolio insights,
              structured reporting, and role-based governance controls.
            </p>

            <div className="mt-8 rounded-[12px] bg-[#0c2d57] px-6 py-6 text-white sm:px-8 sm:py-8">
              <h3 className="text-[18px] font-semibold leading-snug">
                Key capabilities delivered
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
            <div className="mt-4 space-y-4 text-[16px] leading-[1.55] text-[#1f1f1f]">
              <p>
                Improved transparency across investment activities, enhanced portfolio
                visibility, and reduced reliance on manual reporting processes.
              </p>
              <p>
                The centralized platform enabled more efficient investment monitoring,
                strengthened governance, and supported faster, data-driven
                decision-making.
              </p>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
