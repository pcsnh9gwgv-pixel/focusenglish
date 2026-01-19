# Focus English - Plataforma de Cursos de Inglés

**🚀 Deployment Status**: Ready for Cloudflare Pages | **Version**: 0.1.2 | **Updated**: 2026-01-19

## 📚 Descripción del Proyecto

Focus English es una plataforma educativa integral para aprendizaje de inglés, especializada en:
- Cursos de preparación para certificaciones oficiales (A2, B1, B2, C1, C2)
- Cursos especializados para trabajar en España y emigrar a Europa
- Programas personalizados por sectores profesionales

## 🚀 Características Completadas

### ✅ Cursos de Certificación Oficial
- **Nueva sección completa**: `/certificaciones`
- **5 niveles CEFR disponibles**: A2, B1, B2, C1, C2
- **Curriculum completo** para cada nivel con semanas detalladas:
  - A2: 8 semanas, 32 lecciones (199€)
  - B1: 10 semanas, 40 lecciones (249€) - ✅ CURRICULUM COMPLETO
  - B2: 12 semanas, 48 lecciones (299€) - ✅ CURRICULUM COMPLETO
  - C1: 14 semanas, 56 lecciones (449€) - 6 semanas detalladas
  - C2: 16 semanas, 64 lecciones (599€) - 6 semanas detalladas

### 🎤 Sistema de Grabación y Evaluación de Pronunciación (NUEVO)
- **Lección 2 A1**: Sistema completo de speaking practice implementado
- **18 frases con audio profesional**: Generado con ElevenLabs TTS
- **Grabación de voz**: MediaRecorder API para capturar pronunciación del estudiante
- **Evaluación automática**: Web Speech Recognition API + algoritmo de Levenshtein
- **Feedback inmediato**: Puntuación 0-100% con consejos personalizados
- **Sistema de puntos**: Bonus de 5-20 puntos según calidad de pronunciación
- **Interfaz intuitiva**: Botones 🔊 (escuchar) y 🎤 (grabar) en cada frase
- **Privacidad**: Todo procesado en el navegador, sin almacenar grabaciones

### 🎨 Mockups y Diseño
- Landing page principal con héroe gradient
- Cards individuales para cada nivel con colores distintivos
- Páginas de detalle con curriculum expandible semana por semana
- Diseño responsive y moderno con Tailwind CSS

### 📖 Estructura del Curriculum
Cada curso incluye:
- **Formato del examen oficial** (Listening, Reading, Writing, Speaking)
- **Lecciones por semana** con duración específica
- **Tipos de lección**: vocabulary, reading, writing, speaking, listening, grammar, exam-practice, mock-exam
- **Enfoque de examen** específico para cada lección
- **Actividades prácticas** detalladas
- **Exámenes de práctica** (Mock Exams) a mitad y final del curso

### 🗂️ Cursos Especializados Existentes
- **Para trabajar en España** (6 sectores):
  - Marketing y Comunicación (B2-C1)
  - Ingenieros y Técnicos (B2-C1)
  - Administración de Empresas (B2-C1)
  - Legal y Compliance (C1-C2)
  - Comercio Exterior (B2-C1)
  - Farmacéutico y Life Sciences (B2-C1)

- **Para emigrar a Europa** (5 países):
  - Irlanda, Países Bajos, Alemania, Luxemburgo, Malta

## 📁 Estructura del Proyecto

```
webapp/
├── app/
│   ├── certificaciones/           # ✨ NUEVO - Cursos de certificación
│   │   ├── page.tsx               # Landing page certificaciones
│   │   └── [level]/
│   │       └── page.tsx           # Detalle por nivel (a2, b1, b2, c1, c2)
│   ├── cursos/
│   │   ├── [goal]/[level]/        # Cursos por objetivo y nivel
│   │   └── marketing/             # Curso de marketing existente
│   └── cursos-especializados/     # Cursos profesionales
├── content/
│   └── courses/
│       ├── certifications/
│       │   └── course-data.ts     # ✨ NUEVO - Datos completos A2-C2
│       └── marketing/
│           └── course-data.ts     # Curso marketing existente
└── components/                     # Componentes reutilizables
```

## 🎯 URLs del Proyecto

### Certificaciones Oficiales (NUEVO)
- **Landing principal**: `/certificaciones`
- **Nivel A2**: `/certificaciones/a2`
- **Nivel B1**: `/certificaciones/b1`
- **Nivel B2**: `/certificaciones/b2`
- **Nivel C1**: `/certificaciones/c1`
- **Nivel C2**: `/certificaciones/c2`

### Cursos Especializados
- **Página principal**: `/cursos-especializados`
- **Por objetivo**: `/cursos/[trabajo|viajes|examenes]/[a1|a2|b1|b2|c1|c2]`
- **Marketing específico**: `/cursos/marketing`

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Base de datos**: Supabase (PostgreSQL)
- **Autenticación**: NextAuth.js
- **Deployment**: Vercel
- **Audio TTS**: ElevenLabs Multilingual v2
- **Speech Recognition**: Web Speech Recognition API
- **Audio Recording**: MediaRecorder API

