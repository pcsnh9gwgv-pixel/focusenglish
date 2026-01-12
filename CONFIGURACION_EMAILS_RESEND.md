# 📧 Configuración de Envío Automático de Emails con Resend

## ✅ Lo que ya está hecho:

1. ✅ Código de envío de emails implementado
2. ✅ Templates HTML profesionales creados
3. ✅ Integración con Resend configurada
4. ✅ Sistema de notificaciones para admin

---

## 🚀 Pasos para Activar el Envío de Emails

### Paso 1: Crear cuenta en Resend

1. **Ve a:** https://resend.com/signup
2. **Regístrate** con tu email
3. **Verifica tu email**
4. **Inicia sesión** en Resend

---

### Paso 2: Obtener tu API Key de Resend

1. **En el dashboard de Resend**, ve a **"API Keys"**
2. **Click en "Create API Key"**
3. **Ponle un nombre:** `Focus English Production`
4. **Selecciona permiso:** `Sending access`
5. **Click en "Create"**
6. **COPIA la API Key** (empieza con `re_...`)
   - ⚠️ **IMPORTANTE:** Solo la verás una vez, guárdala bien

---

### Paso 3: Verificar tu dominio en Resend (IMPORTANTE)

Para enviar emails desde `no-reply@focus-on-english.com`, necesitas verificar tu dominio:

#### Opción A: Usar tu dominio personalizado (Recomendado para producción)

1. En Resend, ve a **"Domains"**
2. Click en **"Add Domain"**
3. Ingresa: `focus-on-english.com`
4. Resend te dará **registros DNS** para agregar
5. Ve a tu proveedor de dominio (donde compraste focus-on-english.com)
6. Agrega los registros DNS que Resend te indica
7. Espera 24-48 horas para verificación

**Registros DNS típicos:**
```
Type: TXT
Name: _resend
Value: [código que te da Resend]

Type: TXT  
Name: resend._domainkey
Value: [código que te da Resend]
```

#### Opción B: Usar dominio de prueba (Para testing inmediato)

1. En Resend, ve a **"Domains"**
2. Usa el dominio por defecto: `onboarding.resend.dev`
3. Solo puedes enviar a **emails que hayas verificado previamente**
4. Perfecto para pruebas antes de configurar tu dominio

⚠️ **Nota:** Con el dominio de prueba, los emails saldrán desde `no-reply@onboarding.resend.dev`

---

### Paso 4: Configurar Variables de Entorno en Vercel

1. **Ve a Vercel:** https://vercel.com/dashboard
2. **Tu proyecto** → **Settings** → **Environment Variables**
3. **Agrega estas 2 nuevas variables:**

```
RESEND_API_KEY=re_tuAPIkeyAqui123456789
NOTIFICATION_EMAIL=tu-email@ejemplo.com
```

**Explicación:**
- `RESEND_API_KEY`: La API key que copiaste de Resend
- `NOTIFICATION_EMAIL`: Tu email personal donde quieres recibir notificaciones cuando alguien se registre

**Importante:** 
- Aplica las variables a **Production**, **Preview** y **Development**
- Click en **"Save"**

---

### Paso 5: Actualizar el código (si usas dominio personalizado)

Si verificaste tu dominio `focus-on-english.com` en Resend, el código ya está configurado correctamente.

Si usas el dominio de prueba temporalmente, necesitas cambiar:

```typescript
from: 'Focus English <no-reply@onboarding.resend.dev>',
```

Pero voy a dejarlo con tu dominio real, ya que eventualmente lo verificarás.

---

### Paso 6: Deploy y Probar

1. **Hacer push del código:**

```bash
cd /home/user/webapp
git add -A
git commit -m "feat: Configurar envío automático de emails"
git push origin main
```

2. **Esperar deployment de Vercel** (2-3 minutos)

3. **Probar el formulario:**
   - Ve a: www.focus-on-english.com
   - Registra un email de prueba
   - Deberías recibir:
     - ✅ Email de confirmación al usuario registrado
     - ✅ Email de notificación en tu email personal

---

## 📋 Checklist de Configuración

- [ ] **1. Cuenta en Resend creada** ✅
- [ ] **2. API Key de Resend obtenida**
- [ ] **3. Dominio verificado en Resend** (o usar onboarding.resend.dev temporalmente)
- [ ] **4. Variables RESEND_API_KEY y NOTIFICATION_EMAIL en Vercel**
- [ ] **5. Código desplegado en producción**
- [ ] **6. Emails enviándose correctamente**

---

## 🧪 Cómo Probar

### Si usas dominio de prueba (onboarding.resend.dev):

1. **Primero verifica tu email en Resend:**
   - Resend → Settings → Verified Emails
   - Agrega tu email personal
   - Verifica el email que recibes

2. **Usa ese mismo email para probar** el formulario de suscripción

### Si usas dominio personalizado (focus-on-english.com):

1. **Espera que Resend verifique tu dominio** (puede tardar hasta 48h)
2. **Prueba con cualquier email**

---

## 📧 Emails que se Envían

### 1. Email al Usuario (Welcome Email)
- **Asunto:** "¡Gracias por tu interés en Focus English! 🎉"
- **De:** Focus English <no-reply@focus-on-english.com>
- **Contenido:** Mensaje de bienvenida profesional con:
  - Logo y branding de Focus English
  - Características destacadas (Especializado, 90 Días, Personalizado)
  - Mensaje de agradecimiento
  - Diseño responsive y profesional

### 2. Email al Admin (Notification Email)
- **Asunto:** "🔔 Nuevo suscriptor en Focus English"
- **De:** Focus English Notifications <no-reply@focus-on-english.com>
- **A:** Tu email (configurado en NOTIFICATION_EMAIL)
- **Contenido:**
  - Email del nuevo suscriptor
  - Fecha y hora del registro
  - Fuente (página "Próximamente")
  - Link directo a Supabase

---

## 🔧 Solución de Problemas

### Los emails no se envían

1. **Verificar variables en Vercel:**
   - Settings → Environment Variables
   - Asegúrate de que `RESEND_API_KEY` esté configurada

2. **Ver logs en Vercel:**
   - Tu proyecto → Logs
   - Busca mensajes como "✅ Emails enviados" o "⚠️ Error al enviar"

3. **Verificar en Resend:**
   - Dashboard → Emails
   - Verás el historial de todos los emails enviados
   - Si aparece "queued" o "sent" = funcionó
   - Si aparece "failed" = ver el error

### Email en spam

1. **Verifica tu dominio en Resend** (muy importante)
2. **Configura SPF, DKIM y DMARC** (Resend te da las instrucciones)
3. **No uses palabras spam** en el asunto

---

## 💰 Límites de Resend (Plan Gratis)

- ✅ **3,000 emails/mes gratis**
- ✅ Sin tarjeta de crédito requerida
- ✅ Suficiente para empezar

Si necesitas más:
- **$20/mes:** 50,000 emails
- **$80/mes:** 100,000 emails

---

## 📝 Próximos Pasos

Una vez configurado todo:

1. ✅ Los usuarios recibirán email de confirmación instantáneo
2. ✅ Tú recibirás notificación de cada nuevo suscriptor
3. ✅ Todos los emails se guardan en Supabase
4. ✅ Puedes exportar la lista para campañas futuras

---

## 🎯 Estado Actual

- ✅ Código implementado y listo
- ⏳ Pendiente: Configurar API Key de Resend en Vercel
- ⏳ Pendiente: Verificar dominio en Resend (opcional pero recomendado)

**¿Tienes alguna pregunta sobre algún paso?** 😊
