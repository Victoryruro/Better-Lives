import {  FiChevronDown, FiHeart } from "react-icons/fi";
import { useEffect, useState } from "react";


const words = ["One Story At a Time", "One Family At a Time", "One Child At a Time", "One Community At a Time"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-900 px-6 py-30 text-center overflow-hidden border-b border-b-gray-300 dark:border-b-gray-950">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800 bg-white/60 dark:bg-white/5 text-emerald-700 dark:text-emerald-300 text-lg mb-8">
        <FiHeart size={15} />
        Together, We Make a Difference
      </div>

      {/* Heading */}
      <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
        Change Lives,
        <br />
        {" "}
        <span
          key={index}
          className="fade-swap inline-block bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 bg-clip-text text-transparent"
          style={{ WebkitBackgroundClip: "text" }}
        >
          {words[index]}
        </span>{" "}
        
      </h1>

      {/* Subtext */}
      <p className="lg:max-w-3/5 mx-auto mt-6 text-gray-600 dark:text-gray-300 text-xl text-pretty">
        We believe every person deserves access to education, healthcare, and <br />
        opportunity. Join us in building a world where communities thrive and <br />
        futures are limitless.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap justify-center gap-4 mt-8 text-2xl">
        <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-full transition-colors">
          Donate Now
          <FiHeart size={25} />
        </button>
        <button className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 font-medium px-6 py-3 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          See Our Impact
          <FiChevronDown size={25} />
        </button>
      </div>

      <style>{`
        @keyframes fadeSwap {
          0% { opacity: 0; transform: translateY(8px); }
          15% { opacity: 1; transform: translateY(0); }
          85% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-8px); }
        }
        .fade-swap {
          animation: fadeSwap 3s ease-in-out;
        }
        @media (prefers-reduced-motion: reduce) {
          .fade-swap {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}