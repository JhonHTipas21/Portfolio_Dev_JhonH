/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#ffffff',
        primary: '#00f0ff',
        cyan: {
          light: '#e0faff',
          DEFAULT: '#00f0ff',
          dark: '#00c8d6',
        },
        accent: '#8b5cf6',
        card: '#121212',
      },
      fontFamily: {
        display: ['var(--font-outfit)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-space-grotesk)', 'monospace'],
      },
      backgroundImage: {
        'gradient-cyan': 'linear-gradient(to right, #00f0ff, #22d3ee)',
        'glow-cyan': 'radial-gradient(circle at center, rgba(0, 240, 255, 0.15) 0%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
