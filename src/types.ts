// src/types/index.ts
export interface Skill {
  id: string;
  name: string;
  percentage: number;
  color: string;
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  period: string;
  title: string;
  description: string;
  color: string;
}

export interface Certification {
  id: number;
  name: string;
  year: number;
  file: string;
  description: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  skills: string[];
  technologies: string[];
  experiences: Experience[];
  certifications: Certification[];
}
