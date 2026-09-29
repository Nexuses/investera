import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TermsOfServicePage from "@/components/legal/TermsOfServicePage";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  cardTitle: "Terms of Service",
  description:
    "The terms that apply when you use the Investera website, including acceptable use, intellectual property and governing law.",
  path: "/terms-of-service",
});

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={breadcrumbJsonLd([{ name: "Terms of Service", path: "/terms-of-service" }])} />
      <Header variant="light" />
      <div className="pt-[96px] lg:pt-[112px]">
        <TermsOfServicePage />
      </div>
      <Footer />
    </div>
  );
}
