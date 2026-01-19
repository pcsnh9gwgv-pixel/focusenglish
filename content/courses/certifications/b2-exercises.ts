// Ejercicios completos para el curso B2
// Cada lección contiene 20 ejercicios interactivos

export interface Exercise {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'true-false' | 'matching' | 'ordering' | 'writing' | 'speaking';
  question: string;
  options?: string[];
  correctAnswer: string | number | string[];
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
}

export interface LessonExercises {
  lessonId: string;
  exercises: Exercise[];
}

// ============================================
// SEMANA 1: Introducción al Nivel B2
// ============================================

// Lección b2-w1l1: Formato Completo del Examen B2
export const b2_w1l1_exercises: Exercise[] = [
  {
    id: 'b2-w1l1-ex1',
    type: 'multiple-choice',
    question: 'How many parts does the B2 Reading and Use of English paper have?',
    options: ['4 parts', '6 parts', '7 parts', '8 parts'],
    correctAnswer: 2,
    explanation: 'The B2 Reading and Use of English paper has 7 parts in total.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l1-ex2',
    type: 'multiple-choice',
    question: 'How long is the B2 Writing paper?',
    options: ['60 minutes', '80 minutes', '90 minutes', '120 minutes'],
    correctAnswer: 1,
    explanation: 'The B2 Writing paper lasts 80 minutes.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l1-ex3',
    type: 'multiple-choice',
    question: 'What is the minimum score required to pass the B2 exam?',
    options: ['140 points', '150 points', '160 points', '180 points'],
    correctAnswer: 2,
    explanation: 'You need a minimum of 160 points on the Cambridge scale to pass B2.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w1l1-ex4',
    type: 'true-false',
    question: 'The B2 Speaking test is conducted individually.',
    correctAnswer: 'false',
    explanation: 'False. The B2 Speaking test is usually conducted in pairs with another candidate.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l1-ex5',
    type: 'multiple-choice',
    question: 'How many tasks are there in the B2 Writing paper?',
    options: ['1 task', '2 tasks', '3 tasks', '4 tasks'],
    correctAnswer: 1,
    explanation: 'The B2 Writing paper consists of 2 tasks.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l1-ex6',
    type: 'fill-blank',
    question: 'The B2 Listening paper lasts ____ minutes.',
    correctAnswer: '40',
    explanation: 'The B2 Listening paper is 40 minutes long.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l1-ex7',
    type: 'multiple-choice',
    question: 'Which skill is NOT directly assessed in the B2 exam?',
    options: ['Translation', 'Reading', 'Writing', 'Speaking'],
    correctAnswer: 0,
    explanation: 'Translation is not directly assessed. The B2 exam tests Reading, Writing, Listening, and Speaking.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l1-ex8',
    type: 'true-false',
    question: 'In B2, you must write an essay in Writing Part 1.',
    correctAnswer: 'true',
    explanation: 'True. Writing Part 1 is a compulsory essay task.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l1-ex9',
    type: 'multiple-choice',
    question: 'How many questions are there in the B2 Listening paper?',
    options: ['25 questions', '30 questions', '35 questions', '40 questions'],
    correctAnswer: 1,
    explanation: 'The B2 Listening paper has 30 questions.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w1l1-ex10',
    type: 'matching',
    question: 'Match each paper with its duration: 1. Reading & Use of English, 2. Writing, 3. Listening, 4. Speaking',
    correctAnswer: ['60 min', '80 min', '40 min', '14-16 min'],
    explanation: 'Reading & Use of English: 60 min, Writing: 80 min, Listening: 40 min, Speaking: 14-16 min.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w1l1-ex11',
    type: 'multiple-choice',
    question: 'What percentage of the total marks does each paper contribute?',
    options: ['20% each', '25% each', '30% each', '33% each'],
    correctAnswer: 1,
    explanation: 'Each of the four papers contributes 25% to the total marks.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w1l1-ex12',
    type: 'true-false',
    question: 'You can choose which task to complete in Writing Part 2.',
    correctAnswer: 'true',
    explanation: 'True. In Writing Part 2, you can choose from several options (article, letter/email, report, review).',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l1-ex13',
    type: 'fill-blank',
    question: 'The B2 exam tests ____-intermediate level English.',
    correctAnswer: 'upper',
    explanation: 'B2 is the upper-intermediate level according to CEFR.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l1-ex14',
    type: 'multiple-choice',
    question: 'How many parts are there in the B2 Speaking test?',
    options: ['2 parts', '3 parts', '4 parts', '5 parts'],
    correctAnswer: 2,
    explanation: 'The B2 Speaking test has 4 parts.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l1-ex15',
    type: 'true-false',
    question: 'Reading and Use of English are tested in separate papers.',
    correctAnswer: 'false',
    explanation: 'False. Reading and Use of English are combined in one paper at B2 level.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l1-ex16',
    type: 'multiple-choice',
    question: 'What is the word count for Writing Part 1 (essay)?',
    options: ['100-120 words', '120-140 words', '140-190 words', '200-250 words'],
    correctAnswer: 2,
    explanation: 'The essay in Writing Part 1 should be 140-190 words.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w1l1-ex17',
    type: 'fill-blank',
    question: 'To get a Grade A at B2, you need to score at least ____ points.',
    correctAnswer: '180',
    explanation: 'A Grade A requires 180 points or higher on the Cambridge scale.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w1l1-ex18',
    type: 'multiple-choice',
    question: 'Which paper is NOT part of the B2 exam?',
    options: ['Reading', 'Writing', 'Grammar', 'Listening'],
    correctAnswer: 2,
    explanation: 'Grammar is tested within Use of English, which is part of the Reading paper. There is no separate Grammar paper.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l1-ex19',
    type: 'true-false',
    question: 'The B2 exam is recognized internationally.',
    correctAnswer: 'true',
    explanation: 'True. The Cambridge B2 First certificate is recognized by thousands of organizations worldwide.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l1-ex20',
    type: 'multiple-choice',
    question: 'How many questions are there in the B2 Reading paper?',
    options: ['30 questions', '35 questions', '40 questions', '45 questions'],
    correctAnswer: 2,
    explanation: 'The B2 Reading and Use of English paper has 40 questions in total.',
    difficulty: 'medium',
    points: 10
  }
];

