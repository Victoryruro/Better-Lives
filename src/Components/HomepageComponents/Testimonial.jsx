import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const TESTIMONIALS = [
  {
    
    image: 'https://i.pravatar.cc/120?img=47',
    quote:
      'BetterLives helped our community access the training and support we needed to build stable livelihoods. The change has reached far beyond one family.',
    name: 'Sarah Chen',
    role: 'Community Member',
  },
  {
    
    image: 'https://i.pravatar.cc/120?img=12',
    quote:
      'Volunteering with BetterLives showed me how much can happen when local knowledge and practical resources come together. Every hour feels meaningful.',
    name: 'Marcus Rodriguez',
    role: 'BetterLives Volunteer',
  },
  {
    
    image: 'https://i.pravatar.cc/120?img=32',
    quote:
      'I trust BetterLives with my monthly donation because I can see where it goes: into education, healthcare, and opportunities that help families thrive.',
    name: 'Aisha Patel',
    role: 'Monthly Donor',
  },
  {
   
    image: 'https://i.pravatar.cc/120?img=68',
    quote:
      'Our partnership with BetterLives has strengthened the work we were already doing locally. Together, we are creating solutions that can last.',
    name: 'James Okafor',
    role: 'Community Partner',
  },
  {
    
    image: 'https://i.pravatar.cc/120?img=49',
    quote:
      'The skills program gave me confidence, knowledge, and a path forward. Now I can support my family and help other women in my community do the same.',
    name: 'Elena Kovacs',
    role: 'Economic Empowerment Participant',
  },
  {
    
    image: 'https://i.pravatar.cc/120?img=11',
    quote:
      'What makes BetterLives special is the way it listens first. The programs reflect what communities actually need, and the results are visible every day.',
    name: 'David Kim',
    role: 'Education Program Supporter',
  },
]

const VISIBLE_DESKTOP = 3

export default function Testimonials() {
  const [visibleCount, setVisibleCount] = useState(() =>
    typeof window !== 'undefined' && window.innerWidth >= 1024 ? VISIBLE_DESKTOP : 1,
  )
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const updateVisibleCount = () => {
      const nextVisibleCount = window.innerWidth >= 1024 ? VISIBLE_DESKTOP : 1
      setVisibleCount(nextVisibleCount)
      setIndex((currentIndex) =>
        Math.min(currentIndex, TESTIMONIALS.length - nextVisibleCount),
      )
    }

    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)

    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  const maxIndex = TESTIMONIALS.length - visibleCount

  const goPrev = () => setIndex((i) => Math.max(i - 1, 0))
  const goNext = () => setIndex((i) => Math.min(i + 1, maxIndex))

  return (
    <section id='testimonial' className="w-full py-16 px-6 bg-[#f9fafb] dark:bg-gray-950! ">
      <div className="p-10 mx-auto text-center">
        <span className="inline-block bg-indigo-100 dark:bg-primary-50! text-primary-50 dark:text-primary-400! text-lg font-semibold px-4 py-1.5 rounded-full mb-4">
          Testimonials
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white! mb-3">
          Lives Transformed
        </h2>

        <p className="mt-3 text-gray-500 dark:text-gray-400!  mx-auto text-xl">
            Behind every statistic is a human story. Meet some of the people <br /> whose lives have been changed through our programs.

        </p>

        {/* Carousel */}
        <div className="relative mt-12">
          {/* Prev arrow */}
          <button
            onClick={goPrev}
            disabled={index === 0}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800! shadow-md text-gray-500 dark:text-gray-300! hover:text-[#4c42dc] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <FiChevronLeft size={30} />
          </button>

          {/* Track */}
          <div className="overflow-hidden p-5">
            <motion.div
              className="flex"
              animate={{ x: `-${index * (100 / visibleCount)}%` }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            >
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.name}
                  className="shrink-0 px-3"
                  style={{ flex: `0 0 ${100 / visibleCount}%` }}
                >
                  <div className="relative h-full text-left md:text-lg bg-primary-400 shadow-md dark:bg-gray-900! rounded-2xl p-10 flex flex-col gap-4 overflow-hidden">
                    <span
                      aria-hidden="true"
                      className="absolute top-2 left-8 text-9xl  leading-none font-serif font-bold text-primary-50/60 dark:text-primary-50/20!"
                    >
                      &ldquo;
                    </span>



                    <p className="relative mt-10 text-gray-600 dark:text-gray-300! leading-relaxed flex-1 md:text-2xl text-pretty">
                      {t.quote}
                    </p>

                    <div className="mt-6 pt-4 ">
                      <div className="flex items-center gap-3">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="h-12 w-12 rounded-full object-cover ring-2 ring-white dark:ring-gray-800!"
                        />
                        <div>
                          <p className="font-bold text-gray-900 dark:text-white! text-xl">{t.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400!">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Next arrow */}
          <button
            onClick={goNext}
            disabled={index === maxIndex}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800! shadow-md text-gray-500 dark:text-gray-300! hover:text-[#4c42dc] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <FiChevronRight size={30} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? 'w-7 bg-linear-to-r from-primary-50 to-primary-50'
                  : 'w-3 bg-gray-300 dark:bg-gray-600!'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}