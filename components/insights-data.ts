export const insightFilters = [
  "All",
  "Investment Trends",
  "FinTech",
  "Real Estate",
] as const;

export type InsightFilter = (typeof insightFilters)[number];

export type Insight = {
  category: Exclude<InsightFilter, "All">;
  title: string;
  description: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  slug: string;
  href: string;
  date: string;
  /** ISO date for structured data and the sitemap. */
  datePublished: string;
  readingTime: string;
  /** Search result title (without brand) when the headline is too long. */
  seoTitle?: string;
  metaDescription: string;
};

// Photographic scenes with real Investera Pro dashboards composited on screen.
const BANNER_BASE = "https://d2ol7oe51mr4n9.cloudfront.net/user_36eC1lX1QH2gXadY1g4FNdTY2aP/";

/** Blog banner dimensions (used for social cards and structured data). */
export const BANNER_SIZE = { width: 1920, height: 1086 };

export const insights: Insight[] = [
  {
    category: "Investment Trends",
    title: "Investment Trends",
    description: "Family Offices and Their Challenges in the MENA Region",
    subtitle:
      "Succession, the generation gap, technology, accounting complexity and security: the challenges facing family offices across MENA.",
    image: `${BANNER_BASE}cdaf4ff5-8587-45da-82ad-a73db3d6af65.webp`,
    imageAlt:
      "Family office meeting room in Abu Dhabi with the Investera Pro investor dashboard open on a laptop",
    slug: "family-offices-mena-challenges",
    seoTitle: "Family Office Challenges in the MENA Region",
    metaDescription:
      "Why succession planning, the generation gap, technology, accounting complexity and security challenge MENA family offices, and how technology helps.",
    href: "/blog/family-offices-mena-challenges",
    date: "22 September 2026",
    datePublished: "2026-09-22",
    readingTime: "5 min read",
  },
  {
    category: "FinTech",
    title: "FinTech",
    description: "Digital Assets in FinTech",
    subtitle:
      "What digital assets are, how NFTs, blockchain and cryptocurrency are used, and how regulation is shaping them in the MENA region.",
    image: `${BANNER_BASE}fd5dcc76-97df-4084-a2ec-2876685f6120.webp`,
    imageAlt:
      "Investment office desk in the evening with the Investera investor app dashboard on a monitor",
    slug: "digital-assets-in-fintech",
    metaDescription:
      "What digital assets are, how NFTs, blockchain and cryptocurrency are used, and how UAE regulation such as Dubai's VARA is shaping fintech in MENA.",
    href: "/blog/digital-assets-in-fintech",
    date: "15 September 2026",
    datePublished: "2026-09-15",
    readingTime: "4 min read",
  },
  {
    category: "Real Estate",
    title: "Real Estate",
    description: "PropTech: The Disruptive Force in Real Estate",
    subtitle:
      "How property technology is transforming real estate, with examples from the UAE, Saudi Arabia and the wider MENA region.",
    image: `${BANNER_BASE}bf3e62ed-7c5a-44ea-a9ff-c82bb712d4b3.webp`,
    imageAlt:
      "Real estate investment desk with an architectural model and the Investera Pro consolidated dashboard on a laptop",
    slug: "proptech-disruptive-force-real-estate",
    metaDescription:
      "How PropTech is transforming real estate, from smart buildings and AI valuations to Dubai and NEOM, and why the MENA market is growing fast.",
    href: "/blog/proptech-disruptive-force-real-estate",
    date: "8 September 2026",
    datePublished: "2026-09-08",
    readingTime: "6 min read",
  },
];

export function filterInsights(active: InsightFilter) {
  if (active === "All") {
    return insights;
  }
  return insights.filter((insight) => insight.category === active);
}

export function getInsightBySlug(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
