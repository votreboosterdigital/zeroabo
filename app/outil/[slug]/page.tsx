// app/outil/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TOOL_ALTERNATIVES } from "@/app/data/tools";
import ToolDetailClient from "./ToolDetailClient";

type ToolItem = (typeof TOOL_ALTERNATIVES)[number];
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const outil = TOOL_ALTERNATIVES.find((t: ToolItem) => t.slug === slug);
  if (!outil) return {};
  return {
    title: `${outil.nom} — Alternative à ${outil.originalApp} | ZéroAbo`,
    description: outil.longDescription,
  };
}

export async function generateStaticParams() {
  return TOOL_ALTERNATIVES.map((t: ToolItem) => ({ slug: t.slug }));
}

export default async function PageOutil({ params }: Props) {
  const { slug } = await params;
  const outil = TOOL_ALTERNATIVES.find((t: ToolItem) => t.slug === slug);
  if (!outil) return notFound();

  const related = TOOL_ALTERNATIVES
    .filter((t: ToolItem) => t.slug !== outil.slug && (
      t.abonnement === outil.abonnement ||
      t.motsCles.some((m: string) => outil.motsCles.includes(m))
    ))
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: outil.nom,
    description: outil.longDescription,
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: outil.savings > 0 ? outil.savings : 0,
      priceCurrency: "EUR",
      description: outil.prix,
      availability: "https://schema.org/InStock",
    },
    url: outil.lien,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ToolDetailClient outil={outil} related={related} />
    </>
  );
}
