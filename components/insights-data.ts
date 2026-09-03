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
  href: string;
};

export const insights: Insight[] = [
  {
    category: "Investment Trends",
    title: "Investment Trends",
    description: "Family Offices and Their Challenges in the MENA Region",
    subtitle:
      "Explore the key portfolio, reporting, and governance challenges facing family offices across MENA.",
    image: "/images/insights/card-1.png",
    imageAlt:
      "Family office meeting discussing investment trends in the MENA region",
    href: "/blog",
  },
  {
    category: "FinTech",
    title: "FinTech",
    description: "Digital Assets in FinTech",
    subtitle:
      "Discover how digital assets are reshaping FinTech while creating new risks and opportunities.",
    image: "/images/insights/card-2.png",
    imageAlt: "Digital assets and FinTech technology visualization",
    href: "/blog",
  },
  {
    category: "Real Estate",
    title: "Real Estate PropTech",
    description: "The Disruptive Force in Real Estate",
    subtitle:
      "Explore how PropTech is transforming real estate through data, automation, and smarter insights.",
    image: "/images/insights/card-3.png",
    imageAlt: "Modern real estate PropTech and property technology",
    href: "/blog",
  },
];

export function filterInsights(active: InsightFilter) {
  if (active === "All") {
    return insights;
  }
  return insights.filter((insight) => insight.category === active);
}
