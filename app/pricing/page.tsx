import { Navigation } from "@/components/sections/Navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Precios | Focus English",
  description: "Planes y precios de Focus English. Encuentra el plan perfecto para tus objetivos de aprendizaje.",
};

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-white to-violet-50">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-black text-slate-900 mb-4">
                Elige Tu Plan
              </h1>
              <p className="text-xl text-slate-600">
                Invierte en tu futuro con nuestros planes de aprendizaje especializados
              </p>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Free Plan */}
                <div className="bg-white rounded-2xl p-8 border-2 border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Gratis
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-black text-slate-900">€0</span>
                    <span className="text-slate-600">/mes</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start text-sm">
                      <span className="mr-2 text-green-500">✓</span>
                      <span>Test de nivel gratuito</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="mr-2 text-green-500">✓</span>
                      <span>3 lecciones de prueba</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="mr-2 text-green-500">✓</span>
                      <span>Acceso al blog</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="mr-2 text-slate-300">✗</span>
                      <span className="text-slate-400">Cursos completos</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="mr-2 text-slate-300">✗</span>
                      <span className="text-slate-400">Certificados</span>
                    </li>
                  </ul>
                  <Button href="/signup" variant="secondary" className="w-full">
                    Empezar Gratis
                  </Button>
                </div>

                {/* Pro Plan */}
                <div className="bg-gradient-to-b from-violet-600 to-purple-600 rounded-2xl p-8 border-2 border-violet-600 relative">
                  <div className="absolute top-0 right-8 -translate-y-1/2">
                    <span className="bg-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold">
                      MÁS POPULAR
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Pro
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-black text-white">€49</span>
                    <span className="text-violet-200">/mes</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-white">
                    <li className="flex items-start text-sm">
                      <span className="mr-2">✓</span>
                      <span>Todo en Gratis</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="mr-2">✓</span>
                      <span>1 curso especializado completo</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="mr-2">✓</span>
                      <span>Seguimiento personalizado</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="mr-2">✓</span>
                      <span>Ejercicios ilimitados</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="mr-2">✓</span>
                      <span>Soporte prioritario</span>
                    </li>
                  </ul>
                  <Button href="/signup" variant="secondary" className="w-full bg-white text-violet-600 hover:bg-slate-50">
                    Empezar Ahora
                  </Button>
                </div>

                {/* Premium Plan */}
                <div className="bg-white rounded-2xl p-8 border-2 border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Premium
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-black text-slate-900">€99</span>
                    <span className="text-slate-600">/mes</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start text-sm">
                      <span className="mr-2 text-green-500">✓</span>
                      <span>Todo en Pro</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="mr-2 text-green-500">✓</span>
                      <span>Cursos ilimitados</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="mr-2 text-green-500">✓</span>
                      <span>Tutorías 1-on-1 (2h/mes)</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="mr-2 text-green-500">✓</span>
                      <span>Simulacros de exámenes</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="mr-2 text-green-500">✓</span>
                      <span>Soporte 24/7</span>
                    </li>
                  </ul>
                  <Button href="/signup" variant="secondary" className="w-full">
                    Empezar Ahora
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-slate-50">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                ¿Tienes preguntas?
              </h2>
              <p className="text-slate-600 mb-8">
                Contacta con nuestro equipo para encontrar el plan perfecto para ti
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="secondary" size="lg">
                  Contactar Ventas
                </Button>
                <Button href="#faq" variant="secondary" size="lg">
                  Ver Preguntas Frecuentes
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