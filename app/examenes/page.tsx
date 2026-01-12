import { Navigation } from "@/components/sections/Navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Preparación de Exámenes Oficiales | Focus English",
  description: "Prepárate para exámenes oficiales de inglés como Cambridge, TOEFL, IELTS. Cursos especializados siguiendo criterios de evaluación oficiales.",
};

export default function ExamenesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-violet-50 py-16 sm:py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-semibold text-violet-700">
                <span className="mr-2">🎓</span>
                <span>Preparación de Exámenes</span>
              </div>

              <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Prepárate Para{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                  Exámenes Oficiales
                </span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
                Cursos diseñados siguiendo los criterios de evaluación de Cambridge, 
                TOEFL, IELTS y otros exámenes oficiales reconocidos internacionalmente.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" href="/signup">
                  Empieza Tu Preparación →
                </Button>
                <Button variant="secondary" size="lg" href="/diagnostico">
                  Test de Nivel
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Exams Section */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-black text-slate-900 text-center mb-12">
                Exámenes Que Cubrimos
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Cambridge */}
                <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-200 hover:border-violet-300 transition-colors">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-blue-100 flex items-center justify-center">
                    <span className="text-2xl">🇬🇧</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Cambridge
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">
                    FCE, CAE, CPE
                  </p>
                  <p className="text-sm text-slate-600">
                    Preparación completa para First, Advanced y Proficiency.
                  </p>
                </div>

                {/* TOEFL */}
                <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-200 hover:border-violet-300 transition-colors">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-red-100 flex items-center justify-center">
                    <span className="text-2xl">🇺🇸</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    TOEFL
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">
                    iBT & ITP
                  </p>
                  <p className="text-sm text-slate-600">
                    Enfoque en las 4 habilidades con ejercicios tipo examen.
                  </p>
                </div>

                {/* IELTS */}
                <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-200 hover:border-violet-300 transition-colors">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-green-100 flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    IELTS
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">
                    Academic & General
                  </p>
                  <p className="text-sm text-slate-600">
                    Estrategias específicas para cada módulo del examen.
                  </p>
                </div>

                {/* TOEIC */}
                <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-200 hover:border-violet-300 transition-colors">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-purple-100 flex items-center justify-center">
                    <span className="text-2xl">💼</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    TOEIC
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">
                    Listening & Reading
                  </p>
                  <p className="text-sm text-slate-600">
                    Inglés corporativo para contextos profesionales.
                  </p>
                </div>

                {/* Trinity */}
                <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-200 hover:border-violet-300 transition-colors">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-orange-100 flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Trinity
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">
                    GESE & ISE
                  </p>
                  <p className="text-sm text-slate-600">
                    Preparación para exámenes orales y integrados.
                  </p>
                </div>

                {/* Aptis */}
                <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-200 hover:border-violet-300 transition-colors">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-cyan-100 flex items-center justify-center">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Aptis
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">
                    British Council
                  </p>
                  <p className="text-sm text-slate-600">
                    Evaluación flexible de las 4 habilidades lingüísticas.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Methodology Section */}
        <section className="py-16 bg-slate-50">
          <Container>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-black text-slate-900 text-center mb-12">
                Nuestra Metodología
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-violet-100 flex items-center justify-center">
                    <span className="text-2xl">📖</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Contenido Alineado
                  </h3>
                  <p className="text-slate-600">
                    Cursos diseñados siguiendo exactamente los criterios de evaluación 
                    y formato de cada examen oficial.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-purple-100 flex items-center justify-center">
                    <span className="text-2xl">✍️</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Práctica Intensiva
                  </h3>
                  <p className="text-slate-600">
                    Ejercicios tipo examen, simulacros completos y feedback 
                    detallado para mejorar continuamente.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-pink-100 flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Estrategias Probadas
                  </h3>
                  <p className="text-slate-600">
                    Técnicas y estrategias específicas para maximizar tu 
                    puntuación en cada sección del examen.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-indigo-100 flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Seguimiento Detallado
                  </h3>
                  <p className="text-slate-600">
                    Monitoreo de tu progreso con análisis de fortalezas 
                    y áreas de mejora en cada habilidad.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Disclaimer Section */}
        <section className="py-12 bg-blue-50 border-y border-blue-200">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <span className="text-xl">ℹ️</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Información sobre Exámenes Oficiales
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Focus English no es un centro examinador autorizado ni está afiliado a 
                    instituciones certificadoras como Cambridge, TOEFL, IELTS o similares. 
                    Nuestros cursos de preparación están diseñados siguiendo los criterios 
                    de evaluación y requisitos de estos exámenes oficiales para ayudarte a 
                    prepararte de manera efectiva. Para obtener certificaciones oficiales, 
                    deberás inscribirte y presentar los exámenes directamente con las 
                    instituciones certificadoras correspondientes.
                  </p>
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
                Alcanza Tu Certificación
              </h2>
              <p className="text-lg mb-8 text-violet-100">
                Prepárate con confianza para tu examen oficial. Comienza tu curso 
                personalizado de 90 días hoy.
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
