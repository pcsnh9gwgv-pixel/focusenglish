'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navigation } from "@/components/sections/Navigation";
import { marketingCourseData } from '@/content/courses/marketing/course-data';

export default function MarketingCoursePage() {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(1);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());

  const toggleLesson = (lessonId: string) => {
    const newCompleted = new Set(completedLessons);
    if (newCompleted.has(lessonId)) {
      newCompleted.delete(lessonId);
    } else {
      newCompleted.add(lessonId);
    }
    setCompletedLessons(newCompleted);
  };

  const progressPercentage = (completedLessons.size / marketingCourseData.totalLessons) * 100;

  const getLessonIcon = (type: string) => {
    const icons: Record<string, string> = {
      vocabulary: '📚',
      reading: '📖',
      writing: '✍️',
      speaking: '🗣️',
      strategy: '🎯',
      project: '🚀'
    };
    return icons[type] || '📝';
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-20">
        
        {/* Hero Section del Curso */}
        <section className="bg-gradient-to-r from-violet-600 to-purple-600 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-1 bg-white/20 rounded-full text-sm font-bold">
                NIVEL {marketingCourseData.level}
              </span>
              <span className="px-4 py-1 bg-white/20 rounded-full text-sm font-bold">
                {marketingCourseData.duration}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              {marketingCourseData.title}
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              {marketingCourseData.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-black mb-1">{marketingCourseData.totalLessons}</div>
                <div className="text-sm text-white/80">Lecciones</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-black mb-1">{marketingCourseData.weeks.length}</div>
                <div className="text-sm text-white/80">Semanas</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-black mb-1">{marketingCourseData.hoursPerWeek}</div>
                <div className="text-sm text-white/80">Horas/semana</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-black mb-1">B2</div>
                <div className="text-sm text-white/80">Nivel CEFR</div>
              </div>
            </div>
          </div>
        </section>

        {/* Barra de Progreso Global */}
        <section className="bg-white border-b border-slate-200 py-6 px-4 sticky top-0 z-10 shadow-sm">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-900">Tu Progreso</span>
              <span className="text-sm font-bold text-violet-600">
                {completedLessons.size} / {marketingCourseData.totalLessons} lecciones
              </span>
            </div>
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-violet-600 to-purple-600 transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {progressPercentage.toFixed(0)}% completado
            </p>
          </div>
        </section>

        {/* Contenido del Curso */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            
            {/* Recursos del Curso */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 border border-violet-200">
                <div className="text-3xl mb-3">📚</div>
                <div className="text-2xl font-black text-slate-900 mb-2">
                  {marketingCourseData.resources.vocabulary}
                </div>
                <div className="text-sm text-slate-600">Vocabulario especializado</div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
                <div className="text-3xl mb-3">📋</div>
                <div className="text-2xl font-black text-slate-900 mb-2">
                  {marketingCourseData.resources.templates}
                </div>
                <div className="text-sm text-slate-600">Plantillas descargables</div>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200">
                <div className="text-3xl mb-3">🎯</div>
                <div className="text-2xl font-black text-slate-900 mb-2">
                  {marketingCourseData.resources.realExamples}
                </div>
                <div className="text-sm text-slate-600">Ejemplos reales de campañas</div>
              </div>
            </div>

            {/* Programa Semanal */}
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-slate-900 mb-8">
                Programa del Curso
              </h2>

              {marketingCourseData.weeks.map((week) => {
                const isExpanded = expandedWeek === week.week;
                const weekLessons = week.lessons.map(l => l.id);
                const completedInWeek = weekLessons.filter(id => completedLessons.has(id)).length;
                const weekProgress = (completedInWeek / weekLessons.length) * 100;

                return (
                  <div 
                    key={week.week}
                    className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-xl"
                  >
                    {/* Header de Semana */}
                    <button
                      onClick={() => setExpandedWeek(isExpanded ? null : week.week)}
                      className="w-full px-6 py-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center text-white font-black text-xl">
                          {week.week}
                        </div>
                        <div className="text-left">
                          <h3 className="text-xl font-black text-slate-900">
                            {week.title}
                          </h3>
                          <p className="text-sm text-slate-600 mt-1">
                            {week.description}
                          </p>
                          <div className="flex items-center gap-3 mt-2">
                            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                              {week.lessons.length} lecciones
                            </span>
                            <span className="text-xs font-bold text-violet-600">
                              {completedInWeek}/{week.lessons.length} completadas
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full border-4 border-slate-200 flex items-center justify-center">
                          <svg className="w-8 h-8" viewBox="0 0 36 36">
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#e2e8f0"
                              strokeWidth="3"
                            />
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#7c3aed"
                              strokeWidth="3"
                              strokeDasharray={`${weekProgress}, 100`}
                            />
                          </svg>
                        </div>
                        <svg 
                          className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    {/* Lecciones (expandible) */}
                    {isExpanded && (
                      <div className="border-t border-slate-200 bg-slate-50">
                        <div className="p-6 space-y-4">
                          {week.lessons.map((lesson, idx) => {
                            const isCompleted = completedLessons.has(lesson.id);
                            
                            return (
                              <div 
                                key={lesson.id}
                                className="bg-white rounded-xl p-5 border-2 border-slate-200 hover:border-violet-300 transition-all cursor-pointer"
                                onClick={() => toggleLesson(lesson.id)}
                              >
                                <div className="flex items-start gap-4">
                                  {/* Checkbox */}
                                  <button
                                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                                      isCompleted 
                                        ? 'bg-violet-600 border-violet-600' 
                                        : 'border-slate-300 hover:border-violet-400'
                                    }`}
                                  >
                                    {isCompleted && (
                                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                      </svg>
                                    )}
                                  </button>

                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                      <span className="text-2xl">{getLessonIcon(lesson.type)}</span>
                                      <span className="text-xs font-bold text-violet-600 uppercase">
                                        Lección {idx + 1}
                                      </span>
                                      <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                                        {lesson.duration}
                                      </span>
                                      <span className="text-xs bg-violet-100 text-violet-700 px-2 py-1 rounded-full font-bold">
                                        {lesson.type}
                                      </span>
                                    </div>
                                    
                                    <h4 className={`text-lg font-bold mb-2 ${isCompleted ? 'text-slate-500 line-through' : 'text-slate-900'}`}>
                                      {lesson.title}
                                    </h4>

                                    {/* Topics */}
                                    <div className="mb-3">
                                      <p className="text-xs font-bold text-slate-700 mb-1">Temas:</p>
                                      <ul className="space-y-1">
                                        {lesson.topics.map((topic, i) => (
                                          <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                                            <span className="text-violet-500">•</span>
                                            {topic}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>

                                    {/* Activities */}
                                    <div className="mb-3">
                                      <p className="text-xs font-bold text-slate-700 mb-1">Actividades:</p>
                                      <div className="flex flex-wrap gap-2">
                                        {lesson.activities.map((activity, i) => (
                                          <span key={i} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                                            {activity}
                                          </span>
                                        ))}
                                      </div>
                                    </div>

                                    {/* Real World Task */}
                                    <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg p-3 border border-violet-200">
                                      <p className="text-xs font-bold text-violet-900 mb-1 flex items-center gap-1">
                                        <span>🎯</span> TAREA PRÁCTICA:
                                      </p>
                                      <p className="text-sm text-violet-800 font-semibold">
                                        {lesson.realWorldTask}
                                      </p>
                                    </div>

                                    {/* Action Button */}
                                    {lesson.id === 'w1l1' ? (
                                      <Link 
                                        href="/cursos/marketing/leccion/w1l1"
                                        className="mt-4 w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all block text-center"
                                      >
                                        {isCompleted ? '✓ Completada - Revisar' : 'Comenzar Lección →'}
                                      </Link>
                                    ) : (
                                      <button 
                                        disabled
                                        className="mt-4 w-full bg-gradient-to-r from-gray-400 to-gray-500 text-white py-3 rounded-lg font-bold cursor-not-allowed opacity-60"
                                      >
                                        🔒 Próximamente
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Evaluación Section */}
            <div className="mt-16 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-black mb-6">Evaluación del Curso</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-bold text-xl mb-3">Quizzes Semanales</h3>
                  <p className="text-white/80">Evaluaciones cortas al final de cada semana para reforzar lo aprendido</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-bold text-xl mb-3">Proyecto de Medio Término</h3>
                  <p className="text-white/80">Semana 6: Presentación de mini-campaña de marketing</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-bold text-xl mb-3">Proyecto Final</h3>
                  <p className="text-white/80">Semana 12: Campaña completa de marketing con presentación profesional</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-bold text-xl mb-3">Nota Mínima</h3>
                  <p className="text-white/80 text-2xl font-black">70%</p>
                  <p className="text-white/60 text-sm">Para obtener el certificado</p>
                </div>
              </div>
            </div>

            {/* CTA Final */}
            <div className="mt-16 text-center">
              <button className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-12 py-5 rounded-xl font-black text-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                Inscribirme Ahora
              </button>
              <p className="text-sm text-slate-500 mt-4">
                Comienza hoy y completa el curso a tu ritmo
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
