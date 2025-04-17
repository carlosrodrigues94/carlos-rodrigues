import { useSelector } from "react-redux";
import { CardTechnologies } from "./card-technologies";
import { RootState } from "../store/config";

export const CardTechnologiesContainer = () => {
  const { data } = useSelector((state: RootState) => state.portfolio);
  return (
    <div className="w-full flex items-center flex-col">
      <h2 className="ml-auto mr-auto text-2xl mb-8">Technologies</h2>
      <div
        className={`
        flex
        w-full
        justify-evenly
        items-center
        max-md:flex-col
        max-md:justify-center
        `}
      >
        <CardTechnologies technologies={data.technologies} />
        <CardTechnologies technologies={data.skills} />
      </div>
    </div>
  );
};
