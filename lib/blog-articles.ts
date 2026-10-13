// Blog article body shape (content is managed in Payload at /admin).
// Text supports **bold** for emphasis.

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "stats"; items: { value: string; label: string; source?: string }[] }
  | {
      type: "figure";
      src: string;
      alt: string;
      caption: string;
      width: number;
      height: number;
      dark?: boolean;
    }
  | { type: "table"; caption: string; head: string[]; rows: string[][] }
  | { type: "callout"; title: string; text: string };

export type Article = {
  intro: string;
  blocks: ArticleBlock[];
  takeaway: string;
};

/** Plain text of an article, for reading-time estimates and AI summaries. */
export function articleText(article: Article) {
  const parts = [article.intro];
  for (const block of article.blocks) {
    if (block.type === "p" || block.type === "h2" || block.type === "h3") parts.push(block.text);
    if (block.type === "list") parts.push(...block.items);
    if (block.type === "callout") parts.push(block.title, block.text);
    if (block.type === "stats") parts.push(...block.items.map((s) => `${s.value} ${s.label}`));
    if (block.type === "table") parts.push(...block.rows.map((r) => r.join(" – ")));
  }
  parts.push(article.takeaway);
  return parts.join("\n\n").replace(/\*\*/g, "");
}
