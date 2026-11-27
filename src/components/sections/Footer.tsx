"use client";
import { personal } from "@/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="footer-root"
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
      {/* RESPONSIVE STYLES */}
      <style>{`
        /* Tablet */
        @media (max-width: 900px) {
          .footer-root { padding: 26px 24px !important; }
        }

        /* Mobile: teeno cheezein center mein upar neeche */
        @media (max-width: 600px) {
          .footer-root {
            flex-direction: column !important;
            justify-content: center !important;
            text-align: center !important;
            padding: 28px 16px !important;
            gap: 18px !important;
          }
          .footer-credit {
            font-size: 10px !important;
            letter-spacing: 1.5px !important;
            line-height: 1.7 !important;
          }
          .footer-social { justify-content: center !important; }
        }

        /* Small phones */
        @media (max-width: 380px) {
          .footer-root { padding: 24px 12px !important; }
          .footer-credit {
            font-size: 9px !important;
            letter-spacing: 1px !important;
          }
        }
      `}</style>

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
        className="footer-credit"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "var(--text-muted)",
          letterSpacing: "2px",
        }}
      >
        DESIGNED & BUILT BY {personal.name.toUpperCase()} © {year}
      </div>

      <div className="footer-social" style={{ display: "flex", gap: "10px" }}>
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
