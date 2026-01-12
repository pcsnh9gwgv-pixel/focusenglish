-- Schema SQL para crear la tabla de placement_tests en Supabase

CREATE TABLE IF NOT EXISTS placement_tests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  level TEXT NOT NULL CHECK (level IN ('A1', 'A2', 'B1', 'B2', 'C1', 'C2')),
  score INTEGER NOT NULL CHECK (score >= 0 AND score <= 100),
  total_questions INTEGER NOT NULL,
  correct_answers INTEGER NOT NULL,
  grammar_score INTEGER DEFAULT 0,
  vocabulary_score INTEGER DEFAULT 0,
  reading_score INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para mejorar el rendimiento
CREATE INDEX IF NOT EXISTS idx_placement_tests_email ON placement_tests(email);
CREATE INDEX IF NOT EXISTS idx_placement_tests_user_id ON placement_tests(user_id);
CREATE INDEX IF NOT EXISTS idx_placement_tests_created_at ON placement_tests(created_at DESC);

-- RLS (Row Level Security) políticas
ALTER TABLE placement_tests ENABLE ROW LEVEL SECURITY;

-- Política: Los usuarios pueden ver sus propios resultados
CREATE POLICY "Users can view own placement tests"
  ON placement_tests FOR SELECT
  USING (auth.uid() = user_id OR email = auth.email());

-- Política: Cualquiera puede insertar (para usuarios anónimos)
CREATE POLICY "Anyone can insert placement tests"
  ON placement_tests FOR INSERT
  WITH CHECK (true);

-- Comentarios para documentación
COMMENT ON TABLE placement_tests IS 'Almacena los resultados de los placement tests de los usuarios';
COMMENT ON COLUMN placement_tests.level IS 'Nivel CEFR determinado (A1, A2, B1, B2, C1, C2)';
COMMENT ON COLUMN placement_tests.score IS 'Puntuación porcentual (0-100)';
COMMENT ON COLUMN placement_tests.grammar_score IS 'Preguntas de gramática correctas';
COMMENT ON COLUMN placement_tests.vocabulary_score IS 'Preguntas de vocabulario correctas';
COMMENT ON COLUMN placement_tests.reading_score IS 'Preguntas de comprensión correctas';

-- ============================================================
-- USER PROGRESS TRACKING TABLES
-- ============================================================

-- Tabla de progreso del usuario
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  level TEXT NOT NULL CHECK (level IN ('A1', 'A2', 'B1', 'B2', 'C1', 'C2')),
  total_minutes_studied INTEGER DEFAULT 0,
  lessons_completed INTEGER DEFAULT 0,
  exercises_completed INTEGER DEFAULT 0,
  current_streak INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  last_study_date DATE,
  weekly_goal_minutes INTEGER DEFAULT 180,
  grammar_score INTEGER DEFAULT 0,
  vocabulary_score INTEGER DEFAULT 0,
  speaking_score INTEGER DEFAULT 0,
  listening_score INTEGER DEFAULT 0,
  reading_score INTEGER DEFAULT 0,
  writing_score INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para user_progress
CREATE INDEX IF NOT EXISTS idx_user_progress_email ON user_progress(email);
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_updated_at ON user_progress(updated_at DESC);

-- RLS para user_progress
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own progress"
  ON user_progress FOR SELECT
  USING (auth.uid() = user_id OR email = auth.email());

CREATE POLICY "Users can insert own progress"
  ON user_progress FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can update own progress"
  ON user_progress FOR UPDATE
  USING (auth.uid() = user_id OR email = auth.email());

-- Tabla de sesiones de estudio
CREATE TABLE IF NOT EXISTS study_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  start_time TIMESTAMP WITH TIME ZONE NOT NULL,
  end_time TIMESTAMP WITH TIME ZONE,
  duration INTEGER NOT NULL, -- en minutos
  lesson_id TEXT,
  exercises_completed INTEGER DEFAULT 0,
  score INTEGER CHECK (score >= 0 AND score <= 100),
  date DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para study_sessions
CREATE INDEX IF NOT EXISTS idx_study_sessions_email ON study_sessions(email);
CREATE INDEX IF NOT EXISTS idx_study_sessions_user_id ON study_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_study_sessions_date ON study_sessions(date DESC);
CREATE INDEX IF NOT EXISTS idx_study_sessions_created_at ON study_sessions(created_at DESC);

-- RLS para study_sessions
ALTER TABLE study_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own sessions"
  ON study_sessions FOR SELECT
  USING (auth.uid() = user_id OR email = auth.email());

CREATE POLICY "Users can insert own sessions"
  ON study_sessions FOR INSERT
  WITH CHECK (true);

-- Tabla de badges/logros
CREATE TABLE IF NOT EXISTS user_badges (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  badge_id TEXT NOT NULL,
  badge_name TEXT NOT NULL,
  badge_description TEXT NOT NULL,
  badge_icon TEXT NOT NULL,
  badge_category TEXT NOT NULL CHECK (badge_category IN ('streak', 'lessons', 'time', 'mastery', 'special')),
  earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(email, badge_id)
);

-- Índices para user_badges
CREATE INDEX IF NOT EXISTS idx_user_badges_email ON user_badges(email);
CREATE INDEX IF NOT EXISTS idx_user_badges_user_id ON user_badges(user_id);
CREATE INDEX IF NOT EXISTS idx_user_badges_earned_at ON user_badges(earned_at DESC);

-- RLS para user_badges
ALTER TABLE user_badges ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own badges"
  ON user_badges FOR SELECT
  USING (auth.uid() = user_id OR email = auth.email());

CREATE POLICY "Users can insert own badges"
  ON user_badges FOR INSERT
  WITH CHECK (true);

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para actualizar updated_at en user_progress
CREATE TRIGGER update_user_progress_updated_at 
  BEFORE UPDATE ON user_progress
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Comentarios para las nuevas tablas
COMMENT ON TABLE user_progress IS 'Almacena el progreso general del usuario en la plataforma';
COMMENT ON TABLE study_sessions IS 'Registra todas las sesiones de estudio del usuario';
COMMENT ON TABLE user_badges IS 'Almacena los badges/logros desbloqueados por el usuario';
COMMENT ON COLUMN user_progress.current_streak IS 'Racha actual de días consecutivos de estudio';
COMMENT ON COLUMN user_progress.longest_streak IS 'Racha más larga de días consecutivos alcanzada';
COMMENT ON COLUMN user_progress.weekly_goal_minutes IS 'Meta semanal de minutos de estudio';
COMMENT ON COLUMN study_sessions.duration IS 'Duración de la sesión en minutos';
COMMENT ON COLUMN study_sessions.score IS 'Puntuación obtenida en la sesión (0-100)';
COMMENT ON COLUMN user_badges.badge_category IS 'Categoría del badge (streak, lessons, time, mastery, special)';
