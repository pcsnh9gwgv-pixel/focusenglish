import { Navigation } from "@/components/sections/Navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Acerca de Focus English",
  description: "Conoce más sobre Focus English, nuestra misión y cómo estamos revolucionando el aprendizaje del inglés.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-white to-violet-50">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-black text-slate-900 mb-6">
                Sobre Focus English
              </h1>
              <p className="text-xl text-slate-600">
                Revolucionando el aprendizaje del inglés con cursos especializados 
                y personalizados para tus objetivos específicos.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">
                Nuestra Misión
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-violet-100 flex items-center justify-center">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Enfoque Especializado
                  </h3>
                  <p className="text-slate-600">
                    Cursos diseñados específicamente para tu objetivo: trabajo, viajes o exámenes.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-100 flex items-center justify-center">
                    <span className="text-3xl">⏱️</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Resultados en 90 Días
                  </h3>
                  <p className="text-slate-600">
                    Programas estructurados que te llevan de tu nivel actual a tu objetivo en 3 meses.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-pink-100 flex items-center justify-center">
                    <span className="text-3xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Progreso Medible
                  </h3>
                  <p className="text-slate-600">
                    Seguimiento detallado de tu avance con evaluaciones y feedback continuo.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-slate-50">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-black text-slate-900 mb-6">
                ¿Por qué Focus English?
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                A diferencia de los cursos genéricos, Focus English se especializa en darte exactamente 
                el inglés que necesitas para tu objetivo específico. No pierdas tiempo aprendiendo 
                vocabulario que nunca usarás.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/signup" size="lg">
                  Empieza Gratis
                </Button>
                <Button href="/cursos-especializados" variant="secondary" size="lg">
                  Ver Cursos
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