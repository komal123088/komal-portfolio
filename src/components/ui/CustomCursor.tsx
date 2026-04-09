"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current!;
    const ring = ringRef.current!;

    let ringX = 0,
      ringY = 0;
    let mouseX = 0,
      mouseY = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      animId = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("mousemove", onMove);

    const onEnter = () => (ring.style.transform += " scale(1.6)");
    const onLeave = () => {};

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          width: "8px",
          height: "8px",
          background: "var(--primary)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "transform 0.05s",
          boxShadow: "0 0 8px var(--primary)",
          mixBlendMode: "screen",
        }}
      />

      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          width: "36px",
          height: "36px",
          border: "1px solid var(--primary)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
          opacity: 0.5,
          mixBlendMode: "screen",
          transition: "transform 0.1s, opacity 0.2s",
        }}
      />
    </>
  );
}
