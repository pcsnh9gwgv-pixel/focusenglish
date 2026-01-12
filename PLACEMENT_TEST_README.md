# 🎯 Placement Test - Sistema Adaptativo de Evaluación CEFR

## 📋 Descripción General

Sistema de evaluación de nivel de inglés basado en el Marco Común Europeo de Referencia (CEFR), con lógica adaptativa que ajusta la dificultad según las respuestas del usuario.

## ✨ Características Principales

### 🎯 Test Adaptativo Inteligente
- **20 preguntas** dinámicas que se ajustan en tiempo real
- **Lógica adaptativa**: Si el usuario acierta, las preguntas suben de nivel; si falla, bajan
- Comienza en nivel **B1** (Intermedio) para optimizar el tiempo
- Cubre los 6 niveles CEFR: **A1, A2, B1, B2, C1, C2**

### 📚 Banco de Preguntas Profesional
- **30+ preguntas** curadas por nivel
- 3 tipos de evaluación:
  - 📖 **Gramática**: Tiempos verbales, estructuras, sintaxis
  - 📝 **Vocabulario**: Palabras, expresiones, colocaciones
  - 📄 **Comprensión**: Lectura y uso del idioma

### 🎨 Interfaz de Usuario Premium
- Diseño moderno con gradientes y animaciones suaves
- Barra de progreso visual
- Feedback inmediato con explicaciones detalladas
- Indicadores de respuestas correctas/incorrectas
- Visualización del nivel actual durante el test

### 📊 Resultados Detallados
- **Puntuación porcentual** (0-100%)
- **Nivel CEFR determinado** con descripción completa
- Desglose por categorías (gramática, vocabulario, comprensión)
- **Recomendaciones personalizadas** según el nivel
- Comparación visual con todos los niveles CEFR

### 💾 Persistencia de Datos
- Guardado en **Supabase** (cuando está configurado)
- Fallback a **localStorage** para funcionamiento offline
- Historial de tests completados
- Tracking de progreso del usuario

## 🚀 Rutas del Sistema

### `/placement-test`
Página principal del test con:
- Pantalla de bienvenida e instrucciones
- Información sobre el funcionamiento del test adaptativo
- Duración estimada y cantidad de preguntas

### `/placement-test/results`
Página de resultados con:
- Nivel CEFR obtenido con celebración visual
- Puntuación detallada y estadísticas
- Lista de competencias del nivel alcanzado
- Recomendaciones de programas de estudio
- Opciones para compartir resultados

## 🏗️ Arquitectura Técnica

### Archivos Principales

```
lib/
  └── placement-test.ts       # Lógica del test y banco de preguntas
  └── supabase.ts            # Cliente Supabase y funciones de DB

app/
  └── placement-test/
      ├── page.tsx           # Interfaz del test
      └── results/
          └── page.tsx       # Pantalla de resultados

SUPABASE_SCHEMA.sql         # Schema de la base de datos
```

### Tipos de Datos

```typescript
type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

interface PlacementQuestion {
  id: string;
  level: CEFRLevel;
  type: 'grammar' | 'vocabulary' | 'reading';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface TestResult {
  level: CEFRLevel;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  breakdown: {
    grammar: number;
    vocabulary: number;
    reading: number;
  };
  timestamp: Date;
}
```

## 🔧 Configuración de Supabase

### 1. Crear la Tabla

Ejecutar el script SQL en el editor de Supabase:

```bash
# El archivo SUPABASE_SCHEMA.sql contiene el schema completo
```

### 2. Configurar Variables de Entorno

Crear archivo `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=tu_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_supabase_anon_key
```

### 3. Instalar Dependencias

```bash
npm install @supabase/supabase-js
```

## 🎓 Niveles CEFR Implementados

### A1 - Principiante
- Expresiones cotidianas básicas
- Presentaciones y saludos
- Información personal simple

### A2 - Elemental
- Situaciones rutinarias
- Necesidades inmediatas
- Frases de uso frecuente

### B1 - Intermedio
- Situaciones de viaje
- Textos sobre temas familiares
- Experiencias y aspiraciones

