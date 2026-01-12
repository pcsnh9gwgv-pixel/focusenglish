// Diagnostic test adaptive question picker

export type CefrLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export interface Question {
  id: string;
  level: CefrLevel;
  question: string;
  options: string[];
  correctAnswer: number;
}

const questionBank: Question[] = [
  {
    id: "q1",
    level: "A1",
    question: "Hello, my name ___ John.",
    options: ["is", "am", "are", "be"],
    correctAnswer: 1,
  },
  // Add more questions for each level
];

export function pickQuestion(level: CefrLevel, answeredIds: string[]): Question | null {
  const availableQuestions = questionBank.filter(
    (q) => q.level === level && !answeredIds.includes(q.id)
  );

  if (availableQuestions.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  return availableQuestions[randomIndex];
}
