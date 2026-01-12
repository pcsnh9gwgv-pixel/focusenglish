"use client";

import { useState } from "react";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { ChevronDownIcon } from "../ui/Icons";

const faqs = [
  {
    question: "¿Cuánto tiempo se tarda en ver resultados?",
    answer: "La mayoría de estudiantes ven mejoras significativas en las primeras 3 semanas. Nuestros programas intensivos están diseñados para progresar rápido con práctica diaria estructurada. En la semana 6, notarás ganancias sustanciales en confianza y fluidez.",
  },
  {
    question: "¿Qué nivel de inglés necesito para empezar?",
    answer: "Aceptamos estudiantes desde A1 (principiante) hasta C1 (avanzado). Haz nuestro test de nivel gratuito para determinar tu nivel actual. Nuestras rutas de aprendizaje adaptativas aseguran que tengas el desafío apropiado sin importar tu punto de partida.",
  },
  {
    question: "¿Cuánto tiempo necesito dedicar cada día?",
    answer: "Recomendamos 30-60 minutos diarios para resultados óptimos. Nuestro enfoque de micro-aprendizaje divide las lecciones en fragmentos manejables que encajan en agendas ocupadas. Puedes aprender durante el trayecto al trabajo, en el almuerzo o cuando te sea conveniente.",
  },
  {
    question: "¿Hay garantía de devolución?",
    answer: "¡Sí! Ofrecemos garantía de devolución de 14 días. Si no estás satisfecho con el programa en las primeras dos semanas, te devolvemos el dinero completo sin preguntas.",
  },
  {
    question: "¿Proporcionáis certificados?",
    answer: "¡Por supuesto! Al completar cada nivel, recibirás un certificado alineado con CEFR que puedes añadir a tu perfil de LinkedIn o CV. Nuestros certificados son reconocidos por empleadores en todo el mundo.",
  },
  {
    question: "¿Puedo practicar con personas reales?",
    answer: "¡Sí! Los planes Premium incluyen sesiones grupales en vivo con hablantes nativos de inglés y otros estudiantes. Tendrás oportunidades para conversaciones reales, juegos de rol de escenarios empresariales y recibir feedback personalizado.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section background="white" id="faq">
      <Container size="md">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-balance">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Todo lo que necesitas saber sobre Focus English.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-violet-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900 pr-4">{faq.question}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-violet-600 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 py-4 bg-slate-50 text-slate-700 leading-relaxed border-t border-slate-200">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional help */}
        <div className="mt-12 text-center">
          <p className="text-slate-600">
            Still have questions?{" "}
            <a href="mailto:support@focusenglish.com" className="text-violet-600 font-semibold hover:text-violet-700">
              Contact our support team
            </a>
          </p>
        </div>
      </Container>
    </Section>
  );
}
