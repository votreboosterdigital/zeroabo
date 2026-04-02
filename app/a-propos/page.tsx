// app/a-propos/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/Header";

export const metadata: Metadata = {
  title: "À propos — ZéroAbo",
  description: "ZéroAbo recense les meilleures alternatives en achat unique aux logiciels par abonnement. Découvrez notre mission et nos critères de sélection.",
  alternates: { canonical: "https://zeroabo.fr/a-propos" },
  openGraph: {
    title: "À propos — ZéroAbo",
    description: "ZéroAbo recense les meilleures alternatives en achat unique aux logiciels par abonnement.",
    url: "https://zeroabo.fr/a-propos",
    siteName: "ZéroAbo",
    type: "website",
    images: [{ url: "https://zeroabo.fr/opengraph-image", width: 1200, height: 630, alt: "ZéroAbo — À propos" }],
  },
};

export default function APropos() {
  return (
    <div className="min-h-screen bg-[#020817] text-slate-50 flex flex-col">

      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 pt-20 md:pt-[108px] pb-20 w-full">
        {/* Decorative blob */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 overflow-hidden">
          <div className="absolute inset-x-[-40%] top-0 h-[280px] bg-gradient-to-br from-sky-500/12 via-emerald-500/6 to-transparent blur-3xl" />
        </div>

        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400 mb-3">
          Le projet
        </p>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-6">
          À propos de{" "}
          <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            ZéroAbo
          </span>
        </h1>

        <p className="text-base leading-relaxed text-slate-400 mb-4">
          ZéroAbo est un annuaire francophone d&apos;outils en achat unique,
          conçu pour aider particuliers et petites entreprises à réduire leurs
          abonnements logiciels récurrents.
        </p>
        <p className="text-base leading-relaxed text-slate-400 mb-8">
          Chaque outil listé est sélectionné selon un critère simple : il doit
          être disponible en{" "}
          <span className="text-slate-200 font-medium">licence perpétuelle</span>,
          sans frais mensuels obligatoires.
        </p>

        <p className="text-xs text-slate-500 border-t border-white/5 pt-6">
          Certains liens sont affiliés&nbsp;: en passant par eux, vous soutenez
          le projet sans payer plus cher.
        </p>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#020817]">
        <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 <span className="text-sky-400">Zéro</span>Abo — Tous droits réservés.</p>
          <div className="flex gap-5">
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
