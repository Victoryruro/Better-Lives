import React from 'react'
import PageHero from '../Components/HeroComponent'
import ProgramList from '../Components/ProgramPageComponent/ProgramList'
import OurApproach from '../Components/ProgramPageComponent/Approach'
import AboutCta from '../Components/AboutPageComponent/Cta'

const ProgramPage = () => {
  return (
    <>
        <section>
            <PageHero 
                    
                    title="Our Programs"
                    
                    subtitle="Impactful programs that empower communities through education, health, and sustainable development."
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Program' },
                    ]}        
            />
            <ProgramList/>
            <OurApproach/>
            <AboutCta/>
        </section>
    </>
  )
}

export default ProgramPage