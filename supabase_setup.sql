-- =====================================================
-- SCRIPT SQL PARA CREAR TABLA DE SUSCRIPTORES
-- Ejecutar en Supabase SQL Editor
-- =====================================================

-- 1. Crear tabla para suscriptores del newsletter
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source VARCHAR(50) DEFAULT 'coming_soon_page',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Crear índice para búsquedas rápidas por email
CREATE INDEX IF NOT EXISTS idx_newsletter_email 
ON newsletter_subscribers(email);

-- 3. Habilitar Row Level Security (RLS)
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- 4. Eliminar políticas existentes si las hay
DROP POLICY IF EXISTS "Permitir insertar suscriptores" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Solo admins pueden leer suscriptores" ON newsletter_subscribers;

-- 5. Política para permitir inserciones desde la API (cualquiera puede suscribirse)
CREATE POLICY "Permitir insertar suscriptores"
ON newsletter_subscribers
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- 6. Política para que solo admins puedan leer
CREATE POLICY "Solo admins pueden leer suscriptores"
ON newsletter_subscribers
FOR SELECT
TO authenticated
USING (true);

-- 7. Verificar que la tabla se creó correctamente
SELECT 
  table_name, 
  column_name, 
  data_type, 
  is_nullable
FROM information_schema.columns
WHERE table_name = 'newsletter_subscribers'
ORDER BY ordinal_position;

-- =====================================================
-- QUERIES ÚTILES DESPUÉS DE CREAR LA TABLA
-- =====================================================

-- Ver todos los suscriptores
-- SELECT * FROM newsletter_subscribers ORDER BY subscribed_at DESC;

-- Contar total de suscriptores
-- SELECT COUNT(*) as total_subscribers FROM newsletter_subscribers;

-- Ver suscriptores de hoy
-- SELECT * FROM newsletter_subscribers 
-- WHERE DATE(subscribed_at) = CURRENT_DATE;

-- Exportar lista de emails (para usar en email marketing)
-- SELECT email FROM newsletter_subscribers ORDER BY subscribed_at DESC;
