import Link from "next/link";

export function SpecializedCoursesPromo() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            ¿Buscas Inglés para Tu Sector Profesional?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Descubre nuestros cursos especializados basados en datos reales de demanda laboral en España y Europa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* España */}
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">🇪🇸</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Trabajar en España
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              Sectores con mayor demanda de inglés según InfoJobs
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2 text-sm">
                <span className="text-violet-600">•</span>
                <span className="text-slate-700">Marketing (40%)</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-violet-600">•</span>
                <span className="text-slate-700">Ingeniería (42%)</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-violet-600">•</span>
                <span className="text-slate-700">Administración (45%)</span>
              </li>
            </ul>
          </div>

          {/* Irlanda */}
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">🇮🇪</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Emigrar a Irlanda
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              Inglés esencial para multinacionales en Dublín
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2 text-sm">
                <span className="text-purple-600">•</span>
                <span className="text-slate-700">Tech & Software</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-purple-600">•</span>
                <span className="text-slate-700">Customer Support</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-purple-600">•</span>
                <span className="text-slate-700">Sales & Business Dev</span>
              </li>
            </ul>
          </div>

          {/* Otros destinos */}
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">🇪🇺</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Otros Destinos Europa
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              Programas para Países Bajos, Alemania, Luxemburgo y Malta
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2 text-sm">
                <span className="text-blue-600">•</span>
                <span className="text-slate-700">Finance & Funds</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-blue-600">•</span>
                <span className="text-slate-700">Logistics & Operations</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-blue-600">•</span>
                <span className="text-slate-700">iGaming & Hospitality</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/cursos-especializados"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all text-lg"
          >
            Ver Todos los Cursos Especializados
            <span>→</span>
          </Link>
          <p className="mt-4 text-sm text-slate-600">
            📊 Basados en datos reales de portales de empleo • 🎯 Vocabulario específico de tu sector
          </p>
        </div>
      </div>
    </section>
  );
}
