import React from 'react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact'; // Create a simple contact form later

function App() {
  return (
    <div className="bg-slate-950 text-slate-200">
      <Background />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />


        <section id="projects" className="py-24 max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">My Projects</h2>
          <Projects />
        </section>

        {/* Create a simple Contact.jsx next */}
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