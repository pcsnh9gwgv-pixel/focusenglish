import { Navigation } from "@/components/sections/Navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Inglés para Viajar | Focus English",
  description: "Aprende inglés práctico para viajar con confianza. Conversaciones en aeropuertos, hoteles, restaurantes y situaciones de viaje.",
};

export default function ViajesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-violet-50 py-16 sm:py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-semibold text-violet-700">
                <span className="mr-2">✈️</span>
                <span>Inglés para Viajeros</span>
              </div>

              <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Viaja{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                  Sin Barreras
                </span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
                Aprende el inglés esencial para viajar con confianza. Desde hacer check-in 
                hasta pedir direcciones, maneja cualquier situación de viaje.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" href="/signup">
                  Empieza Tu Curso →
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
                    <span className="text-2xl">🛫</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Aeropuertos & Vuelos
                  </h3>
                  <p className="text-slate-600">
                    Check-in, control de seguridad, cambios de vuelo y comunicación 
                    con personal de aerolíneas.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-purple-100 flex items-center justify-center">
                    <span className="text-2xl">🏨</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Hoteles & Alojamiento
                  </h3>
                  <p className="text-slate-600">
                    Reservas, check-in/out, solicitar servicios y resolver 
                    problemas de alojamiento.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-pink-100 flex items-center justify-center">
                    <span className="text-2xl">🍽️</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Restaurantes & Comida
                  </h3>
                  <p className="text-slate-600">
                    Pide comida, entiende menús, solicita recomendaciones y 
                    maneja situaciones en restaurantes.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-indigo-100 flex items-center justify-center">
                    <span className="text-2xl">🗺️</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Direcciones & Transporte
                  </h3>
                  <p className="text-slate-600">
                    Pregunta por direcciones, usa transporte público y maneja 
                    situaciones de movilidad.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-cyan-100 flex items-center justify-center">
                    <span className="text-2xl">🛍️</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Compras & Souvenirs
                  </h3>
                  <p className="text-slate-600">
                    Pregunta precios, negocia, compra productos y maneja 
                    devoluciones o cambios.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-orange-100 flex items-center justify-center">
                    <span className="text-2xl">🚨</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Emergencias
                  </h3>
                  <p className="text-slate-600">
                    Vocabulario esencial para situaciones de emergencia, 
                    hospitales y ayuda.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Program Structure */}
        <section className="py-16 bg-slate-50">
          <Container>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-black text-slate-900 text-center mb-4">
                Programa de 90 Días
              </h2>
              <p className="text-center text-slate-600 mb-12">
                Aprende paso a paso todo lo que necesitas
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border-2 border-violet-200">
                  <div className="text-violet-600 font-bold mb-2">Mes 1</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    Fundamentos del Viaje
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Aeropuertos y vuelos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Hoteles y reservas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Saludos y presentaciones</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border-2 border-violet-200">
                  <div className="text-violet-600 font-bold mb-2">Mes 2</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    Situaciones Cotidianas
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Restaurantes y comida</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Compras y souvenirs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Transporte local</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border-2 border-violet-200">
                  <div className="text-violet-600 font-bold mb-2">Mes 3</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    Dominio Total
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Emergencias y ayuda</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Cultura y etiqueta</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Práctica integrada</span>
                    </li>
                  </ul>
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
                Prepárate Para Tu Próximo Viaje
              </h2>
              <p className="text-lg mb-8 text-violet-100">
                Viaja con confianza sabiendo que puedes comunicarte en cualquier situación. 
                Comienza tu curso hoy.
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
                  href="/cursos-especializados"
                  variant="secondary"
                  size="lg"
                  className="bg-violet-700 text-white hover:bg-violet-800"
                >
                  Ver Más Cursos
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
