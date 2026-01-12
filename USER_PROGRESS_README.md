# 📊 Sistema de Tracking y Progreso del Usuario

## 📋 Descripción General

Sistema completo de tracking gamificado que monitorea el progreso del usuario, calcula rachas de estudio, otorga badges y proporciona estadísticas visuales detalladas.

## ✨ Características Principales

### 📈 Dashboard Personalizado
- **Vista general del progreso** con estadísticas en tiempo real
- **4 métricas clave** destacadas:
  - 🔥 Racha de días consecutivos (streak)
  - ⏰ Tiempo total de estudio
  - 📚 Lecciones completadas
  - ✍️ Ejercicios realizados

### 🎯 Progreso de Nivel
- **Sistema de niveles CEFR** (A1 → C2)
- Barra de progreso visual hacia el siguiente nivel
- Indicador de lecciones restantes
- **6 habilidades** trackeadas:
  - 📝 Gramática
  - 📖 Vocabulario
  - 🗣️ Speaking
  - 👂 Listening
  - 📄 Reading
  - ✍️ Writing

### 🏆 Sistema de Logros (Badges)
- **15 badges** para desbloquear
- 5 categorías de logros:
  - 🔥 **Streak**: Rachas de estudio consecutivas (3, 7, 30 días)
  - 📚 **Lessons**: Milestones de lecciones (10, 50, 100)
  - ⏰ **Time**: Horas acumuladas (10h, 50h, 100h)
  - 🎓 **Mastery**: Dominio de habilidades específicas
  - ✨ **Special**: Logros especiales (semana perfecta, etc.)
- Visualización con estados: desbloqueado vs bloqueado

### 🎯 Metas Semanales
- **Gráfico circular** de progreso semanal
- Meta personalizable (default: 180 min/semana)
- Tracking en tiempo real
- Notificación al cumplir la meta

### 📊 Estadísticas Detalladas
- Desglose por habilidad con barras de progreso
- Porcentaje de completitud
- Progreso visual animado

## 🏗️ Arquitectura Técnica

### Archivos Principales

```
lib/
└── user-progress.ts           # ⚙️ Lógica de tracking y cálculos
└── supabase.ts                # 💾 Funciones de DB extendidas

app/dashboard/
└── page.tsx                   # 📊 Dashboard completo del usuario

SUPABASE_SCHEMA.sql            # 🗄️ Schema actualizado con nuevas tablas
```

### Tipos de Datos

```typescript
interface UserProgress {
  userId: string;
  email?: string;
  level: string; // CEFR
  totalMinutesStudied: number;
  lessonsCompleted: number;
  exercisesCompleted: number;
  currentStreak: number;
  longestStreak: number;
  lastStudyDate: string;
  badges: Badge[];
  weeklyGoalMinutes: number;
  achievements: Achievement[];
  stats: {
    grammar: number;
    vocabulary: number;
    speaking: number;
    listening: number;
    reading: number;
    writing: number;
  };
}

interface StudySession {
  id: string;
  userId: string;
  startTime: Date;
  endTime?: Date;
  duration: number; // minutes
  lessonId?: string;
  exercisesCompleted: number;
  score?: number;
  date: string; // YYYY-MM-DD
}

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string; // emoji
  earnedAt: Date;
  category: 'streak' | 'lessons' | 'time' | 'mastery' | 'special';
}
```

## 🗄️ Base de Datos

### Tablas Creadas

#### 1. `user_progress`
Almacena el progreso general del usuario:
- Nivel CEFR actual
- Minutos totales estudiados
- Lecciones y ejercicios completados
- Rachas (actual y récord)
- Estadísticas por habilidad
- Meta semanal personalizada

#### 2. `study_sessions`
Registra cada sesión de estudio:
- Hora de inicio/fin
- Duración en minutos
- Lección asociada
- Ejercicios completados
- Puntuación obtenida
- Fecha (para calcular rachas)

#### 3. `user_badges`
Almacena badges desbloqueados:
- ID del badge
- Información (nombre, descripción, icono)
- Categoría
- Fecha de desbloqueo

## 🔧 Funciones Principales

### Cálculo de Racha (Streak)
```typescript
calculateStreak(sessions: StudySession[]): {
  current: number;
  longest: number;
}
```
- Analiza sesiones de estudio
- Detecta días consecutivos
- Calcula racha actual vs récord

