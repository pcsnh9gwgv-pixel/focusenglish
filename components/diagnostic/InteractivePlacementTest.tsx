"use client";

import { useState } from "react";
import { Button } from "../ui/Button";

// Tipos
type TestGoal = "travel" | "work" | "exams" | null;
type WorkSector = "marketing" | "engineering" | "administration" | "sales" | "hospitality" | "education" | null;

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  category: "grammar" | "vocabulary" | "reading" | "practical";
  context?: string;
}

interface TestResult {
  goal: TestGoal;
  sector?: WorkSector;
  level: string;
  score: number;
  totalQuestions: number;
  categoryScores: {
    grammar: number;
    vocabulary: number;
    reading: number;
    practical: number;
  };
  strengths: string[];
  improvements: string[];
  recommendedCourse: string;
  nextSteps: string[];
}

// Banco de preguntas para VIAJES
const travelQuestions: Question[] = [
  // A1
  {
    id: 1,
    question: "At the airport: 'Where is the ___ to gate 24?'",
    options: ["way", "road", "street", "path"],
    correctAnswer: 0,
    level: "A1",
    category: "vocabulary",
    context: "Airport navigation"
  },
  {
    id: 2,
    question: "Hotel check-in: 'I ___ a reservation under Smith.'",
    options: ["has", "have", "having", "had"],
    correctAnswer: 1,
    level: "A1",
    category: "grammar",
    context: "Hotel"
  },
  // A2
  {
    id: 3,
    question: "At a restaurant: 'Could I ___ the menu, please?'",
    options: ["look", "watch", "see", "view"],
    correctAnswer: 2,
    level: "A2",
    category: "practical",
    context: "Restaurant"
  },
  {
    id: 4,
    question: "Asking for directions: 'How ___ is the museum from here?'",
    options: ["long", "far", "much", "many"],
    correctAnswer: 1,
    level: "A2",
    category: "vocabulary",
  },
  // B1
  {
    id: 5,
    question: "Flight delay: 'Our flight has been ___ due to bad weather.'",
    options: ["cancelled", "stopped", "finished", "ended"],
    correctAnswer: 0,
    level: "B1",
    category: "vocabulary",
    context: "Airport problems"
  },
  {
    id: 6,
    question: "Hotel complaint: 'I'm afraid there ___ a problem with the heating.'",
    options: ["has", "is", "are", "have"],
    correctAnswer: 1,
    level: "B1",
    category: "grammar",
  },
  // B2
  {
    id: 7,
    question: "Travel insurance: 'The policy covers all medical expenses ___ you travel within Europe.'",
    options: ["as long as", "despite", "although", "unless"],
    correctAnswer: 0,
    level: "B2",
    category: "reading",
  },
  {
    id: 8,
    question: "Customs: 'Do you have anything to ___?'",
    options: ["announce", "declare", "inform", "report"],
    correctAnswer: 1,
    level: "B2",
    category: "vocabulary",
    context: "Customs and immigration"
  },
  // C1
  {
    id: 9,
    question: "Travel advisory: 'Tourists are advised to remain ___ due to civil unrest.'",
    options: ["careful", "vigilant", "attentive", "watchful"],
    correctAnswer: 1,
    level: "C1",
    category: "vocabulary",
  },
  {
    id: 10,
    question: "Complaint: '___ I informed about the cancellation earlier, I could have made alternative arrangements.'",
    options: ["If I was", "Had I been", "Would I be", "Should I be"],
    correctAnswer: 1,
    level: "C1",
    category: "grammar",
  },
];

