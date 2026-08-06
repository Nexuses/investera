import type { Metadata } from "next";
import BookDemoCtaSection from "@/components/BookDemoCtaSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BusinessDataSection from "@/components/home2/BusinessDataSection";
import AbstractVideoSection from "@/components/home2/AbstractVideoSection";
import CorePhilosophySection from "@/components/home2/CorePhilosophySection";
import Home2Header from "@/components/home2/Home2Header";
import InsightsSection from "@/components/InsightsSection";
import InvestmentFeatureSection from "@/components/features/InvestmentFeatureSection";
import InvestmentHero from "@/components/InvestmentHero";
import InvestmentSolutionsSection from "@/components/InvestmentSolutionsSection";
import InvesteraProSection from "@/components/InvesteraProSection";
import LogoSlider from "@/components/LogoSlider";
import WhoWeServeSection from "@/components/WhoWeServeSection";
import WorkflowGovernanceSection from "@/components/WorkflowGovernanceSection";

export const metadata: Metadata = {
  title: "Home 2 | Investera",
  description:
    "Innovating Finance, Empowering Success — smart financial tools designed to streamline operations and drive better decision-making.",
};

export default function Home2Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Home2Header />
      <LogoSlider />
      <CorePhilosophySection />
      <BusinessDataSection />
      <AbstractVideoSection />
      <InvesteraProSection className="bg-white pt-[30px] pb-0" />
      <InvestmentFeatureSection />
      <WorkflowGovernanceSection />
      <InvestmentSolutionsSection />
      <InvestmentHero />
      <WhoWeServeSection />
      <InsightsSection />
      <BookDemoCtaSection />
      <Footer />
    </div>
  );
}
