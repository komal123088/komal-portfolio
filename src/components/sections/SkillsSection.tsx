"use client";

import { useEffect, useRef, useState } from "react";
import { skills } from "@/data";
import { activeTheme } from "@/config/theme";

function SkillBar({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} style={{ marginBottom: "14px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "6px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--text)",
            letterSpacing: "1px",
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--primary)",
          }}
        >
          {level}%
        </span>
      </div>
      <div
        style={{
          height: "3px",
          background: "var(--border)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: `${width}%`,
            background:
              "linear-gradient(90deg, var(--primary), var(--secondary))",
            transition: "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: "0 0 8px var(--border-glow)",
          }}
        />
      </div>
    </div>
  );
}

const colorMap = {
  primary: "var(--primary)",
  secondary: "var(--secondary)",
  tertiary: "var(--tertiary)",
};

type AnyCategory = {
  label: string;
  color: "primary" | "secondary" | "tertiary";
  icon: string;
  items: { name: string; level: number }[];
};

function CategoryCard({
  category,
  delay,
}: {
  category: AnyCategory;
  delay: number;
}) {
  const accentColor = colorMap[category.color];

  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        padding: "28px",
        position: "relative",
        transition: "all 0.3s",
        animation: `fadeInUp 0.6s ${delay}ms both`,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border-glow)";
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 12px 40px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border)";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Left accent bar */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "3px",
          background: accentColor,
          boxShadow: `0 0 12px ${accentColor}`,
        }}
      />

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "24px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "18px",
            color: accentColor,
          }}
        >
          {category.icon}
        </span>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "13px",
            fontWeight: 700,
            color: accentColor,
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          {category.label}
        </h3>
      </div>

      {/* Skill bars */}
      {category.items.map((skill, i) => (
        <SkillBar
          key={skill.name}
          name={skill.name}
          level={skill.level}
          delay={delay + i * 80}
        />
      ))}
    </div>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      style={{
        padding: "100px 40px",
        maxWidth: "1180px",
        margin: "0 auto",
        position: "relative",
        zIndex: 2,
      }}
    >
      {/* Section header */}
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
          // 02 — Tech Arsenal
        </div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3vw, 38px)",
            fontWeight: 700,
            color: "var(--text)",
            position: "relative",
            display: "inline-block",
          }}
        >
          Skills & Stack
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

      {/* Animated SVG decorative element */}
      <div
        style={{
          position: "absolute",
          right: "40px",
          top: "80px",
          opacity: 0.06,
          animation: "rotate-slow 20s linear infinite",
          pointerEvents: "none",
        }}
      >
        <svg width="200" height="200" viewBox="0 0 200 200">
          <polygon
            points="100,10 190,55 190,145 100,190 10,145 10,55"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="1"
          />
          <polygon
            points="100,30 170,65 170,135 100,170 30,135 30,65"
            fill="none"
            stroke="var(--secondary)"
            strokeWidth="1"
          />
          <polygon
            points="100,50 150,75 150,125 100,150 50,125 50,75"
            fill="none"
            stroke="var(--tertiary)"
            strokeWidth="1"
          />
          <circle
            cx="100"
            cy="100"
            r="40"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="0.5"
            strokeDasharray="4,4"
          />
        </svg>
      </div>

      {/* Skills grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        <CategoryCard category={skills.frontend} delay={100} />
        <CategoryCard category={skills.backend} delay={200} />
        <CategoryCard category={skills.database} delay={300} />
        <CategoryCard category={skills.tools} delay={400} />
      </div>
    </section>
  );
}
