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
  readingTime: string;
};

const BANNER_BASE =
  "https://d8j0ntlcm91z4.cloudfront.net/user_36eC1lX1QH2gXadY1g4FNdTY2aP/hf_20260929_100359_";

export const insights: Insight[] = [
  {
    category: "Investment Trends",
    title: "Investment Trends",
    description: "Family Offices and Their Challenges in the MENA Region",
    subtitle:
      "Explore the key portfolio, reporting, and governance challenges facing family offices across MENA.",
    image: `${BANNER_BASE}c193f295-eab2-4f35-8433-a090e7f3e3e4_min.webp`,
    imageAlt:
      "Family office boardroom at dusk overlooking a Gulf city skyline, with portfolio dashboards on screen",
    slug: "family-offices-mena-challenges",
    href: "/blog/family-offices-mena-challenges",
    date: "22 September 2026",
    readingTime: "4 min read",
  },
  {
    category: "FinTech",
    title: "FinTech",
    description: "Digital Assets in FinTech",
    subtitle:
      "Discover how digital assets are reshaping FinTech while creating new risks and opportunities.",
    image: `${BANNER_BASE}49984796-813e-433d-b7ca-109b79e1a3bc_min.webp`,
    imageAlt:
      "Illustration of connected digital asset tokens and network lines above a rising chart",
    slug: "digital-assets-in-fintech",
    href: "/blog/digital-assets-in-fintech",
    date: "15 September 2026",
    readingTime: "4 min read",
  },
  {
    category: "Real Estate",
    title: "Real Estate",
    description: "The Disruptive Force in Real Estate",
    subtitle:
      "Explore how PropTech is transforming real estate through data, automation, and smarter insights.",
    image: `${BANNER_BASE}1f4257c7-930f-4919-87db-38f86a98eb92_min.webp`,
    imageAlt:
      "Architectural model of modern towers with a holographic data overlay representing PropTech",
    slug: "proptech-disruptive-force-real-estate",
    href: "/blog/proptech-disruptive-force-real-estate",
    date: "8 September 2026",
    readingTime: "4 min read",
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
