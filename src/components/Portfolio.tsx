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
            className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
            data-testid="portfolio-title"
          >
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
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
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3
                  className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300"
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
                    className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
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

export default Portfolio;
