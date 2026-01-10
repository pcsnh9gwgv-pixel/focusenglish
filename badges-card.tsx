"use client";

import { computeEmailingBadges } from "@/lib/badges";

export function BadgesCard({ completedSlugs }: { completedSlugs: string[] }) {
  const badges = computeEmailingBadges(completedSlugs);

  return (
    <section
      style={{
        border: "1px solid var(--fe-border)",
        borderRadius: "var(--fe-radius)",
        padding: 16,
        background: "white",
        boxShadow: "var(--fe-shadow)",
        marginBottom: 14,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline" }}>
        <h2 style={{ margin: 0, fontSize: 18 }}>Insignias</h2>
        <span
          style={{
            fontSize: 12,
            padding: "4px 10px",
            borderRadius: 999,
            border: "1px solid var(--fe-border)",
            color: "var(--fe-slate)",
            background: "white",
            fontWeight: 800,
          }}
        >
          MVP
        </span>
      </div>

      <p style={{ color: "var(--fe-slate)", marginTop: 8, marginBottom: 0 }}>
        Se desbloquean al completar lecciones (sin scoring todavía).
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12, marginTop: 12 }}>
        {badges.map((b) => (
          <div
            key={b.id}
            style={{
              border: `1px solid ${b.earned ? "var(--fe-success)" : "var(--fe-border)"}`,
              background: b.earned ? "#ECFDF5" : "#FFFBF5",
              borderRadius: "var(--fe-radius-sm)",
              padding: 12,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "baseline" }}>
              <div style={{ fontWeight: 900, color: "var(--fe-ink)" }}>{b.name}</div>
              <span
                style={{
                  fontSize: 12,
                  padding: "4px 10px",
                  borderRadius: 999,
                  border: `1px solid ${b.earned ? "var(--fe-success)" : "var(--fe-border)"}`,
                  background: b.earned ? "#DCFCE7" : "white",
                  fontWeight: 800,
                  color: "var(--fe-ink)",
                }}
              >
                {b.earned ? "Conseguida" : "Bloqueada"}
              </span>
            </div>

            <div style={{ color: "var(--fe-slate)", marginTop: 6, lineHeight: 1.6 }}>{b.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
