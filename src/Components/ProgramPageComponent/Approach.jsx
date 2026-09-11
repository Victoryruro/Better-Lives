const steps = [
  {
    number: 1,
    title: "Identify Need",
    description: "We work with local communities to identify the most pressing challenges.",
  },
  {
    number: 2,
    title: "Partner Locally",
    description: "We collaborate with local organizations for culturally informed solutions.",
  },
  {
    number: 3,
    title: "Implement Program",
    description: "Our teams deliver programs with full transparency and accountability.",
  },
  {
    number: 4,
    title: "Measure Impact",
    description: "We track outcomes and share results with donors and stakeholders.",
  },
];

function StepCard({ number, title, description }) {
  return (
    <div className="text-center">
      <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xl font-semibold">
        {number}
      </div>
      <h3 className="font-semibold text-3xl text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-xl text-gray-500 dark:text-gray-400 max-w-xs mx-auto">
        {description}
      </p>
    </div>
  );
}

export default function OurApproach() {
  return (
    <section
      id="approach"
      className="scroll-mt-20 px-6 py-20 bg-primary-400 dark:bg-gray-950"
    >
      <div className="max-w-11/12 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-50 mb-3">
            Our Approach
          </h2>
          <p className="text-gray-900 dark:text-primary-400 max-w-xl mx-auto text-lg">
            A community-driven process that ensures every dollar creates real,
            lasting change.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}