// Banco de preguntas para MARKETING
const marketingQuestions: Question[] = [
  // A2-B1
  {
    id: 11,
    question: "Our new campaign will ___ on social media next week.",
    options: ["start", "launch", "begin", "open"],
    correctAnswer: 1,
    level: "B1",
    category: "vocabulary",
    context: "Campaign management"
  },
  {
    id: 12,
    question: "We need to ___ our target audience more precisely.",
    options: ["define", "make", "do", "create"],
    correctAnswer: 0,
    level: "B1",
    category: "vocabulary",
  },
  // B2
  {
    id: 13,
    question: "The ROI of this campaign ___ our expectations.",
    options: ["overcome", "exceeded", "passed", "crossed"],
    correctAnswer: 1,
    level: "B2",
    category: "vocabulary",
    context: "Analytics"
  },
  {
    id: 14,
    question: "Read: 'Our brand positioning leverages aspirational messaging to drive engagement.' What does 'leverages' mean?",
    options: ["Ignores", "Uses strategically", "Avoids", "Questions"],
    correctAnswer: 1,
    level: "B2",
    category: "reading",
  },
  // C1
  {
    id: 15,
    question: "The campaign's ___ approach resonated with millennials.",
    options: ["old", "traditional", "disruptive", "normal"],
    correctAnswer: 2,
    level: "C1",
    category: "vocabulary",
    context: "Strategy"
  },
];

// Banco de preguntas para INGENIERÍA
const engineeringQuestions: Question[] = [
  // B1
  {
    id: 16,
    question: "We need to ___ the system before deployment.",
    options: ["prove", "try", "test", "check"],
    correctAnswer: 2,
    level: "B1",
    category: "vocabulary",
    context: "Testing"
  },
  {
    id: 17,
    question: "The API ___ with the previous version.",
    options: ["is compatible", "compatible", "compatibility", "compatibles"],
    correctAnswer: 0,
    level: "B1",
    category: "grammar",
  },
  // B2
  {
    id: 18,
    question: "The system architecture needs to be more ___.",
    options: ["big", "scalable", "large", "expanded"],
    correctAnswer: 1,
    level: "B2",
    category: "vocabulary",
    context: "Architecture"
  },
  {
    id: 19,
    question: "Read: 'The implementation of microservices entails decomposing the monolith.' What does 'entails' mean?",
    options: ["Prevents", "Requires", "Avoids", "Simplifies"],
    correctAnswer: 1,
    level: "B2",
    category: "reading",
  },
  // C1
  {
    id: 20,
    question: "The algorithm's time complexity is ___ to O(n log n).",
    options: ["near", "close", "asymptotic", "similar"],
    correctAnswer: 2,
    level: "C1",
    category: "vocabulary",
    context: "Algorithms"
  },
];

// Banco de preguntas para ADMINISTRACIÓN
const administrationQuestions: Question[] = [
  // B1
  {
    id: 21,
    question: "Please ___ the expense report by Friday.",
    options: ["give", "send", "submit", "pass"],
    correctAnswer: 2,
    level: "B1",
    category: "vocabulary",
    context: "Reports"
  },
  {
    id: 22,
    question: "The budget ___ approved by the board.",
    options: ["has been", "have been", "was being", "were"],
    correctAnswer: 0,
    level: "B1",
    category: "grammar",
  },
  // B2
  {
    id: 23,
    question: "We need to ___ our financial procedures.",
    options: ["make better", "improve", "streamline", "fix"],
    correctAnswer: 2,
    level: "B2",
    category: "vocabulary",
    context: "Process improvement"
  },
  {
    id: 24,
    question: "The quarterly results show a significant ___ in revenue.",
    options: ["grow", "growth", "growing", "grew"],
    correctAnswer: 1,
    level: "B2",
    category: "grammar",
  },
  // C1
  {
    id: 25,
    question: "The audit revealed several ___ in our compliance procedures.",
    options: ["problems", "issues", "discrepancies", "mistakes"],
    correctAnswer: 2,
    level: "C1",
    category: "vocabulary",
    context: "Compliance"
  },
];

