'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const highValueSkills = [
    // AI & Data
    { name: 'Python', icon: '🐍', category: 'AI & Data', level: 'Expert' },
    { name: 'TensorFlow', icon: '🧠', category: 'AI & Data', level: 'Advanced' },
    { name: 'LangChain', icon: '🔗', category: 'AI & Data', level: 'Advanced' },
    { name: 'PostgreSQL', icon: '🐘', category: 'AI & Data', level: 'Expert' },
    // Modern Backend
    { name: 'FastAPI', icon: '⚡', category: 'Backend', level: 'Expert' },
    { name: 'Node.js', icon: '🟢', category: 'Backend', level: 'Expert' },
    { name: 'Docker', icon: '🐳', category: 'Backend', level: 'Expert' },
    { name: 'AWS', icon: '☁️', category: 'Backend', level: 'Advanced' },
    // Modern Frontend
    { name: 'Next.js', icon: '▲', category: 'Frontend', level: 'Expert' },
    { name: 'React', icon: '⚛️', category: 'Frontend', level: 'Expert' },
    { name: 'TypeScript', icon: 'TS', category: 'Frontend', level: 'Expert' },
    { name: 'Tailwind', icon: '🎨', category: 'Frontend', level: 'Expert' },
];

const TiltCard = ({ skill }: { skill: typeof highValueSkills[0] }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['15deg', '-15deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-15deg', '15deg']);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
            }}
            className="relative h-48 w-full rounded-xl bg-black/40 border border-white/5 backdrop-blur-xl transition-all duration-300 group hover:border-primary/50"
        >
            {/* Glitch Effect Overlay (Simplified) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-primary/20 animate-pulse" />
                <div className="w-full h-[1px] bg-primary/50 absolute top-0 animate-[scanline_2s_linear_infinite]" />
            </div>

            {/* Holographic Border Glow */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_20px_rgba(0,240,255,0.2),0_0_20px_rgba(0,240,255,0.1)] pointer-events-none" />

            {/* Card Content */}
            <div
                style={{ transform: 'translateZ(50px)', transformStyle: 'preserve-3d' }}
                className="h-full w-full flex flex-col items-center justify-center p-6 gap-4"
            >
                {/* Radial Light behind icon */}
                <div className="absolute w-24 h-24 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <span className="text-4xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] group-hover:scale-110 transition-transform duration-500">
                    {skill.icon}
                </span>

                <div className="flex flex-col items-center">
                    <h3 className="text-white font-display font-bold text-lg uppercase tracking-widest group-hover:text-primary transition-colors">
                        {skill.name}
                    </h3>
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                        {skill.category}
                    </span>
                </div>

                {/* Level Indicator (Simulating VR Status) */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1">
                    <div className={`w-1 h-1 rounded-full bg-primary ${skill.level === 'Expert' ? 'animate-pulse' : 'opacity-40'}`} />
                    <span className="text-[8px] font-mono text-primary/60 uppercase">{skill.level}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default function Skills() {
    return (
        <section className="px-6 md:px-16 lg:px-24 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Capacidades Técnicas</span>
                    <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white uppercase tracking-tight">
                        Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Arsenal</span>
                    </h2>
                </motion.div>

                {/* Set perspective on the container */}
                <div
                    style={{ perspective: '1000px' }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {highValueSkills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <TiltCard skill={skill} />
                        </motion.div>
                    ))}
                </div>

                {/* Tactical Info Footer */}
                <div className="mt-16 flex justify-center">
                    <div className="px-6 py-2 border border-primary/20 rounded-full bg-primary/5 flex items-center gap-4">
                        <div className="flex gap-1">
                            {[1, 2, 3, 4].map(i => <div key={i} className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />)}
                        </div>
                        <span className="text-[10px] font-mono text-primary/80 uppercase tracking-[0.2em] font-bold">
                            System calibrated for High-Performance production
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
