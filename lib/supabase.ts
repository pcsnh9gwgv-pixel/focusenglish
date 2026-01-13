import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Solo crear el cliente si las variables de entorno están configuradas
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Types para la base de datos
export interface PlacementTestRecord {
  id?: string;
  user_id?: string;
  email?: string;
  level: string;
  score: number;
  total_questions: number;
  correct_answers: number;
  grammar_score: number;
  vocabulary_score: number;
  reading_score: number;
  created_at?: string;
}

// Guardar resultado del placement test
export async function savePlacementTest(data: PlacementTestRecord) {
  if (!supabase) {
    throw new Error('Supabase not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY');
  }

  const { data: result, error } = await supabase
    .from('placement_tests')
    .insert([
      {
        email: data.email,
        level: data.level,
        score: data.score,
        total_questions: data.total_questions,
        correct_answers: data.correct_answers,
        grammar_score: data.grammar_score,
        vocabulary_score: data.vocabulary_score,
        reading_score: data.reading_score,
        created_at: new Date().toISOString(),
      },
    ])
    .select();

  if (error) {
    console.error('Error saving placement test:', error);
    throw error;
  }

  return result;
}

// Obtener último resultado del usuario
export async function getUserLastPlacementTest(email: string) {
  if (!supabase) {
    throw new Error('Supabase not configured');
  }

  const { data, error } = await supabase
    .from('placement_tests')
    .select('*')
    .eq('email', email)
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  if (error && error.code !== 'PGRST116') {
    // PGRST116 = no rows returned
    console.error('Error fetching placement test:', error);
    throw error;
  }

  return data;
}

// Obtener todos los resultados del usuario
export async function getUserPlacementTests(email: string) {
  if (!supabase) {
    throw new Error('Supabase not configured');
  }

  const { data, error } = await supabase
    .from('placement_tests')
    .select('*')
    .eq('email', email)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching placement tests:', error);
    throw error;
  }

  return data;
}

// Estadísticas generales
export async function getPlacementTestStats() {
  if (!supabase) {
    throw new Error('Supabase not configured');
  }

  const { data, error } = await supabase
    .from('placement_tests')
    .select('level');

  if (error) {
    console.error('Error fetching stats:', error);
    throw error;
  }

  // Calcular distribución de niveles
  const distribution: Record<string, number> = {};
  data?.forEach((record) => {
    distribution[record.level] = (distribution[record.level] || 0) + 1;
  });

  return {
    totalTests: data?.length || 0,
    levelDistribution: distribution,
  };
}

// ============ User Progress Functions ============

import type { UserProgress, StudySession, Badge } from './user-progress';

export interface UserProgressRecord {
  id?: string;
  user_id?: string;
  email?: string;
  level: string;
  total_minutes_studied: number;
  lessons_completed: number;
  exercises_completed: number;
  current_streak: number;
  longest_streak: number;
  last_study_date: string;
  weekly_goal_minutes: number;
  grammar_score: number;
  vocabulary_score: number;
  speaking_score: number;
  listening_score: number;
  reading_score: number;
  writing_score: number;
  updated_at?: string;
}

export interface StudySessionRecord {
  id?: string;
  user_id?: string;
  email?: string;
  start_time: string;
  end_time?: string;
  duration: number;
  lesson_id?: string;
  exercises_completed: number;
  score?: number;
  date: string;
  created_at?: string;
}

export interface BadgeRecord {
  id?: string;
  user_id?: string;
  email?: string;
  badge_id: string;
  badge_name: string;
  badge_description: string;
  badge_icon: string;
  badge_category: string;
  earned_at: string;
}

// Guardar o actualizar progreso del usuario
export async function saveUserProgress(data: UserProgress) {
  if (!supabase) {
    throw new Error('Supabase not configured');
  }

  const record: UserProgressRecord = {
    email: data.email,
    level: data.level,
    total_minutes_studied: data.totalMinutesStudied,
    lessons_completed: data.lessonsCompleted,
    exercises_completed: data.exercisesCompleted,
    current_streak: data.currentStreak,
    longest_streak: data.longestStreak,
    last_study_date: data.lastStudyDate,
    weekly_goal_minutes: data.weeklyGoalMinutes,
    grammar_score: data.stats.grammar,
    vocabulary_score: data.stats.vocabulary,
    speaking_score: data.stats.speaking,
    listening_score: data.stats.listening,
    reading_score: data.stats.reading,
    writing_score: data.stats.writing,
    updated_at: new Date().toISOString(),
  };

  const { data: result, error } = await supabase
    .from('user_progress')
    .upsert([record], { onConflict: 'email' })
    .select();

  if (error) {
    console.error('Error saving user progress:', error);
    throw error;
  }

  return result;
}

