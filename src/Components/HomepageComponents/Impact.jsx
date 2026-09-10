import React from 'react'
import CampaignProgress from './ProgressBar'

const Impact = () => {
  return (
    <>
        <section id='impact' className='bg-white dark:bg-gray-900! pt-20 pb-20'>
            <span className="inline-block bg-indigo-100 dark:bg-primary-50! text-primary-50 dark:text-primary-400! text-lg font-semibold px-4 py-1.5 rounded-full mb-4">
                Our Impact
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white! mb-3">
                Numbers That Matter

            </h2>

            <p className="mt-3 text-gray-500 dark:text-gray-400!  mx-auto text-xl text-wrap ">
                Every number represents a life changed, a community strengthened,<br /> and a future made brighter.



            </p>
            <div className='grid grid-cols-2 lg:grid-cols-4 text-4xl md:text-7xl p-20 text-primary-50 font-bold'>
                <p>50,000+ <span className='text-xl text-gray-600 block'>Lives Impacted</span>  </p>
                <p>120+  <span className='text-xl text-gray-600 block'>Schools Built</span> </p>
                <p>500+  <span className='text-xl text-gray-600 block'>Well Drilled</span> </p>
                <p>15 <span className='text-xl text-gray-600 block'>Countries Saved</span></p>                                                

            </div>
            <CampaignProgress/>
        </section>        
    </>
  )
}

export default Impact