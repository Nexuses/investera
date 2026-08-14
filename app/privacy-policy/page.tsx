import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PrivacyPolicyPage from "@/components/legal/PrivacyPolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Investera",
  description:
    "Learn how Investera collects, uses, shares, and protects your information when you use our investment management platform.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="light" />
      <div className="pt-[96px] lg:pt-[112px]">
        <PrivacyPolicyPage />
      </div>
      <Footer />
    </div>
  );
}
