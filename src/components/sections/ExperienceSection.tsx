"use client";

import { experience } from "@/data";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="exp-section"
      style={{
        padding: "100px 40px",
        maxWidth: "1180px",
        margin: "0 auto",
        position: "relative",
        zIndex: 2,
      }}
    >
      {/* RESPONSIVE STYLES */}
      <style>{`
        .exp-item > * { min-width: 0; }

        /* Laptop / small desktop */
        @media (max-width: 1100px) {
          .exp-section { padding: 90px 32px !important; }
        }

        /* Tablet */
        @media (max-width: 900px) {
          .exp-section { padding: 80px 24px !important; }
          .exp-header { margin-bottom: 48px !important; }
          .exp-title-line { width: 80px !important; }
          .exp-timeline { max-width: 100% !important; }
          .exp-item { gap: 24px !important; margin-bottom: 40px !important; }
          .exp-card { padding: 22px 22px !important; }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .exp-section { padding: 64px 16px !important; }
          .exp-header { margin-bottom: 36px !important; }
          .exp-label { font-size: 10px !important; letter-spacing: 3px !important; }

          /* Timeline line aur dot chhote */
          .exp-line { left: 11px !important; }
          .exp-dot {
            width: 24px !important;
            height: 24px !important;
          }
          .exp-item { gap: 14px !important; margin-bottom: 32px !important; }

          .exp-card { padding: 18px 16px !important; }
          .exp-top { flex-direction: column !important; gap: 10px !important; }
          .exp-role { font-size: 15px !important; }
          .exp-period { white-space: normal !important; }
          .exp-desc { font-size: 13.5px !important; line-height: 1.65 !important; }
        }

        /* Small phones */
        @media (max-width: 380px) {
          .exp-section { padding: 56px 12px !important; }
          .exp-item { gap: 10px !important; }
          .exp-card { padding: 16px 12px !important; }
          .exp-dot {
            width: 20px !important;
            height: 20px !important;
          }
          .exp-line { left: 9px !important; }
        }
      `}</style>

      <div className="exp-header" style={{ marginBottom: "60px" }}>
        <div
          className="exp-label"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--primary)",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          // 04 — Journey
        </div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3vw, 38px)",
            fontWeight: 700,
            color: "var(--text)",
          }}
        >
          Experience
          <div
            className="exp-title-line"
            style={{
              height: "2px",
              width: "55%",
              background: "linear-gradient(90deg, var(--primary), transparent)",
              marginTop: "10px",
            }}
          />
        </h2>
      </div>

      {/* Timeline */}
      <div
        className="exp-timeline"
        style={{ position: "relative", maxWidth: "760px" }}
      >
        {/* Vertical line */}
        <div
          className="exp-line"
          style={{
            position: "absolute",
            left: "16px",
            top: "10px",
            bottom: "10px",
            width: "1px",
            background:
              "linear-gradient(var(--primary), var(--tertiary), transparent)",
            opacity: 0.3,
          }}
        />

        {experience.map((exp, i) => (
          <div
            key={i}
            className="exp-item"
            style={{
              display: "flex",
              gap: "32px",
              marginBottom: "48px",
              animation: `fadeInLeft 0.6s ${i * 150}ms both`,
            }}
          >
            {/* Dot */}
            <div
              style={{
                flexShrink: 0,
                marginTop: "4px",
                position: "relative",
              }}
            >
              <div
                className="exp-dot"
                style={{
                  width: "33px",
                  height: "33px",
                  border: `1px solid ${exp.current ? "var(--primary)" : "var(--border)"}`,
                  background: exp.current
                    ? "var(--grad-btn)"
                    : "var(--bg-card)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {exp.current && (
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      background: "var(--primary)",
                      animation: "pulse-dot 2s infinite",
                    }}
                  />
                )}
              </div>
            </div>

            {/* Content */}
            <div
              className="exp-card"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                padding: "24px 28px",
                flex: 1,
                position: "relative",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "var(--border-glow)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "var(--border)")
              }
            >
              <div
                className="exp-top"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "12px",
                }}
              >
                <div>
                  <h3
                    className="exp-role"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "var(--text)",
                      letterSpacing: "1px",
                    }}
                  >
                    {exp.role}
                  </h3>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      color: "var(--primary)",
                      marginTop: "4px",
                      letterSpacing: "1px",
                    }}
                  >
                    {exp.company}
                  </div>
                </div>
                <div
                  className="exp-period"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    letterSpacing: "1px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--border)",
                    padding: "4px 12px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {exp.period}
                </div>
              </div>

              <p
                className="exp-desc"
                style={{
                  fontSize: "14px",
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  marginBottom: "16px",
                }}
              >
                {exp.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {exp.skills.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--secondary)",
                      background: "rgba(255,0,110,0.05)",
                      border: "1px solid rgba(255,0,110,0.2)",
                      padding: "2px 8px",
                      letterSpacing: "1px",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
