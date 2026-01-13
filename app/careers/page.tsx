import { Navigation } from "@/components/sections/Navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Trabaja con Nosotros | Focus English",
  description: "Únete al equipo de Focus English y ayuda a transformar el aprendizaje del inglés.",
};

export default function CareersPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-white to-violet-50">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-black text-slate-900 mb-6">
                Trabaja con Nosotros
              </h1>
              <p className="text-xl text-slate-600">
                Únete a nuestro equipo y ayuda a miles de personas a alcanzar 
                sus objetivos con el inglés.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-black text-slate-900 mb-4 text-center">
                Posiciones Abiertas
              </h2>
              <p className="text-center text-slate-600 mb-12">
                Actualmente no tenemos vacantes abiertas, pero siempre estamos buscando talento excepcional.
              </p>

              <div className="bg-slate-50 rounded-2xl p-12 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-violet-100 flex items-center justify-center">
                  <span className="text-4xl">📩</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Envíanos tu CV
                </h3>
                <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                  Aunque no tengamos una posición abierta que coincida con tu perfil ahora, 
                  nos encantaría conocerte. Envíanos tu CV y nos pondremos en contacto cuando 
                  surja una oportunidad.
                </p>
                <Button href="mailto:careers@focusenglish.com" size="lg">
                  Enviar CV a careers@focusenglish.com
                </Button>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-slate-50">
          <Container>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">
                ¿Por qué Focus English?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-violet-100 flex items-center justify-center">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Innovación
                  </h3>
                  <p className="text-slate-600">
                    Trabaja con tecnologías modernas y metodologías innovadoras de enseñanza.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-100 flex items-center justify-center">
                    <span className="text-3xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Trabajo Remoto
                  </h3>
                  <p className="text-slate-600">
                    Trabaja desde donde quieras con horarios flexibles.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-pink-100 flex items-center justify-center">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Impacto Real
                  </h3>
                  <p className="text-slate-600">
                    Ayuda a miles de personas a alcanzar sus metas profesionales y personales.
                  </p>
                </div>
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