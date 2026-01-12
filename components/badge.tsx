import React from "react";

type Tone = "ok" | "locked" | "active" | "pending" | "neutral";

export function Badge({
  tone = "neutral",
  children,
  className = "",
}: {
  tone?: Tone;
  children: React.ReactNode;
  className?: string;
}) {
  const base = "rounded-full px-2 py-0.5 text-[11px] font-extrabold";

  const tones: Record<Tone, string> = {
    ok: "bg-emerald-50 text-emerald-700",
    locked: "bg-slate-200/70 text-slate-600",
    active: "bg-emerald-50 text-emerald-700",
    pending: "bg-amber-50 text-amber-700",
    neutral: "bg-slate-200/70 text-slate-700",
  };

  return <span className={[base, tones[tone], className].join(" ")}>{children}</span>;
}
