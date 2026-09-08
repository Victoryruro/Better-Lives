import React from 'react'
import image from '../../assets/BetterLives.jpg'
import {Programs} from './Programs'

const Mission = () => {
  return (
    <>
        <section className="w-full grid grid-cols-1 lg:grid-cols-2  py-24 px-10 pt-32 pb-32 bg-[#ffffff] dark:bg-[#030712]! items-center gap-10">
            <div className=" mx-auto p-4">
                <h2 className="text-lg md:text-lg w-3/12 font-medium  text-[#4f46e5]! rounded-full bg-[#e0e7ff]  leading-tight p-2 m-2">
                    Our Mission
                </h2>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white! text-left leading-tight m-2">
                    Building a Better World Together
                </h2>
                {/* <p className="text-2xl text-primary-50 text-left italic m-4">
                    “To make the job search process transparent, efficient, and empowering for both candidates and employers.”
                </p> */}
                <p className="mt-5 text-2xl font-serif text-gray-700 dark:text-gray-500!  mx-auto leading-relaxed text-left m-2">
                    At HopeHand, we are driven by the belief that lasting change starts at the community level. Through grassroots partnerships and sustainable programs, we empower local leaders to create solutions that endure long after our direct involvement.
                    <br />
                    <br/>
                    Our approach combines evidence-based strategies with deep cultural understanding. We listen first, learn second, and act third, ensuring every initiative reflects the unique needs and aspirations of the people we serve.
                </p>
                <div className='flex flex-col text-left mt-2 gap-2'>
                    {Programs.map(({ name,Text, icon:Icon,bg, iconColor 
                        
                    }) =>(
                        <div className='flex flex-row justify-center items-center gap-8' >
                            <div className={`h-15 w-30 rounded-xl flex items-center justify-center ${bg}`}>
                                <Icon size={35} className={iconColor} />
                            </div>
                            <div>
                                <h3 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white! group-hover:text-primary-50 dark:group-hover:text-primary-50/90! transition-colors">
                                    {name}
                                </h3>

                                <p className="mt-1 text-lg text-gray-500 dark:text-gray-400">
                                    {Text}
                                </p>                                
                            </div>


                        </div>
                        
                    ))}

                </div>

            </div>
            <div className="max-w-3xl mx-auto p-4">
                <img src={image} alt="About HireDesk" className="w-full h-fit rounded-lg shadow-lg" />
            </div>
        </section>
    
    </>
  )
}

export default Mission