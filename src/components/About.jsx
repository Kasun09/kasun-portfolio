import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid md:grid-cols-2 gap-12 items-center"
            >
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative bg-slate-900 rounded-2xl p-2">
                        <img src="https://i.postimg.cc/V6ndSBM7/Untitled-design-(1).jpg" alt="Profile" className="rounded-xl w-full" />
                    </div>
                </div>
                <div>
                    <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
                    <p className="text-slate-300 leading-relaxed mb-6 text-justify text-lg">
                        I am a results driven Full-Stack Software Engineer with hands on industry experience in designing, building, and deploying modern web applications and robust API integrations. Specializing in the React and .NET ecosystems, I bridge the gap between high fidelity frontends and secure, scalable backends. During my industry tenure, I have successfully delivered multi tenant portals, automated third-party integrations (such as Xero), and background worker workflows, demonstrating a track record of driving system efficiency through clean, maintainable code.
                    </p>
                    <div className="flex gap-4">
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-white/10 flex-1">
                            <h3 className="text-blue-400 font-bold text-xl">Internship</h3>
                            <p className="text-xs text-slate-500 mt-1">6 Months Full-Stack Experience</p>
                        </div>
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-white/10 flex-1">
                            <h3 className="text-purple-400 font-bold text-xl">6+ Major</h3>
                            <p className="text-xs text-slate-500 mt-1">Projects Completed</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <a
                            href="/Kasun-Bandara-CV.pdf"
                            download="Kasun-Bandara-CV.pdf"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/10 cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download My CV
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
export default About;