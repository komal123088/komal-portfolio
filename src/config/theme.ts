// ============================================================
// THEME CONFIG — CHANGE THIS FILE TO RESTYLE ENTIRE WEBSITE
// ============================================================
// Just swap the `active` export to any preset below,
// or create your own following the same structure.
// ============================================================

export type ThemeConfig = {
  name: string;
  fonts: {
    display: string; // headings / hero name
    mono: string; // code / labels
    body: string; // paragraph text
    displayUrl: string; // Google Fonts import
    monoUrl: string;
    bodyUrl: string;
  };
  colors: {
    bg: string; // page background
    bgCard: string; // card / terminal background
    bgCardHover: string;
    primary: string; // main accent (cyan, gold, etc.)
    secondary: string; // second accent (pink, orange, etc.)
    tertiary: string; // third accent (purple, teal, etc.)
    text: string; // primary text
    textMuted: string; // secondary text
    border: string; // default border color
    borderGlow: string; // glowing border
  };
  effects: {
    particleColors: string[];
    glowIntensity: "low" | "medium" | "high";
    scanlines: boolean;
    gridOverlay: boolean;
    cornerDecorations: boolean;
  };
  gradients: {
    hero: string; // hero section background gradient
    card: string; // card background gradient
    text: string; // gradient text for name
    button: string; // primary button gradient
  };
};

// ─────────────────────────────────────────────
// PRESET 1: CYBERPUNK (default — dark cyan/pink)
// ─────────────────────────────────────────────
export const cyberpunk: ThemeConfig = {
  name: "cyberpunk",
  fonts: {
    display: "'Orbitron', monospace",
    mono: "'Share Tech Mono', monospace",
    body: "'Rajdhani', sans-serif",
    displayUrl:
      "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap",
    monoUrl:
      "https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap",
    bodyUrl:
      "https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;600&display=swap",
  },
  colors: {
    bg: "#020c1b",
    bgCard: "#0a1628",
    bgCardHover: "#0f1e35",
    primary: "#00f5ff",
    secondary: "#ff006e",
    tertiary: "#7b00ff",
    text: "#e0e8f0",
    textMuted: "rgba(200,220,240,0.55)",
    border: "rgba(0,245,255,0.15)",
    borderGlow: "rgba(0,245,255,0.45)",
  },
  effects: {
    particleColors: ["#00f5ff", "#7b00ff", "#ff006e"],
    glowIntensity: "high",
    scanlines: true,
    gridOverlay: true,
    cornerDecorations: true,
  },
  gradients: {
    hero: "radial-gradient(ellipse at 70% 50%, rgba(123,0,255,0.12) 0%, transparent 60%)",
    card: "linear-gradient(135deg, rgba(10,22,40,0.95), rgba(20,10,40,0.95))",
    text: "linear-gradient(135deg, #00f5ff 0%, #7b00ff 50%, #ff006e 100%)",
    button:
      "linear-gradient(135deg, rgba(0,245,255,0.12), rgba(123,0,255,0.12))",
  },
};

// ─────────────────────────────────────────────
// PRESET 2: NEON GOLD (dark luxury — black/gold)
// ─────────────────────────────────────────────
export const neonGold: ThemeConfig = {
  name: "neonGold",
  fonts: {
    display: "'Cinzel', serif",
    mono: "'Courier Prime', monospace",
    body: "'Lato', sans-serif",
    displayUrl:
      "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap",
    monoUrl:
      "https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap",
    bodyUrl:
      "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap",
  },
  colors: {
    bg: "#0a0800",
    bgCard: "#120f02",
    bgCardHover: "#1a1503",
    primary: "#f0c040",
    secondary: "#ff9500",
    tertiary: "#c07020",
    text: "#f0e8d0",
    textMuted: "rgba(240,220,180,0.55)",
    border: "rgba(240,192,64,0.18)",
    borderGlow: "rgba(240,192,64,0.5)",
  },
  effects: {
    particleColors: ["#f0c040", "#ff9500", "#fff0a0"],
    glowIntensity: "medium",
    scanlines: false,
    gridOverlay: false,
    cornerDecorations: true,
  },
  gradients: {
    hero: "radial-gradient(ellipse at 60% 40%, rgba(240,192,64,0.08) 0%, transparent 60%)",
    card: "linear-gradient(135deg, rgba(18,15,2,0.97), rgba(30,20,5,0.97))",
    text: "linear-gradient(135deg, #f0c040 0%, #ff9500 60%, #fff0a0 100%)",
    button:
      "linear-gradient(135deg, rgba(240,192,64,0.1), rgba(255,149,0,0.1))",
  },
};

