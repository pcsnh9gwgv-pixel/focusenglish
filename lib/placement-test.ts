// Sistema de Placement Test Adaptativo - Niveles CEFR (A1-C2)

export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface PlacementQuestion {
  id: string;
  level: CEFRLevel;
  type: 'grammar' | 'vocabulary' | 'reading';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface TestResult {
  level: CEFRLevel;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  breakdown: {
    grammar: number;
    vocabulary: number;
    reading: number;
  };
  timestamp: Date;
}

// Banco de preguntas por nivel CEFR
export const questionBank: PlacementQuestion[] = [
  // ============ A1 Level (Beginner) ============
  {
    id: 'a1-1',
    level: 'A1',
    type: 'grammar',
    question: '_____ name is Maria.',
    options: ['My', 'I', 'Me', 'Mine'],
    correctAnswer: 0,
    explanation: '"My" es el adjetivo posesivo correcto antes de un sustantivo.'
  },
  {
    id: 'a1-2',
    level: 'A1',
    type: 'vocabulary',
    question: 'I _____ coffee every morning.',
    options: ['drink', 'drinks', 'drinking', 'drank'],
    correctAnswer: 0,
    explanation: 'Presente simple con "I" usa la forma base del verbo.'
  },
  {
    id: 'a1-3',
    level: 'A1',
    type: 'grammar',
    question: 'She _____ a teacher.',
    options: ['am', 'is', 'are', 'be'],
    correctAnswer: 1,
    explanation: 'Con "she" (tercera persona singular) usamos "is".'
  },
  {
    id: 'a1-4',
    level: 'A1',
    type: 'vocabulary',
    question: 'There _____ three apples on the table.',
    options: ['is', 'are', 'am', 'be'],
    correctAnswer: 1,
    explanation: 'Con sustantivos plurales usamos "are".'
  },

  // ============ A2 Level (Elementary) ============
  {
    id: 'a2-1',
    level: 'A2',
    type: 'grammar',
    question: 'I _____ to London last year.',
    options: ['go', 'went', 'gone', 'going'],
    correctAnswer: 1,
    explanation: 'Pasado simple de "go" es "went".'
  },
  {
    id: 'a2-2',
    level: 'A2',
    type: 'vocabulary',
    question: 'She is _____ than her sister.',
    options: ['tall', 'taller', 'tallest', 'more tall'],
    correctAnswer: 1,
    explanation: 'Comparativo de adjetivos cortos: tall → taller.'
  },
  {
    id: 'a2-3',
    level: 'A2',
    type: 'grammar',
    question: 'We _____ dinner when you called.',
    options: ['have', 'had', 'were having', 'having'],
    correctAnswer: 2,
    explanation: 'Pasado continuo para acciones en progreso en el pasado.'
  },
  {
    id: 'a2-4',
    level: 'A2',
    type: 'reading',
    question: 'I _____ visit my grandparents every Sunday.',
    options: ['use to', 'used to', 'usually', 'am used to'],
    correctAnswer: 2,
    explanation: '"Usually" expresa hábitos presentes.'
  },

  // ============ B1 Level (Intermediate) ============
  {
    id: 'b1-1',
    level: 'B1',
    type: 'grammar',
    question: 'If I _____ rich, I would travel the world.',
    options: ['am', 'was', 'were', 'be'],
    correctAnswer: 2,
    explanation: 'Segunda condicional usa "were" con todos los pronombres.'
  },
  {
    id: 'b1-2',
    level: 'B1',
    type: 'vocabulary',
    question: 'The report _____ by the team yesterday.',
    options: ['finished', 'was finished', 'has finished', 'finishing'],
    correctAnswer: 1,
    explanation: 'Voz pasiva en pasado simple: was/were + participio pasado.'
  },
  {
    id: 'b1-3',
    level: 'B1',
    type: 'grammar',
    question: 'I _____ English for five years.',
    options: ['learn', 'learned', 'have been learning', 'am learning'],
    correctAnswer: 2,
    explanation: 'Presente perfecto continuo para acciones que empezaron en el pasado y continúan.'
  },
  {
    id: 'b1-4',
    level: 'B1',
    type: 'reading',
    question: 'She suggested _____ a break.',
    options: ['to take', 'taking', 'take', 'took'],
    correctAnswer: 1,
    explanation: '"Suggest" va seguido de gerundio (-ing).'
  },

  // ============ B2 Level (Upper-Intermediate) ============
  {
    id: 'b2-1',
    level: 'B2',
    type: 'grammar',
    question: 'By the time you arrive, I _____ the project.',
    options: ['finish', 'will finish', 'will have finished', 'am finishing'],
    correctAnswer: 2,
    explanation: 'Futuro perfecto para acciones completadas antes de un momento futuro.'
  },
  {
    id: 'b2-2',
    level: 'B2',
    type: 'vocabulary',
    question: '_____ the bad weather, we decided to go hiking.',
    options: ['Despite', 'Although', 'However', 'Because'],
    correctAnswer: 0,
    explanation: '"Despite" + sustantivo/gerundio expresa contraste.'
  },
  {
    id: 'b2-3',
    level: 'B2',
    type: 'grammar',
    question: 'I wish I _____ harder for the exam.',
    options: ['studied', 'had studied', 'have studied', 'would study'],
    correctAnswer: 1,
    explanation: '"I wish" + past perfect para arrepentimiento sobre el pasado.'
  },
  {
    id: 'b2-4',
    level: 'B2',
    type: 'reading',
    question: 'The proposal _____ by the board next week.',
    options: ['will discuss', 'will be discussed', 'is discussing', 'discusses'],
    correctAnswer: 1,
    explanation: 'Futuro pasivo: will be + participio pasado.'
  },

  // ============ C1 Level (Advanced) ============
  {
    id: 'c1-1',
    level: 'C1',
    type: 'grammar',
    question: '_____ had I finished my presentation when the fire alarm went off.',
    options: ['Hardly', 'Barely', 'Scarcely', 'No sooner'],
    correctAnswer: 3,
    explanation: '"No sooner" requiere inversión: No sooner + had + sujeto.'
  },
  {
    id: 'c1-2',
    level: 'C1',
    type: 'vocabulary',
    question: 'The candidate was _____ qualified for the position, having over 20 years of experience.',
    options: ['highly', 'extremely', 'eminently', 'utterly'],
    correctAnswer: 2,
    explanation: '"Eminently" significa perfectamente/sumamente cualificado en contexto formal.'
  },
  {
    id: 'c1-3',
    level: 'C1',
    type: 'grammar',
    question: '_____ the circumstances, the decision was entirely justified.',
    options: ['Given', 'Giving', 'Give', 'To give'],
    correctAnswer: 0,
    explanation: '"Given" como preposición significa "dadas/considerando".'
  },
  {
    id: 'c1-4',
    level: 'C1',
    type: 'reading',
    question: 'The research findings are _____ with previous studies in the field.',
    options: ['consistent', 'persistent', 'resistant', 'insistent'],
    correctAnswer: 0,
    explanation: '"Consistent with" significa coherente/compatible con.'
  },

  // ============ C2 Level (Proficiency) ============
  {
    id: 'c2-1',
    level: 'C2',
    type: 'grammar',
    question: 'Were the proposal _____ earlier, we might have secured the funding.',
    options: ['to be submitted', 'to have been submitted', 'submitted', 'submitting'],
    correctAnswer: 1,
    explanation: 'Subjuntivo formal: "were" + infinitivo perfecto para condiciones pasadas.'
  },
  {
    id: 'c2-2',
    level: 'C2',
    type: 'vocabulary',
    question: 'His argument was so _____ that even the skeptics were convinced.',
    options: ['persuasive', 'cogent', 'compelling', 'forceful'],
    correctAnswer: 1,
    explanation: '"Cogent" implica argumentación lógica y convincente de alto nivel académico.'
  },
  {
    id: 'c2-3',
    level: 'C2',
    type: 'grammar',
    question: 'Not only _____ the deadline, but she also exceeded all expectations.',
    options: ['she met', 'did she meet', 'she did meet', 'met she'],
    correctAnswer: 1,
    explanation: 'Inversión después de "not only" en posición inicial.'
  },
  {
    id: 'c2-4',
    level: 'C2',
    type: 'vocabulary',
    question: 'The politician\'s speech was _____ with rhetorical flourishes and classical allusions.',
    options: ['filled', 'laden', 'replete', 'packed'],
    correctAnswer: 2,
    explanation: '"Replete with" es el término más formal y preciso para "lleno de" en contexto literario.'
  },

  // Preguntas adicionales para mayor precisión
  {
    id: 'a1-5',
    level: 'A1',
    type: 'vocabulary',
    question: 'What _____ you do?',
    options: ['are', 'is', 'do', 'does'],
    correctAnswer: 2,
    explanation: 'Para preguntar sobre profesión usamos "do" con "you".'
  },
  {
    id: 'a2-5',
    level: 'A2',
    type: 'grammar',
    question: 'I haven\'t seen him _____ Monday.',
    options: ['for', 'since', 'from', 'until'],
    correctAnswer: 1,
    explanation: '"Since" se usa con puntos específicos en el tiempo.'
  },
  {
    id: 'b1-5',
    level: 'B1',
    type: 'vocabulary',
    question: 'You _____ have told me earlier!',
    options: ['should', 'must', 'would', 'might'],
    correctAnswer: 0,
    explanation: '"Should have" expresa reproche por algo que no se hizo.'
  },
  {
    id: 'b2-5',
    level: 'B2',
    type: 'grammar',
    question: 'The more you practice, _____ you become.',
    options: ['the better', 'better', 'the best', 'best'],
    correctAnswer: 0,
    explanation: 'Estructura comparativa: the + comparativo, the + comparativo.'
  },
];

// Función para calcular el nivel basado en respuestas
export function calculateLevel(
  answers: { questionId: string; correct: boolean }[]
): TestResult {
  const levelScores: Record<CEFRLevel, number> = {
    A1: 0,
    A2: 0,
    B1: 0,
    B2: 0,
    C1: 0,
    C2: 0,
  };

  const breakdown = {
    grammar: 0,
    vocabulary: 0,
    reading: 0,
  };

  let correctCount = 0;

  answers.forEach((answer) => {
    const question = questionBank.find((q) => q.id === answer.questionId);
    if (question && answer.correct) {
      levelScores[question.level]++;
      correctCount++;
      
      if (question.type === 'grammar') breakdown.grammar++;
      else if (question.type === 'vocabulary') breakdown.vocabulary++;
      else if (question.type === 'reading') breakdown.reading++;
    }
  });

  // Determinar nivel CEFR
  let determinedLevel: CEFRLevel = 'A1';
  
  if (levelScores.C2 >= 2) determinedLevel = 'C2';
  else if (levelScores.C1 >= 2) determinedLevel = 'C1';
  else if (levelScores.B2 >= 2) determinedLevel = 'B2';
  else if (levelScores.B1 >= 2) determinedLevel = 'B1';
  else if (levelScores.A2 >= 2) determinedLevel = 'A2';
  else determinedLevel = 'A1';

  const score = Math.round((correctCount / answers.length) * 100);

  return {
    level: determinedLevel,
    score,
    totalQuestions: answers.length,
    correctAnswers: correctCount,
    breakdown,
    timestamp: new Date(),
  };
}

// Lógica adaptativa: seleccionar siguiente pregunta
export function getNextQuestion(
  answeredQuestions: string[],
  lastAnswerCorrect: boolean | null,
  currentLevel: CEFRLevel = 'B1'
): PlacementQuestion | null {
  const levelOrder: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  let targetLevel = currentLevel;

  // Ajustar nivel según respuesta anterior
  if (lastAnswerCorrect !== null) {
    const currentIndex = levelOrder.indexOf(currentLevel);
    if (lastAnswerCorrect && currentIndex < levelOrder.length - 1) {
      targetLevel = levelOrder[currentIndex + 1];
    } else if (!lastAnswerCorrect && currentIndex > 0) {
      targetLevel = levelOrder[currentIndex - 1];
    }
  }

  // Buscar pregunta no respondida del nivel objetivo
  const availableQuestions = questionBank.filter(
    (q) => !answeredQuestions.includes(q.id) && q.level === targetLevel
  );

  if (availableQuestions.length > 0) {
    return availableQuestions[0];
  }

  // Si no hay preguntas del nivel objetivo, buscar cualquier pregunta disponible
  const anyAvailable = questionBank.filter(
    (q) => !answeredQuestions.includes(q.id)
  );

  return anyAvailable.length > 0 ? anyAvailable[0] : null;
}

// Descripciones de niveles CEFR
export const levelDescriptions: Record<CEFRLevel, {
  title: string;
  description: string;
  canDo: string[];
  recommendation: string;
}> = {
  A1: {
    title: 'Principiante (A1)',
    description: 'Puedes usar expresiones cotidianas básicas y frases sencillas.',
    canDo: [
      'Presentarte y usar saludos básicos',
      'Hacer y responder preguntas sobre información personal',
      'Interactuar de forma simple si la otra persona habla lento',
    ],
    recommendation: 'Comienza con nuestro curso de nivel principiante para construir una base sólida.',
  },
  A2: {
    title: 'Elemental (A2)',
    description: 'Puedes comunicarte en situaciones simples y rutinarias.',
    canDo: [
      'Describir tu trabajo, educación y entorno',
      'Hablar sobre necesidades inmediatas',
      'Comprender frases de uso frecuente',
    ],
    recommendation: 'Nuestro curso elemental te ayudará a ganar confianza en conversaciones cotidianas.',
  },
  B1: {
    title: 'Intermedio (B1)',
    description: 'Puedes manejar situaciones durante viajes y expresar opiniones.',
    canDo: [
      'Manejar situaciones en viajes al extranjero',
      'Escribir textos sencillos sobre temas familiares',
      'Describir experiencias, eventos y aspiraciones',
    ],
    recommendation: 'El curso intermedio perfeccionará tu fluidez para contextos profesionales.',
  },
  B2: {
    title: 'Intermedio Alto (B2)',
    description: 'Puedes interactuar con fluidez y entender textos complejos.',
    canDo: [
      'Interactuar con hablantes nativos con fluidez',
      'Producir textos detallados sobre temas variados',
      'Explicar puntos de vista sobre temas actuales',
    ],
    recommendation: 'Nuestro programa avanzado te preparará para entornos profesionales exigentes.',
  },
  C1: {
    title: 'Avanzado (C1)',
    description: 'Puedes usar el idioma de forma flexible y efectiva.',
    canDo: [
      'Expresarte con fluidez y espontaneidad',
      'Usar el lenguaje de forma flexible en contextos sociales y profesionales',
      'Producir textos claros y bien estructurados',
    ],
    recommendation: 'Perfecciona tu dominio con nuestro curso de especialización profesional.',
  },
  C2: {
    title: 'Maestría (C2)',
    description: 'Tienes dominio total del idioma, similar a un hablante nativo.',
    canDo: [
      'Comprender prácticamente todo con facilidad',
      'Expresarte con precisión y matices sutiles',
      'Resumir y reconstruir argumentos complejos',
    ],
    recommendation: 'Mantén tu nivel con nuestros talleres de inglés ejecutivo y liderazgo.',
  },
};
