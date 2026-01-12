import { Navigation } from "@/components/sections/Navigation";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

export const metadata = {
  title: "Regístrate Gratis | Focus English",
  description: "Crea tu cuenta gratuita en Focus English y comienza tu viaje de aprendizaje de inglés personalizado.",
};

export default function SignupPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen bg-gradient-to-b from-white to-slate-50">
        <Container>
          <div className="max-w-md mx-auto py-12">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-black text-slate-900 mb-2">
                Empieza Gratis Hoy
              </h1>
              <p className="text-slate-600">
                Crea tu cuenta y accede a cursos personalizados de inglés
              </p>
            </div>

            {/* Signup Form */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
              {/* Social Signup */}
              <div className="space-y-3 mb-6">
                <button className="w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-300 text-slate-700 font-semibold py-3 px-6 rounded-lg hover:bg-slate-50 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continuar con Google
                </button>

                <button className="w-full flex items-center justify-center gap-3 bg-slate-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-slate-800 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                  Continuar con GitHub
                </button>
              </div>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-slate-500">o con email</span>
                </div>
              </div>

              <form className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-colors"
                    placeholder="Juan Pérez"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-slate-900 mb-2">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-colors"
                    placeholder="Mínimo 8 caracteres"
                  />
                  <p className="mt-1 text-xs text-slate-500">
                    Usa al menos 8 caracteres con letras y números
                  </p>
                </div>

                {/* Terms */}
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    required
                    className="w-4 h-4 mt-1 text-violet-600 border-slate-300 rounded focus:ring-violet-500"
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-slate-700">
                    Acepto los{" "}
                    <Link href="/terms" className="text-violet-600 hover:text-violet-700 font-medium">
                      términos y condiciones
                    </Link>{" "}
                    y la{" "}
                    <Link href="/privacy" className="text-violet-600 hover:text-violet-700 font-medium">
                      política de privacidad
                    </Link>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Crear Cuenta Gratis
                </button>
              </form>

              {/* Features */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm font-semibold text-slate-900 mb-3">
                  ✨ Lo que obtienes con tu cuenta:
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Acceso gratuito a lecciones introductorias</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Test de nivel personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Plan de aprendizaje de 90 días</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Seguimiento de progreso detallado</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Login Link */}
            <p className="text-center mt-6 text-sm text-slate-600">
              ¿Ya tienes una cuenta?{" "}
              <Link href="/login" className="text-violet-600 hover:text-violet-700 font-semibold">
                Inicia sesión
              </Link>
            </p>
          </div>
        </Container>
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
