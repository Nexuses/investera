import type { Metadata } from "next";
import BookDemoCtaSection from "@/components/BookDemoCtaSection";
import BlogHero from "@/components/blog/BlogHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InsightsSection from "@/components/InsightsSection";

export const metadata: Metadata = {
  title: "Blog | Investera",
  description:
    "Explore perspectives on investment management, financial technology, market trends, and the evolving investment landscape.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="light" />
      <div className="pt-[96px] lg:pt-[112px]">
        <BlogHero />
        <InsightsSection compact allInsightsHref="/blog" />
        <BookDemoCtaSection />
      </div>
      <Footer />
    </div>
  );
}
