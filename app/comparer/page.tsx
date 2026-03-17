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
        <Suspense>
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
