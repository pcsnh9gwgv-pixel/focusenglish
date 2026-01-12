import { Navigation } from "@/components/sections/Navigation";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog de Inglés | Consejos, Recursos y Guías para Aprender",
  description: "Artículos especializados sobre inglés profesional, viajes y preparación de exámenes. Guías prácticas, consejos y recursos para mejorar tu inglés.",
  keywords: ["blog inglés", "aprender inglés", "consejos inglés", "recursos inglés", "guías inglés profesional"],
};

const blogCategories = [
  {
    name: "Inglés para Trabajar",
    slug: "trabajo",
    description: "Guías y consejos para el inglés profesional y empresarial",
    icon: "💼",
    color: "from-violet-600 to-purple-600",
    articles: [
      {
        title: "Cómo Dominar el Inglés Profesional para Tu Sector",
        slug: "ingles-profesional-sectores",
        excerpt: "Guía completa para desarrollar habilidades de inglés específicas según tu industria profesional.",
        date: "2026-01-12",
      }
    ]
  },
  {
    name: "Inglés para Viajar",
    slug: "viajes",
    description: "Inglés práctico para tus aventuras internacionales",
    icon: "✈️",
    color: "from-blue-600 to-cyan-600",
    articles: [
      {
        title: "Inglés Esencial para Viajar: Frases y Situaciones Clave",
        slug: "ingles-esencial-viajar",
        excerpt: "Las frases y expresiones más importantes que necesitas dominar para viajar con confianza.",
        date: "2026-01-12",
      }
    ]
  },
  {
    name: "Preparación de Exámenes",
    slug: "examenes",
    description: "Estrategias y recursos para aprobar exámenes oficiales",
    icon: "📝",
    color: "from-emerald-600 to-green-600",
    articles: [
      {
        title: "Guía Completa para Preparar Exámenes Oficiales de Inglés",
        slug: "preparar-examenes-oficiales",
        excerpt: "Todo lo que necesitas saber para prepararte efectivamente para Cambridge, TOEFL e IELTS.",
        date: "2026-01-12",
      }
    ]
  },
];

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6">
              Blog de{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Focus English
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Consejos prácticos, guías especializadas y recursos para mejorar tu inglés según tu objetivo
            </p>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 mb-8">Explora por Temática</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {blogCategories.map((category) => (
                <div key={category.slug} className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                  {/* Category Header */}
                  <div className={`bg-gradient-to-r ${category.color} p-6`}>
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="text-2xl font-black text-white mb-2">{category.name}</h3>
                    <p className="text-white/90 text-sm">{category.description}</p>
                  </div>

                  {/* Articles List */}
                  <div className="p-6">
                    <div className="space-y-4">
                      {category.articles.map((article) => (
                        <Link
                          key={article.slug}
                          href={`/blog/${article.slug}`}
                          className="block group"
                        >
                          <article className="border-l-4 border-slate-200 group-hover:border-violet-600 pl-4 py-2 transition-all">
                            <h4 className="font-bold text-slate-900 group-hover:text-violet-600 transition-colors mb-1">
                              {article.title}
                            </h4>
                            <p className="text-sm text-slate-600 mb-2">{article.excerpt}</p>
                            <time className="text-xs text-slate-500">{new Date(article.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                          </article>
                        </Link>
                      ))}
                    </div>

                    <Link
                      href={`/blog?category=${category.slug}`}
                      className="mt-6 inline-flex items-center text-violet-600 font-semibold text-sm hover:text-violet-700"
                    >
                      Ver todos los artículos de {category.name}
                      <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 mb-8">Artículos Recientes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogCategories.flatMap(cat => cat.articles).map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="p-6">
                    <time className="text-xs text-slate-500 font-semibold uppercase tracking-wide">
                      {new Date(article.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                    <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2 group-hover:text-violet-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">{article.excerpt}</p>
                    <span className="text-violet-600 font-semibold text-sm inline-flex items-center group-hover:gap-2 gap-1 transition-all">
                      Leer más <span>→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-black mb-6">
              ¿Listo para Empezar?
            </h2>
            <p className="text-xl mb-8 text-violet-100">
              Descubre nuestros cursos especializados y comienza tu camino hacia el dominio del inglés
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cursos-especializados"
                className="bg-white text-violet-600 px-8 py-4 rounded-lg font-bold hover:shadow-2xl transition-shadow"
              >
                Ver Cursos
              </Link>
              <Link
                href="/diagnostico"
                className="bg-violet-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-violet-800 transition-colors border-2 border-white/20"
              >
                Hacer Test de Nivel
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center text-white font-black">
                F
              </div>
              <span className="text-lg font-black">Focus English</span>
            </div>
            <p className="text-sm text-slate-400">
              © 2026 Focus English. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
