import React from "react";

export function PhraseBank({
  title = "Phrase Bank",
  coreLabel = "Core (B1–B2)",
  proLabel = "Pro (B2–C1)",
  core = [],
  pro = [],
  note,
}: {
  title?: string;
  coreLabel?: string;
  proLabel?: string;
  core: string[];
  pro: string[];
  note?: string;
}) {
  return (
    <section
      style={{
        border: "1px solid var(--fe-border)",
        borderRadius: "var(--fe-radius)",
        background: "white",
        padding: 16,
        margin: "18px 0",
        boxShadow: "var(--fe-shadow)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline" }}>
        <h3 style={{ margin: 0, color: "var(--fe-ink)" }}>{title}</h3>
        <span
          style={{
            fontSize: 12,
            padding: "4px 10px",
            borderRadius: 999,
            border: "1px solid var(--fe-border)",
            background: "white",
            color: "var(--fe-slate)",
            fontWeight: 800,
          }}
        >
          Recurso
        </span>
      </div>

      {note && (
        <p style={{ margin: "8px 0 0", color: "var(--fe-slate)", lineHeight: 1.6 }}>
          {note}
        </p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 12,
          marginTop: 12,
        }}
      >
        <div
          style={{
            background: "#FFFBF5",
            border: "1px solid var(--fe-border)",
            borderRadius: "var(--fe-radius-sm)",
            padding: 12,
          }}
        >
          <div style={{ fontWeight: 900, color: "var(--fe-ink)", marginBottom: 6 }}>{coreLabel}</div>
          <ul style={{ margin: 0, paddingLeft: 18, color: "var(--fe-ink)", lineHeight: 1.7 }}>
            {core.map((p) => (
              <li key={p} style={{ margin: "6px 0" }}>{p}</li>
            ))}
          </ul>
        </div>

        <div
          style={{
            background: "#F8FAFF",
            border: "1px solid var(--fe-border)",
            borderRadius: "var(--fe-radius-sm)",
            padding: 12,
          }}
        >
          <div style={{ fontWeight: 900, color: "var(--fe-ink)", marginBottom: 6 }}>{proLabel}</div>
          <ul style={{ margin: 0, paddingLeft: 18, color: "var(--fe-ink)", lineHeight: 1.7 }}>
            {pro.map((p) => (
              <li key={p} style={{ margin: "6px 0" }}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
