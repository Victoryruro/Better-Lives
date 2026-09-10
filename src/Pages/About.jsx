import React from 'react'
import Hero from '../Components/HomepageComponents/Heropage'
import PageHero from '../Components/HeroComponent'
import { useLocation } from 'react-router-dom'
import { useEffect } from "react";
import AboutHero from '../Components/AboutPageComponent/AboutHero';
import OurValues from '../Components/AboutPageComponent/Values';
import AboutCta from '../Components/AboutPageComponent/Cta';

const About = () => {


  return (
    <>
        <PageHero 
                
                title="About BetterLives"
               
                subtitle="Creating lasting change in communities worldwide since 2014."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'About' },
                ]}        
        />
        <AboutHero  />
        <OurValues/>
        <AboutCta/>
    </>
  )
}

export default About