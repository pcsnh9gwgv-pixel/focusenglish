// Sistema de Tracking de Progreso del Usuario

export interface UserProgress {
  userId: string;
  email?: string;
  level: string; // CEFR level
  totalMinutesStudied: number;
  lessonsCompleted: number;
  exercisesCompleted: number;
  currentStreak: number;
  longestStreak: number;
  lastStudyDate: string;
  badges: Badge[];
  weeklyGoalMinutes: number;
  achievements: Achievement[];
  stats: {
    grammar: number;
    vocabulary: number;
    speaking: number;
    listening: number;
    reading: number;
    writing: number;
  };
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt: Date;
  category: 'streak' | 'lessons' | 'time' | 'mastery' | 'special';
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  progress: number; // 0-100
  target: number;
  current: number;
  completed: boolean;
  reward?: string;
}

export interface StudySession {
  id: string;
  userId: string;
  startTime: Date;
  endTime?: Date;
  duration: number; // in minutes
  lessonId?: string;
  exercisesCompleted: number;
  score?: number;
  date: string; // YYYY-MM-DD
}

export interface WeeklyStats {
  week: string; // ISO week
  minutesStudied: number;
  lessonsCompleted: number;
  exercisesCompleted: number;
  averageScore: number;
  daysActive: number;
}

// Badges disponibles
export const AVAILABLE_BADGES: Omit<Badge, 'earnedAt'>[] = [
  {
    id: 'first-lesson',
    name: 'Primera Lección',
    description: 'Completa tu primera lección',
    icon: '🎯',
    category: 'lessons',
  },
  {
    id: 'streak-3',
    name: 'Racha de 3 Días',
    description: 'Estudia 3 días consecutivos',
    icon: '🔥',
    category: 'streak',
  },
  {
    id: 'streak-7',
    name: 'Semana Completa',
    description: 'Estudia 7 días consecutivos',
    icon: '⚡',
    category: 'streak',
  },
  {
    id: 'streak-30',
    name: 'Mes Dedicado',
    description: 'Estudia 30 días consecutivos',
    icon: '💎',
    category: 'streak',
  },
  {
    id: 'time-10h',
    name: '10 Horas de Estudio',
    description: 'Acumula 10 horas de estudio',
    icon: '⏰',
    category: 'time',
  },
  {
    id: 'time-50h',
    name: '50 Horas de Estudio',
    description: 'Acumula 50 horas de estudio',
    icon: '📚',
    category: 'time',
  },
  {
    id: 'time-100h',
    name: '100 Horas de Estudio',
    description: 'Acumula 100 horas de estudio',
    icon: '🏆',
    category: 'time',
  },
  {
    id: 'lessons-10',
    name: '10 Lecciones',
    description: 'Completa 10 lecciones',
    icon: '📖',
    category: 'lessons',
  },
  {
    id: 'lessons-50',
    name: '50 Lecciones',
    description: 'Completa 50 lecciones',
    icon: '📚',
    category: 'lessons',
  },
  {
    id: 'lessons-100',
    name: 'Centenario',
    description: 'Completa 100 lecciones',
    icon: '💯',
    category: 'lessons',
  },
  {
    id: 'perfect-week',
    name: 'Semana Perfecta',
    description: 'Alcanza tu meta semanal',
    icon: '✨',
    category: 'special',
  },
  {
    id: 'grammar-master',
    name: 'Maestro de Gramática',
    description: 'Completa 20 ejercicios de gramática',
    icon: '📝',
    category: 'mastery',
  },
  {
    id: 'vocab-master',
    name: 'Maestro de Vocabulario',
    description: 'Completa 20 ejercicios de vocabulario',
    icon: '📖',
    category: 'mastery',
  },
];

