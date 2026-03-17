"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SUBSCRIPTIONS } from "@/app/data/subscriptions";
import type { Subscription } from "@/app/data/subscriptions";

function getEquivalence(montant: number): string {
  if (montant <= 0) return '';
  if (montant < 150) return "c'est plusieurs sorties resto ou livraisons qui ne te coûtent plus rien 🍽️";
  if (montant < 300) return "c'est un vrai week‑end pour souffler à deux ou en solo 🧳";
  if (montant < 600) return "c'est une semaine de vacances simples mais complètes ☀️";
  if (montant < 1200) return "c'est de quoi remplacer un gros électroménager sans stress 🧺";
  if (montant < 2500) return "c'est un bon PC ou téléphone payé cash, sans crédit 💻📱";
  return "c'est un vrai matelas de sécurité pour les imprévus 🛟";
}

export default function CalculateurClient() {
  const searchParams = useSearchParams();
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const apps = searchParams.get('apps');
    if (apps) {
      const ids = apps.split(',').filter((id) => id.trim());
      setSelectedIds(new Set(ids));
    }
  }, [searchParams]);

  const { totalAnnuel, totalEconomie, equivalence } = useMemo(() => {
    const selected = SUBSCRIPTIONS.filter((s: Subscription) => selectedIds.has(s.id));
    const totalAnnuel = selected.reduce((acc, s) => acc + s.prixAnnuel, 0);
    const totalEconomie = selected.reduce((acc, s) => acc + s.economie3ans, 0);
    return { totalAnnuel, totalEconomie, equivalence: getEquivalence(totalEconomie) };
  }, [selectedIds]);

  function toggle(id: string) {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function getShareUrl() {
    const ids = [...selectedIds].join(',');
    return `${window.location.origin}/calculateur?savings=${totalEconomie}&apps=${encodeURIComponent(ids)}`;
  }

  function getShareText() {
    return `J'économise ${totalEconomie} € en 3 ans en arrêtant mes abonnements logiciels — toi aussi tu veux savoir combien ? 👇`;
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(getShareUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback silencieux si API Clipboard indisponible
    }
  }

  const hasSelection = selectedIds.size > 0;

  return (
    <section className="max-w-5xl mx-auto px-4 pt-20 md:pt-[108px] pb-20">
      {/* Titre */}
      <div className="text-center mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400 mb-3">
          Calculateur
        </p>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-50 mb-3">
          Combien peux-tu économiser ?
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto">
          Coche les abonnements logiciels que tu paies actuellement et découvre ce que tu pourrais récupérer en 3 ans.
        </p>
      </div>

      {/* Grille d'abonnements */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-10">
        {SUBSCRIPTIONS.map((sub) => {
          const isSelected = selectedIds.has(sub.id);
          return (
            <button
              key={sub.id}
              onClick={() => toggle(sub.id)}
              className={`text-left rounded-xl border px-4 py-3 transition-all ${
                isSelected
                  ? 'border-emerald-500 bg-emerald-500/10 text-slate-50'
                  : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-slate-50'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-sm">{sub.nom}</span>
                <span className={`text-xs font-bold ${isSelected ? 'text-emerald-400' : 'text-slate-500'}`}>
                  {isSelected ? '✓' : '+'}
                </span>
              </div>
              <div className="text-xs text-slate-400">
                {sub.prixAnnuel} €/an · économise {sub.economie3ans} € sur 3 ans
              </div>
            </button>
          );
        })}
      </div>

      {/* Panneau résultat */}
      {hasSelection && (
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 md:p-8">
          <p className="text-slate-300 mb-1">
            Vous dépensez <span className="font-semibold text-slate-100">{totalAnnuel} €/an</span> en abonnements
          </p>
          <p className="text-3xl font-black text-emerald-400 mb-2">
            Vous pourriez économiser {totalEconomie} € sur 3 ans
          </p>
          {equivalence && (
            <p className="text-slate-400 italic mb-6">{equivalence}</p>
          )}

          <Link
            href="/"
            className="inline-block text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-400 px-5 py-2.5 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all mb-6"
          >
            Voir les alternatives →
          </Link>

          {/* Boutons de partage */}
          <div className="border-t border-white/10 pt-5">
            <p className="text-xs text-slate-500 mb-3 uppercase tracking-widest">Partager</p>
            <div className="flex flex-wrap gap-2">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(getShareText())}&url=${encodeURIComponent(getShareUrl())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 hover:border-white/20 hover:text-white transition-colors"
              >
                𝕏
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getShareUrl())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 hover:border-white/20 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(getShareText() + ' ' + getShareUrl())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 hover:border-white/20 hover:text-white transition-colors"
              >
                WhatsApp
              </a>
              <button
                onClick={copyLink}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 hover:border-white/20 hover:text-white transition-colors"
              >
                {copied ? '✓ Copié !' : 'Copier le lien'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
