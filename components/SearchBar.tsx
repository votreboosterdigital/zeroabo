"use client";

import { useState, FormEvent } from "react";

type SearchBarProps = {
  valeurInitiale?: string;
  onSearch: (term: string) => void;
};

export function SearchBar({ valeurInitiale = "", onSearch }: SearchBarProps) {
  const [valeur, setValeur] = useState<string>(valeurInitiale);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const terme = valeur.trim();
    if (!terme) return;
    onSearch(terme);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto mt-8">
      <label
        htmlFor="search"
        className="block text-sm font-medium text-slate-200 mb-2"
      >
        Tapez le nom d&apos;un logiciel avec abonnement (Adobe, Notion, etc.)
      </label>
      <div className="flex gap-2">
        <input
          id="search"
          type="text"
          value={valeur}
          onChange={(e) => setValeur(e.target.value)}
          placeholder="Exemple : Adobe, Photoshop, Notion..."
          className="flex-1 rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        />
        <button
          type="submit"
          className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition-colors"
        >
          Rechercher
        </button>
      </div>
    </form>
  );
}
