import type { Achievement, Profile } from "@/types";

export const achievements: Achievement[] = [
  {
    id: "years",
    value: "5+",
    label: "Years Experience",
    numericValue: 5,
    suffix: "+",
  },
  {
    id: "websites",
    value: "400+",
    label: "Websites",
    numericValue: 400,
    suffix: "+",
  },
  {
    id: "apps",
    value: "30+",
    label: "Mobile Apps",
    numericValue: 30,
    suffix: "+",
  },
  {
    id: "projects",
    value: "100+",
    label: "Projects Delivered",
    numericValue: 100,
    suffix: "+",
  },
  {
    id: "rating",
    value: "5★",
    label: "Client Feedback",
  },
  {
    id: "clients",
    value: "International",
    label: "Clients",
  },
];

export const profile: Profile = {
  name: "Ammar Mustafa",
  firstName: "Ammar",
  lastName: "Mustafa",
  title: "Senior Full-Stack Engineer | Frontend & Mobile Development",
  shortTitle: "Senior Full-Stack Engineer",
  tagline: "I Build Digital Products That Actually Work.",
  headline: "I Build Digital Products That Actually Work.",
  subheadline:
    "Senior Full-Stack Engineer specializing in React, React Native, Next.js, Laravel, Node.js, and scalable enterprise platforms.",
  location: "Dubai, United Arab Emirates",
  email: "ammar12mustufa@gmail.com",
  phone: "+971 555481557",
  availability: {
    available: true,
    label: "Available for selected projects",
  },
  experienceYears: 5,
  summary: [
    "Full-Stack Software Engineer with 5+ years of experience building scalable web applications, cross-platform mobile apps, enterprise platforms, and REST APIs.",
    "Specializes in frontend development with React, React Native, and modern JavaScript frameworks, with strong full-stack capabilities across backend services, database design, API integrations, and cloud deployment.",
    "Currently building enterprise-grade investment platforms and customer portals at Investo Investment LLC in Dubai. Experienced in CRM/ERP systems, mobile application development, CI/CD pipelines, and AWS cloud infrastructure.",
    "Passionate about building intuitive, high-performance user experiences and contributing to AI-assisted engineering teams.",
  ],
  positioning:
    "I build scalable, high-performance web applications, mobile apps, SaaS platforms, dashboards and AI-powered digital products.",
  achievements,
  resumeUrl: "/resume",
  keywords: [
    "Senior Full-Stack Engineer",
    "React Developer",
    "React Native Developer",
    "Next.js Developer",
    "Laravel Developer",
    "Node.js Developer",
    "Dubai Full Stack Developer",
    "Mobile App Developer",
  ],
  languages: [
    { name: "English", level: "Professional" },
    { name: "Urdu", level: "Native" },
    { name: "Hindi", level: "Conversational" },
  ],
};

export const resumeSkillGroups = [
  {
    title: "Frontend Development",
    items: [
      "React.js",
      "React Native",
      "Next.js",
      "Vue.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Livewire",
      "Inertia.js",
    ],
  },
  {
    title: "Mobile Development",
    items: [
      "React Native",
      "Cross-Platform Mobile",
      "App Store & Play Store Deployment",
      "State Management",
      "Mobile App Architecture",
    ],
  },
  {
    title: "Backend Development",
    items: [
      "Node.js",
      "Laravel (PHP)",
      "REST APIs",
      "Authentication & RBAC",
      "MVC Architecture",
      "Microservices",
    ],
  },
  {
    title: "Databases",
    items: [
      "MySQL",
      "MS SQL Server",
      "Database Design & Optimization",
      "Data Migration",
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      "Docker",
      "AWS (EC2, RDS, Lambda)",
      "CI/CD (Jenkins)",
      "Linux",
      "Nginx",
      "SSL",
      "CloudPanel",
    ],
  },
  {
    title: "Integrations & Automation",
    items: [
      "Third-Party APIs",
      "Payment Gateways",
      "CRM/ERP Systems",
      "Background Jobs",
      "Task Schedulers",
    ],
  },
  {
    title: "Other",
    items: [
      "AI-Integrated Web Applications",
      "AI-Assisted Development Tools",
      "Agile Methodologies",
      "Automated Testing",
      "UX Principles",
    ],
  },
];

export const careerTimeline = [
  {
    id: "investo",
    title: "Enterprise Platforms",
    description:
      "Building investment platforms, customer portals, and CRM systems at Investo Investment LLC in Dubai.",
    period: "2023 — Present",
    icon: "layers",
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description:
      "Cross-platform React Native apps with App Store / Play Store delivery and API-driven backends.",
    period: "Focus",
    icon: "sparkles",
  },
  {
    id: "fullstack",
    title: "Full-Stack Engineering",
    description:
      "React, Next.js, Laravel, and Node.js systems across web, APIs, and cloud infrastructure.",
    period: "2019 — Present",
    icon: "code",
  },
  {
    id: "wordpress",
    title: "Agency Delivery",
    description:
      "Custom WordPress sites, themes, and client delivery at Abco Digitals, Hyderabad.",
    period: "2019 — 2022",
    icon: "building",
  },
  {
    id: "international",
    title: "International Projects",
    description:
      "Products for businesses across UAE, Pakistan, India, Australia, and beyond.",
    period: "Global",
    icon: "globe",
  },
  {
    id: "devops",
    title: "DevOps / Cloud",
    description:
      "Docker, AWS (EC2, RDS, Lambda), Nginx, SSL, and CI/CD pipelines in production.",
    period: "Production",
    icon: "cloud",
  },
  {
    id: "ai",
    title: "AI Integration",
    description:
      "LLM API integrations, AI-powered workflows, and AI-assisted engineering practices.",
    period: "Current",
    icon: "briefcase",
  },
];
