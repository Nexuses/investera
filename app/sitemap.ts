import type { MetadataRoute } from "next";
import { insights } from "@/components/insights-data";

const BASE_URL = "https://www.investera.com";

const pages = [
  "",
  "/about-us",
  "/platform",
  "/pricing",
  "/case-study",
  "/case-study/dimah-capital",
  "/case-study/al-kifah-holding",
  "/blog",
  "/contact",
  "/book-a-demo",
  "/privacy-policy",
  "/terms-of-service",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((path) => ({ url: `${BASE_URL}${path}` })),
    ...insights.map((insight) => ({ url: `${BASE_URL}${insight.href}` })),
  ];
}
