import { createReducer } from "@reduxjs/toolkit";
import { PortfolioState } from "./types";
import { actionSetPortfolioData } from "./actions";

import rocketgostack from "@/assets/images/gostack.png";
import fiap from "@/assets/images/fiap.png";
import ignite from "@/assets/images/ignite.png";
import efset from "@/assets/images/efset.png";

const InitialState: PortfolioState = {
  data: {
    name: "Carlos Rodrigues",
    title: "SOFTWARE_ENGINEER",

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
        description: "DEBEX_GROUP_EXPERIENCE",
        color: "#f1c40f",
      },
      {
        id: "2",
        company: "Wiser",
        period: "2021-2022",
        title: "Back-end Developer",
        description: "WISER_EXPERIENCE",
        color: "#2ecc71",
      },
      {
        id: "3",
        company: "Rocket.Chat",
        period: "2022-2023",
        title: "Back-end Developer",
        description: "ROCKET_CHAT_EXPERIENCE",
        color: "#F5455C",
      },
      {
        id: "4",
        company: "Ilia Digital",
        period: "2023-2023",
        title: "Back-end Developer",
        description: "ILIA_DIGITAL_EXPERIENCE",
        color: "#3498db",
      },
      {
        id: "5",
        company: "SysMap Solutions",
        period: "2023-Current",
        title: "Back-end Developer",
        description: "SYSMAP_EXPERIENCE",
        color: "#f39c12",
      },
    ],
    certifications: [
      {
        id: 1,
        name: "RocketSeat GoStack",
        year: 2019,
        file: rocketgostack,
        description: "CERTIFICATION_GO_STACK",
      },
      {
        id: 2,
        name: "RocketSeat Ignite",
        year: 2021,
        file: ignite,
        description: "CERTIFICATION_IGNITE",
      },
      {
        id: 3,
        name: "FIAP Cloud Fundamentals, Administration and Solution Architect",
        file: fiap,
        year: 2021,
        description: "CERTIFICATION_FIAP",
      },
      {
        id: 4,
        name: "EF SET",
        year: 2023,
        file: efset,
        description: "CERTIFICATION_EF_SET",
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
