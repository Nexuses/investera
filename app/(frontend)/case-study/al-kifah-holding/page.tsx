import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata, SITE_URL } from "@/lib/seo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CaseStudyDetail, { type CaseStudy } from "@/components/case-study/CaseStudyDetail";

export const metadata: Metadata = pageMetadata({
  title: "Al Kifah Holding Case Study: PMS Implementation",
  cardTitle: "Al Kifah Holding: Portfolio Management System",
  description:
    "How Investera implemented a Portfolio Management System for Al Kifah Holding in Saudi Arabia, centralising investment data, reporting and governance.",
  path: "/case-study/al-kifah-holding",
});

const study: CaseStudy = {
  eyebrow: "Al Kifah Holding · Saudi Arabia",
  title: "Portfolio Management System (PMS) Implementation for Al Kifah Holding",
  client: "Al Kifah Holding",
  logo: {
    src: "https://investera.s3.us-east-2.amazonaws.com/logo_1788420370908_befu.png",
    width: 240,
    height: 56,
  },
  facts: [
    { label: "Location", value: "Saudi Arabia" },
    { label: "Solution", value: "Portfolio Management System (PMS)" },
    { label: "Client Type", value: "Diversified holding group" },
    { label: "Engagement", value: "Continuing support" },
  ],
  image: {
    src: "/images/blog/investor-dashboard.webp",
    alt: "Investera Pro dashboard showing IRR, totals, AUM breakdown by category and category allocation",
    width: 1440,
    height: 900,
  },
  overview: [
    "Al Kifah Holding is a diversified holding group with investments across multiple sectors.",
    "As its investment portfolio expanded, the organisation required a centralised solution to improve portfolio visibility, strengthen governance, and streamline investment reporting.",
  ],
  focusAreas: [
    "Investment portfolio management",
    "Performance tracking",
    "Reporting",
    "Operational oversight",
  ],
  scope: [
    "Investera implemented its Portfolio Management System (PMS) for Al Kifah Holding to centralise investment data and provide a single platform for monitoring portfolio performance.",
  ],
  approach: [
    "The solution enabled Al Kifah Holding to consolidate investment information, automate reporting processes, and improve visibility across its investment portfolio while supporting governance and management oversight.",
    "Investera continues to support Al Kifah Holding in managing its investment portfolio through a centralised PMS platform.",
  ],
  supports:
    "The implementation provides management with portfolio insights, structured reporting, and role-based governance controls.",
  capabilities: [
    "Centralised investment data management",
    "Portfolio-level performance tracking",
    "Reporting dashboards and analytics",
    "Role-based access and governance controls",
    "Configurable workflows",
    "Portfolio performance reporting",
  ],
  outcomes: [
    "Improved transparency across investment activities, enhanced portfolio visibility, and reduced reliance on manual reporting processes.",
    "The centralised platform enabled more efficient investment monitoring, strengthened governance, and supported faster, data-driven decision-making.",
  ],
  next: {
    name: "Dimah Capital",
    eyebrow: "Kuwait",
    href: "/case-study/dimah-capital",
  },
};

export default function AlKifahHoldingCaseStudyPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Al Kifah Holding Case Study: Investera implementation for Al Kifah Holding",
            url: `${SITE_URL}/case-study/al-kifah-holding`,
            about: { "@type": "Organization", name: "Al Kifah Holding", address: "Saudi Arabia" },
            author: { "@id": `${SITE_URL}/#organization` },
            publisher: { "@id": `${SITE_URL}/#organization` },
          },
          breadcrumbJsonLd([
            { name: "Case Studies", path: "/case-study" },
            { name: "Al Kifah Holding", path: "/case-study/al-kifah-holding" },
          ]),
        ]} />
      <Header variant="dark" />
      <CaseStudyDetail study={study} />
      <Footer />
    </div>
  );
}
