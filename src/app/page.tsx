import React from 'react'
import Steps from '@/components/steps'
import CardsContent from '@/components/cards-content'
import HeroSection from '@/components/hero-section'
import About from '@/components/about'
import WhyChooseUs from '@/components/why-choose-us'
import Testimonial from '@/components/testimonial'
export default function Home() {
    return (
        <main className="flex flex-col mb-[40vh]">
            <HeroSection />
            <Steps />
            <CardsContent />
            <About />
            <WhyChooseUs />
            <Testimonial />
        </main>
    )
}
