"use client";

import React from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md";

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
}) {
  const base =
    "inline-flex items-center justify-center rounded-[12px] font-extrabold transition disabled:cursor-not-allowed";

  const sizes: Record<Size, string> = {
    sm: "px-2.5 py-1.5 text-[12px]",
    md: "px-3 py-2 text-[13px]",
  };

  const variants: Record<Variant, string> = {
    primary:
      "bg-[var(--fe-primary)] text-white shadow-sm hover:brightness-95 disabled:bg-slate-300",
    secondary:
      "border border-slate-200 bg-white text-[var(--fe-ink)] hover:bg-slate-50",
    ghost:
      "bg-transparent text-[var(--fe-ink)] hover:bg-white border border-transparent hover:border-slate-200",
    danger:
      "border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100",
  };

  return (
    <button
      {...props}
      className={[base, sizes[size], variants[variant], className].join(" ")}
    />
  );
}
