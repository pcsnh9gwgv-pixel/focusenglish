import { Navigation } from "@/components/sections/Navigation";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Términos y Condiciones | Focus English",
  description: "Términos y condiciones de uso de la plataforma Focus English.",
};

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-white to-slate-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-black text-slate-900 mb-6">
                Términos y Condiciones
              </h1>
              <p className="text-lg text-slate-600 mb-8">
                Última actualización: Enero 2026
              </p>

              <div className="prose prose-slate max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Aceptación de Términos</h2>
                  <p className="text-slate-700">
                    Al acceder y utilizar Focus English, aceptas estar sujeto a estos términos y condiciones. 
                    Si no estás de acuerdo con alguna parte de estos términos, no deberías utilizar nuestros servicios.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Uso del Servicio</h2>
                  <p className="text-slate-700 mb-4">
                    Focus English proporciona cursos de inglés en línea. Te comprometes a:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>Utilizar el servicio solo para fines legales</li>
                    <li>No compartir tu cuenta con terceros</li>
                    <li>Mantener la confidencialidad de tus credenciales</li>
                    <li>No reproducir o distribuir el contenido sin autorización</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Propiedad Intelectual</h2>
                  <p className="text-slate-700">
                    Todo el contenido, diseños, logos y materiales disponibles en Focus English están protegidos 
                    por derechos de propiedad intelectual y son propiedad de Focus English o sus licenciantes.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Certificaciones y Exámenes</h2>
                  <p className="text-slate-700">
                    Focus English NO es un centro examinador oficial. Nuestros cursos están diseñados para 
                    prepararte para exámenes oficiales, pero las certificaciones deben obtenerse directamente 
                    de las instituciones certificadoras reconocidas.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Pagos y Reembolsos</h2>
                  <p className="text-slate-700">
                    Los precios de nuestros cursos están sujetos a cambios. Los reembolsos se procesarán 
                    de acuerdo con nuestra política de reembolsos, disponible en tu panel de usuario.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitación de Responsabilidad</h2>
                  <p className="text-slate-700">
                    Focus English no garantiza resultados específicos en exámenes oficiales. Nuestro servicio 
                    proporciona herramientas y contenido educativo, pero el éxito depende del esfuerzo y dedicación individual.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Modificaciones</h2>
                  <p className="text-slate-700">
                    Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones 
                    entrarán en vigor al ser publicadas en esta página.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contacto</h2>
                  <p className="text-slate-700">
                    Para preguntas sobre estos términos, contacta con: 
                    <a href="mailto:legal@focusenglish.com" className="text-violet-600 hover:text-violet-700 font-medium">
                      legal@focusenglish.com
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