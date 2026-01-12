import React from "react";

export function Card({
  title,
  right,
  children,
  className = "",
}: {
  title?: string;
  right?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={[
        "rounded-[18px] border border-slate-200/80 bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.04)]",
        className,
      ].join(" ")}
    >
      {title ? (
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-[14px] font-black tracking-[-0.01em] text-[var(--fe-ink)]">
            {title}
          </h2>
          {right}
        </div>
      ) : null}

      <div className={title ? "mt-3" : ""}>{children}</div>
    </section>
  );
}
