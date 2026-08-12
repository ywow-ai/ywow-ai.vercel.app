export const siteConfig = {
  name: "ywow-ai",
  title: "ywow-ai — Fullstack Developer",
  description:
    "Just a fictional human character from a game, trying to debug reality. Fullstack Developer & System Architect.",
  url: "https://ywow-ai.vercel.app/",
  tagline:
    "Just a fictional human character from a game, trying to debug reality.",
  role: "Fullstack Developer & System Architect",
};

export const navLinks = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#portfolio", label: "Portfolio", id: "portfolio" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export const interests = [
  { label: "Game", icon: "game" },
  { label: "Anime", icon: "anime" },
  { label: "Technology", icon: "technology" },
];

export const techStack = [
  {
    name: "Next.js",
    icon: "next.js",
    gradient: "from-indigo-400 to-purple-500",
  },
  {
    name: "Elysia.js",
    icon: "elysia.js",
    gradient: "from-purple-400 to-pink-400",
  },
  { name: "Prisma", icon: "prisma", gradient: "from-indigo-400 to-indigo-600" },
  {
    name: "Tailwind CSS",
    icon: "tailwind css",
    gradient: "from-purple-300 to-indigo-400",
  },
  {
    name: "PostgreSQL",
    icon: "postgresql",
    gradient: "from-indigo-500 to-purple-600",
  },
  { name: "Elixir", icon: "elixir", gradient: "from-purple-400 to-pink-500" },
  { name: "Phoenix", icon: "phoenix", gradient: "from-pink-400 to-purple-500" },
];

export const proficiencyLevels = {
  master: {
    label: "Master",
    icon: "master",
    classes: "bg-yellow-500/20 border-yellow-500/50 text-yellow-400",
  },
  expert: {
    label: "Expert",
    icon: "expert",
    classes: "bg-purple-500/20 border-purple-400/50 text-purple-400",
  },
  advanced: {
    label: "Advanced",
    icon: "advanced",
    classes: "bg-indigo-500/20 border-indigo-400/50 text-indigo-400",
  },
  proficient: {
    label: "Proficient",
    icon: "proficient",
    classes: "bg-pink-500/20 border-pink-400/50 text-pink-400",
  },
  learning: {
    label: "Learning",
    icon: "learning",
    classes: "bg-violet-500/20 border-violet-400/50 text-violet-300",
  },
} as const;

export const skillCategories = [
  {
    category: "Frontend Development",
    icon: "frontend development",
    gradient: "from-purple-400 to-indigo-500",
    skills: [
      { name: "Next.js", proficiency: "expert" as const, years: "3+" },
      { name: "React", proficiency: "expert" as const, years: "4+" },
      { name: "Tailwind CSS", proficiency: "expert" as const, years: "3+" },
      { name: "TypeScript", proficiency: "expert" as const, years: "4+" },
    ],
  },
  {
    category: "Backend Development",
    icon: "backend development",
    gradient: "from-indigo-400 to-pink-400",
    skills: [
      { name: "Elysia.js", proficiency: "master" as const, years: "2+" },
      { name: "Phoenix/Elixir", proficiency: "advanced" as const, years: "2+" },
      { name: "Prisma ORM", proficiency: "expert" as const, years: "3+" },
      { name: "PostgreSQL", proficiency: "expert" as const, years: "4+" },
    ],
  },
  {
    category: "DevOps & Infrastructure",
    icon: "devops & infrastructure",
    gradient: "from-pink-400 to-purple-500",
    skills: [
      {
        name: "nginx Configuration",
        proficiency: "advanced" as const,
        years: "3+",
      },
      { name: "Load Balancing", proficiency: "expert" as const, years: "3+" },
      {
        name: "Docker/Kubernetes",
        proficiency: "advanced" as const,
        years: "2+",
      },
      {
        name: "CI/CD Pipelines",
        proficiency: "advanced" as const,
        years: "2+",
      },
    ],
  },
  {
    category: "Mobile Development",
    icon: "mobile development",
    gradient: "from-indigo-500 to-pink-400",
    skills: [
      {
        name: "Jetpack Compose",
        proficiency: "advanced" as const,
        years: "2+",
      },
      { name: "Android SDK", proficiency: "advanced" as const, years: "3+" },
      { name: "Kotlin", proficiency: "advanced" as const, years: "3+" },
      {
        name: "Material Design",
        proficiency: "advanced" as const,
        years: "3+",
      },
    ],
  },
  {
    category: "System & Security",
    icon: "system & security",
    gradient: "from-purple-500 to-indigo-400",
    skills: [
      { name: "Arch Linux", proficiency: "master" as const, years: "5+" },
      { name: "Better Auth", proficiency: "expert" as const, years: "2+" },
      {
        name: "System Optimization",
        proficiency: "expert" as const,
        years: "4+",
      },
      {
        name: "Network Security",
        proficiency: "advanced" as const,
        years: "2+",
      },
    ],
  },
];

