import { Suspense } from 'react';
import type { Metadata } from 'next';
import Header from '@/app/components/Header';
import CalculateurClient from './CalculateurClient';

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ savings?: string }>;
}): Promise<Metadata> {
  const sp = await searchParams;
  const savings = Number(sp.savings);
  return {
    title: savings > 0
      ? `Tu pourrais économiser ${savings} € — ZéroAbo`
      : "Calculateur d'économies — ZéroAbo",
    description: "Sélectionne tes abonnements logiciels et découvre combien tu pourrais économiser en passant à des alternatives en achat unique.",
  };
}

export default function CalculateurPage() {
  return (
    <main className="min-h-screen bg-[#020817]">
      <Header />
      <Suspense fallback={
        <div className="pt-[108px] text-center text-slate-400 py-20">Chargement...</div>
      }>
        <CalculateurClient />
      </Suspense>
    </main>
  );
}
