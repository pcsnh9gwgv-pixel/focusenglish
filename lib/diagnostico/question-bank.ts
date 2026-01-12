// Question bank for diagnostic test

export type CefrLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export interface Question {
  id: string;
  level: CefrLevel;
  text: string;
  options: string[];
  correctIndex: number;
}

export const questions: Question[] = [
  {
    id: "a1-1",
    level: "A1",
    text: "Hello, my name ___ John.",
    options: ["is", "am", "are", "be"],
    correctIndex: 1,
  },
  {
    id: "a2-1",
    level: "A2",
    text: "I ___ to the gym yesterday.",
    options: ["go", "went", "going", "goes"],
    correctIndex: 1,
  },
  // Add more questions for complete diagnostic test
];
