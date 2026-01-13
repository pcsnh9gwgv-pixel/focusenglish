'use client';

import { useState } from 'react';
import Link from 'next/link';
import lesson1Data from '@/content/courses/marketing/lessons/week-1/lesson-1-digital-marketing-vocabulary';

export default function Lesson1Page() {
  const [activeTab, setActiveTab] = useState<'overview' | 'vocabulary' | 'exercises' | 'task'>('overview');
  const [completedExercises, setCompletedExercises] = useState<Set<number>>(new Set());
  const [showDefinition, setShowDefinition] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Categorías de vocabulario
  const categories = ['all', 'metrics', 'strategy', 'technical', 'advertising', 'social media', 'copywriting', 'channels'];

  // Filtrar vocabulario por categoría
  const filteredVocabulary = selectedCategory === 'all' 
    ? lesson1Data.vocabulary 
    : lesson1Data.vocabulary.filter(term => term.context === selectedCategory);

  const toggleDefinition = (index: number) => {
    const newSet = new Set(showDefinition);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setShowDefinition(newSet);
  };

  const toggleExerciseComplete = (index: number) => {
    const newSet = new Set(completedExercises);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setCompletedExercises(newSet);
  };

  const progressPercentage = (completedExercises.size / lesson1Data.exercises.length) * 100;

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
          
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-block px-3 py-1 bg-purple-500 text-xs font-semibold rounded-full">
                  SEMANA 1 • LECCIÓN 1
                </span>
                <span className="inline-block px-3 py-1 bg-purple-700 text-xs font-semibold rounded-full">
                  {lesson1Data.duration}
                </span>
                <span className="inline-block px-3 py-1 bg-purple-700 text-xs font-semibold rounded-full">
                  📚 Vocabulario
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-2">{lesson1Data.title}</h1>
              <p className="text-xl text-purple-100">{lesson1Data.subtitle}</p>
            </div>
          </div>

          {/* Learning Objectives */}
          <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <span className="mr-2">🎯</span>
              Objetivos de Aprendizaje
            </h3>
            <ul className="grid md:grid-cols-2 gap-3">
              {lesson1Data.learningObjectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span className="text-purple-50">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8" aria-label="Tabs">
            {[
              { id: 'overview', label: 'Introducción', icon: '📖' },
              { id: 'vocabulary', label: 'Vocabulario', icon: '📚' },
              { id: 'exercises', label: 'Ejercicios', icon: '✍️' },
              { id: 'task', label: 'Tarea Real', icon: '🎯' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Your First Lesson!</h2>
              <div className="prose max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                {lesson1Data.introduction.text}
              </div>
              <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-600 rounded">
                <p className="text-purple-900 font-medium">
                  💭 {lesson1Data.introduction.preLessonQuestion}
                </p>
              </div>
            </div>

            {/* Study Tips */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">💡</span>
                Study Tips
              </h3>
              <ul className="space-y-3">
                {lesson1Data.studyTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">▸</span>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Resources */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-2">📚</span>
                Additional Resources
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {lesson1Data.additionalResources.map((resource, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-purple-400 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-2xl">
                        {resource.type === 'video' && '🎥'}
                        {resource.type === 'article' && '📄'}
                        {resource.type === 'infographic' && '📊'}
                        {resource.type === 'audio' && '🎧'}
                        {resource.type === 'template' && '📝'}
                      </span>
                      {resource.duration && (
                        <span className="text-xs text-gray-500">{resource.duration}</span>
                      )}
                      {resource.readingTime && (
                        <span className="text-xs text-gray-500">{resource.readingTime}</span>
                      )}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{resource.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                    {'downloadable' in resource && resource.downloadable && (
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                        Descargable
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Vocabulary Tab */}
        {activeTab === 'vocabulary' && (
          <div className="space-y-6">
            {/* Category Filter */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Filtrar por categoría:</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category === 'all' ? 'Todos' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-sm text-gray-600">
                Mostrando {filteredVocabulary.length} de {lesson1Data.vocabulary.length} términos
              </p>
            </div>

            {/* Vocabulary Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredVocabulary.map((term, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => toggleDefinition(index)}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-purple-700">
                          {term.term}
                        </h3>
                        {'fullForm' in term && term.fullForm && (
                          <p className="text-sm text-gray-600 mt-1">{term.fullForm}</p>
                        )}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        term.difficulty === 'essential' ? 'bg-red-100 text-red-700' :
                        term.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {term.difficulty}
                      </span>
                    </div>

                    <div className="mb-3">
                      <span className="text-sm text-gray-500">Pronunciación:</span>
                      <p className="text-lg text-purple-600 font-mono">{term.pronunciation}</p>
                    </div>

                    {showDefinition.has(index) && (
                      <div className="space-y-4 animate-fadeIn">
                        <div>
                          <span className="text-sm font-semibold text-gray-700">Definition:</span>
                          <p className="text-gray-900 mt-1">{term.definition}</p>
                        </div>

                        <div>
                          <span className="text-sm font-semibold text-gray-700">Traducción:</span>
                          <p className="text-gray-700 mt-1">{term.spanishTranslation}</p>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-lg">
                          <span className="text-sm font-semibold text-purple-900">Example:</span>
                          <p className="text-purple-800 italic mt-1">"{term.exampleSentence}"</p>
                        </div>

                        {'formula' in term && term.formula && (
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <span className="text-sm font-semibold text-blue-900">Formula:</span>
                            <p className="text-blue-800 font-mono mt-1">{term.formula}</p>
                          </div>
                        )}

                        {'stages' in term && term.stages && (
                          <div className="bg-green-50 p-4 rounded-lg">
                            <span className="text-sm font-semibold text-green-900">Stages:</span>
                            <p className="text-green-800 mt-1">{term.stages.join(' → ')}</p>
                          </div>
                        )}

                        {'examples' in term && term.examples && (
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <span className="text-sm font-semibold text-orange-900">Common Examples:</span>
                            <ul className="mt-1 space-y-1">
                              {term.examples.map((ex, i) => (
                                <li key={i} className="text-orange-800">• {ex}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {term.relatedTerms && (
                          <div>
                            <span className="text-sm font-semibold text-gray-700">Related terms:</span>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {term.relatedTerms.map((related, i) => (
                                <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                  {related}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    <button className="mt-4 text-purple-600 text-sm font-medium hover:text-purple-800 transition-colors">
                      {showDefinition.has(index) ? '▲ Ocultar detalles' : '▼ Ver detalles completos'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Exercises Tab */}
        {activeTab === 'exercises' && (
          <div className="space-y-6">
            {/* Progress Bar */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Tu progreso en ejercicios</h3>
                <span className="text-sm font-medium text-purple-600">
                  {completedExercises.size} de {lesson1Data.exercises.length} completados
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-purple-500 to-purple-700 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {progressPercentage === 100 ? '🎉 ¡Todos los ejercicios completados!' : 'Marca cada ejercicio al completarlo'}
              </p>
            </div>

            {/* Exercise Cards */}
            <div className="grid gap-6">
              {lesson1Data.exercises.map((exercise, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-md overflow-hidden transition-all ${
                    completedExercises.has(index) ? 'border-2 border-green-400' : 'border-2 border-transparent'
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-3xl">
                            {exercise.type === 'flashcards' && '🃏'}
                            {exercise.type === 'matching' && '🔗'}
                            {exercise.type === 'pronunciation' && '🎤'}
                            {exercise.type === 'fill-in-the-blank' && '✏️'}
                            {exercise.type === 'categorization' && '📂'}
                            {exercise.type === 'quiz' && '📝'}
                          </span>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{exercise.title}</h3>
                            <p className="text-sm text-gray-600">{exercise.description}</p>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleExerciseComplete(index)}
                        className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
                          completedExercises.has(index)
                            ? 'bg-green-500 border-green-500 text-white'
                            : 'border-gray-300 hover:border-purple-400'
                        }`}
                      >
                        {completedExercises.has(index) && '✓'}
                      </button>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {exercise.duration}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        exercise.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                        exercise.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {exercise.difficulty}
                      </span>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Instrucciones:</span> {exercise.instructions}
                      </p>
                    </div>

                    {/* Exercise-specific content preview */}
                    {exercise.type === 'quiz' && 'passingScore' in exercise && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                        <p className="text-sm text-blue-900">
                          <span className="font-semibold">📊 Nota mínima:</span> {exercise.passingScore}%
                        </p>
                        <p className="text-sm text-blue-800 mt-1">
                          {'questions' in exercise && `${exercise.questions.length} preguntas de opción múltiple`}
                        </p>
                      </div>
                    )}

                    <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition-all shadow-md hover:shadow-lg">
                      {completedExercises.has(index) ? 'Revisar Ejercicio' : 'Comenzar Ejercicio'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Real World Task Tab */}
        {activeTab === 'task' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-xl shadow-lg p-8">
              <div className="flex items-start gap-4">
                <span className="text-5xl">🎯</span>
                <div>
                  <h2 className="text-3xl font-bold mb-2">{lesson1Data.realWorldTask.title}</h2>
                  <p className="text-xl text-purple-100">{lesson1Data.realWorldTask.description}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-700">{lesson1Data.realWorldTask.estimatedTime}</div>
                  <div className="text-sm text-gray-600">Tiempo estimado</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-700">{lesson1Data.realWorldTask.difficulty}</div>
                  <div className="text-sm text-gray-600">Dificultad</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-700">Professional</div>
                  <div className="text-sm text-gray-600">Contexto</div>
                </div>
              </div>

              <div className="prose max-w-none">
                <div className="bg-gray-50 rounded-lg p-6 mb-6 whitespace-pre-line">
                  {lesson1Data.realWorldTask.instructions}
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-bold text-green-900 mb-3">🎓 Learning Outcome</h3>
                  <p className="text-green-800">{lesson1Data.realWorldTask.learningOutcome}</p>
                </div>

                {/* Rubric */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">📋 Criterios de Evaluación</h3>
                  <div className="space-y-3">
                    {Object.entries(lesson1Data.realWorldTask.rubric).map(([criterion, description], index) => (
                      <div key={index} className="flex items-start">
                        <span className="font-semibold text-blue-900 mr-2">{criterion}:</span>
                        <span className="text-blue-800">{description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Submission Area */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Tu respuesta:</h3>
                <textarea
                  className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Escribe tu email aquí... (mínimo 200 palabras)&#10;&#10;Subject: &#10;&#10;Hi Team,&#10;&#10;[Tu análisis aquí...]&#10;&#10;Best regards,&#10;[Tu nombre]"
                />
                <div className="flex items-center justify-between mt-4">
                  <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Guardar Borrador
                  </button>
                  <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition-all shadow-md hover:shadow-lg">
                    Enviar para Revisión
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Next Steps Card */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-4">🚀 Próximos Pasos</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">Siguiente Lección:</h4>
              <p className="text-purple-100 mb-2">{lesson1Data.nextSteps.nextLesson.title}</p>
              <p className="text-sm text-purple-200">{lesson1Data.nextSteps.nextLesson.description}</p>
              <p className="text-xs text-purple-300 mt-2">
                🔒 {lesson1Data.nextSteps.nextLesson.unlockCondition}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Práctica Recomendada:</h4>
              <ul className="space-y-2">
                {lesson1Data.nextSteps.recommendedPractice.map((item, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <span className="text-yellow-300 mr-2">★</span>
                    <span className="text-purple-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
            <p className="text-sm">
              <span className="font-semibold">💬 Desafío Comunitario:</span> {lesson1Data.nextSteps.communityChallenge}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
