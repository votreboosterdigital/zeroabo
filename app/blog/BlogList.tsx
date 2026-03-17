"use client";

import { useState } from "react";
import Link from "next/link";
import type { BlogPost, BlogCategorie } from "@/app/data/blog";

const CATEGORIES: Array<BlogCategorie | "Tous"> = [
  "Tous",
  "Créateurs",
  "Entrepreneurs",
  "Vie perso",
  "Outils",
];

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const [activeCategorie, setActiveCategorie] = useState<BlogCategorie | "Tous">("Tous");

  const filtered =
    activeCategorie === "Tous"
      ? posts
      : posts.filter((p) => p.categorie === activeCategorie);

  return (
    <div>
      {/* Filtres pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategorie(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              activeCategorie === cat
                ? "bg-sky-500 text-white"
                : "border border-white/10 bg-white/5 text-slate-400 hover:text-slate-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition-colors flex flex-col gap-3"
          >
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-sky-500/10 px-2.5 py-0.5 text-xs font-medium text-sky-400">
                {post.categorie}
              </span>
              <span className="text-xs text-slate-500">
                {post.tempsLecture} min
              </span>
            </div>
            <h2 className="text-base font-bold text-slate-100 group-hover:text-white transition-colors leading-snug">
              {post.titre}
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed flex-1">
              {post.description}
            </p>
            <p className="text-xs text-slate-500">{formatDate(post.date)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