### Verificación de Badges
```typescript
checkEarnedBadges(progress: UserProgress, existingBadges: Badge[]): Badge[]
```
- Verifica condiciones para cada badge
- Retorna nuevos badges desbloqueados
- Evita duplicados

### Estadísticas Semanales
```typescript
calculateWeeklyStats(sessions: StudySession[], weekOffset: number): WeeklyStats
```
- Filtra sesiones de la semana
- Calcula totales y promedios
- Cuenta días activos

### Progreso de Nivel
```typescript
calculateLevelProgress(lessonsCompleted: number): {
  currentLevel: string;
  nextLevel: string | null;
  progress: number;
  lessonsToNextLevel: number;
}
```
- Determina nivel CEFR actual
- Calcula progreso hacia siguiente nivel
- Muestra lecciones restantes

## 🎨 Componentes Visuales

### 1. Stats Cards
Tarjetas con gradientes por categoría:
- 🔥 Racha: Naranja/Rojo
- ⏰ Tiempo: Azul/Cyan
- 📚 Lecciones: Verde/Esmeralda
- ✍️ Ejercicios: Púrpura/Rosa

### 2. Progress Bars
Barras animadas con gradientes:
- Nivel general: Azul → Púrpura
- Por habilidad: Azul sólido

### 3. Circular Progress (Meta Semanal)
Gráfico circular SVG con:
- Porcentaje completado
- Color verde dinámico
- Animación suave

### 4. Badge Grid
Grid responsive:
- 2 columnas en móvil
- 4 columnas en tablet
- 6 columnas en desktop
- Estados: color (desbloqueado) vs grayscale (bloqueado)

## 🚀 Rutas Implementadas

### `/dashboard`
Dashboard principal del usuario con:
- Estadísticas generales
- Progreso de nivel
- Meta semanal
- Badges desbloqueados
- Botones de acción

## 🔧 Configuración de Supabase

### 1. Ejecutar Schema SQL
```sql
-- Copiar contenido de SUPABASE_SCHEMA.sql
-- Ejecutar en el SQL Editor de Supabase
```

Esto creará:
- Tabla `user_progress`
- Tabla `study_sessions`
- Tabla `user_badges`
- Índices para performance
- RLS policies para seguridad
- Triggers para updated_at

### 2. Funciones Disponibles

```typescript
// Progreso del usuario
await saveUserProgress(progress);
const progress = await getUserProgress(email);

// Sesiones de estudio
await saveStudySession(session);
const sessions = await getUserStudySessions(email, limit);

// Badges
await saveBadge(email, badge);
const badges = await getUserBadges(email);
```

## 🎮 Sistema de Gamificación

### Badges Disponibles

| Badge | Requisito | Categoría | Icon |
|-------|-----------|-----------|------|
| Primera Lección | Completa 1 lección | Lessons | 🎯 |
| Racha de 3 Días | 3 días consecutivos | Streak | 🔥 |
| Semana Completa | 7 días consecutivos | Streak | ⚡ |
| Mes Dedicado | 30 días consecutivos | Streak | 💎 |
| 10 Horas | 600 minutos acumulados | Time | ⏰ |
| 50 Horas | 3000 minutos acumulados | Time | 📚 |
| 100 Horas | 6000 minutos acumulados | Time | 🏆 |
| 10 Lecciones | Completa 10 lecciones | Lessons | 📖 |
| 50 Lecciones | Completa 50 lecciones | Lessons | 📚 |
| Centenario | Completa 100 lecciones | Lessons | 💯 |
| Semana Perfecta | Cumple meta semanal | Special | ✨ |
| Maestro Gramática | 20 ejercicios de gramática | Mastery | 📝 |
| Maestro Vocabulario | 20 ejercicios de vocabulario | Mastery | 📖 |

### Niveles CEFR y Umbrales

| Nivel | Lecciones Mínimas | Lecciones Máximas |
|-------|-------------------|-------------------|
| A1 | 0 | 100 |
| A2 | 100 | 250 |
| B1 | 250 | 500 |
| B2 | 500 | 800 |
| C1 | 800 | 1200 |
| C2 | 1200+ | ∞ |

## 📊 Métricas Trackadas

