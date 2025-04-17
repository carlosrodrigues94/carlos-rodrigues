import { Experience } from "../types";

interface ExperienceItemProps {
  experience: Experience;
  index: number;
  total: number;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  experience,
  index,
}) => {
  const isEven = index % 2 === 0;
  return (
    <div
      className={`
        flex 
        w-60 
        mb-6 
        max-sm:ml-0 
        max-sm:mr-0 
        max-sm:w-96
        
        ${isEven ? "ml-auto" : "ml-0"}
      `}
    >
      <div
        className="w-full md:w-5/12 p-6 rounded-lg shadow-lg"
        style={{ backgroundColor: experience.color }}
      >
        <h3 className="text-xl font-bold text-white">{experience.company}</h3>
        <h5 className="text-sm font-bold text-white">{experience.period}</h5>
        <p className="text-sm text-white mt-2">{experience.description}</p>
      </div>

      <div
        className={`
          absolute 
          left-1/2 
          transform 
          -translate-x-1/2 
          w-3 h-3 
          mt-24 
          rounded-full 
          border-2 
          border-white 
          max-sm:opacity-0
        `}
        style={{ backgroundColor: experience.color }}
      >
        <div
          style={{ backgroundColor: experience.color }}
          className={`flex max-sm:w-0 w-50 h-1 mt-0.5 absolute  ${
            isEven ? "ml-4" : "-left-52"
          }`}
        />
      </div>
    </div>
  );
};
