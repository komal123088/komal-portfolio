"use client";

import { useEffect } from "react";
import { activeTheme, ThemeConfig } from "@/config/theme";

// Injects theme CSS variables into :root so every component
// can reference var(--primary), var(--bg), etc.
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    applyTheme(activeTheme);
  }, []);

  return <>{children}</>;
}

export function applyTheme(theme: ThemeConfig) {
  const root = document.documentElement;
  const c = theme.colors;

  root.style.setProperty("--bg", c.bg);
  root.style.setProperty("--bg-card", c.bgCard);
  root.style.setProperty("--bg-card-hover", c.bgCardHover);
  root.style.setProperty("--primary", c.primary);
  root.style.setProperty("--secondary", c.secondary);
  root.style.setProperty("--tertiary", c.tertiary);
  root.style.setProperty("--text", c.text);
  root.style.setProperty("--text-muted", c.textMuted);
  root.style.setProperty("--border", c.border);
  root.style.setProperty("--border-glow", c.borderGlow);

  root.style.setProperty("--font-display", theme.fonts.display);
  root.style.setProperty("--font-mono", theme.fonts.mono);
  root.style.setProperty("--font-body", theme.fonts.body);

  root.style.setProperty("--grad-hero", theme.gradients.hero);
  root.style.setProperty("--grad-card", theme.gradients.card);
  root.style.setProperty("--grad-text", theme.gradients.text);
  root.style.setProperty("--grad-btn", theme.gradients.button);

  // Glow sizes
  const glowMap = { low: "8px", medium: "18px", high: "28px" };
  root.style.setProperty("--glow-size", glowMap[theme.effects.glowIntensity]);

  // Theme name for conditional CSS
  root.setAttribute("data-theme", theme.name);
}
