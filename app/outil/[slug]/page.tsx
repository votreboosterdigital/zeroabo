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

  return <ToolDetailClient outil={outil} />;
}
