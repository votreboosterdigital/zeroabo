// app/politique-de-confidentialite/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/Header";

export const metadata: Metadata = {
  title: "Politique de confidentialité — ZéroAbo",
  description: "Politique de confidentialité et protection des données personnelles de ZéroAbo, conformément à la Loi 25 (Québec).",
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen flex flex-col bg-[#020817] text-slate-50">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 pt-20 md:pt-[108px] pb-16 w-full">
        <h1 className="text-3xl font-bold text-slate-50 mb-2">
          Politique de confidentialité
        </h1>
        <p className="text-sm text-slate-500 mb-10">
          Dernière mise à jour : mars 2026 · Conforme à la Loi 25 (Québec)
        </p>

        {/* Responsable */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-50 mb-3">
            Responsable du traitement
          </h2>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300 space-y-2">
            <p><span className="text-slate-500">Nom :</span> Belkacem Mehdi</p>
            <p><span className="text-slate-500">Site :</span> https://www.zeroabo.fr</p>
            <p>
              <span className="text-slate-500">Contact :</span>{" "}
              <a href="mailto:contact@zeroabo.fr" className="text-emerald-400 hover:underline">
                contact@zeroabo.fr
              </a>
            </p>
          </div>
        </section>

        {/* Données collectées */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-50 mb-3">
            Données collectées
          </h2>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300 space-y-3">
            <p>
              ZéroAbo <strong className="text-slate-200">ne collecte aucune donnée personnelle directement</strong>. Le site ne requiert aucun compte utilisateur, aucune inscription, aucun formulaire de contact.
            </p>
            <p>
              Les seules données traitées sont des données techniques anonymes, décrites ci-dessous.
            </p>
          </div>
        </section>

        {/* Vercel Analytics */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-50 mb-3">
            Mesure d&apos;audience — Vercel Analytics
          </h2>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300 space-y-3">
            <p>
              Ce site utilise <strong className="text-slate-200">Vercel Analytics</strong>, un outil de mesure de performance et de trafic.
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              <p><span className="text-slate-500">Données traitées :</span> pages visitées, métriques de performance (Core Web Vitals), type d&apos;appareil, pays</p>
              <p><span className="text-slate-500">Données NON collectées :</span> adresse IP complète, email, nom, identifiants persistants</p>
              <p><span className="text-slate-500">Cookies déposés :</span> aucun</p>
              <p><span className="text-slate-500">Conservation :</span> 90 jours</p>
              <p><span className="text-slate-500">Sous-traitant :</span> Vercel Inc., San Francisco, États-Unis</p>
              <p><span className="text-slate-500">Base légale :</span> intérêt légitime (amélioration du service)</p>
            </div>
            <p>
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                Politique de confidentialité de Vercel →
              </a>
            </p>
          </div>
        </section>

        {/* Liens affiliés */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-50 mb-3">
            Liens affiliés et cookies tiers
          </h2>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300 space-y-3">
            <p>
              Certains liens sur ZéroAbo sont des liens affiliés. En cliquant sur ces liens, vous accédez à des sites tiers (Amazon, éditeurs de logiciels, etc.) qui peuvent déposer leurs propres cookies de suivi.
            </p>
            <p>
              ZéroAbo ne contrôle pas ces cookies et ne reçoit aucune donnée personnelle via ces programmes. Consultez la politique de confidentialité de chaque site tiers pour plus d&apos;informations.
            </p>
          </div>
        </section>

        {/* Transferts */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-50 mb-3">
            Transferts hors Québec
          </h2>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300 space-y-3">
            <p>
              L&apos;hébergement du site et la mesure d&apos;audience (Vercel Inc.) impliquent un traitement de données aux États-Unis. Vercel Inc. est soumis aux clauses contractuelles types garantissant un niveau de protection adéquat.
            </p>
          </div>
        </section>

        {/* Droits */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-50 mb-3">
            Vos droits (Loi 25 — Québec)
          </h2>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300 space-y-3">
            <p>
              Conformément à la Loi modernisant des dispositions législatives en matière de protection des renseignements personnels (Loi 25), vous disposez des droits suivants :
            </p>
            <ul className="space-y-1.5 pl-4 list-disc">
              <li><strong className="text-slate-200">Droit d&apos;accès</strong> — connaître les renseignements que nous détenons sur vous</li>
              <li><strong className="text-slate-200">Droit de rectification</strong> — faire corriger des renseignements inexacts ou incomplets</li>
              <li><strong className="text-slate-200">Droit à l&apos;effacement</strong> — demander la suppression de vos données</li>
              <li><strong className="text-slate-200">Droit à la portabilité</strong> — recevoir vos données dans un format structuré et lisible</li>
              <li><strong className="text-slate-200">Droit d&apos;opposition</strong> — vous opposer au traitement de vos données pour intérêt légitime</li>
            </ul>
            <p className="border-t border-white/5 pt-3">
              Pour exercer vos droits :{" "}
              <a href="mailto:contact@zeroabo.fr" className="text-emerald-400 hover:underline">
                contact@zeroabo.fr
              </a>
              {" "}— Réponse garantie sous 30 jours.
            </p>
          </div>
        </section>

      </main>

      <footer className="border-t border-white/5 bg-[#020817]">
        <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 <span className="text-sky-400">Zéro</span>Abo — Tous droits réservés.</p>
          <div className="flex gap-5">
            <Link href="/a-propos" className="hover:text-slate-300 transition-colors">À propos</Link>
            <Link href="/mentions-legales" className="hover:text-slate-300 transition-colors">Mentions légales</Link>
            <Link href="/politique-de-confidentialite" className="hover:text-slate-300 transition-colors">Confidentialité</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
