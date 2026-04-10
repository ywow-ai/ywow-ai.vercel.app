"use client";

import Image from "next/image";
import { ChangeEventHandler, SubmitEventHandler, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <a
              href="#home"
              className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500 hover:from-purple-500 hover:to-cyan-400 transition-all duration-300"
            >
              ywow-ai
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group"
                  data-testid={`nav-${item.name.toLowerCase()}`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-cyan-400 hover:bg-gray-800 focus:outline-none transition-colors duration-300"
              data-testid="mobile-menu-button"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-purple-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-gray-300 hover:text-cyan-400 hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
                data-testid={`mobile-nav-${item.name.toLowerCase()}`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

type GitHub = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
  name: string;
  company: null;
  blog: string;
  location: string;
  email: null;
  hireable: null;
  bio: string;
  twitter_username: null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
};

const Hero = () => {
  const [github, setGithub] = useState<GitHub | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/ywow-ai")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("error fetch");
        }
      })
      .then((res) => {
        setGithub(res);
      });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Tokyo Night Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-gray-900/95 via-gray-900/90 to-gray-950/95 z-10"></div>
        <Image
          src="/image/tokyo-night-cityscape.jpg"
          alt="Tokyo night cityscape"
          className="w-full h-full object-cover opacity-40"
          fill
        />
        {/* Neon overlay effects */}
        <div className="absolute inset-0 bg-linear-to-r from-purple-900/20 via-transparent to-cyan-900/20 z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-gray-950 to-transparent z-10"></div>
      </div>

      {/* Animated neon particles */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute w-96 h-96 -bottom-48 -right-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute w-64 h-64 top-1/3 right-1/4 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
        {/* Avatar with neon glow */}
        <div className="mb-8 flex justify-center" data-testid="hero-avatar">
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-2xl shadow-purple-500/50">
              <Image
                src={github?.avatar_url ?? "/image/avatar.svg"}
                alt="ywow-ai avatar"
                className="w-full h-full object-cover"
                fill
              />
            </div>
          </div>
        </div>

        {/* Name with glitch effect */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 glitch-text"
          data-testid="hero-name"
          data-text="ywow-ai"
        >
          ywow-ai
        </h1>

        {/* Tagline */}
        <p
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto drop-shadow-lg"
          data-testid="hero-tagline"
        >
          &quot;Just a fictional human character from a game, trying to debug
          reality.&quot;
        </p>

        {/* Interests badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["🎮 Game", "🎌 Anime", "💻 Technology"].map((interest) => (
            <span
              key={interest}
              className="px-4 py-2 bg-gray-800/70 backdrop-blur-sm border border-purple-500/40 rounded-full text-sm text-cyan-400 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
            >
              {interest}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#portfolio"
            className="group relative px-8 py-3 bg-linear-to-r from-cyan-500 via-purple-600 to-pink-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105"
            data-testid="view-portfolio-btn"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#portfolio")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="relative z-10">View Portfolio</span>
            <div className="absolute inset-0 bg-linear-to-r from-pink-600 via-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-purple-500/70 backdrop-blur-sm bg-gray-900/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
            data-testid="contact-me-btn"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Me
          </a>
        </div>

        {/* Tech Badge */}
        <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-full text-sm text-cyan-400">
          <span className="text-lg">🏗️</span>
          <span>Fullstack Developer & System Architect</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg
          className="w-6 h-6 text-cyan-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

const About = () => {
  const techStack = [
    { name: "Next.js", color: "from-gray-700 to-gray-900", icon: "⚡" },
    { name: "Elysia.js", color: "from-blue-500 to-blue-700", icon: "🚀" },
    { name: "Prisma", color: "from-indigo-500 to-purple-600", icon: "💎" },
    { name: "Tailwind CSS", color: "from-cyan-400 to-blue-500", icon: "🎨" },
    { name: "PostgreSQL", color: "from-blue-600 to-blue-800", icon: "🐘" },
    { name: "Elixir", color: "from-purple-500 to-purple-700", icon: "💧" },
    { name: "Phoenix", color: "from-orange-500 to-red-600", icon: "🔥" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500"
            data-testid="about-title"
          >
            About Me
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <div className="space-y-6">
            <div
              className="bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
              data-testid="about-description"
            >
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                Fullstack Developer
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Seorang karakter fiksi dari sebuah game yang entah kenapa bisa
                coding. Passionate dalam mengembangkan aplikasi web modern
                dengan teknologi terkini.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Menguasai berbagai teknologi fullstack dari frontend hingga
                backend, dengan spesialisasi di JavaScript/TypeScript ecosystem
                dan functional programming dengan Elixir.
              </p>
              <div className="mt-6 flex gap-4">
                <div className="flex-1 bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-cyan-400">2+</div>
                  <div className="text-sm text-gray-400 mt-1">
                    Years Experience
                  </div>
                </div>
                <div className="flex-1 bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-purple-400">10+</div>
                  <div className="text-sm text-gray-400 mt-1">
                    Projects Done
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3
              className="text-2xl font-bold mb-6 text-center md:text-left"
              data-testid="tech-stack-title"
            >
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400">
                Tech Stack
              </span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className="group bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                  data-testid={`tech-${tech.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <div
                      className={`text-sm font-semibold text-transparent bg-clip-text bg-linear-to-r ${tech.color}`}
                    >
                      {tech.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useEffect, useRef } from "react";

const SkillsVisualization = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Proficiency levels with colors and descriptions
  type Proficiency = {
    label: string;
    color: string;
    bg: string;
    border: string;
    text: string;
    icon: string;
  };
  type ProficiencyLevels = Record<string, Proficiency>;

  const proficiencyLevels: ProficiencyLevels = {
    master: {
      label: "Master",
      color: "from-yellow-400 to-orange-500",
      bg: "bg-yellow-500/20",
      border: "border-yellow-500/50",
      text: "text-yellow-400",
      icon: "👑",
    },
    expert: {
      label: "Expert",
      color: "from-purple-400 to-pink-500",
      bg: "bg-purple-500/20",
      border: "border-purple-500/50",
      text: "text-purple-400",
      icon: "⚡",
    },
    advanced: {
      label: "Advanced",
      color: "from-cyan-400 to-blue-500",
      bg: "bg-cyan-500/20",
      border: "border-cyan-500/50",
      text: "text-cyan-400",
      icon: "🚀",
    },
    proficient: {
      label: "Proficient",
      color: "from-green-400 to-emerald-500",
      bg: "bg-green-500/20",
      border: "border-green-500/50",
      text: "text-green-400",
      icon: "✓",
    },
    learning: {
      label: "Learning",
      color: "from-gray-400 to-gray-500",
      bg: "bg-gray-500/20",
      border: "border-gray-500/50",
      text: "text-gray-400",
      icon: "📚",
    },
  };

  type Skill = {
    name: string;
    proficiency: "master" | "expert" | "advanced" | "proficient" | "learning";
    years: string;
  };

  type SkillCategory = {
    category: string;
    icon: string;
    color: string;
    skills: Skill[];
  };

  const skillCategories: SkillCategory[] = [
    {
      category: "Frontend Development",
      icon: "🎨",
      color: "from-cyan-500 to-blue-500",
      skills: [
        { name: "Next.js", proficiency: "expert", years: "3+" },
        { name: "React", proficiency: "expert", years: "4+" },
        { name: "Tailwind CSS", proficiency: "expert", years: "3+" },
        { name: "TypeScript", proficiency: "expert", years: "4+" },
      ],
    },
    {
      category: "Backend Development",
      icon: "⚙️",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Elysia.js", proficiency: "master", years: "2+" },
        { name: "Phoenix/Elixir", proficiency: "advanced", years: "2+" },
        { name: "Prisma ORM", proficiency: "expert", years: "3+" },
        { name: "PostgreSQL", proficiency: "expert", years: "4+" },
      ],
    },
    {
      category: "DevOps & Infrastructure",
      icon: "🚀",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "nginx Configuration", proficiency: "advanced", years: "3+" },
        { name: "Load Balancing", proficiency: "expert", years: "3+" },
        { name: "Docker/Kubernetes", proficiency: "advanced", years: "2+" },
        { name: "CI/CD Pipelines", proficiency: "advanced", years: "2+" },
      ],
    },
    {
      category: "Mobile Development",
      icon: "📱",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Jetpack Compose", proficiency: "advanced", years: "2+" },
        { name: "Android SDK", proficiency: "advanced", years: "3+" },
        { name: "Kotlin", proficiency: "advanced", years: "3+" },
        { name: "Material Design", proficiency: "advanced", years: "3+" },
      ],
    },
    {
      category: "System & Security",
      icon: "🔒",
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Arch Linux", proficiency: "master", years: "5+" },
        { name: "Better Auth", proficiency: "expert", years: "2+" },
        { name: "System Optimization", proficiency: "expert", years: "4+" },
        { name: "Network Security", proficiency: "advanced", years: "2+" },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const currentElement = sectionRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 top-1/4 -left-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute w-96 h-96 bottom-1/4 -right-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500"
            data-testid="skills-viz-title"
          >
            Technical Arsenal
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4">
            Data flows like water - clear, purposeful, elegant
          </p>
        </div>

        {/* Proficiency Legend */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {Object.entries(proficiencyLevels).map(([key, level]) => (
            <div
              key={key}
              className={`flex items-center gap-2 px-4 py-2 ${level.bg} border ${level.border} rounded-full`}
            >
              <span className="text-lg">{level.icon}</span>
              <span className={`text-sm font-semibold ${level.text}`}>
                {level.label}
              </span>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
              style={{
                animationDelay: `${categoryIndex * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-out",
              }}
              data-testid={`skill-category-${categoryIndex}`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{category.icon}</span>
                <h3
                  className={`text-xl font-bold text-transparent bg-clip-text bg-linear-to-r ${category.color}`}
                >
                  {category.category}
                </h3>
              </div>

              {/* Skill Items */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => {
                  const proficiency = proficiencyLevels[skill.proficiency];
                  return (
                    <div
                      key={skill.name}
                      className="group flex items-center justify-between p-3 bg-gray-900/30 rounded-lg hover:bg-gray-900/50 transition-all duration-300"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateX(0)"
                          : "translateX(-20px)",
                        transition: `all 0.6s ease-out ${
                          categoryIndex * 100 + skillIndex * 100
                        }ms`,
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                          {proficiency.icon}
                        </span>
                        <div>
                          <div className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                            {skill.name}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            {skill.years} years
                          </div>
                        </div>
                      </div>
                      <div
                        className={`px-3 py-1 ${proficiency.bg} border ${proficiency.border} rounded-full`}
                      >
                        <span
                          className={`text-xs font-semibold ${proficiency.text}`}
                        >
                          {proficiency.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Technologies Mastered", value: "10+", icon: "💻" },
            { label: "Years of Experience", value: "2+", icon: "⏱️" },
            { label: "Projects Completed", value: "10+", icon: "✅" },
            { label: "Production Systems", value: "3+", icon: "⚡" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease-out ${1000 + index * 100}ms`,
              }}
              data-testid={`stat-${index}`}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "AI Gaming Platform",
      description:
        "Platform gaming dengan AI-powered matchmaking dan real-time analytics. Built with Next.js and Prisma.",
      tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
      demoLink: "#",
      sourceLink: "#",
    },
    {
      id: 2,
      title: "Real-time Chat API",
      description:
        "High-performance real-time chat API dengan WebSocket support menggunakan Elysia.js framework.",
      tech: ["Elysia.js", "WebSocket", "Redis"],
      image:
        "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop",
      demoLink: "#",
      sourceLink: "#",
    },
    {
      id: 3,
      title: "Anime Tracker Dashboard",
      description:
        "Dashboard untuk tracking anime watchlist dengan recommendation system. Full-stack app dengan Phoenix LiveView.",
      tech: ["Elixir", "Phoenix", "LiveView", "PostgreSQL"],
      image:
        "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=800&h=600&fit=crop",
      demoLink: "#",
      sourceLink: "#",
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce platform dengan payment integration dan real-time inventory management.",
      tech: ["Next.js", "Stripe", "Prisma", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      demoLink: "#",
      sourceLink: "#",
    },
  ];

  return (
    <section id="portfolio" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500"
            data-testid="portfolio-title"
          >
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4">
            Some of my recent works and projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
              data-testid={`project-${project.id}`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  fill
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3
                  className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500 group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300"
                  data-testid={`project-title-${project.id}`}
                >
                  {project.title}
                </h3>
                <p
                  className="text-gray-400 mb-4 leading-relaxed"
                  data-testid={`project-description-${project.id}`}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs text-purple-400 hover:bg-purple-500/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    className="flex-1 text-center px-4 py-2 bg-linear-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                    data-testid={`project-demo-${project.id}`}
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.sourceLink}
                    className="flex-1 text-center px-4 py-2 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                    data-testid={`project-source-${project.id}`}
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Timeline = () => {
  type Experience = {
    id: number;
    type: "experience" | "education";
    title: string;
    organization: string;
    period: string;
    description: string;
  };

  const experiences: Experience[] = [
    {
      id: 1,
      type: "experience",
      title: "Senior Fullstack Developer",
      organization: "Tech Innovations Inc.",
      period: "2023 - Present",
      description:
        "Leading development of scalable web applications using Next.js, Elixir, and modern cloud infrastructure. Mentoring junior developers and architecting microservices.",
    },
    {
      id: 2,
      type: "experience",
      title: "Fullstack Developer",
      organization: "Digital Solutions Co.",
      period: "2021 - 2023",
      description:
        "Developed and maintained multiple client projects using React, Node.js, and PostgreSQL. Implemented CI/CD pipelines and improved application performance by 40%.",
    },
    {
      id: 3,
      type: "education",
      title: "Bachelor of Computer Science",
      organization: "Virtual University of Gaming",
      period: "2017 - 2021",
      description:
        "Focused on Software Engineering and AI. Final project: AI-powered game recommendation system using machine learning.",
    },
    {
      id: 4,
      type: "experience",
      title: "Junior Web Developer",
      organization: "Startup Hub",
      period: "2020 - 2021",
      description:
        "Built responsive websites and web applications. Collaborated with design team to implement pixel-perfect UI/UX.",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500"
            data-testid="timeline-title"
          >
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-cyan-500 via-purple-500 to-cyan-500"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                data-testid={`timeline-item-${item.id}`}
              >
                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0
                      ? "md:pr-8 md:text-right"
                      : "md:pl-8 md:text-left"
                  }`}
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                    {/* Type Badge */}
                    <div
                      className={`inline-block mb-3 ${
                        index % 2 === 0 ? "md:float-right" : "md:float-left"
                      }`}
                    >
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          item.type === "experience"
                            ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                            : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                        }`}
                      >
                        {item.type === "experience"
                          ? "💼 Experience"
                          : "🎓 Education"}
                      </span>
                    </div>
                    <div className="clear-both"></div>

                    {/* Period */}
                    <div
                      className="text-sm text-cyan-400 font-semibold mb-2"
                      data-testid={`timeline-period-${item.id}`}
                    >
                      {item.period}
                    </div>

                    {/* Title */}
                    <h3
                      className="text-xl font-bold mb-2 text-white"
                      data-testid={`timeline-title-${item.id}`}
                    >
                      {item.title}
                    </h3>

                    {/* Organization */}
                    <div
                      className="text-purple-400 font-medium mb-3"
                      data-testid={`timeline-org-${item.id}`}
                    >
                      {item.organization}
                    </div>

                    {/* Description */}
                    <p
                      className="text-gray-400 text-sm leading-relaxed"
                      data-testid={`timeline-desc-${item.id}`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-linear-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg shadow-purple-500/50 z-10">
                  <div className="w-full h-full rounded-full bg-linear-to-r from-cyan-400 to-purple-400 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // UI only - no backend integration
    alert("Thank you for your message! (This is a demo form)");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = ({ currentTarget: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: "🐙",
      url: "https://github.com/ywow-ai",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://linkedin.com/in/ywow-ai",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: "🐦",
      url: "https://twitter.com/_chmod_x",
      color: "hover:text-cyan-400",
    },
    {
      name: "Discord",
      icon: "💬",
      url: "https://discord.gg/ywow.ai",
      color: "hover:text-purple-400",
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500"
            data-testid="contact-title"
          >
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4">
            {"Let's create something amazing together"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  placeholder="Your name"
                  data-testid="contact-name-input"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                  data-testid="contact-email-input"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                  placeholder="Your message here..."
                  data-testid="contact-message-input"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-linear-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 neon-button"
                data-testid="contact-submit-btn"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="space-y-8">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 ${social.color}`}
                    data-testid={`social-${social.name.toLowerCase()}`}
                  >
                    <span className="text-3xl">{social.icon}</span>
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-linear-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-400">
                ⚡ Quick Response
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I typically respond within 24 hours. For urgent matters, feel
                free to reach out via Discord for faster communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-gray-900/50 backdrop-blur-sm border-t border-purple-500/20 py-8"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500 mb-2">
              ywow-ai
            </div>
            <p className="text-gray-400 text-sm">
              Debugging reality, one line at a time.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} ywow-ai. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with React & Tailwind CSS
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 text-sm">
            <a
              href="#home"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="mt-8 h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </div>
    </footer>
  );
};

export const HomeComponent = () => {
  return (
    <div className="App bg-gray-950 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <SkillsVisualization />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
};
