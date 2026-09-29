import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import {
  DEFAULT_DESCRIPTION,
  LOGO_URL,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
  pageMetadata,
} from "@/lib/seo";
import { inter, plusJakartaSans, roboto } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Investera | Investment Management Platform for Family Offices & Funds",
    absoluteTitle: true,
    description: DEFAULT_DESCRIPTION,
    path: "/",
  }),
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  publisher: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  category: "Finance",
  formatDetection: { telephone: false, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: "Investera Solutions Business Applications – Sole Proprietorship L.L.C.",
  url: SITE_URL,
  logo: LOGO_URL,
  description: DEFAULT_DESCRIPTION,
  foundingDate: "2018",
  email: "info@investera.com",
  telephone: "+971 2 309 3880",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12th Floor, CI Tower",
    addressLocality: "Abu Dhabi",
    postOfficeBoxNumber: "112230",
    addressCountry: "AE",
  },
  areaServed: ["AE", "SA", "KW", "OM"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "info@investera.com",
      telephone: "+971 2 309 3880",
      areaServed: ["AE", "SA", "KW", "OM"],
      availableLanguage: ["English"],
    },
  ],
  sameAs: SOCIAL_PROFILES,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#organization` },
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
      <body className="min-h-full flex flex-col">
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
        {children}
      </body>
    </html>
  );
}
