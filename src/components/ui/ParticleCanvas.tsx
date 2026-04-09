"use client";

import { useEffect, useRef } from "react";
import { activeTheme } from "@/config/theme";

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const colors = activeTheme.effects.particleColors;

    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      x!: number;
      y!: number;
      size!: number;
      speedX!: number;
      speedY!: number;
      opacity!: number;
      color!: string;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.8 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.35;
        this.speedY = -Math.random() * 0.5 - 0.1;
        this.opacity = Math.random() * 0.55 + 0.1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.y < -5 || this.x < -5 || this.x > canvas.width + 5)
          this.reset();
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const particles: Particle[] = Array.from(
      { length: 140 },
      () => new Particle(),
    );

    // Floating geometric shapes
    const shapes = Array.from({ length: 8 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 40 + 15,
      rotation: 0,
      rotSpeed: (Math.random() - 0.5) * 0.005,
      speedY: -Math.random() * 0.2 - 0.05,
      opacity: Math.random() * 0.07 + 0.02,
      color: colors[i % colors.length],
      sides: [3, 4, 6][Math.floor(Math.random() * 3)],
    }));

    function drawPolygon(
      x: number,
      y: number,
      size: number,
      sides: number,
      rotation: number,
    ) {
      ctx.beginPath();
      for (let i = 0; i < sides; i++) {
        const angle = (i * 2 * Math.PI) / sides + rotation;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw shapes
      shapes.forEach((s) => {
        s.rotation += s.rotSpeed;
        s.y += s.speedY;
        if (s.y < -s.size * 2) {
          s.y = canvas.height + s.size;
          s.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.globalAlpha = s.opacity;
        ctx.strokeStyle = s.color;
        ctx.lineWidth = 1;
        ctx.shadowBlur = 8;
        ctx.shadowColor = s.color;
        drawPolygon(s.x, s.y, s.size, s.sides, s.rotation);
        ctx.stroke();
        ctx.restore();
      });

      // Draw particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
