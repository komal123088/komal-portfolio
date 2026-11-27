"use client";

import { useState } from "react";
import { projects } from "@/data";

type BadgeColor = "primary" | "secondary" | "tertiary";

const colorMap: Record<BadgeColor, string> = {
  primary: "var(--primary)",
  secondary: "var(--secondary)",
  tertiary: "var(--tertiary)",
};

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const accentColor = colorMap[project.badgeColor];

  return (
    <div
      className="proj-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--bg-card)",
        border: `1px solid ${hovered ? "var(--border-glow)" : "var(--border)"}`,
        padding: "28px",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered ? "0 16px 50px rgba(0,0,0,0.35)" : "none",
        animation: `fadeInUp 0.6s ${index * 100 + 100}ms both`,
        cursor: "default",
      }}
    >
      {/* Hover scan line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "-100%",
          width: "100%",
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
          transition: "left 0.5s",
          ...(hovered ? { left: "100%" } : {}),
        }}
      />

      {/* Project ID */}
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: `${accentColor}55`,
          letterSpacing: "3px",
          marginBottom: "10px",
        }}
      >
        PROJECT_{project.id}
      </div>

      {/* Badge */}
      <div
        style={{
          display: "inline-block",
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          padding: "3px 12px",
          border: `1px solid ${accentColor}55`,
          color: accentColor,
          background: `${accentColor}0d`,
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginBottom: "14px",
        }}
      >
        {project.type}
      </div>

      {/* Title */}
      <h3
        className="proj-card-title"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "17px",
          fontWeight: 700,
          color: "var(--text)",
          marginBottom: "10px",
          lineHeight: 1.3,
        }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        className="proj-card-desc"
        style={{
          fontSize: "14px",
          color: "var(--text-muted)",
          lineHeight: 1.65,
          marginBottom: "20px",
        }}
      >
        {project.description}
      </p>

      {/* Stack tags */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
          marginBottom: "20px",
        }}
      >
        {project.stack.map((s) => (
          <span
            key={s}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-muted)",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "3px 8px",
              letterSpacing: "1px",
            }}
          >
            {s}
          </span>
        ))}
      </div>

      {/* Links */}
      <div
        className="proj-links"
        style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
      >
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "2px",
            color: accentColor,
            textDecoration: "none",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          ↗ Live Demo
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "2px",
            color: "var(--text-muted)",
            textDecoration: "none",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          ⌥ GitHub
        </a>
      </div>
    </div>
  );
}

function FeaturedProject({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="proj-featured"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: "span 2",
        background: "var(--grad-card)",
        border: `1px solid ${hovered ? "rgba(123,0,255,0.6)" : "rgba(123,0,255,0.25)"}`,
        padding: "36px",
        transition: "all 0.3s",
        boxShadow: hovered ? "0 16px 50px rgba(123,0,255,0.12)" : "none",
        position: "relative",
        overflow: "hidden",
        animation: "fadeInUp 0.6s 0ms both",
      }}
    >
      {/* Corner decorations */}
      {(["tl", "tr", "bl", "br"] as const).map((pos) => (
        <div
          key={pos}
          style={{
            position: "absolute",
            width: "16px",
            height: "16px",
            top: pos.startsWith("t") ? 0 : "auto",
            bottom: pos.startsWith("b") ? 0 : "auto",
            left: pos.endsWith("l") ? 0 : "auto",
            right: pos.endsWith("r") ? 0 : "auto",
            borderTop: pos.startsWith("t")
              ? "1px solid var(--tertiary)"
              : "none",
            borderBottom: pos.startsWith("b")
              ? "1px solid var(--tertiary)"
              : "none",
            borderLeft: pos.endsWith("l")
              ? "1px solid var(--tertiary)"
              : "none",
            borderRight: pos.endsWith("r")
              ? "1px solid var(--tertiary)"
              : "none",
          }}
        />
      ))}

      <div
        className="proj-featured-inner"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "start",
        }}
      >
        {/* Left info */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--tertiary)",
              letterSpacing: "3px",
              marginBottom: "8px",
            }}
          >
            ★ FEATURED PROJECT
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--text-muted)",
              letterSpacing: "2px",
              marginBottom: "10px",
            }}
          >
            PROJECT_{project.id}
          </div>

          <h3
            className="proj-featured-title"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "22px",
              fontWeight: 700,
              color: "var(--text)",
              marginBottom: "12px",
            }}
          >
            {project.title}
          </h3>

          <p
            className="proj-featured-desc"
            style={{
              fontSize: "15px",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              marginBottom: "20px",
            }}
          >
            {project.longDescription || project.description}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              marginBottom: "24px",
            }}
          >
            {project.stack.map((s) => (
              <span
                key={s}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--text-muted)",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  padding: "3px 9px",
                  letterSpacing: "1px",
                }}
              >
                {s}
              </span>
            ))}
          </div>

          <div
            className="proj-links"
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "2px",
                color: "var(--tertiary)",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              ↗ Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "2px",
                color: "var(--text-muted)",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              ⌥ GitHub
            </a>
          </div>
        </div>

        {/* Right metrics */}
        <div>
          {project.metrics.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
              }}
            >
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  style={{
                    background: "rgba(0,0,0,0.35)",
                    border: "1px solid rgba(123,0,255,0.2)",
                    padding: "16px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "var(--tertiary)",
                    }}
                  >
                    {m.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--text-muted)",
                      letterSpacing: "1px",
                      marginTop: "4px",
                    }}
                  >
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

