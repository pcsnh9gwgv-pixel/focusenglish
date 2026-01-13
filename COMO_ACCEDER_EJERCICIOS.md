# 🎓 Cómo Acceder a los Ejercicios del Curso A1

## 📍 Guía Rápida de Acceso

### Paso 1: Ir a la Página del Curso A1
Visita: **https://www.focus-on-english.com/certificaciones/a1**

### Paso 2: Navegar al Curriculum
Desplázate hacia abajo para ver las **6 semanas del curso** con todas las lecciones.

### Paso 3: Hacer Clic en Cualquier Lección
Cada lección ahora tiene un **badge verde** que dice **"Clic para acceder →"**

Al hacer clic, serás redirigido a la página de la lección.

---

## 🎯 Estructura de Cada Lección

Cada lección tiene **4 tabs (pestañas)** con contenido diferente:

### 📖 Tab 1: Introducción
- Objetivo de la lección
- Enfoque del examen
- Lista de temas que verás
- Actividades planificadas
- Duración estimada

### 📚 Tab 2: Contenido
- Material de estudio
- Explicaciones detalladas
- Ejemplos prácticos
- **Estado actual**: En desarrollo

### ✍️ Tab 3: Ejercicios
- Ejercicios prácticos
- Actividades interactivas
- Quizzes y tests
- **Estado actual**: En desarrollo

### 🎯 Tab 4: Práctica
- Ejercicios de speaking
- Práctica de listening
- Simulaciones de examen
- **Estado actual**: En desarrollo

---

## 🗺️ Rutas de Acceso

### Ejemplo de URLs para el Curso A1:

**Lección 1 de la Semana 1:**
```
https://www.focus-on-english.com/certificaciones/a1/leccion/a1-w1l1
```

**Lección 2 de la Semana 1:**
```
https://www.focus-on-english.com/certificaciones/a1/leccion/a1-w1l2
```

**Lección 1 de la Semana 2:**
```
https://www.focus-on-english.com/certificaciones/a1/leccion/a1-w2l1
```

### Patrón de URL:
```
/certificaciones/[nivel]/leccion/[id-leccion]
```

Donde:
- `[nivel]` = a1, a2, b1, b2, c1, c2
- `[id-leccion]` = formato: `{nivel}-w{semana}l{leccion}`

---

## 📋 Ejemplo: Todas las Lecciones de la Semana 1 del A1

1. **Semana 1 - Lección 1**: El Alfabeto y Sonidos Básicos
   - URL: `/certificaciones/a1/leccion/a1-w1l1`
   - Duración: 40 min
   - Tipo: Vocabulary

2. **Semana 1 - Lección 2**: Saludos y Presentaciones
   - URL: `/certificaciones/a1/leccion/a1-w1l2`
   - Duración: 45 min
   - Tipo: Speaking

3. **Semana 1 - Lección 3**: Números y Datos Personales
   - URL: `/certificaciones/a1/leccion/a1-w1l3`
   - Duración: 40 min
   - Tipo: Vocabulary

4. **Semana 1 - Lección 4**: Verbo "To Be" - Presente Simple
   - URL: `/certificaciones/a1/leccion/a1-w1l4`
   - Duración: 50 min
   - Tipo: Grammar

---

## ✨ Características Implementadas

### ✅ Ya Funcionan:
- ✓ Navegación entre lecciones
- ✓ Indicador de progreso visual
- ✓ Sistema de tabs (pestañas)
- ✓ Información completa de cada lección
- ✓ Botón "Marcar como completada"
- ✓ Breadcrumbs para volver al curso
- ✓ Diseño responsive
- ✓ Gradientes personalizados por nivel

### 🚧 En Desarrollo:
- Contenido interactivo completo de las lecciones
- Ejercicios autocorregibles
- Audio de pronunciación
- Grabación de voz para práctica de speaking
- Quizzes con feedback instantáneo
- Sistema de puntuación y gamificación

---

## 🎨 Diseño Visual

Cada lección incluye:
- **Header con gradiente** del color del nivel del curso
- **Badges informativos**: Semana, Lección, Duración, Tipo
- **Barra de progreso** que se actualiza al completar secciones
- **Tabs organizados** con iconos descriptivos
- **Cards con información** clara y estructurada

