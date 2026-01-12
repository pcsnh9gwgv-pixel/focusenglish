"use client";

import { useState } from "react";
import { Button } from "../ui/Button";

// Tipos
interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  category: "grammar" | "vocabulary" | "reading";
}

interface TestResult {
  level: string;
  score: number;
  totalQuestions: number;
  categoryScores: {
    grammar: number;
    vocabulary: number;
    reading: number;
  };
  strengths: string[];
  improvements: string[];
  recommendedCourse: string;
}

// Banco de preguntas
const questions: Question[] = [
  // A1 - Grammar
  {
    id: 1,
    question: "She ___ a teacher.",
    options: ["am", "is", "are", "be"],
    correctAnswer: 1,
    level: "A1",
    category: "grammar",
  },
  {
    id: 2,
    question: "I ___ coffee every morning.",
    options: ["drinks", "drinking", "drink", "to drink"],
    correctAnswer: 2,
    level: "A1",
    category: "grammar",
  },
  // A1 - Vocabulary
  {
    id: 3,
    question: "What do you use to write? A ___",
    options: ["book", "pen", "table", "chair"],
    correctAnswer: 1,
    level: "A1",
    category: "vocabulary",
  },
  // A2 - Grammar
  {
    id: 4,
    question: "Yesterday, I ___ to the cinema.",
    options: ["go", "went", "going", "gone"],
    correctAnswer: 1,
    level: "A2",
    category: "grammar",
  },
  {
    id: 5,
    question: "She has ___ in London for five years.",
    options: ["live", "living", "lives", "lived"],
    correctAnswer: 3,
    level: "A2",
    category: "grammar",
  },
  // A2 - Vocabulary
  {
    id: 6,
    question: "I need to ___ an appointment with the doctor.",
    options: ["do", "make", "have", "get"],
    correctAnswer: 1,
    level: "A2",
    category: "vocabulary",
  },
  // B1 - Grammar
  {
    id: 7,
    question: "If I ___ more time, I would travel more.",
    options: ["have", "had", "will have", "would have"],
    correctAnswer: 1,
    level: "B1",
    category: "grammar",
  },
  {
    id: 8,
    question: "The report ___ by the team yesterday.",
    options: ["completed", "was completed", "is completed", "completing"],
    correctAnswer: 1,
    level: "B1",
    category: "grammar",
  },
  // B1 - Vocabulary
  {
    id: 9,
    question: "The company is trying to ___ its market share.",
    options: ["decrease", "expand", "reduce", "minimize"],
    correctAnswer: 1,
    level: "B1",
    category: "vocabulary",
  },
  // B1 - Reading
  {
    id: 10,
    question: "Read: 'Despite the challenges, the team achieved remarkable results.' What does 'despite' mean?",
    options: ["Because of", "In spite of", "Thanks to", "Due to"],
    correctAnswer: 1,
    level: "B1",
    category: "reading",
  },
  // B2 - Grammar
  {
    id: 11,
    question: "By this time next year, we ___ the project.",
    options: ["complete", "will complete", "will have completed", "are completing"],
    correctAnswer: 2,
    level: "B2",
    category: "grammar",
  },
  {
    id: 12,
    question: "___ harder, he would have passed the exam.",
    options: ["If he studied", "Had he studied", "If he studies", "Should he study"],
    correctAnswer: 1,
    level: "B2",
    category: "grammar",
  },
  // B2 - Vocabulary
  {
    id: 13,
    question: "The CEO's decision was quite ___; nobody expected it.",
    options: ["predicted", "unprecedented", "predictable", "previous"],
    correctAnswer: 1,
    level: "B2",
    category: "vocabulary",
  },
  // B2 - Reading
  {
    id: 14,
    question: "Read: 'The implementation of this strategy entails significant resource allocation.' What does 'entails' mean?",
    options: ["Prevents", "Requires", "Avoids", "Suggests"],
    correctAnswer: 1,
    level: "B2",
    category: "reading",
  },
  // C1 - Grammar
  {
    id: 15,
    question: "Scarcely ___ the door when the phone rang.",
    options: ["had I opened", "I had opened", "did I open", "I opened"],
    correctAnswer: 0,
    level: "C1",
    category: "grammar",
  },
  // C1 - Vocabulary
  {
    id: 16,
    question: "The proposal was met with ___ from the board members.",
    options: ["skepticism", "belief", "trust", "faith"],
    correctAnswer: 0,
    level: "C1",
    category: "vocabulary",
  },
  // C1 - Reading
  {
    id: 17,
    question: "Read: 'The phenomenon is ubiquitous in modern society.' What does 'ubiquitous' mean?",
    options: ["Rare", "Everywhere", "Important", "Dangerous"],
    correctAnswer: 1,
    level: "C1",
    category: "reading",
  },
  // C2 - Grammar
  {
    id: 18,
    question: "Were it not for your assistance, the project ___ on schedule.",
    options: ["wouldn't have been completed", "won't be completed", "isn't completed", "wasn't completed"],
    correctAnswer: 0,
    level: "C2",
    category: "grammar",
  },
  // C2 - Vocabulary
  {
    id: 19,
    question: "The speaker's ___ remarks left the audience bewildered.",
    options: ["clear", "obvious", "enigmatic", "simple"],
    correctAnswer: 2,
    level: "C2",
    category: "vocabulary",
  },
  // C2 - Reading
  {
    id: 20,
    question: "Read: 'Her argument was replete with logical fallacies.' What does 'replete' mean?",
    options: ["Empty", "Full", "Missing", "Lacking"],
    correctAnswer: 1,
    level: "C2",
    category: "reading",
  },
];

