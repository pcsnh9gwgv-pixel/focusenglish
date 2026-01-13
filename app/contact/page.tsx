import { Navigation } from "@/components/sections/Navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Contacto | Focus English",
  description: "¿Tienes preguntas? Contacta con el equipo de Focus English.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-white to-violet-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-black text-slate-900 mb-4">
                  Contacta con Nosotros
                </h1>
                <p className="text-lg text-slate-600">
                  ¿Tienes preguntas? Estamos aquí para ayudarte
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Envíanos un Mensaje
                  </h2>
                  <form className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Nombre
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Mensaje
                      </label>
                      <textarea
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none resize-none"
                        placeholder="¿En qué podemos ayudarte?"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all"
                    >
                      Enviar Mensaje
                    </button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-violet-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">📧</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                        <a href="mailto:hello@focusenglish.com" className="text-violet-600 hover:text-violet-700">
                          hello@focusenglish.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">💬</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">Soporte</h3>
                        <a href="mailto:support@focusenglish.com" className="text-violet-600 hover:text-violet-700">
                          support@focusenglish.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">⏰</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">Horario</h3>
                        <p className="text-slate-600 text-sm">
                          Lunes a Viernes<br />
                          9:00 - 18:00 (CET)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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