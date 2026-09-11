import React from 'react'
import image from '../../assets/BetterLives.jpg'

const AboutHero = () => {
  return (
    <>
        <section className="w-full grid grid-cols-1 lg:grid-cols-2  py-24 md:px-10 pt-32 pb-32 bg-[#ffffff] dark:bg-[#030712]! items-center gap-10">
            <div className=" mx-auto p-4">
                <h2 className="text-lg md:text-lg max-w-5/12 font-medium  text-primary-50! rounded-full bg-[#e0e7ff]  leading-tight p-2 m-2">
                    Our Mission
                </h2>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white! text-left leading-tight m-2 mb-5 mt-5">
                    Building a Better Community
                </h2>
                <p className="text-3xl text-primary-50 text-left italic m-4">
                    “To empower underserved communities through education, clean water access, and sustainable development — creating lasting change that transforms generations.”
                </p>
                <p className="mt-5 text-3xl font-serif text-gray-700 dark:text-gray-500!  mx-auto leading-relaxed text-left m-7">
                    At BetterLives, we are driven by the belief that lasting change starts at the community level. Through grassroots partnerships and sustainable programs, we empower local leaders to create solutions that endure long after our direct involvement.
                    <br />
                    <br/>
                    Our approach combines evidence-based strategies with deep cultural understanding. We listen first, learn second, and act third, ensuring every initiative reflects the unique needs and aspirations of the people we serve.
                </p>


            </div>
            <div className="max-w-3xl mx-auto p-4">
                <img src={image} alt="About HireDesk" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
        </section>
    
    </>
  )
}

export default AboutHero