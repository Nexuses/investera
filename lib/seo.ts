import type { Metadata } from "next";

export const SITE_URL = "https://www.investera.com";
export const SITE_NAME = "Investera";
export const DEFAULT_DESCRIPTION =
  "Investera Pro is an investment management platform for family offices, private equity firms and fund managers in the GCC, unifying portfolios, deals, reporting, documents and workflows.";
export const LOGO_URL = `${SITE_URL}/images/logo.png`;

export const SOCIAL_PROFILES = [
  "https://www.linkedin.com/company/investera-ad/",
  "https://x.com/InvesteraAE",
  "https://www.instagram.com/investeraae/",
  "https://www.youtube.com/@investeraae6244",
];

type PageMetadataInput = {
  /** Page title without the brand suffix. */
  title: string;
  description: string;
  /** Path starting with "/", used for the canonical URL. */
  path: string;
  /** Short headline for the generated social card (defaults to title). */
  cardTitle?: string;
  /** Social card image. Defaults to a generated branded card for the page. */
  image?: string;
  imageSize?: { width: number; height: number };
  imageAlt?: string;
  type?: "website" | "article";
  publishedTime?: string;
  /** Use the title as-is (e.g. the home page already contains the brand). */
  absoluteTitle?: boolean;
};

export function socialCardUrl(title: string, eyebrow?: string) {
  const params = new URLSearchParams({ title });
  if (eyebrow) {
    params.set("eyebrow", eyebrow);
  }
  return `/og?${params.toString()}`;
}

/**
 * Builds complete metadata for a page. Next.js merges metadata shallowly, so
 * each page must provide its own full openGraph and twitter objects.
 */
export function pageMetadata({
  title,
  description,
  path,
  cardTitle,
  image,
  imageSize = { width: 1200, height: 630 },
  imageAlt,
  type = "website",
  publishedTime,
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  const cardImage = image ?? socialCardUrl(cardTitle ?? title);
  const images = [
    { url: cardImage, ...imageSize, alt: imageAlt ?? fullTitle },
  ];

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: SITE_NAME,
      locale: "en_AE",
      title: fullTitle,
      description,
      images,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      site: "@InvesteraAE",
      title: fullTitle,
      description,
      images: [cardImage],
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#software`,
  name: "Investera Pro",
  url: `${SITE_URL}/platform`,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Investment management software",
  operatingSystem: "Web",
  description:
    "An end-to-end investment management platform that unifies portfolios, transactions, deals, workflows, reporting and documents for family offices, private equity firms, holding companies and fund managers.",
  featureList: [
    "Multi-asset portfolio management (private, public and cash)",
    "Dashboards and performance reporting (IRR, TWR, DPI, TVPI)",
    "Deal pipeline and CRM",
    "Secure document management with e-signatures",
    "Approval workflows and maker-checker controls",
    "Treasury and currency exposure",
    "AI investment assistant and market insights",
    "Investor portal and mobile access",
  ],
  publisher: { "@id": `${SITE_URL}/#organization` },
};
