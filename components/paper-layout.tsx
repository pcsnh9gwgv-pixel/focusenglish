import React from "react";

export function PaperLayout({
  title,
  subtitle,
  children,
}: {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      {(title || subtitle) && (
        <header style={{ padding: "4px 2px" }}>
          {title && (
            <h1 style={{ margin: 0, fontSize: 30, letterSpacing: "-0.02em" }}>
              {title}
            </h1>
          )}
          {subtitle && (
            <p style={{ margin: "8px 0 0", opacity: 0.85 }}>
              {subtitle}
            </p>
          )}
        </header>
      )}

      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <article className="fe-prose fe-paper">{children}</article>
      </div>
    </div>
  );
}
