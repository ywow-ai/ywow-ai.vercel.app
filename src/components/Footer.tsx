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
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
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
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;
