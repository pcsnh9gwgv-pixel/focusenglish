import { NextResponse } from "next/server";
import { pickQuestion } from "@/lib/diagnostico/adaptive";
import type { CefrLevel } from "@/lib/diagnostico/question-bank";

type Session = {
  usedIds: Set<string>;
  currentLevel: CefrLevel;
  answers: { level: CefrLevel; correct: boolean }[];
  step: number;
};

const SESSIONS = (globalThis as any).__DIAG_SESSIONS__ ?? new Map<string, Session>();
(globalThis as any).__DIAG_SESSIONS__ = SESSIONS;

function newId() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export async function POST() {
  const testId = newId();

  const session: Session = {
    usedIds: new Set(),
    currentLevel: "B1",
    answers: [],
    step: 1,
  };

  const q = pickQuestion(session.currentLevel, session.usedIds);
  session.usedIds.add(q.id);
  SESSIONS.set(testId, session);

  return NextResponse.json({
    testId,
    question: {
      id: q.id,
      prompt: q.prompt,
      options: q.options,
      level: q.level,
    },
  });
}
