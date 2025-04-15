import { FC } from "react";
import { IconsSocialMedia } from "../styles/icons";
import { USER_INFO } from "../constants/user-info";

const Section: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className="flex items-center justify-start m-1 text-2xl text-gray-200">
      {children}
    </section>
  );
};

export const Header = () => {
  return (
    <header className="sticky top-2 w-full flex items-center justify-end">
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
    </header>
  );
};