// Calcular racha de días
export function calculateStreak(studySessions: StudySession[]): {
  current: number;
  longest: number;
} {
  if (studySessions.length === 0) return { current: 0, longest: 0 };

  // Ordenar por fecha descendente
  const sortedSessions = [...studySessions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Obtener fechas únicas
  const uniqueDates = [...new Set(sortedSessions.map((s) => s.date))];

  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 0;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Calcular racha actual
  for (let i = 0; i < uniqueDates.length; i++) {
    const date = new Date(uniqueDates[i]);
    date.setHours(0, 0, 0, 0);

    const expectedDate = new Date(today);
    expectedDate.setDate(today.getDate() - i);

    if (date.getTime() === expectedDate.getTime()) {
      currentStreak++;
    } else {
      break;
    }
  }

  // Calcular racha más larga
  for (let i = 0; i < uniqueDates.length; i++) {
    if (i === 0) {
      tempStreak = 1;
      continue;
    }

    const currentDate = new Date(uniqueDates[i]);
    const previousDate = new Date(uniqueDates[i - 1]);
    const daysDiff = Math.floor(
      (previousDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (daysDiff === 1) {
      tempStreak++;
      longestStreak = Math.max(longestStreak, tempStreak);
    } else {
      tempStreak = 1;
    }
  }

  longestStreak = Math.max(longestStreak, currentStreak);

  return { current: currentStreak, longest: longestStreak };
}

// Verificar badges ganados
export function checkEarnedBadges(
  progress: UserProgress,
  existingBadges: Badge[]
): Badge[] {
  const newBadges: Badge[] = [];
  const existingBadgeIds = new Set(existingBadges.map((b) => b.id));

  AVAILABLE_BADGES.forEach((badge) => {
    if (existingBadgeIds.has(badge.id)) return;

    let earned = false;

    switch (badge.id) {
      case 'first-lesson':
        earned = progress.lessonsCompleted >= 1;
        break;
      case 'streak-3':
        earned = progress.currentStreak >= 3;
        break;
      case 'streak-7':
        earned = progress.currentStreak >= 7;
        break;
      case 'streak-30':
        earned = progress.currentStreak >= 30;
        break;
      case 'time-10h':
        earned = progress.totalMinutesStudied >= 600;
        break;
      case 'time-50h':
        earned = progress.totalMinutesStudied >= 3000;
        break;
      case 'time-100h':
        earned = progress.totalMinutesStudied >= 6000;
        break;
      case 'lessons-10':
        earned = progress.lessonsCompleted >= 10;
        break;
      case 'lessons-50':
        earned = progress.lessonsCompleted >= 50;
        break;
      case 'lessons-100':
        earned = progress.lessonsCompleted >= 100;
        break;
      case 'grammar-master':
        earned = progress.stats.grammar >= 20;
        break;
      case 'vocab-master':
        earned = progress.stats.vocabulary >= 20;
        break;
    }

    if (earned) {
      newBadges.push({
        ...badge,
        earnedAt: new Date(),
      });
    }
  });

  return newBadges;
}

// Calcular estadísticas semanales
export function calculateWeeklyStats(
  sessions: StudySession[],
  weekOffset: number = 0
): WeeklyStats {
  const now = new Date();
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() - now.getDay() - weekOffset * 7);
  weekStart.setHours(0, 0, 0, 0);

  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);
  weekEnd.setHours(23, 59, 59, 999);

  const weekSessions = sessions.filter((s) => {
    const sessionDate = new Date(s.date);
    return sessionDate >= weekStart && sessionDate <= weekEnd;
  });

  const uniqueDays = new Set(weekSessions.map((s) => s.date));
  const totalMinutes = weekSessions.reduce((sum, s) => sum + s.duration, 0);
  const totalLessons = weekSessions.filter((s) => s.lessonId).length;
  const totalExercises = weekSessions.reduce(
    (sum, s) => sum + s.exercisesCompleted,
    0
  );
  const avgScore =
    weekSessions.filter((s) => s.score).length > 0
      ? weekSessions.reduce((sum, s) => sum + (s.score || 0), 0) /
        weekSessions.filter((s) => s.score).length
      : 0;

  return {
    week: `${weekStart.toISOString().split('T')[0]} to ${weekEnd.toISOString().split('T')[0]}`,
    minutesStudied: totalMinutes,
    lessonsCompleted: totalLessons,
    exercisesCompleted: totalExercises,
    averageScore: Math.round(avgScore),
    daysActive: uniqueDays.size,
  };
}

// Niveles de progreso
export const LEVEL_THRESHOLDS = {
  A1: { min: 0, max: 100 },
  A2: { min: 100, max: 250 },
  B1: { min: 250, max: 500 },
  B2: { min: 500, max: 800 },
  C1: { min: 800, max: 1200 },
  C2: { min: 1200, max: Infinity },
};

// Calcular nivel siguiente y progreso
export function calculateLevelProgress(lessonsCompleted: number): {
  currentLevel: string;
  nextLevel: string | null;
  progress: number;
  lessonsToNextLevel: number;
} {
  let currentLevel = 'A1';
  let nextLevel: string | null = 'A2';
  let progress = 0;
  let lessonsToNextLevel = 0;

  for (const [level, threshold] of Object.entries(LEVEL_THRESHOLDS)) {
    if (
      lessonsCompleted >= threshold.min &&
      lessonsCompleted < threshold.max
    ) {
      currentLevel = level;
      const levelsArray = Object.keys(LEVEL_THRESHOLDS);
      const currentIndex = levelsArray.indexOf(level);
      nextLevel =
        currentIndex < levelsArray.length - 1
          ? levelsArray[currentIndex + 1]
          : null;

      const range = threshold.max - threshold.min;
      const completed = lessonsCompleted - threshold.min;
      progress = Math.min(100, (completed / range) * 100);
      lessonsToNextLevel = threshold.max - lessonsCompleted;
      break;
    }
  }

  return {
    currentLevel,
    nextLevel,
    progress: Math.round(progress),
    lessonsToNextLevel,
  };
}
