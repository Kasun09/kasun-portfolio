import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    const items = [
        { year: "2023 - Present", degree: "BSc (Hons) in Computing", school: "National Institute of Business Management" },
        { year: "2019 - 2022", degree: "G.C.E Advanced Level(Physical science stream)", school: "St.Sylvesters college, Kandy" },
    ];

    return (
        <section id="education" className="py-24 max-w-3xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Education</h2>
            <div className="space-y-8">
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative pl-8 border-l-2 border-blue-500/30"
                    >
                        <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_#3b82f6]" />
                        <span className="text-blue-400 text-sm font-mono">{item.year}</span>
                        <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                        <p className="text-slate-400">{item.school}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
export default Education;