import { Navigation } from "@/components/sections/Navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

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
                <span>Test de Nivel Gratuito</span>
              </div>

              <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Descubre Tu{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                  Nivel de Inglés
                </span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
                Evalúa tu nivel actual de inglés según el Marco Común Europeo de Referencia (CEFR). 
                Recibe recomendaciones personalizadas para tu aprendizaje.
              </p>

              <div className="mt-10">
                <Button size="lg" href="#test-form">
                  Comenzar Test Ahora →
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Test Info Section */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black text-slate-900 text-center mb-12">
                ¿Qué incluye el test?
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-violet-100 flex items-center justify-center">
                    <span className="text-3xl">📝</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Gramática
                  </h3>
                  <p className="text-slate-600">
                    15 preguntas evaluando tu conocimiento de estructuras gramaticales
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-100 flex items-center justify-center">
                    <span className="text-3xl">🗣️</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Vocabulario
                  </h3>
                  <p className="text-slate-600">
                    15 preguntas sobre vocabulario en contexto profesional y cotidiano
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-pink-100 flex items-center justify-center">
                    <span className="text-3xl">👂</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Comprensión
                  </h3>
                  <p className="text-slate-600">
                    10 preguntas evaluando tu comprensión lectora
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CEFR Levels Section */}
        <section className="py-16 bg-slate-50">
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
                <div className="bg-white rounded-2xl p-6 border-2 border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 font-bold">
                      A
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Básico</h3>
                      <p className="text-sm text-slate-600">A1 - A2</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    Usuario básico que puede comunicarse en situaciones simples y cotidianas.
                  </p>
                </div>

                {/* B1-B2 */}
                <div className="bg-white rounded-2xl p-6 border-2 border-violet-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600 font-bold">
                      B
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Intermedio</h3>
                      <p className="text-sm text-slate-600">B1 - B2</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    Usuario independiente con fluidez en situaciones laborales y sociales.
                  </p>
                </div>

                {/* C1-C2 */}
                <div className="bg-white rounded-2xl p-6 border-2 border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                      C
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Avanzado</h3>
                      <p className="text-sm text-slate-600">C1 - C2</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    Usuario competente con dominio avanzado del idioma en cualquier contexto.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section id="test-form" className="py-16 bg-gradient-to-b from-violet-600 to-purple-600 text-white">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-black mb-6">
                Próximamente Disponible
              </h2>
              <p className="text-lg mb-8 text-violet-100">
                Estamos preparando nuestro test de nivel interactivo. Mientras tanto, puedes 
                registrarte para ser de los primeros en probarlo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="/signup"
                  variant="secondary"
                  size="lg"
                  className="bg-white text-violet-600 hover:bg-slate-50"
                >
                  Registrarme Ahora
                </Button>
                <Button
                  href="/cursos-especializados"
                  variant="secondary"
                  size="lg"
                  className="bg-violet-700 text-white hover:bg-violet-800"
                >
                  Ver Cursos
                </Button>
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
