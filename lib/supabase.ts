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
