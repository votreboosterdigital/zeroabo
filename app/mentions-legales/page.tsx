// app/mentions-legales/page.tsx
import Link from "next/link";
import Header from "@/app/components/Header";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen flex flex-col bg-[#020817] text-slate-50">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 pt-20 md:pt-[108px] pb-16 w-full">
        <h1 className="text-3xl font-bold text-slate-50 mb-8">
          Mentions légales
        </h1>

        {/* Éditeur */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-50 mb-3">
            Éditeur du site
          </h2>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300 space-y-2">
            <p><span className="text-slate-500">Nom :</span> Belkacem Mehdi</p>
            <p><span className="text-slate-500">Résidence :</span> Québec, Canada</p>
            <p><span className="text-slate-500">Site web :</span> https://www.zeroabo.fr</p>
            <p>
              <span className="text-slate-500">Contact :</span>{" "}
              <a href="mailto:contact@zeroabo.fr" className="text-emerald-400 hover:underline">
                contact@zeroabo.fr
              </a>
            </p>
          </div>
        </section>

        {/* Hébergement */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-50 mb-3">
            Hébergement
          </h2>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300 space-y-2">
            <p><span className="text-slate-500">Hébergeur :</span> Vercel Inc.</p>
            <p><span className="text-slate-500">Adresse :</span> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>
            <p>
              <span className="text-slate-500">Site :</span>{" "}
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                vercel.com
              </a>
            </p>
          </div>
        </section>

        {/* Liens affiliés */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-50 mb-3">
            Liens affiliés et transparence
          </h2>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300 space-y-3">
            <p>
              ZéroAbo participe à des programmes d&apos;affiliation. Certains liens présents sur ce site sont des liens affiliés, ce qui signifie que si vous cliquez sur un lien et effectuez un achat, ZéroAbo peut percevoir une commission, sans coût supplémentaire pour vous.
            </p>
            <p>
              Cette commission nous permet de maintenir le site gratuitement accessible et de continuer à référencer de nouvelles alternatives.
            </p>
            <p>
              Les liens affiliés sont identifiés par la mention &quot;Lien affilié&quot; présente sur chaque fiche outil.
            </p>
          </div>
        </section>

        {/* Disclaimer prix */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-50 mb-3">
            Exactitude des informations
          </h2>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300 space-y-3">
            <p>
              Les prix, fonctionnalités et conditions de licence affichés sur ZéroAbo sont fournis à titre indicatif et peuvent ne pas refléter les conditions actuelles des éditeurs de logiciels.
            </p>
            <p>
              Nous vous recommandons de vérifier les informations directement sur le site officiel de chaque logiciel avant tout achat.
            </p>
            <p>
              ZéroAbo ne peut être tenu responsable des décisions d&apos;achat prises sur la base des informations publiées sur ce site.
            </p>
          </div>
        </section>

        {/* Propriété intellectuelle */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-50 mb-3">
            Propriété intellectuelle
          </h2>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300">
            <p>
              Le contenu éditorial de ZéroAbo (textes, descriptions, structure) est la propriété de Belkacem Mehdi. Les logos et marques des logiciels référencés appartiennent à leurs éditeurs respectifs et sont utilisés à des fins d&apos;information uniquement.
            </p>
          </div>
        </section>

        {/* Cookies */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-50 mb-3">
            Cookies et mesure d&apos;audience
          </h2>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300 space-y-3">
            <p>
              ZéroAbo ne collecte aucune donnée personnelle directement. Aucun compte utilisateur n&apos;est requis pour utiliser le site.
            </p>
            <p>
              <strong className="text-slate-200">Vercel Analytics</strong> — Ce site utilise Vercel Analytics pour mesurer les performances et le trafic (pages visitées, métriques de performance, type d&apos;appareil). Cet outil est <strong className="text-slate-200">sans cookie</strong> et ne collecte aucune donnée nominative. Durée de conservation : 90 jours. Sous-traitant : Vercel Inc., San Francisco, États-Unis.{" "}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                Politique de confidentialité Vercel →
              </a>
            </p>
            <p>
              <strong className="text-slate-200">Cookies techniques Vercel</strong> — Des cookies peuvent être déposés par Vercel (hébergeur) pour le bon fonctionnement du site (sécurité, performance).
            </p>
            <p>
              <strong className="text-slate-200">Cookies des programmes d&apos;affiliation</strong> — Les liens affiliés peuvent utiliser des cookies de suivi propres aux programmes concernés (Amazon, etc.). ZéroAbo ne contrôle pas ces cookies tiers.
            </p>
          </div>
        </section>

        {/* Droits Loi 25 */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-50 mb-3">
            Vos droits (Loi 25 — Protection des renseignements personnels)
          </h2>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300 space-y-3">
            <p>
              Conformément à la Loi modernisant des dispositions législatives en matière de protection des renseignements personnels (Loi 25, Québec), vous disposez des droits suivants :
            </p>
            <ul className="space-y-1.5 pl-4 list-disc">
              <li><strong className="text-slate-200">Droit d&apos;accès</strong> — connaître les renseignements que nous détenons sur vous</li>
              <li><strong className="text-slate-200">Droit de rectification</strong> — faire corriger des renseignements inexacts ou incomplets</li>
              <li><strong className="text-slate-200">Droit à l&apos;effacement</strong> — demander la suppression de vos données</li>
              <li><strong className="text-slate-200">Droit à la portabilité</strong> — recevoir vos données dans un format structuré</li>
            </ul>
            <p>
              Pour exercer ces droits :{" "}
              <a href="mailto:contact@zeroabo.fr" className="text-emerald-400 hover:underline">
                contact@zeroabo.fr
              </a>{" "}
              — Réponse garantie sous 30 jours.
            </p>
          </div>
        </section>

        <p className="text-xs text-slate-500 mt-8">
          Dernière mise à jour : mars 2026
        </p>
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
