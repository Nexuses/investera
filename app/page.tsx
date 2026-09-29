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
import GrowthCtaSection from "@/components/about/GrowthCtaSection";
import BookDemoFormPreload from "@/components/book-demo/BookDemoFormPreload";

export const metadata: Metadata = {
  title: "Investera | Bringing Investment Management Together",
  description:
    "Manage portfolios, deals, transactions, reporting, and investment data through one unified platform built for greater visibility, accuracy, and control.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <BookDemoFormPreload />
      <DarkHomeHero />
      <LogoSlider />
      <CorePhilosophySection />
      <BusinessDataSection />
      <InvesteraProSection
        className="bg-white pt-16 pb-0 lg:pt-24 lg:pb-0"
        dashboardImage="https://investera.s3.us-east-2.amazonaws.com/2.Investor_Dashboard_1790658611691_8q3h.png"
      />
      <InvestmentFeatureSection />
      <WorkflowGovernanceSection
        matchDashboard
        image="https://investera.s3.us-east-2.amazonaws.com/Workflow_Requests_1790659277798_em0g.png"
      />
      <PlatformCtaSection
        titleLine1="Transform How You"
        titleLine2="Manage Investments"
        titleSingleLine
        layoutVariant="split"
        backgroundVariant="hero"
        showContactButton={false}
        primaryCtaLabel="Discover the Platform"
        primaryCtaHref="/platform"
        primaryCtaVariant="link"
        description="From deal discovery and portfolio management to reporting and collaboration, Investera Pro connects your entire investment ecosystem in one centralized platform built for modern family offices, PE firms, and investment teams."
        deviceImage="/images/cta/laptop-phone.png"
        deviceImageAlt="Investera dashboard on a laptop and smartphone showing portfolio performance"
        showOverlayCards={false}
      />
      <InvestmentSolutionsSection caseStudyCta="details" />
      <InvestmentHero />
      <WhoWeServeSection />
      <InvestorStoriesSection />
      <ConnectivitySection />
      <RegionalTrustSection />
      <InsightsSection />
      <GrowthCtaSection
        titleLine1="Unlock Better"
        titleLine2="Opportunities."
        backgroundVariant="hero"
        buttonVariant="platform"
        description="Bring portfolios, deals, reporting, workflows, and investment data together in one connected platform built for greater efficiency, visibility, and control."
      />
      <Footer />
    </div>
  );
}
