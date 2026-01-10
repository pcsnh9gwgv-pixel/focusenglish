"use client";

import { useMemo, useState } from "react";
import { ExerciseCard } from "@/components/exercises/exercise-card";

type Option = {
  id: string;
  label?: string;
  text: string;
  isCorrect: boolean;
  feedback?: string;
};

export function ToneChoice({
  id,
  title,
  prompt,
  options,
}: {
  id: string;
  title?: string;
  prompt: string;
  options: Option[];
}) {
  const [picked, setPicked] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  const selected = useMemo(
    () => options.find((o) => o.id === picked) ?? null,
    [picked, options]
  );

  const tone = !checked || !selected ? "neutral" : selected.isCorrect ? "success" : "danger";

  const feedbackTitle = !checked || !selected
    ? ""
    : selected.isCorrect
    ? "Correcto"
    : "Mejorable";

  return (
    <ExerciseCard
      title={title}
      prompt={prompt}
      meta="ToneChoice · 2–3 min"
      tone={tone as any}
      footer={
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
          <button
            type="button"
            disabled={!picked}
            onClick={() => setChecked(true)}
            style={{
              padding: "10px 12px",
              borderRadius: "var(--fe-radius-sm)",
              background: !picked ? "#CBD5E1" : "var(--fe-primary)",
              color: "white",
              border: "none",
              cursor: !picked ? "not-allowed" : "pointer",
              fontWeight: 900,
            }}
          >
            Comprobar
          </button>

          <button
            type="button"
            onClick={() => {
              setPicked(null);
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

          {checked && selected && (
            <span
              style={{
                marginLeft: 6,
                fontSize: 12,
                padding: "6px 10px",
                borderRadius: 999,
                background: selected.isCorrect ? "#DCFCE7" : "#FEE2E2",
                border: selected.isCorrect ? "1px solid var(--fe-success)" : "1px solid var(--fe-danger)",
                color: "var(--fe-ink)",
                fontWeight: 800,
              }}
            >
              {feedbackTitle}
            </span>
          )}
        </div>
      }
    >
      <div style={{ display: "grid", gap: 10 }}>
        {options.map((o) => {
          const isSelected = picked === o.id;
          const outline = isSelected ? "2px solid var(--fe-primary)" : "1px solid #CBD5E1";

          return (
            <button
              key={o.id}
              type="button"
              onClick={() => {
                setPicked(o.id);
                setChecked(false);
              }}
              style={{
                textAlign: "left",
                padding: "12px 12px",
                borderRadius: "var(--fe-radius-sm)",
                border: outline,
                background: "white",
                cursor: "pointer",
              }}
            >
              <div style={{ display: "flex", gap: 10, alignItems: "baseline" }}>
                <span style={{ fontWeight: 900, color: "var(--fe-ink)" }}>{o.label ?? o.id}</span>
                <span style={{ color: "var(--fe-slate)" }}>{o.text}</span>
              </div>
            </button>
          );
        })}
      </div>

      {checked && selected?.feedback && (
        <div style={{ marginTop: 12, color: "var(--fe-slate)" }}>
          <div style={{ fontWeight: 900, color: "var(--fe-ink)" }}>{feedbackTitle}</div>
          <div style={{ marginTop: 6 }}>{selected.feedback}</div>
        </div>
      )}
    </ExerciseCard>
  );
}