// Obtener progreso del usuario
export async function getUserProgress(email: string): Promise<UserProgress | null> {
  if (!supabase) {
    throw new Error('Supabase not configured');
  }

  const { data, error } = await supabase
    .from('user_progress')
    .select('*')
    .eq('email', email)
    .single();

  if (error && error.code !== 'PGRST116') {
    console.error('Error fetching user progress:', error);
    throw error;
  }

  if (!data) return null;

  // Convertir de formato DB a formato de aplicación
  const progress: UserProgress = {
    userId: data.user_id || '',
    email: data.email,
    level: data.level,
    totalMinutesStudied: data.total_minutes_studied,
    lessonsCompleted: data.lessons_completed,
    exercisesCompleted: data.exercises_completed,
    currentStreak: data.current_streak,
    longestStreak: data.longest_streak,
    lastStudyDate: data.last_study_date,
    badges: [], // Se cargan por separado
    weeklyGoalMinutes: data.weekly_goal_minutes,
    achievements: [],
    stats: {
      grammar: data.grammar_score,
      vocabulary: data.vocabulary_score,
      speaking: data.speaking_score,
      listening: data.listening_score,
      reading: data.reading_score,
      writing: data.writing_score,
    },
  };

  return progress;
}

// Guardar sesión de estudio
export async function saveStudySession(session: StudySession) {
  if (!supabase) {
    throw new Error('Supabase not configured');
  }

  const record: StudySessionRecord = {
    email: session.userId, // Asumiendo que userId es el email por ahora
    start_time: session.startTime.toISOString(),
    end_time: session.endTime?.toISOString(),
    duration: session.duration,
    lesson_id: session.lessonId,
    exercises_completed: session.exercisesCompleted,
    score: session.score,
    date: session.date,
    created_at: new Date().toISOString(),
  };

  const { data, error } = await supabase
    .from('study_sessions')
    .insert([record])
    .select();

  if (error) {
    console.error('Error saving study session:', error);
    throw error;
  }

  return data;
}

// Obtener sesiones de estudio del usuario
export async function getUserStudySessions(email: string, limit?: number): Promise<StudySession[]> {
  if (!supabase) {
    throw new Error('Supabase not configured');
  }

  let query = supabase
    .from('study_sessions')
    .select('*')
    .eq('email', email)
    .order('created_at', { ascending: false });

  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching study sessions:', error);
    throw error;
  }

  return data.map((record) => ({
    id: record.id,
    userId: record.email,
    startTime: new Date(record.start_time),
    endTime: record.end_time ? new Date(record.end_time) : undefined,
    duration: record.duration,
    lessonId: record.lesson_id,
    exercisesCompleted: record.exercises_completed,
    score: record.score,
    date: record.date,
  }));
}

// Guardar badge ganado
export async function saveBadge(email: string, badge: Badge) {
  if (!supabase) {
    throw new Error('Supabase not configured');
  }

  const record: BadgeRecord = {
    email: email,
    badge_id: badge.id,
    badge_name: badge.name,
    badge_description: badge.description,
    badge_icon: badge.icon,
    badge_category: badge.category,
    earned_at: badge.earnedAt.toISOString(),
  };

  const { data, error } = await supabase
    .from('user_badges')
    .insert([record])
    .select();

  if (error) {
    console.error('Error saving badge:', error);
    throw error;
  }

  return data;
}

// Obtener badges del usuario
export async function getUserBadges(email: string): Promise<Badge[]> {
  if (!supabase) {
    throw new Error('Supabase not configured');
  }

  const { data, error } = await supabase
    .from('user_badges')
    .select('*')
    .eq('email', email)
    .order('earned_at', { ascending: false });

  if (error) {
    console.error('Error fetching badges:', error);
    throw error;
  }

  return data.map((record) => ({
    id: record.badge_id,
    name: record.badge_name,
    description: record.badge_description,
    icon: record.badge_icon,
    category: record.badge_category as any,
    earnedAt: new Date(record.earned_at),
  }));
}
