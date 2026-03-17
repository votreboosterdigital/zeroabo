// app/sitemap.ts
import type { MetadataRoute } from "next";
import { TOOL_ALTERNATIVES } from "@/app/data/tools";
import { BLOG_POSTS } from "@/app/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const tools = TOOL_ALTERNATIVES.map((tool) => ({
    url: `https://zeroabo.fr/outil/${tool.slug}`,
    lastModified: new Date(),
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
    {
      url: "https://zeroabo.fr",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://zeroabo.fr/calculateur",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: "https://zeroabo.fr/mon-histoire",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
    {
      url: "https://zeroabo.fr/blog",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...tools,
    ...blogPosts,
  ];
}
