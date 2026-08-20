import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PlatformHero from "@/components/platform/PlatformHero";
import PlatformFeatureTabs from "@/components/platform/PlatformFeatureTabs";
import PlatformInsightCards from "@/components/platform/PlatformInsightCards";
import WhyInvesteraSection from "@/components/platform/WhyInvesteraSection";
import PlatformCtaSection from "@/components/platform/PlatformCtaSection";

export const metadata: Metadata = {
  title: "Platform | Investera",
  description:
    "Investera Pro brings portfolios, deals, reporting, documents, workflows, and investment insights into one secure platform.",
};

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="dark" />
      <PlatformHero />
      <PlatformInsightCards />
      <PlatformFeatureTabs />
      <WhyInvesteraSection />
      <PlatformCtaSection />
      <Footer />
    </div>
  );
}