### Individuales
- ✅ Minutos totales de estudio
- ✅ Lecciones completadas
- ✅ Ejercicios completados
- ✅ Racha actual de días
- ✅ Récord de racha
- ✅ Última fecha de estudio
- ✅ Puntuación por habilidad (x6)

### Semanales
- ✅ Minutos esta semana
- ✅ Lecciones esta semana
- ✅ Ejercicios esta semana
- ✅ Días activos
- ✅ Puntuación promedio
- ✅ Progreso hacia meta

## 🎯 Flujo de Usuario

```
1. Usuario completa una lección
   ↓
2. Se registra StudySession
   ↓
3. Se actualiza UserProgress
   ↓
4. Se calculan rachas
   ↓
5. Se verifican nuevos badges
   ↓
6. Se actualizan estadísticas
   ↓
7. Dashboard muestra progreso actualizado
```

## 💡 Casos de Uso

### Para Estudiantes
- 📊 Ver progreso en tiempo real
- 🔥 Mantener motivación con rachas
- 🏆 Desbloquear logros
- 🎯 Cumplir metas semanales
- 📈 Identificar áreas de mejora

### Para Profesores/Admin
- 📊 Monitorear engagement
- 📈 Analizar patrones de estudio
- 🎯 Ajustar dificultad del contenido
- 🏆 Identificar top performers

### Para el Negocio
- 📈 Métricas de retención
- 🎯 Optimización de gamificación
- 📊 Data para product decisions
- 🔥 Reducción de churn

## 🎨 Diseño Visual

### Paleta de Colores

**Gradientes por Categoría:**
- 🔥 Streak: `from-orange-50 to-red-50`
- ⏰ Time: `from-blue-50 to-cyan-50`
- 📚 Lessons: `from-green-50 to-emerald-50`
- ✍️ Exercises: `from-purple-50 to-pink-50`
- 🏆 Badges: `from-yellow-50 to-orange-50`

**Borders:**
- Activo: `border-2 border-[color]-300`
- Inactivo: `border-2 border-gray-200`

### Animaciones
- ✅ Progress bars: `transition-all duration-500`
- ✅ Stats cards: `hover:shadow-lg`
- ✅ Badges: `grayscale` cuando bloqueados
- ✅ Circular progress: `duration-500` rotation

## 📱 Responsive Design

### Mobile (< 768px)
- 1 columna para stats cards
- 2 columnas para badges
- Stack vertical para progress

### Tablet (768px - 1024px)
- 2 columnas para stats cards
- 4 columnas para badges
- Grid flexible

### Desktop (> 1024px)
- 4 columnas para stats cards
- 6 columnas para badges
- 3 columnas para sections

## 🚀 Próximas Mejoras

- [ ] Gráficos de progreso histórico (últimos 30 días)
- [ ] Comparación con otros usuarios (leaderboard)
- [ ] Notificaciones push para rachas
- [ ] Exportar certificado de progreso
- [ ] Metas personalizadas por habilidad
- [ ] Sistema de XP y niveles adicionales
- [ ] Achievements con recompensas reales
- [ ] Social features (compartir logros)
- [ ] Estadísticas predictivas (IA)
- [ ] Recomendaciones personalizadas

## 🛠️ Integración con Lecciones

Para registrar progreso desde una lección:

```typescript
import { saveStudySession, saveUserProgress } from '@/lib/supabase';

// Al completar una lección
const session: StudySession = {
  id: generateId(),
  userId: userEmail,
  startTime: lessonStartTime,
  endTime: new Date(),
  duration: calculateDuration(),
  lessonId: currentLessonId,
  exercisesCompleted: completedExercises,
  score: calculateScore(),
  date: new Date().toISOString().split('T')[0],
};

await saveStudySession(session);

// Actualizar progreso general
const updatedProgress = {
  ...currentProgress,
  lessonsCompleted: currentProgress.lessonsCompleted + 1,
  totalMinutesStudied: currentProgress.totalMinutesStudied + session.duration,
  exercisesCompleted: currentProgress.exercisesCompleted + session.exercisesCompleted,
};

await saveUserProgress(updatedProgress);
```

## 📖 Referencias

- [Gamification in Education](https://www.gamify.com/education)
- [User Engagement Metrics](https://mixpanel.com/blog/user-engagement-metrics/)
- [Duolingo's Streak System](https://blog.duolingo.com/streaks/)

---

**Sistema de progreso gamificado que impulsa la motivación y retención** 🚀
