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
