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

// Configuration for floating background icons
const floatingIcons = [
  { Icon: Code, top: '15%', left: '10%', delay: 0 },
  { Icon: Cpu, top: '25%', left: '85%', delay: 2 },
  { Icon: Globe, top: '65%', left: '15%', delay: 4 },
  { Icon: Database, top: '75%', left: '80%', delay: 1 },
  { Icon: Terminal, top: '10%', left: '60%', delay: 3 },
  { Icon: Server, top: '80%', left: '40%', delay: 5 },
  { Icon: Layout, top: '40%', left: '90%', delay: 2.5 },
  { Icon: Sparkles, top: '50%', left: '5%', delay: 3.5 },
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
        {floatingIcons.map(({ Icon, top, left, delay }, index) => (
          <motion.div
            key={index}
            className="absolute text-slate-800"
            style={{ top, left }}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [-10, 10, -10],
              opacity: 1,
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay,
              opacity: { duration: 1 }
            }}
          >
            <Icon size={40 + Math.random() * 20} strokeWidth={1.5} />
          </motion.div>
        ))}
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
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800 text-slate-400 text-sm mb-8 backdrop-blur-sm mx-auto w-fit"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h2
          variants={item}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight"
        >
          I'M KASUN{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            BANDARA
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          Software Engineering Undergraduate | Frontend Developer | Aspiring Full-Stack Developer <span className="text-white font-medium">UI/UX </span>  & <span className="text-white font-medium">AI, ML.</span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="mt-10 flex gap-4 justify-center flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById('projects')
                .scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-3 bg-white text-black font-semibold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all"
          >
            View Projects
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById('contact')
                .scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-3 border border-slate-700 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
