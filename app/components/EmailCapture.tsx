"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
      <p className="text-sky-400 text-xs font-semibold uppercase tracking-widest mb-2">
        Gratuit
      </p>
      <h2 className="text-xl font-black mb-2">
        La checklist des 10 logiciels à remplacer
      </h2>
      <p className="text-slate-400 text-sm mb-6">
        Reçois gratuitement la liste des 10 abonnements les plus faciles à
        remplacer cette semaine.
      </p>

      {status === "success" ? (
        <p className="text-emerald-400 font-semibold text-sm">
          ✓ C&apos;est noté ! Vérifie ta boîte mail.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
        >
          <input
            type="email"
            placeholder="ton@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading"}
            className="flex-1 rounded-xl border border-white/10 bg-[#0d1526] px-4 py-3 text-sm text-slate-50 placeholder:text-slate-500 focus:border-sky-500/50 focus:outline-none focus:ring-1 focus:ring-sky-500/30 transition disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="shrink-0 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Envoi…" : "Recevoir la checklist →"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="text-red-400 text-xs mt-3">
          Une erreur s&apos;est produite. Réessaie dans un instant.
        </p>
      )}
    </section>
  );
}
