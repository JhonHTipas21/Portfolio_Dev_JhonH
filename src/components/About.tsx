'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const stats = [
    { label: 'Años Experiencia', value: '3+' },
    { label: 'Proyectos Completados', value: '25+' },
    { label: 'Stack', value: 'Backend / Frontend' },
    { label: 'Foco Principal', value: 'AI/ML & DevOps' },
];

const languages = [
    { label: 'Idioma Materno', value: 'Español', sublabel: 'Nativo' },
    { label: 'Professional Working Proficiency', value: 'Inglés', sublabel: 'B2' },
];

export default function About() {
    return (
        <section className="px-6 md:px-16 lg:px-24 bg-[#0a0a0a] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Foto Personal con efecto B&N a Color */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full lg:w-1/2 aspect-[4/5] max-w-md group"
                    >
                        <div className="absolute inset-0 border border-primary/20 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
                        <div className="relative w-full h-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
                            <Image
                                src="/assets/images/IMG_4312.JPG"
                                alt="Jhon Harvey"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Contenido de Texto */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Sobre Mí</span>
                            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white uppercase tracking-tight mb-8">
                                No me limito a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">escribir código</span>
                            </h2>

                            <p className="text-gray-400 text-lg leading-relaxed mb-12 font-body">
                                Soy un desarrollador apasionado por la intersección entre el software robusto y la inteligencia artificial.
                                Mi enfoque híbrido me permite no solo construir interfaces rápidas y backend escalables, sino también integrar
                                modelos de IA que resuelven problemas reales.
                            </p>
                        </motion.div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                    className="p-6 bg-white/5 border border-white/5 rounded-sm backdrop-blur-sm transition-colors hover:border-primary/20 group"
                                >
                                    <div className="text-2xl font-display font-bold text-primary mb-1 group-hover:scale-110 origin-left transition-transform duration-300">
                                        {stat.value}
                                    </div>
                                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-mono font-bold">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Languages Grid */}
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            {languages.map((lang, index) => (
                                <motion.div
                                    key={lang.value}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                    className="p-6 bg-white/5 border border-white/5 rounded-sm backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] group"
                                >
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <span className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors duration-300">
                                            {lang.sublabel}
                                        </span>
                                        <span className="text-sm font-body text-gray-400">
                                            {lang.value}
                                        </span>
                                    </div>
                                    <div className="text-[9px] text-gray-500 uppercase tracking-widest font-mono">
                                        {lang.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
