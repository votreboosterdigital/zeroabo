import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/Header";

export const metadata: Metadata = {
  title: "Mon histoire — ZéroAbo",
  description:
    "Comment j'ai réalisé que je payais des centaines d'euros par an pour des logiciels que je n'utilisais plus — et pourquoi j'ai créé ZéroAbo.",
  alternates: { canonical: "https://zeroabo.fr/mon-histoire" },
  openGraph: {
    title: "Mon histoire — ZéroAbo",
    description: "Comment j'ai réalisé que je payais des centaines d'euros par an pour des logiciels que je n'utilisais plus — et pourquoi j'ai créé ZéroAbo.",
    url: "https://zeroabo.fr/mon-histoire",
    siteName: "ZéroAbo",
    type: "article",
    images: [{ url: "https://zeroabo.fr/opengraph-image", width: 1200, height: 630, alt: "ZéroAbo — Mon histoire" }],
  },
};

export default function MonHistoire() {
  return (
    <div className="min-h-screen bg-[#020817] text-slate-50">
      <Header />
      <article className="max-w-2xl mx-auto px-4 pt-20 md:pt-[108px] py-16">

        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400 mb-3">
          À propos
        </p>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-50 mb-4">
          Mon histoire (et peut-être un peu la tienne)
        </h1>

        <blockquote className="border-l-4 border-sky-500 pl-4 italic text-slate-300 my-6">
          Je ne suis pas un gourou de la finance, ni un mec ultra organisé. Je suis plutôt l&apos;inverse : du genre à procrastiner, à laisser passer les mails, et à me dire &quot;je m&apos;en occuperai plus tard&quot;. Et &quot;plus tard&quot; m&apos;a souvent coûté très cher.
        </blockquote>

        {/* Section 1 */}
        <h2 className="text-xl font-bold text-slate-100 mt-12 mb-4">
          La réalité : je payais pour une vie que je ne vivais pas
        </h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Pendant plus d&apos;un an, j&apos;ai payé mon abonnement Basic‑Fit &quot;au cas où je me motiverais&quot; à y aller. Chaque mois, ça passait, et je me disais : &quot;c&apos;est pas grave, c&apos;est pas si cher… et puis un jour je m&apos;y mettrai.&quot; Sauf que la vérité, c&apos;est que je payais juste pour me donner bonne conscience. Je finançais une version de moi qui n&apos;existait pas.
        </p>
        <p className="text-slate-300 leading-relaxed mb-4">
          Pareil pour les assurances, les services en tout genre : contrats qui augmentent un peu chaque année, options dont je ne me souviens même plus, et moi au milieu, avec une phobie administrative monumentale. Rien que l&apos;idée de passer des heures à comparer, appeler, résilier… me donnait envie de fermer l&apos;onglet. J&apos;ai même failli payer quelqu&apos;un pour le faire à ma place, juste pour ne pas avoir à m&apos;en occuper.
        </p>

        {/* Section 2 */}
        <h2 className="text-xl font-bold text-slate-100 mt-12 mb-4">
          Le déclic : les abonnements invisibles
        </h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Le vrai choc n&apos;est pas venu de la salle de sport ou des assurances. Il est venu des abonnements virtuels : logiciels, outils en ligne, abonnements &quot;à 9,99 €&quot; qui se cumulent sans faire de bruit. Individuellement, ça a l&apos;air de rien. Mais en regardant de près, j&apos;ai réalisé que je claquais des centaines d&apos;euros par an dans des services que je n&apos;utilisais plus, ou que je pourrais remplacer par un achat unique.
        </p>
        <p className="text-slate-300 leading-relaxed mb-4">
          D&apos;abord la honte (&quot;comment j&apos;ai pu laisser passer ça aussi longtemps ?&quot;), puis la curiosité : &quot;ok, combien je peux vraiment récupérer si je prends ça au sérieux ?&quot;.
        </p>

        {/* Section 3 */}
        <h2 className="text-xl font-bold text-slate-100 mt-12 mb-4">
          La frustration : aucune ressource claire, surtout en français
        </h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          J&apos;ai commencé à chercher des alternatives sans abonnement. Et là, je suis tombé dans un labyrinthe : des avis éparpillés, des comparatifs sponsorisés, des blogs en anglais, des infos jamais à jour, chaque outil à dénicher à la main.
        </p>
        <blockquote className="border-l-4 border-sky-500 pl-4 italic text-slate-300 my-6">
          &quot;J&apos;aimerais juste une page qui me dise simplement : voilà les meilleures alternatives, sans abonnement, et combien tu peux économiser.&quot; Mais cette page n&apos;existait pas. Alors j&apos;ai commencé à la construire, d&apos;abord pour moi.
        </blockquote>

        {/* Section 4 */}
        <h2 className="text-xl font-bold text-slate-100 mt-12 mb-4">
          La découverte : un abonnement à la fois
        </h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Au lieu d&apos;essayer de tout changer d&apos;un coup, j&apos;ai fait ce que tout procrastinateur peut faire : un abonnement à la fois. J&apos;ai remplacé un logiciel en abonnement par un équivalent en achat unique. Puis un deuxième. Puis un troisième. À chaque fois, je notais le prix d&apos;avant, le prix d&apos;après, l&apos;économie sur un an, sur trois ans. Et à force d&apos;additionner, j&apos;ai compris que ce n&apos;était pas juste quelques euros &quot;sympa à récupérer&quot;. C&apos;était de vrais montants : de quoi payer des vacances, un nouvel appareil, ou simplement respirer un peu plus à la fin du mois.
        </p>

        {/* Section 5 */}
        <h2 className="text-xl font-bold text-slate-100 mt-12 mb-4">
          Pourquoi j&apos;ai créé ZéroAbo
        </h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          ZéroAbo n&apos;est pas né d&apos;une idée de start‑up ni d&apos;un pitch de business plan. Il est né d&apos;un truc très simple : &quot;J&apos;ai fait le boulot chiant pour moi. Autant que ça serve aussi à d&apos;autres.&quot;
        </p>
        <p className="text-slate-300 leading-relaxed mb-4">
          J&apos;ai créé ce site pour que tu n&apos;aies pas à passer des heures à comparer, te perdre dans des fiches produit floues, ou faire des calculs dans tous les sens pour savoir si ça vaut le coup. Ici, tu trouves des alternatives sans abonnement sélectionnées et testées, des économies chiffrées sur plusieurs années, un calculateur qui met noir sur blanc ce que tu peux récupérer — le tout en français, sans jargon inutile.
        </p>

        {/* Section 6 */}
        <h2 className="text-xl font-bold text-slate-100 mt-12 mb-4">
          Si tu te reconnais là-dedans
        </h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Si toi aussi tu as payé des mois (ou des années) de salle de sport pour rien, laissé courir des abonnements &quot;au cas où&quot;, repoussé l&apos;instant de résilier &quot;parce que c&apos;est relou&quot; — tu es exactement au bon endroit.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Link
            href="/calculateur"
            className="inline-block text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-400 px-5 py-2.5 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all"
          >
            Commencer par voir combien tu pourrais économiser →
          </Link>
        </div>

      </article>
    </div>
  );
}
