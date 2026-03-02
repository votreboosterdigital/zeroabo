export type ToolAlternative = {
  id: string;
  abonnement: string;
  motsCles: string[];
  nom: string;
  prix: string;
  description: string;
  lien: string;
};

export const TOOL_ALTERNATIVES: ToolAlternative[] = [
  {
    id: "affinity-photo",
    abonnement: "Adobe Photoshop",
    motsCles: ["adobe", "photoshop", "photo", "retouche", "création"],
    nom: "Affinity Photo",
    prix: "À partir de 79,99 € (achat unique)",
    description:
      "Logiciel de retouche photo professionnel, sans abonnement, avec la plupart des fonctionnalités clés de Photoshop.",
    lien: "https://example.com/affinity-photo",
  },
  {
    id: "affinity-designer",
    abonnement: "Adobe Illustrator",
    motsCles: ["adobe", "illustrator", "vectoriel", "logo", "design"],
    nom: "Affinity Designer",
    prix: "À partir de 79,99 € (achat unique)",
    description:
      "Outil de création graphique vectorielle puissant, idéal pour logos, icônes et illustrations, sans abonnement.",
    lien: "https://example.com/affinity-designer",
  },
  {
    id: "affinity-publisher",
    abonnement: "Adobe InDesign",
    motsCles: ["adobe", "indesign", "mise en page", "print", "magazine"],
    nom: "Affinity Publisher",
    prix: "À partir de 79,99 € (achat unique)",
    description:
      "Solution de mise en page avancée pour brochures, magazines et livres, en achat unique.",
    lien: "https://example.com/affinity-publisher",
  },
  {
    id: "obsidian",
    abonnement: "Notion",
    motsCles: ["notion", "notes", "productivité", "documentation"],
    nom: "Obsidian (Licence commerciale)",
    prix: "Licence commerciale à vie (achat unique, selon usage)",
    description:
      "Application de prise de notes en Markdown, très flexible, avec possibilité de licence commerciale sans abonnement.",
    lien: "https://example.com/obsidian",
  },
  {
    id: "capacities",
    abonnement: "Notion",
    motsCles: ["notion", "notes", "organisation"],
    nom: "Capacities (licence perpétuelle - exemple)",
    prix: "Exemple de licence perpétuelle (données fictives)",
    description:
      "Exemple d’outil type base de connaissances avec une licence perpétuelle (données fictives pour la démo).",
    lien: "https://example.com/capacities",
  },
  {
    id: "davinci-resolve-studio",
    abonnement: "Adobe Premiere Pro",
    motsCles: ["premiere", "premiere pro", "montage", "vidéo", "adobe"],
    nom: "DaVinci Resolve Studio",
    prix: "Licence définitive, mise à jour gratuite sur une génération",
    description:
      "Suite complète de montage vidéo, étalonnage et audio, disponible en licence définitive.",
    lien: "https://example.com/davinci-resolve",
  },
];

