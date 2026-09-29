import type { MetadataRoute } from "next";
import { insights } from "@/components/insights-data";
import { SITE_URL } from "@/lib/seo";

// Date the page content last changed meaningfully; update when a page is edited.
const CONTENT_UPDATED = new Date("2026-09-29");

const pages: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/platform", priority: 0.9, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/book-a-demo", priority: 0.8, changeFrequency: "yearly" },
  { path: "/about-us", priority: 0.7, changeFrequency: "monthly" },
  { path: "/case-study", priority: 0.7, changeFrequency: "monthly" },
  { path: "/case-study/dimah-capital", priority: 0.6, changeFrequency: "yearly" },
  { path: "/case-study/al-kifah-holding", priority: 0.6, changeFrequency: "yearly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms-of-service", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map(({ path, priority, changeFrequency }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: CONTENT_UPDATED,
      changeFrequency,
      priority,
    })),
    ...insights.map((insight) => ({
      url: `${SITE_URL}${insight.href}`,
      lastModified: new Date(insight.datePublished),
      changeFrequency: "yearly" as const,
      priority: 0.6,
      images: [insight.image],
    })),
  ];
}