export const stats = [
  {
    label: "Technologies Mastered",
    value: "10+",
    icon: "technologies mastered",
  },
  { label: "Years of Experience", value: "2+", icon: "years of experience" },
  { label: "Projects Completed", value: "10+", icon: "projects completed" },
  { label: "Production Systems", value: "3+", icon: "production systems" },
];

export const projects = [
  {
    id: 1,
    title: "AI Gaming Platform",
    description:
      "Platform gaming dengan AI-powered matchmaking dan real-time analytics. Built with Next.js and Prisma.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Real-time Chat API",
    description:
      "High-performance real-time chat API dengan WebSocket support menggunakan Elysia.js framework.",
    tech: ["Elysia.js", "WebSocket", "Redis"],
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Anime Tracker Dashboard",
    description:
      "Dashboard untuk tracking anime watchlist dengan recommendation system. Full-stack app dengan Phoenix LiveView.",
    tech: ["Elixir", "Phoenix", "LiveView", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce platform dengan payment integration dan real-time inventory management.",
    tech: ["Next.js", "Stripe", "Prisma", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
  },
];

export const timeline = [
  {
    id: 1,
    type: "experience" as const,
    title: "Senior Fullstack Developer",
    organization: "Tech Innovations Inc.",
    period: "2023 - Present",
    description:
      "Leading development of scalable web applications using Next.js, Elixir, and modern cloud infrastructure. Mentoring junior developers and architecting microservices.",
  },
  {
    id: 2,
    type: "experience" as const,
    title: "Fullstack Developer",
    organization: "Digital Solutions Co.",
    period: "2021 - 2023",
    description:
      "Developed and maintained multiple client projects using React, Node.js, and PostgreSQL. Implemented CI/CD pipelines and improved application performance by 40%.",
  },
  {
    id: 3,
    type: "education" as const,
    title: "Bachelor of Computer Science",
    organization: "Virtual University of Gaming",
    period: "2017 - 2021",
    description:
      "Focused on Software Engineering and AI. Final project: AI-powered game recommendation system using machine learning.",
  },
  {
    id: 4,
    type: "experience" as const,
    title: "Junior Web Developer",
    organization: "Startup Hub",
    period: "2020 - 2021",
    description:
      "Built responsive websites and web applications. Collaborated with design team to implement pixel-perfect UI/UX.",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    icon: "github",
    url: "https://github.com/ywow-ai",
    hover: "hover:text-gray-300",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    url: "https://linkedin.com/in/ywow-ai",
    hover: "hover:text-indigo-400",
  },
  {
    name: "Twitter",
    icon: "twitter",
    url: "https://twitter.com/_chmod_x",
    hover: "hover:text-pink-400",
  },
  {
    name: "Discord",
    icon: "discord",
    url: "https://discord.gg/ywow.ai",
    hover: "hover:text-purple-400",
  },
];
