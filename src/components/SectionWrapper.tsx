'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export default function SectionWrapper({ children, className = "", id }: SectionWrapperProps) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                transition: {
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1]
                }
            }}
            exit={{
                opacity: 0,
                scale: 0.95,
                filter: "blur(10px)",
                transition: {
                    duration: 0.8,
                    ease: "easeIn"
                }
            }}
            viewport={{ once: true, amount: 0.1, margin: "-10% 0px -10% 0px" }}
            className={`relative w-full py-32 flex flex-col justify-center bg-[#0a0a0a] overflow-hidden ${className}`}
        >
            {children}
        </motion.section>
    );
}
