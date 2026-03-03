// app/a-propos/page.tsx
import Link from "next/link";

export default function APropos() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-semibold text-emerald-400 hover:text-emerald-300">
              ZéroAbo
            </h1>
          </Link>
          <Link
            href="/"
            className="text-xs text-slate-400 hover:text-emerald-400 transition-colors"
          >
            ← Retour
          </Link>
        </div>
      </header>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">À propos de ZéroAbo</h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          ZéroAbo est un annuaire francophone d&apos;outils en achat unique,
          conçu pour aider particuliers et petites entreprises à réduire leurs
          abonnements logiciels récurrents.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Chaque outil listé est sélectionné selon un critère simple : il doit
          être disponible en licence perpétuelle, sans frais mensuels obligatoires.
        </p>
        <p className="text-xs text-slate-500 mt-8">
          Certains liens sont affiliés&nbsp;: en passant par eux, vous soutenez
          le projet sans payer plus cher.
        </p>
      </section>
    </main>
  );
}
