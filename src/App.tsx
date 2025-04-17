import React from "react";
import { Title } from "./components/title";
import { SectionAboutMe } from "./components/section-about-me";
import { CardTechnologiesContainer } from "./components/card-technologies-container";
import { SectionChallenges } from "./components/challenges";
import { ExperienceSection } from "./components/experience-section";
import { RootState } from "./store/config";
import { useSelector } from "react-redux";
import { Header } from "./components/header";
import { Certifications } from "./components/certifications";

export const App: React.FC = () => {
  const { data } = useSelector((state: RootState) => state.portfolio);
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="w-full mx-auto px-4 py-12">
        <Header />
        <Title />
        <SectionAboutMe />
        <CardTechnologiesContainer />
        <SectionChallenges />
        <ExperienceSection experiences={data.experiences} />
        <Certifications />
      </div>
    </div>
  );
};
