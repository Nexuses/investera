import type { Metadata } from "next";
import BookDemoCtaSection from "@/components/BookDemoCtaSection";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InvestmentSolutionsSection from "@/components/InvestmentSolutionsSection";

export const metadata: Metadata = {
  title: "Case Studies | Investera",
  description:
    "See how investment teams use Investera Pro to manage multi-asset portfolios, reporting, and oversight from one platform.",
};

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="dark" />
      <CaseStudyHero />
      <InvestmentSolutionsSection />
      <BookDemoCtaSection />
      <Footer />
    </div>
  );
}
