import { useINTL } from "@/hooks/useINTL";
import { useSelector } from "react-redux";
import { RootState } from "@/store/config";

export const Certifications = () => {
  const { translate } = useINTL();
  const {
    data: { certifications },
  } = useSelector((state: RootState) => state.portfolio);

  return (
    <section className="w-full pl-20 pr-20 rounded-sm max-lg:pl-4 max-lg:pr-4">
      <h2 className="ml-2 text-2xl mb-8">{translate("CERTIFICATIONS")}</h2>
      <ul>
        {certifications.map((certification) => (
          <li
            key={certification.id}
            className="flex w-full border-1 m-2 p-4 border-gray-600 rounded-sm max-sm:flex-col"
          >
            <div className="w-full flex flex-col">
              <span className="font-bold text-cyan-500">
                {certification.name} ({certification.year})
              </span>
              <span>{translate(certification.description)}</span>
            </div>

            <img
              className="rounded-sm w-1/6 max-sm:mt-4 max-sm:w-1/2"
              src={certification.file}
              alt=""
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
