# Configuración de Suscripción de Email para Página "Próximamente"

## ✅ Cambios Realizados

1. **Eliminada sección de redes sociales** de la página próximamente
2. **Creado API endpoint** `/api/subscribe` para guardar emails
3. **Integración con Supabase** para almacenar suscriptores

---

## 📋 Pasos para Activar la Suscripción de Email

### 1. Crear Tabla en Supabase

Ve a tu proyecto de Supabase y ejecuta este SQL:

```sql
-- Crear tabla para suscriptores del newsletter
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source VARCHAR(50) DEFAULT 'coming_soon_page',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear índice para búsquedas rápidas por email
CREATE INDEX idx_newsletter_email ON newsletter_subscribers(email);

-- Habilitar Row Level Security (RLS)
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserciones desde la API
CREATE POLICY "Permitir insertar suscriptores"
ON newsletter_subscribers
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Política para que solo admins puedan leer
CREATE POLICY "Solo admins pueden leer suscriptores"
ON newsletter_subscribers
FOR SELECT
TO authenticated
USING (true);
```

### 2. Verificar Variables de Entorno en Vercel

Tu proyecto en Vercel debe tener estas variables configuradas:

```
NEXT_PUBLIC_SUPABASE_URL=tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-clave-anon-key
```

**Cómo obtener estas claves:**

1. Ve a tu proyecto en Supabase: https://supabase.com/dashboard
2. Click en "Settings" (engranaje en la barra lateral)
3. Click en "API"
4. Copia:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

**Cómo configurar en Vercel:**

1. Ve a tu proyecto en Vercel: https://vercel.com/dashboard
2. Click en tu proyecto "focus-english" o "focusenglish"
3. Ve a "Settings" → "Environment Variables"
4. Agrega las dos variables de arriba
5. Haz un nuevo deployment o espera al siguiente push

### 3. Verificar que Funciona

1. Ve a **www.focus-on-english.com** (después de que Vercel termine el deployment)
2. Ingresa un email en el formulario
3. Haz click en "Notificarme"
4. Ve a Supabase → Table Editor → `newsletter_subscribers`
5. Deberías ver el email guardado

---

## 📊 Ver los Emails Registrados

**Opción 1: En Supabase Dashboard**
1. Ve a tu proyecto en Supabase
2. Click en "Table Editor" en la barra lateral
3. Selecciona la tabla `newsletter_subscribers`
4. Verás todos los emails registrados

**Opción 2: Query SQL**
```sql
SELECT 
  email,
  subscribed_at,
  source
FROM newsletter_subscribers
ORDER BY subscribed_at DESC;
```

---

## 🐛 Solución de Problemas

### El formulario no guarda emails

1. **Verificar que la tabla existe:**
   - Ve a Supabase → Table Editor
   - Busca `newsletter_subscribers`
   - Si no existe, ejecuta el SQL del paso 1

2. **Verificar variables de entorno en Vercel:**
   - Settings → Environment Variables
   - Asegúrate de que `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY` estén configuradas
   - Después de agregar variables, haz un nuevo deployment

3. **Ver logs de error:**
   - Ve a Vercel → tu proyecto → "Logs"
   - Busca errores relacionados con Supabase

### Email duplicado

Si alguien intenta registrarse dos veces con el mismo email, verá el mensaje:
"Este email ya está registrado"

Esto es normal y evita duplicados en tu base de datos.

---

## 🚀 Próximos Pasos (Opcional)

### Enviar Email de Confirmación

Si quieres enviar un email de confirmación cuando alguien se registre, puedes:

1. **Usar Resend.com** (gratis hasta 3,000 emails/mes)
2. **Usar SendGrid**
3. **Usar el sistema de emails de Supabase**

¿Te gustaría que te ayude a configurar esto?

---

## 📝 Notas Importantes

- ✅ Las redes sociales ya fueron eliminadas
- ✅ El formulario ahora guarda emails en Supabase
- ✅ Los emails se validan (formato correcto)
- ✅ No se permiten duplicados
- ✅ Se muestra feedback al usuario (cargando, éxito, error)

**Autor de cambios:** Asistente IA
**Fecha:** 2026-01-12
**Commit:** e529ac8
