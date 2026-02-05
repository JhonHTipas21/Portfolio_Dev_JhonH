'use client';

import { motion } from 'framer-motion';
import Robot3D from './Robot3D';

export default function Hero() {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier similar to Monument Extended vibe
            },
        },
    };

    return (
        <section className="relative min-h-screen w-full flex items-center px-6 md:px-16 lg:px-24 overflow-hidden bg-[#0a0a0a]">
            {/* Background Glow */}
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

            {/* Contenido de Texto */}
            <motion.div
                className="relative z-20 w-full lg:w-[55%] pt-20"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-[clamp(2.8rem,9vw,7.5rem)] leading-[0.9] font-display font-extrabold text-white mb-6 uppercase tracking-tight"
                >
                    Soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400 drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">Jhon Harvey</span>
                </motion.h1>

                <motion.h2
                    variants={itemVariants}
                    className="text-[clamp(1.2rem,3vw,2.2rem)] font-display font-bold text-white/90 mb-8 uppercase tracking-wide"
                >
                    Full Stack Developer <span className="text-primary">&</span> AI Engineer
                </motion.h2>

                <motion.p
                    variants={itemVariants}
                    className="text-gray-400 max-w-xl text-base md:text-lg mb-12 leading-relaxed font-body"
                >
                    Desarrollo productos digitales que combinan frontend moderno,
                    backend sólido e IA aplicada a casos reales para crear experiencias
                    digitales excepcionales.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-wrap gap-5">
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="group relative px-10 py-4 bg-primary text-black font-bold rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] active:scale-95"
                    >
                        <span className="relative z-10">VER PROYECTOS</span>
                        <div className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
                        <span className="absolute inset-0 z-10 flex items-center justify-center text-black font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">VER PROYECTOS</span>
                    </button>

                    <button
                        onClick={() => scrollToSection('contact')}
                        className="px-10 py-4 border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 rounded-sm font-bold text-white tracking-widest text-sm active:scale-95"
                    >
                        CONTACTO
                    </button>
                </motion.div>
            </motion.div>

            {/* Robot 3D Spline - Desktop Only */}
            <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[55%] h-[85%] z-10 hidden lg:block select-none pointer-events-auto">
                <Robot3D />
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] text-white/30 tracking-[0.2em] uppercase font-mono">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
            </motion.div>
        </section>
    );
}
