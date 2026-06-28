export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  highlights: string[];
  projects: Project[];
}

export interface Publication {
  title: string;
  description: string;
  link?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  location: string;
  summary: string;
  skills: string[];
  experiences: Experience[];
  publications: Publication[];
  github: string;
  email: string;
}

export interface Project {
  name: string;
  description: string;
  contribution: string;
  techStack: string[];
}
