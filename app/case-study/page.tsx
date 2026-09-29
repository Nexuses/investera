import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import BookDemoCtaSection from "@/components/BookDemoCtaSection";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InvestmentSolutionsSection from "@/components/InvestmentSolutionsSection";

export const metadata: Metadata = pageMetadata({
  title: "Investera Case Studies | Dimah Capital & Al Kifah Holding",
  absoluteTitle: true,
  cardTitle: "Real Results Across the Investment Lifecycle",
  description:
    "See how investment firms in Kuwait and Saudi Arabia use Investera to consolidate multi-asset portfolios, automate reporting and strengthen governance.",
  path: "/case-study",
});

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={breadcrumbJsonLd([{ name: "Case Studies", path: "/case-study" }])} />
      <Header variant="dark" />
      <CaseStudyHero />
      <InvestmentSolutionsSection />
      <BookDemoCtaSection />
      <Footer />
    </div>
  );
}
