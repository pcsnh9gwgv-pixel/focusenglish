'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// Datos pedagógicos del alfabeto con IPA (International Phonetic Alphabet)
// Audios profesionales locales con velocidad 0.7 (pausados para aprendizaje óptimo)
const alphabetData = [
  { letter: 'A', name: 'ei', ipa: '/eɪ/', example: 'Apple', exampleEs: 'Manzana', category: 'vowel', audioUrl: '/audio/alphabet/A.mp3' },
  { letter: 'B', name: 'bi', ipa: '/biː/', example: 'Book', exampleEs: 'Libro', category: 'consonant', audioUrl: '/audio/alphabet/B.mp3' },
  { letter: 'C', name: 'si', ipa: '/siː/', example: 'Cat', exampleEs: 'Gato', category: 'consonant', audioUrl: '/audio/alphabet/C.mp3' },
  { letter: 'D', name: 'di', ipa: '/diː/', example: 'Dog', exampleEs: 'Perro', category: 'consonant', audioUrl: '/audio/alphabet/D.mp3' },
  { letter: 'E', name: 'i', ipa: '/iː/', example: 'Egg', exampleEs: 'Huevo', category: 'vowel', audioUrl: '/audio/alphabet/E.mp3' },
  { letter: 'F', name: 'ef', ipa: '/ɛf/', example: 'Fish', exampleEs: 'Pez', category: 'consonant', audioUrl: '/audio/alphabet/F.mp3' },
  { letter: 'G', name: 'yi', ipa: '/dʒiː/', example: 'Girl', exampleEs: 'Niña', category: 'consonant', audioUrl: '/audio/alphabet/G.mp3' },
  { letter: 'H', name: 'eich', ipa: '/eɪtʃ/', example: 'House', exampleEs: 'Casa', category: 'consonant', audioUrl: '/audio/alphabet/H.mp3' },
  { letter: 'I', name: 'ai', ipa: '/aɪ/', example: 'Ice', exampleEs: 'Hielo', category: 'vowel', audioUrl: '/audio/alphabet/I.mp3' },
  { letter: 'J', name: 'yei', ipa: '/dʒeɪ/', example: 'Juice', exampleEs: 'Jugo', category: 'consonant', audioUrl: '/audio/alphabet/J.mp3' },
  { letter: 'K', name: 'kei', ipa: '/keɪ/', example: 'King', exampleEs: 'Rey', category: 'consonant', audioUrl: '/audio/alphabet/K.mp3' },
  { letter: 'L', name: 'el', ipa: '/ɛl/', example: 'Lion', exampleEs: 'León', category: 'consonant', audioUrl: '/audio/alphabet/L.mp3' },
  { letter: 'M', name: 'em', ipa: '/ɛm/', example: 'Mouse', exampleEs: 'Ratón', category: 'consonant', audioUrl: '/audio/alphabet/M.mp3' },
  { letter: 'N', name: 'en', ipa: '/ɛn/', example: 'Nose', exampleEs: 'Nariz', category: 'consonant', audioUrl: '/audio/alphabet/N.mp3' },
  { letter: 'O', name: 'ou', ipa: '/oʊ/', example: 'Orange', exampleEs: 'Naranja', category: 'vowel', audioUrl: '/audio/alphabet/O.mp3' },
  { letter: 'P', name: 'pi', ipa: '/piː/', example: 'Pen', exampleEs: 'Bolígrafo', category: 'consonant', audioUrl: '/audio/alphabet/P.mp3' },
  { letter: 'Q', name: 'kiu', ipa: '/kjuː/', example: 'Queen', exampleEs: 'Reina', category: 'consonant', audioUrl: '/audio/alphabet/Q.mp3' },
  { letter: 'R', name: 'ar', ipa: '/ɑːr/', example: 'Red', exampleEs: 'Rojo', category: 'consonant', audioUrl: '/audio/alphabet/R.mp3' },
  { letter: 'S', name: 'es', ipa: '/ɛs/', example: 'Sun', exampleEs: 'Sol', category: 'consonant', audioUrl: '/audio/alphabet/S.mp3' },
  { letter: 'T', name: 'ti', ipa: '/tiː/', example: 'Tree', exampleEs: 'Árbol', category: 'consonant', audioUrl: '/audio/alphabet/T.mp3' },
  { letter: 'U', name: 'iu', ipa: '/juː/', example: 'Up', exampleEs: 'Arriba', category: 'vowel', audioUrl: '/audio/alphabet/U.mp3' },
  { letter: 'V', name: 'vi', ipa: '/viː/', example: 'Van', exampleEs: 'Furgoneta', category: 'consonant', audioUrl: '/audio/alphabet/V.mp3' },
  { letter: 'W', name: 'dabel iu', ipa: '/ˈdʌbəl juː/', example: 'Water', exampleEs: 'Agua', category: 'consonant', audioUrl: '/audio/alphabet/W.mp3' },
  { letter: 'X', name: 'eks', ipa: '/ɛks/', example: 'Box', exampleEs: 'Caja', category: 'consonant', audioUrl: '/audio/alphabet/X.mp3' },
  { letter: 'Y', name: 'uai', ipa: '/waɪ/', example: 'Yellow', exampleEs: 'Amarillo', category: 'consonant', audioUrl: '/audio/alphabet/Y.mp3' },
  { letter: 'Z', name: 'zi', ipa: '/ziː/', example: 'Zebra', exampleEs: 'Cebra', category: 'consonant', audioUrl: '/audio/alphabet/Z.mp3' }
]

