import type { ExperienceRole } from "@/types";

/**
 * Editable experience data — sourced from CV.
 */
export const experience: ExperienceRole[] = [
  {
    id: "investo",
    title: "Full-Stack Software Engineer",
    company: "Investo Investment LLC",
    location: "Dubai, United Arab Emirates",
    employmentType: "Full-time",
    startDate: "August 2023",
    endDate: "Present",
    current: true,
    summary:
      "Developing and maintaining enterprise-grade investment platforms, customer portals, and business-critical applications using React, Next.js, Node.js, and Laravel.",
    responsibilities: [
      "Developed and maintained enterprise-grade investment platforms, customer portals, and business-critical applications using React, Next.js, Node.js, and Laravel",
      "Built high-quality, responsive user interfaces with focus on performance, usability, and reliability for customers, internal teams, and business users",
      "Designed and implemented secure REST APIs with authentication, role-based access control (RBAC), and data validation for financial and enterprise systems",
      "Built and maintained CRM platform components, internal dashboards, and interactive reporting tools with React and modern JavaScript",
      "Integrated third-party APIs including payment gateways, accounting systems, and external financial services",
      "Managed Docker containerization, AWS deployments (EC2, RDS), and CI/CD pipelines for production environments",
      "Contributed to frontend architecture improvements, reusable component libraries, and development best practices",
      "Optimized database queries, backend logic, and application performance for high-traffic enterprise usage",
      "Collaborated with product, design, and engineering teams to convert requirements into scalable technical solutions",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Laravel",
      "MySQL",
      "Docker",
      "AWS",
      "CI/CD",
    ],
    highlights: [
      "Enterprise investment platforms & customer portals",
      "Secure REST APIs with RBAC",
      "CRM dashboards and reporting tools",
      "AWS + Docker production deployments",
    ],
  },
  {
    id: "abco",
    title: "WordPress Developer",
    company: "Abco Digitals",
    location: "Hyderabad, Pakistan",
    employmentType: "Full-time · On-site",
    startDate: "April 2019",
    endDate: "February 2022",
    current: false,
    summary:
      "Developed and maintained custom WordPress websites, themes, plugins, and HTML/CSS templates for client projects.",
    responsibilities: [
      "Developed and maintained custom WordPress websites, themes, plugins, and HTML/CSS templates for client projects",
      "Converted PSD and Figma designs into responsive WordPress websites using PHP, JavaScript, Elementor, and WPBakery",
      "Customized website functionality, integrated external APIs, and resolved cross-browser compatibility issues",
      "Performed website maintenance, troubleshooting, security fixes, and performance improvements across delivered projects",
      "Collaborated with designers and project teams to deliver websites according to requirements and deadlines",
    ],
    technologies: [
      "WordPress",
      "PHP",
      "JavaScript",
      "HTML/CSS",
      "Elementor",
      "WPBakery",
    ],
  },
];
