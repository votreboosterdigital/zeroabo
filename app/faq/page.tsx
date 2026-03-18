// app/faq/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/Header";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title: "FAQ — Logiciels sans abonnement | ZéroAbo",
  description:
    "Toutes vos questions sur les alternatives logicielles en achat unique et licences perpétuelles. GIMP, LibreOffice, DaVinci Resolve, Affinity Photo : on répond à tout.",
  alternates: { canonical: "https://zeroabo.fr/faq" },
  openGraph: {
    title: "FAQ — Logiciels sans abonnement | ZéroAbo",
    description:
      "Toutes vos questions sur les alternatives logicielles en achat unique et licences perpétuelles.",
    url: "https://zeroabo.fr/faq",
    siteName: "ZéroAbo",
    type: "website",
  },
};

const FAQ_ITEMS = [
  {
    question: "Qu'est-ce qu'une licence perpétuelle ?",
    answer:
      "Une licence perpétuelle (ou achat unique) vous donne le droit d'utiliser un logiciel indéfiniment, sans payer de frais mensuels ou annuels récurrents. Vous achetez une fois et vous utilisez pour toujours. C'est l'opposé du modèle SaaS (logiciel par abonnement) popularisé par Adobe Creative Cloud ou Microsoft 365.",
  },
  {
    question: "Quelle est la différence entre open source et achat unique ?",
    answer:
      "Un logiciel open source est gratuit et son code source est public (GIMP, LibreOffice, Audacity). Un logiciel en achat unique est vendu à prix fixe mais peut être propriétaire (Affinity Photo, PDF-XChange Editor, Movavi). Les deux évitent l'abonnement récurrent — la différence est dans le prix et la transparence du code.",
  },
  {
    question: "Les logiciels en achat unique reçoivent-ils des mises à jour ?",
    answer:
      "Oui, généralement. Pour les logiciels open source (GIMP, LibreOffice), les mises à jour sont toujours gratuites. Pour les logiciels commerciaux en licence perpétuelle, les mises à jour de la version achetée sont incluses ; les nouvelles versions majeures peuvent nécessiter un nouvel achat (souvent à tarif réduit). Lisez les conditions de chaque éditeur avant d'acheter.",
  },
  {
    question: "GIMP peut-il ouvrir des fichiers PSD (Photoshop) ?",
    answer:
      "Oui. GIMP peut ouvrir et sauvegarder des fichiers .PSD d'Adobe Photoshop, incluant les calques. La compatibilité est bonne pour les fichiers simples à intermédiaires, mais certains effets ou calques d'ajustement complexes peuvent ne pas être parfaitement rendus. Pour une compatibilité PSD maximale, Affinity Photo 2 (désormais gratuit) est souvent plus fidèle.",
  },
  {
    question: "LibreOffice est-il vraiment compatible avec Microsoft Office ?",
    answer:
      "LibreOffice ouvre et enregistre les formats .docx, .xlsx et .pptx de Microsoft Office. Pour les documents simples à intermédiaires, la compatibilité est excellente. Des différences de mise en page peuvent apparaître sur des documents complexes (styles avancés, macros VBA, graphiques). Si vous échangez régulièrement des fichiers avec des utilisateurs Office, testez vos documents types avant de migrer.",
  },
  {
    question: "DaVinci Resolve gratuit est-il vraiment suffisant ?",
    answer:
      "Pour la grande majorité des utilisateurs, oui. La version gratuite de DaVinci Resolve inclut le montage vidéo complet, l'étalonnage colorimétrique, le mixage audio Fairlight et les effets visuels Fusion. La version Studio (295 € en achat unique) ajoute principalement : collaboration multi-utilisateurs, certains effets IA, encodage H.265 accéléré GPU et quelques filtres supplémentaires.",
  },
  {
    question: "Affinity Photo est-il aussi puissant que Photoshop ?",
    answer:
      "Affinity Photo 2 couvre la quasi-totalité des besoins d'un professionnel de la retouche photo : calques, masques, ajustements non destructifs, correction des couleurs, RAW, etc. Les différences se font sentir sur quelques points spécifiques : l'IA générative de Photoshop (Firefly), la bibliothèque d'assets Creative Cloud et certains plugins tiers. Depuis son passage en gratuit en 2025, c'est l'alternative Adobe la plus recommandée.",
  },
  {
    question: "Puis-je utiliser Obsidian gratuitement pour toujours ?",
    answer:
      "Oui. Obsidian est gratuit pour un usage personnel et le restera. La synchronisation chiffrée entre appareils (Obsidian Sync) est optionnelle à ~48 €/an, mais vous pouvez synchroniser vous-même via iCloud, Dropbox ou un dossier partagé — gratuitement. La publication (Obsidian Publish) est aussi optionnelle. Le logiciel de base, hors-ligne, ne coûte rien.",
  },
  {
    question: "Bitwarden est-il aussi sécurisé que 1Password ?",
    answer:
      "Oui. Bitwarden utilise le chiffrement AES-256 de bout en bout : vos mots de passe sont chiffrés localement avant d'être envoyés aux serveurs. Son code est open source et audité publiquement, ce qui le rend transparent et fiable. 1Password et Bitwarden ont des niveaux de sécurité comparables ; la principale différence est le prix (Bitwarden est quasi-gratuit) et l'interface utilisateur.",
  },
  {
    question: "Audacity est-il adapté pour faire un podcast professionnel ?",
    answer:
      "Absolument. Audacity est utilisé par des milliers de podcasters professionnels. Il permet d'enregistrer, de couper, de réduire le bruit, d'égaliser, de normaliser le volume et d'exporter en MP3 ou WAV. Pour des besoins avancés (mixage multipiste complexe, édition à la volée), MAGIX Sound Forge ou Reaper (60 $ licence perpétuelle) offrent plus de puissance.",
  },
  {
    question: "Inkscape peut-il remplacer Adobe Illustrator ?",
    answer:
      "Pour la plupart des tâches vectorielles (logos, icônes, illustrations, mise en page), Inkscape est une alternative solide et gratuite. Il manque quelques fonctions avancées d'Illustrator (gestion de l'espace de travail artboards multiples, certains effets de distorsion). Pour le dessin vectoriel professionnel avec plus de confort, Affinity Designer 2 (désormais gratuit) est souvent préféré.",
  },
  {
    question: "Quelle alternative à Adobe Acrobat recommandez-vous ?",
    answer:
      "PDF-XChange Editor (~50 €, licence perpétuelle) est l'alternative la plus complète : édition avancée, OCR, formulaires, annotations. Pour un usage basique (lecture, annotation légère), Foxit PDF Reader est gratuit. Pour convertir des PDFs en Word/Excel, des outils comme Smallpdf ou ILovePDF fonctionnent en ligne gratuitement pour quelques fichiers par jour.",
  },
  {
    question: "Est-ce que je peux utiliser Blender pour des projets commerciaux ?",
    answer:
      "Oui, sans restriction. Blender est sous licence GPL, ce qui signifie que vous pouvez l'utiliser pour n'importe quel projet commercial, y compris la vente de films, jeux vidéo ou animations créés avec lui. Les fichiers que vous créez vous appartiennent entièrement. C'est une liberté que les logiciels propriétaires comme Cinema 4D ou Maya ne garantissent pas toujours selon les termes de licence.",
  },
  {
    question: "AOMEI Backupper peut-il vraiment remplacer Acronis ?",
    answer:
      "Pour les besoins courants (sauvegarde système, clonage vers SSD, restauration en cas de panne), AOMEI Backupper Pro (~40 € en licence perpétuelle) fait le travail aussi bien qu'Acronis Cyber Protect Home (~50 €/an). Acronis se distingue par son stockage cloud intégré et certaines fonctions de protection contre les ransomwares. Si vous n'avez pas besoin du cloud, AOMEI est une excellente alternative moins chère.",
  },
  {
    question: "Kaspersky est-il sûr à utiliser malgré les controverses ?",
    answer:
      "C'est une question légitime. Plusieurs pays (dont les États-Unis et l'Allemagne) ont émis des mises en garde sur Kaspersky suite à la guerre en Ukraine. En France, aucune interdiction officielle n'existe à ce jour. Si vous avez des données sensibles ou travaillez pour un gouvernement, préférez Bitdefender (roumain) ou Malwarebytes (américain). Pour un usage grand public, le choix vous appartient en connaissance de cause.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#020817] text-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="max-w-3xl mx-auto px-4 pt-20 md:pt-[108px] pb-20">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "FAQ" },
          ]}
        />

        <p className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-2">
          Questions fréquentes
        </p>
        <h1 className="text-3xl font-black mb-3">
          FAQ — Logiciels sans abonnement
        </h1>
        <p className="text-slate-400 mb-12 leading-relaxed">
          Tout ce que vous devez savoir sur les licences perpétuelles, les alternatives open source et les logiciels en achat unique.
        </p>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <details
              key={i}
              className="group rounded-xl border border-white/8 bg-[#0d1526] ring-1 ring-white/5 open:ring-sky-500/20 transition-all"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-slate-100 hover:text-sky-400 transition-colors list-none">
                <span>{item.question}</span>
                <span className="shrink-0 text-slate-500 group-open:rotate-180 transition-transform duration-200 text-base">
                  ↓
                </span>
              </summary>
              <div className="px-5 pb-5 pt-1">
                <p className="text-sm text-slate-400 leading-relaxed">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-sky-500/20 bg-sky-500/5 p-6 text-center">
          <p className="text-sm text-slate-300 mb-3">
            Une question non listée ici ? Explorez notre catalogue de {" "}
            <span className="text-sky-400 font-semibold">38 alternatives</span>.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-sky-500/20 px-5 py-2.5 text-sm font-semibold text-sky-300 ring-1 ring-sky-500/30 hover:bg-sky-500/30 transition-colors"
          >
            Voir tous les outils →
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#020817]">
        <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 <span className="text-sky-400">Zéro</span>Abo — Tous droits réservés.</p>
          <div className="flex gap-5">
            <Link href="/a-propos" className="hover:text-slate-300 transition-colors">
              À propos
            </Link>
            <Link href="/mentions-legales" className="hover:text-slate-300 transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="hover:text-slate-300 transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
