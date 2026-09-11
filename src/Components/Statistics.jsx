import { useState, useEffect, useRef } from 'react'
import { FiDollarSign } from 'react-icons/fi'

function useCountUp(target, duration = 1500, startAnimation) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startAnimation) return

    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      setCount(progress * target)
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [target, duration, startAnimation])

  return count
}

function StatItem({ value, suffix = '', decimals = 0, label, startAnimation, prefix=''  }) {
  const animated = useCountUp(value, 1500, startAnimation)

  const display =
    decimals > 0
      ? animated.toFixed(decimals)
      : Math.floor(animated).toLocaleString()

  return (
    <div className="text-center mt-10">
      <p className="text-5xl md:text-7xl font-extrabold text-primary-50">
        {prefix}
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-gray-500 text-sm md:text-base">{label}</p>
    </div>
  )
}

export default function StatsRow() {
  const [startAnimation, setStartAnimation] = useState(false)
  const sectionRef = useRef(null)

  // Trigger animation only when the row scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>

      <div
        ref={sectionRef}
        className="w-full py-12 grid grid-cols-2 lg:grid-cols-4 gap-8 gap-y-20 bg-gray-50 dark:bg-primary-600! p-10 md:p-20 md:pb-30 md:pt-30 border-b border-b-gray-300" 
      >
        <StatItem className="text-3xl lg:text-8xl font-extrabold text-primary-50 flex flex-col" value={5 } prefix='$' suffix="M+" label="Funds Raised" decimals={1}  startAnimation={startAnimation} />
        <StatItem className="text-5xl md:text-8xl font-extrabold text-primary-50" value={50} suffix="K" label="Lives Impacted" startAnimation={startAnimation} />
        <StatItem className="text-5xl md:text-8xl font-extrabold text-primary-50" value={200} suffix="+" label="Active Volunteers" startAnimation={startAnimation} />
        <StatItem className="text-5xl md:text-8xl font-extrabold text-primary-50" value={15}  label="Countries Served" startAnimation={startAnimation} />
      
      </div>    

    </>

    
  )
}
export function WaveDivider() {
  return (
    <div className="relative w-full overflow-hidden leading-none shrink-0">
      <svg
        className="w-full h-30 block bg-white dark:bg-gray-900 border-b border-b-gray-300 dark:border-b-gray-800 "
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C240,90 480,10 720,40 C960,70 1200,20 1440,50 L1440,100 L0,100 Z"
          className="fill-gray-50 dark:fill-gray-800 mb-20"
        />
      </svg>
    </div>
  );
}