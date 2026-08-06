import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: "Software Engineering Intern",
            company: "Team Collaboro Pvt Ltd",
            duration: "Jan 2026 – Jul 2026",
            location: "Colombo, Sri Lanka (Hybrid/Remote)",
            techStack: [".NET 8", "C#", "React", "SQL Server", "OAuth 2.0", "REST APIs", "Tailwind CSS"],
            impacts: [
                "Contributed to full-stack development, third-party API integrations, and scalable enterprise web applications.",
                "Developed a Full-Stack Xero Integration platform using .NET 8 Core, C#, and React to automate financial data synchronization and background workflows.",
                "Designed and implemented a responsive Client Portal Website featuring multi-tenant dashboards, dynamic controls, and modern UI components.",
                "Collaborated on backend security enhancements (OAuth 2.0 flow, token lifetime management), database schema optimizations in SQL Server, and system testing."
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            {/* Background Light Glow */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-sky-500 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-cyan-400">Experience</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Developing enterprise-grade web platforms and custom integrations in fast-paced software environments.
                    </p>
                </motion.div>

                <div className="relative border-l-2 border-slate-800 max-w-4xl mx-auto pl-6 md:pl-10 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            className="relative group"
                        >
                            {/* Glowing Timeline Connector Pin */}
                            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 p-1 bg-slate-950 border-2 border-sky-500 rounded-full shadow-[0_0_14px_rgba(14,165,233,0.5)] group-hover:scale-110 group-hover:shadow-[0_0_22px_rgba(14,165,233,0.75)] transition-all duration-300">
                                <Briefcase className="w-4 h-4 text-sky-400" />
                            </div>

                            {/* Main Card */}
                            <div className="glow-card p-6 md:p-8 rounded-2xl bg-slate-900/40 border border-white/5 group-hover:border-sky-500/25 transition-all duration-300">
                                {/* Header Details */}
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors duration-300">
                                            {exp.role}
                                        </h3>
                                        <p className="text-lg font-semibold text-slate-300 mt-1">
                                            {exp.company}
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-2 text-sm text-slate-400 font-medium">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-slate-500" />
                                            <span>{exp.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-slate-500" />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Impact List */}
                                <ul className="space-y-3.5 mb-6 text-slate-300">
                                    {exp.impacts.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-base leading-relaxed text-justify">
                                            <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech Badges */}
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                    {exp.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 rounded-md text-xs font-semibold bg-slate-950/80 text-slate-400 border border-white/5 hover:border-sky-500/25 hover:text-sky-400 transition-colors duration-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
