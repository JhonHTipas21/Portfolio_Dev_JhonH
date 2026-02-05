'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
    {
        id: '01',
        title: 'LulyDetalles',
        description: 'Plataforma de comercio electrónico personalizada para la gestión integral de inventario y ventas en tiempo real, optimizada para la conversión.',
        stack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
        image: '/projects/lulydetalles.jpeg',
        github: 'https://github.com/JhonHTipas21/LulyDetalles',
        live: 'https://luly-detalles.vercel.app/',
    },
    {
        id: '02',
        title: 'AI Vulnerability Scanner',
        description: 'Herramienta de ciberseguridad impulsada por IA para detectar vulnerabilidades críticas en código fuente mediante análisis semántico progresivo.',
        stack: ['Python', 'TensorFlow', 'Scikit-learn', 'FastAPI'],
        image: '/projects/AIscanner.png',
        github: 'https://github.com/JhonHTipas21/AI-Vulnerability-Scanner',
        live: '#',
    },
    {
        id: '03',
        title: 'Cognito Business',
        description: 'Sistema avanzado para la automatización y gestión inteligente de procesos empresariales, integrando flujos de trabajo eficientes y toma de decisiones basada en datos.',
        stack: ['AI', 'Management', 'Business Automation'],
        image: '/projects/cognitobunisess.jpg',
        github: 'https://github.com/JhonHTipas21/Cognito-Business',
        live: '#',
    },
    {
        id: '04',
        title: 'Monitor Inundaciones',
        description: 'Modelo predictivo de Machine Learning para alertas tempranas de inundaciones basado en el procesamiento de datos climáticos históricos y satelitales.',
        stack: ['Data Science', 'Pandas', 'ML Models', 'Python'],
        image: '/projects/pronosticodeinundaciones.png',
        github: 'https://github.com/JhonHTipas21/pronostico_inundaciones',
        live: '#',
    },
];

export default function Projects() {
    return (
        <section className="px-6 md:px-16 lg:px-24 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-32"
                >
                    <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Selección de Trabajos</span>
                    <h2 className="text-4xl md:text-7xl font-display font-extrabold text-white uppercase tracking-tight">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Projects</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-24 lg:gap-40">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            {...project}
                            isAlternate={index % 2 !== 0}
                        />
                    ))}
                </div>

                {/* Tactical Footer for Projects */}
                <div className="mt-40 flex flex-col items-center gap-6">
                    <p className="text-white/20 font-mono text-[10px] uppercase tracking-[0.4em]">¿Tienes un proyecto en mente?</p>
                    <a
                        href="mailto:jhonharveytipas@gmail.com"
                        className="text-2xl md:text-4xl font-display font-bold text-white hover:text-primary transition-colors duration-300 uppercase underline decoration-primary/20 underline-offset-8"
                    >
                        Hablemos del futuro
                    </a>
                </div>
            </div>
        </section>
    );
}
