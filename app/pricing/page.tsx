import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PricingPage from "@/components/pricing/PricingPage";

export const metadata: Metadata = {
  title: "Pricing | Investera",
  description:
    "Investera pricing is built around your portfolio: your users, asset classes and modules. Book a pricing call to get a tailored quote.",
};

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="dark" />
      <PricingPage />
      <Footer />
    </div>
  );
}
