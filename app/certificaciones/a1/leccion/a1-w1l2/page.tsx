'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// Datos pedagógicos de saludos y presentaciones
const greetingsData = {
  formal: [
    { 
      english: 'Good morning', 
      spanish: 'Buenos días', 
      pronunciation: 'gud mor-ning',
      context: 'Usado hasta las 12:00 PM',
      audioUrl: '/audio/greetings/good-morning.mp3'
    },
    { 
      english: 'Good afternoon', 
      spanish: 'Buenas tardes', 
      pronunciation: 'gud af-ter-nun',
      context: 'Usado de 12:00 PM a 6:00 PM',
      audioUrl: '/audio/greetings/good-afternoon.mp3'
    },
    { 
      english: 'Good evening', 
      spanish: 'Buenas noches (saludo)', 
      pronunciation: 'gud iv-ning',
      context: 'Usado después de las 6:00 PM',
      audioUrl: '/audio/greetings/good-evening.mp3'
    },
    { 
      english: 'How do you do?', 
      spanish: '¿Cómo está usted?', 
      pronunciation: 'hau du yu du',
      context: 'Muy formal, primera vez',
      audioUrl: '/audio/greetings/how-do-you-do.mp3'
    },
  ],
  informal: [
    { 
      english: 'Hi', 
      spanish: 'Hola', 
      pronunciation: 'hai',
      context: 'Informal, entre amigos',
      audioUrl: '/audio/greetings/hi.mp3'
    },
    { 
      english: 'Hello', 
      spanish: 'Hola', 
      pronunciation: 'he-lou',
      context: 'Neutral, para cualquier situación',
      audioUrl: '/audio/greetings/hello.mp3'
    },
    { 
      english: "Hey", 
      spanish: 'Oye/Hola', 
      pronunciation: 'hei',
      context: 'Muy informal, casual',
      audioUrl: '/audio/greetings/hey.mp3'
    },
    { 
      english: "What's up?", 
      spanish: '¿Qué tal?', 
      pronunciation: 'wats ap',
      context: 'Informal, entre amigos',
      audioUrl: '/audio/greetings/whats-up.mp3'
    },
  ],
  introductions: [
    { 
      english: "My name is...", 
      spanish: 'Mi nombre es...', 
      pronunciation: 'mai neim is',
      example: 'My name is Maria',
      audioUrl: '/audio/greetings/my-name-is.mp3'
    },
    { 
      english: "I'm...", 
      spanish: 'Yo soy...', 
      pronunciation: 'aim',
      example: "I'm John",
      audioUrl: '/audio/greetings/im.mp3'
    },
    { 
      english: "Nice to meet you", 
      spanish: 'Encantado/a de conocerte', 
      pronunciation: 'nais tu mit yu',
      example: 'Nice to meet you, Maria!',
      audioUrl: '/audio/greetings/nice-to-meet-you.mp3'
    },
    { 
      english: "What's your name?", 
      spanish: '¿Cómo te llamas?', 
      pronunciation: 'wats yor neim',
      example: "What's your name?",
      audioUrl: '/audio/greetings/whats-your-name.mp3'
    },
    { 
      english: "Where are you from?", 
      spanish: '¿De dónde eres?', 
      pronunciation: 'wer ar yu from',
      example: 'Where are you from?',
      audioUrl: '/audio/greetings/where-are-you-from.mp3'
    },
    { 
      english: "I'm from...", 
      spanish: 'Soy de...', 
      pronunciation: 'aim from',
      example: "I'm from Spain",
      audioUrl: '/audio/greetings/im-from.mp3'
    },
  ],
  farewells: [
    { 
      english: 'Goodbye', 
      spanish: 'Adiós', 
      pronunciation: 'gud-bai',
      context: 'Formal y neutral',
      audioUrl: '/audio/greetings/goodbye.mp3'
    },
    { 
      english: 'Bye', 
      spanish: 'Adiós (informal)', 
      pronunciation: 'bai',
      context: 'Informal',
      audioUrl: '/audio/greetings/bye.mp3'
    },
    { 
      english: 'See you later', 
      spanish: 'Nos vemos luego', 
      pronunciation: 'si yu lei-ter',
      context: 'Cuando volverás a ver a la persona',
      audioUrl: '/audio/greetings/see-you-later.mp3'
    },
    { 
      english: 'Have a nice day', 
      spanish: 'Que tengas un buen día', 
      pronunciation: 'hav a nais dei',
      context: 'Despedida amable',
      audioUrl: '/audio/greetings/have-a-nice-day.mp3'
    },
  ]
}

// Diálogos de ejemplo
const dialogues = [
  {
    id: 1,
    title: 'Primera Vez que se Conocen',
    level: 'formal',
    conversation: [
      { speaker: 'A', text: 'Good morning!', spanish: 'Buenos días' },
      { speaker: 'B', text: 'Good morning! My name is Sarah.', spanish: 'Buenos días. Mi nombre es Sarah.' },
      { speaker: 'A', text: "Nice to meet you, Sarah. I'm Tom.", spanish: 'Encantado de conocerte, Sarah. Soy Tom.' },
      { speaker: 'B', text: 'Nice to meet you too!', spanish: 'Encantada de conocerte también.' },
    ]
  },
  {
    id: 2,
    title: 'Entre Amigos',
    level: 'informal',
    conversation: [
      { speaker: 'A', text: 'Hey! What\'s up?', spanish: '¡Oye! ¿Qué tal?' },
      { speaker: 'B', text: 'Hi! Not much, you?', spanish: 'Hola. No mucho, ¿y tú?' },
      { speaker: 'A', text: 'I\'m good, thanks!', spanish: 'Estoy bien, ¡gracias!' },
      { speaker: 'B', text: 'See you later!', spanish: '¡Nos vemos luego!' },
    ]
  },
  {
    id: 3,
    title: 'Presentación con Origen',
    level: 'neutral',
    conversation: [
      { speaker: 'A', text: 'Hello! What\'s your name?', spanish: 'Hola. ¿Cómo te llamas?' },
      { speaker: 'B', text: 'My name is Carlos. Where are you from?', spanish: 'Mi nombre es Carlos. ¿De dónde eres?' },
      { speaker: 'A', text: 'I\'m from Canada. And you?', spanish: 'Soy de Canadá. ¿Y tú?' },
      { speaker: 'B', text: 'I\'m from Mexico.', spanish: 'Soy de México.' },
    ]
  },
]

