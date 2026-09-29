# Investera SEO & AI Search Checklist

Last reviewed: 29 September 2026 · Site: https://www.investera.com

Status key: ✅ done and verified · 🟡 partly done · ⬜ to do · 👤 needs the Investera team (content, access or approval)

Baseline after this pass (Lighthouse, mobile lab test): SEO score **100** on all pages tested;
home performance **92–94** (was 74), LCP **3.0 s** (was 5.9 s), page weight **~0.5 MB** (was 2.0 MB).

---

## 1. Crawling & indexing

| # | Item | Status | Notes / where |
|---|------|--------|---------------|
| 1.1 | `robots.txt` allows search engines, blocks only `/api/` | ✅ | `app/robots.ts` |
| 1.2 | AI crawlers explicitly allowed: OAI-SearchBot, ChatGPT-User, GPTBot, Claude-SearchBot, Claude-User, ClaudeBot, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, CCBot | ✅ | To opt out of AI *training* only, disallow GPTBot, ClaudeBot, CCBot, Google-Extended and Applebot-Extended, and keep the search/user agents allowed |
| 1.3 | XML sitemap with every indexable page, `lastmod`, priority and blog images | ✅ | `app/sitemap.ts` → `/sitemap.xml` (15 URLs). Update `CONTENT_UPDATED` when pages change |
| 1.4 | Sitemap referenced in `robots.txt` | ✅ | |
| 1.5 | Canonical URL on every page, pointing at `https://www.investera.com` | ✅ | `lib/seo.ts` → `pageMetadata()` |
| 1.6 | `investera.com` redirects to `www.investera.com` (single host) | ✅ | Vercel domain config (308) |
| 1.7 | HTTPS everywhere | ✅ | Vercel |
| 1.8 | Test/duplicate pages removed (`/home-1`, `/home-2`, `/contact-2`, `/nanto-template`) and return 404 | ✅ | |
| 1.9 | Custom 404 page returns HTTP 404 | ✅ | |
| 1.10 | Preview/UAT deployments are not indexed | ✅ | Vercel sends `x-robots-tag: noindex` on previews |
| 1.11 | Submit sitemap in Google Search Console and Bing Webmaster Tools | ⬜ 👤 | Needs account access; verify the domain via DNS |
| 1.12 | Monitor Search Console "Pages" and "Crawl stats" monthly | ⬜ 👤 | |

## 2. On-page SEO

| # | Item | Status | Notes |
|---|------|--------|-------|
| 2.1 | Unique title per page, 50–60 characters, primary keyword first | ✅ | All pages ≤ 61 characters, no duplicates |
| 2.2 | Unique meta description per page, 140–160 characters, with a benefit and call to action | ✅ | Legal pages are shorter by design |
| 2.3 | Exactly one `<h1>` per page, logical H2/H3 hierarchy | ✅ | CTA section heading demoted to H2 |
| 2.4 | Short, descriptive URL slugs with no dates | ✅ | e.g. `/blog/digital-assets-in-fintech` |
| 2.5 | Every image has an `alt` attribute; decorative images use `alt=""` | ✅ | 0 missing on all pages |
| 2.6 | `<html lang="en">` | ✅ | |
| 2.7 | Internal links between related pages (blog → related posts, CTA → demo) | ✅ | Add contextual links from blog body copy to /platform and /pricing when final articles land |
| 2.8 | Target keyword mapping per page | 🟡 | Suggested map below; confirm with keyword research in Semrush/Ahrefs |
| 2.9 | Consistent spelling (UK or US English) | ⬜ 👤 | See content consistency sheet |

**Suggested keyword map (validate volumes in Semrush/Ahrefs):**

| Page | Primary keyword | Secondary |
|------|-----------------|-----------|
| Home | investment management platform GCC | investment management software UAE, portfolio management system |
| Platform | portfolio management software | deal management software, investment reporting software |
| Pricing | investment management software pricing | portfolio management system cost |
| About | Investera | investment technology Abu Dhabi |
| Case studies | investment management system case study | PMS implementation Saudi Arabia, IMS Kuwait |
| Blog: family offices | family office challenges MENA | family office software UAE |
| Blog: digital assets | digital assets fintech | tokenisation investment management |
| Blog: PropTech | proptech real estate investment | real estate portfolio management |

