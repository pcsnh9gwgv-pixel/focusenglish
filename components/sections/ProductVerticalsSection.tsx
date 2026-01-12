import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";

const verticals = [
  {
    id: "trabajo",
    emoji: "💼",
    title: "Inglés para el Trabajo",
    description: "Domina el inglés profesional para emails, llamadas, reuniones y presentaciones empresariales.",
    features: [
      "Emailing profesional",
      "Llamadas de negocios",
      "Reuniones efectivas",
      "Presentaciones",
      "Negociación",
    ],
    color: "from-violet-600 to-purple-600",
    href: "/trabajo",
  },
  {
    id: "viajes",
    emoji: "✈️",
    title: "Inglés para Viajar",
    description: "Comunícate con confianza en aeropuertos, hoteles, restaurantes y situaciones de turismo.",
    features: [
      "Aeropuertos y transporte",
      "Hoteles y alojamiento",
      "Restaurantes y comida",
      "Compras y ocio",
      "Emergencias",
    ],
    color: "from-blue-600 to-cyan-600",
    href: "/viajes",
  },
  {
    id: "certificados",
    emoji: "🎓",
    title: "Inglés para Certificados",
    description: "Prepárate para exámenes oficiales como Cambridge, TOEFL, IELTS y obtén tu certificación.",
    features: [
      "Cambridge (B1-C2)",
      "TOEFL iBT",
      "IELTS Academic",
      "Aptis",
      "Oxford Test",
    ],
    color: "from-emerald-600 to-teal-600",
    href: "/certificados",
  },
];

export function ProductVerticalsSection() {
  return (
    <Section background="white" id="verticales">
      <Container>
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-balance">
            Elige Tu Camino de Aprendizaje
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Programas especializados diseñados para tus objetivos específicos. En 90 días estarás listo.
          </p>
        </div>

        {/* Verticals grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {verticals.map((vertical) => (
            <Card key={vertical.id} hover padding="lg" className="flex flex-col">
              {/* Icon/Emoji */}
              <div className="mb-6">
                <div className={`inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-gradient-to-br ${vertical.color} text-4xl`}>
                  {vertical.emoji}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black text-slate-900 mb-3">
                {vertical.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                {vertical.description}
              </p>

              {/* Features list */}
              <ul className="space-y-2 mb-6">
                {vertical.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={vertical.href}
                className={`inline-flex items-center justify-center h-12 px-6 rounded-xl font-bold text-white bg-gradient-to-r ${vertical.color} hover:shadow-lg transition-all duration-200`}
              >
                Ver Programa →
              </a>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-black text-violet-600">90</div>
            <div className="mt-1 text-sm font-medium text-slate-600">Días de Programa</div>
          </div>
          <div>
            <div className="text-3xl font-black text-violet-600">3</div>
            <div className="mt-1 text-sm font-medium text-slate-600">Caminos Especializados</div>
          </div>
          <div>
            <div className="text-3xl font-black text-violet-600">CEFR</div>
            <div className="mt-1 text-sm font-medium text-slate-600">Certificación Oficial</div>
          </div>
          <div>
            <div className="text-3xl font-black text-violet-600">24/7</div>
            <div className="mt-1 text-sm font-medium text-slate-600">Acceso Ilimitado</div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
