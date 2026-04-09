"use client";

import { experience } from "@/data";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{
        padding: "100px 40px",
        maxWidth: "1180px",
        margin: "0 auto",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div style={{ marginBottom: "60px" }}>
        <div
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
      <div style={{ position: "relative", maxWidth: "760px" }}>
        {/* Vertical line */}
        <div
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
