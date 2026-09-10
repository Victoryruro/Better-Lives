import { FiShield, FiTarget, FiZap } from 'react-icons/fi'

const VALUES = [
  {
    icon: FiShield,
    title: 'Transparency',
    description:
      '85% of every dollar goes directly to programs. We publish detailed financial reports and impact metrics quarterly.',
  },
  {
    icon: FiShield,
    title: 'Community-Led',
    description:
      'Local communities lead the way. We listen, support, and amplify — never impose solutions from outside.',
  },
  {
    icon: FiShield,
    title: 'Sustainability',
    description:
      'Every program is designed to be self-sustaining, building local capacity and long-term resilience.',
  },
]

export default function OurValues() {
  return (
    <section className="w-full py-16 pb-30 pt-30 px-6 bg-gray-50 dark:bg-gray-950!">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white!">
          Our Values
        </h2>

        <p className="mt-3 text-lg text-gray-500 dark:text-gray-400!">
          The principles that drive everything we do at HireDesk.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {VALUES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="text-left text-3xl bg-white dark:bg-gray-900! border border-gray-200 dark:border-gray-700! rounded-2xl p-16"
            >
              <div className="h-15 w-15 rounded-lg bg-indigo-100 dark:bg-primary-50/30! flex items-center justify-center">
                <Icon size={40} className="text-primary-50 dark:text-[#2aa77e]!" />
              </div>

              <h3 className="mt-4 font-bold text-gray-900 dark:text-white! text-3xl">
                {title}
              </h3>

              <p className="mt-2 text-xl text-gray-500 dark:text-gray-400! leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}