// ============================================================
// PERSONAL DATA — update this to personalize your portfolio
// ============================================================

export const personal = {
  name: "Komal Raza",
  firstName: "Komal",
  lastName: "Raza",
  title: "Full Stack Developer",
  tagline: "Building Digital Experiences That Matter",
  bio: "I'm a passionate Full Stack Developer who loves crafting seamless, high-performance web applications. From pixel-perfect frontends to scalable backend systems — I turn complex problems into elegant solutions.",
  bioShort:
    "Full Stack Developer based in Pakistan. Specializing in React, Next.js & Node.js.",
  location: "Pakistan",
  email: "komalraza@gmail.com",
  phone: "+92 300 0000000",
  availability: true,
  availabilityText: "Open to Work",
  resumeUrl: "/resume-komal-raza.pdf",
  social: {
    github: "https://github.com/komalraza",
    linkedin: "https://linkedin.com/in/komalraza",
    twitter: "https://twitter.com/komalraza",
    instagram: "",
  },
  stats: [
    { number: "15+", label: "Projects Delivered" },
    { number: "3+", label: "Years Experience" },
    { number: "12+", label: "Happy Clients" },
    { number: "95%", label: "Satisfaction Rate" },
  ],
};

export const skills = {
  frontend: {
    label: "Frontend",
    color: "primary" as const,
    icon: "◈",
    items: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 80 },
      { name: "Redux / Zustand", level: 82 },
      { name: "HTML5 / CSS3", level: 97 },
      { name: "Responsive Design", level: 95 },
    ],
  },
  backend: {
    label: "Backend",
    color: "secondary" as const,
    icon: "⬡",
    items: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 90 },
      { name: "REST APIs", level: 92 },
      { name: "GraphQL", level: 75 },
      { name: "Socket.io", level: 78 },
      { name: "JWT / Auth", level: 85 },
      { name: "Prisma ORM", level: 80 },
    ],
  },
  database: {
    label: "Database & Cloud",
    color: "tertiary" as const,
    icon: "◎",
    items: [
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "Firebase", level: 85 },
      { name: "Redis", level: 72 },
      { name: "Supabase", level: 80 },
      { name: "AWS S3", level: 75 },
    ],
  },
  tools: {
    label: "Tools & DevOps",
    color: "primary" as const,
    icon: "⌬",
    items: [
      { name: "Git / GitHub", level: 93 },
      { name: "Docker", level: 72 },
      { name: "CI/CD Pipelines", level: 75 },
      { name: "Figma", level: 82 },
      { name: "Postman", level: 90 },
      { name: "Linux / Bash", level: 78 },
      { name: "Vercel / Netlify", level: 90 },
    ],
  },
};

export const projects = [
  {
    id: "01",
    title: "E-Commerce Platform",
    type: "Full Stack",
    badgeColor: "primary" as const,
    featured: true,
    description:
      "A complete marketplace with real-time inventory management, Stripe payment integration, admin dashboard, and advanced analytics. Handles 10,000+ active users with 99.9% uptime.",
    longDescription:
      "Built from scratch using Next.js for SSR performance, Node.js microservices, and MongoDB Atlas. Includes real-time order tracking via Socket.io, email automation with Resend, and a custom CMS for product management.",
    stack: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Redis",
      "AWS S3",
      "TypeScript",
    ],
    metrics: [
      { value: "10K+", label: "Active Users" },
      { value: "99.9%", label: "Uptime" },
      { value: "<200ms", label: "Response Time" },
      { value: "95+", label: "Lighthouse Score" },
    ],
    liveUrl: "https://demo.com",
    githubUrl: "https://github.com/komalraza",
    year: "2024",
  },
  {
    id: "02",
    title: "Analytics Dashboard",
    type: "Frontend",
    badgeColor: "secondary" as const,
    featured: false,
    description:
      "Real-time data visualization dashboard with animated charts, dark mode, customizable widgets, and export functionality. Built for SaaS companies.",
    stack: ["React", "TypeScript", "Recharts", "Tailwind CSS", "React Query"],
    metrics: [],
    liveUrl: "https://demo.com",
    githubUrl: "https://github.com/komalraza",
    year: "2024",
  },
  {
    id: "03",
    title: "Portfolio Builder",
    type: "Full Stack",
    badgeColor: "primary" as const,
    featured: false,
    description:
      "Drag-and-drop portfolio builder with live preview, custom themes, and one-click Vercel deployment. Designed for non-technical creatives.",
    stack: ["Next.js", "Framer Motion", "Tailwind CSS", "Prisma", "PostgreSQL"],
    metrics: [],
    liveUrl: "https://demo.com",
    githubUrl: "https://github.com/komalraza",
    year: "2023",
  },
  {
    id: "04",
    title: "Real-Time Chat App",
    type: "Full Stack",
    badgeColor: "primary" as const,
    featured: false,
    description:
      "WebSocket-powered messaging app with rooms, file sharing, message reactions, and end-to-end encryption. Supports 500+ concurrent users.",
    stack: ["React", "Socket.io", "Node.js", "MongoDB", "Redis", "JWT"],
    metrics: [],
    liveUrl: "https://demo.com",
    githubUrl: "https://github.com/komalraza",
    year: "2023",
  },
  {
    id: "05",
    title: "3D Product Showcase",
    type: "Frontend",
    badgeColor: "secondary" as const,
    featured: false,
    description:
      "Interactive 3D product viewer with 360° rotation, zoom controls, and AR preview. Built for e-commerce clients to reduce return rates.",
    stack: ["Three.js", "React Three Fiber", "GSAP", "TypeScript"],
    metrics: [],
    liveUrl: "https://demo.com",
    githubUrl: "https://github.com/komalraza",
    year: "2024",
  },
  {
    id: "06",
    title: "AI Content Generator",
    type: "Full Stack",
    badgeColor: "tertiary" as const,
    featured: false,
    description:
      "SaaS tool that generates blog posts, social captions, and ad copy using OpenAI API. Includes subscription billing and content history.",
    stack: ["Next.js", "OpenAI API", "Stripe", "Prisma", "PostgreSQL"],
    metrics: [],
    liveUrl: "https://demo.com",
    githubUrl: "https://github.com/komalraza",
    year: "2024",
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2022 — Present",
    description:
      "Building custom web applications for clients across e-commerce, SaaS, and media industries. Delivered 15+ projects with consistent 5-star ratings.",
    skills: ["Next.js", "React", "Node.js", "TypeScript"],
    current: true,
  },
  {
    role: "Frontend Developer",
    company: "Tech Startup",
    period: "2021 — 2022",
    description:
      "Led frontend development for a B2B SaaS product. Rebuilt the UI from scratch resulting in 40% improved load performance and better UX scores.",
    skills: ["React", "Redux", "Tailwind CSS", "Figma"],
    current: false,
  },
  {
    role: "Junior Web Developer",
    company: "Digital Agency",
    period: "2020 — 2021",
    description:
      "Developed responsive websites and landing pages for 20+ clients. Collaborated closely with designers to bring Figma designs to pixel-perfect code.",
    skills: ["HTML", "CSS", "JavaScript", "WordPress"],
    current: false,
  },
];
