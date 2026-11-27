"use client";
import { personal } from "@/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "28px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "16px",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "16px",
          fontWeight: 900,
          color: "var(--primary)",
          letterSpacing: "3px",
          textShadow: "0 0 var(--glow-size) var(--primary)",
        }}
      >
        KR<span style={{ color: "var(--secondary)" }}>.DEV</span>
      </div>

      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "var(--text-muted)",
          letterSpacing: "2px",
        }}
      >
        DESIGNED & BUILT BY {personal.name.toUpperCase()} © {year}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        {[
          { label: "GH", url: personal.social.github },
          { label: "IN", url: personal.social.linkedin },
        ].map((s) => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            style={{
              width: "32px",
              height: "32px",
              border: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "var(--primary)";
              el.style.color = "var(--primary)";
              el.style.boxShadow = "0 0 10px var(--border)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "var(--border)";
              el.style.color = "var(--text-muted)";
              el.style.boxShadow = "none";
            }}
          >
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
