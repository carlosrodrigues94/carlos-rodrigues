import { FC } from "react";
import { IconsFlags, IconsSocialMedia } from "../styles/icons";
import { USER_INFO } from "../constants/user-info";
import { Languages, useINTL } from "../hooks/useINTL";

const Section: FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  return (
    <section
      className={`flex items-center justify-start m-1 text-2xl text-gray-200 ${className}`}
    >
      {children}
    </section>
  );
};

export const Header = () => {
  const { handleChangeLanguage, currentLanguage } = useINTL();
  return (
    <header className="sticky top-2 w-full z-10 flex items-center justify-end">
      <Section>
        <a
          href={USER_INFO.linkedIn}
          style={{ color: "#FFF" }}
          target="_blank"
          id="linkedin"
        >
          <IconsSocialMedia.IconLinkedIn />
        </a>
      </Section>
      <Section>
        <a href={USER_INFO.github} style={{ color: "#FFF" }} target="_blank">
          <IconsSocialMedia.IconGithub />
        </a>
      </Section>
      <Section>
        <a
          href={"mailto:" + USER_INFO.mail}
          style={{ color: "#FFF" }}
          type="email"
          target="_blank"
        >
          <IconsSocialMedia.IconMail />
        </a>
      </Section>
      <Section className="border-0 bg-transparent">
        <select
          name="select-language"
          style={{ background: "none", border: 0 }}
          value={currentLanguage}
          onChange={(event) => {
            const language = event.target.value as Languages;
            handleChangeLanguage(language);
          }}
          className="ml-4 p-1 flex justify-center items-center appearance-none border-0 rounded-sm bg-transparent cursor-pointer"
        >
          <option
            className="rounded-sm ml-2 flex bg-gray-900 border-0"
            value={Languages.PT_BR}
          >
            {IconsFlags.pt_BR}
          </option>
          <option
            className="rounded-sm bg-gray-900 border-0"
            value={Languages.EN_US}
          >
            {IconsFlags.en_US}
          </option>
        </select>
      </Section>
    </header>
  );
};
