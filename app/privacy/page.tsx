import { Navigation } from "@/components/sections/Navigation";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Política de Privacidad | Focus English",
  description: "Información sobre cómo Focus English protege y utiliza tus datos personales.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-white to-slate-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-black text-slate-900 mb-6">
                Política de Privacidad
              </h1>
              <p className="text-lg text-slate-600 mb-8">
                Última actualización: Enero 2026
              </p>

              <div className="prose prose-slate max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Información que Recopilamos</h2>
                  <p className="text-slate-700 mb-4">
                    En Focus English, recopilamos información que nos proporcionas directamente cuando:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>Creas una cuenta</li>
                    <li>Realizas el test de nivel</li>
                    <li>Participas en nuestros cursos</li>
                    <li>Contactas con nuestro soporte</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Uso de la Información</h2>
                  <p className="text-slate-700 mb-4">
                    Utilizamos tu información para:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>Proporcionar y mejorar nuestros servicios</li>
                    <li>Personalizar tu experiencia de aprendizaje</li>
                    <li>Comunicarnos contigo sobre tu progreso</li>
                    <li>Enviar actualizaciones y noticias (con tu consentimiento)</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Protección de Datos</h2>
                  <p className="text-slate-700">
                    Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger 
                    tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Tus Derechos</h2>
                  <p className="text-slate-700 mb-4">
                    Tienes derecho a:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>Acceder a tu información personal</li>
                    <li>Rectificar datos incorrectos</li>
                    <li>Solicitar la eliminación de tus datos</li>
                    <li>Oponerte al procesamiento de tus datos</li>
                    <li>Solicitar la portabilidad de tus datos</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Contacto</h2>
                  <p className="text-slate-700">
                    Para cualquier consulta sobre esta política de privacidad, contacta con nosotros en: 
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