## 3. Social sharing (Open Graph & X/Twitter cards)

| # | Item | Status | Notes |
|---|------|--------|-------|
| 3.1 | `og:title`, `og:description`, `og:url`, `og:type`, `og:site_name`, `og:locale` on every page | ✅ | |
| 3.2 | 1200×630 branded social card per page | ✅ | Generated at `/og?title=…&eyebrow=…` in brand colours and font |
| 3.3 | Blog posts use their banner as the share image, with `article:published_time` | ✅ | |
| 3.4 | `twitter:card=summary_large_image` and `twitter:site=@InvesteraAE` | ✅ | |
| 3.5 | Check previews after go-live with LinkedIn Post Inspector and the X card validator | ⬜ 👤 | UAT is login-protected, so scrapers can only see production |

## 4. Structured data (JSON-LD)

| # | Item | Status | Notes |
|---|------|--------|-------|
| 4.1 | `Organization` (legal name, logo, address, contact point, social profiles) | ✅ | Every page, via `app/layout.tsx` |
| 4.2 | `WebSite` | ✅ | |
| 4.3 | `SoftwareApplication` for Investera Pro | ✅ | Home + Platform |
| 4.4 | `FAQPage` for the pricing FAQs | ✅ | Google now shows FAQ rich results mainly for authoritative gov/health sites, but the markup still helps AI extraction |
| 4.5 | `BlogPosting` on articles, `Blog` on the listing | ✅ | Author is "Investera Team"; switch to named people (see 6.2) |
| 4.6 | `Article` on case studies | ✅ | |
| 4.7 | `BreadcrumbList` on all inner pages | ✅ | |
| 4.8 | Validate with Google Rich Results Test and Schema.org validator after go-live | ⬜ 👤 | |
| 4.9 | Add `aggregateRating`/`Review` only if there are genuine, verifiable reviews | ⬜ | Don't mark up the testimonials without permission and a real source |

## 5. AI search (ChatGPT, Perplexity, Google AI Overviews, Claude)

| # | Item | Status | Notes |
|---|------|--------|-------|
| 5.1 | AI crawlers allowed in `robots.txt` | ✅ | See 1.2 |
| 5.2 | `/llms.txt` summary with company facts and key links | ✅ | Built from the same data as the pages |
| 5.3 | `/llms-full.txt` with product, pricing, FAQ, case study and blog content | ✅ | |
| 5.4 | Key facts stated plainly and consistently (who, what, where, since when, who for) | 🟡 | Resolve the contradictions in the content sheet: address, entity name, claims |
| 5.5 | Question-and-answer formatting on key pages | 🟡 | Pricing has a FAQ. Add short FAQs to Platform and each blog post |
| 5.6 | Short paragraphs, clear headings, bullet lists, answer in the first sentence | ✅ | Blog template follows this |
| 5.7 | Fresh content: publish or update at least monthly | ⬜ 👤 | AI assistants favour recent sources |
| 5.8 | Brand mentions on third-party sites (directories, partner pages, press, LinkedIn articles) | ⬜ 👤 | Mentions correlate strongly with AI visibility |
| 5.9 | Track AI visibility (Semrush AI Visibility Toolkit or Ahrefs Brand Radar) | ⬜ 👤 | |

## 6. Content quality & E-E-A-T

| # | Item | Status | Notes |
|---|------|--------|-------|
| 6.1 | Replace draft blog articles with final, expert-reviewed copy | ⬜ 👤 | |
| 6.2 | Named author bylines with short bios and LinkedIn links | ⬜ 👤 | Credentialed authors outperform "Staff/Team" bylines |
| 6.3 | Measurable outcomes in case studies | ⬜ 👤 | e.g. reporting time cut from X days to Y |
| 6.4 | Cite primary sources in articles (regulators, research) | ⬜ | |
| 6.5 | Up-to-date legal pages linked in the footer | ✅ | Legal review still recommended |
| 6.6 | Comparison/alternative pages (e.g. "Investera vs spreadsheets", "PMS vs IMS") | ⬜ | High-intent B2B SaaS content |
| 6.7 | Content calendar: 2–4 posts a month targeting GCC investment topics | ⬜ 👤 | |

