/** Local icons from public/icons/ (geticon collection) */
export const ICON_BASE = "/icons/";

export function getIconUrl(filename: string): string {
  return `${ICON_BASE}${filename}`;
}

/** Technology / label → geticon SVG filename */
const ICON_FILES: Record<string, string> = {
  // Tech stack
  "next.js": "nextjs-icon.svg",
  nextjs: "nextjs-icon.svg",
  "elysia.js": "typescript-icon.svg",
  elysia: "typescript-icon.svg",
  prisma: "prisma.svg",
  "prisma orm": "prisma.svg",
  "tailwind css": "tailwindcss-icon.svg",
  tailwind: "tailwindcss-icon.svg",
  postgresql: "postgresql.svg",
  postgres: "postgresql.svg",
  elixir: "erlang.svg",
  phoenix: "phoenix.svg",
  "phoenix/elixir": "phoenix.svg",
  react: "react.svg",
  typescript: "typescript-icon.svg",
  javascript: "javascript.svg",
  "node.js": "nodejs-icon.svg",
  nodejs: "nodejs-icon.svg",
  redis: "redis.svg",
  websocket: "websocket.svg",
  stripe: "stripe.svg",
  liveview: "phoenix.svg",
  docker: "docker-icon.svg",
  kubernetes: "kubernetes.svg",
  "docker/kubernetes": "docker-icon.svg",
  nginx: "nginx-icon.svg",
  "nginx configuration": "nginx-icon.svg",
  "load balancing": "nginx-icon.svg",
  "ci/cd pipelines": "circleci.svg",
  android: "android-icon.svg",
  "android sdk": "android-icon.svg",
  kotlin: "kotlin.svg",
  "jetpack compose": "android-icon.svg",
  "material design": "material-ui.svg",
  "arch linux": "archlinux.svg",
  "better auth": "auth0.svg",
  "system optimization": "linux-tux.svg",
  "network security": "shields.svg",

  // Categories
  "frontend development": "react.svg",
  "backend development": "nodejs-icon.svg",
  "devops & infrastructure": "docker-icon.svg",
  "mobile development": "android-icon.svg",
  "system & security": "archlinux.svg",

  // Proficiency
  master: "kubernetes.svg",
  expert: "react.svg",
  advanced: "nodejs-icon.svg",
  proficient: "typescript-icon.svg",
  learning: "linux-tux.svg",

  // Stats
  "technologies mastered": "webpack.svg",
  "years of experience": "wakatime.svg",
  "projects completed": "gitlab.svg",
  "production systems": "nginx-icon.svg",

  // Social
  github: "github-icon.svg",
  linkedin: "linkedin-icon.svg",
  twitter: "twitter.svg",
  discord: "discord.svg",

  // Interests
  game: "steam.svg",
  anime: "netflix.svg",
  technology: "typescript-icon.svg",

  // Timeline
  experience: "deploy.svg",
  education: "udemy.svg",

  // Misc
  role: "vercel.svg",
};

export function resolveIcon(name: string): string {
  const key = name.toLowerCase().trim();
  const filename = ICON_FILES[key] ?? "javascript.svg";
  return getIconUrl(filename);
}

export function iconFile(name: string): string {
  const key = name.toLowerCase().trim();
  return ICON_FILES[key] ?? "javascript.svg";
}
