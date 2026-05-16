"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, SITE_NAME } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-bg-primary/80 border-b border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-text-primary hover:text-accent-blue transition-colors">
          {SITE_NAME}
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                pathname === item.href
                  ? "text-accent-blue"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-text-secondary hover:text-text-primary transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-bg-primary/95 backdrop-blur-md">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-3 text-sm ${
                pathname === item.href
                  ? "text-accent-blue bg-accent-blue/5"
                  : "text-text-secondary hover:text-text-primary hover:bg-white/[0.02]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
