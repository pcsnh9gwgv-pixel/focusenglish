"use client";

import { useEffect, useState } from "react";
import { loadProgress } from "@/lib/progress";

export function ProgressChips() {
  const [streak, setStreak] = useState(0);
  const [sessions, setSessions] = useState(0);

  useEffect(() => {
    const s = loadProgress();
    setStreak(s.streak);
    setSessions(s.sessionsThisWeek);
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
      <span style={{ fontSize: 12, padding: "6px 10px", borderRadius: 999, border: "1px solid #CBD5E1", background: "white" }}>
        Racha: <strong>{streak}</strong>
      </span>
      <span style={{ fontSize: 12, padding: "6px 10px", borderRadius: 999, border: "1px solid #CBD5E1", background: "white" }}>
        Objetivo semanal: <strong>{sessions}/5</strong>
      </span>
    </div>
  );
}
