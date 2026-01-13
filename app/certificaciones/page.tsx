import Link from "next/link";
import Image from "next/image";

const certifications = [
  {
    id: 'a1',
    level: 'A1',
    title: 'Preparación Certificación A1',
    subtitle: 'Beginner - Inicia tu camino en el inglés',
    duration: '6 semanas',
    lessons: 24,
    price: '149€',
    color: 'amber',
    gradient: 'from-amber-500 to-orange-400',
    features: [
      'Duración: 6 semanas',
      'Nivel: A1 (Beginner)',
      'Base sólida desde cero',
      'Ideal para principiantes absolutos'
    ],
    badge: 'Desde cero',
    imageUrl: 'https://www.genspark.ai/api/files/s/jZjn2JRH?cache_control=3600'
  },
  {
    id: 'a2',
    level: 'A2',
    title: 'Preparación Certificación A2',
    subtitle: 'Elementary - Fundamentos sólidos del inglés',
    duration: '8 semanas',
    lessons: 32,
    price: '199€',
    color: 'orange',
    gradient: 'from-orange-500 to-yellow-500',
    features: [
      'Duración: 8 semanas',
      'Nivel: A2 (Elementary)',
      'Clases interactivas y dinámicas',
      'Material de práctica incluido'
    ],
    badge: 'Para principiantes',
    imageUrl: 'https://www.genspark.ai/api/files/s/jZjn2JRH?cache_control=3600'
  },
  {
    id: 'b1',
    level: 'B1',
    title: 'Preparación Certificación B1',
    subtitle: 'Intermediate - Tu primer paso hacia la certificación',
    duration: '10 semanas',
    lessons: 40,
    price: '249€',
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500',
    features: [
      'Duración: 10 semanas',
      'Nivel: B1 (Intermediate)',
      'Grupos reducidos (max 8 personas)',
      'Seguimiento personalizado'
    ],
    badge: 'Ideal para empezar',
    imageUrl: 'https://www.genspark.ai/api/files/s/ka1EyVqE?cache_control=3600'
  },
  {
    id: 'b2',
    level: 'B2',
    title: 'Preparación Certificación B2',
    subtitle: 'Upper-Intermediate - Domina el inglés profesional',
    duration: '12 semanas',
    lessons: 48,
    price: '299€',
    color: 'blue',
    gradient: 'from-blue-500 to-purple-500',
    features: [
      'Duración: 12 semanas',
      'Nivel: B2 (Upper-Intermediate)',
      'Online + Clases en vivo',
      'Exámenes de práctica incluidos'
    ],
    badge: 'Más popular',
    imageUrl: 'https://www.genspark.ai/api/files/s/s4TYhOI2?cache_control=3600'
  },
  {
    id: 'c1',
    level: 'C1',
    title: 'Preparación Certificación C1',
    subtitle: 'Advanced - Inglés avanzado reconocido internacionalmente',
    duration: '14 semanas',
    lessons: 56,
    price: '449€',
    color: 'green',
    gradient: 'from-green-500 to-teal-500',
    features: [
      'Duración: 14 semanas',
      'Nivel: C1 (Advanced)',
      'Online + Tutorías individuales',
      '90% tasa de aprobación'
    ],
    badge: '90% éxito',
    imageUrl: 'https://www.genspark.ai/api/files/s/Aoq56qIE?cache_control=3600'
  },
  {
    id: 'c2',
    level: 'C2',
    title: 'Preparación Certificación C2',
    subtitle: 'Proficiency - Maestría total del inglés',
    duration: '16 semanas',
    lessons: 64,
    price: '599€',
    color: 'indigo',
    gradient: 'from-indigo-600 to-purple-600',
    features: [
      'Duración: 16 semanas',
      'Nivel: C2 (Proficiency)',
      'Preparación intensiva personalizada',
      'Tutorías 1-on-1 incluidas'
    ],
    badge: 'Nivel más alto',
    imageUrl: 'https://www.genspark.ai/api/files/s/KNUuV0Uo?cache_control=3600'
  }
];

export default function CertificacionesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-violet-700">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
              Prepárate para tu
              <span className="block mt-2">Certificación Oficial de Inglés</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100">
              Cursos especializados para todos los niveles CEFR
            </p>
            
            {/* Stats */}
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6">
                <div className="text-3xl font-black text-white">2000+</div>
                <div className="mt-1 text-sm text-blue-100">Estudiantes certificados</div>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6">
                <div className="text-3xl font-black text-white">95%</div>
                <div className="mt-1 text-sm text-blue-100">Tasa de éxito</div>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6">
                <div className="text-3xl font-black text-white">100%</div>
                <div className="mt-1 text-sm text-blue-100">Garantía de calidad</div>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="#cursos"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-black text-violet-600 shadow-xl hover:bg-blue-50 transition-all hover:scale-105"
              >
                Descubre tu nivel
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div id="cursos" className="relative bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              Elige tu Nivel de Certificación
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Todos nuestros cursos preparan para exámenes oficiales reconocidos internacionalmente
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <Link
                key={cert.id}
                href={`/certificaciones/${cert.id}`}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Badge */}
                <div className={`absolute top-4 right-4 z-10 rounded-full bg-gradient-to-r ${cert.gradient} px-4 py-1 text-xs font-black text-white shadow-lg`}>
                  {cert.badge}
                </div>

                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`text-6xl font-black bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent`}>
                      {cert.level}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-gray-900 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {cert.subtitle}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {cert.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <svg className={`mr-2 h-5 w-5 flex-shrink-0 text-${cert.color}-500`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-black text-gray-900">{cert.price}</div>
                      <div className="text-xs text-gray-500">Pago único</div>
                    </div>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${cert.gradient} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              ¿Por qué prepararte con nosotros?
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Material Oficial</h3>
              <p className="text-sm text-gray-600">Practicas con ejemplos reales de exámenes oficiales</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Profesores Certificados</h3>
              <p className="text-sm text-gray-600">Instructores con experiencia en preparación de exámenes</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Exámenes de Práctica</h3>
              <p className="text-sm text-gray-600">Simulacros completos en condiciones reales de examen</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Resultados Rápidos</h3>
              <p className="text-sm text-gray-600">95% de aprobados en primera convocatoria</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-4">
            ¿No estás seguro de tu nivel?
          </h2>
          <p className="text-xl text-violet-100 mb-8">
            Realiza nuestro test gratuito y descubre qué curso es el mejor para ti
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/diagnostico"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-black text-violet-600 shadow-xl hover:bg-blue-50 transition-all"
            >
              Hacer test de nivel gratis
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-base font-black text-white hover:bg-white/10 transition-all"
            >
              Hablar con un asesor
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
