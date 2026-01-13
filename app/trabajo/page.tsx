import { Navigation } from "@/components/sections/Navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Inglés para Trabajar | Focus English",
  description: "Cursos de inglés profesional especializados para mejorar tu carrera. Vocabulario de negocios, reuniones, presentaciones y comunicación corporativa.",
};

export default function TrabajoPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-violet-50 py-16 sm:py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-semibold text-violet-700">
                <span className="mr-2">💼</span>
                <span>Inglés Profesional</span>
              </div>

              <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Inglés{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                  Para Tu Carrera
                </span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
                Domina el inglés profesional que necesitas para destacar en tu trabajo. 
                Comunicación efectiva en reuniones, presentaciones, emails y negociaciones.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" href="/cursos-especializados">
                  Ver Cursos por Sector →
                </Button>
                <Button variant="secondary" size="lg" href="/diagnostico">
                  Test de Nivel
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-black text-slate-900 text-center mb-12">
                ¿Qué aprenderás?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-50 rounded-2xl p-8">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-violet-100 flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Comunicación Escrita
                  </h3>
                  <p className="text-slate-600">
                    Redacta emails profesionales, informes, propuestas y documentos 
                    corporativos con confianza y claridad.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-purple-100 flex items-center justify-center">
                    <span className="text-2xl">🎤</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Presentaciones
                  </h3>
                  <p className="text-slate-600">
                    Prepara y ejecuta presentaciones impactantes en inglés. 
                    Estructura, vocabulario técnico y lenguaje persuasivo.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-pink-100 flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Reuniones
                  </h3>
                  <p className="text-slate-600">
                    Participa activamente en reuniones, calls internacionales y 
                    videollamadas con vocabulario profesional adecuado.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-indigo-100 flex items-center justify-center">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Negociación
                  </h3>
                  <p className="text-slate-600">
                    Desarrolla habilidades para negociar, persuadir y cerrar 
                    acuerdos en contextos profesionales internacionales.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Sectors Section */}
        <section className="py-16 bg-slate-50">
          <Container>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-black text-slate-900 text-center mb-4">
                Cursos por Sector
              </h2>
              <p className="text-center text-slate-600 mb-12">
                Inglés específico para tu industria
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-violet-300 transition-colors">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Marketing & Comunicación
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Campañas, análisis de mercado, estrategias digitales
                  </p>
                  <Button href="/cursos-especializados" variant="secondary" size="sm">
                    Ver Curso →
                  </Button>
                </div>

                <div className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-violet-300 transition-colors">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Ingeniería & Tecnología
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Desarrollo, infraestructura, gestión de proyectos
                  </p>
                  <Button href="/cursos-especializados" variant="secondary" size="sm">
                    Ver Curso →
                  </Button>
                </div>

                <div className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-violet-300 transition-colors">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Administración & Finanzas
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Contabilidad, análisis financiero, reporting
                  </p>
                  <Button href="/cursos-especializados" variant="secondary" size="sm">
                    Ver Curso →
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-violet-600 to-purple-600 text-white">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-black mb-6">
                Impulsa Tu Carrera Profesional
              </h2>
              <p className="text-lg mb-8 text-violet-100">
                Únete a más de 1,500 profesionales que ya están mejorando su inglés 
                para avanzar en sus carreras.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="/signup"
                  variant="secondary"
                  size="lg"
                  className="bg-white text-violet-600 hover:bg-slate-50"
                >
                  Empezar Gratis
                </Button>
                <Button
                  href="/diagnostico"
                  variant="secondary"
                  size="lg"
                  className="bg-violet-700 text-white hover:bg-violet-800"
                >
                  Test de Nivel
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-8">
        <Container>
          <div className="text-center text-sm text-slate-400">
            <p>© 2026 Focus English. Todos los derechos reservados.</p>
          </div>
        </Container>
      </footer>
    </>
  );
}
