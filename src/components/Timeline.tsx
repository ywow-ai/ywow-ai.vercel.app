const Timeline = () => {
  const experiences = [
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
            className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
            data-testid="timeline-title"
          >
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500"></div>

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
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg shadow-purple-500/50 z-10">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
