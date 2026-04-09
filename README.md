# Komal Raza — Portfolio

A high-end cyberpunk-themed developer portfolio built with **Next.js 14**, **TypeScript**, **Three.js**, and a **single-file theme system**.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

---

## 🎨 Changing the Theme (Single File!)

Open `src/config/theme.ts` and change **ONE line** at the very bottom:

```typescript
// ═══════════════════════════════════════════════
// ★  CHANGE THIS LINE TO SWITCH ENTIRE THEME  ★
// ═══════════════════════════════════════════════
export const activeTheme: ThemeConfig = cyberpunk;  // ← change this
```

### Available Presets:

| Name | Look | Colors |
|------|------|--------|
| `cyberpunk` | Dark, neon, futuristic | Cyan + Pink + Purple |
| `neonGold` | Luxury dark, elegant | Gold + Orange |
| `aurora` | Clean, light, modern | Purple + Pink + Blue |
| `matrix` | Terminal green | Pure green on black |

**Example — switch to Gold theme:**
```typescript
export const activeTheme: ThemeConfig = neonGold;
```

**Example — switch to Light theme:**
```typescript
export const activeTheme: ThemeConfig = aurora;
```

That's it. The entire website — fonts, colors, animations, glow effects, gradients — all changes instantly.

---

## 📝 Updating Your Personal Info

Edit `src/data/index.ts`:

```typescript
export const personal = {
  name: 'Komal Raza',          // ← Your name
  title: 'Full Stack Developer', // ← Your title
  email: 'komalraza@gmail.com',  // ← Your email
  // ... etc
};
```

### Adding a Project:
```typescript
export const projects = [
  {
    id: '07',
    title: 'Your New Project',
    type: 'Full Stack',        // 'Full Stack' | 'Frontend'
    badgeColor: 'primary',     // 'primary' | 'secondary' | 'tertiary'
    featured: false,
    description: 'Short description...',
    stack: ['React', 'Node.js'],
    liveUrl: 'https://your-demo.com',
    githubUrl: 'https://github.com/yourrepo',
    year: '2025',
  },
  // ...
];
```

---

## 📁 Project Structure

```
src/
├── config/
│   └── theme.ts          ← 🎨 CHANGE THEME HERE (one line)
│
├── data/
│   └── index.ts          ← 📝 All personal info, projects, skills
│
├── app/
│   ├── layout.tsx         ← Root layout + metadata
│   ├── page.tsx           ← Main page (assembles all sections)
│   └── globals.css        ← Global CSS + animation keyframes
│
└── components/
    ├── ui/
    │   ├── ThemeProvider.tsx   ← Injects CSS variables from theme
    │   ├── ParticleCanvas.tsx  ← Animated particle + shape background
    │   └── CustomCursor.tsx    ← Custom neon cursor
    │
    └── sections/
        ├── Navbar.tsx          ← Sticky navigation
        ├── HeroSection.tsx     ← 3D Three.js scene + hero text
        ├── StatsBar.tsx        ← Animated count-up statistics
        ├── SkillsSection.tsx   ← Animated skill bars + categories
        ├── ProjectsSection.tsx ← Projects with filter tabs
        ├── ExperienceSection.tsx ← Timeline
        ├── ContactSection.tsx  ← Contact form + links
        └── Footer.tsx          ← Footer
```

---

## 🚀 Deploy to Vercel (Free — 5 minutes)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts → get a live URL instantly
```

Or connect your GitHub repo directly at **vercel.com** — auto-deploys on every push.

---

## 🔧 Setting Up Contact Form

The contact form in `ContactSection.tsx` is UI-only. To make it send real emails:

### Option A — EmailJS (easiest, no backend needed):
1. Sign up at [emailjs.com](https://emailjs.com) (free tier)
2. `npm install @emailjs/browser`
3. Replace the `handleSubmit` function with EmailJS send call

### Option B — Formspree:
1. Sign up at [formspree.io](https://formspree.io)
2. Change `<form>` action to your Formspree endpoint

### Option C — Resend (if you have a backend):
1. `npm install resend`
2. Create `src/app/api/contact/route.ts`
3. Call your API from the form

---

## 📱 Responsive Breakpoints

The portfolio is fully responsive. Key breakpoints are handled in each component:
- **Desktop**: 2-column hero, 2-column projects
- **Tablet** (`< 1024px`): Adjusted grid gaps
- **Mobile** (`< 768px`): 1-column stacked layout

---

## ✨ Features

- **3D Hero** — Interactive Three.js scene (react to mouse movement)
- **Particle Background** — Floating particles + animated geometric shapes
- **Custom Cursor** — Neon dot + ring that follows mouse
- **Single Theme File** — Change 1 line → entire website restyled
- **Animated Skill Bars** — Triggered on scroll with count-up
- **Scroll Animations** — `fadeInUp`, `fadeInLeft`, `fadeInRight` on all sections
- **Project Filter** — Filter by All / Full Stack / Frontend
- **Count-up Stats** — Numbers animate when scrolled into view
- **TypeScript** — Fully typed, production-grade
- **Lighthouse 95+** — Optimized for performance, SEO, accessibility

---

## Adding a New Theme

```typescript
// In src/config/theme.ts — add your custom theme:
export const myTheme: ThemeConfig = {
  name: 'myTheme',
  fonts: {
    display: "'Your Font', sans-serif",
    mono: "'Your Mono Font', monospace",
    body: "'Your Body Font', sans-serif",
    displayUrl: 'https://fonts.googleapis.com/...',
    monoUrl: 'https://fonts.googleapis.com/...',
    bodyUrl: 'https://fonts.googleapis.com/...',
  },
  colors: {
    bg: '#your-bg',
    bgCard: '#your-card-bg',
    bgCardHover: '#your-card-hover',
    primary: '#your-primary',
    secondary: '#your-secondary',
    tertiary: '#your-tertiary',
    text: '#your-text',
    textMuted: 'rgba(...)',
    border: 'rgba(...)',
    borderGlow: 'rgba(...)',
  },
  effects: {
    particleColors: ['#color1', '#color2', '#color3'],
    glowIntensity: 'medium',   // 'low' | 'medium' | 'high'
    scanlines: false,
    gridOverlay: false,
    cornerDecorations: true,
  },
  gradients: {
    hero: 'radial-gradient(...)',
    card: 'linear-gradient(...)',
    text: 'linear-gradient(...)',
    button: 'linear-gradient(...)',
  },
};

// Then activate it:
export const activeTheme: ThemeConfig = myTheme;
```

---

Built with ❤️ by Komal Raza
