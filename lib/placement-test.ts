// Sistema de Placement Test Adaptativo - Niveles CEFR (A1-C2)
// Inglés Genérico - Banco Extendido de Preguntas

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

// Banco de preguntas por nivel CEFR - Inglés Genérico
export const questionBank: PlacementQuestion[] = [
  // ============ A1 Level (Beginner) - 10 preguntas ============
  {
    id: 'a1-1',
    level: 'A1',
    type: 'grammar',
    question: '_____ name is John.',
    options: ['My', 'I', 'Me', 'Mine'],
    correctAnswer: 0,
    explanation: '"My" es el adjetivo posesivo correcto antes de un sustantivo.'
  },
  {
    id: 'a1-2',
    level: 'A1',
    type: 'vocabulary',
    question: 'I _____ a student.',
    options: ['am', 'is', 'are', 'be'],
    correctAnswer: 0,
    explanation: 'Con "I" (yo) usamos "am".'
  },
  {
    id: 'a1-3',
    level: 'A1',
    type: 'grammar',
    question: 'She _____ in London.',
    options: ['live', 'lives', 'living', 'lived'],
    correctAnswer: 1,
    explanation: 'Presente simple con "she" (tercera persona) necesita -s: lives.'
  },
  {
    id: 'a1-4',
    level: 'A1',
    type: 'vocabulary',
    question: 'How _____ you?',
    options: ['is', 'am', 'are', 'be'],
    correctAnswer: 2,
    explanation: 'Con "you" (tú/usted) siempre usamos "are".'
  },
  {
    id: 'a1-5',
    level: 'A1',
    type: 'grammar',
    question: 'This is _____ book.',
    options: ['a', 'an', 'the', '-'],
    correctAnswer: 0,
    explanation: 'Usamos "a" antes de consonantes: "a book".'
  },
  {
    id: 'a1-6',
    level: 'A1',
    type: 'vocabulary',
    question: 'I _____ English.',
    options: ['speak', 'speaks', 'speaking', 'spoke'],
    correctAnswer: 0,
    explanation: 'Presente simple con "I" usa la forma base: speak.'
  },
  {
    id: 'a1-7',
    level: 'A1',
    type: 'reading',
    question: 'Where _____ you from?',
    options: ['is', 'am', 'are', 'be'],
    correctAnswer: 2,
    explanation: 'Para preguntar origen con "you" usamos "are".'
  },
  {
    id: 'a1-8',
    level: 'A1',
    type: 'grammar',
    question: 'They _____ happy.',
    options: ['is', 'am', 'are', 'be'],
    correctAnswer: 2,
    explanation: 'Con "they" (ellos/ellas) usamos "are".'
  },
  {
    id: 'a1-9',
    level: 'A1',
    type: 'vocabulary',
    question: 'I have _____ apple.',
    options: ['a', 'an', 'the', 'one'],
    correctAnswer: 1,
    explanation: 'Usamos "an" antes de vocales: "an apple".'
  },
  {
    id: 'a1-10',
    level: 'A1',
    type: 'reading',
    question: 'What _____ your name?',
    options: ['is', 'am', 'are', 'be'],
    correctAnswer: 0,
    explanation: 'Para preguntar el nombre usamos "What is...?"'
  },

  // ============ A2 Level (Elementary) - 10 preguntas ============
  {
    id: 'a2-1',
    level: 'A2',
    type: 'grammar',
    question: 'I _____ to the cinema yesterday.',
    options: ['go', 'went', 'gone', 'going'],
    correctAnswer: 1,
    explanation: 'Pasado simple de "go" es "went".'
  },
  {
    id: 'a2-2',
    level: 'A2',
    type: 'vocabulary',
    question: 'She is _____ than her brother.',
    options: ['tall', 'taller', 'tallest', 'more tall'],
    correctAnswer: 1,
    explanation: 'Comparativo de adjetivos cortos: tall → taller.'
  },
  {
    id: 'a2-3',
    level: 'A2',
    type: 'reading',
    question: 'I _____ watching TV when you called.',
    options: ['am', 'was', 'were', 'be'],
    correctAnswer: 1,
    explanation: 'Pasado continuo con "I" usa "was".'
  },
  {
    id: 'a2-4',
    level: 'A2',
    type: 'grammar',
    question: 'There _____ many people at the party.',
    options: ['is', 'are', 'was', 'be'],
    correctAnswer: 1,
    explanation: 'Con sustantivos plurales en presente usamos "are".'
  },
  {
    id: 'a2-5',
    level: 'A2',
    type: 'vocabulary',
    question: 'I haven\'t seen him _____ Monday.',
    options: ['for', 'since', 'from', 'until'],
    correctAnswer: 1,
    explanation: '"Since" se usa con puntos específicos en el tiempo.'
  },
  {
    id: 'a2-6',
    level: 'A2',
    type: 'grammar',
    question: 'She _____ live here anymore.',
    options: ['doesn\'t', 'don\'t', 'isn\'t', 'aren\'t'],
    correctAnswer: 0,
    explanation: 'Negativo del presente simple con "she": doesn\'t.'
  },
  {
    id: 'a2-7',
    level: 'A2',
    type: 'vocabulary',
    question: 'This book is _____ interesting than that one.',
    options: ['more', 'most', 'much', 'many'],
    correctAnswer: 0,
    explanation: 'Comparativo de adjetivos largos: more + adjetivo.'
  },
  {
    id: 'a2-8',
    level: 'A2',
    type: 'reading',
    question: 'I usually _____ up at 7 o\'clock.',
    options: ['get', 'gets', 'got', 'getting'],
    correctAnswer: 0,
    explanation: 'Presente simple con "I" y rutinas: get up.'
  },
  {
    id: 'a2-9',
    level: 'A2',
    type: 'grammar',
    question: 'How _____ sugar do you need?',
    options: ['many', 'much', 'some', 'any'],
    correctAnswer: 1,
    explanation: 'Con sustantivos incontables usamos "much".'
  },
  {
    id: 'a2-10',
    level: 'A2',
    type: 'vocabulary',
    question: 'I _____ to Paris three times.',
    options: ['have been', 'have gone', 'was', 'went'],
    correctAnswer: 0,
    explanation: 'Presente perfecto para experiencias: have been.'
  },

  // ============ B1 Level (Intermediate) - 10 preguntas ============
  {
    id: 'b1-1',
    level: 'B1',
    type: 'grammar',
    question: 'If I _____ rich, I would travel around the world.',
    options: ['am', 'was', 'were', 'be'],
    correctAnswer: 2,
    explanation: 'Segunda condicional (irreal presente) usa "were" con todos los sujetos.'
  },
  {
    id: 'b1-2',
    level: 'B1',
    type: 'vocabulary',
    question: 'The meeting _____ by the manager yesterday.',
    options: ['canceled', 'was canceled', 'has canceled', 'canceling'],
    correctAnswer: 1,
    explanation: 'Voz pasiva en pasado simple: was/were + participio pasado.'
  },
  {
    id: 'b1-3',
    level: 'B1',
    type: 'reading',
    question: 'I _____ English for five years.',
    options: ['learn', 'learned', 'have been learning', 'am learning'],
    correctAnswer: 2,
    explanation: 'Presente perfecto continuo para acciones que continúan desde el pasado.'
  },
  {
    id: 'b1-4',
    level: 'B1',
    type: 'grammar',
    question: 'She suggested _____ to the museum.',
    options: ['to go', 'going', 'go', 'went'],
    correctAnswer: 1,
    explanation: '"Suggest" va seguido de gerundio (-ing).'
  },
  {
    id: 'b1-5',
    level: 'B1',
    type: 'vocabulary',
    question: 'You _____ have told me earlier!',
    options: ['should', 'must', 'would', 'might'],
    correctAnswer: 0,
    explanation: '"Should have" expresa reproche o consejo en el pasado.'
  },
  {
    id: 'b1-6',
    level: 'B1',
    type: 'grammar',
    question: 'By the time we arrived, the film _____ already _____.',
    options: ['has / started', 'had / started', 'was / starting', 'have / started'],
    correctAnswer: 1,
    explanation: 'Pasado perfecto (had + participio) para acciones anteriores a otra en el pasado.'
  },
  {
    id: 'b1-7',
    level: 'B1',
    type: 'reading',
    question: 'I\'m looking forward _____ you again.',
    options: ['to see', 'to seeing', 'see', 'seeing'],
    correctAnswer: 1,
    explanation: '"Look forward to" va seguido de gerundio: to seeing.'
  },
  {
    id: 'b1-8',
    level: 'B1',
    type: 'vocabulary',
    question: 'The house _____ we bought last year needs renovation.',
    options: ['which', 'who', 'where', 'when'],
    correctAnswer: 0,
    explanation: '"Which" se usa para cosas en oraciones relativas.'
  },
  {
    id: 'b1-9',
    level: 'B1',
    type: 'grammar',
    question: 'I wish I _____ speak Chinese.',
    options: ['can', 'could', 'will', 'would'],
    correctAnswer: 1,
    explanation: '"I wish" + pasado simple (could) para deseos presentes.'
  },
  {
    id: 'b1-10',
    level: 'B1',
    type: 'reading',
    question: 'She made me _____ for two hours.',
    options: ['to wait', 'wait', 'waiting', 'waited'],
    correctAnswer: 1,
    explanation: '"Make" va seguido de infinitivo sin "to".'
  },

  // ============ B2 Level (Upper-Intermediate) - 10 preguntas ============
  {
    id: 'b2-1',
    level: 'B2',
    type: 'grammar',
    question: 'By this time next year, I _____ my degree.',
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
    type: 'reading',
    question: 'I wish I _____ harder for the exam last week.',
    options: ['studied', 'had studied', 'have studied', 'would study'],
    correctAnswer: 1,
    explanation: '"I wish" + past perfect para arrepentimiento sobre el pasado.'
  },
  {
    id: 'b2-4',
    level: 'B2',
    type: 'grammar',
    question: 'The project _____ by the team next month.',
    options: ['will complete', 'will be completed', 'is completing', 'completes'],
    correctAnswer: 1,
    explanation: 'Futuro pasivo: will be + participio pasado.'
  },
  {
    id: 'b2-5',
    level: 'B2',
    type: 'vocabulary',
    question: 'The more you practice, _____ you become.',
    options: ['the better', 'better', 'the best', 'best'],
    correctAnswer: 0,
    explanation: 'Estructura comparativa doble: the + comparativo, the + comparativo.'
  },
  {
    id: 'b2-6',
    level: 'B2',
    type: 'grammar',
    question: 'She asked me _____ I had finished the report.',
    options: ['that', 'if', 'what', 'when'],
    correctAnswer: 1,
    explanation: 'En preguntas indirectas de sí/no usamos "if" o "whether".'
  },
  {
    id: 'b2-7',
    level: 'B2',
    type: 'reading',
    question: '_____ circumstances, I would have acted differently.',
    options: ['Under other', 'In other', 'With other', 'At other'],
    correctAnswer: 1,
    explanation: 'Expresión fija: "in other circumstances" (bajo otras circunstancias).'
  },
  {
    id: 'b2-8',
    level: 'B2',
    type: 'vocabulary',
    question: 'He can\'t _____ having said those words.',
    options: ['remember', 'remind', 'recall', 'memorize'],
    correctAnswer: 2,
    explanation: '"Recall" significa recordar (algo específico).'
  },
  {
    id: 'b2-9',
    level: 'B2',
    type: 'grammar',
    question: 'Rarely _____ such a beautiful sunset.',
    options: ['I have seen', 'have I seen', 'I saw', 'did I saw'],
    correctAnswer: 1,
    explanation: 'Con adverbios negativos al inicio, se invierte el orden: rarely + auxiliar + sujeto.'
  },
  {
    id: 'b2-10',
    level: 'B2',
    type: 'reading',
    question: 'The situation needs _____ immediately.',
    options: ['to address', 'addressing', 'address', 'addressed'],
    correctAnswer: 1,
    explanation: '"Need" + gerundio tiene sentido pasivo: needs addressing = needs to be addressed.'
  },

  // ============ C1 Level (Advanced) - 10 preguntas ============
  {
    id: 'c1-1',
    level: 'C1',
    type: 'grammar',
    question: '_____ had I finished the presentation when the fire alarm went off.',
    options: ['Hardly', 'Barely', 'Scarcely', 'No sooner'],
    correctAnswer: 3,
    explanation: '"No sooner" requiere inversión y va con "than": No sooner + had + sujeto.'
  },
  {
    id: 'c1-2',
    level: 'C1',
    type: 'vocabulary',
    question: 'The candidate was _____ qualified for the position.',
    options: ['highly', 'extremely', 'eminently', 'utterly'],
    correctAnswer: 2,
    explanation: '"Eminently" significa perfectamente/sumamente cualificado (contexto formal).'
  },
  {
    id: 'c1-3',
    level: 'C1',
    type: 'reading',
    question: '_____ the circumstances, the decision was justified.',
    options: ['Given', 'Giving', 'Give', 'To give'],
    correctAnswer: 0,
    explanation: '"Given" como preposición significa "dadas/considerando".'
  },
  {
    id: 'c1-4',
    level: 'C1',
    type: 'grammar',
    question: 'The findings are _____ with previous research.',
    options: ['consistent', 'persistent', 'resistant', 'insistent'],
    correctAnswer: 0,
    explanation: '"Consistent with" significa coherente/compatible con.'
  },
  {
    id: 'c1-5',
    level: 'C1',
    type: 'vocabulary',
    question: 'Little _____ that the decision would change everything.',
    options: ['did he know', 'he knew', 'he did know', 'knew he'],
    correctAnswer: 0,
    explanation: 'Con "little" al inicio se invierte: little + auxiliar + sujeto.'
  },
  {
    id: 'c1-6',
    level: 'C1',
    type: 'grammar',
    question: 'The company is on the _____ of bankruptcy.',
    options: ['edge', 'brink', 'verge', 'border'],
    correctAnswer: 1,
    explanation: '"On the brink of" es la expresión idiomática para estar al borde de algo negativo.'
  },
  {
    id: 'c1-7',
    level: 'C1',
    type: 'reading',
    question: '_____ to popular belief, the innovation was not entirely new.',
    options: ['Contrary', 'Opposite', 'Against', 'Unlike'],
    correctAnswer: 0,
    explanation: '"Contrary to" significa contrariamente a / en contra de.'
  },
  {
    id: 'c1-8',
    level: 'C1',
    type: 'vocabulary',
    question: 'The evidence was _____ and could not be disputed.',
    options: ['undeniable', 'irrefutable', 'indisputable', 'unquestionable'],
    correctAnswer: 1,
    explanation: '"Irrefutable" es el término más formal y preciso para evidencia que no puede refutarse.'
  },
  {
    id: 'c1-9',
    level: 'C1',
    type: 'grammar',
    question: 'Not only _____ late, but he also forgot the documents.',
    options: ['he was', 'was he', 'he has been', 'has he been'],
    correctAnswer: 1,
    explanation: 'Después de "not only" al inicio se invierte: auxiliar + sujeto.'
  },
  {
    id: 'c1-10',
    level: 'C1',
    type: 'reading',
    question: 'She would sooner resign _____ accept the new terms.',
    options: ['than', 'that', 'to', 'as'],
    correctAnswer: 0,
    explanation: '"Would sooner... than..." expresa preferencia fuerte.'
  },

  // ============ C2 Level (Proficiency) - 10 preguntas ============
  {
    id: 'c2-1',
    level: 'C2',
    type: 'grammar',
    question: 'Were the proposal _____ earlier, we might have secured funding.',
    options: ['to be submitted', 'to have been submitted', 'submitted', 'submitting'],
    correctAnswer: 1,
    explanation: 'Subjuntivo formal: "were" + infinitivo perfecto para condiciones pasadas.'
  },
  {
    id: 'c2-2',
    level: 'C2',
    type: 'vocabulary',
    question: 'His argument was so _____ that even skeptics were convinced.',
    options: ['persuasive', 'cogent', 'compelling', 'forceful'],
    correctAnswer: 1,
    explanation: '"Cogent" implica argumentación lógica y convincente de alto nivel académico.'
  },
  {
    id: 'c2-3',
    level: 'C2',
    type: 'reading',
    question: 'The speech was _____ with rhetorical flourishes.',
    options: ['filled', 'laden', 'replete', 'packed'],
    correctAnswer: 2,
    explanation: '"Replete with" es el término más formal para "lleno de" en contexto literario.'
  },
  {
    id: 'c2-4',
    level: 'C2',
    type: 'grammar',
    question: 'The treaty _____ the foundations for lasting peace.',
    options: ['laid', 'lied', 'lain', 'lay'],
    correctAnswer: 0,
    explanation: '"Laid" es el pasado de "lay" (colocar/establecer).'
  },
  {
    id: 'c2-5',
    level: 'C2',
    type: 'vocabulary',
    question: 'His behavior was _____ and went against all professional ethics.',
    options: ['unconscionable', 'unscrupulous', 'unprincipled', 'immoral'],
    correctAnswer: 0,
    explanation: '"Unconscionable" es el término más fuerte para conducta éticamente inexcusable.'
  },
  {
    id: 'c2-6',
    level: 'C2',
    type: 'grammar',
    question: 'Scarcely _____ when the phone rang again.',
    options: ['had I hung up', 'I had hung up', 'I hung up', 'did I hang up'],
    correctAnswer: 0,
    explanation: '"Scarcely" requiere inversión con pasado perfecto: had + sujeto + participio.'
  },
  {
    id: 'c2-7',
    level: 'C2',
    type: 'reading',
    question: 'The committee decided to _____ the matter to a vote.',
    options: ['put', 'place', 'set', 'bring'],
    correctAnswer: 0,
    explanation: '"Put to a vote" es la expresión correcta (someter a votación).'
  },
  {
    id: 'c2-8',
    level: 'C2',
    type: 'vocabulary',
    question: 'The proposal met with _____ resistance from stakeholders.',
    options: ['fierce', 'vigorous', 'vehement', 'trenchant'],
    correctAnswer: 2,
    explanation: '"Vehement" describe oposición fuerte y apasionada (formal).'
  },
  {
    id: 'c2-9',
    level: 'C2',
    type: 'grammar',
    question: 'So _____ was the competition that even favorites struggled.',
    options: ['fierce', 'fiercely', 'fierceness', 'more fierce'],
    correctAnswer: 0,
    explanation: 'Inversión enfática: so + adjetivo + verbo + sujeto.'
  },
  {
    id: 'c2-10',
    level: 'C2',
    type: 'reading',
    question: 'The author\'s prose style is _____ and demands careful attention.',
    options: ['elaborate', 'intricate', 'convoluted', 'labyrinthine'],
    correctAnswer: 3,
    explanation: '"Labyrinthine" describe prosa extremadamente compleja y difícil de seguir.'
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

  // Determinar nivel CEFR con lógica mejorada
  let determinedLevel: CEFRLevel = 'A1';
  
  // Encontrar el nivel más alto con al menos 3 respuestas correctas
  const levels: CEFRLevel[] = ['C2', 'C1', 'B2', 'B1', 'A2', 'A1'];
  for (const level of levels) {
    if (levelScores[level] >= 3) {
      determinedLevel = level;
      break;
    }
  }
  
  // Si no hay 3 correctas en ningún nivel, usar el que tenga más
  if (determinedLevel === 'A1' && levelScores['A1'] < 3) {
    let maxScore = 0;
    for (const level of levels) {
      if (levelScores[level] > maxScore) {
        maxScore = levelScores[level];
        determinedLevel = level;
      }
    }
  }

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
    // Seleccionar pregunta aleatoria del nivel
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    return availableQuestions[randomIndex];
  }

  // Si no hay preguntas del nivel objetivo, buscar cualquier pregunta disponible
  const anyAvailable = questionBank.filter(
    (q) => !answeredQuestions.includes(q.id)
  );

  if (anyAvailable.length > 0) {
    const randomIndex = Math.floor(Math.random() * anyAvailable.length);
    return anyAvailable[randomIndex];
  }

  return null;
}

