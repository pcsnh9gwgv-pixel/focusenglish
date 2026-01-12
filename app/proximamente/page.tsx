'use client';

import { useState } from 'react';

export default function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setErrorMessage(data.error || 'Error al registrar el email');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Error de conexión. Inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-slate-900 to-purple-950 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Logo y Brand */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center text-white font-black text-3xl shadow-2xl">
              F
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white">
              Focus English
            </h1>
          </div>
          
          {/* Mensaje Principal */}
          <div className="mb-8">
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400 mb-4">
              Próximamente
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-2">
              Estamos preparando algo increíble
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Cursos de inglés especializados para trabajar, viajar o preparar exámenes oficiales. 
              Programas personalizados de 90 días diseñados para resultados reales.
            </p>
          </div>

          {/* Características destacadas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-white font-bold mb-2">Especializado</h3>
              <p className="text-slate-400 text-sm">
                Cursos adaptados a tus objetivos específicos
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-white font-bold mb-2">90 Días</h3>
              <p className="text-slate-400 text-sm">
                Programas intensivos con resultados medibles
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="text-white font-bold mb-2">Personalizado</h3>
              <p className="text-slate-400 text-sm">
                Metodología adaptada a tu nivel y ritmo
              </p>
            </div>
          </div>

          {/* Formulario de suscripción */}
          <div className="max-w-md mx-auto">
            <h3 className="text-white text-xl font-bold mb-4">
              Sé el primero en saberlo
            </h3>
            <p className="text-slate-400 mb-6">
              Regístrate y te avisaremos cuando lancemos oficialmente
            </p>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  disabled={isLoading}
                  className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? 'Enviando...' : 'Notificarme'}
                </button>
              </form>
            ) : (
              <div className="bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-xl p-4 text-green-300 font-semibold">
                ✓ ¡Gracias! Te avisaremos cuando estemos listos
              </div>
            )}
            
            {errorMessage && (
              <div className="mt-3 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-xl p-4 text-red-300 text-sm">
                {errorMessage}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-slate-500 text-sm">
              © 2026 Focus English. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>

      {/* Efectos de fondo */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
