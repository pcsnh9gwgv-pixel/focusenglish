import Link from 'next/link';

export default function HomePage() {
  // ACCESO TEMPORAL PARA REVISIÓN
  // TODO: Restaurar redirect a /proximamente antes del lanzamiento público
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-950 via-slate-900 to-purple-950 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl font-black text-white mb-8">
          Focus English - Acceso Temporal
        </h1>
        <p className="text-xl text-slate-300 mb-12">
          Selecciona la sección que quieres revisar:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/certificaciones"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-8 px-6 rounded-2xl transition-all transform hover:scale-105 shadow-xl"
          >
            <div className="text-4xl mb-3">🎓</div>
            <div className="text-2xl font-black mb-2">Certificaciones</div>
            <div className="text-sm opacity-90">5 niveles CEFR completos</div>
          </Link>

          <Link
            href="/cursos-especializados"
            className="bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white font-bold py-8 px-6 rounded-2xl transition-all transform hover:scale-105 shadow-xl"
          >
            <div className="text-4xl mb-3">💼</div>
            <div className="text-2xl font-black mb-2">Cursos Especializados</div>
            <div className="text-sm opacity-90">Para trabajar y emigrar</div>
          </Link>

          <Link
            href="/cursos/marketing"
            className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold py-8 px-6 rounded-2xl transition-all transform hover:scale-105 shadow-xl"
          >
            <div className="text-4xl mb-3">📊</div>
            <div className="text-2xl font-black mb-2">Curso Marketing</div>
            <div className="text-sm opacity-90">B2 Completo</div>
          </Link>

          <Link
            href="/proximamente"
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-8 px-6 rounded-2xl transition-all transform hover:scale-105 shadow-xl"
          >
            <div className="text-4xl mb-3">🚀</div>
            <div className="text-2xl font-black mb-2">Próximamente</div>
            <div className="text-sm opacity-90">Landing pública</div>
          </Link>
        </div>

        <p className="text-slate-500 text-sm mt-12">
          ⚠️ Recuerda restaurar el redirect antes del lanzamiento público
        </p>
      </div>
    </main>
  );
}
