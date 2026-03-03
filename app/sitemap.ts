// app/sitemap.ts
import type { MetadataRoute } from "next";
import { TOOL_ALTERNATIVES } from "@/app/data/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const tools = TOOL_ALTERNATIVES.map((tool) => ({
    url: `https://zeroabo.fr/outil/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://zeroabo.fr",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...tools,
  ];
}
