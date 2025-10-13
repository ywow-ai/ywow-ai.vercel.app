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
            className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
            data-testid="about-title"
          >
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
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
                  <div className="text-3xl font-bold text-cyan-400">3+</div>
                  <div className="text-sm text-gray-400 mt-1">
                    Years Experience
                  </div>
                </div>
                <div className="flex-1 bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-purple-400">50+</div>
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
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
                      className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${tech.color}`}
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

export default About;
