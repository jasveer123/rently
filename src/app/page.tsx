import React from 'react'
import Steps from '@/components/steps'
import CardsContent from '@/components/cards-content'
import HeroSection from '@/components/hero-section'
import About from '@/components/about'
export default function Home() {
    return (
        <main className="flex flex-col mb-[40vh]">
            <HeroSection />
            <Steps />
            <CardsContent />
            <About />
        </main>
    )
}