// Ejercicios de pronunciación por nivel
const pronunciationExercises = [
  {
    level: 'beginner',
    title: 'Vocales (Vowels)',
    letters: ['A', 'E', 'I', 'O', 'U'],
    tip: 'Las vocales en inglés tienen sonidos diferentes al español. ¡Escucha con atención!'
  },
  {
    level: 'intermediate',
    title: 'Consonantes Difíciles',
    letters: ['G', 'H', 'J', 'V', 'W', 'Y'],
    tip: 'Estas consonantes suelen confundirse. Practica despacio.'
  },
  {
    level: 'advanced',
    title: 'Deletreo Completo',
    letters: alphabetData.map(l => l.letter),
    tip: 'Intenta deletrear tu nombre y apellido en inglés.'
  }
]

// Quizzes interactivos
const quizzes = [
  {
    id: 1,
    question: '¿Cómo se pronuncia la letra "A" en inglés?',
    options: ['ah', 'ei', 'ay', 'ee'],
    correct: 1,
    explanation: 'La letra A se pronuncia /eɪ/ (ei), como en "cake" o "name".'
  },
  {
    id: 2,
    question: '¿Qué letra hace el sonido /dʒiː/?',
    options: ['J', 'G', 'Y', 'H'],
    correct: 1,
    explanation: 'La letra G se pronuncia /dʒiː/ (yi), similar al sonido "y" en "yoga".'
  },
  {
    id: 3,
    question: '¿Cuántas vocales tiene el alfabeto inglés?',
    options: ['3', '4', '5', '6'],
    correct: 2,
    explanation: 'El alfabeto inglés tiene 5 vocales: A, E, I, O, U (las mismas que en español).'
  },
  {
    id: 4,
    question: '¿Cómo se deletrea "CAT" en inglés?',
    options: ['si-ei-ti', 'ci-a-te', 'ca-a-ta', 'ke-a-te'],
    correct: 0,
    explanation: 'CAT se deletrea: C /siː/, A /eɪ/, T /tiː/ = "si-ei-ti"'
  }
]

