import React from 'react'
import PageHero from '../Components/HeroComponent'

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
        </section>
    </>
  )
}

export default ProgramPage