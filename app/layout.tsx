import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://focusenglish.com'),
  title: {
    default: "Focus English - Cursos de Inglés Especializados | Trabajo, Viajes y Exámenes",
    template: "%s | Focus English"
  },
  description: "Cursos de inglés focalizados en tu objetivo: especialización profesional para trabajar, viajar o preparar exámenes oficiales. Programas personalizados de 90 días.",
  keywords: [
    "cursos de inglés", 
    "inglés para trabajar", 
    "inglés profesional",
    "inglés de negocios", 
    "inglés para viajar",
    "preparación exámenes inglés",
    "curso inglés online",
    "inglés empresarial España",
    "aprender inglés rápido",
    "inglés sectores profesionales",
    "curso inglés marketing",
    "curso inglés ingeniería",
    "preparación Cambridge",
    "preparación TOEFL",
    "preparación IELTS",
  ],
  authors: [{ name: "Focus English", url: "https://focusenglish.com" }],
  creator: "Focus English",
  publisher: "Focus English",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Focus English - Cursos de Inglés Especializados",
    description: "Cursos focalizados para trabajar, viajar o preparar exámenes oficiales. Programas personalizados de 90 días.",
    type: "website",
    locale: "es_ES",
    siteName: "Focus English",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Focus English - Cursos de Inglés Especializados',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus English - Cursos de Inglés Especializados",
    description: "Inglés focalizado en tu objetivo: trabajo, viajes o exámenes oficiales",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Anti-piracy protection */}
        <meta name="robots" content="max-image-preview:large" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        
        {/* Prevent content scraping */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Disable right-click context menu
            document.addEventListener('contextmenu', e => e.preventDefault());
            
            // Disable common shortcuts for viewing source
            document.addEventListener('keydown', e => {
              if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S')) {
                e.preventDefault();
                return false;
              }
              if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
                e.preventDefault();
                return false;
              }
            });
            
            // Console protection
            (function() {
              const devtools = /./;
              devtools.toString = function() {
                this.opened = true;
              }
              const checkDevTools = setInterval(function() {
                if (devtools.opened) {
                  console.clear();
                  devtools.opened = false;
                }
              }, 1000);
            })();
          `
        }} />
      </head>
      <body className="antialiased bg-white text-slate-900">
        {/* Copyright watermark */}
        <div style={{
          position: 'fixed',
          bottom: '10px',
          right: '10px',
          fontSize: '10px',
          color: 'rgba(0,0,0,0.1)',
          pointerEvents: 'none',
          zIndex: 9999,
          userSelect: 'none'
        }}>
          © 2026 Focus English
        </div>
        {children}
      </body>
    </html>
  );
}
