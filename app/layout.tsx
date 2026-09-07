import type { Metadata } from "next";
import { inter, plusJakartaSans, roboto } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Investera | Bringing Investment Management Together",
  description:
    "Manage portfolios, deals, transactions, reporting, and investment data through one unified platform built for greater visibility, accuracy, and control.",
  icons: {
    icon: [
      {
        url: "https://investera.s3.us-east-2.amazonaws.com/Investera_monogram_colored_1788763881815_bxuq.png",
        type: "image/png",
      },
    ],
    shortcut:
      "https://investera.s3.us-east-2.amazonaws.com/Investera_monogram_colored_1788763881815_bxuq.png",
    apple:
      "https://investera.s3.us-east-2.amazonaws.com/Investera_monogram_colored_1788763881815_bxuq.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${roboto.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
