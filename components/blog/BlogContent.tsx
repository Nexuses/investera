"use client";

import { useState } from "react";
import BlogHero from "@/components/blog/BlogHero";
import InsightsSection from "@/components/InsightsSection";
import type { InsightFilter } from "@/components/insights-data";

export default function BlogContent() {
  const [activeFilter, setActiveFilter] = useState<InsightFilter>("All");

  return (
    <>
      <BlogHero activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <InsightsSection
        compact
        allInsightsHref="/blog"
        activeFilter={activeFilter}
      />
    </>
  );
}
