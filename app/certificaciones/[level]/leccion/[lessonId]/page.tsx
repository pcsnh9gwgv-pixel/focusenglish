'use client'

import { useState } from 'react'
import Link from 'next/link'
import { certificationCourses } from '@/content/courses/certifications/course-data'
import { use } from 'react'

type Params = {
  level: string
  lessonId: string
}

export default function LessonPage({ params }: { params: Promise<Params> }) {
  const { level, lessonId } = use(params)
  const [activeTab, setActiveTab] = useState<'intro' | 'content' | 'exercises' | 'practice'>('intro')
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set())
  
  const course = certificationCourses[level]
  
  // Find the lesson
  let lesson: any = null
  let weekNumber = 0
  let lessonNumber = 0
  
  if (course) {
    for (const week of course.weeks) {
      const foundLesson = week.lessons.find(l => l.id === lessonId)
      if (foundLesson) {
        lesson = foundLesson
        weekNumber = week.week
        lessonNumber = week.lessons.indexOf(foundLesson) + 1
        break
      }
    }
  }

  if (!course || !lesson) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Lección no encontrada</h1>
          <Link href={`/certificaciones/${level}`} className="text-purple-600 hover:text-purple-700">
            Volver al curso
          </Link>
        </div>
      </div>
    )
  }

  const progressPercentage = Math.round((completedSections.size / 4) * 100)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className={`bg-gradient-to-r ${course.gradient} text-white py-8`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href={`/certificaciones/${level}`} 
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al curso {course.level}
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-xs font-bold rounded-full mr-2">
                  SEMANA {weekNumber} • LECCIÓN {lessonNumber}
                </span>
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-xs font-bold rounded-full mr-2">
                  {lesson.duration}
                </span>
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-xs font-bold rounded-full">
                  {lesson.type.toUpperCase()}
                </span>
              </div>
              <h1 className="text-4xl font-black mb-2">{lesson.title}</h1>
              <p className="text-xl text-white/90">{lesson.examFocus}</p>
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
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`bg-gradient-to-r ${course.gradient} h-2 rounded-full transition-all duration-500`}
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
              { id: 'content', label: 'Contenido', icon: '📚' },
              { id: 'exercises', label: 'Ejercicios', icon: '✍️' },
              { id: 'practice', label: 'Práctica', icon: '🎯' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? `border-${course.color}-600 text-${course.color}-600`
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Bienvenido a esta lección 🚀</h2>
              <p className="text-lg text-gray-700 mb-6">
                En esta lección aprenderás conceptos fundamentales para tu examen de certificación nivel {course.level}.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
                <h3 className="font-bold text-blue-900 mb-3">🎯 Enfoque del Examen:</h3>
                <p className="text-blue-900">{lesson.examFocus}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-3">📚 Temas que verás:</h3>
                <div className="flex flex-wrap gap-2">
                  {lesson.topics.map((topic: string, idx: number) => (
                    <span key={idx} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-3">✅ Actividades:</h3>
                <ul className="space-y-2">
                  {lesson.activities.map((activity: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <svg className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg">
                <h3 className="font-bold text-amber-900 mb-2">⏱️ Duración estimada:</h3>
                <p className="text-amber-900">{lesson.duration}</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Contenido */}
        {activeTab === 'content' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 Contenido de la Lección</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-6">
                <p className="text-yellow-900">
                  <strong>🚧 En desarrollo:</strong> El contenido detallado de esta lección estará disponible próximamente. 
                  Incluirá explicaciones, ejemplos, audio de pronunciación y material interactivo.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {lesson.topics.map((topic: string, idx: number) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">📌 {topic}</h3>
                    <p className="text-gray-600 text-sm">
                      Contenido explicativo y ejemplos sobre este tema.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab: Ejercicios */}
        {activeTab === 'exercises' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">✍️ Ejercicios Prácticos</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-6">
                <p className="text-yellow-900">
                  <strong>🚧 En desarrollo:</strong> Los ejercicios interactivos para esta lección estarán disponibles próximamente. 
                  Incluirán actividades de práctica, quizzes y ejercicios autocorregibles.
                </p>
              </div>

              <div className="space-y-4">
                {lesson.activities.map((activity: string, idx: number) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">Ejercicio {idx + 1}</h3>
                    <p className="text-gray-700">{activity}</p>
                    <button className="mt-4 px-6 py-2 bg-gray-300 text-gray-600 rounded-lg cursor-not-allowed">
                      Próximamente
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab: Práctica */}
        {activeTab === 'practice' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 Práctica</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-6">
                <p className="text-yellow-900">
                  <strong>🚧 En desarrollo:</strong> Las actividades de práctica para esta lección estarán disponibles próximamente. 
                  Incluirán ejercicios de speaking, listening y práctica real del examen.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-3">💡 Mientras tanto, te recomendamos:</h3>
                <ul className="space-y-2 text-blue-900">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Revisar el vocabulario de la lección</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Practicar la pronunciación en voz alta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Crear tus propios ejemplos usando los temas de la lección</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="mt-12 flex justify-between items-center bg-white rounded-xl shadow-md p-6">
          <Link 
            href={`/certificaciones/${level}`}
            className="text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al curso
          </Link>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">
              Progreso: <strong className={`text-${course.color}-600`}>{progressPercentage}%</strong>
            </div>
            <button 
              onClick={() => {
                const newCompleted = new Set(['intro', 'content', 'exercises', 'practice'])
                setCompletedSections(newCompleted)
              }}
              className={`bg-gradient-to-r ${course.gradient} hover:opacity-90 text-white px-6 py-3 rounded-lg font-bold transition-colors`}
            >
              Marcar como completada
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
