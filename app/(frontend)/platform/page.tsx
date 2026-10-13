import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata, softwareJsonLd } from "@/lib/seo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PlatformHero from "@/components/platform/PlatformHero";
import PlatformFeatureTabs from "@/components/platform/PlatformFeatureTabs";
import WhyInvesteraLightSection from "@/components/platform/WhyInvesteraLightSection";
import ExpertCtaSection from "@/components/ExpertCtaSection";

export const metadata: Metadata = pageMetadata({
  title: "Investera Pro Platform | Portfolio, Deal & Reporting Software",
  absoluteTitle: true,
  cardTitle: "One Platform. Complete Investment Intelligence.",
  description:
    "Explore Investera Pro: dashboards, portfolio and deal management, secure documents, workflows, treasury exposure and AI insights in one investment platform.",
  path: "/platform",
});

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={[softwareJsonLd, breadcrumbJsonLd([{ name: "Platform", path: "/platform" }])]} />
      <Header variant="dark" />
      <PlatformHero />
      <WhyInvesteraLightSection />
      <PlatformFeatureTabs />
      <ExpertCtaSection
        titleLine1="Transform Investment"
        titleLine2="Data into Strategy"
        description="Monitor your portfolio, evaluate exposure, stay ahead of market developments, and capitalize on new opportunities through one connected investor portal."
        secondaryCtaLabel="Contact Us"
        secondaryCtaHref="/contact"
        ctaLabel="Start A Free Trial"
        ctaHref="/book-a-demo"
      />
      <Footer />
    </div>
  );
}
