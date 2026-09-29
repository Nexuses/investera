import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookDemoCtaSection from "@/components/BookDemoCtaSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { BANNER_SIZE, getInsightBySlug, insights } from "@/components/insights-data";
import { articles } from "@/lib/blog-articles";
import { breadcrumbJsonLd, LOGO_URL, pageMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) {
    return {};
  }
  return pageMetadata({
    title: insight.seoTitle ?? insight.description,
    description: insight.metaDescription,
    path: insight.href,
    image: insight.image,
    imageSize: BANNER_SIZE,
    imageAlt: insight.imageAlt,
    type: "article",
    publishedTime: insight.datePublished,
  });
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  const article = articles[slug];
  if (!insight || !article) {
    notFound();
  }

  const related = insights.filter((item) => item.slug !== slug);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: insight.description,
    description: insight.subtitle,
    image: [insight.image],
    datePublished: insight.datePublished,
    dateModified: insight.datePublished,
    articleSection: insight.category,
    mainEntityOfPage: `${SITE_URL}${insight.href}`,
    author: { "@type": "Organization", name: `${SITE_NAME} Team`, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <JsonLd
        data={[
          articleJsonLd,
          breadcrumbJsonLd([
            { name: "Blog", path: "/blog" },
            { name: insight.description, path: insight.href },
          ]),
        ]}
      />
      <Header variant="dark" />
      <main>
        <section className="relative overflow-hidden bg-[#050B1F] px-6 pb-16 pt-[132px] sm:pb-20 sm:pt-[148px] lg:px-16 lg:pb-24 lg:pt-[168px]">
          <Image
            src={insight.image}
            alt=""
            fill
            unoptimized
            priority
            className="object-cover object-center opacity-45"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-[#050B1F] via-[#050B1F]/80 to-[#050B1F]/30"
          />
          <div className="relative mx-auto max-w-[760px]">
            <Link
              href="/blog"
              className="text-[14px] font-medium text-white/70 transition-colors hover:text-white"
            >
              ← Back to Blog
            </Link>
            <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#CCA400]">
              {insight.category}
            </p>
            <h1 className="mt-4 text-[34px] font-semibold leading-[1.2] tracking-[-0.02em] text-white sm:text-[44px] lg:text-[52px]">
              {insight.description}
            </h1>
            <p className="mt-5 max-w-[720px] text-[17px] leading-[1.5] text-white/80">
              {insight.subtitle}
            </p>
            <p className="mt-6 text-[14px] text-white/60">
              Investera Team ·{" "}
              <time dateTime={insight.datePublished}>{insight.date}</time> ·{" "}
              {insight.readingTime}
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-[760px] px-6 py-14 sm:px-10 sm:py-16 lg:py-20">
          <p className="text-[19px] leading-[1.6] text-[#1f1f1f]">{article.intro}</p>

          {article.sections.map((section) => (
            <section key={section.heading} className="mt-12">
              <h2 className="text-[26px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#0c2d57] sm:text-[30px]">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="mt-4 text-[17px] leading-[1.65] text-[#374151]"
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-5 list-disc space-y-2 pl-5 text-[17px] leading-[1.6] text-[#374151] marker:text-[#CCA400]">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <div className="mt-14 rounded-[12px] bg-[#0c2d57] px-6 py-6 text-white sm:px-8 sm:py-8">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#CCA400]">
              Key takeaway
            </p>
            <p className="mt-3 text-[18px] leading-[1.5]">{article.takeaway}</p>
          </div>
        </article>

        <section className="bg-[#F4F4F4] px-6 py-14 lg:px-16 lg:py-16">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-[28px] font-normal tracking-[-0.02em] text-[#111111] sm:text-[32px]">
              More from the <span className="heading-accent text-[#0c2d57]">Blog</span>
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={item.href}
                  className="group overflow-hidden rounded-[18px] border border-[#E5E7EB] bg-white transition-shadow hover:shadow-[0_12px_28px_rgba(12,45,87,0.08)]"
                >
                  <div className="relative h-[200px]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#CCA400]">
                      {item.category}
                    </p>
                    <h3 className="mt-2 text-[20px] font-bold leading-[1.3] text-[#0c2d57]">
                      {item.description}
                    </h3>
                    <span className="mt-4 inline-flex text-[15px] font-semibold text-[#0c2d57] group-hover:opacity-80">
                      Read more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <BookDemoCtaSection />
      </main>
      <Footer />
    </div>
  );
}
