export interface Experience {
  company: string;
  website?: string;
  role: string;
  duration: string;
  location: string;
  highlights: string[];
  projects: Project[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  achievements?: string[];
}

export interface Language {
  name: string;
  proficiency: string;
}

export interface Award {
  title: string;
  date: string;
  description: string;
  issuer?: string;
  link?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  duration: string;
  link?: string;
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
  phone?: string;
  willingToRelocate?: string;
  summary: string;
  skills: string[];
  experiences: Experience[];
  education: Education[];
  languages: Language[];
  awards: Award[];
  certifications: Certification[];
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
