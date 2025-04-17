import { Experience } from "../types";
import { ExperienceItem } from "./experience-item";

interface ExperienceSectionProps {
  experiences: Experience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
}) => {
  return (
    <div className="w-full py-8 ">
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        Experience
      </h2>

      <div className="relative max-w-4xl mx-auto max-sm:flex max-sm:flex-col max-sm:items-center">
        {/* Vertical line */}
        <div
          className={`
            absolute 
            h-full 
            w-px 
            bg-gray-600 
            left-1/2 
            transform -translate-x-1/2 
            max-sm:relative
            max-sm:flex
            max-sm:-z-10 
            `}
        ></div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`
              relative 
              flex 
              items-center 
              max-sm:justify-center
              
            `}
          >
            <ExperienceItem
              experience={experience}
              index={index}
              total={experiences.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
