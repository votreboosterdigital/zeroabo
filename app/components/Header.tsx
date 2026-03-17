"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Outils", href: "/" },
  { label: "Calculateur", href: "/calculateur" },
  { label: "Blog", href: "/blog" },
  { label: "Mon histoire", href: "/mon-histoire" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      {/* Top Bar — desktop only */}
      <div className="hidden md:flex items-center justify-center gap-1 text-sm text-slate-400 bg-[#0d1526] py-2">
        💡 Les utilisateurs ZéroAbo économisent en moyenne 280 €/an —{" "}
        <Link href="/calculateur" className="text-emerald-400 underline">
          Calcule tes économies →
        </Link>
      </div>

      {/* Nav Bar */}
      <nav className="bg-[#020817]/85 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Left: logo + subtitle */}
          <div className="flex items-center">
            <Link href="/">
              <span className="text-xl font-bold tracking-tight">
                <span className="text-sky-400">Zéro</span>
                <span className="text-slate-50">Abo</span>
              </span>
            </Link>
            <span className="hidden md:block text-xs text-slate-500 ml-3">
              Logiciels en achat unique, sans abonnement
            </span>
          </div>

          {/* Right: desktop links + CTA */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-slate-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/calculateur"
              className="text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-400 px-4 py-2 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all"
            >
              Calculer mes économies
            </Link>
          </div>

          {/* Right: mobile hamburger */}
          <button
            className="md:hidden text-slate-400 hover:text-slate-50 transition-colors text-xl"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#020817] border-b border-white/5 px-4 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-slate-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/calculateur"
              className="text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-400 px-4 py-2 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all text-center"
              onClick={() => setIsOpen(false)}
            >
              Calculer mes économies
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
