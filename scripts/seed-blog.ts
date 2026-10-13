// Imports the original blog posts into Payload. Safe to re-run: existing slugs are skipped.
// Usage: npm run seed:blog
import config from "@payload-config";
import { getPayload } from "payload";
import type { ArticleBlock } from "@/lib/blog-articles";
import type { Post } from "@/payload-types";
import { seedArticles, seedInsights } from "./blog-seed-data";

type ContentBlock = NonNullable<Post["content"]>[number];

function toContent(blocks: ArticleBlock[]): ContentBlock[] {
  return blocks.map((block): ContentBlock => {
    switch (block.type) {
      case "p":
      case "h2":
      case "h3":
        return { blockType: block.type, text: block.text };
      case "list":
        return {
          blockType: "list",
          ordered: !!block.ordered,
          items: block.items.map((text) => ({ text })),
        };
      case "stats":
        return { blockType: "stats", items: block.items };
      case "figure":
        return {
          blockType: "figure",
          src: block.src,
          alt: block.alt,
          caption: block.caption,
          width: block.width,
          height: block.height,
          dark: !!block.dark,
        };
      case "table":
        return {
          blockType: "table",
          caption: block.caption,
          head: block.head.map((text) => ({ text })),
          rows: block.rows.map((row) => ({ cells: row.map((text) => ({ text })) })),
        };
      case "callout":
        return { blockType: "callout", title: block.title, text: block.text };
    }
  });
}

const payload = await getPayload({ config });

for (const insight of seedInsights) {
  const article = seedArticles[insight.slug];
  const existing = await payload.find({
    collection: "posts",
    where: { slug: { equals: insight.slug } },
    draft: true,
    limit: 1,
  });

  if (existing.docs.length > 0) {
    payload.logger.info(`Skipped "${insight.slug}" (already exists)`);
    continue;
  }

  await payload.create({
    collection: "posts",
    draft: false,
    data: {
      _status: "published",
      title: insight.description,
      subtitle: insight.subtitle,
      slug: insight.slug,
      category: insight.category,
      publishedDate: new Date(`${insight.datePublished}T00:00:00.000Z`).toISOString(),
      readingTime: insight.readingTime,
      coverImageUrl: insight.image,
      coverImageAlt: insight.imageAlt,
      intro: article.intro,
      content: toContent(article.blocks),
      takeaway: article.takeaway,
      seoTitle: insight.seoTitle,
      metaDescription: insight.metaDescription,
    },
  });
  payload.logger.info(`Created "${insight.slug}"`);
}

process.exit(0);
