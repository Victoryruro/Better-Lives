import React from 'react'
import Faq from '../Components/HomepageComponents/Faq'
import Program from '../Components/HomepageComponents/Programs'
import Mission from '../Components/HomepageComponents/Mission'
import Testimonials from '../Components/HomepageComponents/Testimonial'
import GetInvolved from '../Components/HomepageComponents/GetInvolved'
import Impact from '../Components/HomepageComponents/Impact'
import StatsRow, { WaveDivider } from '../Components/Statistics'
import Hero from '../Components/HomepageComponents/Heropage'
import HeroImage from '../assets/HeroImage.jpg'
import { useLocation } from 'react-router-dom'
import { useEffect } from "react";

const Home = () => {
    const { hash } = useLocation();

    useEffect(() => {
      if (hash) {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }, [hash]);
  return (
    <>
        <div className='bg-[#f9f9f9] dark:bg-[#0e0e0e] mt-25 pb-10'>
            <Hero id="home"/>
            <div className='bg-white dark:bg-gray-900 h-fit '>
              <div className='grid grid-cols-2 lg:grid-cols-4 text-2xl md:text-5xl p-8 md:p-20 text-primary-50 font-bold'>
                <p>50,000+ <span className='text-lg md:text-xl text-gray-600 block'>Lives Changed</span>  </p>
                <p>120+  <span className='text-lg md:text-xl text-gray-600 block'>Schools Built</span> </p>
                <p>15  <span className='text-lg md:text-xl text-gray-600 block'>Countries</span> </p>
                <p>$10M+ <span className='text-lg md:text-xl text-gray-600 block'>Raised</span></p>                                                
              </div>      
              <div className='w-full flex items-center justify-center '>
                <img src={HeroImage} alt="hero image"  className='w-11/12 lg:w-9/12 border border-gray-500 rounded-xl lg:h-[42rem] shadow-2xl shadow-primary-50 ' />  
              </div>        


            </div>
            <WaveDivider/>
            <StatsRow/>
            <Mission id="mission"/>
            <Program/>
            <Impact/>
            <Testimonials/>
            <GetInvolved/>
            <Faq/>
        </div>
    </>
  )
}

export default Home