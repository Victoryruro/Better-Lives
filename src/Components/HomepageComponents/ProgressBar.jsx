import { useEffect, useRef, useState } from "react";

const campaigns = [
  { name: "Clean Water Initiative",
     percent: 78, 
     goal: "$500K" 
    },
  { name: "School Building Fund", 
    percent: 45, 
    goal: "$2M" 
    },
  { name: "Medical Supplies", 
    percent: 92, 
    goal: "$100K" 
    },
];

function ProgressBar({ name, percent, goal }) {
  const [width, setWidth] = useState(0);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(percent);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(progressBarRef.current);
    return () => observer.disconnect();
  }, [percent]);

  return (
    <div ref={progressBarRef} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-800 dark:text-gray-100 text-lg md:text-2xl font-medium">
          {name}
        </span>
        <span className="text-lg md:text-2xl text-gray-500 dark:text-gray-400">
          {percent}% of {goal}
        </span>
      </div>
      <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function CampaignProgress() {
  return (
    <div className=" max-w-full lg:max-w-9/12 mx-auto p-8 bg-white dark:bg-gray-900 rounded-xl mb-10">
      <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-10 text-center">
        Active Campaigns
      </h2>
      {campaigns.map((c) => (
        <ProgressBar key={c.name} {...c} />
      ))}
    </div>
  );
}