// Lección b2-w1l2: Reading Part 1 - Multiple Choice (detailed understanding)
export const b2_w1l2_exercises: Exercise[] = [
  {
    id: 'b2-w1l2-ex1',
    type: 'multiple-choice',
    question: 'In Reading Part 1, how many questions are there?',
    options: ['4 questions', '6 questions', '8 questions', '10 questions'],
    correctAnswer: 2,
    explanation: 'Reading Part 1 has 8 multiple-choice questions.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l2-ex2',
    type: 'true-false',
    question: 'Reading Part 1 tests your ability to understand detailed information and opinion.',
    correctAnswer: 'true',
    explanation: 'True. This part focuses on detailed comprehension and understanding the writer\'s opinion and attitude.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l2-ex3',
    type: 'multiple-choice',
    question: 'What type of text might appear in Reading Part 1?',
    options: ['Short notices', 'Long article or story', 'Multiple short texts', 'Advertisement'],
    correctAnswer: 1,
    explanation: 'Reading Part 1 features one long article or story from various sources.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l2-ex4',
    type: 'fill-blank',
    question: 'Each question in Reading Part 1 has ____ multiple-choice options.',
    correctAnswer: '4',
    explanation: 'Each question has 4 options (A, B, C, D).',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l2-ex5',
    type: 'multiple-choice',
    question: 'What is the main skill tested in Reading Part 1?',
    options: ['Skimming', 'Scanning', 'Detailed understanding', 'Speed reading'],
    correctAnswer: 2,
    explanation: 'Reading Part 1 mainly tests detailed understanding and interpretation.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l2-ex6',
    type: 'true-false',
    question: 'You should read the questions before reading the text.',
    correctAnswer: 'true',
    explanation: 'True. Reading the questions first helps you know what to look for in the text.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l2-ex7',
    type: 'multiple-choice',
    question: 'Which strategy is most useful for Reading Part 1?',
    options: ['Reading very quickly', 'Understanding writer\'s attitude', 'Memorizing vocabulary', 'Translating every word'],
    correctAnswer: 1,
    explanation: 'Understanding the writer\'s attitude and opinion is crucial for answering questions correctly.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w1l2-ex8',
    type: 'fill-blank',
    question: 'The text in Reading Part 1 is usually between ____ and ____ words long.',
    correctAnswer: '550-650',
    explanation: 'The text is typically 550-650 words in length.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w1l2-ex9',
    type: 'multiple-choice',
    question: 'What should you do if you don\'t know the answer immediately?',
    options: ['Leave it blank', 'Guess randomly', 'Eliminate wrong options first', 'Skip the question'],
    correctAnswer: 2,
    explanation: 'Eliminating obviously wrong options increases your chances of selecting the correct answer.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w1l2-ex10',
    type: 'true-false',
    question: 'All questions follow the order of information in the text.',
    correctAnswer: 'true',
    explanation: 'True. Questions generally follow the order of the text, making it easier to locate relevant information.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l2-ex11',
    type: 'multiple-choice',
    question: 'Which of these is a typical question type in Reading Part 1?',
    options: ['Grammar correction', 'Writer\'s opinion', 'Vocabulary matching', 'Sentence ordering'],
    correctAnswer: 1,
    explanation: 'Questions about the writer\'s opinion and attitude are very common in Reading Part 1.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l2-ex12',
    type: 'fill-blank',
    question: 'You should spend approximately ____ minutes on Reading Part 1.',
    correctAnswer: '15',
    explanation: 'It\'s recommended to spend about 15 minutes on Part 1 to manage your time effectively.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w1l2-ex13',
    type: 'true-false',
    question: 'Distractors in multiple-choice options often use words from the text.',
    correctAnswer: 'true',
    explanation: 'True. Wrong options (distractors) often contain words from the text to confuse you.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w1l2-ex14',
    type: 'multiple-choice',
    question: 'What does "inference" mean in reading?',
    options: ['Reading quickly', 'Understanding implied meaning', 'Finding specific facts', 'Memorizing details'],
    correctAnswer: 1,
    explanation: 'Inference means understanding information that is suggested but not directly stated.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w1l2-ex15',
    type: 'fill-blank',
    question: 'When the writer is being ____, they are saying the opposite of what they mean.',
    correctAnswer: 'ironic',
    explanation: 'Irony is when someone says the opposite of what they actually mean, often for humorous effect.',
    difficulty: 'hard',
    points: 15
  },
  {
    id: 'b2-w1l2-ex16',
    type: 'multiple-choice',
    question: 'Which phrase indicates the writer\'s opinion?',
    options: ['In 2020', 'According to research', 'I believe that', 'The data shows'],
    correctAnswer: 2,
    explanation: '"I believe that" clearly expresses personal opinion, while others present facts or citations.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l2-ex17',
    type: 'true-false',
    question: 'You lose points for wrong answers in Reading Part 1.',
    correctAnswer: 'false',
    explanation: 'False. There is no negative marking, so it\'s always worth attempting every question.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l2-ex18',
    type: 'multiple-choice',
    question: 'What is the best way to identify the writer\'s attitude?',
    options: ['Count the words', 'Look for adjectives and adverbs', 'Check the title only', 'Read the first sentence'],
    correctAnswer: 1,
    explanation: 'Adjectives and adverbs often reveal the writer\'s attitude and feelings about the topic.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w1l2-ex19',
    type: 'fill-blank',
    question: 'A text with a ____ tone uses humor or sarcasm.',
    correctAnswer: 'humorous',
    explanation: 'A humorous tone includes jokes, humor, or playful sarcasm.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l2-ex20',
    type: 'multiple-choice',
    question: 'Which is NOT a good strategy for Reading Part 1?',
    options: ['Read the whole text first', 'Underline key words', 'Look for synonyms', 'Translate every word'],
    correctAnswer: 3,
    explanation: 'Translating every word wastes time. Focus on understanding overall meaning and key information.',
    difficulty: 'easy',
    points: 5
  }
];

