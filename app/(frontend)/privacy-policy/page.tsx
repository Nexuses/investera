import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PrivacyPolicyPage from "@/components/legal/PrivacyPolicyPage";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  cardTitle: "Privacy Policy",
  description:
    "How Investera collects, uses and protects personal information submitted through the Investera website.",
  path: "/privacy-policy",
});

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={breadcrumbJsonLd([{ name: "Privacy Policy", path: "/privacy-policy" }])} />
      <Header variant="light" />
      <div className="pt-[96px] lg:pt-[112px]">
        <PrivacyPolicyPage />
      </div>
      <Footer />
    </div>
  );
}
