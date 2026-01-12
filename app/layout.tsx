import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Focus English - Inglés para Trabajar, Viajar o Certificarte",
  description: "Aprende inglés según tu objetivo: programas especializados para el trabajo, viajes o certificados oficiales. 90 días, certificación CEFR, formación para profesionales españoles.",
  keywords: [
    "inglés empresarial", 
    "inglés de negocios", 
    "inglés para viajar",
    "curso de inglés", 
    "CEFR", 
    "Cambridge",
    "TOEFL",
    "IELTS",
    "formación corporativa", 
    "inglés profesional"
  ],
  authors: [{ name: "Focus English" }],
  openGraph: {
    title: "Focus English - Inglés para Trabajar, Viajar o Certificarte",
    description: "Programas especializados de inglés: trabajo, viajes o certificados oficiales. 90 días con certificación CEFR.",
    type: "website",
    locale: "es_ES",
    siteName: "Focus English",
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus English - Inglés para Trabajar, Viajar o Certificarte",
    description: "Elige tu camino: inglés para trabajar, viajar o certificarte. Programas de 90 días.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
