import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Globe, Database, Terminal, Layout, Server, Sparkles } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

// Configuration for floating background icons with pre-calculated sizes and animation durations
const floatingIcons = [
  { FloatingIcon: Code, top: '15%', left: '10%', delay: 0, size: 52, duration: 6.2 },
  { FloatingIcon: Cpu, top: '25%', left: '85%', delay: 2, size: 48, duration: 5.8 },
  { FloatingIcon: Globe, top: '65%', left: '15%', delay: 4, size: 55, duration: 6.4 },
  { FloatingIcon: Database, top: '75%', left: '80%', delay: 1, size: 42, duration: 5.3 },
  { FloatingIcon: Terminal, top: '10%', left: '60%', delay: 3, size: 58, duration: 6.7 },
  { FloatingIcon: Server, top: '80%', left: '40%', delay: 5, size: 45, duration: 5.9 },
  { FloatingIcon: Layout, top: '40%', left: '90%', delay: 2.5, size: 50, duration: 5.6 },
  { FloatingIcon: Sparkles, top: '50%', left: '5%', delay: 3.5, size: 44, duration: 6.1 },
];

const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center text-center overflow-hidden bg-slate-950">

      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Tech Icons Background */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((icon, index) => {
          const FloatingIcon = icon.FloatingIcon;
          return (
            <motion.div
              key={index}
              className="absolute text-slate-800"
              style={{ top: icon.top, left: icon.left }}
              initial={{ y: 0, opacity: 0 }}
              animate={{
                y: [-10, 10, -10],
                opacity: 1,
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: icon.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: icon.delay,
                opacity: { duration: 1 }
              }}
            >
              <FloatingIcon size={icon.size} strokeWidth={1.5} />
            </motion.div>
          );
        })}
      </div>

      {/* Main Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="z-10 px-6 relative"
      >
        {/* Status Badge */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/60 border border-slate-800 text-slate-400 text-sm mb-8 backdrop-blur-md mx-auto w-fit shadow-lg shadow-black/20"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span>Ready for Roles | Kandy / Colombo, Sri Lanka</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight"
        >
          KASUN{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
            BANDARA
          </span>
        </motion.h1>

        {/* Headline */}
        <motion.h2
          variants={item}
          className="mt-4 text-xl md:text-2xl lg:text-3xl font-bold text-slate-200 tracking-wide max-w-4xl mx-auto"
        >
          Full-Stack Software Engineer <span className="text-blue-500">|</span> React, .NET 8, C# & Cloud Solutions
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="mt-6 text-base md:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
        >
          "Software Engineering Undergraduate with hands-on industry experience in building scalable enterprise web applications, OAuth-secured API integrations, and modern high-performance user interfaces."
        </motion.p>

        {/* Tech Badge Highlights */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap gap-2.5 justify-center max-w-2xl mx-auto"
        >
          {['React', '.NET 8 / C#', 'SQL Server', 'Tailwind CSS', 'REST APIs', 'OAuth 2.0'].map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="mt-12 flex gap-4 justify-center flex-wrap"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="/Kasun-Bandara-CV.pdf"
            download="Kasun-Bandara-CV.pdf"
            className="px-8 py-3.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white font-semibold rounded-full shadow-[0_0_25px_rgba(79,70,229,0.35)] hover:shadow-[0_0_35px_rgba(79,70,229,0.55)] transition-all flex items-center gap-2 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById('experience')
                .scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-3.5 border border-slate-700 bg-slate-900/40 text-slate-300 font-semibold rounded-full hover:bg-slate-800/80 hover:text-white transition-colors cursor-pointer"
          >
            View Experience
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById('contact')
                .scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-3.5 border border-slate-700 bg-slate-900/40 text-slate-300 font-semibold rounded-full hover:bg-slate-800/80 hover:text-white transition-colors cursor-pointer"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
