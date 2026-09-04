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
        url: "https://investera.s3.us-east-2.amazonaws.com/Frame_2147255963_1788589345036_ivvk.png",
        type: "image/png",
      },
    ],
    shortcut:
      "https://investera.s3.us-east-2.amazonaws.com/Frame_2147255963_1788589345036_ivvk.png",
    apple:
      "https://investera.s3.us-east-2.amazonaws.com/Frame_2147255963_1788589345036_ivvk.png",
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
