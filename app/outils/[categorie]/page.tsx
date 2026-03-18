// app/outils/[categorie]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES } from "@/app/data/categories";
import { TOOL_ALTERNATIVES } from "@/app/data/tools";
import Header from "@/app/components/Header";
import Breadcrumb from "@/app/components/Breadcrumb";
import ToolLogo from "@/app/components/ToolLogo";

type Props = { params: Promise<{ categorie: string }> };

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ categorie: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorie } = await params;
  const cat = CATEGORIES.find((c) => c.slug === categorie);
  if (!cat) return {};

  return {
    title: `Logiciels ${cat.nom} sans abonnement | ZéroAbo`,
    description: cat.description,
    alternates: {
      canonical: `https://zeroabo.fr/outils/${cat.slug}`,
    },
    openGraph: {
      title: `Logiciels ${cat.nom} sans abonnement | ZéroAbo`,
      description: cat.description,
      url: `https://zeroabo.fr/outils/${cat.slug}`,
      siteName: "ZéroAbo",
      type: "website",
    },
  };
}

export default async function CategoriePage({ params }: Props) {
  const { categorie } = await params;
  const cat = CATEGORIES.find((c) => c.slug === categorie);
  if (!cat) notFound();

  const tools = TOOL_ALTERNATIVES.filter((t) => t.categorie === cat.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://zeroabo.fr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: cat.nom,
        item: `https://zeroabo.fr/outils/${cat.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#020817] text-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="max-w-5xl mx-auto px-4 pt-20 md:pt-[108px] pb-20">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: cat.nom },
          ]}
        />

        <p className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-2">
          {cat.emoji} {cat.nom}
        </p>
        <h1 className="text-3xl font-black mb-3">
          Logiciels {cat.nom.toLowerCase()} sans abonnement
        </h1>
        <p className="text-slate-400 mb-10 max-w-2xl leading-relaxed">
          {cat.description}
        </p>

        {tools.length === 0 ? (
          <p className="text-slate-500 text-sm">Aucun outil dans cette catégorie pour le moment.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="group flex flex-col justify-between rounded-xl border border-white/8 bg-[#0d1526] p-5 ring-1 ring-white/5 hover:ring-sky-500/20 transition-all"
              >
                <div>
                  {/* Logo + Nom + badge */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-500/10">
                      <ToolLogo domain={tool.logoDomain} nom={tool.nom} size={28} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className="text-base font-semibold text-slate-50 group-hover:text-sky-400 transition-colors truncate">
                          {tool.nom}
                        </h2>
                        <span className="shrink-0 inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-300 ring-1 ring-emerald-500/30">
                          Achat unique
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Remplace{" "}
                        <span className="text-slate-300">{tool.originalApp}</span>
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {tool.description}
                  </p>
                </div>

                {/* Prix + économies + CTA */}
                <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/5">
                  <div>
                    <p className="text-sm font-bold text-emerald-400">{tool.prix}</p>
                    {tool.savings > 0 && (
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        ~{tool.savings} € économisés sur 3 ans
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/outil/${tool.slug}`}
                      className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur-sm transition-colors hover:border-sky-500/40 hover:text-sky-300"
                    >
                      Voir l&apos;outil →
                    </Link>
                    <Link
                      href={`/comparer?a=${tool.slug}`}
                      className="text-xs text-slate-500 hover:text-sky-400 transition-colors"
                    >
                      Comparer →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
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
            <Link href="/politique-de-confidentialite" className="hover:text-slate-300 transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
