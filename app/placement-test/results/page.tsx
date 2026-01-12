'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { levelDescriptions, type TestResult } from '@/lib/placement-test';
import { savePlacementTest } from '@/lib/supabase';
import { Button } from '@/components/button';
import { Card } from '@/components/card';

export default function PlacementTestResultsPage() {
  const router = useRouter();
  const [result, setResult] = useState<TestResult | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const savedResult = localStorage.getItem('placementTestResult');
    if (savedResult) {
      setResult(JSON.parse(savedResult));
    } else {
      router.push('/placement-test');
    }
  }, [router]);

  const handleStartProgram = async () => {
    if (!result) return;

    setSaving(true);

    try {
      // Intentar guardar en Supabase
      try {
        await savePlacementTest({
          level: result.level,
          score: result.score,
          total_questions: result.totalQuestions,
          correct_answers: result.correctAnswers,
          grammar_score: result.breakdown.grammar,
          vocabulary_score: result.breakdown.vocabulary,
          reading_score: result.breakdown.reading,
        });
      } catch (supabaseError) {
        console.warn('No se pudo guardar en Supabase (probablemente no configurado):', supabaseError);
      }
      
      // Guardar en localStorage como respaldo
      localStorage.setItem('userLevel', result.level);
      localStorage.setItem('placementTestCompleted', 'true');
      
      // Redirigir al programa recomendado
      router.push(`/cursos?level=${result.level}`);
    } catch (error) {
      console.error('Error saving test result:', error);
      alert('Hubo un error al guardar tus resultados. Por favor intenta nuevamente.');
    } finally {
      setSaving(false);
    }
  };

  const handleRetakeTest = () => {
    localStorage.removeItem('placementTestResult');
    router.push('/placement-test');
  };

  if (!result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Calculando resultados...</p>
        </Card>
      </div>
    );
  }

  const levelInfo = levelDescriptions[result.level];
  
  // Determinar color según nivel
  const getLevelColor = (level: string) => {
    if (level.startsWith('A')) return 'green';
    if (level.startsWith('B')) return 'blue';
    return 'purple';
  };

  const colorScheme = getLevelColor(result.level);
  const colorClasses = {
    green: {
      bg: 'bg-green-50',
      border: 'border-green-500',
      text: 'text-green-900',
      badge: 'bg-green-100 text-green-700',
      button: 'bg-green-600 hover:bg-green-700',
    },
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-500',
      text: 'text-blue-900',
      badge: 'bg-blue-100 text-blue-700',
      button: 'bg-blue-600 hover:bg-blue-700',
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-500',
      text: 'text-purple-900',
      badge: 'bg-purple-100 text-purple-700',
      button: 'bg-purple-600 hover:bg-purple-700',
    },
  };

  const colors = colorClasses[colorScheme];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Celebration Header */}
        <div className="text-center mb-8">
          <div className="inline-block animate-bounce mb-4">
            <div className="text-6xl">🎉</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¡Test Completado!
          </h1>
          <p className="text-xl text-gray-600">
            Aquí están tus resultados oficiales
          </p>
        </div>

        {/* Main Result Card */}
        <Card className={`p-8 md:p-12 mb-6 ${colors.bg} border-4 ${colors.border}`}>
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <div className={`text-6xl md:text-8xl font-black ${colors.text}`}>
                {result.level}
              </div>
              <div className="h-2 bg-gradient-to-r from-transparent via-current to-transparent opacity-30 mt-2" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {levelInfo.title}
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              {levelInfo.description}
            </p>

            {/* Score Display */}
            <div className="flex justify-center gap-8 mb-6">
              <div>
                <div className="text-4xl font-bold text-gray-900">{result.score}%</div>
                <div className="text-sm text-gray-600">Puntuación</div>
              </div>
              <div className="border-l-2 border-gray-300" />
              <div>
                <div className="text-4xl font-bold text-gray-900">
                  {result.correctAnswers}/{result.totalQuestions}
                </div>
                <div className="text-sm text-gray-600">Correctas</div>
              </div>
            </div>
          </div>

          {/* What You Can Do */}
          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Con tu nivel {result.level} puedes:
            </h3>
            <ul className="space-y-3">
              {levelInfo.canDo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recommendation */}
          <div className={`${colors.badge} rounded-lg p-6 border-2 ${colors.border}`}>
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              Recomendación Personalizada
            </h3>
            <p className="text-gray-800">
              {levelInfo.recommendation}
            </p>
          </div>
        </Card>

        {/* Breakdown Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="p-6 text-center">
            <div className="text-3xl mb-2">📚</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {result.breakdown.grammar}
            </div>
            <div className="text-sm text-gray-600">Gramática correcta</div>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-3xl mb-2">📖</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {result.breakdown.vocabulary}
            </div>
            <div className="text-sm text-gray-600">Vocabulario correcto</div>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-3xl mb-2">📄</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {result.breakdown.reading}
            </div>
            <div className="text-sm text-gray-600">Comprensión correcta</div>
          </Card>
        </div>

        {/* CEFR Reference */}
        <Card className="p-6 mb-6 bg-gray-50">
          <h3 className="font-semibold text-gray-900 mb-4 text-center">
            Marco Común Europeo de Referencia (CEFR)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
            {(['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const).map((level) => (
              <div
                key={level}
                className={`p-3 rounded-lg text-center font-semibold transition-all ${
                  level === result.level
                    ? `${colors.badge} border-2 ${colors.border} scale-110`
                    : 'bg-white border border-gray-200 text-gray-600'
                }`}
              >
                {level}
              </div>
            ))}
          </div>
          <div className="mt-4 text-xs text-gray-600 text-center">
            A1-A2: Básico | B1-B2: Independiente | C1-C2: Competente
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={handleStartProgram}
            disabled={saving}
            className={`flex-1 ${colors.button} text-white text-lg py-4`}
          >
            {saving ? (
              <span className="flex items-center justify-center gap-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                Guardando...
              </span>
            ) : (
              `Comenzar Programa ${result.level}`
            )}
          </Button>
          
          <Button
            onClick={handleRetakeTest}
            variant="secondary"
            className="flex-1 text-lg py-4"
          >
            Repetir Test
          </Button>
          
          <Button
            onClick={() => router.push('/')}
            variant="secondary"
            className="sm:w-auto px-8 text-lg py-4"
          >
            Inicio
          </Button>
        </div>

        {/* Share Section */}
        <Card className="p-6 mt-6 text-center bg-gradient-to-r from-blue-50 to-purple-50">
          <p className="text-sm text-gray-700 mb-3">
            🎓 <strong>¡Comparte tu logro!</strong>
          </p>
          <p className="text-xs text-gray-600">
            Has completado el test de nivel y obtuviste <strong>{result.level}</strong>
          </p>
        </Card>
      </div>
    </div>
  );
}
