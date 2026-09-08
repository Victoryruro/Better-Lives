import React from 'react'
import Faq from '../Components/HomepageComponents/Faq'
import Program from '../Components/HomepageComponents/Programs'

const Home = () => {
  return (
    <>
        <div className='bg-[#f9f9f9] dark:bg-[#0e0e0e] mt-25'>
            <Program/>
            <Faq/>
        </div>
    </>
  )
}

export default Home