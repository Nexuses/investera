import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata, SITE_URL } from "@/lib/seo";
import ContactPage2 from "@/components/contact/ContactPage2";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = pageMetadata({
  title: "Contact Investera | Talk to Our Investment Platform Team",
  absoluteTitle: true,
  cardTitle: "Contact Investera",
  description:
    "Contact Investera in Abu Dhabi. Email info@investera.com, call +971 2 309 3880 or send us a message and our team will reply within 24 hours.",
  path: "/contact",
});

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            url: `${SITE_URL}/contact`,
            about: { "@id": `${SITE_URL}/#organization` },
          },
          breadcrumbJsonLd([{ name: "Contact", path: "/contact" }]),
        ]} />
      <Header variant="light" />
      <ContactPage2 />
      <Footer />
    </div>
  );
}
