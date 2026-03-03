// app/components/ToolLogo.tsx
"use client";

import { useState } from "react";

type Props = {
  domain: string;
  nom: string;
  size?: number;
};

export default function ToolLogo({ domain, nom, size = 32 }: Props) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        style={{ width: size, height: size }}
        className="rounded-md bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-300 shrink-0"
      >
        {nom.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://logo.clearbit.com/${domain}?size=128`}
      alt={`Logo ${nom}`}
      width={size}
      height={size}
      className="rounded-md object-contain bg-white p-0.5 shrink-0"
      onError={() => setError(true)}
      style={{ width: size, height: size }}
    />
  );
}
