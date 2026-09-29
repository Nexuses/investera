import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata, softwareJsonLd } from "@/lib/seo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PlatformHero from "@/components/platform/PlatformHero";
import PlatformFeatureTabs from "@/components/platform/PlatformFeatureTabs";
import WhyInvesteraSection from "@/components/platform/WhyInvesteraSection";
import PlatformCtaSection from "@/components/platform/PlatformCtaSection";

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
      <WhyInvesteraSection />
      <PlatformFeatureTabs />
      <PlatformCtaSection />
      <Footer />
    </div>
  );
}
