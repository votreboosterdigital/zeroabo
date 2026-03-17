// app/page.tsx
"use client";

import { useState, useDeferredValue } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Search } from "lucide-react";
import { TOOL_ALTERNATIVES } from "@/app/data/tools";
import ToolLogo from "@/app/components/ToolLogo";
import Header from "@/app/components/Header";

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