// Quizzes interactivos
const quizzes = [
  {
    id: 1,
    question: '¿Cuál es el saludo más formal?',
    options: ['Hey', 'Good morning', 'What\'s up', 'Hi'],
    correct: 1,
    explanation: '"Good morning" es un saludo formal apropiado para situaciones profesionales o con personas que no conoces bien.'
  },
  {
    id: 2,
    question: '¿Cómo respondes a "Nice to meet you"?',
    options: ['Goodbye', 'Nice to meet you too', 'See you later', 'What\'s up'],
    correct: 1,
    explanation: 'La respuesta correcta es "Nice to meet you too" (Encantado/a de conocerte también).'
  },
  {
    id: 3,
    question: '¿Qué pregunta usas para saber el nombre de alguien?',
    options: ['Where are you from?', 'How are you?', 'What\'s your name?', 'What\'s up?'],
    correct: 2,
    explanation: '"What\'s your name?" significa "¿Cómo te llamas?" y es la forma estándar de preguntar el nombre.'
  },
  {
    id: 4,
    question: '¿Cuál NO es una despedida?',
    options: ['Goodbye', 'See you later', 'Nice to meet you', 'Bye'],
    correct: 2,
    explanation: '"Nice to meet you" es una expresión de presentación, no una despedida.'
  }
]

// Ejercicio de matching (emparejar)
const matchingExercise = {
  pairs: [
    { english: 'Good morning', spanish: 'Buenos días' },
    { english: 'My name is', spanish: 'Mi nombre es' },
    { english: 'Nice to meet you', spanish: 'Encantado de conocerte' },
    { english: 'Where are you from?', spanish: '¿De dónde eres?' },
    { english: 'Goodbye', spanish: 'Adiós' },
    { english: 'See you later', spanish: 'Nos vemos luego' },
  ]
}

// Ejercicio de role-play (simulación)
const rolePlayScenarios = [
  {
    id: 1,
    title: 'En una Fiesta',
    description: 'Te presentas a alguien nuevo en una fiesta informal',
    prompts: [
      '1. Saluda informalmente',
      '2. Di tu nombre',
      '3. Pregunta su nombre',
      '4. Pregunta de dónde es'
    ],
    suggestedAnswers: [
      'Hi! / Hey!',
      "I'm [your name] / My name is [your name]",
      "What's your name?",
      'Where are you from?'
    ]
  },
  {
    id: 2,
    title: 'Entrevista de Trabajo',
    description: 'Te presentas formalmente en una entrevista',
    prompts: [
      '1. Saluda formalmente',
      '2. Preséntate con tu nombre completo',
      '3. Responde "Encantado de conocerle"',
      '4. Despídete formalmente'
    ],
    suggestedAnswers: [
      'Good morning / Good afternoon',
      'My name is [full name]',
      'Nice to meet you',
      'Goodbye / Have a nice day'
    ]
  },
]

