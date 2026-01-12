"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { MenuIcon, XIcon } from "../ui/Icons";

const navigation = [
  { name: "Para Trabajar", href: "/trabajo" },
  { name: "Para Viajar", href: "/viajes" },
  { name: "Para Certificarte", href: "/certificados" },
  { name: "Preguntas", href: "#faq" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center text-white font-black text-lg">
              F
            </div>
            <span className="text-xl font-black text-slate-900">Focus English</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-slate-700 hover:text-violet-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button href="/login" variant="secondary" size="sm">
              Entrar
            </Button>
            <Button href="/signup" size="sm">
              Empezar Gratis
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-slate-200">
            <div className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-base font-semibold text-slate-700 hover:text-violet-600 hover:bg-slate-50 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2">
                <Button href="/login" variant="secondary" className="w-full">
                  Entrar
                </Button>
                <Button href="/signup" className="w-full">
                  Empezar Gratis
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
