"use client";

import Link from "next/link";
import { BadgesCard } from "@/components/app/badges-card";
import { useEffect, useMemo, useState } from "react";
import { emailingWeek1 } from "@/lib/emailing-week1";
import { loadLessonProgress } from "@/lib/lesson-progress";

export function EmailingRouteDashboard() {
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
  const refresh = () => setCompleted(loadLessonProgress().completedSlugs);
  refresh();
  const onVis = () => { if (document.visibilityState === "visible") refresh(); };
  window.addEventListener("focus", refresh);
  document.addEventListener("visibilitychange", onVis);
  return () => {
    window.removeEventListener("focus", refresh);
    document.removeEventListener("visibilitychange", onVis);
  };
}, []);

  const total = emailingWeek1.length;
  const doneCount = completed.filter((s) => emailingWeek1.some((l) => l.slug === s)).length;

  const nextLesson = useMemo(() => {
    const firstPending = emailingWeek1.find((l) => !completed.includes(l.slug));
    return firstPending ?? emailingWeek1[0];
  }, [completed]);

  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: "32px 16px" }}>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ marginBottom: 6 }}>Ruta Emailing</h1>
        <p style={{ color: "var(--fe-slate)", marginTop: 0 }}>
          Semana 1 · Core (B1–B2) + Pro (B2–C1) · Progreso local (MVP)
        </p>
      </header>

      {/* Hoy (15 min) */}
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
          <h2 style={{ margin: 0, fontSize: 18 }}>Hoy (15 min)</h2>
          <span style={{ fontSize: 12, padding: "4px 10px", borderRadius: 999, border: "1px solid var(--fe-border)", color: "var(--fe-slate)" }}>
            Recomendado
          </span>
        </div>

        <p style={{ color: "var(--fe-slate)", marginTop: 8 }}>
          Siguiente lección sugerida:
          <strong style={{ color: "var(--fe-ink)" }}> {nextLesson.title}</strong>
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 10 }}>
          <Link
            href={`/app/lecciones/${nextLesson.slug}`}
            style={{
              padding: "10px 12px",
              background: "var(--fe-primary)",
              color: "white",
              borderRadius: "var(--fe-radius-sm)",
              textDecoration: "none",
              fontWeight: 900,
            }}
          >
            Empezar →
          </Link>

          <Link
            href="/leccion-de-muestra"
            style={{
              padding: "10px 12px",
              border: "1px solid var(--fe-border)",
              borderRadius: "var(--fe-radius-sm)",
              background: "white",
              textDecoration: "none",
              fontWeight: 900,
              color: "var(--fe-ink)",
            }}
          >
            Ver lección de muestra
          </Link>
        </div>
      </section>

      {/* Progreso */}
      <section
        style={{
          border: "1px solid var(--fe-border)",
          borderRadius: "var(--fe-radius)",
          padding: 16,
          background: "#FFFBF5",
          boxShadow: "var(--fe-shadow)",
          marginBottom: 14,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline" }}>
          <h2 style={{ margin: 0, fontSize: 18 }}>Progreso (Semana 1)</h2>
          <span style={{ fontSize: 12, padding: "4px 10px", borderRadius: 999, border: "1px solid var(--fe-border)", color: "var(--fe-slate)", background: "white" }}>
            {doneCount}/{total} completadas
          </span>
        </div>

        <div style={{ height: 10, background: "white", border: "1px solid var(--fe-border)", borderRadius: 999, marginTop: 10 }}>
          <div
            style={{
              height: "100%",
              width: `${Math.round((doneCount / Math.max(total, 1)) * 100)}%`,
              background: "var(--fe-primary)",
              borderRadius: 999,
            }}
          />
        </div>

        <p style={{ color: "var(--fe-slate)", marginTop: 10, marginBottom: 0 }}>
          (MVP) La completitud se guardará en tu navegador. Luego lo conectaremos a cuenta/Stripe.
        </p>
      </section>
    <BadgesCard completedSlugs={completed} />
      {/* Lista de lecciones */}
      <section
        style={{
          border: "1px solid var(--fe-border)",
          borderRadius: "var(--fe-radius)",
          padding: 16,
          background: "white",
          boxShadow: "var(--fe-shadow)",
        }}
      >
        <h2 style={{ marginTop: 0, fontSize: 18 }}>Lecciones</h2>

        <ol style={{ paddingLeft: 18, margin: 0, display: "grid", gap: 10 }}>
          {emailingWeek1
            .slice()
            .sort((a, b) => a.order - b.order)
            .map((l) => {
              const isDone = completed.includes(l.slug);
              return (
                <li key={l.slug}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline" }}>
                    <Link href={`/app/lecciones/${l.slug}`} style={{ fontWeight: 900, color: "var(--fe-ink)", textDecoration: "none" }}>
                      {l.title}
                    </Link>

                    <span
                      style={{
                        fontSize: 12,
                        padding: "4px 10px",
                        borderRadius: 999,
                        border: `1px solid ${isDone ? "var(--fe-success)" : "var(--fe-border)"}`,
                        background: isDone ? "#DCFCE7" : "white",
                        color: "var(--fe-ink)",
                        fontWeight: 800,
                      }}
                    >
                      {isDone ? "Completada" : "Pendiente"}
                    </span>
                  </div>
                </li>
              );
            })}
        </ol>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 14 }}>
          <Link href="/diagnostico" style={{ color: "var(--fe-primary)", fontWeight: 900 }}>
            Hacer diagnóstico →
          </Link>
          <Link href="/precios" style={{ color: "var(--fe-primary)", fontWeight: 900 }}>
            Ver precios →
          </Link>
        </div>
      </section>
    </main>
  );
}
