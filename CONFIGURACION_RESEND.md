# Configuración de Resend para Envío Automático de Emails

## 📧 Paso 1: Crear Cuenta en Resend

1. **Ve a:** https://resend.com/signup
2. **Regístrate** con tu email
3. **Verifica tu email** (revisa tu bandeja de entrada)
4. **Inicia sesión** en Resend

---

## 🔑 Paso 2: Obtener API Key

1. Una vez dentro del dashboard de Resend
2. **Click en "API Keys"** en el menú lateral
3. **Click en "Create API Key"**
4. **Nombre:** "Focus English Production"
5. **Permisos:** "Sending access"
6. **Click en "Create"**
7. **COPIA LA KEY** (empieza con `re_...`) - ¡Solo se muestra una vez!

---

## 📬 Paso 3: Verificar Dominio (IMPORTANTE)

### Opción A: Usar dominio verificado (focus-on-english.com)

1. En Resend, ve a **"Domains"**
2. Click en **"Add Domain"**
3. Ingresa: **focus-on-english.com**
4. Resend te dará registros DNS para agregar:
   - **SPF** (TXT)
   - **DKIM** (TXT)
   - **DMARC** (TXT)

5. **Agrega estos registros DNS** en tu proveedor de dominio
6. **Espera 15-30 minutos** para verificación
7. Click en **"Verify Domain"** en Resend

### Opción B: Usar dominio temporal de Resend (más rápido)

Para empezar rápido, Resend te permite enviar desde:
- **onboarding@resend.dev** (mientras verificas tu dominio)

---

## ⚙️ Paso 4: Configurar Variables de Entorno en Vercel

1. Ve a **Vercel Dashboard** → Tu proyecto
2. Settings → **Environment Variables**
3. **Agrega estas variables:**

```
RESEND_API_KEY=re_tu_api_key_aqui
NOTIFICATION_EMAIL=tu@email.com
```

- `RESEND_API_KEY`: La key que copiaste de Resend
- `NOTIFICATION_EMAIL`: Tu email para recibir notificaciones

4. Click en **"Save"**
5. **Redeploy** el proyecto

---

## 📝 Paso 5: Código ya está listo

El código para enviar emails ya está implementado en el proyecto.
Solo necesitas las variables de entorno configuradas.

---

## 🎨 Plantillas de Email

Los emails que se enviarán:

### Email al Usuario:
- **Asunto:** "¡Gracias por tu interés en Focus English!"
- **Contenido:** Confirmación de registro + información sobre el lanzamiento

### Email de Notificación (para ti):
- **Asunto:** "Nuevo suscriptor en Focus English"
- **Contenido:** Email del nuevo suscriptor + fecha de registro

---

## ✅ Checklist de Configuración

- [ ] Crear cuenta en Resend
- [ ] Obtener API Key de Resend
- [ ] Verificar dominio (o usar resend.dev temporalmente)
- [ ] Agregar `RESEND_API_KEY` en Vercel
- [ ] Agregar `NOTIFICATION_EMAIL` en Vercel
- [ ] Redeploy en Vercel
- [ ] Probar registro en la web

---

## 🧪 Probar que Funciona

1. Ve a **www.focus-on-english.com**
2. Registra un email de prueba
3. Deberías recibir:
   - ✅ Email de confirmación al usuario
   - ✅ Email de notificación a tu email personal

---

## 💰 Límites del Plan Gratuito

- ✅ **3,000 emails/mes** gratis
- ✅ Envío desde tu propio dominio
- ✅ Sin límite de destinatarios
- ✅ Analytics básico

Más que suficiente para empezar 🚀
