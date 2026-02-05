'use client';

import { motion } from 'framer-motion';

export default function CVButton() {
    return (
        <motion.a
            href="/assets/docs/Software_Developer_JhonHarveyTipasSolis.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="fixed top-6 left-8 z-50 flex items-center gap-2 px-4 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group"
            aria-label="Download CV"
        >
            {/* Download Icon */}
            <svg
                className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
            </svg>

            {/* Text */}
            <span className="text-[11px] font-mono uppercase tracking-widest text-gray-400 group-hover:text-primary transition-colors duration-300">
                CV
            </span>
        </motion.a>
    );
}
