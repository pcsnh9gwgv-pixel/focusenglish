import Link from "next/link";

const GOALS = ["trabajo", "viajes", "examenes"] as const;
const LEVELS = ["a1","a2","b1","b2","c1","c2"] as const;

type Goal = (typeof GOALS)[number];
type Level = (typeof LEVELS)[number];

const GOAL_LABEL: Record<Goal, string> = {
  trabajo: "Inglés para Trabajar",
  viajes: "Inglés para Viajar",
  examenes: "Preparación de Exámenes",
};

const GOAL_DESCRIPTION: Record<Goal, string> = {
  trabajo: "Curso especializado en inglés profesional para entornos laborales",
  viajes: "Curso práctico de inglés para viajes y situaciones cotidianas",
  examenes: "Preparación siguiendo criterios de evaluación de exámenes oficiales",
};

const LEVEL_LABEL: Record<Level, string> = {
  a1: "A1 - Principiante", 
  a2: "A2 - Elemental", 
  b1: "B1 - Intermedio", 
  b2: "B2 - Intermedio Alto", 
  c1: "C1 - Avanzado", 
  c2: "C2 - Maestría",
};

export default function CursoLandingPage({ params }: { params: { goal: string; level: string } }) {
  const goal = params.goal as Goal;
  const level = params.level as Level;

  if (!GOALS.includes(goal) || !LEVELS.includes(level)) {
    return (
      <main className="mx-auto max-w-[900px] px-4 py-12">
        <h1 className="text-2xl font-black">Curso no encontrado</h1>
        <Link className="mt-4 inline-block text-violet-700 font-black" href="/">
          Volver a Home →
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-[900px] px-4 py-12">
      <div className="text-[12px] font-extrabold text-slate-500 uppercase tracking-wide">Curso Especializado</div>
      <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900">
        {GOAL_LABEL[goal]} - Nivel {LEVEL_LABEL[level]}
      </h1>
      <p className="mt-3 text-slate-600">
        {GOAL_DESCRIPTION[goal]}. Programa personalizado de 90 días adaptado a tu nivel.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/signup"
          className="inline-flex h-11 items-center justify-center rounded-[14px] bg-violet-600 px-5 text-sm font-black text-white hover:brightness-95"
        >
          Inscribirme ahora →
        </Link>
        <Link
          href="/diagnostico"
          className="inline-flex h-11 items-center justify-center rounded-[14px] border border-slate-200 bg-white px-5 text-sm font-black text-slate-800 hover:bg-slate-50"
        >
          Hacer test de nivel
        </Link>
      </div>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-black text-slate-900 mb-4">Estructura del Programa</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600 font-black flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Mes 1: Fundamentos</h3>
              <p className="text-sm text-slate-600 mt-1">Construcción de base sólida adaptada a tu objetivo específico</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 font-black flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Mes 2: Práctica Intensiva</h3>
              <p className="text-sm text-slate-600 mt-1">Ejercicios prácticos y situaciones reales de tu área de interés</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600 font-black flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Mes 3: Consolidación</h3>
              <p className="text-sm text-slate-600 mt-1">Refinamiento y dominio de habilidades específicas</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-black text-slate-900 mb-3">Incluye:</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-violet-600 mt-1">✓</span>
            <span className="text-slate-700">Material didáctico especializado</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-violet-600 mt-1">✓</span>
            <span className="text-slate-700">Ejercicios prácticos semanales</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-violet-600 mt-1">✓</span>
            <span className="text-slate-700">Seguimiento personalizado de progreso</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-violet-600 mt-1">✓</span>
            <span className="text-slate-700">Acceso a plataforma 24/7</span>
          </li>
        </ul>
      </section>

      <div className="mt-8 p-6 rounded-xl bg-violet-50 border border-violet-200">
        <p className="text-sm text-slate-700">
          <strong className="text-slate-900">¿Necesitas orientación?</strong> Agenda una consulta gratuita 
          con nuestro equipo para identificar el mejor programa para ti.
        </p>
        <Link 
          href="/contact" 
          className="mt-3 inline-flex items-center text-violet-600 font-bold text-sm hover:text-violet-700"
        >
          Agendar consulta gratuita →
        </Link>
      </div>
    </main>
  );
}
