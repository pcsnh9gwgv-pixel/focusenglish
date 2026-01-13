'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/card';
import { Button } from '@/components/button';
import {
  type UserProgress,
  type StudySession,
  calculateStreak,
  checkEarnedBadges,
  calculateWeeklyStats,
  calculateLevelProgress,
  AVAILABLE_BADGES,
} from '@/lib/user-progress';

export default function DashboardPage() {
  const router = useRouter();
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUserProgress();
  }, []);

  const loadUserProgress = () => {
    // Por ahora cargamos datos de ejemplo (después conectaremos con Supabase)
    const mockSessions: StudySession[] = [];
    const today = new Date();
    
    // Generar sesiones de estudio de ejemplo
    for (let i = 0; i < 15; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      mockSessions.push({
        id: `session-${i}`,
        userId: 'user-1',
        startTime: date,
        duration: Math.floor(Math.random() * 45) + 15,
        exercisesCompleted: Math.floor(Math.random() * 5) + 3,
        score: Math.floor(Math.random() * 30) + 70,
        date: date.toISOString().split('T')[0],
      });
    }

    const streak = calculateStreak(mockSessions);
    const totalMinutes = mockSessions.reduce((sum, s) => sum + s.duration, 0);
    const lessonsCompleted = 24;

    const mockProgress: UserProgress = {
      userId: 'user-1',
      email: 'user@example.com',
      level: 'B1',
      totalMinutesStudied: totalMinutes,
      lessonsCompleted: lessonsCompleted,
      exercisesCompleted: mockSessions.reduce((sum, s) => sum + s.exercisesCompleted, 0),
      currentStreak: streak.current,
      longestStreak: streak.longest,
      lastStudyDate: today.toISOString().split('T')[0],
      badges: [],
      weeklyGoalMinutes: 180, // 3 horas por semana
      achievements: [],
      stats: {
        grammar: 15,
        vocabulary: 12,
        speaking: 8,
        listening: 10,
        reading: 14,
        writing: 6,
      },
    };

    // Verificar badges ganados
    const earnedBadges = checkEarnedBadges(mockProgress, []);
    mockProgress.badges = earnedBadges;

    setProgress(mockProgress);
    setLoading(false);
  };

  if (loading || !progress) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando tu progreso...</p>
        </Card>
      </div>
    );
  }

  const weeklyStats = calculateWeeklyStats([]);
  const levelProgress = calculateLevelProgress(progress.lessonsCompleted);
  const weeklyProgress = (weeklyStats.minutesStudied / progress.weeklyGoalMinutes) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Mi Progreso
              </h1>
              <p className="text-gray-600 mt-1">
                ¡Sigue así! Estás en nivel <span className="font-semibold text-blue-600">{progress.level}</span>
              </p>
            </div>
            <Button onClick={() => router.push('/cursos')} className="hidden md:block">
              Continuar Estudiando
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Streak */}
          <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">🔥</div>
              <div className="text-right">
                <div className="text-3xl font-bold text-orange-600">
                  {progress.currentStreak}
                </div>
                <div className="text-sm text-gray-600">días de racha</div>
              </div>
            </div>
            <div className="text-xs text-gray-600">
              Récord: {progress.longestStreak} días
            </div>
          </Card>

          {/* Total Time */}
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">⏰</div>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-600">
                  {Math.floor(progress.totalMinutesStudied / 60)}h
                </div>
                <div className="text-sm text-gray-600">tiempo total</div>
              </div>
            </div>
            <div className="text-xs text-gray-600">
              {progress.totalMinutesStudied % 60} minutos adicionales
            </div>
          </Card>

          {/* Lessons Completed */}
          <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">📚</div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-600">
                  {progress.lessonsCompleted}
                </div>
                <div className="text-sm text-gray-600">lecciones</div>
              </div>
            </div>
            <div className="text-xs text-gray-600">
              {levelProgress.lessonsToNextLevel} para nivel {levelProgress.nextLevel}
            </div>
          </Card>

          {/* Exercises */}
          <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">✍️</div>
              <div className="text-right">
                <div className="text-3xl font-bold text-purple-600">
                  {progress.exercisesCompleted}
                </div>
                <div className="text-sm text-gray-600">ejercicios</div>
              </div>
            </div>
            <div className="text-xs text-gray-600">
              Completados con éxito
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Level Progress */}
          <Card className="lg:col-span-2 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>📈</span>
              Progreso de Nivel
            </h3>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Nivel Actual: <span className="text-blue-600 text-lg font-bold">{levelProgress.currentLevel}</span>
                </span>
                {levelProgress.nextLevel && (
                  <span className="text-sm text-gray-600">
                    Próximo: <span className="font-medium">{levelProgress.nextLevel}</span>
                  </span>
                )}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${levelProgress.progress}%` }}
                />
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-600">{levelProgress.progress}% completado</span>
                <span className="text-xs text-gray-600">
                  {levelProgress.lessonsToNextLevel} lecciones restantes
                </span>
              </div>
            </div>

            {/* Skills Breakdown */}
            <div className="space-y-3">
              {Object.entries(progress.stats).map(([skill, value]) => {
                const maxValue = 20;
                const percentage = (value / maxValue) * 100;
                const skillIcons: Record<string, string> = {
                  grammar: '📝',
                  vocabulary: '📖',
                  speaking: '🗣️',
                  listening: '👂',
                  reading: '📄',
                  writing: '✍️',
                };
                
                return (
                  <div key={skill}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700 capitalize flex items-center gap-2">
                        <span>{skillIcons[skill]}</span>
                        {skill === 'grammar' && 'Gramática'}
                        {skill === 'vocabulary' && 'Vocabulario'}
                        {skill === 'speaking' && 'Speaking'}
                        {skill === 'listening' && 'Listening'}
                        {skill === 'reading' && 'Reading'}
                        {skill === 'writing' && 'Writing'}
                      </span>
                      <span className="text-sm text-gray-600">{value}/{maxValue}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-full rounded-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Weekly Goal */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>🎯</span>
              Meta Semanal
            </h3>

            <div className="text-center mb-6">
              <div className="relative inline-flex items-center justify-center">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-gray-200"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - Math.min(weeklyProgress, 100) / 100)}`}
                    className="text-green-500 transition-all duration-500"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-gray-900">
                    {Math.round(Math.min(weeklyProgress, 100))}%
                  </span>
                  <span className="text-xs text-gray-600">completado</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Estudiado:</span>
                <span className="font-medium">{weeklyStats.minutesStudied} min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Meta:</span>
                <span className="font-medium">{progress.weeklyGoalMinutes} min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Restante:</span>
                <span className="font-medium text-blue-600">
                  {Math.max(0, progress.weeklyGoalMinutes - weeklyStats.minutesStudied)} min
                </span>
              </div>
            </div>

            {weeklyProgress >= 100 && (
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-center">
                <p className="text-sm font-semibold text-green-800">
                  🎉 ¡Meta cumplida!
                </p>
              </div>
            )}
          </Card>
        </div>

        {/* Badges Section */}
        <Card className="p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🏆</span>
            Logros Desbloqueados ({progress.badges.length}/{AVAILABLE_BADGES.length})
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {AVAILABLE_BADGES.map((badge) => {
              const earned = progress.badges.some((b) => b.id === badge.id);
              return (
                <div
                  key={badge.id}
                  className={`p-4 rounded-lg text-center transition-all ${
                    earned
                      ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 shadow-md'
                      : 'bg-gray-100 border-2 border-gray-200 opacity-50 grayscale'
                  }`}
                >
                  <div className="text-4xl mb-2">{badge.icon}</div>
                  <div className="text-xs font-semibold text-gray-800 mb-1">
                    {badge.name}
                  </div>
                  <div className="text-xs text-gray-600">
                    {badge.description}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => router.push('/cursos')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4"
          >
            Continuar Estudiando
          </Button>
          <Button
            onClick={() => router.push('/placement-test')}
            variant="secondary"
            className="px-8 py-4"
          >
            Hacer Test de Nivel
          </Button>
        </div>
      </div>
    </div>
  );
}
