'use client';

import { motion } from 'framer-motion';

interface EducationItem {
    category: string;
    title: string;
    institution: string;
    period: string;
    description?: string;
    credential: string | null;
}

const educationData: EducationItem[] = [
    {
        category: 'Educación Superior',
        title: 'Ingeniería de Sistemas',
        institution: 'Universidad Santiago de Cali',
        period: 'Feb 2022 - Presente (9º Semestre)',
        description: 'Enfoque en arquitectura de software, gestión de proyectos tecnológicos y desarrollo de soluciones basadas en IA.',
        credential: null,
    },
    {
        category: 'Diplomados & Especializaciones',
        title: 'Diplomado en Inteligencia Artificial y PLN',
        institution: 'Universidad Santiago de Cali',
        period: '2025',
        credential: '/assets/docs/Diplomado-PLN.pdf',
    },
    {
        category: 'Certificaciones Cloud & DevOps',
        title: 'Automation in the AWS Cloud',
        institution: 'Amazon Web Services (AWS)',
        period: 'Dic 2024',
        credential: '/assets/docs/Automation in the AWS Cloud.pdf',
    },
    {
        category: 'Certificaciones Cloud & DevOps',
        title: 'DevOps on AWS and Project Management',
        institution: 'Amazon Web Services (AWS)',
        period: 'Dic 2024',
        credential: '/assets/docs/DevOps en AWS.pdf',
    },
    {
        category: 'Programación & Lenguajes',
        title: 'Java: Variables y Estructuras de Control (POO)',
        institution: 'SENA',
        period: '2021',
        credential: '/assets/docs/certificado de aprobacion java - orientada a objetos.pdf',
    },
    {
        category: 'Programación & Lenguajes',
        title: 'Python Essentials 1',
        institution: 'Python Institute / Cisco',
        period: '2023',
        credential: '/assets/docs/Python_Essentials_1_Badge20230730-28-52wj5r.pdf',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export default function Education() {
    return (
        <section className="px-6 md:px-16 lg:px-24 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Column - Sticky Title */}
                    <div className="lg:w-1/3 lg:sticky lg:top-32 lg:self-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
                                Formación Académica
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white uppercase tracking-tight leading-tight">
                                Educación
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
                                    & Cursos
                                </span>
                            </h2>
                            <p className="text-gray-500 text-sm mt-6 font-body leading-relaxed max-w-xs">
                                Formación continua en tecnologías emergentes, cloud computing y desarrollo de software.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column - Education Items */}
                    <motion.div
                        className="lg:w-2/3 flex flex-col gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {educationData.map((item, index) => (
                            <motion.div
                                key={`${item.title}-${index}`}
                                variants={itemVariants}
                                className="group relative p-6 bg-white/[0.02] border border-white/5 rounded-lg transition-all duration-300 hover:bg-white/5 hover:border-l-4 hover:border-l-cyan-500 hover:pl-5"
                            >
                                {/* Category Tag */}
                                <span className="text-primary/60 font-mono text-[10px] tracking-widest uppercase mb-3 block">
                                    {item.category}
                                </span>

                                {/* Title & Institution */}
                                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 font-body text-sm mb-1">
                                    {item.institution}
                                </p>
                                <p className="text-gray-600 font-mono text-xs tracking-wide">
                                    {item.period}
                                </p>

                                {/* Description (if exists) */}
                                {item.description && (
                                    <p className="text-gray-500 font-body text-sm mt-4 leading-relaxed">
                                        {item.description}
                                    </p>
                                )}

                                {/* Credential Button (only if credential exists) */}
                                {item.credential && (
                                    <a
                                        href={item.credential}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 mt-5 px-4 py-2 text-xs font-mono uppercase tracking-widest text-primary border border-primary/30 rounded-full bg-primary/5 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                                    >
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                        Ver Credencial
                                    </a>
                                )}

                                {/* Decorative Line */}
                                <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
