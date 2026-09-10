import React from 'react'
import Faq from '../Components/HomepageComponents/Faq'
import Program from '../Components/HomepageComponents/Programs'
import Mission from '../Components/HomepageComponents/Mission'
import Testimonials from '../Components/HomepageComponents/Testimonial'
import GetInvolved from '../Components/HomepageComponents/GetInvolved'
import Impact from '../Components/HomepageComponents/Impact'
import StatsRow, { WaveDivider } from '../Components/Statistics'

const Home = () => {
  return (
    <>
        <div className='bg-[#f9f9f9] dark:bg-[#0e0e0e] mt-25 pb-10'>
            <div className='bg-white h-96'>

            </div>
            <WaveDivider/>
            <StatsRow/>
            <Mission/>
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