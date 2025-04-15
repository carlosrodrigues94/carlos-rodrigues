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
        Education And Experience
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute h-full w-px bg-gray-600 left-1/2 transform -translate-x-1/2"></div>

        {experiences.map((experience, index) => (
          <div key={experience.id} className="relative flex items-center">
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
