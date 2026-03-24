"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Outils", href: "/" },
  { label: "Calculateur", href: "/calculateur" },
  { label: "Blog", href: "/blog" },
  { label: "Mon histoire", href: "/mon-histoire" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen]);

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-emerald-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Aller au contenu
      </a>

      {/* Top Bar — desktop only */}
      <div className="hidden md:flex items-center justify-center gap-1 text-sm text-slate-400 bg-[#0d1526] py-2">
        <span aria-hidden="true">💡</span>{" "}Arrête de payer des abonnements inutiles — passe à l&apos;achat unique.{" "}
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
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm transition-colors ${isActive ? "text-slate-50 font-medium" : "text-slate-400 hover:text-slate-50"}`}
                >
                  {link.label}
                </Link>
              );
            })}
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
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="absolute top-full left-0 right-0 bg-[#020817] border-b border-white/5 px-4 py-4 flex flex-col gap-4"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm transition-colors ${isActive ? "text-slate-50 font-medium" : "text-slate-400 hover:text-slate-50"}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
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
