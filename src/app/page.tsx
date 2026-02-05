import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import About from '@/components/About'
import TechCloud from '@/components/TechCloud'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import SectionWrapper from '@/components/SectionWrapper'

export default function Home() {
    return (
        <main className="bg-[#0a0a0a]">
            <SectionWrapper>
                <Hero />
            </SectionWrapper>

            <SectionWrapper>
                <Skills />
            </SectionWrapper>

            <SectionWrapper>
                <About />
            </SectionWrapper>

            <SectionWrapper className="!min-h-[70vh]">
                <TechCloud />
            </SectionWrapper>

            <SectionWrapper>
                <Experience />
            </SectionWrapper>

            <SectionWrapper>
                <Projects />
            </SectionWrapper>

            <SectionWrapper>
                <Education />
            </SectionWrapper>

            <SectionWrapper>
                <Contact />
            </SectionWrapper>
        </main>
    )
}
