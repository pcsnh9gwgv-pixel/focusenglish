import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-violet-700 py-20 sm:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-white to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-white to-transparent rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-white/30 bg-white/10 backdrop-blur px-4 py-2 text-sm font-semibold text-white">
            <span className="mr-2">🚀</span>
            <span>Comienza Tu Viaje Hoy</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white text-balance">
            ¿Listo para Transformar tu Inglés?
          </h2>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-violet-100 text-balance">
            Únete a más de 1.500 profesionales que eligieron Focus English. Empieza gratis hoy—sin tarjeta de crédito.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              href="/signup"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto bg-white text-violet-600 hover:bg-violet-50 shadow-xl"
            >
              Empieza Gratis →
            </Button>
            <Button
              href="/placement-test"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white text-white hover:bg-white/10"
            >
              Haz el Test de Nivel
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-violet-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Sin tarjeta de crédito</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Garantía de 14 días</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Cancela cuando quieras</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
