// ============================================================
// PERSONAL DATA — update this to personalize your portfolio
// ============================================================
export interface Metric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  type: string;
  badgeColor: "primary" | "secondary";
  featured: boolean;
  description: string;
  longDescription?: string;
  stack: string[];
  metrics: Metric[];
  liveUrl: string;
  githubUrl: string;
  year: string;
}
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
  email: "komalraza401@gmail.com",
  phone: "+92 327 4704639",
  availability: true,
  availabilityText: "Open to Work",
  resumeUrl: "/resume-komal-raza.pdf",
  social: {
    github: "https://github.com/komal123088",
    linkedin: "https://linkedin.com/in/komalraza",
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
      { name: "HTML5", level: 97 },
      { name: "CSS3", level: 95 },
      { name: "JavaScript", level: 92 },
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "Nuxt.js", level: 82 },
      { name: "Tailwind", level: 92 },
      { name: "Bootstrap", level: 90 },
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
      { name: "Prisma ORM", level: 80 },
      { name: "JWT / Auth", level: 85 },
    ],
  },
  database: {
    label: "Database",
    color: "tertiary" as const,
    icon: "◎",
    items: [
      { name: "MongoDB", level: 95 },
      { name: "MySQL", level: 85 },
      { name: "Firebase", level: 85 },
    ],
  },
  tools: {
    label: "Tools",
    color: "primary" as const,
    icon: "⌬",
    items: [
      { name: "Git", level: 93 },
      { name: "GitHub", level: 92 },
      { name: "Postman", level: 90 },
      { name: "VS Code", level: 95 },
    ],
  },
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Shop Management Software",
    type: "Full Stack",
    badgeColor: "primary" as const,
    featured: true,
    description:
      "A complete shop management system to handle inventory, sales, billing, and customer records from one dashboard. Built to make daily shop operations faster and error-free.",
    longDescription:
      "Full stack application with a React frontend and a Node.js/Express backend connected to a database. Includes product and stock management, sales and invoice tracking, and a clean admin dashboard for shop owners.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    metrics: [],
    liveUrl:
      "https://shop-software-frontend-bxwy00cvb-komalraza401-1473s-projects.vercel.app/",
    githubUrl: "https://github.com/komal123088",
    year: "2025",
  },
  {
    id: "02",
    title: "Shop Management Software (XP Theme)",
    type: "Full Stack",
    badgeColor: "primary" as const,
    featured: false,
    description:
      "A retro Windows XP themed shop management software with sales, inventory, and billing modules. Combines a nostalgic UI with practical day-to-day shop features.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "CSS3"],
    metrics: [],
    liveUrl: "https://electronic-weld.vercel.app/sale",
    githubUrl: "https://github.com/komal123088",
    year: "2025",
  },
  {
    id: "03",
    title: "Article Website",
    type: "Full Stack",
    badgeColor: "primary" as const,
    featured: false,
    description:
      "A clean and responsive article website for publishing and reading content, with easy navigation and a focus on readability across all devices.",
    stack: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB"],
    metrics: [],
    liveUrl: "https://article-liard-mu.vercel.app/",
    githubUrl: "https://github.com/komal123088",
    year: "2025",
  },
  {
    id: "04",
    title: "E-Commerce Store",
    type: "Full Stack",
    badgeColor: "primary" as const,
    featured: false,
    description:
      "A modern e-commerce store built with Next.js featuring product listings, cart, and a smooth checkout experience with fast server-side rendering.",
    stack: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB"],
    metrics: [],
    liveUrl: "https://next-ecommerce-store-z5vx.vercel.app/products",
    githubUrl: "https://github.com/komal123088",
    year: "2024",
  },
  {
    id: "05",
    title: "Animated Dashboard",
    type: "Frontend",
    badgeColor: "secondary" as const,
    featured: false,
    description:
      "An animated analytics dashboard with smooth transitions, interactive charts, and a clean responsive layout.",
    stack: ["React", "JavaScript", "CSS3", "Chart Library"],
    metrics: [],
    liveUrl: "https://komal123088.github.io/dashboard/",
    githubUrl: "https://github.com/komal123088",
    year: "2024",
  },
  {
    id: "06",
    title: "Expense Tracker",
    type: "Frontend",
    badgeColor: "secondary" as const,
    featured: false,
    description:
      "A type-safe expense tracking app to add income and expenses, view balance, and keep spending organized.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    metrics: [],
    liveUrl: "https://expense-tracker-typescript-uxs1.vercel.app/",
    githubUrl: "https://github.com/komal123088",
    year: "2024",
  },
  {
    id: "07",
    title: "Amazon Clone",
    type: "Frontend",
    badgeColor: "secondary" as const,
    featured: false,
    description:
      "A responsive Amazon website clone with product grid, header navigation, and cart UI built in React.",
    stack: ["React", "JavaScript", "CSS3"],
    metrics: [],
    liveUrl: "https://komal123088.github.io/react-amazon-website/",
    githubUrl: "https://github.com/komal123088",
    year: "2024",
  },
  {
    id: "08",
    title: "Creative Landing Page",
    type: "Frontend",
    badgeColor: "secondary" as const,
    featured: false,
    description:
      "A creative and modern landing page with eye-catching sections, smooth animations, and a fully responsive layout.",
    stack: ["React", "CSS3", "JavaScript"],
    metrics: [],
    liveUrl: "https://creative-react-nine.vercel.app/",
    githubUrl: "https://github.com/komal123088",
    year: "2024",
  },
  {
    id: "09",
    title: "Video Streaming Website",
    type: "Frontend",
    badgeColor: "secondary" as const,
    featured: false,
    description:
      "A video streaming website with a browsable video library and player layout, inspired by popular streaming platforms.",
    stack: ["React", "JavaScript", "CSS3"],
    metrics: [],
    liveUrl: "https://komal123088.github.io/video-streaming-in-react/",
    githubUrl: "https://github.com/komal123088",
    year: "2024",
  },
  {
    id: "10",
    title: "Grocery Website",
    type: "Frontend",
    badgeColor: "secondary" as const,
    featured: false,
    description:
      "A responsive grocery shopping website showcasing product categories and offers with a clean, easy-to-use layout.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    metrics: [],
    liveUrl: "https://komal123088.github.io/html-grocery-app/",
    githubUrl: "https://github.com/komal123088",
    year: "2023",
  },
  {
    id: "11",
    title: "Personal Portfolio",
    type: "Frontend",
    badgeColor: "secondary" as const,
    featured: false,
    description:
      "A personal portfolio website presenting skills, projects, and contact details in a clean responsive design.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    metrics: [],
    liveUrl: "https://komal123088.github.io/my-personal-portfolio/",
    githubUrl: "https://github.com/komal123088",
    year: "2023",
  },
  {
    id: "12",
    title: "Portfolio Website",
    type: "Frontend",
    badgeColor: "secondary" as const,
    featured: false,
    description:
      "A portfolio website with a different layout and styling, highlighting projects and skills.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    metrics: [],
    liveUrl: "https://komal123088.github.io/my-portfolio/",
    githubUrl: "https://github.com/komal123088",
    year: "2023",
  },
  {
    id: "13",
    title: "Modern Portfolio",
    type: "Frontend",
    badgeColor: "secondary" as const,
    featured: false,
    description:
      "A modern portfolio website with updated design, smooth sections, and a fully responsive layout.",
    stack: ["React", "CSS3", "JavaScript"],
    metrics: [],
    liveUrl: "https://komal123088.github.io/new-portfolio/",
    githubUrl: "https://github.com/komal123088",
    year: "2024",
  },
  {
    id: "14",
    title: "Car Rental Website",
    type: "Frontend",
    badgeColor: "secondary" as const,
    featured: false,
    description:
      "A car rental website with a vehicle listing, booking sections, and a clean responsive interface.",
    stack: ["React", "CSS3", "JavaScript"],
    metrics: [],
    liveUrl: "https://komal123088.github.io/car-rental",
    githubUrl: "https://github.com/komal123088",
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
