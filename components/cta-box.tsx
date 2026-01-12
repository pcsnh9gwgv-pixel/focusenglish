import Link from "next/link";

type CTA = { label: string; href: string };

export function CTABox({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description?: string;
  primary: CTA;
  secondary?: CTA;
}) {
  return (
    <section
      style={{
        border: "1px solid #E5E7EB",
        borderRadius: 16,
        padding: 16,
        margin: "16px 0",
        background: "#F8FAFC",
      }}
    >
      <h3 style={{ margin: 0, color: "#0B0F17" }}>{title}</h3>
      {description && (
        <p style={{ color: "#334155", marginTop: 8, marginBottom: 14 }}>
          {description}
        </p>
      )}

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link
          href={primary.href}
          style={{
            padding: "10px 12px",
            background: "#4F46E5",
            color: "white",
            borderRadius: 12,
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          {primary.label}
        </Link>

        {secondary?.href && (
          <Link
            href={secondary.href}
            style={{
              padding: "10px 12px",
              border: "1px solid #CBD5E1",
              color: "#0B0F17",
              borderRadius: 12,
              textDecoration: "none",
              fontWeight: 600,
              background: "white",
            }}
          >
            {secondary.label}
          </Link>
        )}
      </div>
    </section>
  );
}
