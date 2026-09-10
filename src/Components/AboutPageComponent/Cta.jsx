import React from 'react'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const AboutCta = () => {
  return (
    <section className="w-full  py-24 px-10 pt-32 pb-32 bg-linear-to-br from-primary-50 to-primary-50  dark:to-primary-50! text-center">
      <div className="max-w-3xl mx-auto p-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white! leading-tight mb-5">
          Ready to Get Started?
        </h2>

        <p className="mt-5 text-xl text-white!  mx-auto leading-relaxed">
          Join our mission to create lasting change. Every contribution makes a difference.

        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">


          <Link
            to="/#mission"
            className="flex items-center gap-2 px-6 py-3 border bg-primary-400 border-white/40 text-primary-50 font-semibold rounded-2xl text-xl hover:bg-primary-600 hover:text-primary-400 transition-all"
          >
            
            Donate Now
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutCta