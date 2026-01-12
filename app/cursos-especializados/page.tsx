import { Navigation } from "@/components/sections/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cursos de Inglés Especializados | Focus English",
  description: "Cursos de inglés especializados por sectores profesionales. Aprende el inglés específico que necesitas para tu carrera en España o Europa.",
};

export default function CursosEspecializadosPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6">
                Inglés Especializado para{" "}
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Tu Carrera Profesional
                </span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Cursos diseñados específicamente para los sectores con mayor demanda de inglés en España y Europa
              </p>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl font-black text-violet-600 mb-2">40%</div>
                <div className="text-sm text-slate-600">Ofertas en Marketing requieren inglés</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl font-black text-violet-600 mb-2">42%</div>
                <div className="text-sm text-slate-600">Puestos en Ingeniería exigen idiomas</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl font-black text-violet-600 mb-2">45%</div>
                <div className="text-sm text-slate-600">Vacantes en Administración con inglés</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl font-black text-violet-600 mb-2">100%</div>
                <div className="text-sm text-slate-600">Organismos Internacionales lo requieren</div>
              </div>
            </div>
          </div>
        </section>

        {/* Selector de Objetivo */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-center mb-12">¿Cuál es tu objetivo?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a href="#espana" className="group bg-slate-800 hover:bg-slate-700 p-8 rounded-2xl transition-all border-2 border-transparent hover:border-violet-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center text-2xl">
                    🇪🇸
                  </div>
                  <h3 className="text-2xl font-black">Trabajar en España</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  Cursos especializados para sectores con alta demanda de inglés en el mercado español
                </p>
                <div className="flex items-center text-violet-400 font-semibold group-hover:gap-3 gap-2 transition-all">
                  Ver cursos <span>→</span>
                </div>
              </a>

              <a href="#europa" className="group bg-slate-800 hover:bg-slate-700 p-8 rounded-2xl transition-all border-2 border-transparent hover:border-purple-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-2xl">
                    🇪🇺
                  </div>
                  <h3 className="text-2xl font-black">Emigrar a Europa</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  Inglés profesional para trabajar en Irlanda, Países Bajos, Alemania, Luxemburgo o Malta
                </p>
                <div className="flex items-center text-purple-400 font-semibold group-hover:gap-3 gap-2 transition-all">
                  Ver cursos <span>→</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Cursos para España */}
        <section id="espana" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-900 mb-4">
                Cursos para Trabajar en España
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Basados en datos de InfoJobs y portales de empleo españoles
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Marketing y Comunicación */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-black text-white">Marketing y Comunicación</h3>
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-bold">
                      40% demanda
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
                      <span className="font-bold text-slate-900">Nivel recomendado:</span>
                      <span className="text-slate-600">B2-C1</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
                      <span className="font-bold text-slate-900">Duración:</span>
                      <span className="text-slate-600">12 semanas</span>
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-slate-900 mb-3">Lo que aprenderás:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 mt-1">✓</span>
                      <span className="text-slate-600">Marketing digital y términos técnicos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 mt-1">✓</span>
                      <span className="text-slate-600">Presentaciones de campañas en inglés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 mt-1">✓</span>
                      <span className="text-slate-600">Email marketing y copywriting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 mt-1">✓</span>
                      <span className="text-slate-600">Reuniones con stakeholders internacionales</span>
                    </li>
                  </ul>

                  <div className="bg-violet-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-violet-900 font-semibold">
                      💼 Puestos típicos: Marketing Manager, Content Strategist, Social Media Manager, Brand Manager
                    </p>
                  </div>

                  <button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-shadow">
                    Más información
                  </button>
                </div>
              </div>

              {/* Ingenieros y Técnicos */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-black text-white">Ingenieros y Técnicos</h3>
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-bold">
                      41% demanda
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="font-bold text-slate-900">Nivel recomendado:</span>
                      <span className="text-slate-600">B2-C1</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="font-bold text-slate-900">Duración:</span>
                      <span className="text-slate-600">12 semanas</span>
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-slate-900 mb-3">Lo que aprenderás:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span className="text-slate-600">Documentación técnica en inglés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span className="text-slate-600">Reuniones de proyecto y stand-ups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span className="text-slate-600">Vocabulario IT y desarrollo software</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span className="text-slate-600">Presentaciones técnicas y code reviews</span>
                    </li>
                  </ul>

                  <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-blue-900 font-semibold">
                      💼 Puestos típicos: Software Engineer, DevOps, QA Engineer, Data Engineer, Cloud Architect
                    </p>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-shadow">
                    Más información
                  </button>
                </div>
              </div>

              {/* Administración de Empresas */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-black text-white">Administración de Empresas</h3>
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-bold">
                      45% demanda
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      <span className="font-bold text-slate-900">Nivel recomendado:</span>
                      <span className="text-slate-600">B2-C1</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      <span className="font-bold text-slate-900">Duración:</span>
                      <span className="text-slate-600">12 semanas</span>
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-slate-900 mb-3">Lo que aprenderás:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span className="text-slate-600">Finanzas corporativas y reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span className="text-slate-600">Negociaciones comerciales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span className="text-slate-600">Gestión de equipos internacionales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span className="text-slate-600">Correspondence y emails profesionales</span>
                    </li>
                  </ul>

                  <div className="bg-emerald-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-emerald-900 font-semibold">
                      💼 Puestos típicos: Office Manager, Business Analyst, Project Manager, Operations Manager
                    </p>
                  </div>

                  <button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-shadow">
                    Más información
                  </button>
                </div>
              </div>

              {/* Legal y Compliance */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-black text-white">Legal y Compliance</h3>
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-bold">
                      40% demanda
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      <span className="font-bold text-slate-900">Nivel recomendado:</span>
                      <span className="text-slate-600">C1-C2</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      <span className="font-bold text-slate-900">Duración:</span>
                      <span className="text-slate-600">16 semanas</span>
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-slate-900 mb-3">Lo que aprenderás:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">✓</span>
                      <span className="text-slate-600">Terminología legal específica</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">✓</span>
                      <span className="text-slate-600">Redacción de contratos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">✓</span>
                      <span className="text-slate-600">Compliance y regulaciones internacionales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">✓</span>
                      <span className="text-slate-600">Due diligence y auditorías</span>
                    </li>
                  </ul>

                  <div className="bg-amber-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-amber-900 font-semibold">
                      💼 Puestos típicos: Legal Counsel, Compliance Officer, Contract Manager, Regulatory Specialist
                    </p>
                  </div>

                  <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-shadow">
                    Más información
                  </button>
                </div>
              </div>

              {/* Comercio Exterior */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-rose-600 to-pink-600 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-black text-white">Comercio Exterior</h3>
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-bold">
                      51% demanda
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-rose-600 rounded-full"></div>
                      <span className="font-bold text-slate-900">Nivel recomendado:</span>
                      <span className="text-slate-600">B2-C1</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-rose-600 rounded-full"></div>
                      <span className="font-bold text-slate-900">Duración:</span>
                      <span className="text-slate-600">12 semanas</span>
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-slate-900 mb-3">Lo que aprenderás:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 mt-1">✓</span>
                      <span className="text-slate-600">Negociación con proveedores internacionales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 mt-1">✓</span>
                      <span className="text-slate-600">Incoterms y documentación aduanera</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 mt-1">✓</span>
                      <span className="text-slate-600">Supply chain management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 mt-1">✓</span>
                      <span className="text-slate-600">Presentaciones a clientes B2B</span>
                    </li>
                  </ul>

                  <div className="bg-rose-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-rose-900 font-semibold">
                      💼 Puestos típicos: Export Manager, Import Specialist, International Sales, Supply Chain Coordinator
                    </p>
                  </div>

                  <button className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-shadow">
                    Más información
                  </button>
                </div>
              </div>

              {/* Farmacéutico y Life Sciences */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-black text-white">Farmacéutico y Life Sciences</h3>
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-bold">
                      39% demanda
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      <span className="font-bold text-slate-900">Nivel recomendado:</span>
                      <span className="text-slate-600">B2-C1</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      <span className="font-bold text-slate-900">Duración:</span>
                      <span className="text-slate-600">12 semanas</span>
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-slate-900 mb-3">Lo que aprenderás:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span className="text-slate-600">Terminología médica y farmacéutica</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span className="text-slate-600">Investigación y ensayos clínicos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span className="text-slate-600">Regulatory affairs y farmacovigilancia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span className="text-slate-600">Medical writing y publicaciones</span>
                    </li>
                  </ul>

                  <div className="bg-teal-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-teal-900 font-semibold">
                      💼 Puestos típicos: Clinical Research Associate, Regulatory Affairs, Medical Writer, Quality Assurance
                    </p>
                  </div>

                  <button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-shadow">
                    Más información
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cursos para Europa */}
        <section id="europa" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-900 mb-4">
                Cursos para Emigrar a Europa
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Programas específicos por país con vocabulario y situaciones reales del mercado laboral europeo
              </p>
            </div>

            {/* Selector de País */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="px-6 py-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow font-semibold text-slate-900 border-2 border-violet-600">
                🇮🇪 Irlanda
              </button>
              <button className="px-6 py-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow font-semibold text-slate-700 border-2 border-slate-200 hover:border-violet-600">
                🇳🇱 Países Bajos
              </button>
              <button className="px-6 py-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow font-semibold text-slate-700 border-2 border-slate-200 hover:border-violet-600">
                🇩🇪 Alemania
              </button>
              <button className="px-6 py-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow font-semibold text-slate-700 border-2 border-slate-200 hover:border-violet-600">
                🇱🇺 Luxemburgo
              </button>
              <button className="px-6 py-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow font-semibold text-slate-700 border-2 border-slate-200 hover:border-violet-600">
                🇲🇹 Malta
              </button>
            </div>

            {/* Irlanda - Cursos */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Tech & IT */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-6">
                  <div className="text-2xl mb-2">💻</div>
                  <h3 className="text-xl font-black text-white">Tech & IT para Irlanda</h3>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-bold px-3 py-1 rounded-full">
                      B2-C1 requerido
                    </span>
                  </div>
                  
                  <h4 className="font-bold text-slate-900 mb-3">Roles objetivo:</h4>
                  <ul className="space-y-2 mb-4 text-sm">
                    <li className="text-slate-600">• Software Engineer</li>
                    <li className="text-slate-600">• DevOps Engineer</li>
                    <li className="text-slate-600">• Data Analyst/Engineer</li>
                    <li className="text-slate-600">• QA Engineer</li>
                  </ul>

                  <h4 className="font-bold text-slate-900 mb-3">Incluye:</h4>
                  <ul className="space-y-2 mb-4 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-0.5">✓</span>
                      <span className="text-slate-600">Inglés técnico IT</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-0.5">✓</span>
                      <span className="text-slate-600">Entrevistas técnicas en inglés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-0.5">✓</span>
                      <span className="text-slate-600">CV y LinkedIn para el mercado irlandés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-0.5">✓</span>
                      <span className="text-slate-600">Búsqueda en portales (Indeed.ie, LinkedIn)</span>
                    </li>
                  </ul>

                  <button className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-shadow text-sm">
                    Ver programa completo
                  </button>
                </div>
              </div>

              {/* Customer Support */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
                  <div className="text-2xl mb-2">🎧</div>
                  <h3 className="text-xl font-black text-white">Customer Support Irlanda</h3>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full">
                      B1-B2 requerido
                    </span>
                  </div>
                  
                  <h4 className="font-bold text-slate-900 mb-3">Roles objetivo:</h4>
                  <ul className="space-y-2 mb-4 text-sm">
                    <li className="text-slate-600">• Customer Support Agent</li>
                    <li className="text-slate-600">• Technical Support</li>
                    <li className="text-slate-600">• Customer Experience</li>
                    <li className="text-slate-600">• Helpdesk Specialist</li>
                  </ul>

                  <h4 className="font-bold text-slate-900 mb-3">Incluye:</h4>
                  <ul className="space-y-2 mb-4 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">✓</span>
                      <span className="text-slate-600">Atención telefónica en inglés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">✓</span>
                      <span className="text-slate-600">Email y chat support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">✓</span>
                      <span className="text-slate-600">Resolución de problemas técnicos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">✓</span>
                      <span className="text-slate-600">Role-plays con situaciones reales</span>
                    </li>
                  </ul>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-shadow text-sm">
                    Ver programa completo
                  </button>
                </div>
              </div>

              {/* Sales & Business Development */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-6">
                  <div className="text-2xl mb-2">📈</div>
                  <h3 className="text-xl font-black text-white">Sales & BD Irlanda</h3>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full">
                      B2-C1 requerido
                    </span>
                  </div>
                  
                  <h4 className="font-bold text-slate-900 mb-3">Roles objetivo:</h4>
                  <ul className="space-y-2 mb-4 text-sm">
                    <li className="text-slate-600">• Sales Development Rep (SDR)</li>
                    <li className="text-slate-600">• Account Executive</li>
                    <li className="text-slate-600">• Business Development</li>
                    <li className="text-slate-600">• Partner Manager</li>
                  </ul>

                  <h4 className="font-bold text-slate-900 mb-3">Incluye:</h4>
                  <ul className="space-y-2 mb-4 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-0.5">✓</span>
                      <span className="text-slate-600">Cold calling y prospección</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-0.5">✓</span>
                      <span className="text-slate-600">Presentaciones de ventas B2B</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-0.5">✓</span>
                      <span className="text-slate-600">Negociación y cierre de deals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-0.5">✓</span>
                      <span className="text-slate-600">CRM y reporting en inglés</span>
                    </li>
                  </ul>

                  <button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-shadow text-sm">
                    Ver programa completo
                  </button>
                </div>
              </div>
            </div>

            {/* Otros países - Vista resumida */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
              <h3 className="text-2xl font-black text-slate-900 mb-6">Otros destinos europeos</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Países Bajos */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🇳🇱</span>
                    <h4 className="text-xl font-bold text-slate-900">Países Bajos</h4>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">
                    Especialización en logística, customer service y roles corporativos. Inglés como lengua de trabajo en Randstad.
                  </p>
                  <ul className="space-y-1 text-sm text-slate-600 mb-4">
                    <li>• Warehouse & Logistics (B1-B2)</li>
                    <li>• Customer Service Multilingüe (B2)</li>
                    <li>• Marketing Digital (B2-C1)</li>
                  </ul>
                  <a href="#" className="text-blue-600 font-semibold text-sm hover:underline">
                    Ver cursos para Países Bajos →
                  </a>
                </div>

                {/* Alemania */}
                <div className="border-l-4 border-red-600 pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🇩🇪</span>
                    <h4 className="text-xl font-bold text-slate-900">Alemania</h4>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">
                    Inglés en startups, tech y multinacionales. Berlín y Múnich lideran en empleos English-speaking.
                  </p>
                  <ul className="space-y-1 text-sm text-slate-600 mb-4">
                    <li>• IT & Software (B2-C1)</li>
                    <li>• Finance Operations (B2-C1)</li>
                    <li>• Engineering (B2)</li>
                  </ul>
                  <a href="#" className="text-red-600 font-semibold text-sm hover:underline">
                    Ver cursos para Alemania →
                  </a>
                </div>

                {/* Luxemburgo */}
                <div className="border-l-4 border-yellow-600 pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🇱🇺</span>
                    <h4 className="text-xl font-bold text-slate-900">Luxemburgo</h4>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">
                    Hub financiero europeo. Inglés esencial en fondos, banca y compliance.
                  </p>
                  <ul className="space-y-1 text-sm text-slate-600 mb-4">
                    <li>• Fund Administrator (B2-C1)</li>
                    <li>• Compliance & AML (C1)</li>
                    <li>• Accounting & Audit (B2-C1)</li>
                  </ul>
                  <a href="#" className="text-yellow-600 font-semibold text-sm hover:underline">
                    Ver cursos para Luxemburgo →
                  </a>
                </div>

                {/* Malta */}
                <div className="border-l-4 border-amber-600 pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🇲🇹</span>
                    <h4 className="text-xl font-bold text-slate-900">Malta</h4>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">
                    iGaming capital y customer support hubs. Inglés + español muy valorado.
                  </p>
                  <ul className="space-y-1 text-sm text-slate-600 mb-4">
                    <li>• iGaming Customer Support (B1-B2)</li>
                    <li>• VIP Account Manager (B2-C1)</li>
                    <li>• Hospitality (B1-B2)</li>
                  </ul>
                  <a href="#" className="text-amber-600 font-semibold text-sm hover:underline">
                    Ver cursos para Malta →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metodología */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4">Nuestra Metodología</h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Todos nuestros cursos especializados siguen el método Focus English probado
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-violet-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  🎯
                </div>
                <h3 className="text-xl font-bold mb-2">Situaciones Reales</h3>
                <p className="text-slate-300 text-sm">
                  Casos y vocabulario específico de tu sector profesional
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  👥
                </div>
                <h3 className="text-xl font-bold mb-2">Role-plays Laborales</h3>
                <p className="text-slate-300 text-sm">
                  Practica reuniones, presentaciones y negociaciones reales
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  📝
                </div>
                <h3 className="text-xl font-bold mb-2">Material Auténtico</h3>
                <p className="text-slate-300 text-sm">
                  Emails, contratos, informes y documentos reales de tu industria
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  🎓
                </div>
                <h3 className="text-xl font-bold mb-2">Certificación CEFR</h3>
                <p className="text-slate-300 text-sm">
                  Certificado oficial reconocido por empresas europeas
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              ¿Listo para impulsar tu carrera?
            </h2>
            <p className="text-xl mb-8 text-violet-100">
              Habla con nuestro equipo y descubre qué curso especializado es el mejor para ti
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-violet-600 px-8 py-4 rounded-lg font-bold hover:shadow-2xl transition-shadow text-lg">
                Agendar Consulta Gratuita
              </button>
              <button className="bg-violet-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-violet-800 transition-colors text-lg border-2 border-white/20">
                Descargar Catálogo PDF
              </button>
            </div>
            <p className="mt-6 text-sm text-violet-200">
              🎁 Consulta sin compromiso • 📊 Test de nivel incluido • 💳 Planes de pago flexibles
            </p>
          </div>
        </section>

        {/* Recursos EURES */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🇪🇺</div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">
                    Recursos para Buscar Empleo en Europa
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Además de tu formación en inglés, te ayudamos a navegar el mercado laboral europeo con recursos oficiales:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 mt-1">→</span>
                      <span className="text-slate-700">
                        <strong>EURES Job Portal:</strong> Búsqueda oficial de empleo en la UE con filtros por país e idioma
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 mt-1">→</span>
                      <span className="text-slate-700">
                        <strong>Guías por país:</strong> Condiciones de vida, salarios, requisitos y proceso de aplicación
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 mt-1">→</span>
                      <span className="text-slate-700">
                        <strong>Orientación laboral:</strong> CV europeo, entrevistas y adaptación cultural
                      </span>
                    </li>
                  </ul>
                  <a 
                    href="https://eures.europa.eu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                  >
                    Visitar EURES Portal
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center text-white font-black">
                  F
                </div>
                <span className="text-lg font-black">Focus English</span>
              </div>
              <p className="text-sm text-slate-400">
                Cursos especializados de inglés para profesionales que quieren avanzar en su carrera.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-3">Cursos España</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Marketing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ingeniería</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Finanzas</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3">Cursos Europa</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Irlanda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Países Bajos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Alemania</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Luxemburgo</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3">Contacto</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Consulta Gratuita</a></li>
                <li><a href="#" className="hover:text-white transition-colors">WhatsApp</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Email</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
            <p>© 2026 Focus English. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