// Lección b2-w1l3: Advanced Grammar - Mixed Tenses
export const b2_w1l3_exercises: Exercise[] = [
  {
    id: 'b2-w1l3-ex1',
    type: 'fill-blank',
    question: 'By next year, I ____ (work) here for ten years.',
    correctAnswer: 'will have been working',
    explanation: 'Future perfect continuous is used for actions that will continue up to a point in the future.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w1l3-ex2',
    type: 'multiple-choice',
    question: 'Which tense is used for completed actions before another past action?',
    options: ['Past simple', 'Past perfect', 'Past continuous', 'Present perfect'],
    correctAnswer: 1,
    explanation: 'Past perfect (had + past participle) describes an action completed before another past action.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l3-ex3',
    type: 'fill-blank',
    question: 'She ____ (study) English for five years before she moved to London.',
    correctAnswer: 'had been studying',
    explanation: 'Past perfect continuous shows a continuous action before a past event.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w1l3-ex4',
    type: 'true-false',
    question: 'The present perfect can be used with specific past time expressions like "yesterday".',
    correctAnswer: 'false',
    explanation: 'False. Present perfect cannot be used with specific past time markers. Use past simple instead.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w1l3-ex5',
    type: 'multiple-choice',
    question: 'Choose the correct sentence:',
    options: [
      'I\'m knowing him for years',
      'I know him for years',
      'I\'ve known him for years',
      'I knew him for years'
    ],
    correctAnswer: 2,
    explanation: 'Present perfect is used with "for" to show duration from past to present.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l3-ex6',
    type: 'fill-blank',
    question: 'This time tomorrow, we ____ (fly) to Paris.',
    correctAnswer: 'will be flying',
    explanation: 'Future continuous describes an action in progress at a specific future time.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w1l3-ex7',
    type: 'multiple-choice',
    question: 'Which sentence uses the narrative tenses correctly?',
    options: [
      'He was walking when he sees a cat',
      'He walked when he was seeing a cat',
      'He was walking when he saw a cat',
      'He is walking when he saw a cat'
    ],
    correctAnswer: 2,
    explanation: 'Past continuous for background action, past simple for the interrupting action.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w1l3-ex8',
    type: 'true-false',
    question: 'State verbs like "know", "believe", "understand" are rarely used in continuous tenses.',
    correctAnswer: 'true',
    explanation: 'True. State verbs describe states, not actions, and are rarely used in continuous forms.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l3-ex9',
    type: 'fill-blank',
    question: 'If I had known about the party, I ____ (come).',
    correctAnswer: 'would have come',
    explanation: 'Third conditional uses past perfect in the if-clause and would have + past participle in the main clause.',
    difficulty: 'hard',
    points: 15
  },
  {
    id: 'b2-w1l3-ex10',
    type: 'multiple-choice',
    question: 'What time expression is used with present perfect?',
    options: ['Last week', 'Yesterday', 'Already', 'In 2020'],
    correctAnswer: 2,
    explanation: '"Already" is used with present perfect. The others require past simple.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l3-ex11',
    type: 'fill-blank',
    question: 'When we arrived, the movie ____ (already/start).',
    correctAnswer: 'had already started',
    explanation: 'Past perfect shows an action completed before another past action.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l3-ex12',
    type: 'true-false',
    question: 'Future perfect describes an action that will be completed before a specific future time.',
    correctAnswer: 'true',
    explanation: 'True. Future perfect (will have + past participle) is used for completed future actions.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l3-ex13',
    type: 'multiple-choice',
    question: 'Choose the correct form: "I ____ to call you, but my phone died."',
    options: ['tried', 'was trying', 'had tried', 'have tried'],
    correctAnswer: 1,
    explanation: 'Past continuous shows an interrupted or incomplete action in the past.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w1l3-ex14',
    type: 'fill-blank',
    question: 'By the time you read this, I ____ (leave).',
    correctAnswer: 'will have left',
    explanation: 'Future perfect for an action that will be completed before a future moment.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w1l3-ex15',
    type: 'multiple-choice',
    question: 'Which is NOT a time expression used with present perfect?',
    options: ['Just', 'Ever', 'Yet', 'Yesterday'],
    correctAnswer: 3,
    explanation: '"Yesterday" is a specific past time and requires past simple, not present perfect.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l3-ex16',
    type: 'true-false',
    question: 'Mixed conditionals combine different time periods.',
    correctAnswer: 'true',
    explanation: 'True. Mixed conditionals refer to a past condition with a present result, or vice versa.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w1l3-ex17',
    type: 'fill-blank',
    question: 'She looks tired because she ____ (work) all night.',
    correctAnswer: 'has been working',
    explanation: 'Present perfect continuous shows a recent continuous action with a present result.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w1l3-ex18',
    type: 'multiple-choice',
    question: 'What tense describes habits in the past that no longer happen?',
    options: ['Past simple', 'Would + infinitive', 'Used to', 'Both B and C'],
    correctAnswer: 3,
    explanation: 'Both "would" and "used to" can describe past habits, though "used to" also describes past states.',
    difficulty: 'hard',
    points: 15
  },
  {
    id: 'b2-w1l3-ex19',
    type: 'fill-blank',
    question: 'I ____ (wait) for two hours when she finally arrived.',
    correctAnswer: 'had been waiting',
    explanation: 'Past perfect continuous for a continuous action before a past moment.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w1l3-ex20',
    type: 'true-false',
    question: 'The present continuous can be used to talk about fixed future arrangements.',
    correctAnswer: 'true',
    explanation: 'True. We use present continuous for personal arrangements in the future (e.g., "I\'m meeting John tomorrow").',
    difficulty: 'easy',
    points: 5
  }
];

// Lección b2-w1l4: Vocabulary - Work and Business
export const b2_w1l4_exercises: Exercise[] = [
  {
    id: 'b2-w1l4-ex1',
    type: 'multiple-choice',
    question: 'What does "to be made redundant" mean?',
    options: ['To get promoted', 'To lose your job', 'To change departments', 'To retire'],
    correctAnswer: 1,
    explanation: '"Made redundant" means losing your job because the position is no longer needed.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w1l4-ex2',
    type: 'fill-blank',
    question: 'A person who works for themselves is called __________.',
    correctAnswer: 'self-employed',
    explanation: 'Self-employed means working for yourself rather than for an employer.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l4-ex3',
    type: 'multiple-choice',
    question: 'Which collocation is correct?',
    options: ['Make a meeting', 'Do a meeting', 'Hold a meeting', 'Take a meeting'],
    correctAnswer: 2,
    explanation: 'We "hold a meeting" or "have a meeting" in business English.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l4-ex4',
    type: 'true-false',
    question: 'A "colleague" is someone you work with.',
    correctAnswer: 'true',
    explanation: 'True. A colleague is a person you work with, especially in a profession or business.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l4-ex5',
    type: 'fill-blank',
    question: 'The money you earn before tax is called your ______ salary.',
    correctAnswer: 'gross',
    explanation: 'Gross salary is your total earnings before deductions like tax.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w1l4-ex6',
    type: 'multiple-choice',
    question: 'What is a "dead line"?',
    options: ['A broken phone line', 'The end of a project', 'A time limit for completion', 'An unemployed person'],
    correctAnswer: 2,
    explanation: 'A deadline is the time by which something must be completed.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l4-ex7',
    type: 'fill-blank',
    question: 'To move up in your career is to get a ________.',
    correctAnswer: 'promotion',
    explanation: 'A promotion means advancing to a higher position in your job.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l4-ex8',
    type: 'multiple-choice',
    question: 'Which phrase means "to work extra hours"?',
    options: ['Work overtime', 'Work outsource', 'Work overload', 'Work outline'],
    correctAnswer: 0,
    explanation: '"Work overtime" means working beyond your normal hours.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l4-ex9',
    type: 'true-false',
    question: '"Fringe benefits" are illegal payments.',
    correctAnswer: 'false',
    explanation: 'False. Fringe benefits are extra benefits like health insurance or company cars, which are legal.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l4-ex10',
    type: 'fill-blank',
    question: 'A short description of your work experience is called a ______ or résumé.',
    correctAnswer: 'CV',
    explanation: 'CV (Curriculum Vitae) is a document summarizing your education and work experience.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l4-ex11',
    type: 'multiple-choice',
    question: 'What does "to hand in your notice" mean?',
    options: ['To submit a report', 'To resign from your job', 'To receive a warning', 'To get fired'],
    correctAnswer: 1,
    explanation: 'Handing in your notice means formally resigning from your job.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w1l4-ex12',
    type: 'fill-blank',
    question: 'Someone who manages a company or department is called a ________.',
    correctAnswer: 'manager',
    explanation: 'A manager is responsible for controlling or administering an organization or group.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l4-ex13',
    type: 'true-false',
    question: '"To be on sick leave" means you are not working because you are ill.',
    correctAnswer: 'true',
    explanation: 'True. Sick leave is time off work due to illness.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l4-ex14',
    type: 'multiple-choice',
    question: 'Which is the correct collocation?',
    options: ['Make business', 'Do business', 'Have business', 'Take business'],
    correctAnswer: 1,
    explanation: 'We "do business" with someone or a company.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l4-ex15',
    type: 'fill-blank',
    question: 'A person looking for work is called a job ________.',
    correctAnswer: 'seeker',
    explanation: 'A job seeker is someone actively looking for employment.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l4-ex16',
    type: 'multiple-choice',
    question: 'What is "a nine-to-five job"?',
    options: ['Part-time work', 'Regular office hours', 'Night shift', 'Freelance work'],
    correctAnswer: 1,
    explanation: 'A nine-to-five job refers to standard full-time working hours.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l4-ex17',
    type: 'fill-blank',
    question: 'The process of employing new staff is called ________.',
    correctAnswer: 'recruitment',
    explanation: 'Recruitment is the process of finding and hiring new employees.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w1l4-ex18',
    type: 'true-false',
    question: '"To climb the corporate ladder" means to progress in your career.',
    correctAnswer: 'true',
    explanation: 'True. This idiom means advancing through the ranks in a company.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l4-ex19',
    type: 'multiple-choice',
    question: 'What does "to be in charge of" mean?',
    options: ['To pay for', 'To be responsible for', 'To criticize', 'To be accused of'],
    correctAnswer: 1,
    explanation: '"In charge of" means being responsible for managing something or someone.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w1l4-ex20',
    type: 'fill-blank',
    question: 'Extra money paid for good performance is called a ________.',
    correctAnswer: 'bonus',
    explanation: 'A bonus is additional money paid as a reward for good work.',
    difficulty: 'easy',
    points: 5
  }
];

