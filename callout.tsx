import React from "react";

export function Callout({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <aside
      style={{
        background: "#FFFBF5",
        border: "1px solid #E5E7EB",
        borderRadius: 16,
        padding: 16,
        margin: "16px 0",
      }}
    >
      {title && (
        <div style={{ fontWeight: 700, marginBottom: 8, color: "#0B0F17" }}>
          {title}
        </div>
      )}
      <div style={{ color: "#0B0F17", lineHeight: 1.6 }}>{children}</div>
    </aside>
  );
}