export function InteractivePlacementTest() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<TestResult | null>(null);

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

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calcular resultados
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (userAnswers: number[]) => {
    let correctCount = 0;
    const categoryScores = { grammar: 0, vocabulary: 0, reading: 0 };
    const categoryTotals = { grammar: 0, vocabulary: 0, reading: 0 };

    questions.forEach((q, index) => {
      categoryTotals[q.category]++;
      if (userAnswers[index] === q.correctAnswer) {
        correctCount++;
        categoryScores[q.category]++;
      }
    });

    const percentage = (correctCount / questions.length) * 100;
    let level = "A1";
    let recommendedCourse = "";

    if (percentage >= 90) {
      level = "C2";
      recommendedCourse = "Cursos avanzados de preparación C2";
    } else if (percentage >= 80) {
      level = "C1";
      recommendedCourse = "Preparación de exámenes avanzados";
    } else if (percentage >= 70) {
      level = "B2";
      recommendedCourse = "Inglés profesional avanzado";
    } else if (percentage >= 60) {
      level = "B1";
      recommendedCourse = "Inglés intermedio para trabajo";
    } else if (percentage >= 45) {
      level = "A2";
      recommendedCourse = "Inglés básico para viajes";
    } else {
      level = "A1";
      recommendedCourse = "Inglés desde cero";
    }

    // Determinar fortalezas y áreas de mejora
    const strengths: string[] = [];
    const improvements: string[] = [];

    Object.entries(categoryScores).forEach(([cat, score]) => {
      const total = categoryTotals[cat as keyof typeof categoryTotals];
      const catPercentage = (score / total) * 100;
      
      if (catPercentage >= 70) {
        strengths.push(cat === "grammar" ? "Gramática" : cat === "vocabulary" ? "Vocabulario" : "Comprensión lectora");
      } else if (catPercentage < 50) {
        improvements.push(cat === "grammar" ? "Gramática" : cat === "vocabulary" ? "Vocabulario" : "Comprensión lectora");
      }
    });

    setResult({
      level,
      score: correctCount,
      totalQuestions: questions.length,
      categoryScores: {
        grammar: Math.round((categoryScores.grammar / categoryTotals.grammar) * 100),
        vocabulary: Math.round((categoryScores.vocabulary / categoryTotals.vocabulary) * 100),
        reading: Math.round((categoryScores.reading / categoryTotals.reading) * 100),
      },
      strengths: strengths.length > 0 ? strengths : ["Fundamentos básicos"],
      improvements: improvements.length > 0 ? improvements : ["Mantener nivel actual"],
      recommendedCourse,
    });

    setShowResult(true);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  // Pantalla de inicio
  if (!started) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center">
              <span className="text-4xl">🎯</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-4">
              Test de Nivel de Inglés
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Evaluación completa de tus habilidades en inglés
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-black text-violet-600 mb-2">20</div>
              <div className="text-sm text-slate-600">Preguntas</div>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-black text-violet-600 mb-2">15</div>
              <div className="text-sm text-slate-600">Minutos</div>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-black text-violet-600 mb-2">A1-C2</div>
              <div className="text-sm text-slate-600">Niveles CEFR</div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <h3 className="font-bold text-slate-900">El test incluye:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 text-violet-600">✓</span>
                <span className="text-slate-700">Preguntas de gramática, vocabulario y comprensión</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-violet-600">✓</span>
                <span className="text-slate-700">Evaluación adaptativa según el Marco CEFR</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-violet-600">✓</span>
                <span className="text-slate-700">Resultados inmediatos con análisis detallado</span>
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
            Comenzar Test Ahora →
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
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 border-2 border-violet-200 mb-8">
            <h4 className="font-bold text-slate-900 mb-2 flex items-center">
              <span className="mr-2">🎯</span>
              Curso Recomendado
            </h4>
            <p className="text-slate-700 mb-4">{result.recommendedCourse}</p>
            <Button href="/cursos-especializados" size="sm">
              Ver Cursos →
            </Button>
          </div>

          {/* Acciones */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleStart}
              variant="secondary"
              className="flex-1"
            >
              Repetir Test
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
              Pregunta {currentQuestion + 1} de {questions.length}
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

        {/* Categoría y nivel */}
        <div className="flex gap-2 mb-6">
          <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-semibold">
            {question.category === "grammar" ? "Gramática" : question.category === "vocabulary" ? "Vocabulario" : "Comprensión"}
          </span>
          <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">
            Nivel {question.level}
          </span>
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
          {currentQuestion < questions.length - 1 ? "Siguiente →" : "Ver Resultados →"}
        </Button>
      </div>
    </div>
  );
}
