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
    openGraph: {
      title: savings > 0
        ? `Tu pourrais économiser ${savings} € — ZéroAbo`
        : "Calculateur d'économies logicielles — ZéroAbo",
      description: "Sélectionne tes abonnements logiciels et découvre combien tu pourrais économiser en passant à des alternatives en achat unique.",
      url: "https://zeroabo.fr/calculateur",
      siteName: "ZéroAbo",
      type: "website",
      images: [{ url: "https://zeroabo.fr/opengraph-image", width: 1200, height: 630, alt: "ZéroAbo — Calculateur d'économies" }],
    },
    twitter: {
      card: "summary_large_image",
      title: savings > 0
        ? `Tu pourrais économiser ${savings} € — ZéroAbo`
        : "Calculateur d'économies — ZéroAbo",
      description: "Sélectionne tes abonnements logiciels et découvre combien tu pourrais économiser.",
      images: ["https://zeroabo.fr/opengraph-image"],
    },
    alternates: { canonical: "https://zeroabo.fr/calculateur" },
  };
}

export default function CalculateurPage() {
  return (
    <main className="min-h-screen bg-[#020817]">
      <Header />
      <Suspense fallback={
        <div className="max-w-5xl mx-auto px-4 pt-20 md:pt-[108px] pb-20">
          <div className="text-center mb-10">
            <div className="h-3 w-24 bg-white/5 rounded-full mx-auto mb-4 animate-pulse" />
            <div className="h-10 w-80 bg-white/5 rounded-xl mx-auto mb-3 animate-pulse" />
            <div className="h-4 w-96 bg-white/5 rounded-full mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="rounded-xl border border-white/5 bg-white/5 px-4 py-3 h-16 animate-pulse" />
            ))}
          </div>
        </div>
      }>
        <CalculateurClient />
      </Suspense>
    </main>
  );
}
