import BookDemoCtaSection from "@/components/BookDemoCtaSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InsightsSection from "@/components/InsightsSection";
import InvestmentFeatureSection from "@/components/features/InvestmentFeatureSection";
import InvestmentHero from "@/components/InvestmentHero";
import InvestmentSection from "@/components/InvestmentSection";
import InvestmentSolutionsSection from "@/components/InvestmentSolutionsSection";
import InvesteraProSection from "@/components/InvesteraProSection";
import LogoSlider from "@/components/LogoSlider";
import PlatformBanner from "@/components/PlatformBanner";
import WorkflowGovernanceSection from "@/components/WorkflowGovernanceSection";
import WhoWeServeSection from "@/components/WhoWeServeSection";

export default function HomeOriginalPage() {
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
      <InvestmentSolutionsSection />
      <InvestmentHero />
      <WhoWeServeSection />
      <InsightsSection />
      <BookDemoCtaSection />
      <Footer />
    </>
  );
}
