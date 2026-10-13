import config from "@payload-config";
import { getPayload } from "payload";
import { cache } from "react";
import type { Insight } from "@/components/insights-data";
import { articleText, type Article, type ArticleBlock } from "@/lib/blog-articles";
import { SITE_URL } from "@/lib/seo";
import type { Media, Post } from "@/payload-types";

export type BlogPost = { insight: Insight; article: Article };

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

const mediaOf = (value: Post["coverImage"]): Media | null =>
  value && typeof value === "object" ? value : null;

/** Absolute URL for structured data and social cards. */
export const absoluteUrl = (src: string) => (src.startsWith("/") ? `${SITE_URL}${src}` : src);

function toBlocks(content: Post["content"]): ArticleBlock[] {
  return (content ?? []).flatMap((block): ArticleBlock[] => {
    switch (block.blockType) {
      case "p":
      case "h2":
      case "h3":
        return [{ type: block.blockType, text: block.text }];
      case "list":
        return [{ type: "list", ordered: !!block.ordered, items: block.items.map((item) => item.text) }];
      case "stats":
        return [
          {
            type: "stats",
            items: block.items.map(({ value, label, source }) => ({
              value,
              label,
              ...(source ? { source } : {}),
            })),
          },
        ];
      case "figure": {
        const media = mediaOf(block.image);
        const src = media?.url ?? block.src;
        if (!src) return [];
        return [
          {
            type: "figure",
            src,
            alt: block.alt,
            caption: block.caption,
            width: media?.width ?? block.width ?? 1440,
            height: media?.height ?? block.height ?? 900,
            dark: !!block.dark,
          },
        ];
      }
      case "table":
        return [
          {
            type: "table",
            caption: block.caption,
            head: block.head.map((cell) => cell.text),
            rows: block.rows.map((row) => row.cells.map((cell) => cell.text)),
          },
        ];
      case "callout":
        return [{ type: "callout", title: block.title, text: block.text }];
      default:
        return [];
    }
  });
}

function toBlogPost(post: Post): BlogPost {
  const article: Article = {
    intro: post.intro,
    blocks: toBlocks(post.content),
    takeaway: post.takeaway ?? "",
  };
  const words = articleText(article).split(/\s+/).filter(Boolean).length;
  const published = new Date(post.publishedDate);

  const insight: Insight = {
    category: post.category,
    title: post.category,
    description: post.title,
    subtitle: post.subtitle,
    image: mediaOf(post.coverImage)?.url ?? post.coverImageUrl ?? "",
    imageAlt: post.coverImageAlt,
    slug: post.slug,
    href: `/blog/${post.slug}`,
    date: dateFormat.format(published),
    datePublished: published.toISOString().slice(0, 10),
    readingTime: post.readingTime || `${Math.max(1, Math.round(words / 200))} min read`,
    seoTitle: post.seoTitle || undefined,
    metaDescription: post.metaDescription || post.subtitle,
  };

  return { insight, article };
}

/** Published posts, newest first. */
export const getPublishedPosts = cache(async (): Promise<BlogPost[]> => {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "posts",
    where: { _status: { equals: "published" } },
    sort: "-publishedDate",
    depth: 1,
    limit: 0,
    pagination: false,
  });
  return docs.map(toBlogPost);
});

export const getPublishedInsights = cache(async (): Promise<Insight[]> =>
  (await getPublishedPosts()).map((post) => post.insight),
);

export const getPublishedPost = cache(async (slug: string): Promise<BlogPost | null> => {
  const posts = await getPublishedPosts();
  return posts.find((post) => post.insight.slug === slug) ?? null;
});
