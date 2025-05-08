import { FC } from "react";
import { useINTL } from "../hooks/useINTL";

export const SectionAboutMe: FC = () => {
  const { translate } = useINTL();
  return (
    <section
      className={`
        flex
        2xl:max-w-1/2
        xl:max-w-1/2
        items-center 
        justify-center
        ml-auto 
        mb-20 
        mr-auto 
        border-1 
        p-4 
        text-center 
        rounded-md 
        border-gray-700
        max-md:flex-col
      `}
    >
      <img
        className="rounded-full w-48 mr-10 max-md:mb-8 max-md:mr-0"
        src="https://media.licdn.com/dms/image/v2/D4D03AQF8N2Zhot2h_g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1673460652756?e=1750291200&v=beta&t=Zr-YOk7vKsJEQqZR7CkgY9KntqjVDV97Xbk2ZFOLUDQ"
        alt=""
      />
      <p>{translate("WHO_AM_I")}</p>
    </section>
  );
};