// Banco de preguntas para EXÁMENES
const examQuestions: Question[] = [
  // Mix de todos los niveles - estilo examen oficial
  {
    id: 26,
    question: "Grammar: She ___ to Paris three times this year.",
    options: ["goes", "has been", "went", "is going"],
    correctAnswer: 1,
    level: "B1",
    category: "grammar",
  },
  {
    id: 27,
    question: "Vocabulary: The concert was ___; everyone loved it.",
    options: ["terrible", "boring", "outstanding", "normal"],
    correctAnswer: 2,
    level: "B1",
    category: "vocabulary",
  },
  {
    id: 28,
    question: "Reading: 'Despite the inclement weather, the event proceeded as planned.' What does 'inclement' mean?",
    options: ["Beautiful", "Bad", "Warm", "Clear"],
    correctAnswer: 1,
    level: "B2",
    category: "reading",
  },
  {
    id: 29,
    question: "Grammar: ___ harder, he would have passed the exam.",
    options: ["If he studied", "Had he studied", "If he studies", "Should he study"],
    correctAnswer: 1,
    level: "C1",
    category: "grammar",
  },
  {
    id: 30,
    question: "Vocabulary: The speaker's argument was ___; nobody could refute it.",
    options: ["weak", "wrong", "irrefutable", "simple"],
    correctAnswer: 2,
    level: "C1",
    category: "vocabulary",
  },
];

// Preguntas generales (gramática base para todos)
const generalQuestions: Question[] = [
  {
    id: 31,
    question: "I ___ English for three years.",
    options: ["study", "am studying", "have been studying", "studied"],
    correctAnswer: 2,
    level: "B1",
    category: "grammar",
  },
  {
    id: 32,
    question: "If I ___ you, I would accept the offer.",
    options: ["am", "was", "were", "be"],
    correctAnswer: 2,
    level: "B2",
    category: "grammar",
  },
  {
    id: 33,
    question: "The project ___ by next month.",
    options: ["will complete", "will be completed", "completes", "is completing"],
    correctAnswer: 1,
    level: "B1",
    category: "grammar",
  },
  {
    id: 34,
    question: "She denied ___ the money.",
    options: ["to take", "taking", "take", "took"],
    correctAnswer: 1,
    level: "B2",
    category: "grammar",
  },
  {
    id: 35,
    question: "Scarcely ___ when it started to rain.",
    options: ["we arrived", "had we arrived", "we had arrived", "did we arrive"],
    correctAnswer: 1,
    level: "C1",
    category: "grammar",
  },
];

