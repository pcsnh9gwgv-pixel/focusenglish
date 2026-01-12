import { Navigation } from "@/components/sections/Navigation";
import { Container } from "@/components/ui/Container";
import { InteractivePlacementTest } from "@/components/diagnostic/InteractivePlacementTest";

export const metadata = {
  title: "Test de Nivel de Inglés | Focus English",
  description: "Descubre tu nivel de inglés actual con nuestro test gratuito. Evaluación rápida según el Marco Común Europeo de Referencia (CEFR).",
};

export default function DiagnosticoPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-violet-50 py-16 sm:py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-semibold text-violet-700">
                <span className="mr-2">🎯</span>
                <span>Test de Nivel Gratuito e Interactivo</span>
              </div>

              <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Descubre Tu{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                  Nivel de Inglés
                </span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
                Evalúa tu nivel actual de inglés según el Marco Común Europeo de Referencia (CEFR). 
                Recibe resultados inmediatos con análisis detallado y recomendaciones personalizadas.
              </p>
            </div>
          </Container>
        </section>

        {/* Test Interactivo */}
        <section className="py-16 bg-white">
          <Container>
            <InteractivePlacementTest />
          </Container>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-slate-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black text-slate-900 text-center mb-12">
                ¿Por qué hacer nuestro test?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-violet-100 flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Resultados Instantáneos
                  </h3>
                  <p className="text-slate-600">
                    Obtén tu nivel CEFR al momento con un análisis detallado por categorías: 
                    gramática, vocabulario y comprensión lectora.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-purple-100 flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Evaluación Completa
                  </h3>
                  <p className="text-slate-600">
                    20 preguntas cuidadosamente seleccionadas que evalúan desde nivel básico (A1) 
                    hasta avanzado (C2) según estándares CEFR.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-pink-100 flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Análisis Personalizado
                  </h3>
                  <p className="text-slate-600">
                    Identifica tus fortalezas y áreas de mejora con estadísticas detalladas 
                    en cada habilidad evaluada.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-indigo-100 flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Recomendaciones Específicas
                  </h3>
                  <p className="text-slate-600">
                    Recibe sugerencias de cursos personalizadas según tu nivel y objetivos, 
                    para maximizar tu aprendizaje.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CEFR Levels Section */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-black text-slate-900 text-center mb-4">
                Niveles CEFR
              </h2>
              <p className="text-center text-slate-600 mb-12">
                Nuestro test evalúa tu nivel según el Marco Común Europeo de Referencia
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {/* A1-A2 */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border-2 border-green-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center text-white font-bold text-xl">
                      A
                    </div>
                    <div>
                      <h3 className="font-bold text-green-900 text-lg">Básico</h3>
                      <p className="text-sm text-green-700">A1 - A2</p>
                    </div>
                  </div>
                  <p className="text-sm text-green-800">
                    Usuario básico que puede comunicarse en situaciones simples y cotidianas 
                    con frases y vocabulario esencial.
                  </p>
                </div>

                {/* B1-B2 */}
                <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-2xl p-6 border-2 border-violet-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center text-white font-bold text-xl">
                      B
                    </div>
                    <div>
                      <h3 className="font-bold text-violet-900 text-lg">Intermedio</h3>
                      <p className="text-sm text-violet-700">B1 - B2</p>
                    </div>
                  </div>
                  <p className="text-sm text-violet-800">
                    Usuario independiente con fluidez en situaciones laborales y sociales. 
                    Puede argumentar y expresarse con soltura.
                  </p>
                </div>

                {/* C1-C2 */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border-2 border-purple-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center text-white font-bold text-xl">
                      C
                    </div>
                    <div>
                      <h3 className="font-bold text-purple-900 text-lg">Avanzado</h3>
                      <p className="text-sm text-purple-700">C1 - C2</p>
                    </div>
                  </div>
                  <p className="text-sm text-purple-800">
                    Usuario competente con dominio avanzado del idioma en cualquier contexto. 
                    Dominio nativo o cuasi-nativo.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* Footer */}
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
