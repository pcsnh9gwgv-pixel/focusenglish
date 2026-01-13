'use client'

import Link from 'next/link'

export default function Lesson1Page() {
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
          
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-purple-500 text-xs font-semibold rounded-full mr-2">
              SEMANA 1 • LECCIÓN 1
            </span>
            <span className="inline-block px-3 py-1 bg-purple-700 text-xs font-semibold rounded-full">
              45 min
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-2">Digital Marketing Vocabulary Essentials</h1>
          <p className="text-xl text-purple-100">Master the fundamental terminology of digital marketing</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Objetivos de Aprendizaje</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Recognize and define 30+ essential digital marketing terms</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Pronounce marketing acronyms correctly (SEO, SEM, CTR, CPC, ROI)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Use marketing terminology naturally in professional contexts</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Understand the relationship between key marketing concepts</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📚 Vocabulario Esencial</h2>
          
          <div className="space-y-6">
            {[
              {
                term: 'SEO - Search Engine Optimization',
                pronunciation: '/es-iː-əʊ/',
                definition: 'The practice of improving website visibility in search engine results organically',
                example: 'Our SEO strategy helped us rank first for "best marketing tools".'
              },
              {
                term: 'SEM - Search Engine Marketing',
                pronunciation: '/es-iː-em/',
                definition: 'Paid advertising strategies to increase visibility in search engine results',
                example: 'We allocated 30% of our budget to SEM campaigns on Google Ads.'
              },
              {
                term: 'CTR - Click-Through Rate',
                pronunciation: '/siː-tiː-ɑːr/',
                definition: 'The percentage of people who click on your ad or link after seeing it',
                example: 'Our email campaign achieved a 12% CTR, above industry average.',
                formula: 'CTR = (Clicks / Impressions) × 100'
              },
              {
                term: 'CPC - Cost Per Click',
                pronunciation: '/siː-piː-siː/',
                definition: 'The amount you pay each time someone clicks on your paid advertisement',
                example: 'Our average CPC decreased from $2.50 to $1.80 after optimizing.',
                formula: 'CPC = Total Cost / Total Clicks'
              },
              {
                term: 'ROI - Return on Investment',
                pronunciation: '/ɑːr-əʊ-aɪ/',
                definition: 'A measure of the profitability of an investment',
                example: 'The campaign generated a 350% ROI in just three months.',
                formula: 'ROI = [(Revenue - Cost) / Cost] × 100'
              }
            ].map((item, index) => (
              <div key={index} className="border-l-4 border-purple-500 pl-4 py-2 bg-gray-50 rounded-r-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.term}</h3>
                <p className="text-purple-600 text-sm mb-2">
                  <span className="font-semibold">Pronunciación:</span> {item.pronunciation}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Definición:</span> {item.definition}
                </p>
                {item.formula && (
                  <p className="text-blue-700 bg-blue-50 p-2 rounded text-sm mb-2">
                    <span className="font-semibold">Fórmula:</span> {item.formula}
                  </p>
                )}
                <p className="text-gray-600 italic text-sm">
                  <span className="font-semibold not-italic">Ejemplo:</span> "{item.example}"
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
            <p className="text-sm text-yellow-800">
              <span className="font-semibold">💡 Nota:</span> Esta es una versión simplificada. El curso completo incluye 30 términos, 
              ejercicios interactivos, audio de pronunciación y tareas prácticas.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Tarea Práctica</h2>
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <h3 className="font-bold text-purple-900 mb-3">Analyze a Google Analytics Report</h3>
            <p className="text-purple-800 mb-4">
              Your task is to analyze a marketing report and write a professional summary email 
              using at least 10 vocabulary terms from this lesson.
            </p>
            <div className="bg-white p-4 rounded border border-purple-200">
              <h4 className="font-semibold mb-2">Sample Data:</h4>
              <ul className="space-y-1 text-sm">
                <li>• 50,000 Sessions</li>
                <li>• 35,000 Users (Reach)</li>
                <li>• 65% Bounce Rate</li>
                <li>• 750 Conversions</li>
                <li>• 45% Organic Traffic, 30% Direct, 15% Paid, 10% Social</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Link 
            href="/cursos/marketing" 
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            ← Volver al curso
          </Link>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold">
            Marcar como Completada
          </button>
        </div>
      </div>
    </div>
  )
}
