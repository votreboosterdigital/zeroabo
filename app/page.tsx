"use client";

import { useMemo, useState } from "react";
import { TOOL_ALTERNATIVES } from "./data/tools";
import { SearchBar } from "../components/SearchBar";
import { ResultsList } from "./ResultsList";

const suggestionsPopulaires = [
  "Adobe",
  "Photoshop",
  "Illustrator",
  "InDesign",
  "Notion",
  "Premiere Pro",
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
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-emerald-400">
              ZéroAbo
            </h1>
            <p className="text-sm text-slate-300">
              Trouvez une alternative sans abonnement à vos logiciels préférés.
            </p>
          </div>
        </div>
      </header>

      <div className="flex-1">
        <section className="max-w-5xl mx-auto px-4 pt-10 pb-16">
          <div className="max-w-3xl">
            <p className="text-sm text-slate-300">
              Marre de payer un abonnement tous les mois&nbsp;? Tapez le nom de
              votre logiciel actuel (Adobe, Notion, etc.) et découvrez des
              alternatives en achat unique.
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

          <ResultsList
            terme={termeRecherche}
            resultats={resultats}
            aCherche={aCherche}
          />
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
