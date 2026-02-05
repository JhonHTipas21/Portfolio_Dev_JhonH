'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const bars = [
    { delay: 0, duration: 2.0 },
    { delay: 0.3, duration: 1.8 },
    { delay: 0.6, duration: 2.2 },
    { delay: 0.2, duration: 1.6 },
    { delay: 0.5, duration: 2.4 },
];

export default function SoundControl() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.2;
        }
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(() => {
                // Browser blocked autoplay, user interaction needed
                console.log('Audio playback was blocked');
            });
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed top-24 right-8 z-50">
            <audio
                ref={audioRef}
                src="/sound/chilllofi.mp3"
                loop
                preload="auto"
            />

            <button
                onClick={togglePlay}
                className="group flex items-end justify-center gap-[3px] p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-primary/50 transition-all duration-300"
                aria-label={isPlaying ? 'Pause ambient music' : 'Play ambient music'}
            >
                {bars.map((bar, index) => (
                    <motion.div
                        key={index}
                        className="w-[3px] rounded-full bg-primary"
                        initial={{ height: 6 }}
                        animate={
                            isPlaying
                                ? {
                                    height: [6, 14, 8, 18, 10, 16, 6],
                                    transition: {
                                        duration: bar.duration,
                                        repeat: Infinity,
                                        repeatType: 'mirror',
                                        ease: 'easeInOut',
                                        delay: bar.delay,
                                    },
                                }
                                : { height: 6 }
                        }
                        style={{
                            boxShadow: isPlaying
                                ? '0 0 8px rgba(0, 240, 255, 0.6)'
                                : 'none',
                        }}
                    />
                ))}

                {/* Tooltip */}
                <AnimatePresence>
                    {!isPlaying && (
                        <motion.span
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="absolute right-full mr-3 whitespace-nowrap text-[10px] font-mono uppercase tracking-wider text-white/40 group-hover:text-primary transition-colors"
                        >
                            Play Lofi
                        </motion.span>
                    )}
                </AnimatePresence>
            </button>
        </div>
    );
}
