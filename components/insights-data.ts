export const blogCategories = [
  "Investment Trends",
  "FinTech",
  "Real Estate",
] as const;

export const insightFilters = ["All", ...blogCategories] as const;

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

/** Blog banner dimensions (used for social cards and structured data). */
export const BANNER_SIZE = { width: 1920, height: 1086 };

export function filterInsights(insights: Insight[], active: InsightFilter) {
  if (active === "All") {
    return insights;
  }
  return insights.filter((insight) => insight.category === active);
}
