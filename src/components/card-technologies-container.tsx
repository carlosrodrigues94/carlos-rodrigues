import { useSelector } from "react-redux";
import { CardTechnologies } from "./card-technologies";
import { RootState } from "../store/config";
import { useINTL } from "../hooks/useINTL";

export const CardTechnologiesContainer = () => {
  const { data } = useSelector((state: RootState) => state.portfolio);
  const { translate } = useINTL();
  return (
    <div className="w-full flex items-center flex-col">
      <h2 className="ml-auto mr-auto text-2xl mb-8">
        {translate("TECHNOLOGIES")}
      </h2>
      <div
        className={`
          flex
          w-full
          justify-center
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