// Ejercicio de spelling (deletreo)
const spellingWords = [
  { word: 'HELLO', spanish: 'Hola', difficulty: 'easy' },
  { word: 'NAME', spanish: 'Nombre', difficulty: 'easy' },
  { word: 'BOOK', spanish: 'Libro', difficulty: 'easy' },
  { word: 'WATER', spanish: 'Agua', difficulty: 'medium' },
  { word: 'YELLOW', spanish: 'Amarillo', difficulty: 'medium' },
  { word: 'QUESTION', spanish: 'Pregunta', difficulty: 'hard' }
]

export default function Lesson1Page() {
  const [activeTab, setActiveTab] = useState<'intro' | 'content' | 'exercises' | 'practice'>('intro')
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)
  const [playingAudio, setPlayingAudio] = useState<string | null>(null)
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: number}>({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [currentExercise, setCurrentExercise] = useState(0)
  const [spellingInput, setSpellingInput] = useState('')
  const [spellingFeedback, setSpellingFeedback] = useState<'correct' | 'incorrect' | null>(null)
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set())
  const [showConfetti, setShowConfetti] = useState(false)
  const [points, setPoints] = useState(0)
  const [voicesLoaded, setVoicesLoaded] = useState(false)

  const progressPercentage = Math.round((completedSections.size / 4) * 100)

  // Reproducir audio profesional de alta calidad
  const playSound = async (letter: string) => {
    setPlayingAudio(letter)
    
    try {
      // Buscar la letra en los datos
      const letterData = alphabetData.find(l => l.letter === letter)
      if (!letterData) {
        setPlayingAudio(null)
        return
      }
      
      // Si tiene audioUrl profesional, usarlo
      if (letterData.audioUrl) {
        const audio = new Audio(letterData.audioUrl)
        audio.playbackRate = 1.0 // Los audios ya vienen con velocidad 0.7 óptima
        
        audio.onended = () => {
          setPlayingAudio(null)
        }
        
        audio.onerror = () => {
          setPlayingAudio(null)
          console.error('Error playing audio for letter:', letter)
        }
        
        await audio.play()
      } else {
        // Fallback: si no hay audio profesional, mostrar mensaje
        console.log(`Audio profesional no disponible aún para: ${letter}`)
        setPlayingAudio(null)
      }
      
    } catch (error) {
      console.error('Error with audio:', error)
      setPlayingAudio(null)
    }
  }

  // Verificar respuesta del quiz
  const checkQuizAnswer = () => {
    setQuizSubmitted(true)
    const correct = quizzes.filter((q, i) => quizAnswers[i] === q.correct).length
    const newPoints = correct * 25
    setPoints(points + newPoints)
    
    if (correct === quizzes.length) {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 3000)
    }
    
    const newCompleted = new Set(completedSections)
    newCompleted.add('exercises')
    setCompletedSections(newCompleted)
  }

  // Verificar deletreo
  const checkSpelling = () => {
    const currentWord = spellingWords[currentExercise]
    const userInput = spellingInput.toUpperCase().replace(/\s+/g, '')
    
    if (userInput === currentWord.word) {
      setSpellingFeedback('correct')
      setPoints(points + 10)
      setTimeout(() => {
        setSpellingFeedback(null)
        setSpellingInput('')
        if (currentExercise < spellingWords.length - 1) {
          setCurrentExercise(currentExercise + 1)
        }
      }, 2000)
    } else {
      setSpellingFeedback('incorrect')
      setTimeout(() => setSpellingFeedback(null), 2000)
    }
  }

  const getQuizScore = () => {
    let correct = 0
    quizzes.forEach((q, i) => {
      if (quizAnswers[i] === q.correct) correct++
    })
    return Math.round((correct / quizzes.length) * 100)
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
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-xs font-bold rounded-full mr-2">
                  SEMANA 1 • LECCIÓN 1
                </span>
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-xs font-bold rounded-full mr-2">
                  40 min
                </span>
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-xs font-bold rounded-full mr-2">
                  VOCABULARY
                </span>
                <span className="inline-block px-3 py-1 bg-green-500 text-xs font-bold rounded-full">
                  ⭐ {points} puntos
                </span>
              </div>
              <h1 className="text-4xl font-black mb-2">El Alfabeto y Sonidos Básicos</h1>
              <p className="text-xl text-white/90">The English Alphabet & Basic Sounds</p>
            </div>
            
            <div className="hidden md:block">
              <div className="text-center">
                <div className="text-5xl font-black mb-2">{progressPercentage}%</div>
                <div className="text-sm text-white/80">Completado</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-amber-500 to-orange-400 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'intro', label: 'Introducción', icon: '📖', completed: completedSections.has('intro') },
              { id: 'content', label: 'Alfabeto Interactivo', icon: '🔤', completed: completedSections.has('content') },
              { id: 'exercises', label: 'Quiz', icon: '✍️', completed: completedSections.has('exercises') },
              { id: 'practice', label: 'Práctica', icon: '🎯', completed: completedSections.has('practice') }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'border-amber-600 text-amber-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
                {tab.completed && <span className="text-green-500">✓</span>}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Tab: Introducción */}
        {activeTab === 'intro' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">¡Bienvenido a tu primera lección! 🚀</h2>
              <p className="text-lg text-gray-700 mb-6">
                Esta es la base fundamental de tu aprendizaje del inglés. El alfabeto inglés es muy parecido al español, 
                ¡pero los sonidos son completamente diferentes!
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Objetivos de Aprendizaje:
                </h3>
                <ul className="space-y-2 text-blue-900">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Reconocer y nombrar las 26 letras del alfabeto inglés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Pronunciar correctamente cada letra (con IPA - Alfabeto Fonético Internacional)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Diferenciar entre vocales y consonantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Deletrear (spell) palabras básicas en inglés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Entender los símbolos fonéticos básicos</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                  <div className="text-3xl mb-3">💡</div>
                  <h3 className="font-bold text-gray-900 mb-2">¿Por qué es importante?</h3>
                  <p className="text-gray-700 text-sm">
                    El alfabeto es la base de la comunicación escrita y oral. Saber deletrear correctamente es 
                    esencial para el examen A1, especialmente en las secciones de Listening y Speaking.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                  <div className="text-3xl mb-3">📝</div>
                  <h3 className="font-bold text-gray-900 mb-2">En el examen verás:</h3>
                  <p className="text-gray-700 text-sm">
                    Dictado de nombres propios, direcciones de email, códigos postales. 
                    Deberás deletrear tu nombre y entender cuando te deletreen algo.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg mb-6">
                <h3 className="font-bold text-amber-900 mb-2">⏱️ Plan de Estudio (40 minutos):</h3>
                <div className="space-y-2 text-amber-900">
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold">00-10 min:</span>
                    <span>📖 Introducción y teoría</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold">10-25 min:</span>
                    <span>🔤 Alfabeto interactivo con audio</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold">25-35 min:</span>
                    <span>✍️ Quiz de evaluación</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold">35-40 min:</span>
                    <span>🎯 Práctica de deletreo</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">🎓 Dato Curioso:</h3>
                <p className="text-gray-700">
                  El alfabeto inglés tiene 26 letras (igual que el español sin la Ñ). 
                  Sin embargo, ¡el inglés tiene más de 44 sonidos diferentes! Esto se debe a que 
                  las combinaciones de letras crean nuevos sonidos. Por ahora, nos enfocaremos en los sonidos básicos.
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

        {/* Tab: Contenido - Alfabeto Interactivo */}
        {activeTab === 'content' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-4xl">🔤</span>
                Alfabeto Inglés Interactivo
              </h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
                <p className="text-blue-900 font-semibold">
                  👆 Haz clic en cualquier letra para ver su pronunciación, símbolo fonético y un ejemplo
                </p>
              </div>

              {/* Alfabeto Ultra Compacto - TODO visible siempre */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-1.5 mb-6">
                {alphabetData.map((item) => (
                  <button
                    key={item.letter}
                    onClick={() => {
                      setSelectedLetter(item.letter)
                      playSound(item.letter)
                    }}
                    className={`p-2 rounded-lg transition-all transform hover:scale-105 border ${
                      selectedLetter === item.letter
                        ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white border-amber-600 scale-110 shadow-md'
                        : item.category === 'vowel'
                        ? 'bg-blue-50 hover:bg-blue-100 text-blue-900 border-blue-200'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-900 border-gray-200'
                    } ${playingAudio === item.letter ? 'animate-pulse ring-2 ring-amber-400' : ''}`}
                  >
                    <div className="flex flex-col items-center">
                      {/* Letra grande */}
                      <span className="text-2xl font-black leading-none mb-0.5">{item.letter}</span>
                      
                      {/* IPA compacto */}
                      <span className={`text-[9px] font-mono leading-none mb-0.5 ${
                        selectedLetter === item.letter ? 'text-white/90' : 'text-violet-600'
                      }`}>
                        {item.ipa}
                      </span>
                      
                      {/* Ejemplo en inglés - SIEMPRE VISIBLE */}
                      <span className={`text-[10px] font-semibold leading-tight truncate w-full text-center ${
                        selectedLetter === item.letter ? 'text-white' : 'text-gray-700'
                      }`}>
                        {item.example}
                      </span>
                      
                      {/* Traducción español - SIEMPRE VISIBLE */}
                      <span className={`text-[9px] leading-tight truncate w-full text-center ${
                        selectedLetter === item.letter ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        {item.exampleEs}
                      </span>
                      
                      {/* Icono categoría */}
                      {item.category === 'vowel' && (
                        <span className="text-[8px] mt-0.5">🔵</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Detalle de letra seleccionada - Más compacto */}
              {selectedLetter && (
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border-2 border-amber-300 animate-slideIn">
                    {(() => {
                      const letter = alphabetData.find(l => l.letter === selectedLetter)!
                      return (
                        <div className="flex flex-col md:flex-row items-center gap-6">
                          <div className="flex-shrink-0">
                            <div className="text-7xl font-black text-amber-600 bg-white rounded-2xl w-24 h-24 flex items-center justify-center shadow-lg">
                              {letter.letter}
                            </div>
                          </div>
                          
                          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                            <div className="bg-white p-4 rounded-lg shadow-md">
                              <p className="text-xs font-semibold text-gray-500 mb-1">Pronunciación:</p>
                              <p className="text-2xl font-bold text-gray-900">{letter.name}</p>
                            </div>

                            <div className="bg-white p-4 rounded-lg shadow-md">
                              <p className="text-xs font-semibold text-gray-500 mb-1">IPA:</p>
                              <p className="text-2xl font-bold text-purple-600 font-mono">{letter.ipa}</p>
                            </div>

                            <div className="bg-white p-4 rounded-lg shadow-md">
                              <p className="text-xs font-semibold text-gray-500 mb-1">Ejemplo:</p>
                              <p className="text-xl font-bold text-gray-900">{letter.example} <span className="text-gray-500 text-base">({letter.exampleEs})</span></p>
                            </div>

                            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
                              <div>
                                <p className="text-xs font-semibold text-gray-500 mb-1">Categoría:</p>
                                <span className={`inline-block px-3 py-1 rounded-full font-bold text-sm ${
                                  letter.category === 'vowel'
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'bg-green-100 text-green-700'
                                }`}>
                                  {letter.category === 'vowel' ? '🔵 Vocal' : '🟢 Consonante'}
                                </span>
                              </div>
                              <button
                                onClick={() => playSound(letter.letter)}
                                className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-400 text-white rounded-lg font-bold hover:opacity-90 transition-all flex items-center gap-2 shadow-md"
                              >
                                <span className="text-lg">🔊</span>
                                <span className="hidden sm:inline">Play</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      )
                    })()}
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-sm text-blue-900">
                      <strong>💡 Tip:</strong> Haz clic en el botón 🔊 y repite el sonido en voz alta 5 veces para memorizarlo mejor.
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-8 bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                <h3 className="font-bold text-green-900 mb-3">✅ Has Aprendido:</h3>
                <p className="text-green-900">
                  ¡Excelente! Ya conoces las 26 letras del alfabeto inglés y sus sonidos básicos. 
                  Ahora vamos a practicar con ejercicios interactivos.
                </p>
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
                              name={`question-${quiz.id}`}
                              value={oIndex}
                              checked={quizAnswers[qIndex] === oIndex}
                              onChange={() => setQuizAnswers({...quizAnswers, [qIndex]: oIndex})}
                              className="w-5 h-5 text-amber-600"
                            />
                            <span className="ml-3 text-gray-700 font-medium">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <button
                    onClick={checkQuizAnswer}
                    disabled={Object.keys(quizAnswers).length !== quizzes.length}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-400 text-white py-4 rounded-lg font-bold hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transform hover:scale-105"
                  >
                    {Object.keys(quizAnswers).length === quizzes.length 
                      ? '✅ Enviar Respuestas' 
                      : `Responde todas las preguntas (${Object.keys(quizAnswers).length}/${quizzes.length})`
                    }
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className={`p-8 rounded-xl text-center border-4 ${
                    getQuizScore() >= 75 
                      ? 'bg-gradient-to-br from-green-50 to-green-100 border-green-500' 
                      : 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-500'
                  }`}>
                    <div className="text-6xl font-black mb-4">{getQuizScore()}%</div>
                    <p className="text-2xl font-bold mb-2">
                      {getQuizScore() >= 75 ? '🎉 ¡Excelente Trabajo!' : '💪 ¡Sigue Practicando!'}
                    </p>
                    <p className="text-gray-700">
                      {getQuizScore() >= 75 
                        ? '¡Has dominado el alfabeto! Ganaste +25 puntos por cada respuesta correcta.' 
                        : 'Revisa las respuestas y vuelve a estudiar el alfabeto.'
                      }
                    </p>
                  </div>

                  {quizzes.map((quiz, qIndex) => {
                    const isCorrect = quizAnswers[qIndex] === quiz.correct
                    return (
                      <div 
                        key={quiz.id} 
                        className={`p-6 rounded-xl border-2 ${
                          isCorrect 
                            ? 'bg-green-50 border-green-300' 
                            : 'bg-red-50 border-red-300'
                        }`}
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <span className="text-3xl">{isCorrect ? '✅' : '❌'}</span>
                          <div className="flex-1">
                            <p className="font-bold text-gray-900 mb-2 text-lg">{quiz.question}</p>
                            <p className="text-sm text-gray-700 mb-2">
                              <strong>Tu respuesta:</strong> {quiz.options[quizAnswers[qIndex]]}
                            </p>
                            {!isCorrect && (
                              <p className="text-sm text-green-700 mb-2">
                                <strong>Respuesta correcta:</strong> {quiz.options[quiz.correct]}
                              </p>
                            )}
                            <p className="text-sm text-gray-600 italic bg-white p-3 rounded-lg">
                              💡 {quiz.explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })}

                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        setQuizSubmitted(false)
                        setQuizAnswers({})
                      }}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg font-bold transition-colors"
                    >
                      🔄 Intentar de Nuevo
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab('practice')
                      }}
                      className="flex-1 bg-gradient-to-r from-amber-500 to-orange-400 text-white py-3 rounded-lg font-bold hover:opacity-90 transition-colors"
                    >
                      Continuar a Práctica →
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab: Práctica - Spelling */}
        {activeTab === 'practice' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-4xl">🎯</span>
                Práctica de Deletreo (Spelling)
              </h2>

              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg mb-6">
                <p className="text-purple-900 font-semibold mb-2">
                  📖 Instrucciones:
                </p>
                <p className="text-purple-900">
                  Deletrea cada palabra usando las letras del alfabeto inglés (sin espacios ni guiones). 
                  Por ejemplo, para "CAT" escribe: <strong>CAT</strong>
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-300 mb-6">
                <div className="text-center mb-6">
                  <p className="text-sm text-blue-600 font-semibold mb-2">
                    Palabra {currentExercise + 1} de {spellingWords.length}
                  </p>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <p className="text-4xl font-black text-gray-900">
                      {spellingWords[currentExercise].spanish}
                    </p>
                    <span className={`px-4 py-1 rounded-full text-sm font-bold ${
                      spellingWords[currentExercise].difficulty === 'easy' 
                        ? 'bg-green-200 text-green-800'
                        : spellingWords[currentExercise].difficulty === 'medium'
                        ? 'bg-yellow-200 text-yellow-800'
                        : 'bg-red-200 text-red-800'
                    }`}>
                      {spellingWords[currentExercise].difficulty.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-gray-600">¿Cómo se escribe en inglés?</p>
                </div>

                <div className="max-w-md mx-auto">
                  <input
                    type="text"
                    value={spellingInput}
                    onChange={(e) => setSpellingInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && checkSpelling()}
                    placeholder="Escribe aquí..."
                    className={`w-full px-6 py-4 text-2xl font-bold text-center rounded-lg border-4 transition-all ${
                      spellingFeedback === 'correct'
                        ? 'border-green-500 bg-green-50'
                        : spellingFeedback === 'incorrect'
                        ? 'border-red-500 bg-red-50 animate-shake'
                        : 'border-gray-300 focus:border-blue-500'
                    }`}
                  />

                  {spellingFeedback === 'correct' && (
                    <div className="mt-4 p-4 bg-green-100 border-2 border-green-500 rounded-lg text-center animate-slideIn">
                      <p className="text-2xl font-bold text-green-700">✅ ¡Correcto!</p>
                      <p className="text-green-600">+10 puntos</p>
                    </div>
                  )}

                  {spellingFeedback === 'incorrect' && (
                    <div className="mt-4 p-4 bg-red-100 border-2 border-red-500 rounded-lg text-center animate-slideIn">
                      <p className="text-2xl font-bold text-red-700">❌ Intenta de nuevo</p>
                      <p className="text-red-600">Verifica tu deletreo</p>
                    </div>
                  )}

                  <button
                    onClick={checkSpelling}
                    disabled={!spellingInput.trim()}
                    className="w-full mt-4 bg-gradient-to-r from-amber-500 to-orange-400 text-white py-4 rounded-lg font-bold hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transform hover:scale-105"
                  >
                    Verificar
                  </button>
                </div>

                <div className="mt-6 flex justify-center gap-2">
                  {spellingWords.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-3 h-3 rounded-full ${
                        idx === currentExercise 
                          ? 'bg-amber-500' 
                          : idx < currentExercise 
                          ? 'bg-green-500' 
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                <h3 className="font-bold text-green-900 mb-3">🎓 Consejo de Pronunciación:</h3>
                <p className="text-green-900">
                  Cuando deletrees en inglés, pronuncia cada letra claramente. En el examen A1, 
                  te pueden pedir que deletrees tu nombre, email o dirección. ¡Practica hasta que sea natural!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="mt-12 flex justify-between items-center bg-white rounded-xl shadow-lg p-6">
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
            <button 
              onClick={() => {
                const newCompleted = new Set(['intro', 'content', 'exercises', 'practice'])
                setCompletedSections(newCompleted)
                setPoints(points + 20)
                setShowConfetti(true)
              }}
              className="bg-gradient-to-r from-amber-500 to-orange-400 hover:opacity-90 text-white px-6 py-3 rounded-lg font-bold transition-all shadow-lg transform hover:scale-105"
            >
              ✓ Completar Lección
            </button>
          </div>
        </div>
      </div>


    </div>
  )
}
