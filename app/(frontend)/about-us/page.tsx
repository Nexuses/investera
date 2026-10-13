import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata, SITE_URL } from "@/lib/seo";
import AboutHero from "@/components/about/AboutHero";
import AdvantageSection from "@/components/about/AdvantageSection";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import GrowthCtaSection from "@/components/about/GrowthCtaSection";
import IdentityVisionSection from "@/components/about/IdentityVisionSection";
import MeetOurTeamSection from "@/components/about/MeetOurTeamSection";
import PrinciplesSection from "@/components/about/PrinciplesSection";
import TestimonialsSection from "@/components/about/TestimonialsSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = pageMetadata({
  title: "About Investera | Investment Technology for the GCC",
  absoluteTitle: true,
  cardTitle: "About Investera",
  description:
    "Meet the team behind Investera Pro, helping family offices, holding companies and fund managers run multi-asset portfolios with clarity and control.",
  path: "/about-us",
});

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            url: `${SITE_URL}/about-us`,
            about: { "@id": `${SITE_URL}/#organization` },
          },
          breadcrumbJsonLd([{ name: "About Us", path: "/about-us" }]),
        ]} />
      <Header variant="light" />
      <AboutHero />
      <PrinciplesSection />
      <IdentityVisionSection />
      <CoreValuesSection />
      <AdvantageSection />
      <MeetOurTeamSection />
      <TestimonialsSection />
      <GrowthCtaSection />
      <Footer />
    </div>
  );
}
