// app/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { TOOL_ALTERNATIVES } from "@/app/data/tools";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = TOOL_ALTERNATIVES.filter((tool) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      tool.nom.toLowerCase().includes(q) ||
      tool.originalApp.toLowerCase().includes(q) ||
      tool.motsCles.some((mot) => mot.toLowerCase().includes(q))
    );
  });

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-semibold text-emerald-400">
              ZéroAbo
            </h1>
          </Link>
          <nav className="flex items-center gap-4 text-xs text-slate-400">
            <Link
              href="/a-propos"
              className="hover:text-emerald-400 transition-colors"
            >
              À propos
            </Link>
          </nav>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-3">
            Marre des abonnements logiciels ?
          </h2>
          <p className="text-slate-300 text-sm">
            Entrez le nom d&apos;un logiciel par abonnement (ex : Microsoft 365)
            ou d&apos;un type d&apos;outil (bureautique, montage vidéo…) pour
            trouver une alternative en achat unique.
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Rechercher une alternative (ex : Office, antivirus, montage vidéo)…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-50 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
        </div>

        {/* Résultats */}
        <div id="resultats" className="space-y-4">
          {filteredTools.length === 0 ? (
            <p className="text-sm text-slate-400">
              Aucune alternative trouvée. Essayez un autre mot-clé (ex : Office,
              antivirus, photo…).
            </p>
          ) : (
            filteredTools.map((tool) => (
              <div
                key={tool.id}
                className="flex flex-col gap-3 rounded-lg border border-slate-800 bg-slate-900/60 p-4 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h3 className="text-base font-semibold text-slate-50">
                    {tool.nom}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Alternative à{" "}
                    <span className="text-slate-200 font-medium">
                      {tool.originalApp}
                    </span>
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    {tool.description}
                  </p>
                </div>
                <div className="mt-3 flex flex-col items-start gap-2 md:mt-0 md:items-end">
                  <p className="text-sm font-semibold text-emerald-400">
                    {tool.prix}
                  </p>
                  <Link
                    href={`/outil/${tool.slug}`}
                    className="inline-flex items-center gap-1 rounded-md bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-slate-950 hover:bg-emerald-400"
                  >
                    Voir l&apos;alternative →
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
