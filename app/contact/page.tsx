import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Contact | Investera",
  description:
    "Get in touch with Investera. Book a demo, reach our team, and learn how we bring investment management together.",
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header variant="light" />
      <ContactPage />
      <Footer />
    </div>
  );
}
