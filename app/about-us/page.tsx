import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "About Us | Investera",
  description:
    "Learn about Investera — bringing investment management together with greater visibility, accuracy, and control.",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
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
