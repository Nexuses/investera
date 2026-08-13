import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LogoSlider from "@/components/LogoSlider";
import ConnectedViewSection from "@/components/platform/ConnectedViewSection";
import PlatformHero from "@/components/platform/PlatformHero";
import PlatformFeatureTabs from "@/components/platform/PlatformFeatureTabs";
import PlatformInsightCards from "@/components/platform/PlatformInsightCards";
import ProcessControlSection from "@/components/platform/ProcessControlSection";
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
      <LogoSlider variant="dark" />
      <ConnectedViewSection />
      <PlatformInsightCards />
      <ProcessControlSection />
      <PlatformFeatureTabs />
      <WhyInvesteraSection />
      <PlatformCtaSection />
      <Footer />
    </div>
  );
}
