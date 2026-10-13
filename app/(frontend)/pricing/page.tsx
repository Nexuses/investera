import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { faqs } from "@/components/pricing/pricing-faqs";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PricingPage from "@/components/pricing/PricingPage";

export const metadata: Metadata = pageMetadata({
  title: "Investera Pro Pricing | Tailored to Your Portfolio",
  absoluteTitle: true,
  cardTitle: "Pricing Built Around Your Portfolio",
  description:
    "Investera Pro pricing reflects your users, entities, asset classes and modules. Book a 30-minute call and get a written proposal within 3 working days.",
  path: "/pricing",
});

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          },
          breadcrumbJsonLd([{ name: "Pricing", path: "/pricing" }]),
        ]} />
      <Header variant="dark" />
      <PricingPage />
      <Footer />
    </div>
  );
}
