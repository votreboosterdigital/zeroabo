"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { TOOL_ALTERNATIVES } from "./data/tools";
import { SearchBar } from "../components/SearchBar";

const suggestionsPopulaires = [
  "Adobe",
  "Photoshop",
  "Illustrator",
  "Notion",
  "Figma",
  "Zoom",
  "Canva",
  "Microsoft 365",
];

export default function HomePage() {
  const [termeRecherche, setTermeRecherche] = useState<string>("");
  const [aCherche, setACherche] = useState<boolean>(false);

  const resultats = useMemo(() => {
    const terme = termeRecherche.trim().toLowerCase();
    if (!terme) return [];
    return TOOL_ALTERNATIVES.filter((alt) => {
      const cibleAbonnement = alt.abonnement.toLowerCase();
      const cibleNom = alt.nom.toLowerCase();
      const cibleMotsCles = alt.motsCles.map((m) => m.toLowerCase());
      return (
        cibleAbonnement.includes(terme) ||
        cibleNom.includes(terme) ||
        cibleMotsCles.some((m) => m.includes(terme))
      );
    });
  }, [termeRecherche]);

  const handleSearch = (term: string) => {
    setTermeRecherche(term);
    setACherche(true);
  };

  const handleSuggestionClick = (term: string) => {
    setTermeRecherche(term);
    setACherche(true);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-semibold tracking-tight text-emerald-400">
            ZéroAbo
          </h1>
          <p className="text-sm text-slate-300">
            Trouvez une alternative sans abonnement à vos logiciels préférés.
          </p>
        </div>
      </header>
      <div className="flex-1">
        <section className="max-w-5xl mx-auto px-4 pt-10 pb-16">
          <div className="max-w-3xl">
            <p className="text-sm text-slate-300">
              Marre de payer un abonnement tous les mois&nbsp;? Tapez le nom de
              votre logiciel actuel et découvrez des alternatives en achat unique.
            </p>
          </div>
          <SearchBar onSearch={handleSearch} valeurInitiale={termeRecherche} />
          <section className="w-full max-w-xl mx-auto mt-8">
            <h2 className="text-sm font-medium text-slate-200 mb-3">
              Suggestions populaires
            </h2>
            <div className="flex flex-wrap gap-2">
              {suggestionsPopulaires.map((sugg) => (
                <button
                  key={sugg}
                  type="button"
                  onClick={() => handleSuggestionClick(sugg)}
                  className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-100 hover:border-emerald-500 hover:text-emerald-300 transition-colors"
                >
                  {sugg}
                </button>
              ))}
            </div>
          </section>
          {aCherche && (
            <section className="w-full max-w-3xl mx-auto mt-10">
              <h2 className="text-xl font-semibold mb-4">
                Résultats pour&nbsp;:{" "}
                <span className="text-emerald-400">
                  &ldquo;{termeRecherche}&rdquo;
                </span>
              </h2>
              {resultats.length === 0 ? (
                <p className="text-sm text-slate-300">
                  Aucune alternative trouvée. Essayez Adobe, Notion, Figma, Zoom…
                </p>
              ) : (
                <div className="space-y-4">
                  {resultats.map((alt) => (
                    <Link
                      key={alt.id}
                      href={`/outil/${alt.slug}`}
                      className="block rounded-lg border border-slate-800 bg-slate-900/60 p-4 hover:border-emerald-500/50 hover:bg-slate-900 transition-all"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-lg font-semibold text-slate-50">
                            {alt.nom}
                          </h3>
                          <p className="mt-1 text-sm text-emerald-300">
                            {alt.prix}
                          </p>
                          <p className="mt-2 text-sm text-slate-200">
                            {alt.description}
                          </p>
                          <p className="mt-2 text-xs text-slate-400">
                            Remplace&nbsp;: {alt.abonnement}
                          </p>
                        </div>
                        <span className="shrink-0 text-xs text-emerald-400 border border-emerald-500/40 rounded-full px-2 py-1">
                          Voir →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </section>
          )}
        </section>
      </div>
      <footer className="border-t border-slate-800 bg-slate-950/80">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <p className="text-[11px] text-slate-500">
            Version 1.0 de ZéroAbo – Données d&apos;exemple, non contractuelles.
          </p>
        </div>
      </footer>
    </main>
  );
}
