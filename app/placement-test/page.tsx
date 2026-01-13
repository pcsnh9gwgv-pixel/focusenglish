'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  questionBank,
  getNextQuestion,
  calculateLevel,
  type PlacementQuestion,
  type CEFRLevel,
} from '@/lib/placement-test';
import { Button } from '@/components/button';
import { Card } from '@/components/card';

export default function PlacementTestPage() {
  const router = useRouter();
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<PlacementQuestion | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<string[]>([]);
  const [answers, setAnswers] = useState<{ questionId: string; correct: boolean }[]>([]);
  const [currentLevel, setCurrentLevel] = useState<CEFRLevel>('B1');
  const [showExplanation, setShowExplanation] = useState(false);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState<boolean | null>(null);

  const maxQuestions = 20;
  const progress = (answeredQuestions.length / maxQuestions) * 100;

  const startTest = () => {
    setStarted(true);
    const firstQuestion = getNextQuestion([], null, 'B1');
    setCurrentQuestion(firstQuestion);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null || !currentQuestion) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    // Guardar respuesta
    setAnswers([
      ...answers,
      { questionId: currentQuestion.id, correct: isCorrect },
    ]);
    
    setAnsweredQuestions([...answeredQuestions, currentQuestion.id]);
    setLastAnswerCorrect(isCorrect);
    setShowExplanation(true);

    // Ajustar nivel para siguiente pregunta
    const levelOrder: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    const currentIndex = levelOrder.indexOf(currentLevel);
    
    let newLevel = currentLevel;
    if (isCorrect && currentIndex < levelOrder.length - 1) {
      newLevel = levelOrder[currentIndex + 1];
    } else if (!isCorrect && currentIndex > 0) {
      newLevel = levelOrder[currentIndex - 1];
    }
    setCurrentLevel(newLevel);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);

    // Verificar si terminamos el test
    if (answeredQuestions.length >= maxQuestions) {
      finishTest();
      return;
    }

    // Obtener siguiente pregunta
    const nextQuestion = getNextQuestion(
      answeredQuestions,
      lastAnswerCorrect,
      currentLevel
    );

    if (nextQuestion) {
      setCurrentQuestion(nextQuestion);
    } else {
      finishTest();
    }
  };

  const finishTest = () => {
    const result = calculateLevel(answers);
    // Guardar resultado en localStorage para la página de resultados
    localStorage.setItem('placementTestResult', JSON.stringify(result));
    router.push('/placement-test/results');
  };

  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full p-8 md:p-12">
          <div className="text-center">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
              <svg
                className="w-12 h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Test de Nivel de Inglés
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Descubre tu nivel CEFR (A1-C2) con nuestro test adaptativo profesional
            </p>

            <div className="bg-blue-50 rounded-lg p-6 mb-8 text-left">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                ¿Cómo funciona?
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">1.</span>
                  <span>Responderás aproximadamente <strong>20 preguntas</strong> de gramática, vocabulario y comprensión</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">2.</span>
                  <span>El test es <strong>adaptativo</strong>: si aciertas, las preguntas se vuelven más difíciles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">3.</span>
                  <span>Al finalizar, recibirás tu <strong>nivel CEFR oficial</strong> y recomendaciones personalizadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">4.</span>
                  <span>Duración estimada: <strong>10-15 minutos</strong></span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={startTest}
                className="px-8 py-4 text-lg font-semibold"
              >
                Comenzar Test
              </Button>
              
              <Button
                onClick={() => router.push('/')}
                variant="secondary"
                className="px-8 py-4 text-lg"
              >
                Volver al Inicio
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando pregunta...</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Pregunta {answeredQuestions.length + 1} de {maxQuestions}
            </span>
            <span className="text-sm font-medium text-gray-700">
              Nivel actual: <span className="text-blue-600">{currentLevel}</span>
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <Card className="p-8 mb-6">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                {currentQuestion.type === 'grammar' && '📚 Gramática'}
                {currentQuestion.type === 'vocabulary' && '📖 Vocabulario'}
                {currentQuestion.type === 'reading' && '📄 Comprensión'}
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                Nivel {currentQuestion.level}
              </span>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 leading-relaxed">
              {currentQuestion.question}
            </h2>
          </div>

          {/* Answer Options */}
          <div className="space-y-3 mb-6">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.correctAnswer;
              const showResult = showExplanation;

              let buttonClass = 'w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ';
              
              if (showResult) {
                if (isCorrect) {
                  buttonClass += 'border-green-500 bg-green-50 text-green-900';
                } else if (isSelected && !isCorrect) {
                  buttonClass += 'border-red-500 bg-red-50 text-red-900';
                } else {
                  buttonClass += 'border-gray-200 bg-gray-50 text-gray-500';
                }
              } else {
                buttonClass += isSelected
                  ? 'border-blue-500 bg-blue-50 text-blue-900 shadow-md'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50';
              }

              return (
                <button
                  key={index}
                  onClick={() => !showExplanation && handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={buttonClass}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="font-medium">{option}</span>
                    {showResult && isCorrect && (
                      <svg className="w-6 h-6 text-green-600 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                    {showResult && isSelected && !isCorrect && (
                      <svg className="w-6 h-6 text-red-600 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && currentQuestion.explanation && (
            <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
              <p className="text-sm font-semibold text-blue-900 mb-1">
                💡 Explicación:
              </p>
              <p className="text-sm text-blue-800">{currentQuestion.explanation}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            {!showExplanation ? (
              <Button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className="flex-1"
              >
                Confirmar Respuesta
              </Button>
            ) : (
              <Button onClick={handleNextQuestion} className="flex-1">
                {answeredQuestions.length >= maxQuestions ? 'Ver Resultados' : 'Siguiente Pregunta'}
              </Button>
            )}
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 text-center">
            <p className="text-sm text-gray-600 mb-1">Correctas</p>
            <p className="text-2xl font-bold text-green-600">
              {answers.filter(a => a.correct).length}
            </p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-sm text-gray-600 mb-1">Incorrectas</p>
            <p className="text-2xl font-bold text-red-600">
              {answers.filter(a => !a.correct).length}
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
