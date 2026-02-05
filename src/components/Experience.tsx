'use client';

import { motion } from 'framer-motion';

const experiences = [
    {
        company: 'OUTLIER AI',
        role: 'AI Trainer & Prompt Engineer',
        period: '2024 (6 Meses)',
        description: 'Entrené y refiné LLMs mediante técnicas de RLHF y Prompt Engineering. Optimicé respuestas y evalué modelos de IA con métricas de calidad.',
        tags: ['Python', 'Machine Learning', 'TensorFlow', 'PyTorch', 'LLMs'],
    },
    {
        company: 'Freelance Developer',
        role: 'Full Stack Developer',
        period: '2021 - Presente',
        description: 'Desarrollo de aplicaciones web completas utilizando Next.js, Node.js y AWS. Diseño de APIs y despliegue de infraestructuras escalables.',
        tags: ['Python', 'Java', 'TypeScript', 'JavaScript', 'HTML & CSS', 'AWS', 'Docker', 'Git', 'FastAPI', 'Django', '.NET', 'React', 'Vue.js', 'Next.js', 'MySQL', 'Redis'],
    },
    {
        company: 'Universidad Santiago de Cali',
        role: 'Project Leader',
        period: '2021',
        description: 'Liderazgo en proyectos de IoT y tecnología sostenible. Integración de hardware y software para soluciones de impacto social.',
        tags: ['C++', 'IoT', 'Leadership', 'Sustainable Tech'],
    },
];

export default function Experience() {
    return (
        <section className="px-6 md:px-16 lg:px-24 bg-[#0a0a0a]">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Mi Trayectoria</span>
                    <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white uppercase tracking-tight">
                        Experiencia <span className="text-white/20 italic">Profesional</span>
                    </h2>
                </motion.div>

                <div className="relative space-y-12">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 md:-translate-x-1/2" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Dot on Timeline */}
                            <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full md:-translate-x-1/2 border-4 border-[#0a0a0a] z-10 hidden md:block" />

                            <div className="md:w-1/2 px-8">
                                <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'} text-left`}>
                                    <span className="text-primary font-mono text-[10px] tracking-widest mb-2">{exp.period}</span>
                                    <h3 className="text-2xl font-display font-bold text-white mb-1 uppercase tracking-wide">{exp.company}</h3>
                                    <p className="text-white/60 font-body text-sm mb-4 font-bold">{exp.role}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 font-body">
                                        {exp.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 text-[10px] text-white/40 font-mono tracking-tighter uppercase">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
