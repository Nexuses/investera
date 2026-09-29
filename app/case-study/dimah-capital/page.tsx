import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata, SITE_URL } from "@/lib/seo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CaseStudyDetail, { type CaseStudy } from "@/components/case-study/CaseStudyDetail";

export const metadata: Metadata = pageMetadata({
  title: "Dimah Capital Case Study: IMS Implementation",
  cardTitle: "Dimah Capital: Investment Management System",
  description:
    "How Investera implemented a centralised Investment Management System for Dimah Capital in Kuwait, covering multi-asset portfolios, reporting and governance.",
  path: "/case-study/dimah-capital",
});

const study: CaseStudy = {
  eyebrow: "Dimah Capital · Kuwait",
  title: "Investment Management System (IMS) Implementation for Dimah Capital",
  client: "Dimah Capital",
  logo: {
    src: "https://investera.s3.us-east-2.amazonaws.com/image_994_1786952976419_agxe.png",
    width: 220,
    height: 56,
  },
  facts: [
    { label: "Location", value: "Kuwait" },
    { label: "Solution", value: "Investment Management System (IMS)" },
    { label: "Implemented", value: "2019" },
    { label: "Focus", value: "Shariah-compliant international real estate" },
    { label: "Regulation", value: "CMA regulations in Kuwait" },
  ],
  image: {
    src: "/images/blog/consolidated-dashboard.webp",
    alt: "Investera Pro consolidated dashboard with IRR, totals and AUM breakdown by category",
    width: 1600,
    height: 867,
  },
  overview: [
    "Dimah Capital is a Kuwait-based investment management company with a focus on Shariah-compliant international real estate investments.",
    "The company manages diversified portfolios across public and private asset classes, with requirements around reporting, governance, and structured portfolio oversight.",
  ],
  focusAreas: ["Multi-asset portfolio management", "Reporting", "System consolidation"],
  scope: [
    "Investera implemented a centralised Investment Management System (IMS) for Dimah Capital in 2019.",
    "The solution enabled consolidation of investment data, structured reporting, and improved visibility across portfolios and entities.",
  ],
  approach: [
    "Investera supports Dimah Capital in its investment management operations through a centralised investment management platform.",
  ],
  supports:
    "The platform supports the management of diversified portfolios across public and private asset classes and provides structured reporting capabilities.",
  capabilities: [
    "Multi-entity portfolio structure",
    "Consolidated reporting across asset classes",
    "Data migration and structured onboarding",
    "Configurable workflows and access controls",
    "On-Premises Installation",
    "Investor Mobile Application",
  ],
  outcomes: [
    "Enhanced portfolio visibility and reporting efficiency, enabling streamlined investment monitoring and decision-making in line with CMA regulations in Kuwait.",
  ],
  next: {
    name: "Al Kifah Holding",
    eyebrow: "Saudi Arabia",
    href: "/case-study/al-kifah-holding",
  },
};

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
      <CaseStudyDetail study={study} />
      <Footer />
    </div>
  );
}
