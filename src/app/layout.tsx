import type { Metadata } from 'next'
import { Inter, Outfit, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
    title: 'Jhon Harvey | Portfolio',
    description: 'Nexbot style 3D Portfolio',
}

import SmoothScroll from '@/components/SmoothScroll'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es" className={`${inter.variable} ${outfit.variable} ${spaceGrotesk.variable}`}>
            <body className="bg-[#0a0a0a] text-white">
                <SmoothScroll>
                    {children}
                </SmoothScroll>
            </body>
        </html>
    )
}
