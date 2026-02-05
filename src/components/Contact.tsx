'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="px-6 md:px-16 lg:px-24 py-32 bg-[#0a0a0a]">
            <div className="max-w-xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
                        Contacto
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white uppercase tracking-tight">
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Create?</span>
                    </h2>
                    <p className="text-gray-500 text-sm mt-4 font-body">
                        Hablemos de tu próximo proyecto.
                    </p>
                </motion.div>

                {/* Ghost Form */}
                <motion.form
                    action="https://formspree.io/f/your-form-id"
                    method="POST"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col gap-10"
                >
                    {/* Name Input */}
                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Tu nombre"
                            className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-gray-600 font-body focus:outline-none focus:border-primary transition-colors duration-300"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Tu email"
                            className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-gray-600 font-body focus:outline-none focus:border-primary transition-colors duration-300"
                        />
                    </div>

                    {/* Message Textarea */}
                    <div className="relative">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            placeholder="Cuéntame sobre tu proyecto..."
                            className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-gray-600 font-body focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group self-start flex items-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white font-mono text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-all duration-300"
                    >
                        Enviar Mensaje
                        <svg
                            className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.button>
                </motion.form>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex items-center justify-center gap-8 mt-20 pt-12 border-t border-white/5"
                >
                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/jhon-harvey-tipas-solis-b45135259/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary hover:scale-110 transition-all duration-300"
                        aria-label="LinkedIn"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/JhonHTipas21"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary hover:scale-110 transition-all duration-300"
                        aria-label="GitHub"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:jhonharveytipas@gmail.com"
                        className="text-gray-500 hover:text-primary hover:scale-110 transition-all duration-300"
                        aria-label="Email"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </a>
                </motion.div>

                {/* Footer Legal */}
                <motion.footer
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-16 pt-8"
                >
                    <p className="text-gray-600 text-[11px] font-mono tracking-wider">
                        © 2026 Jhon Harvey Tipas. Hecho con Next.js, Tailwind & Spline.
                    </p>
                </motion.footer>
            </div>
        </section>
    );
}
