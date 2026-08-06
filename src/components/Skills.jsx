import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layout, Database, Wrench } from "lucide-react";
import { Card } from "./ui/card";

const skillCategories = [
    {
        category: "Backend & APIs",
        icon: Server,
        skills: [".NET 8 / .NET Core", "C#", "REST APIs", "OAuth 2.0", "Node.js"],
        color: "text-blue-400",
        glow: "shadow-blue-500/5 hover:border-blue-500/30"
    },
    {
        category: "Frontend Development",
        icon: Layout,
        skills: ["React", "Tailwind CSS", "JavaScript (ES6+)", "HTML5", "CSS3", "Quasar"],
        color: "text-purple-400",
        glow: "shadow-purple-500/5 hover:border-purple-500/30"
    },
    {
        category: "Databases",
        icon: Database,
        skills: ["SQL Server", "MySQL", "Firebase", "Supabase"],
        color: "text-green-400",
        glow: "shadow-green-500/5 hover:border-green-500/30"
    },
    {
        category: "Tools & Utilities",
        icon: Wrench,
        skills: ["Git", "Postman", "Vercel", "Figma", "Photoshop"],
        color: "text-orange-400",
        glow: "shadow-orange-500/5 hover:border-orange-500/30"
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-purple-500 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Technical <span className="bg-gradient-to-r from-sky-300 via-cyan-400 to-sky-500 bg-clip-text text-transparent">Skills</span>
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            A comprehensive stack tailored for building secure, high-performance web applications and robust data pipelines.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="h-full"
                            >
                                <Card className={`p-6 bg-slate-900/40 border border-white/5 h-full transition-all duration-300 shadow-xl ${category.glow}`}>
                                    <div className="flex flex-col h-full">
                                        <div className={`p-3 bg-white/5 rounded-xl w-fit mb-5 ${category.color}`}>
                                            <category.icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-5">
                                            {category.category}
                                        </h3>
                                        <div className="flex-1">
                                            <ul className="space-y-3">
                                                {category.skills.map((skill) => (
                                                    <li
                                                        key={skill}
                                                        className="text-slate-300 flex items-center gap-3 text-sm font-medium"
                                                    >
                                                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.6)]"></div>
                                                        <span>{skill}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;