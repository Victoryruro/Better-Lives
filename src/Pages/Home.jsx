import React from 'react'
import Faq from '../Components/HomepageComponents/Faq'
import Program from '../Components/HomepageComponents/Programs'
import Mission from '../Components/HomepageComponents/Mission'
import Testimonials from '../Components/HomepageComponents/Testimonial'

const Home = () => {
  return (
    <>
        <div className='bg-[#f9f9f9] dark:bg-[#0e0e0e] mt-25'>
            <Mission/>
            <Program/>
            <Testimonials/>
            <Faq/>
        </div>
    </>
  )
}

export default Home