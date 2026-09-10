import React from 'react'
import PageHero from '../Components/HeroComponent'

const Contact = () => {
  return (
    <>
        <PageHero 
                
                title="Contact Us"
                
                subtitle="Want to make a difference? Reach out to learn how you can get involved."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Contact' },
                ]}        
        />
    </>
  )
}

export default Contact