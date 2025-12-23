import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "KB-Shoes | Premium E-Commerce Storefront",
    category: "Frontend Development",
    image: "https://i.postimg.cc/yYQw6Rfh/image.png", // Replace with your project screenshot
    description: "Built with: HTML5 • Tailwind CSS • JavaScript (ES6) • Firebase Hosting • Lucide Icons.",
    tags: ["HTML5", "Tailwind CSS", "JavaScript (ES6)", "Firebase Hosting", "Lucide Icons"],
    github: "https://github.com/Kasun09/ShoeShop",
    demo: "https://kb-shoe.web.app/"
  },
  {
    title: "Mobile App",
    category: "Mobile App Development",
    image: "https://i.postimg.cc/9f2T2Yh0/mobile.jpg",
    description: "Kotlin + Firebase for realtime tank & device control.",
    tags: ["Kotlin", "Firebase"],
    github: "https://github.com/Anjana 4444/Fish-farm-project",
    demo: "#"
  },
  {
    title: "SmartRoute+ – AI Route Optimization",
    category: "Data Structures & Algorithms",
    image: "https://i.postimg.cc/XvxZbMxp/Whats-App-Image-2025-10-13-at-07-25-46-4ac7f697.jpg",
    description: "Dijkstra + visualization using Python libraries.",
    tags: ["Python", "Dijkstra", "Visualization"],
    github: "#",
    demo: "#"
  },
  {
    title: "Library Management System",
    category: "Desktop Application Development",
    image: "https://i.postimg.cc/sxHqd2GT/image.png",
    description: "Manage books, students, issue & return system.",
    tags: ["C#", "Windows Forms", "SQL"],
    github: "https://github.com/Anjana4444/Library-managment-system",
    demo: "#"
  },
  {
    title: "IoT Fish Tank Monitor",
    category: "IoT Development",
    image: "https://i.postimg.cc/htghz3Qy/Whats-App-Image-2025-09-13-at-10-50-07-58d0aa76.jpg",
    description: "ESP32 + Firebase realtime water level, temperature, pH monitor.",
    tags: ["ESP32", "Firebase", "Arduino", "IoT"],

  },
  // Add more projects here following the same structure
];

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-white/10"
        >
          {/* Image Container */}
          <div className="aspect-square overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Project Title (Always visible below image or on bottom of card) */}
          <div className="p-4 bg-slate-900">
            <h3 className="text-white font-bold text-lg">{project.title}</h3>
            <p className="text-slate-400 text-sm">{project.category}</p>
          </div>

          {/* Hover Overlay - Project Details */}
          <motion.div
            className="absolute inset-0 bg-slate-950/90 flex flex-col justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-[10px] uppercase tracking-wider bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <a href={project.github} className="text-white hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href={project.demo} className="text-white hover:text-blue-400 transition-colors">
                <ExternalLink size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;