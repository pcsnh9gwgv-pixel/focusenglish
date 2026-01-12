"use client";

import { useMemo, useState } from "react";
import { ExerciseCard } from "@/components/exercise-card";

type Item = { id: string; text: string };

export function Reorder({
  id,
  title,
  prompt,
  items,
  correctOrder,
}: {
  id: string;
  title?: string;
  prompt?: string;
  items: Item[];
  correctOrder: string[];
}) {
  const [order, setOrder] = useState(items.map((i) => i.id));
  const [checked, setChecked] = useState(false);

  const byId = useMemo(() => Object.fromEntries(items.map((i) => [i.id, i])), [items]);

  const isCorrect = useMemo(() => {
    if (!checked) return null;
    return order.join("|") === correctOrder.join("|");
  }, [checked, order, correctOrder]);

  const tone = !checked ? "neutral" : isCorrect ? "success" : "danger";

  function move(idx: number, dir: -1 | 1) {
    const newIdx = idx + dir;
    if (newIdx < 0 || newIdx >= order.length) return;
    const copy = [...order];
    [copy[idx], copy[newIdx]] = [copy[newIdx], copy[idx]];
    setOrder(copy);
    setChecked(false);
  }

  return (
    <ExerciseCard
      title={title}
      prompt={prompt}
      meta="Reorder · 3–4 min"
      tone={tone as any}
      footer={
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
          <button
            type="button"
            onClick={() => setChecked(true)}
            style={{
              padding: "10px 12px",
              borderRadius: "var(--fe-radius-sm)",
              background: "var(--fe-primary)",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontWeight: 900,
            }}
          >
            Comprobar
          </button>

          <button
            type="button"
            onClick={() => {
              setOrder(items.map((i) => i.id));
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
                background: isCorrect ? "#DCFCE7" : "#FEE2E2",
                border: isCorrect ? "1px solid var(--fe-success)" : "1px solid var(--fe-danger)",
                color: "var(--fe-ink)",
                fontWeight: 800,
              }}
            >
              {isCorrect ? "Correcto" : "Revisa el orden"}
            </span>
          )}
        </div>
      }
    >
      <ol style={{ paddingLeft: 18, display: "grid", gap: 10, margin: 0 }}>
        {order.map((itemId, idx) => (
          <li key={itemId}>
            <div
              style={{
                border: "1px solid #CBD5E1",
                borderRadius: "var(--fe-radius-sm)",
                padding: 12,
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
                justifyContent: "space-between",
                background: "white",
              }}
            >
              <div style={{ color: "var(--fe-ink)", lineHeight: 1.4, flex: 1 }}>
                {byId[itemId]?.text}
              </div>

              <div style={{ display: "grid", gap: 6 }}>
                <button
                  type="button"
                  onClick={() => move(idx, -1)}
                  aria-label="Subir"
                  style={{
                    padding: "6px 10px",
                    borderRadius: 10,
                    border: "1px solid var(--fe-border)",
                    background: "white",
                    cursor: "pointer",
                    fontWeight: 800,
                  }}
                >
                  ↑
                </button>
                <button
                  type="button"
                  onClick={() => move(idx, 1)}
                  aria-label="Bajar"
                  style={{
                    padding: "6px 10px",
                    borderRadius: 10,
                    border: "1px solid var(--fe-border)",
                    background: "white",
                    cursor: "pointer",
                    fontWeight: 800,
                  }}
                >
                  ↓
                </button>
              </div>
            </div>
          </li>
        ))}
      </ol>

      {checked && !isCorrect && (
        <div style={{ marginTop: 12, color: "var(--fe-slate)" }}>
          <strong style={{ color: "var(--fe-ink)" }}>Pista:</strong>{" "}
          piensa en <code>Context → Purpose → Next step</code>.
        </div>
      )}
    </ExerciseCard>
  );
}