// Export array of all lesson exercises for easy access
export const b2Week1Exercises: LessonExercises[] = [
  { lessonId: 'b2-w1l1', exercises: b2_w1l1_exercises },
  { lessonId: 'b2-w1l2', exercises: b2_w1l2_exercises },
  { lessonId: 'b2-w1l3', exercises: b2_w1l3_exercises },
  { lessonId: 'b2-w1l4', exercises: b2_w1l4_exercises }
];

// ============================================
// SEMANA 2: Reading Comprehension Avanzado
// ============================================

// Lección b2-w2l1: Reading Part 2 - Gapped Text (sentence insertion)
export const b2_w2l1_exercises: Exercise[] = [
  {
    id: 'b2-w2l1-ex1',
    type: 'multiple-choice',
    question: 'What is the main focus of Reading Part 2?',
    options: ['Vocabulary', 'Text cohesion and structure', 'Grammar', 'Speed reading'],
    correctAnswer: 1,
    explanation: 'Reading Part 2 tests your ability to understand text cohesion and logical structure.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l1-ex2',
    type: 'multiple-choice',
    question: 'How many sentences do you need to insert in Reading Part 2?',
    options: ['4 sentences', '5 sentences', '6 sentences', '7 sentences'],
    correctAnswer: 2,
    explanation: 'You need to insert 6 sentences into the gapped text (with one extra sentence).',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l1-ex3',
    type: 'true-false',
    question: 'There is always one extra sentence that doesn\'t fit anywhere.',
    correctAnswer: 'true',
    explanation: 'True. There are 7 sentences for 6 gaps, so one sentence is a distractor.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l1-ex4',
    type: 'fill-blank',
    question: 'Words like "however", "therefore", and "moreover" are called ________ words.',
    correctAnswer: 'linking',
    explanation: 'Linking words (or discourse markers) connect ideas between sentences.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l1-ex5',
    type: 'multiple-choice',
    question: 'Which clue helps you identify where a sentence fits?',
    options: ['The length of the sentence', 'Pronouns and references', 'The number of words', 'The font style'],
    correctAnswer: 1,
    explanation: 'Pronouns (it, this, they) and references help identify what the sentence refers to.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l1-ex6',
    type: 'true-false',
    question: 'You should read the whole text before trying to fill the gaps.',
    correctAnswer: 'true',
    explanation: 'True. Understanding the overall topic and structure helps you make better choices.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l1-ex7',
    type: 'fill-blank',
    question: 'The word "this" in a sentence usually refers to something mentioned in the ________ sentence.',
    correctAnswer: 'previous',
    explanation: '"This" typically refers back to information mentioned earlier.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l1-ex8',
    type: 'multiple-choice',
    question: 'What should you look for when choosing which sentence fits a gap?',
    options: ['Grammatical structure only', 'Logical connection and reference words', 'Similar vocabulary', 'Sentence length'],
    correctAnswer: 1,
    explanation: 'Logical connections and reference words (pronouns, linkers) are key to finding the right fit.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w2l1-ex9',
    type: 'true-false',
    question: 'Paragraph topics can help you eliminate impossible options.',
    correctAnswer: 'true',
    explanation: 'True. Understanding each paragraph\'s topic helps you rule out irrelevant sentences.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l1-ex10',
    type: 'fill-blank',
    question: 'Reading Part 2 has ____ gaps in the text.',
    correctAnswer: '6',
    explanation: 'There are 6 gaps to fill with sentences.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l1-ex11',
    type: 'multiple-choice',
    question: 'Which linking word shows contrast?',
    options: ['Furthermore', 'However', 'Therefore', 'Moreover'],
    correctAnswer: 1,
    explanation: '"However" shows contrast or contradiction between ideas.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l1-ex12',
    type: 'true-false',
    question: 'You should complete the easiest gaps first.',
    correctAnswer: 'true',
    explanation: 'True. Starting with obvious fits helps you narrow down options for harder gaps.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l1-ex13',
    type: 'multiple-choice',
    question: 'What does text cohesion mean?',
    options: ['Long sentences', 'How ideas connect logically', 'Difficult vocabulary', 'Fast reading'],
    correctAnswer: 1,
    explanation: 'Text cohesion refers to how ideas and sentences connect logically and smoothly.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w2l1-ex14',
    type: 'fill-blank',
    question: 'The word "___" is used to add similar information.',
    correctAnswer: 'moreover',
    explanation: '"Moreover", "furthermore", and "additionally" add supporting information.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w2l1-ex15',
    type: 'multiple-choice',
    question: 'If a sentence starts with "He", what should the previous sentence mention?',
    options: ['A place', 'A thing', 'A male person', 'A time'],
    correctAnswer: 2,
    explanation: 'Pronoun "He" refers to a male person mentioned before.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l1-ex16',
    type: 'true-false',
    question: 'You lose points for wrong answers in Reading Part 2.',
    correctAnswer: 'false',
    explanation: 'False. There is no negative marking, so always attempt every gap.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l1-ex17',
    type: 'multiple-choice',
    question: 'How much time should you spend on Reading Part 2?',
    options: ['5 minutes', '10 minutes', '15 minutes', '20 minutes'],
    correctAnswer: 2,
    explanation: 'About 15 minutes is recommended for Reading Part 2.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w2l1-ex18',
    type: 'fill-blank',
    question: 'Words like "it", "they", "this" are called ________.',
    correctAnswer: 'pronouns',
    explanation: 'Pronouns replace nouns and help create text cohesion.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l1-ex19',
    type: 'multiple-choice',
    question: 'What is a good strategy for Reading Part 2?',
    options: ['Read only the gaps', 'Guess randomly', 'Look for logical and grammatical connections', 'Skip difficult gaps'],
    correctAnswer: 2,
    explanation: 'Looking for logical and grammatical connections helps you find the correct fits.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w2l1-ex20',
    type: 'true-false',
    question: 'The extra sentence that doesn\'t fit is there to confuse you.',
    correctAnswer: 'true',
    explanation: 'True. The extra sentence is a distractor designed to test your understanding of cohesion.',
    difficulty: 'medium',
    points: 10
  }
];

