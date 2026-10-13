"use client";

import { useState } from "react";
import BlogHero from "@/components/blog/BlogHero";
import InsightsSection from "@/components/InsightsSection";
import type { Insight, InsightFilter } from "@/components/insights-data";

export default function BlogContent({ insights }: { insights: Insight[] }) {
  const [activeFilter, setActiveFilter] = useState<InsightFilter>("All");

  return (
    <>
      <BlogHero
        insights={insights}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <InsightsSection
        insights={insights}
        compact
        allInsightsHref="/blog"
        activeFilter={activeFilter}
      />
    </>
  );
}
