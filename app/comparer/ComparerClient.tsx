// app/comparer/ComparerClient.tsx
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { TOOL_ALTERNATIVES } from "@/app/data/tools";
import type { ToolAlternative } from "@/app/data/tools";

export default function ComparerClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const slugA = searchParams.get("a") ?? "";
  const slugB = searchParams.get("b") ?? "";

  const outils = TOOL_ALTERNATIVES;
  const outilA = outils.find((t) => t.slug === slugA) ?? null;
  const outilB = outils.find((t) => t.slug === slugB) ?? null;

  function setSlug(key: "a" | "b", value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    router.replace(`/comparer?${params.toString()}`);
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400 mb-3">
          Comparaison
        </p>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-50 mb-2">
          Comparer deux outils
        </h1>
        <p className="text-sm text-slate-400">
          Sélectionne deux alternatives pour voir leurs différences.
        </p>
      </div>

      {/* Selects */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
        <select
          value={slugA}
          onChange={(e) => setSlug("a", e.target.value)}
          className="flex-1 w-full rounded-xl border border-white/10 bg-[#0d1526] px-4 py-3 text-sm text-slate-50 focus:border-sky-500/50 focus:outline-none focus:ring-1 focus:ring-sky-500/30 transition"
        >
          <option value="">— Outil A —</option>
          {outils.map((t) => (
            <option key={t.slug} value={t.slug} disabled={t.slug === slugB}>
              {t.nom} (remplace {t.originalApp})
            </option>
          ))}
        </select>

        <span className="shrink-0 text-xs font-bold text-slate-500 uppercase tracking-widest">
          VS
        </span>

        <select
          value={slugB}
          onChange={(e) => setSlug("b", e.target.value)}
          className="flex-1 w-full rounded-xl border border-white/10 bg-[#0d1526] px-4 py-3 text-sm text-slate-50 focus:border-sky-500/50 focus:outline-none focus:ring-1 focus:ring-sky-500/30 transition"
        >
          <option value="">— Outil B —</option>
          {outils.map((t) => (
            <option key={t.slug} value={t.slug} disabled={t.slug === slugA}>
              {t.nom} (remplace {t.originalApp})
            </option>
          ))}
        </select>
      </div>

      {/* Comparison table */}
      {outilA && outilB ? (
        <CompareTable a={outilA} b={outilB} />
      ) : (
        <div className="rounded-xl border border-white/8 bg-[#0d1526] px-6 py-16 text-center ring-1 ring-white/5">
          <p className="text-slate-400 text-sm">
            Sélectionne deux outils ci-dessus pour lancer la comparaison.
          </p>
        </div>
      )}
    </div>
  );
}

function CompareTable({ a, b }: { a: ToolAlternative; b: ToolAlternative }) {
  const maxFeatures = Math.max(a.features.length, b.features.length);

  return (
    <div className="rounded-xl border border-white/8 bg-[#0d1526] ring-1 ring-white/5 overflow-hidden">
      {/* Column headers */}
      <div className="grid grid-cols-3 border-b border-white/8">
        <div className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Critère
        </div>
        <div className="px-5 py-4 border-l border-white/8">
          <p className="text-sm font-bold text-slate-50">{a.nom}</p>
          <p className="text-xs text-slate-500 mt-0.5">Remplace {a.originalApp}</p>
        </div>
        <div className="px-5 py-4 border-l border-white/8">
          <p className="text-sm font-bold text-slate-50">{b.nom}</p>
          <p className="text-xs text-slate-500 mt-0.5">Remplace {b.originalApp}</p>
        </div>
      </div>

      {/* Prix */}
      <Row label="Prix">
        <Cell highlight={a.savings >= b.savings}>{a.prix}</Cell>
        <Cell highlight={b.savings >= a.savings}>{b.prix}</Cell>
      </Row>

      {/* Économies */}
      <Row label="Économies 3 ans">
        <Cell highlight={a.savings > b.savings}>~{a.savings} €</Cell>
        <Cell highlight={b.savings > a.savings}>~{b.savings} €</Cell>
      </Row>

      {/* Features */}
      {Array.from({ length: maxFeatures }).map((_, i) => (
        <Row key={i} label={i === 0 ? "Fonctionnalités" : ""}>
          <Cell>{a.features[i] ? <FeatureItem text={a.features[i]} /> : <span className="text-slate-600">—</span>}</Cell>
          <Cell>{b.features[i] ? <FeatureItem text={b.features[i]} /> : <span className="text-slate-600">—</span>}</Cell>
        </Row>
      ))}

      {/* Lien */}
      <Row label="Lien">
        <Cell>
          <a
            href={a.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors text-xs font-semibold"
          >
            Voir {a.nom} →
          </a>
        </Cell>
        <Cell>
          <a
            href={b.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors text-xs font-semibold"
          >
            Voir {b.nom} →
          </a>
        </Cell>
      </Row>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-3 border-b border-white/5 last:border-0">
      <div className="px-5 py-3.5 text-xs text-slate-500 flex items-start pt-4">{label}</div>
      {children}
    </div>
  );
}

function Cell({ children, highlight }: { children: React.ReactNode; highlight?: boolean }) {
  return (
    <div className={`px-5 py-3.5 border-l border-white/5 text-sm ${highlight ? "text-emerald-400 font-semibold" : "text-slate-300"}`}>
      {children}
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <span className="flex items-start gap-2">
      <CheckCircle className="h-3.5 w-3.5 shrink-0 text-emerald-400 mt-0.5" />
      <span className="text-slate-300 text-xs leading-relaxed">{text}</span>
    </span>
  );
}
