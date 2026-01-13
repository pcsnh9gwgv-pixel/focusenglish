// Programas completos de preparación para certificaciones oficiales
// Todos los niveles CEFR: A2, B1, B2, C1, C2

export interface CertificationLesson {
  id: string;
  title: string;
  duration: string;
  type: 'vocabulary' | 'reading' | 'writing' | 'speaking' | 'listening' | 'grammar' | 'exam-practice' | 'mock-exam';
  topics: string[];
  activities: string[];
  examFocus: string;
}

export interface CertificationWeek {
  week: number;
  title: string;
  description: string;
  examSkills: string[];
  lessons: CertificationLesson[];
}

export interface CertificationCourse {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  totalLessons: number;
  hoursPerWeek: string;
  price: string;
  color: string;
  gradient: string;
  weeks: CertificationWeek[];
  examFormat: {
    listening: string;
    reading: string;
    writing: string;
    speaking: string;
  };
  passingScore: string;
}

export const certificationCourses: Record<string, CertificationCourse> = {
  a2: {
    id: 'cert-a2',
    title: 'Preparación Certificación A2',
    description: 'Elementary - Fundamentos sólidos del inglés',
    level: 'A2',
    duration: '8 semanas',
    totalLessons: 32,
    hoursPerWeek: '3-4 horas',
    price: '199€',
    color: 'orange',
    gradient: 'from-orange-500 to-yellow-500',
    examFormat: {
      listening: '25 minutos - 25 preguntas',
      reading: '30 minutos - 35 preguntas',
      writing: '30 minutos - 2 tareas',
      speaking: '8-10 minutos - 2 partes'
    },
    passingScore: '120-140 puntos (Cambridge scale)',
    weeks: [
      {
        week: 1,
        title: 'Introducción al formato del examen',
        description: 'Conoce la estructura del examen A2 y estrategias básicas',
        examSkills: ['Exam format', 'Time management', 'Basic vocabulary'],
        lessons: [
          {
            id: 'a2-w1l1',
            title: 'Estructura del Examen A2',
            duration: '45 min',
            type: 'exam-practice',
            topics: ['Partes del examen', 'Tipo de preguntas', 'Sistema de puntuación'],
            activities: ['Video explicativo', 'Análisis de examen', 'Tips de gestión del tiempo'],
            examFocus: 'Familiarización con el formato completo del examen'
          },
          {
            id: 'a2-w1l2',
            title: 'Vocabulario Esencial - Vida Cotidiana',
            duration: '50 min',
            type: 'vocabulary',
            topics: ['Personal information', 'Family and friends', 'Daily routines'],
            activities: ['Flashcards interactivas', 'Memory games', 'Matching exercises'],
            examFocus: 'Vocabulario frecuente en exámenes A2'
          },
          {
            id: 'a2-w1l3',
            title: 'Grammar Basics - Present Simple & Continuous',
            duration: '60 min',
            type: 'grammar',
            topics: ['Present simple', 'Present continuous', 'Time expressions'],
            activities: ['Gap-fill exercises', 'Sentence correction', 'Quiz interactivo'],
            examFocus: 'Gramática fundamental para Reading & Writing'
          },
          {
            id: 'a2-w1l4',
            title: 'Listening Practice - Conversaciones Básicas',
            duration: '45 min',
            type: 'listening',
            topics: ['Greetings', 'Introductions', 'Simple conversations'],
            activities: ['Audio exercises', 'Note-taking practice', 'Multiple choice'],
            examFocus: 'Listening Part 1 - Conversaciones cortas'
          }
        ]
      },
      {
        week: 2,
        title: 'Reading Skills',
        description: 'Estrategias de lectura y comprensión de textos simples',
        examSkills: ['Skimming', 'Scanning', 'Key words identification'],
        lessons: [
          {
            id: 'a2-w2l1',
            title: 'Reading Part 1 - Notices and Signs',
            duration: '50 min',
            type: 'reading',
            topics: ['Public signs', 'Notices', 'Short messages'],
            activities: ['Practice exercises', 'Vocabulary building', 'Timed practice'],
            examFocus: 'Comprender avisos y señales públicas'
          },
          {
            id: 'a2-w2l2',
            title: 'Reading Part 2 - Matching People to Texts',
            duration: '60 min',
            type: 'reading',
            topics: ['Reading for gist', 'Matching information', 'Scanning techniques'],
            activities: ['Practice texts', 'Strategy training', 'Speed reading'],
            examFocus: 'Emparejar personas con textos descriptivos'
          },
          {
            id: 'a2-w2l3',
            title: 'Reading Part 3 - Long Text',
            duration: '60 min',
            type: 'reading',
            topics: ['Reading longer texts', 'True/False/Not given', 'Detail comprehension'],
            activities: ['Practice passages', 'Question analysis', 'Time management'],
            examFocus: 'Comprensión detallada de textos largos'
          },
          {
            id: 'a2-w2l4',
            title: 'Vocabulary - Shopping and Services',
            duration: '45 min',
            type: 'vocabulary',
            topics: ['Shops', 'Money', 'Buying and selling', 'Services'],
            activities: ['Role-plays', 'Dialogues', 'Vocabulary quiz'],
            examFocus: 'Vocabulario común en contextos de examen'
          }
        ]
      },
      {
        week: 3,
        title: 'Writing Skills Part 1',
        description: 'Escribir mensajes cortos y formularios',
        examSkills: ['Short messages', 'Form filling', 'Note writing'],
        lessons: [
          {
            id: 'a2-w3l1',
            title: 'Writing Part 1 - Short Messages',
            duration: '60 min',
            type: 'writing',
            topics: ['Email structure', 'Postcards', 'Short notes'],
            activities: ['Model texts', 'Writing practice', 'Peer correction'],
            examFocus: 'Escribir mensajes de 25-35 palabras'
          },
          {
            id: 'a2-w3l2',
            title: 'Grammar - Past Simple',
            duration: '60 min',
            type: 'grammar',
            topics: ['Regular verbs', 'Irregular verbs', 'Time expressions'],
            activities: ['Conjugation practice', 'Story writing', 'Error correction'],
            examFocus: 'Past simple para narrativas en Writing'
          },
          {
            id: 'a2-w3l3',
            title: 'Writing Part 2 - Longer Message',
            duration: '60 min',
            type: 'writing',
            topics: ['Letter structure', 'Email to friends', 'Describing events'],
            activities: ['Outline creation', 'Writing practice', 'Feedback session'],
            examFocus: 'Escribir mensajes de 35-45 palabras'
          },
          {
            id: 'a2-w3l4',
            title: 'Listening Practice - Information',
            duration: '45 min',
            type: 'listening',
            topics: ['Announcements', 'Instructions', 'Directions'],
            activities: ['Gap-fill exercises', 'Note-taking', 'Multiple choice'],
            examFocus: 'Listening Part 2 - Información específica'
          }
        ]
      },
      {
        week: 4,
        title: 'Speaking Skills',
        description: 'Práctica de conversación y expresión oral',
        examSkills: ['Personal information', 'Describing pictures', 'Conversation'],
        lessons: [
          {
            id: 'a2-w4l1',
            title: 'Speaking Part 1 - Personal Questions',
            duration: '50 min',
            type: 'speaking',
            topics: ['About yourself', 'Family', 'Hobbies', 'Work/Study'],
            activities: ['Question practice', 'Recording yourself', 'Pronunciation drills'],
            examFocus: 'Responder preguntas personales (3-4 minutos)'
          },
          {
            id: 'a2-w4l2',
            title: 'Speaking Part 2 - Picture Description',
            duration: '60 min',
            type: 'speaking',
            topics: ['Describing pictures', 'Present continuous', 'Locations'],
            activities: ['Picture description practice', 'Useful phrases', 'Timed practice'],
            examFocus: 'Describir y comparar imágenes (2-3 minutos)'
          },
          {
            id: 'a2-w4l3',
            title: 'Vocabulary - Travel and Transport',
            duration: '45 min',
            type: 'vocabulary',
            topics: ['Transport', 'Hotels', 'Holidays', 'Tourism'],
            activities: ['Dialogues', 'Role-plays', 'Vocabulary games'],
            examFocus: 'Vocabulario para Speaking sobre viajes'
          },
          {
            id: 'a2-w4l4',
            title: 'Grammar - Future Forms',
            duration: '60 min',
            type: 'grammar',
            topics: ['Going to', 'Will', 'Present continuous for future'],
            activities: ['Practice exercises', 'Writing plans', 'Speaking practice'],
            examFocus: 'Expresar planes y predicciones'
          }
        ]
      },
      {
        week: 5,
        title: 'Listening Skills Avanzado',
        description: 'Comprensión auditiva más compleja',
        examSkills: ['Note-taking', 'Specific information', 'Multiple speakers'],
        lessons: [
          {
            id: 'a2-w5l1',
            title: 'Listening Part 3 - Longer Conversations',
            duration: '60 min',
            type: 'listening',
            topics: ['Dialogues', 'Conversations', 'Multiple speakers'],
            activities: ['Extended listening', 'True/False practice', 'Note-taking'],
            examFocus: 'Conversaciones más largas (3-4 minutos)'
          },
          {
            id: 'a2-w5l2',
            title: 'Listening Part 4 - Longer Monologue',
            duration: '60 min',
            type: 'listening',
            topics: ['Announcements', 'Presentations', 'Talks'],
            activities: ['Gap-fill exercises', 'Multiple choice', 'Summary practice'],
            examFocus: 'Monólogos extensos con detalles específicos'
          },
          {
            id: 'a2-w5l3',
            title: 'Vocabulary - Food and Drink',
            duration: '45 min',
            type: 'vocabulary',
            topics: ['Food items', 'Restaurants', 'Cooking', 'Meals'],
            activities: ['Menu reading', 'Ordering practice', 'Recipe vocabulary'],
            examFocus: 'Vocabulario común en contextos de examen'
          },
          {
            id: 'a2-w5l4',
            title: 'Grammar - Comparatives and Superlatives',
            duration: '60 min',
            type: 'grammar',
            topics: ['Comparative adjectives', 'Superlative adjectives', 'Comparisons'],
            activities: ['Practice exercises', 'Writing comparisons', 'Speaking practice'],
            examFocus: 'Comparar en Reading y Writing'
          }
        ]
      },
      {
        week: 6,
        title: 'Mock Exam 1',
        description: 'Primer examen completo de práctica',
        examSkills: ['Full exam simulation', 'Time management', 'Exam techniques'],
        lessons: [
          {
            id: 'a2-w6l1',
            title: 'Mock Exam - Reading & Writing',
            duration: '90 min',
            type: 'mock-exam',
            topics: ['Reading complete', 'Writing complete', 'Time management'],
            activities: ['Full practice test', 'Self-marking', 'Error analysis'],
            examFocus: 'Simulación completa de Reading y Writing'
          },
          {
            id: 'a2-w6l2',
            title: 'Mock Exam - Listening',
            duration: '30 min',
            type: 'mock-exam',
            topics: ['All listening parts', 'Exam conditions', 'Answer techniques'],
            activities: ['Full listening test', 'Self-marking', 'Review answers'],
            examFocus: 'Simulación completa de Listening'
          },
          {
            id: 'a2-w6l3',
            title: 'Mock Exam - Speaking',
            duration: '45 min',
            type: 'mock-exam',
            topics: ['Both speaking parts', 'Examiner interaction', 'Performance'],
            activities: ['Speaking simulation', 'Recording', 'Self-evaluation'],
            examFocus: 'Simulación completa de Speaking'
          },
          {
            id: 'a2-w6l4',
            title: 'Feedback & Analysis',
            duration: '60 min',
            type: 'exam-practice',
            topics: ['Strengths', 'Weaknesses', 'Improvement areas'],
            activities: ['Detailed feedback', 'Action plan', 'Study strategies'],
            examFocus: 'Análisis de resultados y plan de mejora'
          }
        ]
      },
      {
        week: 7,
        title: 'Refinamiento de Habilidades',
        description: 'Mejorar áreas débiles identificadas',
        examSkills: ['Targeted practice', 'Weak areas', 'Confidence building'],
        lessons: [
          {
            id: 'a2-w7l1',
            title: 'Reading Strategies Review',
            duration: '60 min',
            type: 'reading',
            topics: ['Time-saving techniques', 'Key word spotting', 'Answer strategies'],
            activities: ['Strategy practice', 'Timed exercises', 'Tips and tricks'],
            examFocus: 'Maximizar puntuación en Reading'
          },
          {
            id: 'a2-w7l2',
            title: 'Writing Improvement Workshop',
            duration: '60 min',
            type: 'writing',
            topics: ['Common errors', 'Better structures', 'Vocabulary range'],
            activities: ['Error correction', 'Rewriting practice', 'Model answers'],
            examFocus: 'Mejorar calidad de Writing'
          },
          {
            id: 'a2-w7l3',
            title: 'Listening Techniques',
            duration: '45 min',
            type: 'listening',
            topics: ['Predicting answers', 'Note-taking shortcuts', 'Focus strategies'],
            activities: ['Technique practice', 'Difficult accents', 'Speed practice'],
            examFocus: 'Técnicas avanzadas de Listening'
          },
          {
            id: 'a2-w7l4',
            title: 'Speaking Fluency Practice',
            duration: '60 min',
            type: 'speaking',
            topics: ['Fluency over accuracy', 'Natural responses', 'Confidence'],
            activities: ['Conversation practice', 'Timed responses', 'Feedback session'],
            examFocus: 'Mejorar fluidez en Speaking'
          }
        ]
      },
      {
        week: 8,
        title: 'Mock Exam 2 & Preparación Final',
        description: 'Examen final y últimos consejos',
        examSkills: ['Final exam simulation', 'Last-minute tips', 'Confidence'],
        lessons: [
          {
            id: 'a2-w8l1',
            title: 'Final Mock Exam - Complete',
            duration: '120 min',
            type: 'mock-exam',
            topics: ['All exam parts', 'Exam conditions', 'Final performance'],
            activities: ['Full practice exam', 'Marking', 'Score prediction'],
            examFocus: 'Simulación completa final'
          },
          {
            id: 'a2-w8l2',
            title: 'Exam Day Preparation',
            duration: '45 min',
            type: 'exam-practice',
            topics: ['What to bring', 'Time management', 'Stress management'],
            activities: ['Checklist review', 'Tips and advice', 'Q&A session'],
            examFocus: 'Preparación logística para el día del examen'
          },
          {
            id: 'a2-w8l3',
            title: 'Final Review & Confidence Boosting',
            duration: '60 min',
            type: 'exam-practice',
            topics: ['Key strategies recap', 'Common pitfalls', 'Success mindset'],
            activities: ['Strategy review', 'Motivational session', 'Final Q&A'],
            examFocus: 'Confianza y mentalidad para el examen'
          },
          {
            id: 'a2-w8l4',
            title: 'Post-Course Support & Resources',
            duration: '30 min',
            type: 'exam-practice',
            topics: ['Additional resources', 'Self-study tips', 'Registration help'],
            activities: ['Resource sharing', 'Study plan', 'Support options'],
            examFocus: 'Recursos para continuar practicando'
          }
        ]
      }
    ]
  },

  b1: {
    id: 'cert-b1',
    title: 'Preparación Certificación B1',
    description: 'Intermediate - Tu primer paso hacia la certificación',
    level: 'B1',
    duration: '10 semanas',
    totalLessons: 40,
    hoursPerWeek: '4-5 horas',
    price: '249€',
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500',
    examFormat: {
      listening: '30 minutos - 25 preguntas',
      reading: '45 minutos - 35 preguntas',
      writing: '45 minutos - 2 tareas',
      speaking: '12-14 minutos - 4 partes'
    },
    passingScore: '140-160 puntos (Cambridge scale)',
    weeks: [
      {
        week: 1,
        title: 'Introducción al Examen B1',
        description: 'Conoce el formato y estrategias del nivel intermedio',
        examSkills: ['Exam overview', 'Time management', 'B1 requirements'],
        lessons: [
          {
            id: 'b1-w1l1',
            title: 'Formato del Examen B1 Completo',
            duration: '60 min',
            type: 'exam-practice',
            topics: ['Estructura del examen', 'Tipos de preguntas', 'Criterios de evaluación'],
            activities: ['Video guía', 'Análisis de secciones', 'Planificación de estudio'],
            examFocus: 'Entender requerimientos del nivel B1'
          },
          {
            id: 'b1-w1l2',
            title: 'Reading Part 1 - Multiple Choice',
            duration: '60 min',
            type: 'reading',
            topics: ['Short texts', 'Gist and detail', 'Inference'],
            activities: ['Practice texts', 'Strategy training', 'Timed practice'],
            examFocus: 'Textos cortos con comprensión detallada'
          },
          {
            id: 'b1-w1l3',
            title: 'Grammar - Tenses Overview',
            duration: '60 min',
            type: 'grammar',
            topics: ['Present tenses', 'Past tenses', 'Future forms', 'Time markers'],
            activities: ['Mixed tense exercises', 'Error correction', 'Gap-fill practice'],
            examFocus: 'Control de tiempos verbales para Writing y Speaking'
          },
          {
            id: 'b1-w1l4',
            title: 'Vocabulary - Education and Learning',
            duration: '45 min',
            type: 'vocabulary',
            topics: ['School subjects', 'Learning styles', 'Academic vocabulary'],
            activities: ['Flashcards', 'Collocations', 'Context practice'],
            examFocus: 'Vocabulario académico común en exámenes'
          }
        ]
      },
      {
        week: 2,
        title: 'Reading Skills Avanzado',
        description: 'Domina las estrategias de lectura para el B1',
        examSkills: ['Skimming', 'Scanning', 'Inference', 'Vocabulary in context'],
        lessons: [
          {
            id: 'b1-w2l1',
            title: 'Reading Part 2 - Gapped Text',
            duration: '60 min',
            type: 'reading',
            topics: ['Text cohesion', 'Sentence insertion', 'Linking words'],
            activities: ['Practice passages', 'Strategy development', 'Error analysis'],
            examFocus: 'Insertar oraciones en texto coherentemente'
          },
          {
            id: 'b1-w2l2',
            title: 'Reading Part 3 - Multiple Matching',
            duration: '60 min',
            type: 'reading',
            topics: ['Scanning skills', 'Information retrieval', 'Speed reading'],
            activities: ['Timed exercises', 'Matching practice', 'Technique refinement'],
            examFocus: 'Emparejar información rápidamente'
          },
          {
            id: 'b1-w2l3',
            title: 'Vocabulary - Work and Employment',
            duration: '45 min',
            type: 'vocabulary',
            topics: ['Job vocabulary', 'Workplace situations', 'Professional terms'],
            activities: ['Role-plays', 'Collocations', 'Context exercises'],
            examFocus: 'Vocabulario laboral para todos los skills'
          },
          {
            id: 'b1-w2l4',
            title: 'Grammar - Perfect Tenses',
            duration: '60 min',
            type: 'grammar',
            topics: ['Present perfect', 'Past perfect', 'Time expressions'],
            activities: ['Gap-fill', 'Transformation exercises', 'Writing practice'],
            examFocus: 'Perfect tenses en Reading y Writing'
          }
        ]
      },
      {
        week: 3,
        title: 'Writing Skills Parte 1',
        description: 'Aprende a escribir emails y mensajes formales',
        examSkills: ['Formal writing', 'Email structure', 'Appropriate register'],
        lessons: [
          {
            id: 'b1-w3l1',
            title: 'Writing Part 1 - Formal Email',
            duration: '70 min',
            type: 'writing',
            topics: ['Email format', 'Opening/closing', 'Formal language'],
            activities: ['Model analysis', 'Writing practice', 'Peer review'],
            examFocus: 'Escribir email formal 100-120 palabras'
          },
          {
            id: 'b1-w3l2',
            title: 'Writing Part 2 - Article',
            duration: '70 min',
            type: 'writing',
            topics: ['Article structure', 'Engaging opening', 'Title creation'],
            activities: ['Example articles', 'Writing workshop', 'Feedback session'],
            examFocus: 'Redactar artículo 140-190 palabras'
          },
          {
            id: 'b1-w3l3',
            title: 'Writing Part 2 - Essay',
            duration: '60 min',
            type: 'writing',
            topics: ['Essay structure', 'Arguments', 'Opinion language'],
            activities: ['Essay planning', 'Paragraph writing', 'Conclusion practice'],
            examFocus: 'Escribir ensayo con opinión personal'
          },
          {
            id: 'b1-w3l4',
            title: 'Grammar - Conditionals',
            duration: '60 min',
            type: 'grammar',
            topics: ['Zero/first conditional', 'Second conditional', 'Unless/provided'],
            activities: ['Sentence completion', 'Writing practice', 'Speaking integration'],
            examFocus: 'Condicionales en Writing y Speaking'
          }
        ]
      },
      {
        week: 4,
        title: 'Listening Skills Completo',
        description: 'Domina todas las partes del Listening B1',
        examSkills: ['Note-taking', 'Multiple speakers', 'Specific information'],
        lessons: [
          {
            id: 'b1-w4l1',
            title: 'Listening Part 1 - Multiple Choice',
            duration: '50 min',
            type: 'listening',
            topics: ['Short conversations', 'Gist listening', 'Distractors'],
            activities: ['Audio exercises', 'Strategy practice', 'Answer analysis'],
            examFocus: 'Conversaciones cortas - opción múltiple'
          },
          {
            id: 'b1-w4l2',
            title: 'Listening Part 2 - Note Completion',
            duration: '50 min',
            type: 'listening',
            topics: ['Monologues', 'Key information', 'Note-taking skills'],
            activities: ['Gap-fill practice', 'Prediction exercises', 'Speed listening'],
            examFocus: 'Completar notas de monólogo'
          },
          {
            id: 'b1-w4l3',
            title: 'Listening Part 3 - Extended Listening',
            duration: '60 min',
            type: 'listening',
            topics: ['Longer conversations', 'Multiple speakers', 'Attitude/opinion'],
            activities: ['Extended audio', 'Inference practice', 'Speaker identification'],
            examFocus: 'Conversaciones largas - detalles y opiniones'
          },
          {
            id: 'b1-w4l4',
            title: 'Vocabulary - Travel and Tourism',
            duration: '45 min',
            type: 'vocabulary',
            topics: ['Travel vocabulary', 'Accommodation', 'Transport', 'Tourism'],
            activities: ['Dialogues', 'Situations', 'Listening integration'],
            examFocus: 'Vocabulario de viajes para Listening y Speaking'
          }
        ]
      },
      {
        week: 5,
        title: 'Speaking Skills Parte 1 y 2',
        description: 'Practica las primeras partes del Speaking',
        examSkills: ['Fluency', 'Interactive communication', 'Extended turn'],
        lessons: [
          {
            id: 'b1-w5l1',
            title: 'Speaking Part 1 - Interview',
            duration: '50 min',
            type: 'speaking',
            topics: ['Personal information', 'Extended answers', 'Natural responses'],
            activities: ['Question practice', 'Recording', 'Self-evaluation'],
            examFocus: 'Entrevista personal 2 minutos'
          },
          {
            id: 'b1-w5l2',
            title: 'Speaking Part 2 - Long Turn',
            duration: '60 min',
            type: 'speaking',
            topics: ['Comparing photos', 'Speculating', 'Extended speech'],
            activities: ['Photo description', 'Comparison practice', 'Timing exercises'],
            examFocus: 'Hablar solo 1 minuto sobre fotos'
          },
          {
            id: 'b1-w5l3',
            title: 'Pronunciation Workshop',
            duration: '50 min',
            type: 'speaking',
            topics: ['Word stress', 'Intonation', 'Connected speech'],
            activities: ['Pronunciation drills', 'Recording practice', 'Minimal pairs'],
            examFocus: 'Mejorar pronunciación para Speaking'
          },
          {
            id: 'b1-w5l4',
            title: 'Grammar - Modal Verbs',
            duration: '60 min',
            type: 'grammar',
            topics: ['Ability', 'Permission', 'Obligation', 'Advice'],
            activities: ['Gap-fill', 'Transformation', 'Speaking practice'],
            examFocus: 'Modales en todos los skills del examen'
          }
        ]
      },
      {
        week: 6,
        title: 'Mock Exam 1 - Evaluación Media',
        description: 'Primer examen completo de práctica',
        examSkills: ['Full exam practice', 'Time management', 'Exam technique'],
        lessons: [
          {
            id: 'b1-w6l1',
            title: 'Mock Exam - Reading & Writing',
            duration: '120 min',
            type: 'mock-exam',
            topics: ['Complete papers', 'Exam conditions', 'Time pressure'],
            activities: ['Full test', 'Self-marking', 'Score calculation'],
            examFocus: 'Simulación completa Reading + Writing'
          },
          {
            id: 'b1-w6l2',
            title: 'Mock Exam - Listening',
            duration: '40 min',
            type: 'mock-exam',
            topics: ['All parts', 'Exam format', 'Answer transfer'],
            activities: ['Full listening test', 'Marking', 'Review'],
            examFocus: 'Simulación completa de Listening'
          },
          {
            id: 'b1-w6l3',
            title: 'Mock Exam - Speaking',
            duration: '60 min',
            type: 'mock-exam',
            topics: ['All 4 parts', 'Examiner interaction', 'Performance'],
            activities: ['Speaking test', 'Recording', 'Evaluation'],
            examFocus: 'Simulación completa de Speaking'
          },
          {
            id: 'b1-w6l4',
            title: 'Feedback Detallado',
            duration: '70 min',
            type: 'exam-practice',
            topics: ['Strengths', 'Weaknesses', 'Improvement plan'],
            activities: ['Individual feedback', 'Error analysis', 'Action plan'],
            examFocus: 'Análisis de resultados y estrategia de mejora'
          }
        ]
      },
      {
        week: 7,
        title: 'Speaking Skills Parte 3 y 4',
        description: 'Completa las habilidades de conversación',
        examSkills: ['Collaborative task', 'Discussion', 'Expressing opinions'],
        lessons: [
          {
            id: 'b1-w7l1',
            title: 'Speaking Part 3 - Collaborative Task',
            duration: '60 min',
            type: 'speaking',
            topics: ['Discussion', 'Turn-taking', 'Negotiation', 'Decision-making'],
            activities: ['Pair work', 'Task practice', 'Strategy development'],
            examFocus: 'Tarea colaborativa - discusión 3 minutos'
          },
          {
            id: 'b1-w7l2',
            title: 'Speaking Part 4 - Discussion',
            duration: '60 min',
            type: 'speaking',
            topics: ['Extending answers', 'Justifying opinions', 'Abstract topics'],
            activities: ['Discussion practice', 'Opinion expression', 'Debate simulation'],
            examFocus: 'Discusión general 4 minutos'
          },
          {
            id: 'b1-w7l3',
            title: 'Vocabulary - Technology and Media',
            duration: '45 min',
            type: 'vocabulary',
            topics: ['Technology', 'Social media', 'Internet', 'Devices'],
            activities: ['Topic discussions', 'Collocations', 'Speaking integration'],
            examFocus: 'Vocabulario tecnológico para Speaking y Writing'
          },
          {
            id: 'b1-w7l4',
            title: 'Grammar - Passive Voice',
            duration: '60 min',
            type: 'grammar',
            topics: ['Passive formation', 'Agent phrases', 'Use in formal writing'],
            activities: ['Transformation', 'Writing practice', 'Error correction'],
            examFocus: 'Voz pasiva especialmente para Writing'
          }
        ]
      },
      {
        week: 8,
        title: 'Estrategias Avanzadas',
        description: 'Técnicas para maximizar tu puntuación',
        examSkills: ['Time-saving techniques', 'Error avoidance', 'Strategic approach'],
        lessons: [
          {
            id: 'b1-w8l1',
            title: 'Reading Strategies Masterclass',
            duration: '60 min',
            type: 'reading',
            topics: ['Speed techniques', 'Answer strategies', 'Common traps'],
            activities: ['Strategy application', 'Timed practice', 'Tips compilation'],
            examFocus: 'Maximizar puntuación en Reading'
          },
          {
            id: 'b1-w8l2',
            title: 'Writing Improvement Workshop',
            duration: '70 min',
            type: 'writing',
            topics: ['Common errors', 'Better structures', 'Impressive vocabulary'],
            activities: ['Error correction', 'Rewrites', 'Model answers'],
            examFocus: 'Elevar calidad de Writing al nivel B1+'
          },
          {
            id: 'b1-w8l3',
            title: 'Listening Advanced Techniques',
            duration: '50 min',
            type: 'listening',
            topics: ['Prediction skills', 'Focus strategies', 'Difficult accents'],
            activities: ['Varied accent practice', 'Advanced exercises', 'Speed listening'],
            examFocus: 'Técnicas avanzadas para Listening'
          },
          {
            id: 'b1-w8l4',
            title: 'Speaking Fluency Boosting',
            duration: '60 min',
            type: 'speaking',
            topics: ['Fillers and discourse markers', 'Natural flow', 'Confidence'],
            activities: ['Fluency practice', 'Real conversations', 'Spontaneity training'],
            examFocus: 'Aumentar fluidez y naturalidad en Speaking'
          }
        ]
      },
      {
        week: 9,
        title: 'Repaso Intensivo',
        description: 'Consolida todo lo aprendido',
        examSkills: ['Comprehensive review', 'Weak areas', 'Confidence building'],
        lessons: [
          {
            id: 'b1-w9l1',
            title: 'Grammar Comprehensive Review',
            duration: '70 min',
            type: 'grammar',
            topics: ['All major grammar points', 'Common errors', 'Mixed exercises'],
            activities: ['Review quiz', 'Error correction', 'Practice tests'],
            examFocus: 'Repaso completo de gramática del B1'
          },
          {
            id: 'b1-w9l2',
            title: 'Vocabulary Consolidation',
            duration: '60 min',
            type: 'vocabulary',
            topics: ['All topic areas', 'Collocations', 'Phrasal verbs'],
            activities: ['Vocabulary tests', 'Gap-fills', 'Context practice'],
            examFocus: 'Consolidar vocabulario de todos los temas'
          },
          {
            id: 'b1-w9l3',
            title: 'Skills Integration Practice',
            duration: '70 min',
            type: 'exam-practice',
            topics: ['Combined skills', 'Real-world tasks', 'Exam simulation'],
            activities: ['Integrated exercises', 'Task completion', 'Performance review'],
            examFocus: 'Integrar todas las habilidades'
          },
          {
            id: 'b1-w9l4',
            title: 'Weak Areas Workshop',
            duration: '60 min',
            type: 'exam-practice',
            topics: ['Individual weaknesses', 'Targeted practice', 'Personalized help'],
            activities: ['Individual exercises', 'One-on-one support', 'Custom practice'],
            examFocus: 'Trabajar áreas débiles personalizadas'
          }
        ]
      },
      {
        week: 10,
        title: 'Mock Exam 2 y Preparación Final',
        description: 'Último examen y preparación para el día D',
        examSkills: ['Final assessment', 'Exam-day preparation', 'Confidence'],
        lessons: [
          {
            id: 'b1-w10l1',
            title: 'Final Mock Exam - Complete',
            duration: '150 min',
            type: 'mock-exam',
            topics: ['All papers', 'Exam conditions', 'Final performance'],
            activities: ['Full exam', 'Strict timing', 'Self-marking'],
            examFocus: 'Simulación final completa'
          },
          {
            id: 'b1-w10l2',
            title: 'Exam Day Preparation',
            duration: '45 min',
            type: 'exam-practice',
            topics: ['Logistics', 'What to bring', 'Time management', 'Stress control'],
            activities: ['Checklist', 'Tips and advice', 'Mental preparation'],
            examFocus: 'Preparación práctica para el día del examen'
          },
          {
            id: 'b1-w10l3',
            title: 'Last-Minute Tips & Q&A',
            duration: '60 min',
            type: 'exam-practice',
            topics: ['Key strategies recap', 'Common pitfalls', 'Final questions'],
            activities: ['Strategy review', 'Q&A session', 'Confidence building'],
            examFocus: 'Últimos consejos y resolución de dudas'
          },
          {
            id: 'b1-w10l4',
            title: 'Success Mindset & Resources',
            duration: '45 min',
            type: 'exam-practice',
            topics: ['Positive mindset', 'Additional resources', 'Post-course support'],
            activities: ['Motivational session', 'Resource list', 'Follow-up plan'],
            examFocus: 'Mentalidad de éxito y recursos adicionales'
          }
        ]
      }
    ]
  },

  b2: {
    id: 'cert-b2',
    title: 'Preparación Certificación B2',
    description: 'Upper-Intermediate - Domina el inglés profesional',
    level: 'B2',
    duration: '12 semanas',
    totalLessons: 48,
    hoursPerWeek: '5-6 horas',
    price: '299€',
    color: 'blue',
    gradient: 'from-blue-500 to-purple-500',
    examFormat: {
      listening: '40 minutos - 30 preguntas',
      reading: '60 minutos - 40 preguntas',
      writing: '80 minutos - 2 tareas',
      speaking: '14-16 minutos - 4 partes'
    },
    passingScore: '160-180 puntos (Cambridge scale)',
    weeks: [
      {
        week: 1,
        title: 'Introducción al Nivel B2',
        description: 'Comprende las expectativas y formato del Upper-Intermediate',
        examSkills: ['B2 level requirements', 'Exam format', 'Assessment criteria'],
        lessons: [
          {
            id: 'b2-w1l1',
            title: 'Formato Completo del Examen B2',
            duration: '70 min',
            type: 'exam-practice',
            topics: ['Four papers overview', 'Marking criteria', 'Time allocation strategies'],
            activities: ['Video tutorial', 'Sample papers analysis', 'Study plan creation'],
            examFocus: 'Comprender estructura completa del examen B2'
          },
          {
            id: 'b2-w1l2',
            title: 'Reading Part 1 - Multiple Choice (detailed understanding)',
            duration: '70 min',
            type: 'reading',
            topics: ['Complex texts', 'Detailed comprehension', 'Opinion and attitude'],
            activities: ['Authentic texts practice', 'Strategy development', 'Timed exercises'],
            examFocus: 'Textos detallados con inferencia de opinión'
          },
          {
            id: 'b2-w1l3',
            title: 'Advanced Grammar - Mixed Tenses',
            duration: '70 min',
            type: 'grammar',
            topics: ['All tense forms', 'Narrative tenses', 'Time linkers', 'Consistency'],
            activities: ['Mixed exercises', 'Error correction', 'Use in context'],
            examFocus: 'Control preciso de tiempos verbales complejos'
          },
          {
            id: 'b2-w1l4',
            title: 'Vocabulary - Work and Business',
            duration: '60 min',
            type: 'vocabulary',
            topics: ['Business English', 'Office situations', 'Professional communication'],
            activities: ['Collocation exercises', 'Context practice', 'Topic discussion'],
            examFocus: 'Vocabulario profesional de alto nivel'
          }
        ]
      },
      {
        week: 2,
        title: 'Reading Comprehension Avanzado',
        description: 'Domina las técnicas de lectura rápida y comprensión profunda',
        examSkills: ['Gapped text', 'Multiple matching', 'Inference skills'],
        lessons: [
          {
            id: 'b2-w2l1',
            title: 'Reading Part 2 - Gapped Text (sentence insertion)',
            duration: '70 min',
            type: 'reading',
            topics: ['Text cohesion', 'Referencing', 'Logical flow', 'Paragraph structure'],
            activities: ['Practice passages', 'Strategy application', 'Error analysis'],
            examFocus: 'Insertar oraciones manteniendo coherencia textual'
          },
          {
            id: 'b2-w2l2',
            title: 'Reading Part 3 - Multiple Matching',
            duration: '70 min',
            type: 'reading',
            topics: ['Detailed information location', 'Speed reading', 'Synonym recognition'],
            activities: ['Timed practice', 'Scanning exercises', 'Strategy refinement'],
            examFocus: 'Localizar información específica rápidamente'
          },
          {
            id: 'b2-w2l3',
            title: 'Reading Part 4 - Multiple Choice (multiple texts)',
            duration: '70 min',
            type: 'reading',
            topics: ['Cross-text reference', 'Compare and contrast', 'Opinion identification'],
            activities: ['Multi-text exercises', 'Comparative analysis', 'Practice tests'],
            examFocus: 'Comparar información entre múltiples textos'
          },
          {
            id: 'b2-w2l4',
            title: 'Vocabulary - Environment and Society',
            duration: '60 min',
            type: 'vocabulary',
            topics: ['Environmental issues', 'Social topics', 'Abstract concepts'],
            activities: ['Topic discussions', 'Collocations', 'Academic vocabulary'],
            examFocus: 'Vocabulario para temas abstractos y sociales'
          }
        ]
      },
      {
        week: 3,
        title: 'Writing Skills - Essay Writing',
        description: 'Aprende a escribir ensayos argumentativos de alto nivel',
        examSkills: ['Essay structure', 'Argumentation', 'Formal register'],
        lessons: [
          {
            id: 'b2-w3l1',
            title: 'Writing Part 1 - Essay (compulsory)',
            duration: '80 min',
            type: 'writing',
            topics: ['Essay structure', 'Thesis statement', 'Supporting arguments', 'Conclusion'],
            activities: ['Model essay analysis', 'Outline creation', 'Writing practice'],
            examFocus: 'Ensayo argumentativo 140-190 palabras'
          },
          {
            id: 'b2-w3l2',
            title: 'Advanced Linking Devices',
            duration: '60 min',
            type: 'grammar',
            topics: ['Complex linkers', 'Discourse markers', 'Cohesion', 'Flow'],
            activities: ['Linking practice', 'Text improvement', 'Transformation exercises'],
            examFocus: 'Usar conectores sofisticados en Writing'
          },
          {
            id: 'b2-w3l3',
            title: 'Writing Part 2 - Article/Review',
            duration: '80 min',
            type: 'writing',
            topics: ['Article format', 'Review structure', 'Engaging style', 'Recommendations'],
            activities: ['Model analysis', 'Writing workshop', 'Peer review'],
            examFocus: 'Artículo o reseña 140-190 palabras'
          },
          {
            id: 'b2-w3l4',
            title: 'Writing Part 2 - Letter/Email',
            duration: '70 min',
            type: 'writing',
            topics: ['Formal letters', 'Semi-formal emails', 'Appropriate tone', 'Layout'],
            activities: ['Format practice', 'Tone analysis', 'Writing exercises'],
            examFocus: 'Carta/email formal o semi-formal'
          }
        ]
      },
      {
        week: 4,
        title: 'Listening Comprehension Completo',
        description: 'Domina todas las partes del Listening B2',
        examSkills: ['Note completion', 'Multiple choice', 'Attitude recognition'],
        lessons: [
          {
            id: 'b2-w4l1',
            title: 'Listening Part 1 - Multiple Choice (short extracts)',
            duration: '60 min',
            type: 'listening',
            topics: ['Short monologues/dialogues', 'Gist and detail', 'Speaker purpose'],
            activities: ['Audio exercises', 'Strategy training', 'Distractor analysis'],
            examFocus: 'Extractos cortos - opción múltiple'
          },
          {
            id: 'b2-w4l2',
            title: 'Listening Part 2 - Sentence Completion',
            duration: '60 min',
            type: 'listening',
            topics: ['Monologue', 'Specific information', 'Note-taking', 'Prediction'],
            activities: ['Gap-fill practice', 'Prediction skills', 'Answer checking'],
            examFocus: 'Completar oraciones de monólogo'
          },
          {
            id: 'b2-w4l3',
            title: 'Listening Part 3 - Multiple Choice (long conversation)',
            duration: '60 min',
            type: 'listening',
            topics: ['Extended dialogue', 'Multiple speakers', 'Opinion/attitude', 'Agreement'],
            activities: ['Extended audio', 'Inference practice', 'Strategy application'],
            examFocus: 'Conversación larga - actitudes y opiniones'
          },
          {
            id: 'b2-w4l4',
            title: 'Listening Part 4 - Multiple Matching',
            duration: '60 min',
            type: 'listening',
            topics: ['Five short monologues', 'Matching information', 'Speed listening'],
            activities: ['Rapid matching', 'Practice tests', 'Strategy refinement'],
            examFocus: 'Emparejar 5 monólogos con opciones'
          }
        ]
      },
      {
        week: 5,
        title: 'Speaking Skills - Part 1 y 2',
        description: 'Domina la entrevista y el Long Turn',
        examSkills: ['Fluency', 'Extended turn', 'Coherence'],
        lessons: [
          {
            id: 'b2-w5l1',
            title: 'Speaking Part 1 - Interview (extended)',
            duration: '60 min',
            type: 'speaking',
            topics: ['Personal information', 'Extended responses', 'Natural conversation'],
            activities: ['Question practice', 'Recording', 'Feedback session'],
            examFocus: 'Entrevista personal 2 minutos'
          },
          {
            id: 'b2-w5l2',
            title: 'Speaking Part 2 - Long Turn (compare and contrast)',
            duration: '70 min',
            type: 'speaking',
            topics: ['Photo comparison', 'Speculation', 'Extended speech (1 minute)'],
            activities: ['Photo sets practice', 'Timing exercises', 'Useful language'],
            examFocus: 'Comparar fotos y especular 1 minuto'
          },
          {
            id: 'b2-w5l3',
            title: 'Pronunciation and Intonation Masterclass',
            duration: '60 min',
            type: 'speaking',
            topics: ['Word/sentence stress', 'Intonation patterns', 'Connected speech'],
            activities: ['Pronunciation drills', 'Shadowing practice', 'Recording analysis'],
            examFocus: 'Mejorar claridad y naturalidad en Speaking'
          },
          {
            id: 'b2-w5l4',
            title: 'Vocabulary - Arts and Entertainment',
            duration: '60 min',
            type: 'vocabulary',
            topics: ['Cultural topics', 'Film/music/books', 'Entertainment vocabulary'],
            activities: ['Topic discussions', 'Collocations', 'Speaking integration'],
            examFocus: 'Vocabulario cultural para Speaking'
          }
        ]
      },
      {
        week: 6,
        title: 'Mock Exam 1 - Evaluación Media',
        description: 'Primer examen completo bajo condiciones reales',
        examSkills: ['Full exam simulation', 'Time management', 'Performance assessment'],
        lessons: [
          {
            id: 'b2-w6l1',
            title: 'Mock Exam - Reading & Use of English',
            duration: '120 min',
            type: 'mock-exam',
            topics: ['Complete paper', 'Exam conditions', 'Strict timing'],
            activities: ['Full test', 'Answer key', 'Score calculation'],
            examFocus: 'Simulación completa Reading + Use of English'
          },
          {
            id: 'b2-w6l2',
            title: 'Mock Exam - Writing',
            duration: '90 min',
            type: 'mock-exam',
            topics: ['Essay + choice task', 'Time allocation', 'Quality control'],
            activities: ['Writing test', 'Self-assessment', 'Model comparison'],
            examFocus: 'Simulación completa de Writing'
          },
          {
            id: 'b2-w6l3',
            title: 'Mock Exam - Listening & Speaking',
            duration: '70 min',
            type: 'mock-exam',
            topics: ['Full tests', 'Exam format', 'Performance'],
            activities: ['Listening test', 'Speaking test', 'Recording'],
            examFocus: 'Simulación completa Listening + Speaking'
          },
          {
            id: 'b2-w6l4',
            title: 'Comprehensive Feedback Session',
            duration: '80 min',
            type: 'exam-practice',
            topics: ['Detailed feedback', 'Strengths/weaknesses', 'Improvement strategy'],
            activities: ['Individual feedback', 'Error analysis', 'Action plan'],
            examFocus: 'Análisis detallado y plan de mejora'
          }
        ]
      },
      {
        week: 7,
        title: 'Speaking Part 3 y 4 Avanzado',
        description: 'Domina la tarea colaborativa y la discusión',
        examSkills: ['Collaborative task', 'Decision-making', 'Extended discussion'],
        lessons: [
          {
            id: 'b2-w7l1',
            title: 'Speaking Part 3 - Collaborative Task (2-way conversation)',
            duration: '70 min',
            type: 'speaking',
            topics: ['Negotiation', 'Turn-taking', 'Decision-making', 'Justification'],
            activities: ['Pair work practice', 'Task completion', 'Strategy development'],
            examFocus: 'Tarea colaborativa 2 minutos + decisión 1 minuto'
          },
          {
            id: 'b2-w7l2',
            title: 'Speaking Part 4 - Discussion (follow-up questions)',
            duration: '70 min',
            type: 'speaking',
            topics: ['Extended discussion', 'Abstract topics', 'Opinion justification'],
            activities: ['Discussion practice', 'Abstract topics', 'Opinion expression'],
            examFocus: 'Discusión relacionada con Part 3 - 4 minutos'
          },
          {
            id: 'b2-w7l3',
            title: 'Useful Language for Speaking',
            duration: '60 min',
            type: 'speaking',
            topics: ['Discourse markers', 'Opinion phrases', 'Agreeing/disagreeing'],
            activities: ['Phrase bank building', 'Integration practice', 'Natural usage'],
            examFocus: 'Lenguaje funcional para todas las partes'
          },
          {
            id: 'b2-w7l4',
            title: 'Grammar - Advanced Structures',
            duration: '70 min',
            type: 'grammar',
            topics: ['Relative clauses', 'Participle clauses', 'Inversion', 'Emphasis'],
            activities: ['Transformation practice', 'Writing integration', 'Speaking use'],
            examFocus: 'Estructuras avanzadas para impresionar'
          }
        ]
      },
      {
        week: 8,
        title: 'Use of English Mastery',
        description: 'Domina gramática y vocabulario en contexto',
        examSkills: ['Transformations', 'Word formation', 'Open cloze'],
        lessons: [
          {
            id: 'b2-w8l1',
            title: 'Use of English Part 1 - Multiple Choice Cloze',
            duration: '70 min',
            type: 'grammar',
            topics: ['Vocabulary in context', 'Collocations', 'Fixed phrases'],
            activities: ['Cloze exercises', 'Strategy practice', 'Error analysis'],
            examFocus: 'Vocabulario y colocaciones en contexto'
          },
          {
            id: 'b2-w8l2',
            title: 'Use of English Part 2 - Open Cloze',
            duration: '70 min',
            type: 'grammar',
            topics: ['Grammar words', 'Function words', 'Auxiliary verbs', 'Articles'],
            activities: ['Gap-fill practice', 'Pattern recognition', 'Timed exercises'],
            examFocus: 'Palabras gramaticales sin opciones'
          },
          {
            id: 'b2-w8l3',
            title: 'Use of English Part 3 - Word Formation',
            duration: '70 min',
            type: 'vocabulary',
            topics: ['Prefixes', 'Suffixes', 'Negative forms', 'Word families'],
            activities: ['Formation exercises', 'Word lists', 'Context practice'],
            examFocus: 'Formar palabras con prefijos y sufijos'
          },
          {
            id: 'b2-w8l4',
            title: 'Use of English Part 4 - Key Word Transformations',
            duration: '70 min',
            type: 'grammar',
            topics: ['Sentence transformation', 'Paraphrasing', 'Grammar structures'],
            activities: ['Transformation practice', 'Pattern recognition', 'Common types'],
            examFocus: 'Transformar oraciones manteniendo significado'
          }
        ]
      },
      {
        week: 9,
        title: 'Writing Refinement Workshop',
        description: 'Perfecciona tu escritura para conseguir altas puntuaciones',
        examSkills: ['Advanced writing', 'Error-free writing', 'Impressive language'],
        lessons: [
          {
            id: 'b2-w9l1',
            title: 'Essay Writing Perfection',
            duration: '80 min',
            type: 'writing',
            topics: ['Perfect structure', 'Strong arguments', 'Impressive vocabulary'],
            activities: ['Model analysis', 'Rewriting practice', 'Peer evaluation'],
            examFocus: 'Escribir ensayos de nivel C1'
          },
          {
            id: 'b2-w9l2',
            title: 'Report and Proposal Writing',
            duration: '80 min',
            type: 'writing',
            topics: ['Report format', 'Proposal structure', 'Formal style', 'Recommendations'],
            activities: ['Format practice', 'Writing workshop', 'Feedback session'],
            examFocus: 'Informes y propuestas formales'
          },
          {
            id: 'b2-w9l3',
            title: 'Common Writing Errors Elimination',
            duration: '70 min',
            type: 'writing',
            topics: ['Typical mistakes', 'Error patterns', 'Self-correction strategies'],
            activities: ['Error correction', 'Pattern identification', 'Improvement drills'],
            examFocus: 'Eliminar errores comunes del B2'
          },
          {
            id: 'b2-w9l4',
            title: 'Vocabulary - Science and Technology',
            duration: '60 min',
            type: 'vocabulary',
            topics: ['Scientific topics', 'Technology vocabulary', 'Innovation', 'Research'],
            activities: ['Topic discussions', 'Academic vocabulary', 'Writing integration'],
            examFocus: 'Vocabulario científico y tecnológico'
          }
        ]
      },
      {
        week: 10,
        title: 'Estrategias de Maximización',
        description: 'Técnicas avanzadas para maximizar tu puntuación',
        examSkills: ['Time optimization', 'Strategic approach', 'Maximum performance'],
        lessons: [
          {
            id: 'b2-w10l1',
            title: 'Reading Speed Optimization',
            duration: '70 min',
            type: 'reading',
            topics: ['Speed reading', 'Time-saving techniques', 'Strategic approach'],
            activities: ['Timed practice', 'Strategy application', 'Performance analysis'],
            examFocus: 'Completar Reading en menos tiempo'
          },
          {
            id: 'b2-w10l2',
            title: 'Listening Advanced Strategies',
            duration: '60 min',
            type: 'listening',
            topics: ['Prediction mastery', 'Answer strategies', 'Distractor recognition'],
            activities: ['Advanced exercises', 'Strategy refinement', 'Difficult accents'],
            examFocus: 'Maximizar puntuación en Listening'
          },
          {
            id: 'b2-w10l3',
            title: 'Speaking Confidence Masterclass',
            duration: '70 min',
            type: 'speaking',
            topics: ['Confidence techniques', 'Fluency over accuracy', 'Natural interaction'],
            activities: ['Mock interviews', 'Real conversations', 'Performance review'],
            examFocus: 'Hablar con confianza y naturalidad'
          },
          {
            id: 'b2-w10l4',
            title: 'Grammar and Vocabulary Consolidation',
            duration: '70 min',
            type: 'exam-practice',
            topics: ['All grammar points', 'Essential vocabulary', 'Common patterns'],
            activities: ['Comprehensive review', 'Mixed exercises', 'Quick reference guide'],
            examFocus: 'Consolidar toda la gramática y vocabulario'
          }
        ]
      },
      {
        week: 11,
        title: 'Mock Exam 2 - Evaluación Final',
        description: 'Segundo examen completo para medir progreso',
        examSkills: ['Full simulation', 'Progress assessment', 'Final adjustments'],
        lessons: [
          {
            id: 'b2-w11l1',
            title: 'Final Mock Exam - All Papers',
            duration: '240 min',
            type: 'mock-exam',
            topics: ['Complete exam', 'Real conditions', 'Final performance'],
            activities: ['Full exam simulation', 'Strict timing', 'Marking'],
            examFocus: 'Simulación final completa de 4 papers'
          },
          {
            id: 'b2-w11l2',
            title: 'Performance Analysis and Feedback',
            duration: '80 min',
            type: 'exam-practice',
            topics: ['Results analysis', 'Progress measurement', 'Final improvements'],
            activities: ['Detailed feedback', 'Comparison with Mock 1', 'Action points'],
            examFocus: 'Análisis de progreso y últimos ajustes'
          },
          {
            id: 'b2-w11l3',
            title: 'Weak Areas Final Push',
            duration: '70 min',
            type: 'exam-practice',
            topics: ['Personal weak areas', 'Targeted practice', 'Last improvements'],
            activities: ['Individual exercises', 'Personalized help', 'Focused practice'],
            examFocus: 'Trabajar áreas débiles de cada estudiante'
          },
          {
            id: 'b2-w11l4',
            title: 'Exam Techniques Recap',
            duration: '60 min',
            type: 'exam-practice',
            topics: ['All strategies', 'Time management', 'Common pitfalls'],
            activities: ['Strategy review', 'Quick tips', 'Checklists'],
            examFocus: 'Repasar todas las técnicas de examen'
          }
        ]
      },
      {
        week: 12,
        title: 'Preparación Final y Confianza',
        description: 'Última semana antes del examen real',
        examSkills: ['Exam readiness', 'Confidence', 'Final preparation'],
        lessons: [
          {
            id: 'b2-w12l1',
            title: 'Light Practice - Maintain Skills',
            duration: '90 min',
            type: 'exam-practice',
            topics: ['Light exercises', 'Skill maintenance', 'Confidence building'],
            activities: ['Mixed practice', 'Enjoyable activities', 'Positive reinforcement'],
            examFocus: 'Mantener habilidades sin sobre-practicar'
          },
          {
            id: 'b2-w12l2',
            title: 'Exam Day Logistics',
            duration: '45 min',
            type: 'exam-practice',
            topics: ['What to bring', 'Exam center', 'Timing', 'Procedures'],
            activities: ['Checklist creation', 'Q&A', 'Practical tips'],
            examFocus: 'Preparación práctica para el día del examen'
          },
          {
            id: 'b2-w12l3',
            title: 'Mental Preparation and Success Mindset',
            duration: '60 min',
            type: 'exam-practice',
            topics: ['Stress management', 'Positive mindset', 'Visualization'],
            activities: ['Relaxation techniques', 'Motivational session', 'Success stories'],
            examFocus: 'Mentalidad ganadora para el examen'
          },
          {
            id: 'b2-w12l4',
            title: 'Final Q&A and Good Luck!',
            duration: '45 min',
            type: 'exam-practice',
            topics: ['Last questions', 'Final advice', 'Celebration'],
            activities: ['Open Q&A', 'Final tips', 'Group celebration'],
            examFocus: 'Resolución de últimas dudas y despedida'
          }
        ]
      }
    ]
  },

  c1: {
    id: 'cert-c1',
    title: 'Preparación Certificación C1',
    description: 'Advanced - Inglés avanzado reconocido internacionalmente',
    level: 'C1',
    duration: '14 semanas',
    totalLessons: 56,
    hoursPerWeek: '6-7 horas',
    price: '449€',
    color: 'green',
    gradient: 'from-green-500 to-teal-500',
    examFormat: {
      listening: '40 minutos - 30 preguntas',
      reading: '75 minutos - 40 preguntas',
      writing: '90 minutos - 2 tareas',
      speaking: '15 minutos - 4 partes'
    },
    passingScore: '180-200 puntos (Cambridge scale)',
    weeks: [
      {
        week: 1,
        title: 'Introducción al Nivel C1 Advanced',
        description: 'Comprende las altas expectativas del nivel avanzado',
        examSkills: ['C1 requirements', 'Advanced academic English', 'Complex structures'],
        lessons: [
          {
            id: 'c1-w1l1',
            title: 'C1 Advanced - Formato y Exigencias',
            duration: '90 min',
            type: 'exam-practice',
            topics: ['C1 level expectations', 'All papers overview', 'Assessment descriptors'],
            activities: ['Comprehensive guide', 'Sample analysis', 'Study planning'],
            examFocus: 'Entender las altas exigencias del nivel C1'
          },
          {
            id: 'c1-w1l2',
            title: 'Reading Part 1 - Multiple Choice (complex texts)',
            duration: '90 min',
            type: 'reading',
            topics: ['Complex authentic texts', 'Implicit meaning', 'Writer\'s attitude'],
            activities: ['Advanced texts', 'Inference training', 'Strategy development'],
            examFocus: 'Textos complejos con significado implícito'
          },
          {
            id: 'c1-w1l3',
            title: 'Advanced Grammar - Sophistication',
            duration: '80 min',
            type: 'grammar',
            topics: ['Complex structures', 'Inversion', 'Cleft sentences', 'Ellipsis'],
            activities: ['Transformation practice', 'Context use', 'Natural integration'],
            examFocus: 'Estructuras gramaticales sofisticadas'
          },
          {
            id: 'c1-w1l4',
            title: 'Academic Vocabulary Building',
            duration: '70 min',
            type: 'vocabulary',
            topics: ['Academic word list', 'Formal register', 'Abstract concepts'],
            activities: ['Collocation study', 'Context practice', 'Register awareness'],
            examFocus: 'Vocabulario académico de alto nivel'
          }
        ]
      },
      {
        week: 2,
        title: 'Reading Comprehension Experto',
        description: 'Domina la lectura de textos complejos y académicos',
        examSkills: ['Advanced comprehension', 'Critical thinking', 'Speed with accuracy'],
        lessons: [
          {
            id: 'c1-w2l1',
            title: 'Reading Part 2 - Gapped Text (advanced)',
            duration: '90 min',
            type: 'reading',
            topics: ['Complex text structure', 'Advanced cohesion', 'Subtle referencing'],
            activities: ['Challenging passages', 'Strategy refinement', 'Error analysis'],
            examFocus: 'Textos con estructura compleja y referencias sutiles'
          },
          {
            id: 'c1-w2l2',
            title: 'Reading Part 3 - Cross-text Multiple Matching',
            duration: '90 min',
            type: 'reading',
            topics: ['Multiple texts analysis', 'Compare viewpoints', 'Information synthesis'],
            activities: ['Multi-text practice', 'Comparative analysis', 'Speed techniques'],
            examFocus: 'Sintetizar información de 4 textos diferentes'
          },
          {
            id: 'c1-w2l3',
            title: 'Reading Part 4 - Multiple Choice (complex opinion)',
            duration: '90 min',
            type: 'reading',
            topics: ['Writer attitude', 'Implicit opinion', 'Nuanced understanding'],
            activities: ['Opinion identification', 'Inference practice', 'Subtle meaning'],
            examFocus: 'Identificar opiniones implícitas y matices'
          },
          {
            id: 'c1-w2l4',
            title: 'Advanced Collocations and Phrases',
            duration: '70 min',
            type: 'vocabulary',
            topics: ['Advanced collocations', 'Idiomatic expressions', 'Natural phrases'],
            activities: ['Collocation exercises', 'Context study', 'Natural use practice'],
            examFocus: 'Colocaciones avanzadas para impresionar'
          }
        ]
      },
      {
        week: 3,
        title: 'Writing Skills - Nivel C1',
        description: 'Escribir ensayos y textos de nivel casi nativo',
        examSkills: ['Academic writing', 'Complex argumentation', 'Sophisticated language'],
        lessons: [
          {
            id: 'c1-w3l1',
            title: 'Writing Part 1 - Essay (C1 level)',
            duration: '100 min',
            type: 'writing',
            topics: ['Complex argumentation', 'Sophisticated structures', 'Impressive vocabulary'],
            activities: ['C1 essay analysis', 'Advanced writing', 'Expert feedback'],
            examFocus: 'Ensayo de 220-260 palabras nivel C1'
          },
          {
            id: 'c1-w3l2',
            title: 'Writing Part 2 - Proposal',
            duration: '100 min',
            type: 'writing',
            topics: ['Formal proposal structure', 'Persuasive language', 'Recommendations'],
            activities: ['Proposal templates', 'Writing workshop', 'Peer review'],
            examFocus: 'Propuesta formal profesional'
          },
          {
            id: 'c1-w3l3',
            title: 'Writing Part 2 - Report',
            duration: '100 min',
            type: 'writing',
            topics: ['Formal report format', 'Data presentation', 'Objective tone'],
            activities: ['Report analysis', 'Structure practice', 'Writing exercise'],
            examFocus: 'Informe formal con análisis'
          },
          {
            id: 'c1-w3l4',
            title: 'Writing Part 2 - Review (advanced)',
            duration: '90 min',
            type: 'writing',
            topics: ['Critical review', 'Evaluation language', 'Engaging style'],
            activities: ['Review writing', 'Style development', 'Feedback session'],
            examFocus: 'Reseña crítica y evaluativa'
          }
        ]
      },
      {
        week: 4,
        title: 'Listening - Nivel Avanzado',
        description: 'Comprensión auditiva de discursos complejos',
        examSkills: ['Complex audio', 'Multiple speakers', 'Subtle meaning'],
        lessons: [
          {
            id: 'c1-w4l1',
            title: 'Listening Part 1 - Multiple Choice (complex)',
            duration: '70 min',
            type: 'listening',
            topics: ['Complex monologues/dialogues', 'Implicit meaning', 'Speaker intent'],
            activities: ['Advanced audio', 'Inference training', 'Strategy practice'],
            examFocus: 'Audio complejo con significado implícito'
          },
          {
            id: 'c1-w4l2',
            title: 'Listening Part 2 - Sentence Completion (C1)',
            duration: '70 min',
            type: 'listening',
            topics: ['Academic lectures', 'Complex information', 'Precise note-taking'],
            activities: ['Lecture practice', 'Advanced note-taking', 'Accuracy training'],
            examFocus: 'Completar oraciones de discursos académicos'
          },
          {
            id: 'c1-w4l3',
            title: 'Listening Part 3 - Multiple Choice (attitudes)',
            duration: '70 min',
            type: 'listening',
            topics: ['Complex interaction', 'Subtle attitudes', 'Agreement/disagreement'],
            activities: ['Extended dialogues', 'Attitude recognition', 'Nuance practice'],
            examFocus: 'Identificar actitudes y opiniones sutiles'
          },
          {
            id: 'c1-w4l4',
            title: 'Listening Part 4 - Multiple Matching (advanced)',
            duration: '70 min',
            type: 'listening',
            topics: ['Five complex monologues', 'Rapid processing', 'Matching skills'],
            activities: ['Speed matching', 'Advanced practice', 'Strategy refinement'],
            examFocus: 'Emparejar monólogos complejos rápidamente'
          }
        ]
      },
      {
        week: 5,
        title: 'Speaking - Fluidez y Sofisticación',
        description: 'Hablar con fluidez y usar lenguaje sofisticado',
        examSkills: ['Near-native fluency', 'Complex ideas', 'Natural interaction'],
        lessons: [
          {
            id: 'c1-w5l1',
            title: 'Speaking Part 1 - Interview (C1 level)',
            duration: '70 min',
            type: 'speaking',
            topics: ['Extended responses', 'Complex ideas', 'Natural conversation'],
            activities: ['Advanced questions', 'Recording', 'Expert feedback'],
            examFocus: 'Responder con fluidez y profundidad'
          },
          {
            id: 'c1-w5l2',
            title: 'Speaking Part 2 - Long Turn (sophisticated)',
            duration: '80 min',
            type: 'speaking',
            topics: ['Complex comparison', 'Speculation', 'Extended discourse'],
            activities: ['Advanced photo sets', 'Sophisticated language', 'Timing mastery'],
            examFocus: 'Hablar 1 minuto con lenguaje sofisticado'
          },
          {
            id: 'c1-w5l3',
            title: 'Speaking Part 3 - Collaborative Task (C1)',
            duration: '80 min',
            type: 'speaking',
            topics: ['Complex negotiation', 'Decision justification', 'Natural interaction'],
            activities: ['Advanced tasks', 'Pair practice', 'Strategy development'],
            examFocus: 'Tarea colaborativa con lenguaje avanzado'
          },
          {
            id: 'c1-w5l4',
            title: 'Speaking Part 4 - Discussion (abstract ideas)',
            duration: '80 min',
            type: 'speaking',
            topics: ['Abstract concepts', 'Complex argumentation', 'Extended discussion'],
            activities: ['Philosophical discussions', 'Complex topics', 'Argumentation'],
            examFocus: 'Discutir ideas abstractas con profundidad'
          }
        ]
      },
      {
        week: 6,
        title: 'Use of English - Nivel Experto',
        description: 'Domina el uso preciso del inglés',
        examSkills: ['Advanced grammar', 'Sophisticated vocabulary', 'Accuracy'],
        lessons: [
          {
            id: 'c1-w6l1',
            title: 'Use of English Part 1 - Multiple Choice Cloze',
            duration: '80 min',
            type: 'grammar',
            topics: ['Advanced vocabulary', 'Precise collocations', 'Context mastery'],
            activities: ['C1 level cloze', 'Strategy practice', 'Error analysis'],
            examFocus: 'Vocabulario sofisticado en contexto'
          },
          {
            id: 'c1-w6l2',
            title: 'Use of English Part 2 - Open Cloze',
            duration: '80 min',
            type: 'grammar',
            topics: ['Grammar mastery', 'Function words', 'Complex structures'],
            activities: ['Advanced gap-fill', 'Pattern recognition', 'Accuracy training'],
            examFocus: 'Gramática avanzada sin opciones'
          },
          {
            id: 'c1-w6l3',
            title: 'Use of English Part 3 - Word Formation',
            duration: '80 min',
            type: 'vocabulary',
            topics: ['Complex word formation', 'Advanced affixes', 'Rare forms'],
            activities: ['Formation mastery', 'Word families', 'Context practice'],
            examFocus: 'Formar palabras complejas correctamente'
          },
          {
            id: 'c1-w6l4',
            title: 'Use of English Part 4 - Key Word Transformations',
            duration: '80 min',
            type: 'grammar',
            topics: ['Complex transformations', 'Paraphrasing mastery', 'Advanced structures'],
            activities: ['Transformation drills', 'Pattern mastery', 'Difficult types'],
            examFocus: 'Transformaciones complejas con precisión'
          }
        ]
      }
    ]
  },

  c2: {
    id: 'cert-c2',
    title: 'Preparación Certificación C2',
    description: 'Proficiency - Maestría total del inglés',
    level: 'C2',
    duration: '16 semanas',
    totalLessons: 64,
    hoursPerWeek: '7-8 horas',
    price: '599€',
    color: 'indigo',
    gradient: 'from-indigo-600 to-purple-600',
    examFormat: {
      listening: '40 minutos - 30 preguntas',
      reading: '90 minutos - 40 preguntas',
      writing: '90 minutos - 2 tareas',
      speaking: '16 minutos - 3 partes'
    },
    passingScore: '200-230 puntos (Cambridge scale)',
    weeks: [
      {
        week: 1,
        title: 'Introducción al Nivel C2 Proficiency',
        description: 'Comprende las máximas exigencias del inglés',
        examSkills: ['Near-native competence', 'Academic excellence', 'Professional mastery'],
        lessons: [
          {
            id: 'c2-w1l1',
            title: 'C2 Proficiency - Máximo Nivel',
            duration: '100 min',
            type: 'exam-practice',
            topics: ['C2 mastery level', 'Near-native expectations', 'All papers overview'],
            activities: ['Comprehensive analysis', 'Sample mastery', 'Excellence planning'],
            examFocus: 'Entender exigencias de nivel casi nativo'
          },
          {
            id: 'c2-w1l2',
            title: 'Reading Part 1 - Multiple Choice (mastery)',
            duration: '100 min',
            type: 'reading',
            topics: ['Complex literary texts', 'Subtle nuances', 'Cultural references'],
            activities: ['Literary analysis', 'Nuance identification', 'Excellence practice'],
            examFocus: 'Textos literarios con referencias culturales'
          },
          {
            id: 'c2-w1l3',
            title: 'Grammar Mastery - Perfection',
            duration: '90 min',
            type: 'grammar',
            topics: ['All structures mastery', 'Subtle distinctions', 'Near-native accuracy'],
            activities: ['Perfection exercises', 'Subtle error correction', 'Mastery integration'],
            examFocus: 'Precisión gramatical casi nativa'
          },
          {
            id: 'c2-w1l4',
            title: 'Lexical Resource - Expert Level',
            duration: '80 min',
            type: 'vocabulary',
            topics: ['Extensive vocabulary', 'Idiomatic mastery', 'Register precision'],
            activities: ['Advanced collocations', 'Idiom mastery', 'Precision practice'],
            examFocus: 'Vocabulario extenso y preciso'
          }
        ]
      },
      {
        week: 2,
        title: 'Reading - Textos Complejos y Literarios',
        description: 'Domina la lectura de textos de máxima complejidad',
        examSkills: ['Literary analysis', 'Critical evaluation', 'Speed with perfection'],
        lessons: [
          {
            id: 'c2-w2l1',
            title: 'Reading Part 2 - Gapped Text (C2 complexity)',
            duration: '100 min',
            type: 'reading',
            topics: ['Highly complex texts', 'Advanced discourse markers', 'Subtle cohesion'],
            activities: ['Expert passages', 'Mastery techniques', 'Perfection analysis'],
            examFocus: 'Textos de máxima complejidad estructural'
          },
          {
            id: 'c2-w2l2',
            title: 'Reading Part 3 - Multiple Matching (expert)',
            duration: '100 min',
            type: 'reading',
            topics: ['Multiple complex texts', 'Critical comparison', 'Synthesis mastery'],
            activities: ['Advanced multi-text', 'Expert analysis', 'Speed perfection'],
            examFocus: 'Sintetizar 4 textos complejos rápidamente'
          },
          {
            id: 'c2-w2l3',
            title: 'Reading Part 4 - Multiple Choice (subtle meaning)',
            duration: '100 min',
            type: 'reading',
            topics: ['Implicit meaning mastery', 'Subtle irony', 'Cultural nuances'],
            activities: ['Nuance identification', 'Irony detection', 'Excellence practice'],
            examFocus: 'Identificar significados sutiles e ironía'
          },
          {
            id: 'c2-w2l4',
            title: 'Advanced Idiomatic Language',
            duration: '80 min',
            type: 'vocabulary',
            topics: ['Idioms mastery', 'Figurative language', 'Native-like expressions'],
            activities: ['Idiom study', 'Figurative practice', 'Natural integration'],
            examFocus: 'Expresiones idiomáticas nivel nativo'
          }
        ]
      },
      {
        week: 3,
        title: 'Writing - Excelencia y Sofisticación',
        description: 'Escribir con la calidad de un hablante nativo educado',
        examSkills: ['Academic excellence', 'Professional quality', 'Creative sophistication'],
        lessons: [
          {
            id: 'c2-w3l1',
            title: 'Writing Part 1 - Essay (C2 excellence)',
            duration: '110 min',
            type: 'writing',
            topics: ['Academic excellence', 'Sophisticated argumentation', 'Near-native quality'],
            activities: ['Excellence analysis', 'Masterful writing', 'Expert feedback'],
            examFocus: 'Ensayo de 280-320 palabras excelencia'
          },
          {
            id: 'c2-w3l2',
            title: 'Writing Part 2 - Article (sophisticated)',
            duration: '110 min',
            type: 'writing',
            topics: ['Engaging style', 'Sophisticated language', 'Creative flair'],
            activities: ['Style mastery', 'Creative writing', 'Excellence workshop'],
            examFocus: 'Artículo con estilo sofisticado y creativo'
          },
          {
            id: 'c2-w3l3',
            title: 'Writing Part 2 - Letter (formal mastery)',
            duration: '110 min',
            type: 'writing',
            topics: ['Formal correspondence', 'Professional tone', 'Persuasive mastery'],
            activities: ['Letter excellence', 'Professional practice', 'Mastery feedback'],
            examFocus: 'Carta formal de calidad profesional'
          },
          {
            id: 'c2-w3l4',
            title: 'Writing Part 2 - Review (critical excellence)',
            duration: '100 min',
            type: 'writing',
            topics: ['Critical evaluation', 'Sophisticated analysis', 'Engaging critique'],
            activities: ['Review mastery', 'Critical writing', 'Excellence development'],
            examFocus: 'Reseña crítica de alto nivel'
          }
        ]
      },
      {
        week: 4,
        title: 'Listening - Comprensión Nativa',
        description: 'Entender cualquier tipo de audio con facilidad',
        examSkills: ['Native-like comprehension', 'All accents', 'Subtle nuances'],
        lessons: [
          {
            id: 'c2-w4l1',
            title: 'Listening Part 1 - Multiple Choice (C2 level)',
            duration: '80 min',
            type: 'listening',
            topics: ['Complex audio', 'Subtle implications', 'Cultural references'],
            activities: ['Excellence audio', 'Nuance training', 'Mastery practice'],
            examFocus: 'Audio complejo con referencias culturales'
          },
          {
            id: 'c2-w4l2',
            title: 'Listening Part 2 - Sentence Completion (expert)',
            duration: '80 min',
            type: 'listening',
            topics: ['Academic lectures', 'Precise comprehension', 'Expert note-taking'],
            activities: ['Complex lectures', 'Precision training', 'Mastery development'],
            examFocus: 'Discursos académicos complejos con precisión'
          },
          {
            id: 'c2-w4l3',
            title: 'Listening Part 3 - Multiple Choice (subtle attitudes)',
            duration: '80 min',
            type: 'listening',
            topics: ['Complex interactions', 'Irony detection', 'Subtle disagreement'],
            activities: ['Nuanced dialogues', 'Irony practice', 'Excellence training'],
            examFocus: 'Identificar ironía y actitudes sutiles'
          },
          {
            id: 'c2-w4l4',
            title: 'Listening Part 4 - Multiple Matching (mastery)',
            duration: '80 min',
            type: 'listening',
            topics: ['Five complex monologues', 'Rapid mastery', 'Excellence matching'],
            activities: ['Speed excellence', 'Mastery practice', 'Perfection refinement'],
            examFocus: 'Emparejar con precisión y velocidad'
          }
        ]
      },
      {
        week: 5,
        title: 'Speaking - Fluidez Nativa',
        description: 'Hablar con la fluidez y naturalidad de un nativo',
        examSkills: ['Native-like fluency', 'Sophisticated discourse', 'Natural interaction'],
        lessons: [
          {
            id: 'c2-w5l1',
            title: 'Speaking Part 1 - Conversation (near-native)',
            duration: '90 min',
            type: 'speaking',
            topics: ['Natural conversation', 'Complex ideas', 'Native-like interaction'],
            activities: ['Excellence conversation', 'Natural practice', 'Expert feedback'],
            examFocus: 'Conversar con naturalidad nativa'
          },
          {
            id: 'c2-w5l2',
            title: 'Speaking Part 2 - Collaborative Task (C2)',
            duration: '90 min',
            type: 'speaking',
            topics: ['Complex collaboration', 'Sophisticated negotiation', 'Natural exchange'],
            activities: ['Advanced tasks', 'Excellence practice', 'Mastery development'],
            examFocus: 'Tarea colaborativa con lenguaje sofisticado'
          },
          {
            id: 'c2-w5l3',
            title: 'Speaking Part 3 - Long Turn & Discussion',
            duration: '90 min',
            type: 'speaking',
            topics: ['Extended discourse', 'Complex analysis', 'In-depth discussion'],
            activities: ['Long turn practice', 'Complex discussion', 'Excellence training'],
            examFocus: 'Discurso extendido y discusión profunda'
          },
          {
            id: 'c2-w5l4',
            title: 'Near-Native Pronunciation',
            duration: '80 min',
            type: 'speaking',
            topics: ['Native-like accent', 'Perfect intonation', 'Natural rhythm'],
            activities: ['Accent refinement', 'Intonation mastery', 'Natural flow'],
            examFocus: 'Pronunciación casi indistinguible de nativo'
          }
        ]
      },
      {
        week: 6,
        title: 'Use of English - Perfección Lingüística',
        description: 'Dominio absoluto del uso del inglés',
        examSkills: ['Perfect accuracy', 'Sophisticated usage', 'Native-like precision'],
        lessons: [
          {
            id: 'c2-w6l1',
            title: 'Use of English Part 1 - Multiple Choice Cloze',
            duration: '90 min',
            type: 'grammar',
            topics: ['Expert vocabulary', 'Perfect collocations', 'Native-like usage'],
            activities: ['Excellence cloze', 'Mastery practice', 'Perfection training'],
            examFocus: 'Vocabulario experto con precisión perfecta'
          },
          {
            id: 'c2-w6l2',
            title: 'Use of English Part 2 - Open Cloze',
            duration: '90 min',
            type: 'grammar',
            topics: ['Grammar perfection', 'Subtle structures', 'Native-like accuracy'],
            activities: ['Excellence gap-fill', 'Perfection practice', 'Mastery refinement'],
            examFocus: 'Gramática perfecta sin ayuda'
          },
          {
            id: 'c2-w6l3',
            title: 'Use of English Part 3 - Word Formation',
            duration: '90 min',
            type: 'vocabulary',
            topics: ['Expert word formation', 'Rare forms', 'Perfect accuracy'],
            activities: ['Formation excellence', 'Rare forms mastery', 'Perfection practice'],
            examFocus: 'Formar palabras complejas perfectamente'
          },
          {
            id: 'c2-w6l4',
            title: 'Use of English Part 4 - Key Word Transformations',
            duration: '90 min',
            type: 'grammar',
            topics: ['Expert transformations', 'Perfect paraphrasing', 'Native-like structures'],
            activities: ['Excellence drills', 'Perfection practice', 'Mastery achievement'],
            examFocus: 'Transformaciones perfectas nivel experto'
          }
        ]
      }
    ]
  }
};
