import { FC } from "react";
import "./styles.css";

type SectionProps = {
  children: React.ReactNode;
};

export const Section: FC<SectionProps> = ({ children }) => {
  return (
    <section className="flex items-center justify-start text-gray-200">
      {children}
    </section>
  );
};
