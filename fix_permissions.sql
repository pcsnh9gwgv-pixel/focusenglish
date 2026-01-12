-- =====================================================
-- SCRIPT SQL PARA CORREGIR PERMISOS DE LA TABLA
-- Ejecutar en Supabase SQL Editor
-- =====================================================

-- 1. Eliminar todas las políticas existentes
DROP POLICY IF EXISTS "Permitir insertar suscriptores" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Solo admins pueden leer suscriptores" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Allow public insert" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Allow public read" ON newsletter_subscribers;

-- 2. Deshabilitar RLS temporalmente para verificar
ALTER TABLE newsletter_subscribers DISABLE ROW LEVEL SECURITY;

-- 3. Volver a habilitar RLS
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- 4. Crear política SIMPLE para permitir INSERT a todos (anon y authenticated)
CREATE POLICY "allow_insert_newsletter"
ON newsletter_subscribers
FOR INSERT
TO public
WITH CHECK (true);

-- 5. Crear política para que usuarios autenticados puedan leer
CREATE POLICY "allow_read_newsletter"
ON newsletter_subscribers
FOR SELECT
TO authenticated
USING (true);

-- 6. Verificar que las políticas se crearon
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd
FROM pg_policies 
WHERE tablename = 'newsletter_subscribers';

-- 7. Probar INSERT manual (esto debería funcionar)
-- INSERT INTO newsletter_subscribers (email, source) 
-- VALUES ('test@ejemplo.com', 'manual_test');

-- 8. Ver todos los registros
-- SELECT * FROM newsletter_subscribers ORDER BY created_at DESC;