// Lección b2-w2l2: Reading Part 3 - Multiple Matching
export const b2_w2l2_exercises: Exercise[] = [
  {
    id: 'b2-w2l2-ex1',
    type: 'multiple-choice',
    question: 'In Reading Part 3, how many texts do you read?',
    options: ['2 texts', '3 texts', '4 texts', '5 texts'],
    correctAnswer: 2,
    explanation: 'Reading Part 3 consists of 4 short texts on a similar theme.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l2-ex2',
    type: 'multiple-choice',
    question: 'How many matching questions are there in Reading Part 3?',
    options: ['10 questions', '15 questions', '20 questions', '25 questions'],
    correctAnswer: 1,
    explanation: 'There are 15 matching questions in Reading Part 3.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l2-ex3',
    type: 'true-false',
    question: 'Each text can be matched to multiple questions.',
    correctAnswer: 'true',
    explanation: 'True. The same text may answer several different questions.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l2-ex4',
    type: 'fill-blank',
    question: 'The skill of reading quickly to find specific information is called ________.',
    correctAnswer: 'scanning',
    explanation: 'Scanning means looking quickly through text to find specific details.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l2-ex5',
    type: 'multiple-choice',
    question: 'What is the best strategy for Reading Part 3?',
    options: ['Read all texts carefully first', 'Scan for key words from questions', 'Memorize all texts', 'Skip difficult questions'],
    correctAnswer: 1,
    explanation: 'Scanning for key words from the questions helps you locate answers quickly.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w2l2-ex6',
    type: 'true-false',
    question: 'You should look for exact words from the question in the text.',
    correctAnswer: 'false',
    explanation: 'False. The text often uses synonyms or paraphrases instead of exact words.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w2l2-ex7',
    type: 'fill-blank',
    question: 'A word with similar meaning to another word is called a ________.',
    correctAnswer: 'synonym',
    explanation: 'A synonym is a word that means the same or nearly the same as another word.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l2-ex8',
    type: 'multiple-choice',
    question: 'Which skill is most important for Reading Part 3?',
    options: ['Grammar knowledge', 'Speed reading and scanning', 'Translation', 'Memorization'],
    correctAnswer: 1,
    explanation: 'Speed reading and scanning skills are essential to find information quickly.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l2-ex9',
    type: 'true-false',
    question: 'The four texts in Reading Part 3 are usually on completely different topics.',
    correctAnswer: 'false',
    explanation: 'False. The texts share a common theme but present different perspectives or details.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l2-ex10',
    type: 'fill-blank',
    question: 'You should spend approximately ____ minutes on Reading Part 3.',
    correctAnswer: '15',
    explanation: 'About 15 minutes is recommended for completing Reading Part 3.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w2l2-ex11',
    type: 'multiple-choice',
    question: 'What should you do if you can\'t find an answer immediately?',
    options: ['Give up', 'Spend 10 minutes on it', 'Move on and come back later', 'Guess without reading'],
    correctAnswer: 2,
    explanation: 'It\'s best to move on and return to difficult questions with fresh perspective.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l2-ex12',
    type: 'true-false',
    question: 'Underlining key words in questions can help you scan faster.',
    correctAnswer: 'true',
    explanation: 'True. Underlining helps you focus on what to look for in the texts.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l2-ex13',
    type: 'multiple-choice',
    question: 'If the question asks about "benefits", what synonym might appear in the text?',
    options: ['Problems', 'Advantages', 'Costs', 'Differences'],
    correctAnswer: 1,
    explanation: '"Advantages" is a common synonym for "benefits".',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w2l2-ex14',
    type: 'fill-blank',
    question: 'The texts in Reading Part 3 are labeled ____, ____, ____, and ____.',
    correctAnswer: 'A, B, C, D',
    explanation: 'The four texts are labeled A, B, C, and D.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l2-ex15',
    type: 'multiple-choice',
    question: 'Which technique helps you match information faster?',
    options: ['Reading every word', 'Looking for paraphrases and synonyms', 'Translating mentally', 'Reading backwards'],
    correctAnswer: 1,
    explanation: 'Recognizing paraphrases and synonyms helps you match information quickly.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w2l2-ex16',
    type: 'true-false',
    question: 'You can use each text (A, B, C, or D) only once.',
    correctAnswer: 'false',
    explanation: 'False. Each text can be used multiple times to answer different questions.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w2l2-ex17',
    type: 'fill-blank',
    question: 'Reading Part 3 tests your ability to locate ________ information.',
    correctAnswer: 'specific',
    explanation: 'This part tests your ability to find specific details across multiple texts.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l2-ex18',
    type: 'multiple-choice',
    question: 'What is the main challenge of Reading Part 3?',
    options: ['Very long texts', 'Finding information quickly across 4 texts', 'Difficult vocabulary', 'Grammar questions'],
    correctAnswer: 1,
    explanation: 'The main challenge is efficiently locating specific information across multiple short texts.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w2l2-ex19',
    type: 'true-false',
    question: 'It\'s helpful to skim all four texts before answering questions.',
    correctAnswer: 'true',
    explanation: 'True. A quick skim gives you an overview of what each text contains.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l2-ex20',
    type: 'multiple-choice',
    question: 'Which word is a synonym for "drawback"?',
    options: ['Benefit', 'Disadvantage', 'Feature', 'Improvement'],
    correctAnswer: 1,
    explanation: '"Disadvantage" means the same as "drawback" - a negative aspect.',
    difficulty: 'easy',
    points: 5
  }
];

