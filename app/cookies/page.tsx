import { Navigation } from "@/components/sections/Navigation";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Política de Cookies | Focus English",
  description: "Información sobre el uso de cookies en Focus English.",
};

export default function CookiesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-white to-slate-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-black text-slate-900 mb-6">
                Política de Cookies
              </h1>
              <p className="text-lg text-slate-600 mb-8">
                Última actualización: Enero 2026
              </p>

              <div className="prose prose-slate max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Qué son las cookies</h2>
                  <p className="text-slate-700">
                    Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas 
                    nuestro sitio web. Nos ayudan a mejorar tu experiencia recordando tus preferencias y entendiendo 
                    cómo utilizas nuestro servicio.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Tipos de cookies que utilizamos</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Cookies Esenciales</h3>
                    <p className="text-slate-700">
                      Necesarias para el funcionamiento básico del sitio. Incluyen cookies de sesión y autenticación.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Cookies de Rendimiento</h3>
                    <p className="text-slate-700">
                      Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio, recopilando información 
                      de forma anónima sobre las páginas visitadas y errores encontrados.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Cookies de Funcionalidad</h3>
                    <p className="text-slate-700">
                      Permiten recordar tus preferencias (como idioma, progreso en lecciones) para ofrecerte 
                      una experiencia más personalizada.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Cookies de Marketing</h3>
                    <p className="text-slate-700">
                      Se utilizan para rastrear visitantes en sitios web con el fin de mostrar anuncios relevantes 
                      y atractivos para el usuario individual.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Cómo gestionar las cookies</h2>
                  <p className="text-slate-700 mb-4">
                    Puedes controlar y/o eliminar las cookies según desees. Puedes eliminar todas las cookies 
                    que ya estén en tu dispositivo y puedes configurar la mayoría de los navegadores para que no las acepten.
                  </p>
                  <p className="text-slate-700">
                    Sin embargo, ten en cuenta que si haces esto, es posible que tengas que ajustar manualmente 
                    algunas preferencias cada vez que visites un sitio y que algunos servicios y funciones no funcionen.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Contacto</h2>
                  <p className="text-slate-700">
                    Si tienes preguntas sobre nuestra política de cookies, contacta con: 
                    <a href="mailto:privacy@focusenglish.com" className="text-violet-600 hover:text-violet-700 font-medium">
                      privacy@focusenglish.com
                    </a>
                  </p>
                </section>
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