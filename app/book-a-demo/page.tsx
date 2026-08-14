import type { Metadata } from "next";
import BookDemoPage from "@/components/book-demo/BookDemoPage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Book a Demo | Investera",
  description:
    "Book a personalized Investera demo and see how we unify portfolios, deals, reporting, and investment insights.",
};

export default function BookADemo() {
  return (
    <div
      className="min-h-screen bg-[#050B1F] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://investera.s3.us-east-2.amazonaws.com/Platform_BG_1786612003256_5z5e.png')",
      }}
    >
      <Header variant="dark" />
      <div className="pt-[96px] lg:pt-[112px]">
        <BookDemoPage />
      </div>
      <Footer />
    </div>
  );
}