export default function Lesson2Page() {
  const [activeTab, setActiveTab] = useState<'intro' | 'content' | 'exercises' | 'practice'>('intro')
  const [selectedCategory, setSelectedCategory] = useState<'formal' | 'informal' | 'introductions' | 'farewells'>('formal')
  const [playingAudio, setPlayingAudio] = useState<string | null>(null)
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: number}>({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [matchingAnswers, setMatchingAnswers] = useState<{[key: number]: string}>({})
  const [matchingSubmitted, setMatchingSubmitted] = useState(false)
  const [currentScenario, setCurrentScenario] = useState(0)
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set())
  const [showConfetti, setShowConfetti] = useState(false)
  const [points, setPoints] = useState(0)
  
  // Estados para el sistema de grabación de voz
  const [isRecording, setIsRecording] = useState(false)
  const [selectedPhraseToRecord, setSelectedPhraseToRecord] = useState<string | null>(null)
  const [recordingResult, setRecordingResult] = useState<{
    transcript: string
    confidence: number
    score: number
    feedback: string
  } | null>(null)
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null)
  const [audioChunks, setAudioChunks] = useState<Blob[]>([])
  const [recognitionSupported, setRecognitionSupported] = useState(true)

  const progressPercentage = Math.round((completedSections.size / 4) * 100)

  // Reproducir audio (por ahora simulado, luego agregaremos audios reales)
  const playSound = async (phrase: string) => {
    setPlayingAudio(phrase)
    
    try {
      // Buscar la frase en los datos para obtener la URL del audio
      let audioUrl: string | undefined
      
      // Buscar en todas las categorías
      for (const category of ['formal', 'informal', 'introductions', 'farewells'] as const) {
        const found = greetingsData[category].find(item => item.english === phrase)
        if (found && found.audioUrl) {
          audioUrl = found.audioUrl
          break
        }
      }
      
      if (!audioUrl) {
        setPlayingAudio(null)
        return
      }
      
      // Reproducir el audio profesional
      const audio = new Audio(audioUrl)
      audio.playbackRate = 1.0 // Los audios ya vienen con velocidad 0.7 óptima
      
      audio.onended = () => {
        setPlayingAudio(null)
      }
      
      audio.onerror = () => {
        setPlayingAudio(null)
        console.error('Error playing audio for phrase:', phrase)
      }
      
      await audio.play()
      
    } catch (error) {
      console.error('Error with audio:', error)
      setPlayingAudio(null)
    }
  }

  // Sistema de grabación y evaluación de pronunciación
  const startRecording = async (phrase: string) => {
    try {
      setSelectedPhraseToRecord(phrase)
      setRecordingResult(null)
      
      // Solicitar permiso de micrófono
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      
      // Crear MediaRecorder para grabar
      const recorder = new MediaRecorder(stream)
      const chunks: Blob[] = []
      
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data)
        }
      }
      
      recorder.onstop = async () => {
        // Detener todos los tracks del stream
        stream.getTracks().forEach(track => track.stop())
        
        // Crear blob de audio
        const audioBlob = new Blob(chunks, { type: 'audio/webm' })
        
        // Evaluar pronunciación usando Web Speech API
        await evaluatePronunciation(phrase, audioBlob)
      }
      
      setMediaRecorder(recorder)
      recorder.start()
      setIsRecording(true)
      
    } catch (error) {
      console.error('Error al iniciar grabación:', error)
      alert('No se pudo acceder al micrófono. Por favor, permite el acceso al micrófono.')
      setRecognitionSupported(false)
    }
  }
  
  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.stop()
      setIsRecording(false)
    }
  }
  
  const evaluatePronunciation = async (expectedPhrase: string, audioBlob: Blob) => {
    try {
      // Usar Web Speech API para reconocimiento de voz
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      
      if (!SpeechRecognition) {
        setRecognitionSupported(false)
        setRecordingResult({
          transcript: '',
          confidence: 0,
          score: 0,
          feedback: 'Tu navegador no soporta reconocimiento de voz. Usa Chrome o Edge.'
        })
        return
      }
      
      const recognition = new SpeechRecognition()
      recognition.lang = 'en-US'
      recognition.interimResults = false
      recognition.maxAlternatives = 1
      
      // Crear un audio temporal del blob para reproducirlo en el reconocedor
      const audioUrl = URL.createObjectURL(audioBlob)
      const audio = new Audio(audioUrl)
      
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        const confidence = event.results[0][0].confidence
        
        // Calcular similitud entre lo esperado y lo transcrito
        const similarity = calculateSimilarity(expectedPhrase.toLowerCase(), transcript.toLowerCase())
        const score = Math.round(similarity * 100)
        
        let feedback = ''
        let bonusPoints = 0
        
        if (score >= 90) {
          feedback = '🎉 ¡Excelente pronunciación! Perfecto.'
          bonusPoints = 20
        } else if (score >= 75) {
          feedback = '👍 ¡Muy bien! Buena pronunciación.'
          bonusPoints = 15
        } else if (score >= 60) {
          feedback = '😊 Bien. Sigue practicando.'
          bonusPoints = 10
        } else if (score >= 40) {
          feedback = '🤔 Necesitas practicar más. Escucha el audio de referencia.'
          bonusPoints = 5
        } else {
          feedback = '💪 Inténtalo de nuevo. Escucha bien la pronunciación correcta.'
          bonusPoints = 0
        }
        
        setRecordingResult({
          transcript,
          confidence,
          score,
          feedback
        })
        
        // Agregar puntos bonus
        if (bonusPoints > 0) {
          setPoints(points + bonusPoints)
        }
        
        URL.revokeObjectURL(audioUrl)
      }
      
      recognition.onerror = (event: any) => {
        console.error('Error en reconocimiento:', event.error)
        setRecordingResult({
          transcript: '',
          confidence: 0,
          score: 0,
          feedback: '❌ Error al procesar el audio. Intenta de nuevo.'
        })
        URL.revokeObjectURL(audioUrl)
      }
      
      // Iniciar reconocimiento
      recognition.start()
      
      // Reproducir el audio grabado para que el reconocedor lo procese
      // Nota: En producción real, necesitarías enviar el audio a un servidor
      // para procesarlo con una API más robusta como Google Cloud Speech-to-Text
      
    } catch (error) {
      console.error('Error en evaluación:', error)
      setRecordingResult({
        transcript: '',
        confidence: 0,
        score: 0,
        feedback: '❌ Error al evaluar. Intenta de nuevo.'
      })
    }
  }
  
  // Calcular similitud entre dos strings (algoritmo de Levenshtein simplificado)
  const calculateSimilarity = (str1: string, str2: string): number => {
    const longer = str1.length > str2.length ? str1 : str2
    const shorter = str1.length > str2.length ? str2 : str1
    
    if (longer.length === 0) return 1.0
    
    const editDistance = levenshteinDistance(longer, shorter)
    return (longer.length - editDistance) / longer.length
  }
  
  const levenshteinDistance = (str1: string, str2: string): number => {
    const matrix: number[][] = []
    
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i]
    }
    
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j
    }
    
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1]
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          )
        }
      }
    }
    
    return matrix[str2.length][str1.length]
  }

  // Verificar respuesta del quiz
  const checkQuizAnswer = () => {
    setQuizSubmitted(true)
    const correct = quizzes.filter((q, i) => quizAnswers[i] === q.correct).length
    const newPoints = correct * 25
    setPoints(points + newPoints)
    
    const newCompleted = new Set(completedSections)
    newCompleted.add('exercises')
    setCompletedSections(newCompleted)
  }

  // Verificar ejercicio de matching
  const checkMatching = () => {
    setMatchingSubmitted(true)
    let correct = 0
    matchingExercise.pairs.forEach((pair, index) => {
      if (matchingAnswers[index] === pair.spanish) {
        correct++
      }
    })
    const newPoints = correct * 10
    setPoints(points + newPoints)
    
    const newCompleted = new Set(completedSections)
    newCompleted.add('practice')
    setCompletedSections(newCompleted)
    
    if (newCompleted.size === 4) {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 5000)
    }
  }

  const getQuizScore = () => {
    let correct = 0
    quizzes.forEach((q, i) => {
      if (quizAnswers[i] === q.correct) correct++
    })
    return Math.round((correct / quizzes.length) * 100)
  }

  const getMatchingScore = () => {
    let correct = 0
    matchingExercise.pairs.forEach((pair, index) => {
      if (matchingAnswers[index] === pair.spanish) {
        correct++
      }
    })
    return Math.round((correct / matchingExercise.pairs.length) * 100)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white relative">
      {/* Confetti effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-20px`,
                animationDelay: `${Math.random() * 2}s`,
                fontSize: `${20 + Math.random() * 20}px`,
              }}
            >
              🎉
            </div>
          ))}
        </div>
      )}

      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-400 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/certificaciones/a1" 
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al curso A1
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="mb-4">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                  Semana 1 - Lección 2
                </span>
              </div>
              <h1 className="text-4xl font-black mb-2">Saludos y Presentaciones</h1>
              <p className="text-white/90 text-lg">
                Aprende a saludar, presentarte y despedirte en inglés
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold">Progreso de la lección</span>
              <span className="text-sm font-semibold">{progressPercentage}%</span>
            </div>
            <div className="w-full bg-white/30 rounded-full h-3">
              <div 
                className="bg-white rounded-full h-3 transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation tabs */}
      <div className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/certificaciones/a1"
            className="text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al curso
          </Link>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">
              Progreso: <strong className="text-amber-600">{progressPercentage}%</strong>
            </div>
            <div className="text-sm font-bold text-green-600 bg-green-100 px-4 py-2 rounded-lg">
              ⭐ {points} puntos
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'intro', label: '📖 Introducción', icon: '📖' },
              { id: 'content', label: '💬 Contenido', icon: '💬' },
              { id: 'exercises', label: '✍️ Ejercicios', icon: '✍️' },
              { id: 'practice', label: '🎭 Práctica', icon: '🎭' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors relative ${
                  activeTab === tab.id
                    ? 'border-amber-500 text-amber-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-xl">{tab.icon}</span>
                  {tab.label}
                </span>
                {completedSections.has(tab.id) && (
                  <span className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    ✓
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Tab: Introducción */}
        {activeTab === 'intro' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">🎯 Objetivos de la Lección</h2>
              
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-gray-900 mb-3">Al finalizar esta lección podrás:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Saludar y despedirte en diferentes contextos (formal e informal)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Presentarte usando "My name is..." y "I'm from..."</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Hacer preguntas básicas: "What's your name?" y "Where are you from?"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Diferenciar entre situaciones formales e informales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Mantener conversaciones básicas de presentación</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                  <div className="text-3xl mb-3">🌍</div>
                  <h3 className="font-bold text-gray-900 mb-2">Situaciones Reales</h3>
                  <p className="text-gray-700 text-sm">
                    Los saludos y presentaciones son fundamentales en viajes, trabajo, estudios y vida cotidiana. 
                    Esta lección te prepara para el primer contacto con personas de habla inglesa.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                  <div className="text-3xl mb-3">🎯</div>
                  <h3 className="font-bold text-gray-900 mb-2">En el Examen A1</h3>
                  <p className="text-gray-700 text-sm">
                    En la parte de Speaking del examen A1, deberás presentarte, saludar y responder preguntas básicas 
                    sobre ti mismo. ¡Esta lección es esencial!
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg mb-6">
                <h3 className="font-bold text-amber-900 mb-2">⏱️ Duración Estimada: 45 minutos</h3>
                <div className="space-y-2 text-amber-900">
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold">00-10 min:</span>
                    <span>📖 Introducción y contexto cultural</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold">10-25 min:</span>
                    <span>💬 Saludos, presentaciones y despedidas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold">25-35 min:</span>
                    <span>✍️ Quiz y ejercicios interactivos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold">35-45 min:</span>
                    <span>🎭 Role-play y práctica conversacional</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">💡 Consejo Cultural:</h3>
                <p className="text-gray-700">
                  En países de habla inglesa, los saludos varían según el momento del día. 
                  "Good morning" se usa hasta las 12:00 PM, "Good afternoon" hasta las 6:00 PM, 
                  y "Good evening" después. También es común estrechar la mano en presentaciones formales.
                </p>
              </div>

              <button
                onClick={() => {
                  setActiveTab('content')
                  const newCompleted = new Set(completedSections)
                  newCompleted.add('intro')
                  setCompletedSections(newCompleted)
                  setPoints(points + 5)
                }}
                className="w-full mt-6 bg-gradient-to-r from-amber-500 to-orange-400 text-white py-4 rounded-lg font-bold hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
              >
                ¡Comenzar la Lección! → 
              </button>
            </div>
          </div>
        )}

        {/* Tab: Contenido - Saludos y Presentaciones */}
        {activeTab === 'content' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-4xl">💬</span>
                Saludos y Presentaciones en Inglés
              </h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
                <p className="text-blue-900 font-semibold">
                  👆 Selecciona una categoría y haz clic en las frases para escuchar la pronunciación
                </p>
              </div>

              {/* Category selector */}
              <div className="flex flex-wrap gap-3 mb-6">
                <button
                  onClick={() => setSelectedCategory('formal')}
                  className={`px-6 py-3 rounded-lg font-bold transition-all ${
                    selectedCategory === 'formal'
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  👔 Saludos Formales
                </button>
                <button
                  onClick={() => setSelectedCategory('informal')}
                  className={`px-6 py-3 rounded-lg font-bold transition-all ${
                    selectedCategory === 'informal'
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  😊 Saludos Informales
                </button>
                <button
                  onClick={() => setSelectedCategory('introductions')}
                  className={`px-6 py-3 rounded-lg font-bold transition-all ${
                    selectedCategory === 'introductions'
                      ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  🤝 Presentaciones
                </button>
                <button
                  onClick={() => setSelectedCategory('farewells')}
                  className={`px-6 py-3 rounded-lg font-bold transition-all ${
                    selectedCategory === 'farewells'
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  👋 Despedidas
                </button>
              </div>

              {/* Phrases grid */}
              <div className="grid gap-4 mb-8">
                {greetingsData[selectedCategory].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border-2 border-gray-200 hover:border-amber-400 transition-all cursor-pointer"
                    onClick={() => playSound(item.english)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-black text-gray-900">{item.english}</h3>
                          <button
                            className="p-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-all"
                            onClick={(e) => {
                              e.stopPropagation()
                              playSound(item.english)
                            }}
                          >
                            🔊
                          </button>
                          <button
                            className={`p-2 rounded-lg transition-all ${
                              isRecording && selectedPhraseToRecord === item.english
                                ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                                : 'bg-green-500 hover:bg-green-600'
                            } text-white`}
                            onClick={(e) => {
                              e.stopPropagation()
                              if (isRecording && selectedPhraseToRecord === item.english) {
                                stopRecording()
                              } else if (!isRecording) {
                                startRecording(item.english)
                              }
                            }}
                          >
                            {isRecording && selectedPhraseToRecord === item.english ? '⏹️' : '🎤'}
                          </button>
                        </div>
                        
                        {/* Resultado de grabación */}
                        {recordingResult && selectedPhraseToRecord === item.english && (
                          <div className={`mt-3 p-4 rounded-lg border-2 ${
                            recordingResult.score >= 75 
                              ? 'bg-green-50 border-green-500'
                              : recordingResult.score >= 60
                              ? 'bg-yellow-50 border-yellow-500'
                              : 'bg-red-50 border-red-500'
                          }`}>
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-bold text-sm">Tu pronunciación:</span>
                              <span className={`text-2xl font-black ${
                                recordingResult.score >= 75 
                                  ? 'text-green-700'
                                  : recordingResult.score >= 60
                                  ? 'text-yellow-700'
                                  : 'text-red-700'
                              }`}>
                                {recordingResult.score}%
                              </span>
                            </div>
                            <p className="text-sm italic mb-2">
                              Escuchamos: "{recordingResult.transcript}"
                            </p>
                            <p className="text-sm font-semibold">
                              {recordingResult.feedback}
                            </p>
                            {recordingResult.score >= 60 && (
                              <p className="text-xs text-green-600 mt-2">
                                +{recordingResult.score >= 90 ? 20 : recordingResult.score >= 75 ? 15 : 10} puntos ganados
                              </p>
                            )}
                          </div>
                        )}
                        
                        <p className="text-lg text-gray-700 mb-2">
                          <span className="font-semibold">Español:</span> {item.spanish}
                        </p>
                        
                        <p className="text-sm text-purple-700 mb-2">
                          <span className="font-semibold">Pronunciación:</span> {item.pronunciation}
                        </p>
                        
                        {'context' in item && (
                          <p className="text-sm text-blue-700">
                            <span className="font-semibold">Contexto:</span> {item.context}
                          </p>
                        )}
                        
                        {'example' in item && (
                          <p className="text-sm text-green-700">
                            <span className="font-semibold">Ejemplo:</span> {item.example}
                          </p>
                        )}
                      </div>
                      
                      {playingAudio === item.english && (
                        <div className="flex-shrink-0">
                          <div className="animate-pulse text-amber-500 text-2xl">
                            🎵
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Dialogues section */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>💭</span>
                  Diálogos de Ejemplo
                </h3>
                
                <div className="space-y-4">
                  {dialogues.map((dialogue) => (
                    <div key={dialogue.id} className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-gray-900">{dialogue.title}</h4>
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          dialogue.level === 'formal' 
                            ? 'bg-blue-100 text-blue-700'
                            : dialogue.level === 'informal'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-purple-100 text-purple-700'
                        }`}>
                          {dialogue.level === 'formal' ? '👔 Formal' : dialogue.level === 'informal' ? '😊 Informal' : '🤝 Neutral'}
                        </span>
                      </div>
                      
                      <div className="space-y-3">
                        {dialogue.conversation.map((line, idx) => (
                          <div key={idx} className={`flex gap-3 ${line.speaker === 'A' ? '' : 'flex-row-reverse'}`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                              line.speaker === 'A' ? 'bg-blue-500' : 'bg-green-500'
                            }`}>
                              {line.speaker}
                            </div>
                            <div className={`flex-1 p-4 rounded-lg ${
                              line.speaker === 'A' ? 'bg-blue-50' : 'bg-green-50'
                            }`}>
                              <p className="font-bold text-gray-900 mb-1">{line.text}</p>
                              <p className="text-sm text-gray-600">{line.spanish}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setActiveTab('exercises')
                  const newCompleted = new Set(completedSections)
                  newCompleted.add('content')
                  setCompletedSections(newCompleted)
                  setPoints(points + 10)
                }}
                className="w-full mt-6 bg-gradient-to-r from-amber-500 to-orange-400 text-white py-4 rounded-lg font-bold hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
              >
                Continuar al Quiz →
              </button>
            </div>
          </div>
        )}

        {/* Tab: Ejercicios - Quiz */}
        {activeTab === 'exercises' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-4xl">✍️</span>
                Quiz de Evaluación
              </h2>

              {!quizSubmitted ? (
                <div className="space-y-6">
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
                    <p className="text-blue-900 font-semibold">
                      📝 Responde las 4 preguntas para evaluar tu aprendizaje
                    </p>
                  </div>

                  {quizzes.map((quiz, qIndex) => (
                    <div key={quiz.id} className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
                      <p className="font-bold text-gray-900 mb-4 text-lg">
                        {qIndex + 1}. {quiz.question}
                      </p>
                      <div className="space-y-3">
                        {quiz.options.map((option, oIndex) => (
                          <label 
                            key={oIndex} 
                            className="flex items-center p-4 bg-white rounded-lg cursor-pointer hover:bg-blue-50 transition-colors border-2 border-transparent hover:border-blue-300"
                          >
                            <input
                              type="radio"
                              name={`quiz-${quiz.id}`}
                              value={oIndex}
                              checked={quizAnswers[qIndex] === oIndex}
                              onChange={() => {
                                setQuizAnswers({
                                  ...quizAnswers,
                                  [qIndex]: oIndex
                                })
                              }}
                              className="w-5 h-5 text-amber-600 mr-3"
                            />
                            <span className="text-gray-800 font-medium">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={checkQuizAnswer}
                    disabled={Object.keys(quizAnswers).length < quizzes.length}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-400 text-white py-4 rounded-lg font-bold hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  >
                    {Object.keys(quizAnswers).length < quizzes.length 
                      ? `Responde todas las preguntas (${Object.keys(quizAnswers).length}/${quizzes.length})`
                      : 'Enviar Respuestas'
                    }
                  </button>
                </div>
              ) : (
                <div className="space-y-6 animate-fadeIn">
                  {/* Quiz results */}
                  <div className={`p-8 rounded-xl border-4 ${
                    getQuizScore() >= 75 
                      ? 'bg-gradient-to-br from-green-50 to-green-100 border-green-500' 
                      : 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-500'
                  }`}>
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4">
                        {getQuizScore() >= 75 ? '🎉' : '📚'}
                      </div>
                      <h3 className="text-3xl font-black text-gray-900 mb-2">
                        {getQuizScore() >= 75 ? '¡Excelente!' : '¡Buen Intento!'}
                      </h3>
                      <p className="text-xl font-bold text-gray-700">
                        Tu puntuación: {getQuizScore()}%
                      </p>
                      <p className="text-lg text-gray-600 mt-2">
                        +{quizzes.filter((q, i) => quizAnswers[i] === q.correct).length * 25} puntos ganados
                      </p>
                    </div>

                    {getQuizScore() >= 75 ? (
                      <div className="bg-white/80 p-6 rounded-lg">
                        <p className="text-green-900 font-semibold text-center">
                          ¡Has demostrado un excelente dominio de los saludos y presentaciones!
                        </p>
                      </div>
                    ) : (
                      <div className="bg-white/80 p-6 rounded-lg">
                        <p className="text-yellow-900 font-semibold text-center">
                          Revisa las respuestas incorrectas y practica más. ¡Puedes mejorar!
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Answer review */}
                  <div className="space-y-4">
                    {quizzes.map((quiz, qIndex) => {
                      const isCorrect = quizAnswers[qIndex] === quiz.correct
                      return (
                        <div key={quiz.id} className={`p-6 rounded-xl border-2 ${
                          isCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'
                        }`}>
                          <div className="flex items-start gap-3 mb-3">
                            <span className="text-2xl">{isCorrect ? '✅' : '❌'}</span>
                            <div className="flex-1">
                              <p className="font-bold text-gray-900 mb-2">
                                {qIndex + 1}. {quiz.question}
                              </p>
                              <p className="text-sm text-gray-700 mb-2">
                                <span className="font-semibold">Tu respuesta:</span> {quiz.options[quizAnswers[qIndex]]}
                              </p>
                              {!isCorrect && (
                                <p className="text-sm text-gray-700 mb-2">
                                  <span className="font-semibold text-green-700">Respuesta correcta:</span> {quiz.options[quiz.correct]}
                                </p>
                              )}
                              <p className="text-sm text-gray-600 italic">
                                💡 {quiz.explanation}
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        setQuizSubmitted(false)
                        setQuizAnswers({})
                      }}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-4 rounded-lg font-bold transition-colors"
                    >
                      🔄 Reintentar Quiz
                    </button>
                    <button
                      onClick={() => setActiveTab('practice')}
                      className="flex-1 bg-gradient-to-r from-amber-500 to-orange-400 text-white py-4 rounded-lg font-bold hover:opacity-90 transition-all"
                    >
                      Continuar a Práctica →
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab: Práctica - Role-play y Matching */}
        {activeTab === 'practice' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-4xl">🎭</span>
                Práctica: Role-Play y Matching
              </h2>

              {!matchingSubmitted ? (
                <>
                  {/* Role-play scenarios */}
                  <div className="bg-purple-50 p-6 rounded-xl mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      🎬 Escenario de Role-Play
                    </h3>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-purple-900">
                          {rolePlayScenarios[currentScenario].title}
                        </h4>
                        <div className="text-sm text-gray-600">
                          Escenario {currentScenario + 1} de {rolePlayScenarios.length}
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">
                        {rolePlayScenarios[currentScenario].description}
                      </p>
                      
                      <div className="bg-purple-50 p-4 rounded-lg mb-4">
                        <p className="font-semibold text-purple-900 mb-2">📝 Tu tarea:</p>
                        <ul className="space-y-2">
                          {rolePlayScenarios[currentScenario].prompts.map((prompt, idx) => (
                            <li key={idx} className="text-gray-700">{prompt}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg mb-4">
                        <p className="font-semibold text-green-900 mb-3">💡 Respuestas sugeridas:</p>
                        <div className="space-y-3">
                          {rolePlayScenarios[currentScenario].suggestedAnswers.map((answer, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-lg border-2 border-green-200">
                              <div className="flex items-center justify-between mb-2">
                                <p className="text-gray-700 font-mono text-sm flex-1">{answer}</p>
                                <div className="flex gap-2">
                                  <button
                                    className="p-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-all text-sm"
                                    onClick={() => playSound(answer.split('/')[0].trim())}
                                    title="Escuchar pronunciación"
                                  >
                                    🔊
                                  </button>
                                  <button
                                    className={`p-2 rounded-lg transition-all text-sm ${
                                      isRecording && selectedPhraseToRecord === answer
                                        ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                                        : 'bg-green-500 hover:bg-green-600'
                                    } text-white`}
                                    onClick={() => {
                                      if (isRecording && selectedPhraseToRecord === answer) {
                                        stopRecording()
                                      } else if (!isRecording) {
                                        startRecording(answer.split('/')[0].trim())
                                      }
                                    }}
                                    title={isRecording && selectedPhraseToRecord === answer ? "Detener grabación" : "Grabar tu pronunciación"}
                                  >
                                    {isRecording && selectedPhraseToRecord === answer ? '⏹️' : '🎤'}
                                  </button>
                                </div>
                              </div>
                              
                              {/* Resultado de grabación para role-play */}
                              {recordingResult && selectedPhraseToRecord === answer.split('/')[0].trim() && (
                                <div className={`mt-3 p-3 rounded-lg border-2 ${
                                  recordingResult.score >= 75 
                                    ? 'bg-green-50 border-green-500'
                                    : recordingResult.score >= 60
                                    ? 'bg-yellow-50 border-yellow-500'
                                    : 'bg-red-50 border-red-500'
                                }`}>
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="font-bold text-xs">Tu pronunciación:</span>
                                    <span className={`text-xl font-black ${
                                      recordingResult.score >= 75 
                                        ? 'text-green-700'
                                        : recordingResult.score >= 60
                                        ? 'text-yellow-700'
                                        : 'text-red-700'
                                    }`}>
                                      {recordingResult.score}%
                                    </span>
                                  </div>
                                  <p className="text-xs italic mb-1">
                                    Escuchamos: "{recordingResult.transcript}"
                                  </p>
                                  <p className="text-xs font-semibold">
                                    {recordingResult.feedback}
                                  </p>
                                  {recordingResult.score >= 60 && (
                                    <p className="text-xs text-green-600 mt-1">
                                      +{recordingResult.score >= 90 ? 20 : recordingResult.score >= 75 ? 15 : 10} puntos ganados
                                    </p>
                                  )}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Mensaje motivacional para practicar */}
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                        <p className="text-sm text-blue-900">
                          <strong>🎤 Practica en voz alta:</strong> Usa los botones 🔊 para escuchar y 🎤 para grabar tu pronunciación. 
                          ¡Intenta lograr 90%+ en cada frase!
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <button
                        onClick={() => setCurrentScenario((currentScenario + 1) % rolePlayScenarios.length)}
                        className="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg font-bold transition-colors"
                      >
                        {currentScenario < rolePlayScenarios.length - 1 ? 'Siguiente Escenario →' : '← Primer Escenario'}
                      </button>
                    </div>
                  </div>

                  {/* Matching exercise */}
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      🔗 Ejercicio de Emparejamiento
                    </h3>
                    
                    <p className="text-gray-700 mb-6">
                      Selecciona la traducción correcta en español para cada frase en inglés:
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      {matchingExercise.pairs.map((pair, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                          <p className="font-bold text-gray-900 mb-3 text-lg">
                            {index + 1}. {pair.english}
                          </p>
                          <select
                            value={matchingAnswers[index] || ''}
                            onChange={(e) => setMatchingAnswers({
                              ...matchingAnswers,
                              [index]: e.target.value
                            })}
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none"
                          >
                            <option value="">-- Selecciona una opción --</option>
                            {matchingExercise.pairs.map((p, idx) => (
                              <option key={idx} value={p.spanish}>
                                {p.spanish}
                              </option>
                            ))}
                          </select>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={checkMatching}
                      disabled={Object.keys(matchingAnswers).length < matchingExercise.pairs.length}
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-400 text-white py-4 rounded-lg font-bold hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                    >
                      {Object.keys(matchingAnswers).length < matchingExercise.pairs.length
                        ? `Completa todos los pares (${Object.keys(matchingAnswers).length}/${matchingExercise.pairs.length})`
                        : 'Verificar Respuestas'
                      }
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Matching results */}
                  <div className={`p-8 rounded-xl border-4 ${
                    getMatchingScore() >= 75 
                      ? 'bg-gradient-to-br from-green-50 to-green-100 border-green-500' 
                      : 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-500'
                  } mb-6`}>
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4">
                        {getMatchingScore() >= 75 ? '🎊' : '💪'}
                      </div>
                      <h3 className="text-3xl font-black text-gray-900 mb-2">
                        {getMatchingScore() >= 75 ? '¡Perfecto!' : '¡Bien Hecho!'}
                      </h3>
                      <p className="text-xl font-bold text-gray-700">
                        Matching: {getMatchingScore()}%
                      </p>
                      <p className="text-lg text-gray-600 mt-2">
                        +{matchingExercise.pairs.filter((pair, idx) => matchingAnswers[idx] === pair.spanish).length * 10} puntos ganados
                      </p>
                    </div>
                  </div>

                  {/* Answer review */}
                  <div className="space-y-4 mb-8">
                    {matchingExercise.pairs.map((pair, index) => {
                      const isCorrect = matchingAnswers[index] === pair.spanish
                      return (
                        <div key={index} className={`p-6 rounded-xl border-2 ${
                          isCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'
                        }`}>
                          <div className="flex items-start gap-3">
                            <span className="text-2xl">{isCorrect ? '✅' : '❌'}</span>
                            <div className="flex-1">
                              <p className="font-bold text-gray-900 mb-2">
                                {pair.english}
                              </p>
                              <p className="text-sm text-gray-700">
                                <span className="font-semibold">Tu respuesta:</span> {matchingAnswers[index]}
                              </p>
                              {!isCorrect && (
                                <p className="text-sm text-green-700">
                                  <span className="font-semibold">Correcto:</span> {pair.spanish}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Final completion */}
                  {completedSections.size === 4 && (
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-12 rounded-xl border-4 border-green-500 text-center animate-fadeIn">
                      <div className="text-8xl mb-6">🎉</div>
                      <h3 className="text-4xl font-black text-green-900 mb-4">
                        ¡Felicitaciones!
                      </h3>
                      <p className="text-2xl font-bold text-green-800 mb-6">
                        Has completado la Lección 2: Saludos y Presentaciones
                      </p>
                      
                      <div className="bg-white rounded-xl p-8 mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="text-center">
                            <div className="text-5xl font-black text-amber-600 mb-2">{points}</div>
                            <p className="text-gray-600 font-semibold">Puntos Totales</p>
                          </div>
                          <div className="text-center">
                            <div className="text-5xl font-black text-blue-600 mb-2">{progressPercentage}%</div>
                            <p className="text-gray-600 font-semibold">Progreso Completado</p>
                          </div>
                          <div className="text-center">
                            <div className="text-5xl font-black text-purple-600 mb-2">4/4</div>
                            <p className="text-gray-600 font-semibold">Secciones Completas</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-4">
                        <h3 className="font-bold text-blue-900 mb-3">✅ Has Aprendido:</h3>
                        <ul className="space-y-2 text-blue-900 text-left">
                          <li className="flex items-start gap-2">
                            <span className="text-xl">👔</span>
                            <span>Saludos formales e informales en diferentes contextos</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-xl">🤝</span>
                            <span>Cómo presentarte y hacer presentaciones</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-xl">💬</span>
                            <span>Frases esenciales para primeras conversaciones</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-xl">👋</span>
                            <span>Despedidas apropiadas para cada situación</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg mb-6">
                        <h3 className="font-bold text-purple-900 mb-3">🚀 Próximos Pasos:</h3>
                        <p className="text-purple-900 text-left mb-4">
                          Continúa con la Lección 3: Números y Datos Personales. Aprenderás a contar, 
                          dar tu edad, teléfono y dirección.
                        </p>
                        <p className="text-purple-900 font-semibold text-left">
                          💡 Consejo: Practica saludando a diferentes personas en tu vida diaria usando estas frases.
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          href="/certificaciones/a1"
                          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-4 rounded-lg font-bold transition-colors text-center"
                        >
                          ← Volver al Curso
                        </Link>
                        <button
                          onClick={() => {
                            setActiveTab('intro')
                            setMatchingSubmitted(false)
                            setQuizSubmitted(false)
                            setQuizAnswers({})
                            setMatchingAnswers({})
                            setCompletedSections(new Set())
                            setPoints(0)
                          }}
                          className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-lg font-bold transition-colors"
                        >
                          🔄 Repetir Lección
                        </button>
                        <button
                          className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg font-bold hover:opacity-90 transition-all shadow-lg"
                          onClick={() => alert('Próximamente: Lección 3 - Números y Datos Personales')}
                        >
                          Siguiente Lección →
                        </button>
                      </div>
                    </div>
                  )}

                  {completedSections.size < 4 && (
                    <div className="flex gap-4">
                      <button
                        onClick={() => {
                          setMatchingSubmitted(false)
                          setMatchingAnswers({})
                        }}
                        className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-4 rounded-lg font-bold transition-colors"
                      >
                        🔄 Reintentar Matching
                      </button>
                      <Link
                        href="/certificaciones/a1"
                        className="flex-1 bg-gradient-to-r from-amber-500 to-orange-400 text-white py-4 rounded-lg font-bold hover:opacity-90 transition-all text-center"
                      >
                        Volver al Curso
                      </Link>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