// ─────────────────────────────────────────────
// PRESET 3: AURORA (minimal — white/soft colors)
// ─────────────────────────────────────────────
export const aurora: ThemeConfig = {
  name: "aurora",
  fonts: {
    display: "'Playfair Display', serif",
    mono: "'DM Mono', monospace",
    body: "'DM Sans', sans-serif",
    displayUrl:
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap",
    monoUrl: "https://fonts.googleapis.com/css2?family=DM+Mono&display=swap",
    bodyUrl:
      "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;600&display=swap",
  },
  colors: {
    bg: "#f8f6ff",
    bgCard: "#ffffff",
    bgCardHover: "#f0eeff",
    primary: "#6b21ff",
    secondary: "#e91e8c",
    tertiary: "#0ea5e9",
    text: "#1a1030",
    textMuted: "rgba(26,16,48,0.55)",
    border: "rgba(107,33,255,0.15)",
    borderGlow: "rgba(107,33,255,0.4)",
  },
  effects: {
    particleColors: ["#6b21ff", "#e91e8c", "#0ea5e9"],
    glowIntensity: "low",
    scanlines: false,
    gridOverlay: false,
    cornerDecorations: false,
  },
  gradients: {
    hero: "radial-gradient(ellipse at 30% 60%, rgba(107,33,255,0.08) 0%, transparent 60%)",
    card: "linear-gradient(135deg, #ffffff, #f8f5ff)",
    text: "linear-gradient(135deg, #6b21ff 0%, #e91e8c 60%, #0ea5e9 100%)",
    button:
      "linear-gradient(135deg, rgba(107,33,255,0.08), rgba(233,30,140,0.08))",
  },
};

// ─────────────────────────────────────────────
// PRESET 4: MATRIX (pure green terminal)
// ─────────────────────────────────────────────
export const matrix: ThemeConfig = {
  name: "matrix",
  fonts: {
    display: "'VT323', monospace",
    mono: "'Source Code Pro', monospace",
    body: "'Source Code Pro', monospace",
    displayUrl: "https://fonts.googleapis.com/css2?family=VT323&display=swap",
    monoUrl:
      "https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600&display=swap",
    bodyUrl:
      "https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400&display=swap",
  },
  colors: {
    bg: "#000300",
    bgCard: "#001200",
    bgCardHover: "#002000",
    primary: "#00ff41",
    secondary: "#00cc33",
    tertiary: "#008f11",
    text: "#00ff41",
    textMuted: "rgba(0,255,65,0.55)",
    border: "rgba(0,255,65,0.2)",
    borderGlow: "rgba(0,255,65,0.5)",
  },
  effects: {
    particleColors: ["#00ff41", "#00cc33", "#39ff14"],
    glowIntensity: "high",
    scanlines: true,
    gridOverlay: false,
    cornerDecorations: true,
  },
  gradients: {
    hero: "radial-gradient(ellipse at 50% 50%, rgba(0,255,65,0.05) 0%, transparent 70%)",
    card: "linear-gradient(135deg, rgba(0,18,0,0.98), rgba(0,30,0,0.98))",
    text: "linear-gradient(135deg, #00ff41, #39ff14, #00cc33)",
    button: "linear-gradient(135deg, rgba(0,255,65,0.1), rgba(0,204,51,0.1))",
  },
};

// ═══════════════════════════════════════════════
// ★  CHANGE THIS LINE TO SWITCH ENTIRE THEME  ★
// Options: cyberpunk | neonGold | aurora | matrix
// ═══════════════════════════════════════════════
export const activeTheme: ThemeConfig = neonGold;
