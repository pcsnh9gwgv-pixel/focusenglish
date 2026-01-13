import Link from "next/link";
import { certificationCourses } from "@/content/courses/certifications/course-data";
import { notFound } from "next/navigation";

type Params = {
  level: string;
};

export default function CertificationDetailPage({ params }: { params: Params }) {
  const { level } = params;
  const course = certificationCourses[level];

  if (!course) {
    notFound();
  }

  const totalHours = course.weeks.length * parseFloat(course.hoursPerWeek.split('-')[0]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className={`relative overflow-hidden bg-gradient-to-r ${course.gradient}`}>
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Link
            href="/certificaciones"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 text-sm font-bold"
          >
            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a certificaciones
          </Link>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-black text-white mb-4">
                Nivel {course.level} - {course.level === 'A2' ? 'Elementary' : course.level === 'B1' ? 'Intermediate' : course.level === 'B2' ? 'Upper-Intermediate' : course.level === 'C1' ? 'Advanced' : 'Proficiency'}
              </div>
              <h1 className="text-4xl font-black text-white sm:text-5xl mb-4">
                {course.title}
              </h1>
              <p className="text-xl text-white/90 mb-8">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3">
                  <div className="text-2xl font-black text-white">{course.duration}</div>
                  <div className="text-sm text-white/80">Duración total</div>
                </div>
                <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3">
                  <div className="text-2xl font-black text-white">{course.totalLessons}</div>
                  <div className="text-sm text-white/80">Lecciones</div>
                </div>
                <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3">
                  <div className="text-2xl font-black text-white">{course.hoursPerWeek}</div>
                  <div className="text-sm text-white/80">Horas/semana</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-black text-violet-600 shadow-xl hover:bg-blue-50 transition-all"
                >
                  Inscribirse - {course.price}
                </Link>
                <Link
                  href="/diagnostico"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-base font-black text-white hover:bg-white/10 transition-all"
                >
                  Test de nivel gratis
                </Link>
              </div>
            </div>

            {/* Exam Format Card */}
            <div className="rounded-3xl bg-white/95 backdrop-blur-sm p-8 shadow-2xl">
              <h3 className="text-2xl font-black text-gray-900 mb-6">Formato del Examen</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Listening</div>
                    <div className="text-sm text-gray-600">{course.examFormat.listening}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green-100">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Reading</div>
                    <div className="text-sm text-gray-600">{course.examFormat.reading}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-100">
                    <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Writing</div>
                    <div className="text-sm text-gray-600">{course.examFormat.writing}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-orange-100">
                    <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Speaking</div>
                    <div className="text-sm text-gray-600">{course.examFormat.speaking}</div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-bold text-gray-900">Puntuación para aprobar</span>
                  </div>
                  <p className="text-sm text-gray-700">{course.passingScore}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            Programa del Curso - {course.weeks.length} Semanas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Curriculum completo diseñado específicamente para prepararte para el examen de certificación nivel {course.level}
          </p>
        </div>

        {/* Week by Week Curriculum */}
        <div className="space-y-8">
          {course.weeks.map((week) => (
            <div key={week.week} className="rounded-3xl border-2 border-gray-200 bg-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              {/* Week Header */}
              <div className={`bg-gradient-to-r ${course.gradient} px-8 py-6`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-black text-white/80 mb-1">SEMANA {week.week}</div>
                    <h3 className="text-2xl font-black text-white">{week.title}</h3>
                    <p className="text-white/90 mt-2">{week.description}</p>
                  </div>
                  <div className="hidden sm:block rounded-full bg-white/20 backdrop-blur-sm px-6 py-3">
                    <div className="text-2xl font-black text-white">{week.lessons.length}</div>
                    <div className="text-xs text-white/80">lecciones</div>
                  </div>
                </div>

                {/* Exam Skills Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {week.examSkills.map((skill, idx) => (
                    <span key={idx} className="rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Lessons */}
              <div className="divide-y divide-gray-100">
                {week.lessons.map((lesson, idx) => (
                  <div key={lesson.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex gap-6">
                      {/* Lesson Number */}
                      <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${course.gradient} text-white font-black text-lg`}>
                        {idx + 1}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-1">{lesson.title}</h4>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {lesson.duration}
                              </span>
                              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                                {lesson.type}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Exam Focus */}
                        <div className="mb-3 rounded-lg bg-amber-50 border border-amber-200 p-3">
                          <div className="flex items-start gap-2">
                            <svg className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <div>
                              <div className="text-xs font-bold text-amber-900 mb-1">Enfoque del Examen</div>
                              <div className="text-sm text-amber-800">{lesson.examFocus}</div>
                            </div>
                          </div>
                        </div>

                        {/* Topics */}
                        <div className="mb-3">
                          <div className="text-xs font-bold text-gray-700 mb-2">Temas:</div>
                          <div className="flex flex-wrap gap-2">
                            {lesson.topics.map((topic, topicIdx) => (
                              <span key={topicIdx} className="rounded-lg bg-gray-100 px-3 py-1 text-xs text-gray-700">
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Activities */}
                        <div>
                          <div className="text-xs font-bold text-gray-700 mb-2">Actividades:</div>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {lesson.activities.map((activity, actIdx) => (
                              <li key={actIdx} className="flex items-start gap-2 text-sm text-gray-600">
                                <svg className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className={`bg-gradient-to-r ${course.gradient} py-16`}>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-4">
            ¿Listo para certificarte?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Únete a los más de 2000 estudiantes que ya han conseguido su certificación con nosotros
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-black text-violet-600 shadow-xl hover:bg-blue-50 transition-all"
            >
              Inscribirme ahora - {course.price}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-base font-black text-white hover:bg-white/10 transition-all"
            >
              Hablar con un asesor
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return [
    { level: 'a2' },
    { level: 'b1' },
    { level: 'b2' },
    { level: 'c1' },
    { level: 'c2' },
  ];
}