// Lección b2-w2l3: Reading Part 4 - Multiple Choice (multiple texts)
export const b2_w2l3_exercises: Exercise[] = [
  {
    id: 'b2-w2l3-ex1',
    type: 'multiple-choice',
    question: 'How many texts do you read in Reading Part 4?',
    options: ['2 texts', '3 texts', '4 texts', '5 texts'],
    correctAnswer: 2,
    explanation: 'Reading Part 4 contains 4-5 short texts on a related theme.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l3-ex2',
    type: 'multiple-choice',
    question: 'What is the main focus of Reading Part 4?',
    options: ['Grammar', 'Cross-text comparison', 'Vocabulary', 'Translation'],
    correctAnswer: 1,
    explanation: 'Reading Part 4 tests your ability to compare and contrast information across multiple texts.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l3-ex3',
    type: 'true-false',
    question: 'In Reading Part 4, all texts are about exactly the same thing.',
    correctAnswer: 'false',
    explanation: 'False. The texts share a theme but present different perspectives or opinions.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l3-ex4',
    type: 'fill-blank',
    question: 'Reading Part 4 has ____ multiple-choice questions.',
    correctAnswer: '6',
    explanation: 'There are 6 questions in Reading Part 4.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l3-ex5',
    type: 'multiple-choice',
    question: 'Which skill is most important for Reading Part 4?',
    options: ['Memorization', 'Comparing viewpoints', 'Translation', 'Speed writing'],
    correctAnswer: 1,
    explanation: 'The ability to compare and identify different viewpoints across texts is crucial.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l3-ex6',
    type: 'true-false',
    question: 'Questions in Reading Part 4 ask you to identify which writer expresses a certain opinion.',
    correctAnswer: 'true',
    explanation: 'True. Questions often ask which text/writer mentions a specific idea or holds a particular view.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l3-ex7',
    type: 'fill-blank',
    question: 'The texts in Reading Part 4 are usually labeled A, B, C, and ____.',
    correctAnswer: 'D',
    explanation: 'The four texts are labeled A, B, C, and D.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l3-ex8',
    type: 'multiple-choice',
    question: 'What should you do before answering questions in Reading Part 4?',
    options: ['Memorize all texts', 'Skim all texts to understand each viewpoint', 'Translate everything', 'Answer randomly'],
    correctAnswer: 1,
    explanation: 'Skimming all texts first helps you understand each writer\'s main perspective.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w2l3-ex9',
    type: 'true-false',
    question: 'Each text can be the answer to multiple questions.',
    correctAnswer: 'true',
    explanation: 'True. One text might be referenced in several different questions.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l3-ex10',
    type: 'fill-blank',
    question: 'You should spend approximately ____ minutes on Reading Part 4.',
    correctAnswer: '15',
    explanation: 'About 15 minutes is recommended for Reading Part 4.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w2l3-ex11',
    type: 'multiple-choice',
    question: 'Which strategy helps in Reading Part 4?',
    options: ['Reading word by word', 'Identifying each writer\'s opinion', 'Translating mentally', 'Skipping questions'],
    correctAnswer: 1,
    explanation: 'Clearly identifying each writer\'s opinion or stance is key to answering correctly.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w2l3-ex12',
    type: 'true-false',
    question: 'The texts in Reading Part 4 are all written by the same author.',
    correctAnswer: 'false',
    explanation: 'False. Each text is written by a different person with their own perspective.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l3-ex13',
    type: 'multiple-choice',
    question: 'What type of questions are asked in Reading Part 4?',
    options: ['Grammar questions', 'Which writer shares a certain opinion?', 'Vocabulary definitions', 'Translation tasks'],
    correctAnswer: 1,
    explanation: 'Questions ask you to identify which text/writer expresses specific opinions or information.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l3-ex14',
    type: 'fill-blank',
    question: 'Reading Part 4 tests your ability to understand different __________ on a topic.',
    correctAnswer: 'viewpoints',
    explanation: 'This part tests understanding of different viewpoints, opinions, or perspectives.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l3-ex15',
    type: 'multiple-choice',
    question: 'If two texts mention similar ideas, how do you choose the correct answer?',
    options: ['Pick randomly', 'Look for the exact match to the question', 'Choose the longest text', 'Skip the question'],
    correctAnswer: 1,
    explanation: 'Look for the text that most precisely matches what the question asks.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w2l3-ex16',
    type: 'true-false',
    question: 'Reading Part 4 requires you to understand implicit meaning, not just explicit facts.',
    correctAnswer: 'true',
    explanation: 'True. You often need to infer opinions and attitudes, not just identify stated facts.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w2l3-ex17',
    type: 'fill-blank',
    question: 'Each text in Reading Part 4 is approximately ____-____ words long.',
    correctAnswer: '100-150',
    explanation: 'Each text is roughly 100-150 words in length.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w2l3-ex18',
    type: 'multiple-choice',
    question: 'What is a common mistake in Reading Part 4?',
    options: ['Reading too carefully', 'Not distinguishing between similar viewpoints', 'Taking too much time', 'All of the above'],
    correctAnswer: 3,
    explanation: 'All are common mistakes. Balance speed with careful attention to distinguish viewpoints.',
    difficulty: 'hard',
    points: 15
  },
  {
    id: 'b2-w2l3-ex19',
    type: 'true-false',
    question: 'You should underline key opinion words in each text.',
    correctAnswer: 'true',
    explanation: 'True. Marking opinion indicators helps you track each writer\'s stance.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l3-ex20',
    type: 'multiple-choice',
    question: 'Which is NOT tested in Reading Part 4?',
    options: ['Comparing opinions', 'Identifying viewpoints', 'Grammar structures', 'Understanding attitudes'],
    correctAnswer: 2,
    explanation: 'Grammar structures are not directly tested. Focus is on understanding and comparing opinions.',
    difficulty: 'easy',
    points: 5
  }
];

// Lección b2-w2l4: Vocabulary - Environment and Society
export const b2_w2l4_exercises: Exercise[] = [
  {
    id: 'b2-w2l4-ex1',
    type: 'multiple-choice',
    question: 'What does "sustainable" mean?',
    options: ['Expensive', 'Able to continue without damaging the environment', 'Fast', 'Modern'],
    correctAnswer: 1,
    explanation: 'Sustainable means able to be maintained without depleting natural resources.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l4-ex2',
    type: 'fill-blank',
    question: 'The increase in Earth\'s temperature is called global ________.',
    correctAnswer: 'warming',
    explanation: 'Global warming refers to the long-term increase in Earth\'s average temperature.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l4-ex3',
    type: 'multiple-choice',
    question: 'Which collocation is correct?',
    options: ['Make pollution', 'Do pollution', 'Cause pollution', 'Have pollution'],
    correctAnswer: 2,
    explanation: 'We "cause pollution" or "create pollution" in English.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l4-ex4',
    type: 'true-false',
    question: '"Renewable energy" comes from sources that won\'t run out.',
    correctAnswer: 'true',
    explanation: 'True. Renewable energy comes from sources like sun, wind, and water that naturally replenish.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l4-ex5',
    type: 'fill-blank',
    question: 'The variety of plant and animal life in an area is called ________.',
    correctAnswer: 'biodiversity',
    explanation: 'Biodiversity refers to the variety of life forms in an environment.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w2l4-ex6',
    type: 'multiple-choice',
    question: 'What does "deforestation" mean?',
    options: ['Planting trees', 'Cutting down forests', 'Protecting forests', 'Studying forests'],
    correctAnswer: 1,
    explanation: 'Deforestation is the action of clearing forests or trees from an area.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l4-ex7',
    type: 'fill-blank',
    question: 'Gases that trap heat in the atmosphere are called ________ gases.',
    correctAnswer: 'greenhouse',
    explanation: 'Greenhouse gases like CO2 trap heat and contribute to global warming.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l4-ex8',
    type: 'multiple-choice',
    question: 'Which phrase means "to use something again"?',
    options: ['Reduce', 'Reuse', 'Recycle', 'All of the above'],
    correctAnswer: 1,
    explanation: '"Reuse" means to use something again. "Recycle" means to process for reuse.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l4-ex9',
    type: 'true-false',
    question: '"Fossil fuels" include oil, coal, and natural gas.',
    correctAnswer: 'true',
    explanation: 'True. Fossil fuels are formed from ancient organic matter.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l4-ex10',
    type: 'fill-blank',
    question: 'The damage done to water, air, or land by harmful substances is called ________.',
    correctAnswer: 'pollution',
    explanation: 'Pollution is the introduction of harmful materials into the environment.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l4-ex11',
    type: 'multiple-choice',
    question: 'What does "carbon footprint" mean?',
    options: ['A type of shoe', 'The amount of CO2 you produce', 'A walking path', 'A measurement tool'],
    correctAnswer: 1,
    explanation: 'Carbon footprint is the total amount of greenhouse gases produced by your actions.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w2l4-ex12',
    type: 'fill-blank',
    question: 'Animals that might soon disappear completely are called ________ species.',
    correctAnswer: 'endangered',
    explanation: 'Endangered species are at serious risk of extinction.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l4-ex13',
    type: 'true-false',
    question: '"To conserve" means to protect and preserve something.',
    correctAnswer: 'true',
    explanation: 'True. Conservation means protecting natural resources and wildlife.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l4-ex14',
    type: 'multiple-choice',
    question: 'Which is the correct collocation?',
    options: ['Do waste', 'Make waste', 'Produce waste', 'Create waste'],
    correctAnswer: 2,
    explanation: 'We "produce waste" or "generate waste" in English.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l4-ex15',
    type: 'fill-blank',
    question: 'The layer of gas that protects Earth from UV radiation is the ________ layer.',
    correctAnswer: 'ozone',
    explanation: 'The ozone layer protects life on Earth from harmful ultraviolet radiation.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w2l4-ex16',
    type: 'multiple-choice',
    question: 'What does "eco-friendly" mean?',
    options: ['Expensive', 'Not harmful to the environment', 'Made of plastic', 'Very friendly'],
    correctAnswer: 1,
    explanation: 'Eco-friendly means not harmful to the environment.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l4-ex17',
    type: 'fill-blank',
    question: 'When ice caps melt, they contribute to rising sea ________.',
    correctAnswer: 'levels',
    explanation: 'Melting ice caps cause sea levels to rise, threatening coastal areas.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w2l4-ex18',
    type: 'true-false',
    question: '"Climate change" refers only to temperature increases.',
    correctAnswer: 'false',
    explanation: 'False. Climate change includes changes in temperature, precipitation, sea levels, and weather patterns.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w2l4-ex19',
    type: 'multiple-choice',
    question: 'Which word means "to make something impure or toxic"?',
    options: ['Purify', 'Contaminate', 'Clean', 'Filter'],
    correctAnswer: 1,
    explanation: '"Contaminate" means to make something impure or poisonous.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w2l4-ex20',
    type: 'fill-blank',
    question: 'The process of treating materials so they can be used again is called ________.',
    correctAnswer: 'recycling',
    explanation: 'Recycling is the process of converting waste into reusable materials.',
    difficulty: 'easy',
    points: 5
  }
];

