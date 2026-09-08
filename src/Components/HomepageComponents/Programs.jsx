import { Link } from 'react-router-dom'
import { FiCode, FiFeather, FiBarChart2, FiHeart,FiBookOpen, FiMap, FiGlobe, FiArrowRight } from 'react-icons/fi'
import { HiOutlineSpeakerphone,  } from 'react-icons/hi'

export const Programs = [
  {
    name: 'Education for All',
    Text: 'Building schools, training teachers, and providing scholarships to ensure every child has access to quality education regardless of their background.',
    icon: FiBookOpen,
    bg: 'bg-green-100 dark:bg-green-900/40',
    iconColor: 'text-green-600 dark:text-green-300',
  },
  {
    name: 'Health & Wellness',
    Text: 'Operating mobile clinics, vaccination drives, and clean water projects to bring essential healthcare services to remote and underserved communities.',
    icon: FiHeart,
    bg: 'bg-green-100 dark:bg-green-900/40',
    iconColor: 'text-green-600 dark:text-green-300',
  },
  {
    name: 'Economic Empowerment',
    Text: 'Providing microloans, job training programs, and women\'s cooperatives to help families build sustainable livelihoods and break the cycle of poverty.',

    icon:FiBarChart2,
    bg: 'bg-green-100 dark:bg-green-900/40',
    iconColor: 'text-green-600 dark:text-green-300',
  },
  {
    name: 'Environmental Action',
    Text: 'Leading reforestation initiatives, clean energy installations, and sustainable farming education to protect ecosystems and combat climate change.',
    icon: FiGlobe,
    bg: 'bg-green-100 dark:bg-green-900/40',
    iconColor: 'text-green-600 dark:text-green-300',
  },


]

export default function Program() {
  return (
    <section className="w-full py-16 px-6 bg-gray-50 dark:bg-gray-950!">
      <div className=" mx-auto text-center p-6 md:p-20">
        {/* Eyebrow pill */}
        <span className="inline-block bg-indigo-100  text-primary-50 dark:bg-primary-50/5 dark:text-primary-50! text-2xl font-semibold px-4 py-1.5 rounded-full mb-4">
          Programs
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white! mb-10">
          How We Help
        </h2>

        {/* Subtext */}
        <p className="mt-10 text-lg text-gray-500 dark:text-gray-400! text-center  mx-auto">
          Our four flagship programs address the most critical needs in underserved communities around the world.
        </p>

        {/* Category grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2  gap-6 w-full">
          {Programs.map(({ name, Text, icon: Icon, bg, iconColor }) => (
            <Link
              key={name}
              to={`/`}
              className="group w-full text-left bg-white dark:bg-gray-900! border border-gray-200 dark:border-gray-700! rounded-2xl p-12 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className={`h-20 w-20 rounded-xl flex items-center justify-center ${bg}`}>
                <Icon size={45} className={iconColor} />
              </div>

              <h3 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white! group-hover:text-primary-50 dark:group-hover:text-primary-50/90! transition-colors">
                {name}
              </h3>

              <p className="mt-1 text-lg text-gray-500 dark:text-gray-400">
                {Text}
              </p>
              <button className="mt-4 text-xl text-primary-50 dark:text-primary-400! font-semibold hover:text-primary-50 dark:hover:text-primary-400! transition-colors">
                Learn More <FiArrowRight className="inline-block ml-2" />
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}