## 7. Performance (Core Web Vitals)

Targets: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 (at the 75th percentile of real users).

| # | Item | Status | Notes |
|---|------|--------|-------|
| 7.1 | CLS | ✅ | 0 on all pages tested |
| 7.2 | Heavy PNG backgrounds converted to WebP | ✅ | ~1.5 MB saved on the home page |
| 7.3 | Hero text visible at first paint | ✅ | Home LCP 5.9 s → 3.0 s (lab) |
| 7.4 | Move S3 images (hero, dashboards, team photos) to `next/image` optimisation or pre-compressed WebP/AVIF | ⬜ | Many use `unoptimized`; add `images.remotePatterns` for `investera.s3.us-east-2.amazonaws.com` |
| 7.5 | Lazy-load below-the-fold images and embeds | 🟡 | HubSpot calendar preloads from the home page by design; review |
| 7.6 | Reduce unused JavaScript (~125 KB on home) | ⬜ | Review animation-heavy client components |
| 7.7 | Monitor real-user Core Web Vitals in Search Console / Vercel Speed Insights | ⬜ 👤 | |

## 8. Local & brand presence

| # | Item | Status | Notes |
|---|------|--------|-------|
| 8.1 | Google Business Profile for the Abu Dhabi office | ⬜ 👤 | Name, address and phone must match the website exactly |
| 8.2 | Consistent NAP (name, address, phone) across LinkedIn, directories and the site | ⬜ 👤 | Website currently uses 12th Floor, CI Tower |
| 8.3 | Listings on relevant software directories (G2, Capterra, GetApp) with reviews | ⬜ 👤 | |

## 9. Maintenance routine

- **Every new page:** use `pageMetadata()` from `lib/seo.ts`, add breadcrumb JSON-LD, add it to `app/sitemap.ts`, and mention it in `lib/llms.ts` if important.
- **Every new blog post:** add it to `components/insights-data.ts` (with `datePublished`, `metaDescription` and optionally `seoTitle`) and `lib/blog-articles.ts`. The sitemap, llms files, social card and schema update automatically.
- **Monthly:** check Search Console coverage and Core Web Vitals, run a Semrush Site Audit / Ahrefs Site Audit, and fix new issues.
- **Quarterly:** refresh top pages and statistics, review keyword rankings and AI visibility.

## Sources

- Semrush – [On-page SEO checklist 2026](https://www.semrush.com/blog/on-page-seo-checklist/)
- Semrush – [Technical SEO checklist for search engines and AI search](https://www.semrush.com/blog/technical-seo-checklist/)
- Semrush – [How to optimize content for AI search engines](https://www.semrush.com/blog/how-to-optimize-content-for-ai-search-engines/)
- Semrush – [Blocked from AI search (Site Audit)](https://www.semrush.com/kb/1571-blocked-from-ai-search-site-audit)
- Semrush – [How to prepare your site for AI agents](https://www.semrush.com/blog/how-to-prepare-your-site-for-ai-agents/)
- Semrush – [Schema markup](https://www.semrush.com/blog/schema-markup/) · [Core Web Vitals](https://www.semrush.com/blog/core-web-vitals/) · [E-E-A-T](https://www.semrush.com/blog/eeat/)
- Ahrefs – [On-page SEO checklist 2026](https://ahrefs.com/blog/on-page-seo-checklist/)
- Ahrefs – [LLM visibility](https://ahrefs.com/blog/llm-visibility/) · [What we know about optimizing for LLM search](https://ahrefs.com/blog/llm-search/)
- Ahrefs – [AI bots websites block most](https://ahrefs.com/blog/ai-bot-block-rates/) · [Schema markup](https://ahrefs.com/blog/schema-markup/) · [SaaS SEO](https://ahrefs.com/blog/saas-seo/)
