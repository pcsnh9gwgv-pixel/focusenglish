'use client'

import { useState } from 'react'
import Link from 'next/link'

// Datos de la primera lección
const lesson1Data = {
  id: 'w1l1',
  week: 1,
  lessonNumber: 1,
  title: 'Digital Marketing Vocabulary Essentials',
  duration: '45-60 min',
  objectives: [
    'Comprender y usar 30+ términos clave de marketing digital en inglés',
    'Pronunciar correctamente acrónimos comunes (SEO, SEM, CTR, etc.)',
    'Leer y entender informes básicos de Google Analytics',
    'Comunicarte con confianza sobre métricas digitales'
  ],
  vocabulary: [
    {
      group: 'Search Marketing',
      terms: [
        {
          term: 'SEO - Search Engine Optimization',
          definition: 'Optimización para motores de búsqueda',
          pronunciation: '/ˈɛs.iː.ˈoʊ/',
          example: 'Our SEO strategy increased organic traffic by 45% this quarter.',
          context: 'We need to improve our SEO ranking on Google.'
        },
        {
          term: 'SEM - Search Engine Marketing',
          definition: 'Marketing en motores de búsqueda (incluye publicidad pagada)',
          pronunciation: '/ˈɛs.iː.ˈɛm/',
          example: "We're allocating 30% of the budget to SEM campaigns.",
          note: 'SEO = orgánico y gratis | SEM = pagado (Google Ads)'
        },
        {
          term: 'SERP - Search Engine Results Page',
          definition: 'Página de resultados del motor de búsqueda',
          pronunciation: '/sɜːrp/',
          example: "We're ranking #3 on the SERP for 'digital marketing agency'."
        },
        {
          term: 'Organic Traffic',
          definition: 'Tráfico no pagado que llega a través de búsquedas',
          example: 'Organic traffic accounts for 60% of our website visits.'
        },
        {
          term: 'Paid Traffic',
          definition: 'Tráfico generado por anuncios pagados',
          example: "Let's compare the ROI of organic versus paid traffic."
        }
      ]
    },
    {
      group: 'Performance Metrics',
      terms: [
        {
          term: 'CTR - Click-Through Rate',
          definition: 'Porcentaje de clics sobre impresiones',
          pronunciation: '/ˈsiː.tiː.ˈɑːr/',
          formula: '(Clicks ÷ Impressions) × 100',
          example: 'Our email campaign had a 4.2% CTR, which is above industry average.',
          benchmark: 'Email: 2-3% | Google Ads: 3-5%'
        },
        {
          term: 'CPC - Cost Per Click',
          definition: 'Coste por cada clic en un anuncio',
          pronunciation: '/ˈsiː.piː.ˈsiː/',
          example: 'The average CPC for this keyword is $2.50.'
        },
        {
          term: 'ROI - Return on Investment',
          definition: 'Retorno sobre la inversión',
          pronunciation: '/ˈɑːr.oʊ.ˈaɪ/',
          formula: '[(Revenue - Cost) ÷ Cost] × 100',
          example: 'The campaign delivered a 250% ROI in the first quarter.'
        },
        {
          term: 'Conversion Rate',
          definition: 'Porcentaje de visitantes que completan una acción deseada',
          formula: '(Conversions ÷ Total Visitors) × 100',
          example: 'After optimizing the landing page, our conversion rate increased from 2.1% to 3.8%.'
        },
        {
          term: 'Bounce Rate',
          definition: 'Porcentaje de visitantes que abandonan sin interactuar',
          example: "A high bounce rate of 75% suggests users aren't finding what they need."
        },
        {
          term: 'Engagement Rate',
          definition: 'Nivel de interacción con el contenido',
          example: 'Our Instagram posts have an average engagement rate of 5.2%.'
        }
      ]
    },
    {
      group: 'Customer Journey',
      terms: [
        {
          term: 'Lead Generation',
          definition: 'Proceso de atraer y captar clientes potenciales',
          example: 'Our lead generation strategy focuses on content marketing and webinars.'
        },
        {
          term: 'Lead',
          definition: 'Cliente potencial que ha mostrado interés',
          types: [
            'Cold Lead: Sin interés previo',
            'Warm Lead: Ha interactuado',
            'Hot Lead: Listo para comprar'
          ]
        },
        {
          term: 'Marketing Funnel / Sales Funnel',
          definition: 'Embudo de conversión desde visitante hasta cliente',
          stages: [
            'Awareness (Conciencia) - Top of the funnel',
            'Consideration (Consideración) - Middle of the funnel',
            'Decision (Decisión) - Bottom of the funnel',
            'Retention (Retención) - Post-venta'
          ],
          example: "We're losing too many leads at the consideration stage of the funnel."
        },
        {
          term: 'Customer Journey',
          definition: 'Todo el recorrido del cliente con la marca',
          example: 'We need to map out the entire customer journey from awareness to advocacy.'
        },
        {
          term: 'Touchpoint',
          definition: 'Cualquier punto de contacto entre cliente y marca',
          example: 'Social media, email, and customer service are key touchpoints in our strategy.'
        }
      ]
    },
    {
      group: 'Content & Campaigns',
      terms: [
        {
          term: 'CTA - Call to Action',
          definition: 'Llamada a la acción',
          pronunciation: '/ˈsiː.tiː.ˈeɪ/',
          examples: [
            'Sign up now',
            'Download your free guide',
            'Get started today',
            'Learn more'
          ],
          usage: 'We need a stronger CTA on the landing page to improve conversions.'
        },
        {
          term: 'Landing Page',
          definition: 'Página diseñada para conversión específica',
          example: 'The landing page for our ebook campaign converted at 8%.'
        },
        {
          term: 'A/B Testing',
          definition: 'Comparar dos versiones para ver cuál funciona mejor',
          example: "Let's run an A/B test on the email subject line to see which gets a higher open rate."
        },
        {
          term: 'Impressions',
          definition: 'Número de veces que se muestra un anuncio',
          example: 'The campaign generated 500,000 impressions in the first week.'
        },
        {
          term: 'Reach',
          definition: 'Número de personas únicas que vieron el contenido',
          note: 'Impressions = vistas totales | Reach = personas únicas',
          example: 'We reached 100,000 unique users with this campaign.'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'pronunciation',
      title: 'Ejercicio de Pronunciación',
      type: 'audio',
      items: [
        { term: 'SEO', pronunciation: '/ˈɛs.iː.ˈoʊ/', note: 'NO "se-o"' },
        { term: 'SEM', pronunciation: '/ˈɛs.iː.ˈɛm/' },
        { term: 'CTR', pronunciation: '/ˈsiː.tiː.ˈɑːr/' },
        { term: 'CPC', pronunciation: '/ˈsiː.piː.ˈsiː/' },
        { term: 'ROI', pronunciation: '/ˈɑːr.oʊ.ˈaɪ/' },
        { term: 'KPI', pronunciation: '/ˈkeɪ.piː.ˈaɪ/' },
        { term: 'CTA', pronunciation: '/ˈsiː.tiː.ˈeɪ/' }
      ]
    },
    {
      id: 'fill-blanks',
      title: 'Fill in the Blanks',
      type: 'fill-in',
      questions: [
        {
          question: 'We need to improve our ________ to appear higher on Google search results.',
          options: ['SEO', 'SEM'],
          answer: 'SEO'
        },
        {
          question: 'The campaign had 50,000 impressions and 1,500 clicks, giving us a ________ of 3%.',
          options: ['CTR', 'CPC'],
          answer: 'CTR'
        },
        {
          question: 'Many visitors are leaving the site immediately. We have a high ________.',
          options: ['bounce rate', 'conversion rate'],
          answer: 'bounce rate'
        },
        {
          question: 'At the top of the ________, we focus on brand awareness rather than direct sales.',
          options: ['funnel', 'touchpoint'],
          answer: 'funnel'
        },
        {
          question: "Let's run an ________ to see if the blue or red button gets more clicks.",
          options: ['A/B test', 'landing page'],
          answer: 'A/B test'
        },
        {
          question: 'The email campaign cost $500 and generated $2,000 in sales, giving us a ________ of 300%.',
          options: ['ROI', 'CPC'],
          answer: 'ROI'
        },
        {
          question: 'We need a stronger ________ on the homepage to encourage sign-ups.',
          options: ['CTA', 'SERP'],
          answer: 'CTA'
        },
        {
          question: 'People who downloaded our ebook are qualified ________ for the sales team.',
          options: ['leads', 'reach'],
          answer: 'leads'
        }
      ]
    }
  ]
}

export default function LessonPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState<'content' | 'exercises' | 'practice'>('content')
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set())
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({})
  const [showResults, setShowResults] = useState(false)

  const toggleSection = (section: string) => {
    const newCompleted = new Set(completedSections)
    if (newCompleted.has(section)) {
      newCompleted.delete(section)
    } else {
      newCompleted.add(section)
    }
    setCompletedSections(newCompleted)
  }

  const handleAnswerSelect = (questionIndex: number, answer: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answer
    })
  }

  const checkAnswers = () => {
    setShowResults(true)
  }

  const fillInBlanksExercise = lesson1Data.exercises.find(ex => ex.id === 'fill-blanks')
  const correctAnswers = fillInBlanksExercise?.type === 'fill-in' 
    ? Object.values(selectedAnswers).filter((answer, index) => {
        const question = (fillInBlanksExercise as any).questions[index]
        return answer === question.answer
      }).length 
    : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <Link 
                href="/cursos/marketing" 
                className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center mb-2"
              >
                ← Volver al curso
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">
                Lección 1: {lesson1Data.title}
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Semana {lesson1Data.week} • {lesson1Data.duration}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">Progreso</div>
              <div className="text-2xl font-bold text-purple-600">
                {Math.round((completedSections.size / (lesson1Data.vocabulary.length + 2)) * 100)}%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('content')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'content'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              📚 Contenido
            </button>
            <button
              onClick={() => setActiveTab('exercises')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'exercises'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              ✍️ Ejercicios
            </button>
            <button
              onClick={() => setActiveTab('practice')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'practice'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              💼 Práctica Real
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Tab: Content */}
        {activeTab === 'content' && (
          <div className="space-y-8">
            {/* Objectives */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">🎯 Objetivos de Aprendizaje</h2>
                <input
                  type="checkbox"
                  checked={completedSections.has('objectives')}
                  onChange={() => toggleSection('objectives')}
                  className="w-5 h-5 text-purple-600 rounded"
                />
              </div>
              <ul className="space-y-2">
                {lesson1Data.objectives.map((obj, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span className="text-gray-700">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vocabulary Groups */}
            {lesson1Data.vocabulary.map((group, groupIndex) => (
              <div key={groupIndex} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    📚 Grupo {groupIndex + 1}: {group.group}
                  </h2>
                  <input
                    type="checkbox"
                    checked={completedSections.has(`vocab-${groupIndex}`)}
                    onChange={() => toggleSection(`vocab-${groupIndex}`)}
                    className="w-5 h-5 text-purple-600 rounded"
                  />
                </div>

                <div className="space-y-6">
                  {group.terms.map((term, termIndex) => (
                    <div key={termIndex} className="border-l-4 border-purple-500 pl-4 py-2">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{term.term}</h3>
                      
                      <div className="space-y-2 text-sm">
                        <p className="text-gray-700">
                          <span className="font-semibold">Definición:</span> {term.definition}
                        </p>
                        
                        {term.pronunciation && (
                          <p className="text-purple-600">
                            <span className="font-semibold">Pronunciación:</span> {term.pronunciation}
                          </p>
                        )}
                        
                        {term.formula && (
                          <p className="bg-blue-50 p-2 rounded text-blue-900">
                            <span className="font-semibold">Fórmula:</span> {term.formula}
                          </p>
                        )}
                        
                        {term.example && (
                          <p className="text-gray-600 italic">
                            <span className="font-semibold not-italic">Ejemplo:</span> "{term.example}"
                          </p>
                        )}
                        
                        {(term as any).examples && (
                          <div>
                            <span className="font-semibold">Ejemplos comunes:</span>
                            <ul className="ml-4 mt-1 space-y-1">
                              {(term as any).examples.map((ex: string, i: number) => (
                                <li key={i} className="text-gray-600">• {ex}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {term.note && (
                          <p className="bg-yellow-50 p-2 rounded text-yellow-900 text-xs">
                            <span className="font-semibold">Nota:</span> {term.note}
                          </p>
                        )}
                        
                        {term.benchmark && (
                          <p className="text-green-700 text-xs">
                            <span className="font-semibold">Benchmark:</span> {term.benchmark}
                          </p>
                        )}

                        {(term as any).types && (
                          <div className="bg-gray-50 p-3 rounded">
                            <span className="font-semibold">Tipos:</span>
                            <ul className="ml-4 mt-2 space-y-1">
                              {(term as any).types.map((type: string, i: number) => (
                                <li key={i} className="text-gray-700">• {type}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {(term as any).stages && (
                          <div className="bg-gray-50 p-3 rounded">
                            <span className="font-semibold">Etapas:</span>
                            <ol className="ml-4 mt-2 space-y-1 list-decimal">
                              {(term as any).stages.map((stage: string, i: number) => (
                                <li key={i} className="text-gray-700">{stage}</li>
                              ))}
                            </ol>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab: Exercises */}
        {activeTab === 'exercises' && (
          <div className="space-y-8">
            {/* Pronunciation Exercise */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6">🎧 Ejercicio de Pronunciación</h2>
              <p className="text-gray-700 mb-4">Escucha y repite los siguientes acrónimos:</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {lesson1Data.exercises[0].items.map((item: any, index: number) => (
                  <div key={index} className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-lg text-purple-900">{item.term}</span>
                        <p className="text-purple-700 text-sm mt-1">{item.pronunciation}</p>
                        {item.note && <p className="text-xs text-gray-600 mt-1">{item.note}</p>}
                      </div>
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm">
                        🔊 Escuchar
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-900">
                  <span className="font-semibold">💡 Consejo:</span> Grábate diciendo estos términos y compara con la pronunciación nativa.
                </p>
              </div>
            </div>

            {/* Fill in the Blanks */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6">✍️ Fill in the Blanks</h2>
              <p className="text-gray-700 mb-6">Selecciona la opción correcta para cada frase:</p>

              <div className="space-y-6">
                {fillInBlanksExercise && fillInBlanksExercise.type === 'fill-in' && (fillInBlanksExercise as any).questions.map((q: any, index: number) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                    <p className="text-gray-800 mb-3">
                      <span className="font-semibold">#{index + 1}:</span> {q.question}
                    </p>
                    <div className="flex gap-3">
                      {q.options.map((option: string, optIndex: number) => (
                        <button
                          key={optIndex}
                          onClick={() => handleAnswerSelect(index, option)}
                          className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                            selectedAnswers[index] === option
                              ? showResults
                                ? option === q.answer
                                  ? 'border-green-500 bg-green-50 text-green-900'
                                  : 'border-red-500 bg-red-50 text-red-900'
                                : 'border-purple-500 bg-purple-50 text-purple-900'
                              : showResults && option === q.answer
                              ? 'border-green-500 bg-green-50 text-green-900'
                              : 'border-gray-300 hover:border-purple-300 text-gray-700'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <button
                  onClick={checkAnswers}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold"
                >
                  Verificar Respuestas
                </button>

                {showResults && (
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">
                      {correctAnswers}/{fillInBlanksExercise && fillInBlanksExercise.type === 'fill-in' ? (fillInBlanksExercise as any).questions.length : 0}
                    </p>
                    <p className="text-sm text-gray-600">respuestas correctas</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab: Practice */}
        {activeTab === 'practice' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">💼 Tarea Práctica Real</h2>
                <input
                  type="checkbox"
                  checked={completedSections.has('practice')}
                  onChange={() => toggleSection('practice')}
                  className="w-5 h-5 text-purple-600 rounded"
                />
              </div>

              <div className="prose max-w-none">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Actividad: Analiza un Informe de Marketing Real
                </h3>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                  <h4 className="font-semibold text-blue-900 mb-3">📋 Instrucciones:</h4>
                  <ol className="space-y-2 text-blue-900">
                    <li><strong>1.</strong> Busca un informe de marketing en inglés (Google Analytics de tu trabajo o busca "sample marketing report PDF")</li>
                    <li><strong>2.</strong> Identifica y subraya al menos 15 términos de vocabulario de esta lección</li>
                    <li><strong>3.</strong> Escribe un resumen ejecutivo (100-150 palabras en inglés) usando:
                      <ul className="ml-6 mt-2 space-y-1">
                        <li>• Mínimo 10 términos de vocabulario</li>
                        <li>• Datos específicos (números, porcentajes)</li>
                        <li>• Recomendaciones basadas en los datos</li>
                      </ul>
                    </li>
                    <li><strong>4.</strong> Grábate presentando tu resumen en voz alta (1-2 minutos)</li>
                  </ol>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">📄 Formato de entrega:</h4>
                  <pre className="bg-white p-4 rounded border border-gray-300 text-sm overflow-x-auto">
{`Executive Summary:
[Tu resumen aquí]

Key Vocabulary Used:
1. [término 1]
2. [término 2]
...

Key Metrics Identified:
- [métrica 1]: [valor]
- [métrica 2]: [valor]`}
                  </pre>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200 mt-6">
                  <h4 className="font-semibold text-green-900 mb-3">📚 Recursos para practicar:</h4>
                  <ul className="space-y-2 text-green-900">
                    <li>• <a href="https://analytics.google.com/analytics/web/demoAccount" target="_blank" className="underline hover:text-green-700">Google Analytics Demo Account</a> - Datos reales</li>
                    <li>• <a href="https://blog.hubspot.com/" target="_blank" className="underline hover:text-green-700">HubSpot Marketing Blog</a> - Ejemplos de reportes</li>
                    <li>• Busca en Google: "sample marketing report PDF"</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-lg font-semibold text-lg">
                  Subir tu Tarea Completada
                </button>
              </div>
            </div>

            {/* Checklist */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">✅ Checklist de Progreso</h2>
              <p className="text-gray-700 mb-4">Antes de pasar a la Lección 2, asegúrate de poder:</p>
              
              <div className="space-y-3">
                {[
                  'Definir los 30 términos de vocabulario',
                  'Pronunciar correctamente los 7 acrónimos principales',
                  'Leer un informe de Google Analytics básico',
                  'Usar los términos en contexto profesional',
                  'Escribir un resumen ejecutivo usando el vocabulario',
                  'Entender la diferencia entre SEO/SEM, CTR/CPC, Impressions/Reach'
                ].map((item, index) => (
                  <label key={index} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                    <input type="checkbox" className="w-5 h-5 text-purple-600 rounded" />
                    <span className="text-gray-700">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Link 
            href="/cursos/marketing" 
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            ← Volver al curso
          </Link>
          <Link
            href="/cursos/marketing/leccion/w1l2"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Siguiente Lección →
          </Link>
        </div>
      </div>
    </div>
  )
}
