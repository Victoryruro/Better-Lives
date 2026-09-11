import { FaMicrophoneAlt, FaProjectDiagram } from "react-icons/fa";
import {  FiCheck, FiDroplet, FiUsers, FiHeart, FiAlertTriangle, FiMic } from "react-icons/fi";

const programs = [
  {
    icon: FaProjectDiagram,
    title: "Education Programs",
    description: "Providing access to quality education, scholarships, and learning resources worldwide.",
    items: ["School construction", "Teacher training", "Scholarship funds"],
  },
  {
    icon: FiDroplet,
    title: "Clean Water Projects",
    description: "Building wells and water purification systems to bring safe drinking water to communities.",
    items: ["Well construction", "Water purification", "Sanitation education"],
  },
  {
    icon: FiUsers,
    title: "Community Development",
    description: "Empowering communities with skills training, microfinance, and infrastructure support.",
    items: ["Skills training", "Microfinance programs", "Infrastructure projects"],
  },
  {
    icon: FiHeart,
    title: "Volunteer Programs",
    description: "Join our global network of volunteers making a hands-on difference in communities.",
    items: ["Local chapters", "Skill-based volunteering", "Youth ambassadors"],
  },
  {
    icon: FiAlertTriangle,
    title: "Emergency Relief",
    description: "Rapid response to natural disasters and humanitarian crises with essential aid.",
    items: ["Disaster response teams", "Emergency supplies", "Shelter support"],
  },
  {
    icon: FiMic,
    title: "Advocacy",
    description: "Driving policy change and raising awareness on critical global development issues.",
    items: ["Policy campaigns", "Public awareness", "Partnership building"],
  },
];

function ProgramCard({ icon: Icon, title, description, items }) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 hover:shadow-md transition-shadow h-fit ">
      <div className="w-20 h-20 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-5">
        <Icon size={35} />
      </div>
      <h3 className="font-semibold text-4xl text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-xl text-pretty mb-4">
        {description}
      </p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-center mt-5 mb-5 gap-2 text-xl text-gray-600 dark:text-gray-300">
            <FiCheck size={14} className="text-emerald-500 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProgramList() {
  return (
    <section id="programs" className="scroll-mt-20 px-6 py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-11/12 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold text-gray-900 dark:text-white mb-3">
                Creating Lasting Change          
            </h2>
          <p className="text-gray-600 text-2xl dark:text-gray-400 max-w-xl mx-auto">
            Six focus areas driving lasting change across the communities we serve.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}