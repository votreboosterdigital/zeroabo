import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { TOOL_ALTERNATIVES } from "@/app/data/tools";

type ToolItem = (typeof TOOL_ALTERNATIVES)[number];

type Props = {
  params: Promise<{ slug: string }>;
};

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
    <main className="min-h-screen flex flex-col">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-semibold text-emerald-400 hover:text-emerald-300 cursor-pointer">
              ZéroAbo
            </h1>
          </Link>
          <Link href="/" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
            ← Retour
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto px-4 pt-10 pb-16 w-full">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h2 className="text-3xl font-bold text-slate-50">{outil.nom}</h2>
          <span className="rounded-full bg-emerald-500/20 border border-emerald-500 px-3 py-1 text-xs font-semibold text-emerald-400">
            Achat unique
          </span>
        </div>
        <p className="text-sm text-slate-400 mb-6">
          Alternative à <span className="text-slate-200 font-medium">{outil.originalApp}</span>
        </p>
        <p className="text-slate-200 leading-relaxed mb-8">{outil.longDescription}</p>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-slate-50 mb-3">Fonctionnalités clés</h3>
          <ul className="space-y-2">
            {outil.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-start gap-2 text-sm text-slate-200">
                <span className="text-emerald-400 mt-0.5">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={outil.affiliateUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-6 py-3 text-base font-semibold text-slate-950 hover:bg-emerald-400 transition-colors"
        >
          Voir l&apos;alternative →
        </a>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950/80">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <p className="text-xs text-slate-500">ZéroAbo — Données non contractuelles.</p>
        </div>
      </footer>
    </main>
  );
}
