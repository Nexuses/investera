import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import BookDemoPage from "@/components/book-demo/BookDemoPage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = pageMetadata({
  title: "Book an Investera Pro Demo",
  cardTitle: "Book an Investera Pro Demo",
  description:
    "Book a personalised Investera Pro demo and see how one platform can unify your portfolios, deals, reporting and investment insights.",
  path: "/book-a-demo",
});

export default function BookADemo() {
  return (
    <div
      className="min-h-screen bg-[#050B1F] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://investera.s3.us-east-2.amazonaws.com/Platform_BG_1786612003256_5z5e.png')",
      }}
    >
      <JsonLd data={breadcrumbJsonLd([{ name: "Book a Demo", path: "/book-a-demo" }])} />
      <Header variant="dark" />
      <div className="pt-[96px] lg:pt-[112px]">
        <BookDemoPage />
      </div>
      <Footer />
    </div>
  );
}
