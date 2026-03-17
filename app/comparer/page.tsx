// app/comparer/page.tsx
import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/app/components/Header";
import ComparerClient from "./ComparerClient";

export const metadata: Metadata = {
  title: "Comparer deux outils — ZéroAbo",
  description:
    "Compare deux alternatives en achat unique côte à côte : prix, économies, fonctionnalités.",
};

export default function ComparerPage() {
  return (
    <div className="min-h-screen bg-[#020817] text-slate-50 flex flex-col">
      <Header />
      <main id="main-content" className="flex-1 max-w-5xl mx-auto px-4 pt-20 md:pt-[108px] pb-20 w-full">
        <Suspense fallback={
          <div>
            <div className="h-3 w-28 bg-white/5 rounded-full mb-4 animate-pulse" />
            <div className="h-10 w-64 bg-white/5 rounded-xl mb-2 animate-pulse" />
            <div className="h-4 w-80 bg-white/5 rounded-full mb-10 animate-pulse" />
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex-1 h-12 rounded-xl bg-white/5 animate-pulse" />
              <div className="h-12 w-12 rounded-xl bg-white/5 animate-pulse" />
              <div className="flex-1 h-12 rounded-xl bg-white/5 animate-pulse" />
            </div>
            <div className="rounded-xl border border-white/8 bg-[#0d1526] h-64 animate-pulse" />
          </div>
        }>
          <ComparerClient />
        </Suspense>
      </main>
      <footer className="border-t border-white/5 bg-[#020817]">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <p className="text-xs text-slate-500">ZéroAbo — Données non contractuelles.</p>
        </div>
      </footer>
    </div>
  );
}