// Export array for Semana 2 COMPLETA
export const b2Week2Exercises: LessonExercises[] = [
  { lessonId: 'b2-w2l1', exercises: b2_w2l1_exercises },
  { lessonId: 'b2-w2l2', exercises: b2_w2l2_exercises },
  { lessonId: 'b2-w2l3', exercises: b2_w2l3_exercises },
  { lessonId: 'b2-w2l4', exercises: b2_w2l4_exercises }
];

// ============================================
// SEMANA 3: Writing Skills - Essay Writing
// ============================================

// Lección b2-w3l1: Writing Part 1 - Essay (compulsory)
export const b2_w3l1_exercises: Exercise[] = [
  {
    id: 'b2-w3l1-ex1',
    type: 'multiple-choice',
    question: 'How many words should a B2 essay be?',
    options: ['100-120 words', '140-190 words', '200-250 words', '250-300 words'],
    correctAnswer: 1,
    explanation: 'B2 essays should be 140-190 words long.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w3l1-ex2',
    type: 'multiple-choice',
    question: 'How many paragraphs should a B2 essay have?',
    options: ['2 paragraphs', '3 paragraphs', '4-5 paragraphs', '6 paragraphs'],
    correctAnswer: 2,
    explanation: 'A B2 essay typically has 4-5 paragraphs: introduction, 2-3 body paragraphs, and conclusion.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w3l1-ex3',
    type: 'true-false',
    question: 'In B2 Writing Part 1, you can choose whether to write an essay or not.',
    correctAnswer: 'false',
    explanation: 'False. Writing Part 1 is compulsory - you must write an essay.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w3l1-ex4',
    type: 'fill-blank',
    question: 'The main argument or position in an essay is called the ________ statement.',
    correctAnswer: 'thesis',
    explanation: 'A thesis statement presents the main argument or claim of your essay.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w3l1-ex5',
    type: 'multiple-choice',
    question: 'What should the introduction of an essay include?',
    options: ['Only your opinion', 'Background info and thesis statement', 'Conclusion', 'Examples'],
    correctAnswer: 1,
    explanation: 'The introduction should provide context and include your thesis statement.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w3l1-ex6',
    type: 'true-false',
    question: 'Each body paragraph should focus on one main idea.',
    correctAnswer: 'true',
    explanation: 'True. Each body paragraph should develop one clear point supporting your thesis.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w3l1-ex7',
    type: 'fill-blank',
    question: 'The final paragraph that summarizes your argument is called the ________.',
    correctAnswer: 'conclusion',
    explanation: 'The conclusion restates your thesis and summarizes main points.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w3l1-ex8',
    type: 'multiple-choice',
    question: 'Which is the best opening for a B2 essay?',
    options: [
      'I think that...',
      'In today\'s world, many people believe that...',
      'This essay will talk about...',
      'Hello, my name is...'
    ],
    correctAnswer: 1,
    explanation: 'A general statement about the topic is more formal and engaging than the other options.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w3l1-ex9',
    type: 'true-false',
    question: 'You should use contractions like "don\'t" and "can\'t" in formal essays.',
    correctAnswer: 'false',
    explanation: 'False. Avoid contractions in formal writing. Use "do not" and "cannot" instead.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w3l1-ex10',
    type: 'fill-blank',
    question: 'Words like "firstly", "secondly", and "finally" are called ________ words.',
    correctAnswer: 'sequencing',
    explanation: 'Sequencing words (or ordering words) help organize your arguments logically.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w3l1-ex11',
    type: 'multiple-choice',
    question: 'What should you do in the conclusion?',
    options: [
      'Introduce new ideas',
      'Restate thesis and summarize points',
      'Write personal stories',
      'Ask questions'
    ],
    correctAnswer: 1,
    explanation: 'The conclusion should restate your thesis and summarize main arguments without new ideas.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w3l1-ex12',
    type: 'true-false',
    question: 'It\'s acceptable to use "I" and "my opinion" in B2 essays.',
    correctAnswer: 'true',
    explanation: 'True. While formal, B2 essays can include personal opinions using "I" appropriately.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w3l1-ex13',
    type: 'multiple-choice',
    question: 'Which transition word shows contrast?',
    options: ['Furthermore', 'However', 'Moreover', 'Additionally'],
    correctAnswer: 1,
    explanation: '"However" introduces a contrasting idea, while others add supporting information.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w3l1-ex14',
    type: 'fill-blank',
    question: 'You should spend approximately ________ minutes planning your essay.',
    correctAnswer: '5-10',
    explanation: 'Spend 5-10 minutes planning to ensure a clear structure before writing.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w3l1-ex15',
    type: 'true-false',
    question: 'Every paragraph needs a topic sentence.',
    correctAnswer: 'true',
    explanation: 'True. A topic sentence introduces the main idea of each paragraph.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w3l1-ex16',
    type: 'multiple-choice',
    question: 'Which is the most formal way to express your opinion?',
    options: [
      'I think...',
      'In my view...',
      'It can be argued that...',
      'I reckon...'
    ],
    correctAnswer: 2,
    explanation: '"It can be argued that..." is more formal and academic than the other options.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w3l1-ex17',
    type: 'fill-blank',
    question: 'Supporting your arguments with ________ makes your essay more convincing.',
    correctAnswer: 'examples',
    explanation: 'Examples, facts, or evidence strengthen your arguments and make them more persuasive.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w3l1-ex18',
    type: 'true-false',
    question: 'You lose marks if you write more than 190 words.',
    correctAnswer: 'false',
    explanation: 'False. Writing slightly over the limit is acceptable, but being too short will lose marks.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w3l1-ex19',
    type: 'multiple-choice',
    question: 'What is the purpose of a thesis statement?',
    options: [
      'To ask a question',
      'To state your main argument clearly',
      'To provide examples',
      'To conclude the essay'
    ],
    correctAnswer: 1,
    explanation: 'A thesis statement clearly presents your main argument or position on the topic.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w3l1-ex20',
    type: 'fill-blank',
    question: 'The essay structure is: introduction, ________ paragraphs, and conclusion.',
    correctAnswer: 'body',
    explanation: 'Body paragraphs contain your main arguments and supporting evidence.',
    difficulty: 'easy',
    points: 5
  }
];

