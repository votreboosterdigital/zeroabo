export type BlogCategorie = 'Créateurs' | 'Entrepreneurs' | 'Vie perso' | 'Outils';

export type BlogPost = {
  slug: string;
  titre: string;
  description: string;
  date: string;           // "YYYY-MM-DD"
  categorie: BlogCategorie;
  tempsLecture: number;   // en minutes
  contenu: string;        // HTML string
  articlesLies: string[]; // slugs
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "adobe-vs-alternatives-comparatif-couts",
    titre: "Adobe vs alternatives : le vrai comparatif des coûts sur 3 ans",
    description:
      "Adobe Creative Cloud coûte une fortune sur 3 ans. Voici combien tu économises vraiment en passant aux alternatives en achat unique.",
    date: "2026-03-17",
    categorie: "Créateurs",
    tempsLecture: 5,
    articlesLies: ["5-logiciels-remplacer-ce-weekend"],
    contenu: `
<p>Tu utilises des logiciels Adobe ? Tu n'es pas seul. Photoshop, Premiere Pro, Acrobat… ce sont des références dans leur domaine. Mais à quel prix ? Sur 3 ans, la facture est souvent bien plus lourde qu'on ne le pense.</p>

<p>Voici un comparatif chiffré entre les abonnements Adobe et leurs meilleures alternatives en achat unique.</p>

<h2>Le comparatif sur 3 ans</h2>

<table>
  <thead>
    <tr>
      <th>Logiciel Adobe</th>
      <th>Coût abonnement 3 ans</th>
      <th>Alternative achat unique</th>
      <th>Économie estimée</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Photoshop CC</td>
      <td>~780 €</td>
      <td>Affinity Photo 2 (gratuit)</td>
      <td><strong>780 €</strong></td>
    </tr>
    <tr>
      <td>Premiere Pro</td>
      <td>~780 €</td>
      <td>DaVinci Resolve (~380 €)</td>
      <td><strong>~880 €</strong></td>
    </tr>
    <tr>
      <td>Acrobat Pro</td>
      <td>~540 €</td>
      <td>PDF-XChange Editor (~50 €)</td>
      <td><strong>~390 €</strong></td>
    </tr>
    <tr>
      <td>Creative Cloud complet</td>
      <td>~1 980 €</td>
      <td>Suite Affinity + DaVinci</td>
      <td><strong>~1 620 €</strong></td>
    </tr>
  </tbody>
</table>

<h2>Ce que ça représente concrètement</h2>

<p>1 620 € d'économie sur 3 ans, c'est :</p>
<ul>
  <li>Un bon ordinateur payé cash, sans crédit</li>
  <li>Plusieurs semaines de vacances</li>
  <li>Un matelas de sécurité financière</li>
</ul>

<p>Et les alternatives ne sont pas des produits au rabais. Affinity Photo 2 est utilisé par des designers professionnels dans le monde entier. DaVinci Resolve est le logiciel de montage de référence à Hollywood pour l'étalonnage.</p>

<h2>La vraie question à se poser</h2>

<p>Est-ce que tu utilises vraiment toutes les fonctionnalités d'Adobe pour lesquelles tu paies ? Pour 80 % des utilisateurs, la réponse est non. Un abonnement, c'est pratique à vendre. Un achat unique, c'est mieux pour ton portefeuille.</p>

<p><a href="/calculateur">Calcule tes économies réelles →</a></p>
    `.trim(),
  },
  {
    slug: "5-logiciels-remplacer-ce-weekend",
    titre: "5 logiciels que tu peux remplacer ce week-end (et arrêter de payer dès le mois prochain)",
    description:
      "5 abonnements logiciels courants avec leurs alternatives en achat unique — accessibles, testées, et qui te font économiser dès maintenant.",
    date: "2026-03-17",
    categorie: "Outils",
    tempsLecture: 4,
    articlesLies: ["adobe-vs-alternatives-comparatif-couts"],
    contenu: `
<p>Tu n'as pas besoin de tout changer d'un coup. La méthode qui marche : un logiciel à la fois, en commençant par ceux que tu paies sans vraiment les utiliser à fond.</p>

<p>Voici 5 abonnements que tu peux remplacer ce week-end, avec des alternatives testées en achat unique.</p>

<p><em>Note : avant de migrer, prends 5 minutes pour télécharger et tester chaque alternative. Toutes proposent des versions d'essai.</em></p>

<p><a href="/calculateur">Calcule d'abord combien tu dépenses en abonnements →</a></p>

<h2>1. Adobe Photoshop → Affinity Photo 2</h2>

<p>Affinity Photo 2 est désormais <strong>gratuit</strong> depuis le rachat par Canva en 2025. C'est une alternative professionnelle complète : calques, masques, retouche non-destructive, compatibilité PSD. Économie : ~260 €/an.</p>

<p><a href="/outil/affinity-photo-2">Voir Affinity Photo 2 →</a></p>

<h2>2. Microsoft 365 → OnlyOffice</h2>

<p>OnlyOffice propose une suite bureautique complète (traitement de texte, tableur, présentations) avec une excellente compatibilité Office. Disponible en version desktop en achat unique. Économie : ~100 €/an.</p>

<p><a href="/outil/onlyoffice">Voir OnlyOffice →</a></p>

<h2>3. Adobe Acrobat Pro → PDF-XChange Editor</h2>

<p>Pour lire, annoter, modifier et signer des PDFs, PDF-XChange Editor fait tout ce que fait Acrobat pour ~50 € en achat unique (contre 180 €/an pour Acrobat). La transition prend moins d'une heure.</p>

<p><a href="/outil/pdf-xchange-editor">Voir PDF-XChange Editor →</a></p>

<h2>4. Norton 360 → Kaspersky Standard</h2>

<p>Les antivirus qui se renouvellent automatiquement sont particulièrement pénibles. Kaspersky Standard propose des licences à durée fixe sans renouvellement automatique. Tu choisis quand tu rachètes — pas eux. Économie : ~100 €/an.</p>

<p><a href="/outil/kaspersky-standard">Voir Kaspersky Standard →</a></p>

<h2>5. Carbonite/Acronis → AOMEI Backupper</h2>

<p>Pour la sauvegarde de tes données, AOMEI Backupper fait le travail en licence perpétuelle : sauvegarde système, clonage de disque, migration SSD. À partir de ~40 € une seule fois. Économie : ~120 €/an.</p>

<p><a href="/outil/aomei-backupper">Voir AOMEI Backupper →</a></p>

<h2>Par où commencer ?</h2>

<p>Si tu ne sais pas par lequel commencer, commence par celui qui te coûte le plus cher. C'est souvent Adobe Photoshop ou Microsoft 365. Un seul remplacement peut déjà te faire économiser 100 à 260 € par an.</p>

<p><a href="/calculateur">Calcule tes économies totales →</a></p>
    `.trim(),
  },
];
