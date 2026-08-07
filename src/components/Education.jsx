import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

const Education = () => {
    const items = [
        { 
            year: "2023 - Present", 
            degree: "BSc (Hons) in Computing", 
            school: "National Institute of Business Management" 
        },
        { 
            year: "2022 - 2023", 
            degree: "Diploma in Information Technology (DiTEC)", 
            school: "Esoft Metro Campus, Kandy" 
        },
        { 
            year: "2019 - 2022", 
            degree: "G.C.E Advanced Level (Physical Science Stream)", 
            school: "St. Sylvester's College, Kandy" 
        },
    ];

    return (
        <section id="education" className="py-24 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-cyan-400">Background</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Academic foundation and certifications that shaped my engineering mindset.
                    </p>
                </motion.div>

                <div className="relative border-l-2 border-slate-800 max-w-4xl mx-auto pl-6 md:pl-10 space-y-12">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            className="relative group"
                        >
                            {/* Glowing Timeline Connector Pin */}
                            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 p-1 bg-slate-950 border-2 border-sky-500 rounded-full shadow-[0_0_14px_rgba(14,165,233,0.5)] group-hover:scale-110 group-hover:shadow-[0_0_22px_rgba(14,165,233,0.75)] transition-all duration-300">
                                <GraduationCap className="w-4 h-4 text-sky-400" />
                            </div>

                            {/* Main Card */}
                            <div className="glow-card p-6 md:p-8 rounded-2xl bg-slate-900/40 border border-white/5 group-hover:border-sky-500/25 transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors duration-300">
                                            {item.degree}
                                        </h3>
                                        <p className="text-base font-semibold text-slate-300 mt-1 flex items-center gap-2">
                                            <BookOpen className="w-4 h-4 text-slate-500" />
                                            <span>{item.school}</span>
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-sky-400 font-medium font-mono shrink-0">
                                        <Calendar className="w-4 h-4" />
                                        <span>{item.year}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;