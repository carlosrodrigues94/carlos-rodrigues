import { FC } from "react";
import { icons, iconColors } from "../styles/icons";

export const CardTechnologies: FC<{ technologies: Array<string> }> = ({
  technologies,
}) => {
  return (
    <div
      className={`
          m-4
          flex
          flex-wrap
          rounded-md 
          border-1 
          items-center
          justify-center
          p-4 
          text-sm 
          border-gray-700 
          bg-gray-800
          max-md:max-w-full
          max-md:max-h-60
          max-md:flex-nowrap
          max-md:w-full
      `}
    >
      {technologies.map((technology) => {
        const Icon = icons[technology] || icons.react;
        const color: string = iconColors[technology] || iconColors.react;

        return (
          <div className="m-1 mb-2 flex items-center justify-center flex-col">
            <Icon color={color} />
            <span className="capitalize text-sm mt-2">{technology}</span>
          </div>
        );
      })}
    </div>
  );
};
