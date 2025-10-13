const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Tokyo Night Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-gray-950/95 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&h=1080&fit=crop&q=80"
          alt="Tokyo night cityscape"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Neon overlay effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20 z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-950 to-transparent z-10"></div>
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
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-2xl shadow-purple-500/50">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=ywow-ai&backgroundColor=b6e3f4,c0aede,d1d4f9"
                alt="ywow-ai avatar"
                className="w-full h-full object-cover"
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
          "Just a fictional human character from a game, trying to debug
          reality."
        </p>

        {/* Interests badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["🎮 Game", "🎌 Anime", "💻 Teknologi"].map((interest) => (
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
            className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105"
            data-testid="view-portfolio-btn"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#portfolio")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="relative z-10">View Portfolio</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

export default Hero;
