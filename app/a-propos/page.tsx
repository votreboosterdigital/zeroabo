// app/a-propos/page.tsx
export default function APropos() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">À propos de ZéroAbo</h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          ZéroAbo est un annuaire francophone d&apos;outils en achat unique,
          conçu pour aider particuliers et petites entreprises à réduire leurs
          abonnements logiciels récurrents.
        </p>
        <p className="mt-4 text-xs text-slate-500">
          Certains liens sont affiliés&nbsp;: en passant par eux, vous soutenez
          le projet sans payer plus cher.
        </p>
      </section>
    </main>
  );
}
