// app/sitemap.ts
import type { MetadataRoute } from "next";
import { TOOL_ALTERNATIVES } from "@/app/data/tools";
import { BLOG_POSTS } from "@/app/data/blog";
import { CATEGORIES } from "@/app/data/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const latestPostDate = BLOG_POSTS.reduce((latest, p) =>
    p.date > latest ? p.date : latest, "2026-01-01"
  );

  const tools = TOOL_ALTERNATIVES.map((tool) => ({
    url: `https://zeroabo.fr/outil/${tool.slug}`,
    lastModified: new Date(latestPostDate),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPosts = BLOG_POSTS.map((post) => ({
    url: `https://zeroabo.fr/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: "https://zeroabo.fr", lastModified: new Date(latestPostDate), changeFrequency: "weekly", priority: 1 },
    { url: "https://zeroabo.fr/calculateur", lastModified: new Date("2026-03-18"), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: "https://zeroabo.fr/blog", lastModified: new Date(latestPostDate), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: "https://zeroabo.fr/faq", lastModified: new Date("2026-03-18"), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "https://zeroabo.fr/a-propos", lastModified: new Date("2026-03-18"), changeFrequency: "yearly" as const, priority: 0.5 },
    { url: "https://zeroabo.fr/mon-histoire", lastModified: new Date("2026-03-18"), changeFrequency: "yearly" as const, priority: 0.5 },
    { url: "https://zeroabo.fr/comparer", lastModified: new Date("2026-03-18"), changeFrequency: "monthly" as const, priority: 0.6 },
    ...tools,
    ...blogPosts,
    ...CATEGORIES.map((cat) => ({
      url: `https://zeroabo.fr/outils/${cat.slug}`,
      lastModified: new Date(latestPostDate),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
