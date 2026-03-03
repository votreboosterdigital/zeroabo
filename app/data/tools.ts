// app/data/tools.ts

export type ToolAlternative = {
  id: string;
  slug: string;
  abonnement: string;
  originalApp: string;
  motsCles: string[];
  nom: string;
  prix: string;
  savings: number;
  description: string;
  longDescription: string;
  features: string[];
  lien: string;
  affiliateUrl: string;
};

export const TOOL_ALTERNATIVES: ToolAlternative[] = [
  {
    id: "onlyoffice",
    slug: "onlyoffice",
    abonnement: "Microsoft 365, Google Workspace",
    originalApp: "Microsoft Office 365",
    motsCles: ["bureautique", "word", "excel", "powerpoint", "suite office"],
    nom: "ONLYOFFICE",
    prix: "Licence perpétuelle (voir site)",
    savings: 200,
    description:
      "Suite bureautique compatible Microsoft Office, sans abonnement obligatoire.",
    longDescription:
      "ONLYOFFICE permet de créer, éditer et collaborer sur des documents texte, tableurs et présentations, avec une interface proche de Microsoft Office et des options d’auto-hébergement.",
    features: [
      "Compatible DOCX, XLSX, PPTX",
      "Édition collaborative en temps réel",
      "Applications desktop, web et mobiles",
      "Auto-hébergement possible",
    ],
    lien: "https://www.onlyoffice.com",
    affiliateUrl: "https://www.onlyoffice.com/?via=Zeroabo",
  },

  // Tu peux ajouter d'autres outils ici, un objet par outil…
];
