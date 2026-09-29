import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { insights } from "@/components/insights-data";
import { breadcrumbJsonLd, pageMetadata, SITE_URL } from "@/lib/seo";
import BookDemoCtaSection from "@/components/BookDemoCtaSection";
import BlogContent from "@/components/blog/BlogContent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = pageMetadata({
  title: "Investment Management Blog & Insights",
  cardTitle: "Blog & Insights",
  description:
    "Insights on family offices, FinTech, digital assets, PropTech and investment management across the GCC and MENA region from the Investera team.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={[
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Investera Blog & Insights",
            url: `${SITE_URL}/blog`,
            publisher: { "@id": `${SITE_URL}/#organization` },
            blogPost: insights.map((insight) => ({
              "@type": "BlogPosting",
              headline: insight.description,
              url: `${SITE_URL}${insight.href}`,
              datePublished: insight.datePublished,
              image: insight.image,
            })),
          },
          breadcrumbJsonLd([{ name: "Blog", path: "/blog" }]),
        ]} />
      <Header variant="light" />
      <div className="pt-[96px] lg:pt-[112px]">
        <BlogContent />
        <BookDemoCtaSection />
      </div>
      <Footer />
    </div>
  );
}
