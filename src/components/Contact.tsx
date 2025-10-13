import { useState, type FormEventHandler } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // UI only - no backend integration
    alert("Thank you for your message! (This is a demo form)");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange: FormEventHandler<
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
      url: "https://twitter.com/ywow_ai",
      color: "hover:text-cyan-400",
    },
    {
      name: "Discord",
      icon: "💬",
      url: "https://discord.gg/ywow-ai",
      color: "hover:text-purple-400",
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
            data-testid="contact-title"
          >
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4">
            Let's create something amazing together
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
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 neon-button"
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
            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
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

export default Contact;
