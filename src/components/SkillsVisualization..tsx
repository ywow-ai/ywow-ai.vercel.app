import { useState, useEffect, useRef } from "react";

const SkillsVisualization = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
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
            className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
            data-testid="skills-viz-title"
          >
            Technical Arsenal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
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
                  className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}
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
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease-out ${1000 + index * 100}ms`,
              }}
              data-testid={`stat-${index}`}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Terminal Hint */}
        {/* <div className="mt-12 text-center">
          <div className="inline-block bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-6 py-3">
            <p className="text-cyan-400 text-sm font-mono">
              💡 Press{" "}
              <kbd className="px-2 py-1 bg-gray-900 border border-cyan-500/50 rounded text-xs">
                Ctrl+K
              </kbd>{" "}
              or{" "}
              <kbd className="px-2 py-1 bg-gray-900 border border-cyan-500/50 rounded text-xs">
                `
              </kbd>{" "}
              to open terminal
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SkillsVisualization;
