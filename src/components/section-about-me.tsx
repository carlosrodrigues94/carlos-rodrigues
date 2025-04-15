import { FC } from "react";

export const SectionAboutMe: FC = () => {
  return (
    <section className="xl:w-1/2 flex 2xl:flex-row sm:flex-col sm:w-full items-center justify-center ml-auto mb-20 mr-auto border-1 p-4 text-center rounded-md  border-gray-700">
      <img
        className="rounded-full w-48 mr-10 sm:mb-6 sm:mr-auto sm:ml-auto"
        src="https://media.licdn.com/dms/image/v2/D4D03AQF8N2Zhot2h_g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1673460652756?e=1750291200&v=beta&t=Zr-YOk7vKsJEQqZR7CkgY9KntqjVDV97Xbk2ZFOLUDQ"
        alt=""
      />
      <p>
        Hi, I'm Carlos a passionate and experienced Software Engineer
        specialized in building scalable, event-driven applications using
        Node.js, NestJS, React, and AWS. I have a strong background in designing
        robust backend systems, implementing clean architecture principles, and
        delivering high-quality solutions for millions of users.
      </p>
    </section>
  );
};
