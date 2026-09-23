export type ContactLink = {
  label: string;
  displayText: string;
  href: string;
  showIcon: boolean;
};

export type PhotoConfig = {
  src: string;
  translateX: number;
  translateY: number;
  scale: number;
  objectPosition?: string;
};

export type CompanyRole = {
  role: string;
  duration: string;
  bullets: string[];
};

export type Experience = {
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  roles: CompanyRole[];
  type: string;
};

export type Project = {
  name: string;
  role: string;
  technologies: string[];
  description: string;
  bullets: string[];
  href?: string;
};

export type SkillGroup = {
  name: string;
  skills: string[];
};

export type CvData = {
  name: string;
  photo: PhotoConfig;
  targetTitle: string;
  location: string;
  coreTechnologies: string[];
  summary: string;
  contacts: ContactLink[];
  experience: Experience[];
  skills: SkillGroup[];
  education?: {
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
  }[];
  additionalInformation?: any;
};
