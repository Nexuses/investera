import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Search engines and AI assistants are explicitly welcome so Investera can be
// indexed and cited. To opt out of AI model training only, move the training
// crawlers (GPTBot, ClaudeBot, CCBot, Google-Extended, Applebot-Extended) to a
// `disallow: "/"` rule and keep the search/user-triggered agents allowed.
const AI_AGENTS = [
  // Retrieval / AI search indexes
  "OAI-SearchBot",
  "Claude-SearchBot",
  "PerplexityBot",
  // User-triggered fetchers
  "ChatGPT-User",
  "Claude-User",
  "Perplexity-User",
  // Training crawlers
  "GPTBot",
  "ClaudeBot",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      { userAgent: AI_AGENTS, allow: "/", disallow: "/api/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
