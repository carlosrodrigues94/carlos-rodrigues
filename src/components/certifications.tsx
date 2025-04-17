import rocketgostack from "../assets/images/gostack.png";
import fiap from "../assets/images/fiap.png";
import ignite from "../assets/images/ignite.png";
import efset from "../assets/images/efset.png";

export const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: "RocketSeat GoStack",
      year: 2019,
      file: rocketgostack,
      description:
        "Complete bootcamp to learn how to build fast applications using React, NodeJs, React Native, Docker and Postgres",
    },
    {
      id: 2,
      name: "RocketSeat Ignite",
      year: 2021,
      file: ignite,
      description:
        "Complete bootcamp from zero to deploy applications with Technologies like: React, NextJs, Typescript and Docker",
    },

    {
      id: 3,
      name: "FIAP Cloud Fundamentals, Administration and Solution Architect",
      file: fiap,
      year: 2021,
      description:
        "A course to learn about to design and implement cloud solutions on the most famous cloud providers.",
    },
    {
      id: 4,
      name: "EF SET",
      year: 2023,
      file: efset,
      description:
        "English proficiency certification by EF Standard English Test (EF SET), designed to assess reading and listening skills based on the CEFR (Common European Framework of Reference for Languages).",
    },
  ];
  return (
    <section className="w-full pl-20 pr-20 rounded-sm max-lg:pl-4 max-lg:pr-4">
      <h2 className="ml-2 text-2xl mb-8">Certifications</h2>
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
              <span>{certification.description}</span>
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
