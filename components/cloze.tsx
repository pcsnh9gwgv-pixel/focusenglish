"use client";

import { useMemo, useState } from "react";
import { ExerciseCard } from "@/components/exercise-card";

type Blank = {
  blankId: string;
  options: string[];
  correct: string;
  feedback?: string;
};

export function Cloze({
  id,
  title,
  prompt,
  text,
  blanks,
}: {
  id: string;
  title?: string;
  prompt?: string;
  text: string; // separa huecos con "__"
  blanks: Blank[];
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const parts = useMemo(() => text.split("__"), [text]);

  const score = useMemo(() => {
    const total = blanks.length;
    const correctCount = blanks.filter((b) => answers[b.blankId] === b.correct).length;
    return { total, correctCount };
  }, [answers, blanks]);

  const tone =
    !checked ? "neutral" : score.correctCount === score.total ? "success" : "danger";

  const canCheck = blanks.every((b) => Boolean(answers[b.blankId]));

  return (
    <ExerciseCard
      title={title}
      prompt={prompt}
      meta="Cloze · 3–5 min"
      tone={tone as any}
      footer={
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
          <button
            type="button"
            disabled={!canCheck}
            onClick={() => setChecked(true)}
            style={{
              padding: "10px 12px",
              borderRadius: "var(--fe-radius-sm)",
              background: !canCheck ? "#CBD5E1" : "var(--fe-primary)",
              color: "white",
              border: "none",
              cursor: !canCheck ? "not-allowed" : "pointer",
              fontWeight: 900,
            }}
          >
            Comprobar
          </button>

          <button
            type="button"
            onClick={() => {
              setAnswers({});
              setChecked(false);
            }}
            style={{
              padding: "10px 12px",
              borderRadius: "var(--fe-radius-sm)",
              background: "white",
              border: "1px solid var(--fe-border)",
              cursor: "pointer",
              fontWeight: 900,
              color: "var(--fe-ink)",
            }}
          >
            Reiniciar
          </button>

          {checked && (
            <span
              style={{
                marginLeft: 6,
                fontSize: 12,
                padding: "6px 10px",
                borderRadius: 999,
                background: score.correctCount === score.total ? "#DCFCE7" : "#FEE2E2",
                border: score.correctCount === score.total ? "1px solid var(--fe-success)" : "1px solid var(--fe-danger)",
                color: "var(--fe-ink)",
                fontWeight: 800,
              }}
            >
              Resultado: {score.correctCount}/{score.total}
            </span>
          )}
        </div>
      }
    >
      <div style={{ lineHeight: 2, color: "var(--fe-ink)" }}>
        {parts.map((chunk, idx) => {
          const blank = blanks[idx];
          return (
            <span key={idx}>
              {chunk}
              {blank ? (
                <select
                  value={answers[blank.blankId] ?? ""}
                  onChange={(e) =>
                    setAnswers((prev) => ({ ...prev, [blank.blankId]: e.target.value }))
                  }
                  style={{
                    margin: "0 6px",
                    padding: "8px 10px",
                    borderRadius: 12,
                    border: checked
                      ? answers[blank.blankId] === blank.correct
                        ? "2px solid var(--fe-success)"
                        : "2px solid var(--fe-danger)"
                      : "1px solid #CBD5E1",
                    background: "white",
                    color: "var(--fe-ink)",
                  }}
                >
                  <option value="" disabled>
                    —
                  </option>
                  {blank.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : null}
            </span>
          );
        })}
      </div>

      {checked && (
        <div style={{ marginTop: 12 }}>
          <div style={{ fontWeight: 900, color: "var(--fe-ink)" }}>Feedback</div>
          <ul style={{ margin: "8px 0 0", paddingLeft: 18, color: "var(--fe-slate)", lineHeight: 1.6 }}>
            {blanks.map((b) => {
              const ok = answers[b.blankId] === b.correct;
              return (
                <li key={b.blankId} style={{ margin: "8px 0" }}>
                  <div>
                    <strong style={{ color: ok ? "var(--fe-success)" : "var(--fe-danger)" }}>
                      {ok ? "✓" : "✗"}
                    </strong>{" "}
                    Hueco {b.blankId}:{" "}
                    {ok ? "Correcto" : `Correcto: ${b.correct}`}
                  </div>
                  {!ok && b.feedback && <div style={{ marginTop: 4 }}>{b.feedback}</div>}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </ExerciseCard>
  );
}
