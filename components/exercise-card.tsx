import React from "react";

export function ExerciseCard({
  title,
  prompt,
  children,
  footer,
  tone = "neutral",
  meta,
}: {
  title?: string;
  prompt?: string;
  meta?: string; // ej: "Ejercicio · 2–3 min"
  children: React.ReactNode;
  footer?: React.ReactNode;
  tone?: "neutral" | "success" | "danger";
}) {
  const border =
    tone === "success" ? "1px solid var(--fe-success)" :
    tone === "danger"  ? "1px solid var(--fe-danger)" :
    "1px solid var(--fe-border)";

  const bg =
    tone === "success" ? "#ECFDF5" :
    tone === "danger"  ? "#FEF2F2" :
    "white";

  return (
    <section
      style={{
        border,
        background: bg,
        borderRadius: "var(--fe-radius)",
        padding: 16,
        margin: "16px 0",
        boxShadow: "var(--fe-shadow)",
      }}
    >
      {(title || meta) && (
        <div style={{ display: "flex", gap: 10, alignItems: "baseline", justifyContent: "space-between" }}>
          {title && <h3 style={{ margin: 0, color: "var(--fe-ink)" }}>{title}</h3>}
          {meta && (
            <span style={{ fontSize: 12, color: "var(--fe-slate)", border: "1px solid var(--fe-border)", background: "white", padding: "4px 10px", borderRadius: 999 }}>
              {meta}
            </span>
          )}
        </div>
      )}

      {prompt && <p style={{ marginTop: 8, marginBottom: 0, color: "var(--fe-slate)" }}>{prompt}</p>}

      <div style={{ marginTop: 12 }}>{children}</div>

      {footer && <div style={{ marginTop: 14 }}>{footer}</div>}
    </section>
  );
}
