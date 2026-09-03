import type { Metadata } from "next";
import BookDemoCtaSection from "@/components/BookDemoCtaSection";
import BlogContent from "@/components/blog/BlogContent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
        <BlogContent />
        <BookDemoCtaSection />
      </div>
      <Footer />
    </div>
  );
}