type FilterType = "All" | "Full Stack" | "Frontend";

export function ProjectsSection() {
  const [filter, setFilter] = useState<FilterType>("All");

  const featured = projects.find((p) => p.featured);
  const others = projects.filter(
    (p) => !p.featured && (filter === "All" || p.type === filter),
  );

  return (
    <section
      id="projects"
      className="proj-section"
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
        .proj-grid > * { min-width: 0; }
        .proj-featured-inner > * { min-width: 0; }

        /* Laptop / small desktop */
        @media (max-width: 1100px) {
          .proj-section { padding: 90px 32px !important; }
          .proj-featured { padding: 30px !important; }
          .proj-featured-inner { gap: 28px !important; }
        }

        /* Tablet */
        @media (max-width: 900px) {
          .proj-section { padding: 80px 24px !important; }
          .proj-header { margin-bottom: 40px !important; }
          .proj-title-line { width: 80px !important; }
          .proj-featured-inner {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .proj-card { padding: 24px !important; }
        }

        /* Mobile: 1 column */
        @media (max-width: 700px) {
          .proj-grid {
            grid-template-columns: 1fr !important;
            gap: 18px !important;
          }
          /* span 2 se extra column ban kar overflow hota tha */
          .proj-featured { grid-column: span 1 !important; }
        }

        @media (max-width: 600px) {
          .proj-section { padding: 64px 16px !important; }
          .proj-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            margin-bottom: 32px !important;
            gap: 20px !important;
          }
          .proj-label { font-size: 10px !important; letter-spacing: 3px !important; }

          .proj-filters {
            width: 100% !important;
            flex-wrap: wrap !important;
          }
          .proj-filter-btn {
            flex: 1 1 auto !important;
            padding: 9px 12px !important;
            font-size: 10px !important;
            letter-spacing: 1.5px !important;
          }

          .proj-featured { padding: 24px 18px !important; }
          .proj-featured-title { font-size: 19px !important; }
          .proj-featured-desc { font-size: 14px !important; line-height: 1.65 !important; }
          .proj-card { padding: 22px 18px !important; }
          .proj-card-title { font-size: 16px !important; }
          .proj-card-desc { font-size: 13.5px !important; }
        }

        /* Small phones */
        @media (max-width: 380px) {
          .proj-section { padding: 56px 12px !important; }
          .proj-featured { padding: 20px 14px !important; }
          .proj-card { padding: 20px 14px !important; }
          .proj-filter-btn { padding: 8px 8px !important; letter-spacing: 1px !important; }
        }
      `}</style>

      {/* Header */}
      <div
        className="proj-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "48px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <div
            className="proj-label"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--primary)",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            // 03 — Work
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3vw, 38px)",
              fontWeight: 700,
              color: "var(--text)",
            }}
          >
            Projects
            <div
              className="proj-title-line"
              style={{
                height: "2px",
                width: "55%",
                background:
                  "linear-gradient(90deg, var(--primary), transparent)",
                marginTop: "10px",
              }}
            />
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="proj-filters" style={{ display: "flex", gap: "8px" }}>
          {(["All", "Full Stack", "Frontend"] as FilterType[]).map((f) => (
            <button
              key={f}
              className="proj-filter-btn"
              onClick={() => setFilter(f)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "2px",
                padding: "8px 16px",
                border: "1px solid",
                borderColor: filter === f ? "var(--primary)" : "var(--border)",
                background: filter === f ? "var(--grad-btn)" : "transparent",
                color: filter === f ? "var(--primary)" : "var(--text-muted)",
                cursor: "pointer",
                textTransform: "uppercase",
                transition: "all 0.2s",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Projects grid */}
      <div
        className="proj-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "24px",
        }}
      >
        {featured && <FeaturedProject project={featured} />}
        {others.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
