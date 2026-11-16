export interface ResumeBasics {
  name: string;
  headline: string;
  highlights: Array<{
    value: string;
    label: string;
  }>;
  email: string;
  phone: string;
  location: string;
  url: {
    label: string;
    href: string;
  };
  resumeDownloads: Array<{
    label: string;
    href: string;
  }>;
  customFields: Array<{
    id: string;
    icon: string;
    name: string;
    value: string;
  }>;
  picture: {
    url: string;
    size: number;
    aspectRatio: number;
    borderRadius: number;
    effects: {
      hidden: boolean;
      border: boolean;
      grayscale: boolean;
    };
  };
}

export interface Education {
  id: string;
  visible: boolean;
  institution: string;
  studyType: string;
  area: string;
  score: string;
  date: string;
  summary: string;
  url: {
    label: string;
    href: string;
  };
}

export interface Experience {
  id: string;
  visible: boolean;
  company: string;
  position: string;
  location: string;
  date: string;
  summary: string;
  summaries: string[];
  multipleSummaries: {
    company: string;
    summaries: string[];
  }[];
  technologies: string[];
  url: {
    label: string;
    href: string;
  };
}

export interface Project {
  id: string;
  visible: boolean;
  outcome?: string;
  featuredOrder: number | null;
  categories: Array<"AI Systems" | "Backend" | "Full Stack" | "Commerce & Payments" | "Recruitment">;
  title: string;
  description: string;
  company: string;
  experienceId: string;
  coverImage: string;
  images: string[];
  technologies: string[];
  caseStudy?: {
    challenge: string;
    ownership: string;
    approach: string[];
    impact: string[];
  };
}

export interface Skill {
  id: string;
  visible: boolean;
  name: string;
  description: string;
  level: number;
  keywords:  {
    title: string;
    image: string;
    image_dark?: string;
  }[];
}

export interface ResumeData {
  basics: ResumeBasics;
  sections: {
    summary: {
      name: string;
      columns: number;
      separateLinks: boolean;
      visible: boolean;
      id: string;
      content: string;
    };
    education: {
      name: string;
      columns: number;
      separateLinks: boolean;
      visible: boolean;
      id: string;
      items: Education[];
    };
    experience: {
      name: string;
      columns: number;
      separateLinks: boolean;
      visible: boolean;
      id: string;
      items: Experience[];
    };
    languages: {
      name: string;
      columns: number;
      separateLinks: boolean;
      visible: boolean;
      id: string;
      items: Array<{
        id: string;
        visible: boolean;
        name: string;
        description: string;
        level: number;
      }>;
    };
    projects: {
      name: string;
      columns: number;
      separateLinks: boolean;
      visible: boolean;
      experienceOrder: string[];
      id: string;
      items: Project[];
    };
    skills: {
      name: string;
      columns: number;
      separateLinks: boolean;
      visible: boolean;
      id: string;
      items: Skill[];
    };
  };
}
