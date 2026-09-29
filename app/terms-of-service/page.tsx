import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TermsOfServicePage from "@/components/legal/TermsOfServicePage";

export const metadata: Metadata = {
  title: "Terms of Service | Investera",
  description:
    "The terms that apply when you use the Investera website, including acceptable use, intellectual property and governing law.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="light" />
      <div className="pt-[96px] lg:pt-[112px]">
        <TermsOfServicePage />
      </div>
      <Footer />
    </div>
  );
}
