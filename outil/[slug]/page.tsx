import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TOOL_ALTERNATIVES } from "@/app/data/tools";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const outil = TOOL_ALTERNATIVES.find((t) => t.slug === params.slug);
  if (!outil) return {};

  return {
    title: `${outil.nom} — Alternative sans abonnement à ${outil.originalApp} | ZéroAbo`,
    description: outil.longDescription,
    openGraph: {
      title: `${outil.nom} — Alternative à ${outil.originalApp}`,
      description: outil.longDescription,
      url: `https://zeroabo.fr/outil/${outil.slug}`,
      siteName: "ZéroAbo",
      locale: "fr_FR",
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return TOOL_ALTERNATIVES.map((t) => ({ slug: t.slug }));
}

export default function PageOutil({ params }: Props) {
  const outil = TOOL_ALTERNATIVES.find((t) => t.slug === params.slug);

  if (!outil) return notFound();

  return (
    <main className="min-h-screen flex flex-col">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <Link href="/">
              <h1 className="text-2xl font-semibold tracking-tight text-emerald-400 hover:text-emerald-300 cursor-pointer">
                ZéroAbo
              </h1>
            </Link>
            <p className="text-sm text-slate-300">
              Trouvez une alternative sans abonnement à vos logiciels préférés.
            </p>
          </div>
          <Link
            href="/"
            className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
          >
            ← Retour à la recherche
          </Link>
        </div>
      </header>

      <div className="flex-1">
        <section className="max-w-3xl mx-auto px-4 pt-10 pb-16">

          {/* Titre + badge */}
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h2 className="text-3xl font-bold text-slate-50">{outil.nom}</h2>
            <span className="rounded-full bg-emerald-500/20 border border-emerald-500 px-3 py-1 text-xs font-semibold text-emerald-400">
              Achat unique
            </span>
          </div>

          <p className="text-sm text-slate-400 mb-6">
            Alternative à{" "}
            <span className="text-slate-200 font-medium">{outil.originalApp}</span>
          </p>

          {/* Prix + économie */}
          <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-5 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-xs text-slate-400 mb-1">Prix achat unique</p>
              <p className="text-2xl font-bold text-emerald-400">{outil.prix}</p>
            </div>
            <div className="rounded-md bg-emerald-500/10 border border-emerald-500/30 px-4 py-3 text-center">
              <p className="text-xs text-slate-400 mb-1">Économie estimée</p>
              <p className="text-lg font-bold text-emerald-300">
                ~{outil.savings} €/an
              </p>
              <p className="text-xs text-slate-500">
                vs abonnement {outil.originalApp}
              </p>
            </div>
          </div>

          {/* Description longue */}
          <p className="text-slate-200 leading-relaxed mb-8">
            {outil.longDescription}
          </p>

          {/* Fonctionnalités */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-slate-50 mb-3">
              Fonctionnalités clés
            </h3>
            <ul className="space-y-2">
              {outil.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-slate-200">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Bouton CTA */}
          <a
            href={outil.affiliateUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-6 py-3 text-base font-semibold text-slate-950 hover:bg-emerald-400 transition-colors mb-10"
          >
            Voir l&apos;alternative →
          </a>

          {/* Pourquoi quitter l'abonnement */}
          <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-lg font-semibold text-slate-50 mb-3">
              Pourquoi quitter {outil.originalApp}&nbsp;?
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-slate-200">
                <span className="text-red-400 mt-0.5">✗</span>
                Abonnement mensuel ou annuel obligatoire, même si tu l&apos;utilises peu.
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-200">
                <span className="text-red-400 mt-0.5">✗</span>
                Prix en constante augmentation d&apos;année en année.
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-200">
                <span className="text-red-400 mt-0.5">✗</span>
                Tu perds l&apos;accès à tous tes fichiers si tu arrêtes de payer.
              </li>
            </ul>
          </div>

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
