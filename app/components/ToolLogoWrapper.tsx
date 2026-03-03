// app/components/ToolLogoWrapper.tsx
"use client";

import ToolLogo from "@/app/components/ToolLogo";

type Props = {
  domain: string;
  nom: string;
  size?: number;
};

export default function ToolLogoWrapper({ domain, nom, size }: Props) {
  return <ToolLogo domain={domain} nom={nom} size={size} />;
}
