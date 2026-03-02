import { ToolAlternative } from "./data/tools";

type ResultsListProps = {
  terme: string;
  resultats: ToolAlternative[];
  aCherche: boolean;
};

export function ResultsList({ terme, resultats, aCherche }: ResultsListProps) {
  if (!aCherche) {
    return null;
  }

  return (
    <section className="w-full max-w-3xl mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">
        Résultats pour&nbsp;:{" "}
        <span className="text-emerald-400">&ldquo;{terme}&rdquo;</span>
      </h2>

      {resultats.length === 0 ? (
        <p className="text-sm text-slate-300">
          Aucune alternative en achat unique trouvée pour ce terme pour
          l&apos;instant. Essayez un autre nom d&apos;abonnement (Adobe, Notion,
          Photoshop, etc.).
        </p>
      ) : (
        <div className="space-y-4">
          {resultats.map((alt) => (
            <article
              key={alt.id}
              className="rounded-lg border border-slate-800 bg-slate-900/60 p-4"
            >
              <h3 className="text-lg font-semibold text-slate-50">
                {alt.nom}
              </h3>
              <p className="mt-1 text-sm text-emerald-300">{alt.prix}</p>
              <p className="mt-2 text-sm text-slate-200">{alt.description}</p>
              <a
                href={alt.lien}
                target="_blank"
                rel="noreferrer"
                className="inline-flex mt-3 text-sm font-medium text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
              >
                Voir l&apos;alternative
              </a>
              <p className="mt-2 text-xs text-slate-400">
                Remplace&nbsp;: {alt.abonnement}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
