import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InvestmentFeatureSection from "@/components/features/InvestmentFeatureSection";
import InvestmentSection from "@/components/InvestmentSection";
import InvesteraProSection from "@/components/InvesteraProSection";
import LogoSlider from "@/components/LogoSlider";
import PlatformBanner from "@/components/PlatformBanner";
import WorkflowGovernanceSection from "@/components/WorkflowGovernanceSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoSlider />
      <InvestmentSection />
      <PlatformBanner />
      <InvesteraProSection />
      <InvestmentFeatureSection />
      <WorkflowGovernanceSection />
    </>
  );
}
