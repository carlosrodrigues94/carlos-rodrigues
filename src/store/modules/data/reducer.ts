import { createReducer } from "@reduxjs/toolkit";
import { PortfolioState } from "./types";
import { actionSetPortfolioData } from "./actions";

const InitialState: PortfolioState = {
  data: {
    name: "Carlos Rodrigues",
    title: "Software Engineer",

    technologies: [
      "typescript",
      "nodejs",
      "docker",
      "go",
      "dynamodb",
      "mongodb",
      "terraform",
      "mysql",
      "postgresql",
    ],
    skills: [
      "react",
      "redux",
      "nextjs",
      "jest",
      "nestjs",
      "adonisjs",
      "express",
      "graphql",
      "lambda",
      "ec2",
      "ecs",
      "sqs",
      "gcp",
    ],
    experiences: [
      {
        id: "1",
        company: "Debex Group",
        period: "2019-2021",
        title: "Full-Stack Developer",
        description:
          "Building and maintaining an ERP platform focused on helping Brazilian businesses reach more customers.",
        color: "#f1c40f",
      },
      {
        id: "2",
        company: "Wiser",
        period: "2021-2022",
        title: "Back-end Developer",
        description:
          "I was one of the people responsible for designing and implementing a payment gateway to migrate all of the company’s clients (over 300,000) to this new system.",
        color: "#2ecc71",
      },
      {
        id: "3",
        company: "Rocket.Chat",
        period: "2022-2023",
        title: "Back-end Developer",
        description:
          "I worked on the main Rocket.Chat platform, making fixes and implementing improvements, including authentication and integration with other systems used by over 1 million clients worldwide.",
        color: "#F5455C",
      },
      {
        id: "4",
        company: "Ilia Digital",
        period: "2023-2023",
        title: "Back-end Developer",
        description:
          "I Worked allocated on a cryptocurrency assets company, working on legacy code migration and performance improvements.",
        color: "#3498db",
      },
      {
        id: "5",
        company: "SysMap Solutions",
        period: "2023-Current",
        title: "Back-end Developer",
        description:
          "I’m currently working at Natura&Co, where I help design and set up environments and improve system performance for over 30 million clients.",
        color: "#f39c12",
      },
    ],
  },
  loading: false,
  error: null,
};

export const portfolio = createReducer(InitialState, (builder) => {
  builder.addCase(actionSetPortfolioData, (state, action) => {
    state.data = action.payload;
  });
});
