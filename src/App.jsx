import React from 'react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-950 text-slate-200">
      <Background />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Education />

        <section id="projects" className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-cyan-400">Projects</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A curated selection of my professional integrations, mobile applications, and full-stack solutions.
            </p>
          </div>
          <Projects />
        </section>

        <Skills />
        <Contact />
      </main>

      <footer className="py-10 text-center border-t border-white/5 text-slate-500 text-sm">
        © 2025 Kasun Bandara. Built with React & Tailwind.
      </footer>
    </div>
  );
}

export default App;