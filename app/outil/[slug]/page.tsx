// app/outil/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { TOOL_ALTERNATIVES } from "@/app/data/tools";
import ToolLogoWrapper from "@/app/components/ToolLogoWrapper";

type ToolItem = (typeof TOOL_ALTERNATIVES)[number];
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const outil = TOOL_ALTERNATIVES.find((t: ToolItem) => t.slug === slug);
  if (!outil) return {};
  return {
    title: `${outil.nom} — Alternative à ${outil.originalApp} | ZéroAbo`,
    description: outil.longDescription,
  };
}

export async function generateStaticParams() {
  return TOOL_ALTERNATIVES.map((t: ToolItem) => ({ slug: t.slug }));
}

export default async function PageOutil({ params }: Props) {
  const { slug } = await params;
  const outil = TOOL_ALTERNATIVES.find((t: ToolItem) => t.slug === slug);
  if (!outil) return notFound();

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <span className="text-xl font-bold text-emerald-400 tracking-tight hover:text-emerald-300 transition-colors">
              Zéro<span className="text-slate-50">Abo</span>
            </span>
          </Link>
          <Link
            href="/"
            className="text-xs text-slate-400 hover:text-emerald-400 transition-colors"
          >
            ← Retour
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto px-4 pt-10 pb-16 w-full">

        {/* Logo + titre */}
        <div className="flex items-center gap-4 mb-4">
          <ToolLogoWrapper domain={outil.logoDomain} nom={outil.nom} size={56} />
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-3xl font-bold text-slate-50">{outil.nom}</h1>
              <span className="rounded-full bg-emerald-500/20 border border-emerald-500 px-3 py-1 text-xs font-semibold text-emerald-400">
                Achat unique
              </span>
            </div>
            <p className="text-sm text-slate-400 mt-1">
              Alternative à{" "}
              <span className="text-slate-200 font-medium">
                {outil.originalApp}
              </span>
            </p>
          </div>
        </div>

        {/* Bloc économies */}
        {outil.savings > 0 && (
          <div className="mb-6 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 flex items-center gap-3">
            <span className="text-2xl">💸</span>
            <p className="text-sm text-emerald-300">
              En payant une seule fois, vous économisez environ{" "}
              <span className="font-bold text-emerald-400">
                {outil.savings} €
              </span>{" "}
              sur 3 ans par rapport à un abonnement.
            </p>
          </div>
        )}

        <p className="text-slate-200 leading-relaxed mb-8">
          {outil.longDescription}
        </p>

        {/* Fonctionnalités */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-slate-50 mb-3">
            Fonctionnalités clés
          </h2>
          <ul className="space-y-2">
            {outil.features.map((feature: string, index: number) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-slate-200"
              >
                <span className="text-emerald-400 mt-0.5">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Prix + CTA */}
        <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
          <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
            Paiement unique
          </p>
          <p className="text-2xl font-bold text-slate-50 mb-5">{outil.prix}</p>
          <a
            href={outil.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-base font-semibold text-slate-950 hover:bg-emerald-400 transition-colors"
          >
            Voir l&apos;alternative →
          </a>
          <p className="mt-4 text-xs text-slate-500">
            Lien affilié — vous soutenez ZéroAbo sans payer plus cher.
          </p>
        </div>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <p className="text-xs text-slate-500">
            ZéroAbo — Données non contractuelles.
          </p>
        </div>
      </footer>
    </div>
  );
}
