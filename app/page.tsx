import type { Metadata } from "next";
import BookDemoCtaSection from "@/components/BookDemoCtaSection";
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
import WhoWeServeSection from "@/components/WhoWeServeSection";
import WorkflowGovernanceSection from "@/components/WorkflowGovernanceSection";

export const metadata: Metadata = {
  title: "Investera | Bringing Investment Management Together",
  description:
    "Innovating Finance, Empowering Success — smart financial tools designed to streamline operations and drive better decision-making.",
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
      <ConnectivitySection />
      <InsightsSection />
      <BookDemoCtaSection />
      <Footer />
    </div>
  );
}
