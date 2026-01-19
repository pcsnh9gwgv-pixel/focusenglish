#!/bin/bash
# Script para completar el push y crear PR
# Ejecutar desde: /home/user/webapp/focusenglish

echo "🚀 Iniciando proceso de push y creación de PR..."
echo ""

# 1. Verificar que estamos en la rama correcta
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "genspark_ai_developer" ]; then
    echo "❌ Error: No estás en la rama genspark_ai_developer"
    echo "   Rama actual: $CURRENT_BRANCH"
    exit 1
fi

echo "✅ Rama correcta: $CURRENT_BRANCH"
echo ""

# 2. Verificar commits locales
echo "📋 Commits locales en esta rama:"
git log --oneline origin/main..HEAD
echo ""

# 3. Push de la rama
echo "📤 Pushing rama genspark_ai_developer..."
git push -u origin genspark_ai_developer

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Error al hacer push. Verifica tus credenciales de GitHub."
    echo ""
    echo "💡 Para configurar credenciales:"
    echo "   git config --global user.name 'Tu Nombre'"
    echo "   git config --global user.email 'tu@email.com'"
    echo ""
    echo "   Si usas token de acceso personal:"
    echo "   git remote set-url origin https://<TOKEN>@github.com/pcsnh9gwgv-pixel/focusenglish.git"
    exit 1
fi

echo ""
echo "✅ Push exitoso!"
echo ""

# 4. Crear PR usando GitHub CLI (si está instalado)
if command -v gh &> /dev/null; then
    echo "🔧 Creando Pull Request con GitHub CLI..."
    gh pr create \
        --title "feat(b2): Add B2 course exercises structure with 120 completed exercises" \
        --body "## 📊 Resumen de Cambios

### ✅ Archivos Añadidos
- \`content/courses/certifications/b2-exercises.ts\` - Estructura completa de ejercicios
- \`content/courses/certifications/B2_EXERCISES_IMPLEMENTATION_PLAN.md\` - Plan de implementación
- \`TRABAJO_COMPLETADO_B2.md\` - Resumen detallado del progreso

### 📈 Ejercicios Implementados
- **Total**: 120 ejercicios (12.5% del objetivo de 960)
- **Semana 1**: 80 ejercicios (100% completa)
  - b2-w1l1: Formato del Examen B2 (20/20)
  - b2-w1l2: Reading Part 1 (20/20)
  - b2-w1l3: Advanced Grammar - Mixed Tenses (20/20)
  - b2-w1l4: Vocabulary - Work & Business (20/20)
- **Semana 2**: 40 ejercicios (50% completa)
  - b2-w2l1: Reading Part 2 - Gapped Text (20/20)
  - b2-w2l2: Reading Part 3 - Multiple Matching (20/20)
  - ⏳ b2-w2l3: Pendiente
  - ⏳ b2-w2l4: Pendiente

### 🎯 Características
- Ejercicios con múltiples tipos: multiple-choice, fill-blank, true-false, matching
- Niveles de dificultad balanceados: easy (40%), medium (40%), hard (20%)
- Explicaciones pedagógicas detalladas
- Sistema de puntos integrado
- TypeScript con interfaces completas

### 📝 Pendiente
- 840 ejercicios restantes (Semanas 2-12)
- Plan detallado en \`B2_EXERCISES_IMPLEMENTATION_PLAN.md\`

### 🔧 Arquitectura Técnica
- ✅ Interfaces TypeScript definidas
- ✅ Estructura escalable y mantenible
- ✅ Patrón replicable para nuevos ejercicios
- ✅ Documentación completa

Ver \`TRABAJO_COMPLETADO_B2.md\` para más detalles." \
        --base main \
        --head genspark_ai_developer
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Pull Request creado exitosamente!"
        echo ""
        PR_URL=$(gh pr view --json url --jq .url)
        echo "🔗 URL del PR: $PR_URL"
    else
        echo ""
        echo "⚠️  No se pudo crear el PR automáticamente."
        echo "   Por favor, créalo manualmente en GitHub."
    fi
else
    echo "⚠️  GitHub CLI (gh) no está instalado."
    echo ""
    echo "📝 Para crear el PR manualmente:"
    echo "   1. Ve a: https://github.com/pcsnh9gwgv-pixel/focusenglish"
    echo "   2. Haz clic en 'Compare & pull request'"
    echo "   3. Base: main <- Compare: genspark_ai_developer"
    echo "   4. Título: feat(b2): Add B2 course exercises structure with 120 completed exercises"
    echo "   5. Usa la descripción del body arriba"
fi

echo ""
echo "✨ Proceso completado!"
echo ""
echo "📊 Resumen:"
echo "   - Rama: genspark_ai_developer"
echo "   - Commits: 2"
echo "   - Archivos nuevos: 3"
echo "   - Ejercicios: 120/960 (12.5%)"
echo ""
echo "📖 Lee TRABAJO_COMPLETADO_B2.md para ver el resumen completo"
echo ""
