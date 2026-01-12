"use client";

import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-violet-50 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-30">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-violet-400 to-purple-300" />
        </div>
      </div>

      <Container>
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-semibold text-violet-700">
            <span className="mr-2">🎯</span>
            <span>Formación Profesional de Inglés</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl text-balance">
            Aprende Inglés{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
              Para Tu Objetivo
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto text-balance">
            Elige tu camino: inglés para <strong className="text-slate-900 font-semibold">trabajar</strong>,
            <strong className="text-slate-900 font-semibold"> viajar</strong> o 
            <strong className="text-slate-900 font-semibold"> certificarte</strong>. 
            Programas personalizados de 90 días con certificación CEFR.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/signup" size="lg" className="w-full sm:w-auto">
              Empieza Gratis →
            </Button>
            <Button href="/diagnostico" variant="secondary" size="lg" className="w-full sm:w-auto">
              Haz el Test de Nivel
            </Button>
          </div>

          {/* Social proof */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-violet-200 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-purple-200 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-pink-200 border-2 border-white" />
              </div>
              <span className="font-medium text-slate-900">Más de 1.500</span>
              <span>profesionales formándose</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
