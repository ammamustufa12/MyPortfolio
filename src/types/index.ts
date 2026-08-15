export type SocialPlatform =
  | "linkedin"
  | "upwork"
  | "github"
  | "fiverr"
  | "instagram"
  | "x"
  | "email"
  | "whatsapp"
  | "calendar";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
  external?: boolean;
}

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  shortTitle: string;
  tagline: string;
  headline: string;
  subheadline: string;
  location: string;
  email: string;
  phone?: string;
  availability: {
    available: boolean;
    label: string;
  };
  experienceYears: number;
  summary: string[];
  positioning: string;
  achievements: Achievement[];
  resumeUrl: string;
  keywords: string[];
  languages?: { name: string; level: string }[];
}

export interface Achievement {
  id: string;
  value: string;
  label: string;
  numericValue?: number;
  suffix?: string;
}

export interface ExperienceRole {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  location?: string;
  employmentType?: string;
  startDate: string;
  endDate: string | "Present";
  current?: boolean;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  highlights?: string[];
}

export interface TimelineMilestone {
  id: string;
  title: string;
  description: string;
  period?: string;
  icon?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  startYear: string;
  endYear: string;
  description?: string;
  coursework?: string[];
  logo?: string;
}

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Databases"
  | "DevOps / Cloud"
  | "Other";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: "Expert" | "Advanced" | "Intermediate";
  years?: number;
  projectsUsedIn?: number;
  description: string;
  related?: string[];
}

export type ProjectCategory =
  | "SaaS"
  | "eCommerce"
  | "Business"
  | "Web Apps"
  | "Dashboards"
  | "AI"
  | "Laravel"
  | "Next.js"
  | "React"
  | "Node.js";

export interface ProjectCaseStudy {
  problem: string;
  solution: string;
  architecture?: string;
  frontend?: string;
  backend?: string;
  api?: string;
  database?: string;
  animations?: string;
  performance?: string;
  deployment?: string;
  keyFeatures: string[];
  outcomes?: string[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: ProjectCategory[];
  technologies: string[];
  image: string;
  gallery?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year?: string;
  role: string;
  businessProblem?: string;
  solution?: string;
  caseStudy?: ProjectCaseStudy;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  technologies: string[];
  deliverables: string[];
  cta: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  verificationUrl?: string;
  category: "AWS" | "AI" | "Full Stack" | "DevOps" | "Cloud" | "Programming";
}

export interface Testimonial {
  id: string;
  name: string;
  position?: string;
  company?: string;
  country?: string;
  project?: string;
  rating?: number;
  content: string;
  placeholder?: boolean;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ArchitectureLayer {
  id: string;
  title: string;
  description: string;
  technologies: string[];
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  coverImage?: string;
  readingTime: string;
  published: boolean;
}

export interface UpworkProfile {
  title: string;
  profileUrl: string;
  headline: string;
  summary: string[];
  services: string[];
  highlights: { label: string; value: string; placeholder?: boolean }[];
}

export interface LinkedInProfile {
  profileUrl: string;
  headline: string;
  about: string[];
  featuredSkills: string[];
}