export function InteractivePlacementTest() {
  const [goal, setGoal] = useState<TestGoal>(null);
  const [sector, setSector] = useState<WorkSector>(null);
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<TestResult | null>(null);
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);

  const handleGoalSelect = (selectedGoal: TestGoal) => {
    setGoal(selectedGoal);
    if (selectedGoal !== "work") {
      // Para viajes y exámenes, ir directo al test
      prepareTest(selectedGoal, null);
    }
  };

  const handleSectorSelect = (selectedSector: WorkSector) => {
    setSector(selectedSector);
    prepareTest("work", selectedSector);
  };

  const prepareTest = (testGoal: TestGoal, workSector: WorkSector) => {
    let specificQuestions: Question[] = [];
    
    // Seleccionar preguntas según objetivo
    if (testGoal === "travel") {
      specificQuestions = [...travelQuestions];
    } else if (testGoal === "exams") {
      specificQuestions = [...examQuestions];
    } else if (testGoal === "work" && workSector) {
      switch (workSector) {
        case "marketing":
          specificQuestions = [...marketingQuestions];
          break;
        case "engineering":
          specificQuestions = [...engineeringQuestions];
          break;
        case "administration":
          specificQuestions = [...administrationQuestions];
          break;
        default:
          specificQuestions = [...marketingQuestions]; // Default
      }
    }

    // Agregar preguntas generales
    const allQuestions = [...specificQuestions, ...generalQuestions];
    
    // Seleccionar 15 preguntas variadas
    const selectedQs = shuffleAndSelect(allQuestions, 15);
    setSelectedQuestions(selectedQs);
  };

  const shuffleAndSelect = (questions: Question[], count: number): Question[] => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  const handleStart = () => {
    setStarted(true);
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const handleAnswerSelect = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
    setSelectedAnswer(null);

    if (currentQuestion < selectedQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (userAnswers: number[]) => {
    let correctCount = 0;
    const categoryScores = { grammar: 0, vocabulary: 0, reading: 0, practical: 0 };
    const categoryTotals = { grammar: 0, vocabulary: 0, reading: 0, practical: 0 };

    selectedQuestions.forEach((q, index) => {
      categoryTotals[q.category]++;
      if (userAnswers[index] === q.correctAnswer) {
        correctCount++;
        categoryScores[q.category]++;
      }
    });

    const percentage = (correctCount / selectedQuestions.length) * 100;
    let level = "A1";
    let recommendedCourse = "";
    let nextSteps: string[] = [];

    // Determinar nivel
    if (percentage >= 90) level = "C2";
    else if (percentage >= 80) level = "C1";
    else if (percentage >= 70) level = "B2";
    else if (percentage >= 60) level = "B1";
    else if (percentage >= 45) level = "A2";
    else level = "A1";

    // Recomendaciones específicas por objetivo
    if (goal === "travel") {
      recommendedCourse = level >= "B1" 
        ? `Inglés Avanzado para Viajes (${level})`
        : `Inglés Esencial para Viajeros (${level})`;
      nextSteps = [
        "Practicar conversaciones en aeropuertos y hoteles",
        "Aprender frases para emergencias",
        "Mejorar pronunciación para comunicación clara"
      ];
    } else if (goal === "exams") {
      recommendedCourse = level >= "B2"
        ? `Preparación ${level} - Cambridge/IELTS`
        : `Preparación de Base para Exámenes (${level})`;
      nextSteps = [
        "Practicar con exámenes de prueba",
        "Mejorar técnicas de examen",
        "Estudiar estrategias específicas por sección"
      ];
    } else if (goal === "work") {
      const sectorName = sector === "marketing" ? "Marketing" 
        : sector === "engineering" ? "Ingeniería"
        : sector === "administration" ? "Administración" : "Profesional";
      recommendedCourse = `Inglés ${sectorName} - Nivel ${level}`;
      nextSteps = [
        "Practicar vocabulario técnico del sector",
        "Mejorar redacción de emails profesionales",
        "Preparar presentaciones en inglés"
      ];
    }

    // Fortalezas y mejoras
    const strengths: string[] = [];
    const improvements: string[] = [];

    Object.entries(categoryScores).forEach(([cat, score]) => {
      const total = categoryTotals[cat as keyof typeof categoryTotals];
      if (total === 0) return;
      
      const catPercentage = (score / total) * 100;
      const categoryName = 
        cat === "grammar" ? "Gramática" 
        : cat === "vocabulary" ? "Vocabulario"
        : cat === "reading" ? "Comprensión lectora"
        : "Habilidades prácticas";
      
      if (catPercentage >= 70) {
        strengths.push(categoryName);
      } else if (catPercentage < 50) {
        improvements.push(categoryName);
      }
    });

    setResult({
      goal,
      sector,
      level,
      score: correctCount,
      totalQuestions: selectedQuestions.length,
      categoryScores: {
        grammar: categoryTotals.grammar > 0 ? Math.round((categoryScores.grammar / categoryTotals.grammar) * 100) : 0,
        vocabulary: categoryTotals.vocabulary > 0 ? Math.round((categoryScores.vocabulary / categoryTotals.vocabulary) * 100) : 0,
        reading: categoryTotals.reading > 0 ? Math.round((categoryScores.reading / categoryTotals.reading) * 100) : 0,
        practical: categoryTotals.practical > 0 ? Math.round((categoryScores.practical / categoryTotals.practical) * 100) : 0,
      },
      strengths: strengths.length > 0 ? strengths : ["Fundamentos básicos"],
      improvements: improvements.length > 0 ? improvements : ["Mantener nivel actual"],
      recommendedCourse,
      nextSteps,
    });

    setShowResult(true);
  };

  const progress = selectedQuestions.length > 0 ? ((currentQuestion + 1) / selectedQuestions.length) * 100 : 0;
  const question = selectedQuestions[currentQuestion];

  // Pantalla de selección de objetivo
  if (!goal) {
    return (
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">
            ¿Cuál es tu objetivo con el inglés?
          </h2>
          <p className="text-lg text-slate-600">
            Selecciona tu objetivo para recibir un test personalizado
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Viajes */}
          <button
            onClick={() => handleGoalSelect("travel")}
            className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-violet-500 hover:shadow-xl transition-all group text-left"
          >
            <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-4xl">✈️</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Para Viajar
            </h3>
            <p className="text-slate-600 mb-4">
              Evalúa tu inglés para situaciones de viaje: aeropuertos, hoteles, restaurantes y turismo.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Vocabulario de viajes</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Situaciones prácticas</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Frases esenciales</span>
              </li>
            </ul>
          </button>

          {/* Trabajo */}
          <button
            onClick={() => handleGoalSelect("work")}
            className="bg-white rounded-2xl p-8 border-2 border-violet-300 hover:border-violet-500 hover:shadow-xl transition-all group text-left shadow-lg"
          >
            <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-4xl">💼</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Para Trabajar
            </h3>
            <p className="text-slate-600 mb-4">
              Test especializado según tu sector profesional: marketing, ingeniería, administración y más.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Vocabulario técnico</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Contexto profesional</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Por sectores</span>
              </li>
            </ul>
            <div className="mt-4 text-violet-600 font-semibold text-sm group-hover:text-violet-700">
              → Siguiente: Elige tu sector
            </div>
          </button>

          {/* Exámenes */}
          <button
            onClick={() => handleGoalSelect("exams")}
            className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-violet-500 hover:shadow-xl transition-all group text-left"
          >
            <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-4xl">🎓</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Para Certificarme
            </h3>
            <p className="text-slate-600 mb-4">
              Evaluación estilo exámenes oficiales: Cambridge, TOEFL, IELTS. Mide tu preparación.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Formato de examen</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Gramática académica</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Comprensión avanzada</span>
              </li>
            </ul>
          </button>
        </div>
      </div>
    );
  }

  // Pantalla de selección de sector (solo para trabajo)
  if (goal === "work" && !sector) {
    return (
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => setGoal(null)}
          className="mb-8 text-violet-600 hover:text-violet-700 font-semibold flex items-center"
        >
          ← Volver a objetivos
        </button>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">
            ¿En qué sector trabajas?
          </h2>
          <p className="text-lg text-slate-600">
            Personaliza el test según tu área profesional
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Marketing */}
          <button
            onClick={() => handleSectorSelect("marketing")}
            className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-violet-500 hover:shadow-xl transition-all group text-left"
          >
            <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-4xl">📱</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Marketing
            </h3>
            <p className="text-slate-600">
              Campañas, ROI, branding, redes sociales, análisis de mercado.
            </p>
          </button>

          {/* Ingeniería */}
          <button
            onClick={() => handleSectorSelect("engineering")}
            className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-violet-500 hover:shadow-xl transition-all group text-left"
          >
            <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-4xl">⚙️</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Ingeniería
            </h3>
            <p className="text-slate-600">
              Desarrollo, testing, arquitectura, APIs, documentación técnica.
            </p>
          </button>

          {/* Administración */}
          <button
            onClick={() => handleSectorSelect("administration")}
            className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-violet-500 hover:shadow-xl transition-all group text-left"
          >
            <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-4xl">📊</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Administración
            </h3>
            <p className="text-slate-600">
              Finanzas, reportes, compliance, presupuestos, auditorías.
            </p>
          </button>
        </div>
      </div>
    );
  }

  // Pantalla de inicio del test
  if (!started) {
    const goalIcon = goal === "travel" ? "✈️" : goal === "work" ? "💼" : "🎓";
    const goalName = goal === "travel" ? "Viajes" : goal === "work" ? "Trabajo" : "Certificaciones";
    const sectorName = sector === "marketing" ? " - Marketing" 
      : sector === "engineering" ? " - Ingeniería"
      : sector === "administration" ? " - Administración" : "";

    return (
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => {
            setGoal(null);
            setSector(null);
          }}
          className="mb-8 text-violet-600 hover:text-violet-700 font-semibold flex items-center"
        >
          ← Cambiar objetivo
        </button>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center">
              <span className="text-4xl">{goalIcon}</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-2">
              Test de Nivel: {goalName}{sectorName}
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Evaluación personalizada para tu objetivo específico
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-black text-violet-600 mb-2">15</div>
              <div className="text-sm text-slate-600">Preguntas</div>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-black text-violet-600 mb-2">10</div>
              <div className="text-sm text-slate-600">Minutos</div>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-black text-violet-600 mb-2">A1-C2</div>
              <div className="text-sm text-slate-600">Niveles</div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <h3 className="font-bold text-slate-900">Este test incluye:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 text-violet-600">✓</span>
                <span className="text-slate-700">Preguntas específicas para {goalName.toLowerCase()}{sectorName.toLowerCase()}</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-violet-600">✓</span>
                <span className="text-slate-700">Vocabulario y situaciones del contexto real</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-violet-600">✓</span>
                <span className="text-slate-700">Evaluación CEFR con análisis detallado</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-violet-600">✓</span>
                <span className="text-slate-700">Recomendaciones personalizadas de cursos</span>
              </li>
            </ul>
          </div>

          <Button
            onClick={handleStart}
            size="lg"
            className="w-full"
          >
            Comenzar Test Personalizado →
          </Button>
        </div>
      </div>
    );
  }

  // Pantalla de resultados
  if (showResult && result) {
    const levelColors = {
      A1: "bg-green-100 text-green-700 border-green-200",
      A2: "bg-green-100 text-green-700 border-green-200",
      B1: "bg-blue-100 text-blue-700 border-blue-200",
      B2: "bg-violet-100 text-violet-700 border-violet-200",
      C1: "bg-purple-100 text-purple-700 border-purple-200",
      C2: "bg-purple-100 text-purple-700 border-purple-200",
    };

    const levelColor = levelColors[result.level as keyof typeof levelColors] || levelColors.B1;

    const goalIcon = result.goal === "travel" ? "✈️" : result.goal === "work" ? "💼" : "🎓";
    const goalName = result.goal === "travel" ? "Viajes" : result.goal === "work" ? "Trabajo" : "Certificaciones";

    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12">
          {/* Header con resultado */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center">
              <span className="text-5xl">🎉</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-4">
              ¡Test Completado!
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl">{goalIcon}</span>
              <span className="text-lg text-slate-600">{goalName}</span>
              {result.sector && (
                <span className="text-lg text-slate-600">
                  - {result.sector === "marketing" ? "Marketing" : result.sector === "engineering" ? "Ingeniería" : "Administración"}
                </span>
              )}
            </div>
            <div className={`inline-block px-6 py-3 rounded-full border-2 ${levelColor} font-black text-2xl mb-4`}>
              Nivel: {result.level}
            </div>
            <p className="text-lg text-slate-600">
              Has respondido correctamente {result.score} de {result.totalQuestions} preguntas
            </p>
          </div>

          {/* Análisis por categoría */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Análisis por Habilidad</h3>
            <div className="space-y-4">
              {result.categoryScores.grammar > 0 && (
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-700">Gramática</span>
                    <span className="text-sm font-bold text-violet-600">{result.categoryScores.grammar}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-violet-600 to-purple-600 h-3 rounded-full transition-all"
                      style={{ width: `${result.categoryScores.grammar}%` }}
                    />
                  </div>
                </div>
              )}

              {result.categoryScores.vocabulary > 0 && (
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-700">Vocabulario</span>
                    <span className="text-sm font-bold text-violet-600">{result.categoryScores.vocabulary}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-violet-600 to-purple-600 h-3 rounded-full transition-all"
                      style={{ width: `${result.categoryScores.vocabulary}%` }}
                    />
                  </div>
                </div>
              )}

              {result.categoryScores.reading > 0 && (
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-700">Comprensión Lectora</span>
                    <span className="text-sm font-bold text-violet-600">{result.categoryScores.reading}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-violet-600 to-purple-600 h-3 rounded-full transition-all"
                      style={{ width: `${result.categoryScores.reading}%` }}
                    />
                  </div>
                </div>
              )}

              {result.categoryScores.practical > 0 && (
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-700">Habilidades Prácticas</span>
                    <span className="text-sm font-bold text-violet-600">{result.categoryScores.practical}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-violet-600 to-purple-600 h-3 rounded-full transition-all"
                      style={{ width: `${result.categoryScores.practical}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Fortalezas y áreas de mejora */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h4 className="font-bold text-green-900 mb-3 flex items-center">
                <span className="mr-2">💪</span>
                Fortalezas
              </h4>
              <ul className="space-y-2">
                {result.strengths.map((strength, index) => (
                  <li key={index} className="text-sm text-green-800">• {strength}</li>
                ))}
              </ul>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <h4 className="font-bold text-orange-900 mb-3 flex items-center">
                <span className="mr-2">📈</span>
                Áreas de Mejora
              </h4>
              <ul className="space-y-2">
                {result.improvements.map((improvement, index) => (
                  <li key={index} className="text-sm text-orange-800">• {improvement}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recomendación de curso */}
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 border-2 border-violet-200 mb-6">
            <h4 className="font-bold text-slate-900 mb-2 flex items-center">
              <span className="mr-2">🎯</span>
              Curso Recomendado
            </h4>
            <p className="text-slate-700 font-semibold mb-4">{result.recommendedCourse}</p>
            
            <h5 className="font-bold text-slate-900 mb-2 text-sm">Próximos Pasos:</h5>
            <ul className="space-y-2 mb-4">
              {result.nextSteps.map((step, index) => (
                <li key={index} className="text-sm text-slate-700">
                  {index + 1}. {step}
                </li>
              ))}
            </ul>

            <Button href="/cursos-especializados" size="sm">
              Ver Cursos Especializados →
            </Button>
          </div>

          {/* Acciones */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => {
                setGoal(null);
                setSector(null);
                setStarted(false);
                setShowResult(false);
              }}
              variant="secondary"
              className="flex-1"
            >
              Hacer Otro Test
            </Button>
            <Button
              href="/signup"
              className="flex-1"
            >
              Empezar a Aprender →
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Test en progreso
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12">
        {/* Barra de progreso */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-slate-700">
              Pregunta {currentQuestion + 1} de {selectedQuestions.length}
            </span>
            <span className="text-sm font-semibold text-violet-600">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-violet-600 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Categoría, nivel y contexto */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-semibold">
            {question.category === "grammar" ? "Gramática" 
              : question.category === "vocabulary" ? "Vocabulario"
              : question.category === "reading" ? "Comprensión"
              : "Práctico"}
          </span>
          <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">
            Nivel {question.level}
          </span>
          {question.context && (
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
              {question.context}
            </span>
          )}
        </div>

        {/* Pregunta */}
        <h3 className="text-2xl font-bold text-slate-900 mb-8">
          {question.question}
        </h3>

        {/* Opciones */}
        <div className="space-y-3 mb-8">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                selectedAnswer === index
                  ? "border-violet-600 bg-violet-50"
                  : "border-slate-200 hover:border-violet-300 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center">
                <div
                  className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                    selectedAnswer === index
                      ? "border-violet-600 bg-violet-600"
                      : "border-slate-300"
                  }`}
                >
                  {selectedAnswer === index && (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <span className={`font-medium ${selectedAnswer === index ? "text-violet-900" : "text-slate-700"}`}>
                  {option}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Botón siguiente */}
        <Button
          onClick={handleNext}
          disabled={selectedAnswer === null}
          className="w-full"
          size="lg"
        >
          {currentQuestion < selectedQuestions.length - 1 ? "Siguiente →" : "Ver Resultados →"}
        </Button>
      </div>
    </div>
  );
}