// Descripciones de niveles CEFR - Inglés Genérico
export const levelDescriptions: Record<CEFRLevel, {
  title: string;
  description: string;
  canDo: string[];
  recommendation: string;
}> = {
  A1: {
    title: 'Principiante (A1)',
    description: 'Puedes usar expresiones cotidianas muy básicas destinadas a satisfacer necesidades simples.',
    canDo: [
      'Presentarte a ti mismo y a otros',
      'Hacer y responder preguntas personales básicas',
      'Interactuar de forma simple si la otra persona habla despacio y con claridad',
    ],
    recommendation: 'Te recomendamos comenzar con nuestro curso básico que te dará las herramientas fundamentales del inglés.',
  },
  A2: {
    title: 'Elemental (A2)',
    description: 'Puedes comunicarte en actividades simples y rutinarias que requieren intercambio directo de información.',
    canDo: [
      'Describir tu familia, condiciones de vida y trabajo',
      'Usar frases sobre áreas de necesidad inmediata',
      'Comprender frases de uso frecuente en áreas relevantes',
    ],
    recommendation: 'Nuestro curso elemental expandirá tu vocabulario y te dará mayor confianza en conversaciones cotidianas.',
  },
  B1: {
    title: 'Intermedio (B1)',
    description: 'Puedes manejar situaciones durante viajes y expresar opiniones sobre temas familiares.',
    canDo: [
      'Lidiar con situaciones comunes al viajar',
      'Producir textos simples sobre temas conocidos',
      'Describir experiencias, eventos, sueños y ambiciones',
    ],
    recommendation: 'El curso intermedio te ayudará a ganar fluidez y prepararte para contextos más profesionales.',
  },
  B2: {
    title: 'Intermedio Alto (B2)',
    description: 'Puedes interactuar con fluidez y naturalidad, y entender textos complejos sobre temas concretos y abstractos.',
    canDo: [
      'Interactuar con hablantes nativos con fluidez',
      'Producir textos claros y detallados sobre temas variados',
      'Explicar tu punto de vista sobre asuntos de actualidad',
    ],
    recommendation: 'Nuestro programa avanzado perfeccionará tu inglés para entornos profesionales y académicos exigentes.',
  },
  C1: {
    title: 'Avanzado (C1)',
    description: 'Puedes expresarte con fluidez y espontaneidad sin mucho esfuerzo para encontrar palabras.',
    canDo: [
      'Usar el lenguaje de forma flexible en contextos sociales y profesionales',
      'Producir textos bien estructurados sobre temas complejos',
      'Expresar ideas con fluidez y espontaneidad',
    ],
    recommendation: 'Perfecciona tu dominio con nuestro curso de especialización que te llevará a un nivel casi nativo.',
  },
  C2: {
    title: 'Maestría (C2)',
    description: 'Tienes un dominio completo del idioma, similar al de un hablante nativo educado.',
    canDo: [
      'Comprender prácticamente todo con facilidad',
      'Expresarte con precisión, matices sutiles y fluidez total',
      'Resumir información de fuentes diversas reconstruyendo argumentos',
    ],
    recommendation: 'Mantén tu excelente nivel con nuestros talleres especializados de inglés ejecutivo y académico.',
  },
};
