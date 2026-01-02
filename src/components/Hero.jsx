import React from 'react';
import { motion } from 'framer-motion';

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

const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center text-center overflow-hidden">

      {/* 🌈 Animated background blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="z-10 px-6"
      >
        {/* Name */}
        <motion.h2
          variants={item}
          className="mt-6 text-6xl md:text-8xl font-extrabold text-white tracking-tighter"
        >
          I'M KASUN{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-500">
            BANDARA
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="mt-6 text-lg md:text-xl text-slate-400 max-w-xl mx-auto leading-relaxed"
        >
          Software Engineering Undergraduate | Frontend Developer | Aspiring Full-Stack Developer and{' '}
          <span className="text-white">UI/UX</span>.{' '}
          {/* <span className="text-white">AI, ML</span>.*/}

        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="mt-10 flex gap-4 justify-center flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById('projects')
                .scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition"
          >
            Explore Projects
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById('contact')
                .scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-3 border border-slate-700 text-white font-semibold rounded-full hover:bg-slate-800 transition"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
