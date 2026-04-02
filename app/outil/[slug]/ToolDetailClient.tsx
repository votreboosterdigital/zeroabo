// app/outil/[slug]/ToolDetailClient.tsx
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle, ArrowLeft, Banknote, XCircle } from "lucide-react";
import type { ToolAlternative } from "@/app/data/tools";
import type { BlogPost } from "@/app/data/blog";
import ToolLogoWrapper from "@/app/components/ToolLogoWrapper";
import Header from "@/app/components/Header";
import Breadcrumb from "@/app/components/Breadcrumb";
import { fadeUpVariants as fadeUp, containerVariants as container } from "@/app/constants/animations";

export default function ToolDetailClient({ outil, related = [], relatedArticles = [] }: { outil: ToolAlternative; related?: ToolAlternative[]; relatedArticles?: BlogPost[] }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen flex flex-col bg-[#020817] text-slate-50">

      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 pt-20 md:pt-[108px] pb-20 w-full">

        <Breadcrumb items={[
          { label: "Accueil", href: "/" },
          { label: "Outils", href: "/outils" },
          { label: outil.nom },
        ]} />

        {/* Hero avec gradient blobs */}
        <div className="relative mb-10">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-x-[-60%] top-[-80%] h-[300px] bg-gradient-to-br from-sky-500/15 via-emerald-500/8 to-transparent blur-3xl" />
          </div>

          <motion.div
            variants={fadeUp}
            initial={prefersReducedMotion ? undefined : "hidden"}
            animate={prefersReducedMotion ? undefined : "visible"}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400 mb-3">
              Alternative en achat unique
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial={prefersReducedMotion ? undefined : "hidden"}
            animate={prefersReducedMotion ? undefined : "visible"}
            className="flex items-center gap-4 mb-4"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 ring-1 ring-white/10">
              <ToolLogoWrapper domain={outil.logoDomain} nom={outil.nom} size={40} />
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-50">
                  {outil.nom}
                </h1>
                <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${
                  outil.pricingModel === "subscription"
                    ? "bg-amber-500/10 text-amber-300 ring-amber-500/30"
                    : outil.pricingModel === "open-source" || outil.pricingModel === "freemium"
                    ? "bg-sky-500/10 text-sky-300 ring-sky-500/30"
                    : "bg-emerald-500/10 text-emerald-300 ring-emerald-500/30"
                }`}>
                  {outil.pricingModel === "subscription"
                    ? "Abonnement long terme"
                    : outil.pricingModel === "open-source"
                    ? "Gratuit / Open source"
                    : outil.pricingModel === "freemium"
                    ? "Freemium"
                    : "Achat unique"}
                </span>
              </div>
              <p className="text-sm text-slate-400 mt-1">
                Remplace{" "}
                <span className="text-slate-200 font-medium">{outil.originalApp}</span>
              </p>
            </div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial={prefersReducedMotion ? undefined : "hidden"}
            animate={prefersReducedMotion ? undefined : "visible"}
            className="text-base leading-relaxed text-slate-400"
          >
            {outil.longDescription}
          </motion.p>
        </div>

        {/* Fonctionnalités */}
        <motion.div
          className="mb-8"
          variants={container}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400 mb-4">
            Fonctionnalités clés
          </p>
          <ul className="space-y-3">
            {outil.features.map((feature: string, index: number) => (
              <motion.li
                key={index}
                variants={fadeUp}
                className="flex items-start gap-3 text-sm text-slate-200"
              >
                <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Pros / Cons */}
        {(outil.pros?.length || outil.cons?.length) && (
          <motion.div
            className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={container}
            initial={prefersReducedMotion ? undefined : "hidden"}
            whileInView={prefersReducedMotion ? undefined : "visible"}
            viewport={{ once: true, margin: "-60px" }}
          >
            {outil.pros?.length ? (
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400 mb-3">
                  Avantages
                </p>
                <ul className="space-y-2">
                  {outil.pros.map((pro, i) => (
                    <motion.li key={i} variants={fadeUp} className="flex items-start gap-2 text-sm text-slate-200">
                      <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                      {pro}
                    </motion.li>
                  ))}
                </ul>
              </div>
            ) : null}
            {outil.cons?.length ? (
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-3">
                  Inconvénients
                </p>
                <ul className="space-y-2">
                  {outil.cons.map((con, i) => (
                    <motion.li key={i} variants={fadeUp} className="flex items-start gap-2 text-sm text-slate-300">
                      <XCircle className="h-4 w-4 shrink-0 text-red-400 mt-0.5" />
                      {con}
                    </motion.li>
                  ))}
                </ul>
              </div>
            ) : null}
          </motion.div>
        )}

        {/* Bloc économies */}
        {outil.savings > 0 && (
          <motion.div
            variants={fadeUp}
            initial={prefersReducedMotion ? undefined : "hidden"}
            whileInView={prefersReducedMotion ? undefined : "visible"}
            viewport={{ once: true }}
            className="mb-6 rounded-xl border border-emerald-500/20 bg-emerald-500/8 px-5 py-4 flex items-center gap-4 ring-1 ring-emerald-500/10"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15">
              <Banknote className="h-5 w-5 text-emerald-400" />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              En payant une seule fois, vous économisez environ{" "}
              <span className="font-bold text-emerald-400">~{outil.savings} €</span>{" "}
              sur 3 ans par rapport à un abonnement.
            </p>
          </motion.div>
        )}

        {/* Prix + CTA */}
        <motion.div
          variants={fadeUp}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
          className="rounded-xl border border-white/8 bg-[#0d1526] p-6 ring-1 ring-white/5"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-1">
            Paiement unique
          </p>
          <p className="text-2xl font-black text-slate-50 mb-6">{outil.prix}</p>
          <a
            href={outil.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all hover:bg-emerald-400 hover:shadow-[0_0_50px_rgba(16,185,129,0.5)]"
          >
            Voir l&apos;alternative →
          </a>
          <p className="mt-4 text-xs text-slate-500">
            Lien affilié — vous soutenez ZéroAbo sans payer plus cher.
          </p>
        </motion.div>
      </main>

      {/* Articles liés */}
      {relatedArticles.length > 0 && (
        <div className="max-w-3xl mx-auto px-4 pb-10 w-full">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-4">
            À lire aussi
          </p>
          <div className="flex flex-col gap-3">
            {relatedArticles.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="group rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:border-white/20 transition-colors"
              >
                <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                  {a.titre}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">{a.tempsLecture} min de lecture</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Outils similaires */}
      {related.length > 0 && (
        <div className="max-w-3xl mx-auto px-4 pb-10 w-full">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-4">
            Voir aussi
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/outil/${r.slug}`}
                className="group rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:border-white/20 transition-colors"
              >
                <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                  {r.nom}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">Remplace {r.originalApp}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#020817]">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <p className="text-xs text-slate-500">
            ZéroAbo — Données non contractuelles.
          </p>
        </div>
      </footer>
    </div>
  );
}
