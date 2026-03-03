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
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">

      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <span className="text-xl font-bold text-emerald-400 tracking-tight hover:text-emerald-300 transition-colors">
              Zéro<span className="text-slate-50">Abo</span>
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-xs text-slate-400">
            <Link href="/a-propos" className="hover:text-emerald-400 transition-colors">
              À propos
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400 mb-6">
          🎉 {TOOL_ALTERNATIVES.length} alternatives en achat unique disponibles
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Arrêtez de payer{" "}
          <span className="text-emerald-400">chaque mois</span>
          <br />
          pour vos logiciels.
        </h1>
        <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto mb-10">
          ZéroAbo recense les meilleures alternatives en{" "}
          <span className="text-slate-200 font-medium">achat unique</span> aux
          logiciels par abonnement. Payez une fois, utilisez pour toujours.
        </p>

        {/* Barre de recherche */}
        <div className="relative max-w-xl mx-auto">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
            🔍
          </span>
          <input
            type="text"
            placeholder="Recherchez un logiciel (ex : Photoshop, Notion, antivirus…)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 pl-10 pr-4 py-3.5 text-sm text-slate-50 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition"
          />
        </div>

        {/* Suggestions rapides */}
        {!searchQuery && (
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {["Office", "PDF", "Antivirus", "Vidéo", "Mind mapping"].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setSearchQuery(suggestion)}
                className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-400 hover:border-emerald-500 hover:text-emerald-400 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Résultats */}
      <section className="max-w-5xl mx-auto px-4 pb-16 w-full flex-1">
        {searchQuery && (
          <p className="text-xs text-slate-500 mb-4">
            {filteredTools.length} résultat{filteredTools.length !== 1 ? "s" : ""} pour &quot;{searchQuery}&quot;
          </p>
        )}

        {filteredTools.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-400 text-sm mb-2">Aucune alternative trouvée.</p>
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs text-emerald-400 hover:underline"
            >
              Voir tous les outils
            </button>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {filteredTools.map((tool) => (
              <div
                key={tool.id}
                className="group flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-emerald-500/50 hover:bg-slate-900 transition-all"
              >
                <div>
                  {/* Nom + badge */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h2 className="text-base font-semibold text-slate-50 group-hover:text-emerald-400 transition-colors">
                      {tool.nom}
                    </h2>
                    <span className="shrink-0 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                      Achat unique
                    </span>
                  </div>

                  {/* Remplace */}
                  <p className="text-xs text-slate-500 mb-3">
                    Remplace{" "}
                    <span className="text-slate-300 font-medium">
                      {tool.originalApp}
                    </span>
                  </p>

                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {tool.description}
                  </p>
                </div>

                {/* Prix + économies + CTA */}
                <div className="flex items-center justify-between gap-3 mt-2 pt-4 border-t border-slate-800">
                  <div>
                    <p className="text-sm font-bold text-emerald-400">
                      {tool.prix}
                    </p>
                    {tool.savings > 0 && (
                      <p className="text-[11px] text-slate-500">
                        💸 ~{tool.savings} € économisés sur 3 ans
                      </p>
                    )}
                  </div>
                  <Link
                    href={`/outil/${tool.slug}`}
                    className="shrink-0 inline-flex items-center gap-1 rounded-lg bg-emerald-500 px-3 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition-colors"
                  >
                    Voir →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 ZéroAbo — Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="/a-propos" className="hover:text-slate-300 transition-colors">
              À propos
            </Link>
            <Link href="/mentions-legales" className="hover:text-slate-300 transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
