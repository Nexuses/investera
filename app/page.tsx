import type { Metadata } from "next";
import Footer from "@/components/Footer";
import BusinessDataSection from "@/components/home2/BusinessDataSection";
import CorePhilosophySection from "@/components/home2/CorePhilosophySection";
import DarkHomeHero from "@/components/home2/DarkHomeHero";
import InsightsSection from "@/components/InsightsSection";
import InvestmentFeatureSection from "@/components/features/InvestmentFeatureSection";
import InvestmentHero from "@/components/InvestmentHero";
import InvestmentSolutionsSection from "@/components/InvestmentSolutionsSection";
import InvesteraProSection from "@/components/InvesteraProSection";
import LogoSlider from "@/components/LogoSlider";
import ConnectivitySection from "@/components/ConnectivitySection";
import RegionalTrustSection from "@/components/home2/RegionalTrustSection";
import WhoWeServeSection from "@/components/WhoWeServeSection";
import InvestorStoriesSection from "@/components/home2/InvestorStoriesSection";
import WorkflowGovernanceSection from "@/components/WorkflowGovernanceSection";
import PlatformCtaSection from "@/components/platform/PlatformCtaSection";

export const metadata: Metadata = {
  title: "Investera | Bringing Investment Management Together",
  description:
    "Innovating Finance, Empowering Success. Smart financial tools designed to streamline operations and drive better decision-making.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <DarkHomeHero />
      <LogoSlider />
      <CorePhilosophySection />
      <BusinessDataSection />
      <InvesteraProSection className="bg-white pt-16 pb-0 lg:pt-24 lg:pb-0" />
      <InvestmentFeatureSection />
      <WorkflowGovernanceSection />
      <InvestmentSolutionsSection />
      <InvestmentHero />
      <WhoWeServeSection />
      <InvestorStoriesSection />
      <ConnectivitySection />
      <RegionalTrustSection />
      <InsightsSection />
      <PlatformCtaSection
        titleLine1="Unlock Better"
        titleLine2="Opportunities."
        titleSingleLine
        backgroundVariant="hero"
        description="Bring portfolios, deals, reporting, workflows, and investment data together in one connected platform built for greater efficiency, visibility, and control."
        deviceImage="https://investera.s3.us-east-2.amazonaws.com/CTA_Laptop_1786445622098_h9pb.png"
        deviceImageAlt="Laptop and mobile showing Investera investment dashboard and AI assistant"
        deviceImageClassName="relative z-[1] mx-auto h-auto w-[80%] max-w-[760px] object-contain sm:w-[76%] lg:w-[70%]"
        showOverlayCards={false}
      />
      <Footer />
    </div>
  );
}
