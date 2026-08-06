import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

const projects = [
  {
    title: "Fintelli – Enterprise Accounting & Integration Platform",
    category: "Full-Stack Development (Enterprise)",
    image: "/projects/fintelli.png",
    description: "Developed a full-stack Xero integration platform to sync financial data, execute background worker tasks, and provide an interactive multi-tenant client portal UI.",
    tags: [".NET 8", "C#", "React", "SQL Server", "OAuth 2.0", "Tailwind CSS"],
    github: "https://github.com/Kasun09/InvoiceManagementAPI",
    demo: "#"
  },
  {
    title: "Fish Tank Monitoring System – Mobile App",
    category: "Mobile & IoT Development",
    image: "/projects/fishtank.png",
    description: "IoT-based real-time aquarium monitoring mobile application integrated with hardware sensors for live temperature, water level, and pH tracking.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "ESP32 IoT", "Arduino"],
    github: "https://github.com/Kasun09",
    demo: "#"
  },
  {
    title: "SmartRoute+ – AI Route Optimization System",
    category: "AI & Machine Learning",
    image: "/projects/smartroute.png",
    description: "Machine learning project implementing optimal route selection algorithms with interactive graph visualizers in Python.",
    tags: ["Python", "Machine Learning", "NetworkX", "Dijkstra's Algorithm"],
    github: "https://github.com/Kasun09",
    demo: "#"
  },
  {
    title: "Shanii Residence – Hotel Management Website",
    category: "Full-Stack Web Development",
    image: "/projects/shanii.png",
    description: "Full-stack web application featuring customer booking portals, meal ordering systems, and role-based admin management dashboards.",
    tags: ["PHP", "MySQL", "XAMPP", "Bootstrap", "CSS"],
    github: "https://github.com/Kasun09",
    demo: "#"
  },
  {
    title: "Productivity Dashboard – Frontend Application",
    category: "Frontend Development",
    image: "/projects/productivity.png",
    description: "React-based task and schedule management dashboard with persistent LocalStorage, date filtering, and smooth dark-mode UI animations.",
    tags: ["React", "Framer Motion", "LocalStorage API", "Tailwind CSS"],
    github: "https://github.com/Kasun09",
    demo: "#"
  },
  {
    title: "Personal Portfolio Website",
    category: "Frontend Development",
    image: "/projects/portfolio.png",
    description: "Fully responsive developer portfolio built with modular React components, smooth scroll animations, and performance optimizations.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    github: "https://github.com/Kasun09",
    demo: "https://github.com/Kasun09"
  }
];

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          whileHover={{ y: -6 }}
          className="group relative overflow-hidden rounded-2xl bg-slate-900/40 border border-white/5 hover:border-blue-500/20 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            {/* Image Container with Hover Effect */}
            <div className="aspect-[4/3] overflow-hidden relative border-b border-white/5">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors duration-300" />
              {/* Category Tag */}
              <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 text-blue-400 border border-white/10 backdrop-blur-md">
                <Layers className="w-3.5 h-3.5" />
                {project.category}
              </span>
            </div>

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </div>
          </div>

          {/* Tech Badges & Actions */}
          <div className="px-6 pb-6 mt-auto">
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-[10px] uppercase font-bold tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group/link"
              >
                <Github size={18} className="text-slate-500 group-hover/link:text-white transition-colors" />
                <span>Source Code</span>
              </a>
              {project.demo && project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;