'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

interface ProjectCardProps {
    id: string;
    title: string;
    description: string;
    stack: string[];
    image: string;
    github: string;
    live: string;
    isAlternate: boolean;
}

export default function ProjectCard({
    id,
    title,
    description,
    stack,
    image,
    github,
    live,
    isAlternate
}: ProjectCardProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.1]);

    return (
        <motion.div
            ref={containerRef}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`relative w-full flex flex-col ${isAlternate ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 p-8 lg:p-12 bg-[#141414] rounded-[2rem] lg:rounded-[3rem] overflow-hidden group`}
        >
            {/* Background ID Number (Adeola Style) */}
            <div className={`absolute top-0 ${isAlternate ? 'left-12' : 'right-12'} opacity-[0.03] select-none pointer-events-none`}>
                <span className="text-[12rem] lg:text-[20rem] font-display font-black italic">{id}</span>
            </div>

            {/* Image Container */}
            <div className="relative w-full lg:w-[55%] aspect-video overflow-hidden rounded-2xl bg-[#0a0a0a]">
                <motion.div style={{ y, scale }} className="relative w-full h-full">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                </motion.div>

                {/* Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Info Container */}
            <div className="w-full lg:w-[45%] flex flex-col justify-center z-10">
                <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-primary font-mono text-[10px] tracking-widest uppercase font-bold py-1 px-3 border border-primary/20 bg-primary/5 rounded-full">
                        {stack[0]}
                    </span>
                    {stack.slice(1).map((s) => (
                        <span key={s} className="text-white/40 font-mono text-[10px] tracking-widest uppercase py-1 px-3 border border-white/5 bg-white/5 rounded-full">
                            {s}
                        </span>
                    ))}
                </div>

                <h3 className="text-4xl lg:text-5xl font-display font-extrabold text-white mb-6 uppercase tracking-tight group-hover:text-primary transition-colors duration-500">
                    {title}
                </h3>

                <p className="text-gray-400 text-base lg:text-lg leading-relaxed mb-10 font-body max-w-lg">
                    {description}
                </p>

                <div className="flex flex-col gap-8">
                    {live !== '#' && (
                        <a
                            href={live}
                            target="_blank"
                            className="inline-flex flex-col group/link w-fit"
                        >
                            <span className="text-primary font-body text-xs uppercase tracking-[0.2em] font-bold mb-1">VISIT THE WEBSITE</span>
                            <div className="w-full h-[1px] bg-primary/30 origin-left scale-x-100 group-hover/link:bg-primary transition-colors" />
                        </a>
                    )}

                    <div className="flex items-center gap-6">
                        <a href={github} target="_blank" className="text-white/40 hover:text-white transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>
                        {live !== '#' && (
                            <a href={live} target="_blank" className="text-white/40 hover:text-white transition-colors">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
