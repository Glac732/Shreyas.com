import { motion } from "framer-motion";
import { Mail, Instagram, MessageCircle } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen relative">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg"
        >
          Hi, I'm Shreyas 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-xl md:text-2xl font-light max-w-2xl"
        >
          13 y/o tech enthusiast 🚀 I code, build Discord bots, edit videos, and design websites with creativity & style.
        </motion.p>

        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="#projects"
          className="mt-10 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-2xl font-bold text-lg"
        >
          Explore My Work
        </motion.a>

        {/* Animated Background */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
            transition={{ repeat: Infinity, duration: 10 }}
            className="w-96 h-96 bg-purple-500/30 rounded-full blur-3xl absolute top-20 left-10"
          />
          <motion.div
            animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
            transition={{ repeat: Infinity, duration: 12 }}
            className="w-96 h-96 bg-pink-500/30 rounded-full blur-3xl absolute bottom-20 right-10"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6" id="about">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-10"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto text-lg md:text-xl leading-relaxed"
        >
          I love experimenting with code and tech. From building Discord bots 🤖 that make servers fun, to designing futuristic websites 🌐, and editing cinematic videos 🎬 — I do it all with passion and a touch of creativity.
        </motion.p>
      </section>

      {/* Projects Section with Sliding */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-800 to-black" id="projects">
        <h2 className="text-5xl font-bold text-center mb-16">My Projects</h2>
        <div className="flex overflow-x-scroll space-x-8 scrollbar-hide px-4">
          {[
            { title: "⚡ Websites", desc: "Responsive, animated, and modern web apps." },
            { title: "🤖 Discord Bots", desc: "Smart automation + fun features for servers." },
            { title: "🎬 Video Editing", desc: "Smooth transitions, storytelling, and VFX." },
            { title: "💡 Coding Experiments", desc: "Exploring AI, automation, and game dev." }
          ].map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="min-w-[300px] md:min-w-[350px] bg-white/10 p-6 rounded-2xl shadow-xl hover:shadow-purple-500/30 transition"
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="opacity-80">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 text-center relative" id="contact">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-10"
        >
          Let's Connect 🌐
        </motion.h2>

        <p className="mb-8 text-lg opacity-80">
          Want to collaborate, share ideas, or just say hi? Reach out!
        </p>

        <div className="flex flex-col items-center space-y-6">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:shreyas@example.com"
            className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 font-bold rounded-2xl shadow-lg text-lg"
          >
            <Mail className="w-5 h-5" /> <span>Email Me</span>
          </motion.a>

          <div className="flex space-x-8 text-lg">
            <a href="https://discord.com/users/just_in1.1" target="_blank" className="flex items-center space-x-2 hover:text-purple-400">
              <MessageCircle className="w-5 h-5" /> <span>Discord: just_in1.1</span>
            </a>
            <a href="https://instagram.com/l.lionss" target="_blank" className="flex items-center space-x-2 hover:text-pink-400">
              <Instagram className="w-5 h-5" /> <span>Instagram: l.lionss</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm opacity-70 border-t border-gray-700">
        © {new Date().getFullYear()} Shreyas | Crafted with ⚡ Tech + ❤️ Passion
      </footer>
    </div>
  );
}
