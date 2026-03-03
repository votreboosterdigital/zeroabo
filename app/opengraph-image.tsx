// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ZéroAbo — Logiciels sans abonnement";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#020617",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "white",
            letterSpacing: "-2px",
          }}
        >
          <span style={{ color: "#10b981" }}>Zéro</span>Abo
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#94a3b8",
            marginTop: 20,
            textAlign: "center",
            maxWidth: 700,
          }}
        >
          Logiciels en achat unique — Payez une fois, utilisez pour toujours.
        </div>
        <div
          style={{
            marginTop: 40,
            background: "#10b981",
            color: "#020617",
            padding: "12px 32px",
            borderRadius: 12,
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          zeroabo.fr
        </div>
      </div>
    ),
    { ...size }
  );
}