## 🚀 Desarrollo Local

### Instalación
```bash
npm install
```

### Ejecutar servidor de desarrollo
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build de producción
```bash
npm run build
npm start
```

## 📊 Datos del Curriculum

### Estructura de Lecciones
Cada lección incluye:
- **ID único**: Identificador de la lección (ej: `b2-w3l1`)
- **Título**: Nombre descriptivo
- **Duración**: Tiempo estimado (45-100 min)
- **Tipo**: vocabulary | reading | writing | speaking | listening | grammar | exam-practice | mock-exam
- **Temas**: Array de tópicos cubiertos
- **Actividades**: Lista de ejercicios prácticos
- **Enfoque de Examen**: Qué parte específica del examen oficial prepara

### Formato de Examen por Nivel

| Nivel | Listening | Reading | Writing | Speaking |
|-------|-----------|---------|---------|----------|
| A2    | 25 min    | 30 min  | 30 min  | 8-10 min |
| B1    | 30 min    | 45 min  | 45 min  | 12-14 min |
| B2    | 40 min    | 60 min  | 80 min  | 14-16 min |
| C1    | 40 min    | 75 min  | 90 min  | 15 min |
| C2    | 40 min    | 90 min  | 90 min  | 16 min |

## ✨ Características Destacadas

### Landing Page de Certificaciones
- Héroe con gradient azul-morado
- Estadísticas: 2000+ estudiantes, 95% tasa de éxito
- Grid de 5 tarjetas de cursos con badges distintivos
- CTAs para test de nivel gratuito

### Páginas de Detalle
- Header con gradiente específico por nivel
- Formato de examen detallado con iconos
- Curriculum expandible por semanas
- Cada lección muestra:
  - Enfoque específico del examen
  - Temas a cubrir
  - Actividades prácticas
  - Duración y tipo
- CTAs para inscripción y consulta

### Sistema de Colores por Nivel
- A2: Orange to Yellow gradient
- B1: Purple to Pink gradient
- B2: Blue to Purple gradient
- C1: Green to Teal gradient
- C2: Indigo to Purple gradient

## 📝 Próximos Pasos Sugeridos

1. **Completar C1 y C2**: Expandir de 6 a 14/16 semanas completas
2. **Sistema de matrícula**: Implementar flujo de inscripción
3. **Test de nivel**: Crear test diagnóstico interactivo
4. **Dashboard de estudiante**: Panel de progreso personal
5. **Integración de pagos**: Stripe/PayPal para inscripciones
6. **Certificados digitales**: Al completar cursos
7. **Foro de estudiantes**: Comunidad de aprendizaje
8. **Material descargable**: PDFs, ejercicios, audios

## 📚 Documentación Adicional

### Archivos de Referencia
- `CURSOS_RESUMEN.md` - Resumen de cursos especializados
- `CURSOS_ESPECIALIZADOS.md` - Estructura de cursos profesionales
- `CURSO_MARKETING_B2_COMPLETO.md` - Detalle curso marketing
- `IMPLEMENTATION_SUMMARY.md` - Resumen de implementación
- `SISTEMA_GRABACION_PRONUNCIACION.md` - ✨ Sistema de speaking practice con evaluación
- `SISTEMA_SPEAKING_PRACTICE.md` - Documentación técnica del sistema de grabación
- `LECCION_2_COMPLETADA.md` - Detalle completo de la lección 2 con sistema de grabación

## 🎓 Niveles CEFR Explicados

- **A2 (Elementary)**: Comprender frases y expresiones de uso frecuente
- **B1 (Intermediate)**: Desenvolverse en situaciones de viaje y trabajo básico
- **B2 (Upper-Intermediate)**: Interactuar con fluidez con hablantes nativos
- **C1 (Advanced)**: Comprender textos complejos y expresarse con fluidez
- **C2 (Proficiency)**: Comprender prácticamente todo con facilidad nativa

## 🔧 Mantenimiento

### Actualizar Curriculum
Los datos del curriculum se encuentran en:
```
content/courses/certifications/course-data.ts
```

Cada curso sigue la interfaz `CertificationCourse` con:
- Información general (título, descripción, precio)
- Formato de examen
- Array de semanas, cada una con 4 lecciones

### Añadir Nuevos Niveles
1. Agregar entrada en `certificationCourses` object
2. Definir semanas y lecciones
3. Actualizar `generateStaticParams` en `[level]/page.tsx`

## 🌐 Deployment

El proyecto está configurado para deployment en Vercel:
```bash
vercel --prod
```

Variables de entorno requeridas:
- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_URL` - URL de producción
- `NEXTAUTH_SECRET` - Secret para NextAuth

## 📞 Contacto y Soporte

Para consultas sobre el proyecto:
- Email: info@focus-on-english.com
- URL: https://www.focus-on-english.com

---

**Última actualización**: Enero 2026
**Versión**: 2.0.0
**Estado**: ✅ Certificaciones implementadas completamente
