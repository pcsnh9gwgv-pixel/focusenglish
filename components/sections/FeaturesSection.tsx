import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { TargetIcon, ClockIcon, CertificateIcon } from "../ui/Icons";

const features = [
  {
    icon: TargetIcon,
    title: "Ruta de Aprendizaje Personalizada",
    description: "Currículum adaptativo ajustado a tu nivel CEFR actual (A1-C2) y objetivos profesionales.",
    color: "text-violet-600",
    bgColor: "bg-violet-100",
  },
  {
    icon: ClockIcon,
    title: "Programas Intensivos de 3 Semanas",
    description: "Planes semanales estructurados con ejercicios prácticos. Aprende más rápido con módulos eficientes.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: CertificateIcon,
    title: "Progreso Certificado CEFR",
    description: "Seguimiento con estándares reconocidos internacionalmente. Obtén logros certificados.",
    color: "text-pink-600",
    bgColor: "bg-pink-100",
  },
];

export function FeaturesSection() {
  return (
    <Section background="white" id="features">
      <Container>
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-balance">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Professional English training designed for busy professionals who want real results.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} hover className="text-center">
                <div className={`inline-flex p-4 rounded-2xl ${feature.bgColor} mb-5`}>
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Additional benefits */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-black text-violet-600">90</div>
            <div className="mt-1 text-sm font-medium text-slate-600">Días hasta la Fluidez</div>
          </div>
          <div>
            <div className="text-3xl font-black text-violet-600">1.500+</div>
            <div className="mt-1 text-sm font-medium text-slate-600">Estudiantes Activos</div>
          </div>
          <div>
            <div className="text-3xl font-black text-violet-600">95%</div>
            <div className="mt-1 text-sm font-medium text-slate-600">Tasa de Éxito</div>
          </div>
          <div>
            <div className="text-3xl font-black text-violet-600">24/7</div>
            <div className="mt-1 text-sm font-medium text-slate-600">Acceso al Aprendizaje</div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
