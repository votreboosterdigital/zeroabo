// app/page.tsx
"use client";

import { useState, useDeferredValue } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Search } from "lucide-react";
import { TOOL_ALTERNATIVES } from "@/app/data/tools";
import ToolLogo from "@/app/components/ToolLogo";
import Header from "@/app/components/Header";
import EmailCapture from "@/app/components/EmailCapture";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const QUICK_FILTERS = ["Adobe", "Office", "PDF", "Antivirus", "Vidéo", "Audio", "Photo", "3D", "Notes", "Email"];

const FAQ_ITEMS = [
  { q: "Qu'est-ce qu'un logiciel en achat unique ?", a: "Un logiciel en achat unique (aussi appelé licence perpétuelle) se paie une seule fois et vous appartient pour toujours. Contrairement aux abonnements, vous continuez à l'utiliser même si vous arrêtez de payer. Les mises à jour majeures futures peuvent être payantes, mais la version achetée reste fonctionnelle indéfiniment." },
  { q: "Peut-on vraiment remplacer Adobe Creative Cloud sans perdre en qualité ?", a: "Pour la majorité des usages, oui. Affinity Photo 2 (désormais gratuit) remplace Photoshop, DaVinci Resolve (gratuit) remplace Premiere Pro, Inkscape remplace Illustrator. Les professionnels ayant des workflows très spécifiques (intégration Adobe, certains plugins) peuvent rencontrer des limitations, mais 80% des créateurs font la transition sans problème." },
  { q: "Les fichiers créés avec les alternatives sont-ils compatibles avec Adobe et Microsoft ?", a: "Majoritairement oui. Affinity Photo lit les .PSD, OnlyOffice et LibreOffice lisent les .docx/.xlsx/.pptx, GIMP lit les .PSD. La compatibilité est suffisante pour les échanges courants. Les macros VBA Excel complexes et les effets de calques avancés Photoshop peuvent nécessiter des ajustements." },
  { q: "Un achat unique inclut-il les mises à jour ?", a: "Cela dépend de l'éditeur. Certains incluent toutes les mises à jour de la version majeure achetée (Sublime Text, Affinity). D'autres proposent une année de mises à jour incluse puis des upgrades payants optionnels. Dans tous les cas, la version achetée reste fonctionnelle sans payer davantage." },
  { q: "Combien peut-on économiser en passant aux alternatives en achat unique ?", a: "En moyenne 200 à 500 € par an pour un créateur indépendant. Sur 3 ans : Photoshop seul coûte ~780 € en abonnement vs Affinity Photo 2 à 0 €. Premiere Pro : ~780 € vs DaVinci Resolve à 0 €. Microsoft 365 : ~100 € vs LibreOffice à 0 €. Un passage complet aux alternatives open source peut économiser 1 000 à 2 000 € sur 3 ans." },
  { q: "Que se passe-t-il si l'éditeur d'un logiciel acheté fait faillite ?", a: "Le logiciel continue de fonctionner — vous avez le fichier d'installation. C'est d'ailleurs l'un des avantages du modèle achat unique : vous n'êtes pas dépendant d'un serveur tiers pour utiliser ce que vous avez payé. Pour les logiciels open source (GIMP, LibreOffice, Blender), la communauté continue le développement indépendamment de tout éditeur commercial." },
  { q: "ZéroAbo est-il rémunéré par les éditeurs de logiciels ?", a: "Certains liens sur ZéroAbo sont des liens affiliés — si vous achetez via notre lien, nous touchons une commission sans que cela change votre prix. Ces liens sont clairement identifiés. Les outils gratuits et open source (GIMP, LibreOffice, DaVinci Resolve) sont listés sans commission car ils méritent d'être connus." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Comment remplacer ses logiciels par abonnement par des alternatives en achat unique",
  description: "Guide étape par étape pour identifier vos abonnements logiciels coûteux et les remplacer par des alternatives pérennes.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Lister vos abonnements actuels", text: "Utilisez notre calculateur pour identifier tous vos abonnements logiciels et calculer leur coût réel sur 3 ans." },
    { "@type": "HowToStep", position: 2, name: "Trouver l'alternative correspondante", text: "Recherchez l'alternative en achat unique à votre logiciel actuel dans notre catalogue de plus de 40 outils testés." },
    { "@type": "HowToStep", position: 3, name: "Tester avant de migrer", text: "Téléchargez et testez l'alternative pendant 1 à 2 semaines en parallèle de votre logiciel actuel pour valider qu'elle couvre vos besoins." },
    { "@type": "HowToStep", position: 4, name: "Résilier l'abonnement", text: "Une fois l'alternative validée, résiliez l'abonnement avant le prochain renouvellement automatique." },
  ],
};

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"savings" | "az">("savings");
  const deferredQuery = useDeferredValue(searchQuery);

  const filteredTools = TOOL_ALTERNATIVES.filter((tool) => {
    if (!deferredQuery) return true;
    const q = deferredQuery.toLowerCase();
    return (
      tool.nom.toLowerCase().includes(q) ||
      tool.originalApp.toLowerCase().includes(q) ||
      tool.motsCles.some((mot) => mot.toLowerCase().includes(q))
    );
  });

  const sorted = [...filteredTools].sort((a, b) => {
    if (sortBy === "az") return a.nom.localeCompare(b.nom, "fr");
    return b.savings - a.savings;
  });

  return (
    <div className="min-h-screen bg-[#020817] text-slate-50 flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <Header />

      {/* Hero */}
      <section id="main-content" className="relative max-w-5xl mx-auto px-4 pt-28 md:pt-[108px] pb-16 text-center w-full">
        {/* Gradient blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-x-[-40%] top-[-10%] h-[360px] bg-gradient-to-br from-sky-500/20 via-emerald-500/10 to-transparent blur-3xl" />
          <div className="absolute bottom-[-10%] right-[-10%] h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        </div>

        <motion.div
          variants={fadeUp}
          initial={prefersReducedMotion ? undefined : "hidden"}
          animate={prefersReducedMotion ? undefined : "visible"}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/20 mb-6">
            {TOOL_ALTERNATIVES.length} alternatives en achat unique
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial={prefersReducedMotion ? undefined : "hidden"}
          animate={prefersReducedMotion ? undefined : "visible"}
          className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-5 leading-tight"
        >
          Arrêtez de payer{" "}
          <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            chaque mois
          </span>
          <br />
          pour vos logiciels.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial={prefersReducedMotion ? undefined : "hidden"}
          animate={prefersReducedMotion ? undefined : "visible"}
          className="text-lg leading-relaxed text-slate-400 max-w-xl mx-auto mb-10"
        >
          ZéroAbo recense les meilleures alternatives en{" "}
          <span className="text-slate-200 font-medium">achat unique</span> aux
          logiciels par abonnement. Payez une fois, utilisez pour toujours.
        </motion.p>

        {/* Search bar */}
        <motion.div
          variants={fadeUp}
          initial={prefersReducedMotion ? undefined : "hidden"}
          animate={prefersReducedMotion ? undefined : "visible"}
          className="relative max-w-xl mx-auto"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
          <input
            type="text"
            placeholder="Recherchez un logiciel (ex : Photoshop, Notion, antivirus…)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-[#0d1526] pl-11 pr-4 py-3.5 text-sm text-slate-50 placeholder:text-slate-500 focus:border-sky-500/50 focus:outline-none focus:ring-1 focus:ring-sky-500/30 transition"
          />
        </motion.div>

        {/* Quick filters + sort */}
        <motion.div
          variants={fadeUp}
          initial={prefersReducedMotion ? undefined : "hidden"}
          animate={prefersReducedMotion ? undefined : "visible"}
          className="flex flex-wrap justify-center gap-2 mt-4"
        >
          {!searchQuery && QUICK_FILTERS.map((s) => (
            <button
              key={s}
              onClick={() => setSearchQuery(s)}
              className="inline-flex items-center gap-1.5 rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/30 hover:bg-sky-400/20 transition-colors"
            >
              {s}
            </button>
          ))}
          <button
            onClick={() => setSortBy("savings")}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 transition-colors ${sortBy === "savings" ? "bg-emerald-500/20 text-emerald-300 ring-emerald-500/40" : "bg-white/5 text-slate-400 ring-white/10 hover:bg-white/10"}`}
          >
            Économies ↓
          </button>
          <button
            onClick={() => setSortBy("az")}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 transition-colors ${sortBy === "az" ? "bg-emerald-500/20 text-emerald-300 ring-emerald-500/40" : "bg-white/5 text-slate-400 ring-white/10 hover:bg-white/10"}`}
          >
            Nom A–Z
          </button>
        </motion.div>
      </section>

      {/* Results */}
      <section className="max-w-5xl mx-auto px-4 pb-20 w-full flex-1">
        {searchQuery && (
          <p className="text-xs text-slate-500 mb-5">
            {sorted.length} résultat{sorted.length !== 1 ? "s" : ""} pour &quot;{searchQuery}&quot;
          </p>
        )}

        {sorted.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-400 text-sm mb-3">Aucune alternative trouvée.</p>
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs text-sky-400 hover:underline"
            >
              Voir tous les outils
            </button>
          </div>
        ) : (
          <motion.div
            className="grid gap-4 md:grid-cols-2"
            variants={container}
            initial={prefersReducedMotion ? undefined : "hidden"}
            whileInView={prefersReducedMotion ? undefined : "visible"}
            viewport={{ once: true, margin: "-40px" }}
          >
            {sorted.map((tool) => (
              <motion.div
                key={tool.id}
                variants={fadeUp}
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
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 pb-16 w-full">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400 mb-4">Questions fréquentes</p>
        <h2 className="text-2xl font-black text-slate-50 mb-8">Tout ce que vous voulez savoir sur les logiciels sans abonnement</h2>
        <div className="flex flex-col divide-y divide-white/8">
          {FAQ_ITEMS.map((item, i) => (
            <details key={i} className="group py-4">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-sm font-semibold text-slate-200 hover:text-white transition-colors">
                {item.q}
                <span className="shrink-0 text-slate-500 group-open:rotate-45 transition-transform duration-200 text-lg leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Email capture */}
      <section className="max-w-5xl mx-auto px-4 pb-16 w-full">
        <EmailCapture />
      </section>

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