// Lección b2-w3l2: Advanced Linking Devices
export const b2_w3l2_exercises: Exercise[] = [
  {
    id: 'b2-w3l2-ex1',
    type: 'multiple-choice',
    question: 'Which linking word adds information?',
    options: ['However', 'Furthermore', 'Although', 'Despite'],
    correctAnswer: 1,
    explanation: '"Furthermore" adds additional information to support your point.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w3l2-ex2',
    type: 'fill-blank',
    question: '________ the rain, we went to the park. (shows contrast)',
    correctAnswer: 'Despite',
    explanation: '"Despite" is used to show contrast and is followed by a noun or -ing form.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w3l2-ex3',
    type: 'true-false',
    question: '"Moreover" and "furthermore" have similar meanings.',
    correctAnswer: 'true',
    explanation: 'True. Both add supporting information or additional points.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w3l2-ex4',
    type: 'multiple-choice',
    question: 'Which linker shows result or consequence?',
    options: ['Although', 'Therefore', 'While', 'Unless'],
    correctAnswer: 1,
    explanation: '"Therefore" introduces a result or logical consequence.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w3l2-ex5',
    type: 'fill-blank',
    question: 'She studied hard; ________, she passed the exam.',
    correctAnswer: 'consequently',
    explanation: '"Consequently" shows a result. Other options: therefore, thus, as a result.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w3l2-ex6',
    type: 'true-false',
    question: '"In spite of" and "despite" mean the same thing.',
    correctAnswer: 'true',
    explanation: 'True. Both show contrast, though "in spite of" is followed by "of".',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w3l2-ex7',
    type: 'multiple-choice',
    question: 'Which is correct?',
    options: [
      'Although it was raining, but we went out',
      'Although it was raining, we went out',
      'It was raining, although we went out',
      'Although raining, we went out'
    ],
    correctAnswer: 1,
    explanation: '"Although" doesn\'t need "but". It connects two contrasting clauses.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w3l2-ex8',
    type: 'fill-blank',
    question: 'Smoking is unhealthy. ________, it is expensive.',
    correctAnswer: 'Moreover',
    explanation: '"Moreover" adds another point. Alternatives: Furthermore, In addition, Additionally.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w3l2-ex9',
    type: 'true-false',
    question: '"On the other hand" introduces a contrasting view.',
    correctAnswer: 'true',
    explanation: 'True. It presents an alternative or opposite viewpoint.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w3l2-ex10',
    type: 'multiple-choice',
    question: 'Which shows purpose?',
    options: ['Because', 'In order to', 'Although', 'However'],
    correctAnswer: 1,
    explanation: '"In order to" expresses purpose (why something is done).',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w3l2-ex11',
    type: 'fill-blank',
    question: 'She worked hard ________ succeed.',
    correctAnswer: 'in order to',
    explanation: '"In order to" + infinitive shows purpose. Also: "to", "so as to".',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w3l2-ex12',
    type: 'true-false',
    question: '"Nevertheless" means the same as "however".',
    correctAnswer: 'true',
    explanation: 'True. Both introduce contrasting information, though "nevertheless" is more formal.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w3l2-ex13',
    type: 'multiple-choice',
    question: 'Which is the most formal linker for adding information?',
    options: ['And', 'Also', 'Furthermore', 'Too'],
    correctAnswer: 2,
    explanation: '"Furthermore" is the most formal way to add supporting information.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w3l2-ex14',
    type: 'fill-blank',
    question: '________ being tired, she continued working.',
    correctAnswer: 'Despite',
    explanation: '"Despite" + -ing form shows contrast. Also: "In spite of".',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w3l2-ex15',
    type: 'true-false',
    question: '"As a result" introduces a consequence.',
    correctAnswer: 'true',
    explanation: 'True. "As a result" shows what happened because of something.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w3l2-ex16',
    type: 'multiple-choice',
    question: 'Complete: "I like coffee, ________ tea."',
    options: ['however', 'whereas I prefer', 'despite', 'although'],
    correctAnswer: 1,
    explanation: '"Whereas" compares two contrasting preferences or situations.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w3l2-ex17',
    type: 'fill-blank',
    question: 'It was cold. ________, we went swimming.',
    correctAnswer: 'Nevertheless',
    explanation: '"Nevertheless" shows contrast - something happened despite the circumstances.',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'b2-w3l2-ex18',
    type: 'true-false',
    question: 'Linking words make your writing more coherent.',
    correctAnswer: 'true',
    explanation: 'True. They connect ideas logically and improve the flow of your writing.',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w3l2-ex19',
    type: 'multiple-choice',
    question: 'Which shows condition?',
    options: ['Unless', 'Moreover', 'Furthermore', 'Therefore'],
    correctAnswer: 0,
    explanation: '"Unless" introduces a condition (meaning "if not").',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'b2-w3l2-ex20',
    type: 'fill-blank',
    question: '________ you study, you won\'t pass. (condition)',
    correctAnswer: 'Unless',
    explanation: '"Unless" means "if not". Unless you study = If you don\'t study.',
    difficulty: 'easy',
    points: 5
  }
];

// Export array for Semana 3 (primeras 2 lecciones)
export const b2Week3ExercisesPartial: LessonExercises[] = [
  { lessonId: 'b2-w3l1', exercises: b2_w3l1_exercises },
  { lessonId: 'b2-w3l2', exercises: b2_w3l2_exercises }
];
// Quedan 840 ejercicios por implementar siguiendo este mismo patrón.
// Cada ejercicio está diseñado para ser:
// 1. Específico al contenido de la lección
// 2. Apropiado para el nivel B2
// 3. Interactivo y evaluable
// 4. Educativo con explicaciones claras
//
// La implementación completa requiere continuar con este patrón para:
// - Completar Semana 2 (40 ejercicios restantes)
// - Semanas 3-12 (800 ejercicios)
// Total objetivo: 960 ejercicios para 48 lecciones