### B2 - Intermedio Alto
- Interacción fluida con nativos
- Textos complejos detallados
- Puntos de vista sobre temas actuales

### C1 - Avanzado
- Uso flexible y efectivo del idioma
- Textos bien estructurados
- Contextos sociales y profesionales

### C2 - Maestría
- Dominio total del idioma
- Comprensión completa
- Expresión con precisión y matices

## 📈 Lógica Adaptativa

El sistema utiliza un algoritmo inteligente:

1. **Inicio**: Comienza en nivel B1 (óptimo estadísticamente)
2. **Respuesta Correcta**: Sube al siguiente nivel (B1 → B2 → C1 → C2)
3. **Respuesta Incorrecta**: Baja al nivel anterior (B1 → A2 → A1)
4. **Nivel Determinado**: Se calcula según las respuestas correctas por nivel
   - 2+ correctas en un nivel = ese es tu nivel mínimo

## 🎨 Diseño Visual

### Colores por Nivel
- **A1-A2**: Verde (principiante)
- **B1-B2**: Azul (intermedio)
- **C1-C2**: Púrpura (avanzado)

### Componentes UI
- Cards con sombras suaves
- Gradientes sutiles de fondo
- Animaciones de transición
- Iconos descriptivos por categoría
- Badges para indicadores de estado

## 🔒 Seguridad y Privacidad

- RLS (Row Level Security) habilitado en Supabase
- Los usuarios solo ven sus propios resultados
- Política de inserción abierta para usuarios anónimos
- Validación de datos en el cliente y servidor

## 📱 Responsive Design

- **Mobile First**: Optimizado para móviles
- **Tablet**: Layout adaptativo con grids
- **Desktop**: Máximo ancho de 3xl para legibilidad

## 🚦 Estados del Test

1. **No Iniciado**: Pantalla de bienvenida
2. **En Progreso**: Pregunta actual con opciones
3. **Respuesta Enviada**: Feedback con explicación
4. **Completado**: Página de resultados detallados

## 📊 Métricas Trackadas

- Total de preguntas respondidas
- Respuestas correctas/incorrectas
- Desglose por categoría (gramática, vocabulario, comprensión)
- Puntuación porcentual
- Nivel CEFR final
- Timestamp de completación

## 🔄 Flujo de Usuario

```
1. Landing Page
   ↓
2. Instrucciones del Test
   ↓
3. Test Adaptativo (20 preguntas)
   ↓
4. Cálculo de Resultados
   ↓
5. Pantalla de Resultados
   ↓
6. Recomendación de Programa
   ↓
7. Onboarding al Curso Apropiado
```

## 🎯 Casos de Uso

### Para Estudiantes
- Descubrir su nivel real de inglés
- Identificar áreas de mejora
- Obtener recomendaciones de estudio personalizadas

### Para Profesores/Instituciones
- Evaluación inicial de estudiantes
- Colocación en programas apropiados
- Tracking de progreso en el tiempo

### Para Marketing
- Lead generation con valor agregado
- Segmentación por nivel de inglés
- Data sobre la audiencia objetivo

## 🌟 Próximas Mejoras

- [ ] Autenticación de usuarios
- [ ] Historial completo de tests
- [ ] Certificado PDF descargable
- [ ] Compartir en redes sociales
- [ ] Comparación con promedios globales
- [ ] Test de speaking y listening (con audio)
- [ ] Modo práctica por nivel
- [ ] Análisis de errores comunes

## 🛠️ Comandos Útiles

```bash
# Desarrollo
npm run dev

# Compilación
npm run build

# Tests (próximamente)
npm run test

# Linting
npm run lint
```

## 📖 Referencias

- [Marco Común Europeo de Referencia (CEFR)](https://www.coe.int/en/web/common-european-framework-reference-languages)
- [Cambridge English Levels](https://www.cambridgeenglish.org/exams-and-tests/cefr/)
- [British Council CEFR](https://www.britishcouncil.org/voices-magazine/what-is-cefr)

---

**Desarrollado con ❤️ para la mejor experiencia de evaluación de inglés**
