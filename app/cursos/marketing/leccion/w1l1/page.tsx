'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'

export default function Lesson1Page() {
  const [activeTab, setActiveTab] = useState<'intro' | 'vocab' | 'exercises' | 'practice' | 'task'>('intro')
  const [currentAudio, setCurrentAudio] = useState<string | null>(null)
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: number}>({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set())
  
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Datos de vocabulario con pronunciación real
  const vocabulary = [
    {
      id: 1,
      term: 'SEO',
      fullForm: 'Search Engine Optimization',
      pronunciation: '/es-iː-əʊ/',
      definition: 'The practice of improving website visibility in search engine results organically (without paid advertising)',
      spanish: 'Optimización para motores de búsqueda',
      example: 'Our SEO strategy helped us rank first for "best marketing tools".',
      audioUrl: 'https://www.example.com/audio/seo.mp3', // Se añadirá audio real
      context: 'Technical term used daily in digital marketing meetings',
      relatedTerms: ['SEM', 'Keywords', 'SERP', 'Backlinks']
    },
    {
      id: 2,
      term: 'SEM',
      fullForm: 'Search Engine Marketing',
      pronunciation: '/es-iː-em/',
      definition: 'Paid advertising strategies to increase visibility in search engine results',
      spanish: 'Marketing en motores de búsqueda',
      example: 'We allocated 30% of our budget to SEM campaigns on Google Ads.',
      audioUrl: 'https://www.example.com/audio/sem.mp3',
      context: 'Used when discussing paid advertising budgets',
      relatedTerms: ['PPC', 'Google Ads', 'CPC']
    },
    {
      id: 3,
      term: 'CTR',
      fullForm: 'Click-Through Rate',
      pronunciation: '/siː-tiː-ɑːr/',
      definition: 'The percentage of people who click on your ad or link after seeing it',
      spanish: 'Tasa de clics',
      example: 'Our email campaign achieved a 12% CTR, which is above industry average.',
      formula: 'CTR = (Clicks / Impressions) × 100',
      audioUrl: 'https://www.example.com/audio/ctr.mp3',
      context: 'Key metric discussed in performance reports',
      relatedTerms: ['Impressions', 'Clicks', 'Engagement']
    },
    {
      id: 4,
      term: 'CPC',
      fullForm: 'Cost Per Click',
      pronunciation: '/siː-piː-siː/',
      definition: 'The amount you pay each time someone clicks on your paid advertisement',
      spanish: 'Costo por clic',
      example: 'Our average CPC decreased from $2.50 to $1.80 after optimizing our ads.',
      formula: 'CPC = Total Cost / Total Clicks',
      audioUrl: 'https://www.example.com/audio/cpc.mp3',
      context: 'Critical for budget planning and ROI calculations',
      relatedTerms: ['PPC', 'CPM', 'CPA', 'Budget']
    },
    {
      id: 5,
      term: 'ROI',
      fullForm: 'Return on Investment',
      pronunciation: '/ɑːr-əʊ-aɪ/',
      definition: 'A measure of the profitability of an investment, expressed as a percentage',
      spanish: 'Retorno de inversión',
      example: 'The campaign generated a 350% ROI in just three months.',
      formula: 'ROI = [(Revenue - Cost) / Cost] × 100',
      audioUrl: 'https://www.example.com/audio/roi.mp3',
      context: 'Most important metric when presenting to management',
      relatedTerms: ['ROAS', 'Revenue', 'Profit', 'Budget']
    },
    {
      id: 6,
      term: 'Conversion Rate',
      pronunciation: '/kənˈvɜːʃən reɪt/',
      definition: 'The percentage of visitors who complete a desired action (purchase, signup, download)',
      spanish: 'Tasa de conversión',
      example: 'After redesigning our landing page, our conversion rate increased from 2% to 5%.',
      formula: 'Conversion Rate = (Conversions / Total Visitors) × 100',
      audioUrl: 'https://www.example.com/audio/conversion-rate.mp3',
      context: 'Primary metric for measuring campaign success',
      relatedTerms: ['Funnel', 'Lead', 'CTA', 'Landing Page']
    }
  ]

  // Preguntas de quiz interactivo
  const quizQuestions = [
    {
      id: 1,
      question: 'What does CTR stand for?',
      options: ['Click Transfer Rate', 'Click-Through Rate', 'Customer Transfer Rate', 'Content Transfer Rate'],
      correct: 1,
      explanation: 'CTR stands for Click-Through Rate, measuring the percentage of people who click after seeing your content.'
    },
    {
      id: 2,
      question: 'Which metric measures profitability?',
      options: ['CTR', 'CPC', 'ROI', 'CPA'],
      correct: 2,
      explanation: 'ROI (Return on Investment) measures profitability by comparing revenue to cost.'
    },
    {
      id: 3,
      question: 'What is the formula for Conversion Rate?',
      options: [
        '(Clicks / Impressions) × 100',
        '(Conversions / Total Visitors) × 100',
        '(Revenue - Cost) / Cost × 100',
        '(Leads / Clicks) × 100'
      ],
      correct: 1,
      explanation: 'Conversion Rate = (Conversions / Total Visitors) × 100'
    }
  ]

  // Frases para práctica de pronunciación
  const speakingPractice = [
    {
      id: 1,
      phrase: "Our SEO strategy improved our organic traffic by 150%.",
      difficulty: 'beginner',
      tips: 'Focus on pronouncing SEO as separate letters: S-E-O'
    },
    {
      id: 2,
      phrase: "The campaign achieved a 12% CTR with a $1.50 CPC, resulting in a 300% ROI.",
      difficulty: 'intermediate',
      tips: 'Practice saying the numbers clearly: twelve percent, one dollar fifty'
    },
    {
      id: 3,
      phrase: "We need to optimize our conversion rate across all touchpoints in the customer journey.",
      difficulty: 'advanced',
      tips: 'Natural rhythm and word linking: "We need-to optimize-our..."'
    }
  ]

  const playAudio = (url: string, term: string) => {
    setCurrentAudio(term)
    // En producción, esto reproduciría el audio real
    setTimeout(() => setCurrentAudio(null), 2000)
  }

  const flipCard = (id: number) => {
    const newSet = new Set(flippedCards)
    if (newSet.has(id)) {
      newSet.delete(id)
    } else {
      newSet.add(id)
    }
    setFlippedCards(newSet)
  }

  const submitQuiz = () => {
    setQuizSubmitted(true)
    if (Object.keys(quizAnswers).length === quizQuestions.length) {
      const newCompleted = new Set(completedSections)
      newCompleted.add('quiz')
      setCompletedSections(newCompleted)
    }
  }

  const getQuizScore = () => {
    let correct = 0
    quizQuestions.forEach(q => {
      if (quizAnswers[q.id] === q.correct) correct++
    })
    return Math.round((correct / quizQuestions.length) * 100)
  }

  const startRecording = () => {
    setIsRecording(true)
    // En producción, aquí se iniciaría la grabación real con Web Audio API
    setTimeout(() => setIsRecording(false), 3000)
  }

  const progressPercentage = Math.round((completedSections.size / 5) * 100)

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/cursos/marketing" className="inline-flex items-center text-purple-100 hover:text-white mb-4 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al curso
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-purple-500 text-xs font-semibold rounded-full mr-2">
                  SEMANA 1 • LECCIÓN 1
                </span>
                <span className="inline-block px-3 py-1 bg-purple-700 text-xs font-semibold rounded-full mr-2">
                  45 min
                </span>
                <span className="inline-block px-3 py-1 bg-green-500 text-xs font-semibold rounded-full">
                  🎓 ENTRENAMIENTO REAL
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-2">Digital Marketing Vocabulary Essentials</h1>
              <p className="text-xl text-purple-100">Complete immersive training with audio, exercises & real practice</p>
            </div>
            
            <div className="hidden md:block">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">{progressPercentage}%</div>
                <div className="text-sm text-purple-100">Completado</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-600 to-purple-800 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'intro', label: 'Introducción', icon: '📖' },
              { id: 'vocab', label: 'Vocabulario + Audio', icon: '🎧' },
              { id: 'exercises', label: 'Ejercicios', icon: '✍️' },
              { id: 'practice', label: 'Práctica Speaking', icon: '🗣️' },
              { id: 'task', label: 'Tarea Real', icon: '🎯' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Tab: Introducción */}
        {activeTab === 'intro' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Real English Training! 🚀</h2>
              <p className="text-lg text-gray-700 mb-6">
                This is NOT just a vocabulary list. This is a <strong>complete immersive training</strong> designed 
                to make you fluent in marketing English through:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                  <div className="text-3xl mb-3">🎧</div>
                  <h3 className="font-bold text-gray-900 mb-2">Native Audio Pronunciation</h3>
                  <p className="text-gray-700 text-sm">Listen and repeat each term with real native speaker audio</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                  <div className="text-3xl mb-3">✍️</div>
                  <h3 className="font-bold text-gray-900 mb-2">Interactive Exercises</h3>
                  <p className="text-gray-700 text-sm">Flashcards, quizzes, and matching games with instant feedback</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                  <div className="text-3xl mb-3">🗣️</div>
                  <h3 className="font-bold text-gray-900 mb-2">Speaking Practice</h3>
                  <p className="text-gray-700 text-sm">Record yourself and practice real marketing phrases</p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                  <div className="text-3xl mb-3">🎯</div>
                  <h3 className="font-bold text-gray-900 mb-2">Real World Tasks</h3>
                  <p className="text-gray-700 text-sm">Analyze actual Google Analytics reports like a pro</p>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
                <h3 className="font-bold text-purple-900 mb-3">🎯 Learning Objectives:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-purple-900">Recognize and define 6 essential marketing terms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-purple-900">Pronounce acronyms correctly with native audio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-purple-900">Use terminology naturally in professional contexts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-purple-900">Complete real-world marketing tasks in English</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Vocabulario + Audio */}
        {activeTab === 'vocab' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-bold mb-2">🎧 Listen & Learn</h2>
              <p>Click the play button to hear native pronunciation. Repeat each term 3 times.</p>
            </div>

            <div className="grid gap-6">
              {vocabulary.map((item, index) => (
                <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-purple-700">{item.term}</h3>
                          {item.fullForm && (
                            <span className="text-sm text-gray-600">({item.fullForm})</span>
                          )}
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-purple-600 font-mono">{item.pronunciation}</span>
                          <button
                            onClick={() => playAudio(item.audioUrl, item.term)}
                            className={`flex items-center gap-2 px-3 py-1 rounded-full transition-colors ${
                              currentAudio === item.term
                                ? 'bg-green-500 text-white'
                                : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                            }`}
                          >
                            {currentAudio === item.term ? (
                              <>
                                <span className="animate-pulse">🔊</span>
                                <span className="text-sm">Playing...</span>
                              </>
                            ) : (
                              <>
                                <span>▶️</span>
                                <span className="text-sm">Listen</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <span className="text-sm font-semibold text-gray-700">Definition:</span>
                        <p className="text-gray-900 mt-1">{item.definition}</p>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <span className="text-sm font-semibold text-blue-900">En español:</span>
                        <p className="text-blue-800 mt-1">{item.spanish}</p>
                      </div>

                      {item.formula && (
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <span className="text-sm font-semibold text-green-900">Formula:</span>
                          <p className="text-green-800 font-mono mt-1">{item.formula}</p>
                        </div>
                      )}

                      <div className="bg-purple-50 p-4 rounded-lg">
                        <span className="text-sm font-semibold text-purple-900">Example:</span>
                        <p className="text-purple-800 italic mt-1">"{item.example}"</p>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <span className="text-sm font-semibold text-yellow-900">Context:</span>
                        <p className="text-yellow-800 text-sm mt-1">{item.context}</p>
                      </div>

                      <div>
                        <span className="text-sm font-semibold text-gray-700">Related terms:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {item.relatedTerms.map((term, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                              {term}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Ejercicios */}
        {activeTab === 'exercises' && (
          <div className="space-y-8">
            {/* Flashcards */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🃏 Interactive Flashcards</h2>
              <p className="text-gray-700 mb-6">Click each card to flip and test your knowledge</p>
              
              <div className="grid md:grid-cols-3 gap-4">
                {vocabulary.slice(0, 6).map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => flipCard(item.id)}
                    className="relative h-48 cursor-pointer"
                  >
                    <div className={`absolute w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
                      flippedCards.has(item.id) ? '[transform:rotateY(180deg)]' : ''
                    }`}>
                      {/* Front */}
                      <div className="absolute w-full h-full bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-xl shadow-lg flex flex-col items-center justify-center p-6 backface-hidden">
                        <div className="text-3xl font-bold mb-2">{item.term}</div>
                        <div className="text-sm opacity-80">{item.fullForm}</div>
                        <div className="mt-4 text-xs">Click to flip</div>
                      </div>
                      {/* Back */}
                      <div className="absolute w-full h-full bg-white border-2 border-purple-500 rounded-xl shadow-lg flex items-center justify-center p-6 backface-hidden [transform:rotateY(180deg)]">
                        <div className="text-center">
                          <p className="text-gray-800 text-sm mb-2">{item.definition}</p>
                          <p className="text-purple-600 text-xs italic">"{item.example}"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quiz Interactivo */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">📝 Interactive Quiz</h2>
              
              {!quizSubmitted ? (
                <div className="space-y-6">
                  {quizQuestions.map((q, qIndex) => (
                    <div key={q.id} className="bg-gray-50 p-6 rounded-lg">
                      <p className="font-semibold text-gray-900 mb-4">
                        {qIndex + 1}. {q.question}
                      </p>
                      <div className="space-y-2">
                        {q.options.map((option, oIndex) => (
                          <label key={oIndex} className="flex items-center p-3 bg-white rounded-lg cursor-pointer hover:bg-purple-50 transition-colors">
                            <input
                              type="radio"
                              name={`question-${q.id}`}
                              value={oIndex}
                              checked={quizAnswers[q.id] === oIndex}
                              onChange={() => setQuizAnswers({...quizAnswers, [q.id]: oIndex})}
                              className="w-4 h-4 text-purple-600"
                            />
                            <span className="ml-3 text-gray-700">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <button
                    onClick={submitQuiz}
                    disabled={Object.keys(quizAnswers).length !== quizQuestions.length}
                    className="w-full bg-purple-600 text-white py-4 rounded-lg font-bold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {Object.keys(quizAnswers).length === quizQuestions.length ? 'Submit Quiz' : `Answer all questions (${Object.keys(quizAnswers).length}/${quizQuestions.length})`}
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className={`p-6 rounded-lg text-center ${getQuizScore() >= 70 ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-500'}`}>
                    <div className="text-4xl font-bold mb-2">{getQuizScore()}%</div>
                    <p className="text-lg font-semibold">
                      {getQuizScore() >= 70 ? '🎉 Excellent! You passed!' : '💪 Keep practicing!'}
                    </p>
                  </div>

                  {quizQuestions.map((q, qIndex) => {
                    const isCorrect = quizAnswers[q.id] === q.correct
                    return (
                      <div key={q.id} className={`p-6 rounded-lg ${isCorrect ? 'bg-green-50 border-2 border-green-300' : 'bg-red-50 border-2 border-red-300'}`}>
                        <div className="flex items-start gap-3 mb-3">
                          <span className="text-2xl">{isCorrect ? '✅' : '❌'}</span>
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900 mb-2">{q.question}</p>
                            <p className="text-sm text-gray-700 mb-2">
                              <strong>Your answer:</strong> {q.options[quizAnswers[q.id]]}
                            </p>
                            {!isCorrect && (
                              <p className="text-sm text-green-700 mb-2">
                                <strong>Correct answer:</strong> {q.options[q.correct]}
                              </p>
                            )}
                            <p className="text-sm text-gray-600 italic">{q.explanation}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}

                  <button
                    onClick={() => {
                      setQuizSubmitted(false)
                      setQuizAnswers({})
                    }}
                    className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab: Speaking Practice */}
        {activeTab === 'practice' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-2">🗣️ Speaking Practice</h2>
              <p>Practice saying these marketing phrases out loud. Record yourself to improve!</p>
            </div>

            {speakingPractice.map((phrase, index) => (
              <div key={phrase.id} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    phrase.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                    phrase.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {phrase.difficulty.toUpperCase()}
                  </span>
                  <span className="text-gray-500 text-sm">Phrase {index + 1}/3</span>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg mb-4">
                  <p className="text-xl text-purple-900 font-medium leading-relaxed">
                    "{phrase.phrase}"
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-blue-900">
                    <strong>💡 Tip:</strong> {phrase.tips}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => playAudio('', `phrase-${phrase.id}`)}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    🎧 Listen to Native Speaker
                  </button>
                  <button
                    onClick={startRecording}
                    className={`flex-1 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                      isRecording
                        ? 'bg-red-600 text-white animate-pulse'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    {isRecording ? '⏺️ Recording...' : '🎤 Record Yourself'}
                  </button>
                </div>
              </div>
            ))}

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <p className="text-yellow-900">
                <strong>📱 Pro Tip:</strong> Use your phone's voice recorder app to practice! 
                Listen to your recordings and compare with the native audio. Repeat until you sound natural.
              </p>
            </div>
          </div>
        )}

        {/* Tab: Tarea Real */}
        {activeTab === 'task' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-8">
              <div className="flex items-start gap-4">
                <span className="text-5xl">🎯</span>
                <div>
                  <h2 className="text-3xl font-bold mb-2">Real World Task</h2>
                  <p className="text-xl">Analyze a Google Analytics Report Like a Pro</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Mission</h3>
              <p className="text-gray-700 mb-6">
                You work for a digital marketing agency. A client shared their Google Analytics report. 
                Write a professional email summary using the vocabulary from this lesson.
              </p>

              <div className="bg-gray-900 text-green-400 p-6 rounded-lg mb-6 font-mono text-sm">
                <div className="mb-4 text-white font-bold">📊 GOOGLE ANALYTICS REPORT - DECEMBER 2025</div>
                <div className="space-y-1">
                  <div>Sessions: 50,000</div>
                  <div>Users (Reach): 35,000</div>
                  <div>Pageviews (Impressions): 125,000</div>
                  <div>Bounce Rate: 65%</div>
                  <div>Avg. Session Duration: 2:30</div>
                  <div>Conversions: 750</div>
                  <div className="mt-3 text-yellow-400">Traffic Sources:</div>
                  <div>- Organic Search (SEO): 45%</div>
                  <div>- Direct: 30%</div>
                  <div>- Paid Search (SEM): 15%</div>
                  <div>- Social Media: 10%</div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
                <h4 className="font-bold text-blue-900 mb-3">✅ Your Deliverables:</h4>
                <ul className="space-y-2 text-blue-900">
                  <li className="flex items-start">
                    <span className="mr-2">1.</span>
                    <span>Write a 200-word email to your team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">2.</span>
                    <span>Use at least 5 vocabulary terms from this lesson</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">3.</span>
                    <span>Identify 2 problems and 2 opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">4.</span>
                    <span>Calculate the conversion rate and explain what it means</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Write your email here:
                </label>
                <textarea
                  className="w-full h-64 p-4 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition-colors"
                  placeholder="Subject: December Analytics Review&#10;&#10;Hi Team,&#10;&#10;I've reviewed our December analytics report and wanted to share key insights...&#10;&#10;[Your analysis here using marketing vocabulary]&#10;&#10;Best regards,&#10;[Your name]"
                />
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                  Save Draft
                </button>
                <button className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Submit for Review
                </button>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <h4 className="font-bold text-green-900 mb-3">📚 Resources to Help:</h4>
              <ul className="space-y-2 text-green-900">
                <li>• <a href="https://analytics.google.com/analytics/academy/" target="_blank" rel="noopener" className="underline hover:text-green-700">Google Analytics Academy</a></li>
                <li>• <a href="https://blog.hubspot.com/marketing/how-to-read-google-analytics-report" target="_blank" rel="noopener" className="underline hover:text-green-700">How to Read Analytics Reports</a></li>
                <li>• Review the vocabulary tab for term definitions</li>
              </ul>
            </div>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="mt-12 flex justify-between items-center bg-white rounded-xl shadow-md p-6">
          <Link 
            href="/cursos/marketing" 
            className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Course
          </Link>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">
              Progress: <strong className="text-purple-600">{progressPercentage}%</strong>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Mark as Complete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