---

## 💡 Ejemplo de Uso Completo

### Flujo típico de un estudiante:

1. **Entrar al curso**:
   ```
   https://www.focus-on-english.com/certificaciones/a1
   ```

2. **Hacer clic en "Semana 1"** para ver las 4 lecciones

3. **Hacer clic en la primera lección**: 
   "El Alfabeto y Sonidos Básicos"

4. **Leer la introducción** (Tab 1) para entender qué aprenderás

5. **Estudiar el contenido** (Tab 2)

6. **Hacer los ejercicios** (Tab 3)

7. **Practicar** (Tab 4)

8. **Marcar como completada** al finalizar

9. **Volver al curso** y pasar a la siguiente lección

---

## 📱 Acceso desde el Curriculum

En la página del curso (**`/certificaciones/a1`**), cada lección ahora es **clickeable**:

```
┌─────────────────────────────────────────────────┐
│ 🔵 1   El Alfabeto y Sonidos Básicos          │
│        ⏰ 40 min  🏷️ vocabulary  🟢 Clic →    │
├─────────────────────────────────────────────────┤
│ 🔵 2   Saludos y Presentaciones               │
│        ⏰ 45 min  🏷️ speaking     🟢 Clic →    │
└─────────────────────────────────────────────────┘
```

El badge verde **"Clic para acceder →"** indica que la lección es accesible.

---

## 🚀 Próximos Pasos de Desarrollo

Para completar la experiencia de aprendizaje, se necesita:

### 1. **Contenido Interactivo**
   - Flashcards interactivas
   - Audio de pronunciación nativa
   - Videos explicativos
   - Ejemplos visuales

### 2. **Ejercicios Prácticos**
   - Quizzes autocorregibles
   - Ejercicios de fill-in-the-blank
   - Matching exercises
   - Ordenar palabras/oraciones

### 3. **Práctica de Speaking**
   - Grabación de voz
   - Comparación con audio nativo
   - Feedback de pronunciación
   - Ejercicios de repetición

### 4. **Sistema de Progreso**
   - Guardar progreso del estudiante
   - Dashboard con estadísticas
   - Certificados de completado
   - Badges y logros

---

## 🔧 Información Técnica

### Estructura de Archivos:
```
app/
└── certificaciones/
    └── [level]/              # Nivel del curso (a1, a2, etc.)
        ├── page.tsx          # Página del curso con curriculum
        └── leccion/
            └── [lessonId]/   # ID de la lección
                └── page.tsx  # Página de la lección
```

### Parámetros Dinámicos:
- `[level]`: Nivel del curso (a1, a2, b1, b2, c1, c2)
- `[lessonId]`: ID único de la lección (ej: a1-w1l1)

### Datos de las Lecciones:
Los datos se obtienen de:
```
/content/courses/certifications/course-data.ts
```

---

## 📊 Total de Lecciones Disponibles

### Curso A1:
- **6 semanas**
- **24 lecciones** (4 por semana)
- **Todas las lecciones son accesibles**

### Otros Cursos:
- **A2**: 8 semanas, 32 lecciones
- **B1**: 10 semanas, 40 lecciones
- **B2**: 12 semanas, 48 lecciones
- **C1**: 14 semanas, 56 lecciones
- **C2**: 16 semanas, 64 lecciones

**Total**: **260 lecciones** disponibles en la plataforma

---

## ✅ Resumen

### Para Acceder a los Ejercicios:

1. Ve a: **https://www.focus-on-english.com/certificaciones/a1**
2. Navega por las semanas del curriculum
3. **Haz clic en cualquier lección** (verás el badge verde "Clic para acceder →")
4. Explora los 4 tabs: Introducción, Contenido, Ejercicios, Práctica
5. Marca la lección como completada al terminar

---

**Estado Actual**: ✅ Sistema de navegación funcionando  
**Próximo Paso**: 🚧 Desarrollar contenido interactivo y ejercicios  
**Fecha**: Enero 13, 2026
