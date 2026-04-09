"use client";

import { useEffect, useRef, useState } from "react";
import { personal } from "@/data";

function useCountUp(target: string, duration = 1800) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const num = parseInt(target.replace(/\D/g, ""), 10);
    const suffix = target.replace(/[\d]/g, "");
    if (isNaN(num)) {
      setDisplay(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * num) + suffix);
            if (progress < 1) requestAnimationFrame(tick);
          };
          tick();
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { display, ref };
}

function StatItem({ stat }: { stat: { number: string; label: string } }) {
  const { display, ref } = useCountUp(stat.number);

  return (
    <div
      ref={ref}
      style={{
        background: "var(--bg)",
        padding: "28px 24px",
        textAlign: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "32px",
          fontWeight: 900,
          color: "var(--primary)",
          textShadow: "0 0 20px var(--border-glow)",
          lineHeight: 1,
        }}
      >
        {display}
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "var(--text-muted)",
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginTop: "8px",
        }}
      >
        {stat.label}
      </div>
    </div>
  );
}

export function StatsBar() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${personal.stats.length}, 1fr)`,
        gap: "1px",
        background: "var(--border)",
        border: "1px solid var(--border)",
        margin: "0 40px",
        position: "relative",
        zIndex: 2,
      }}
    >
      {personal.stats.map((stat) => (
        <StatItem key={stat.label} stat={stat} />
      ))}
    </div>
  );
}
