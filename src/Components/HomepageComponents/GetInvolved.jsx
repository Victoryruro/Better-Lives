import React from 'react'
import { FiArrowRight, FiDollarSign, FiHeart, FiUserPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
const Data = [
  {
    name: 'Volunteer',
    text:'Give your time and skills to make a direct impact. Join field missions, teach workshops, or help with local events.',
    icon:FiHeart ,
    cta:"Start Voluntering",
 
  },
    {
    name: 'Fundraise',
    text:'Start a fundraising campaign for a cause you care about. Every dollar raised goes directly to the communities we serve.',
    icon: FiDollarSign,
    cta:"Start A Campaign",
 
  },
    {
    name: 'Partner',
    text:'Corporate and organizational partnerships amplify our impact. Join us as a partner and help us reach more communities.',
    icon: FiUserPlus,
    cta:"Become a Partner",
 
  },

]

const GetInvolved = () => {
  return (
    <>
        <section className='pt-30 pb-40'>
            <div>
                <span className="inline-block bg-indigo-100 dark:bg-primary-50! text-primary-50 dark:text-primary-400! text-lg font-semibold px-4 py-1.5 rounded-full mb-4">
                  Get Involved
                </span>

                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white! mb-3">
                  Join Our Mission
                </h2>

                <p className="mt-3 text-gray-500 dark:text-gray-400!  mx-auto text-xl text-wrap">
                   There are many ways to make a difference. Whether you give your time, your skills, or your support, every contribution matters.

                </p>
                <div className="mt-10 grid grid-cols-1  lg:grid-cols-3 p-10 gap-6 w-full">
                {Data.map(({ name,text,cta,  icon: Icon, bg, }) => (
                    <Link
                        
                    className="group w-full text-center flex flex-col items-center justify-center bg-[#f9f9f9] dark:bg-gray-900! border border-gray-200 dark:border-gray-700! rounded-2xl p-4 md:p-12 hover:shadow-md hover:-translate-y-1 hover:shadow-cyan-100 transition-all duration-200"
                    >

                    <Icon size={80}  className='p-4 bg-[#d1fae5] text-primary-50 hover:bg-primary-50 hover:text-primary-400 rounded-xl mb-5'/>
                    <h3 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white! transition-colors">
                        {name}
                    </h3>
                    <h5 className="mt-3 mb-2 text-2xl text-pretty font-light text-gray-900 dark:text-white! group-hover:text-primary-50 dark:group-hover:text-primary-400! transition-colors">
                        {text}
                    </h5>
                    {/* <span className="flex items-center gap-1 mt-5 mb-7 dark:text-white!">
                            <FiMapPin size={14} />
                            {location}
                    </span> */}

                    <p className="mt-3 px-8 text-xl text-[#0b3331] border-2 border-primary-50 dark:bg-[#6ee494]! p-3 rounded-full  hover:bg-primary-50 hover:text-primary-400 dark:hover:text-black ">
                        {(cta)} <FiArrowRight size={18} className='inline place-content-center ml-2'/>
                    </p>
                    </Link>
                ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default GetInvolved