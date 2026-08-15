import type { ArchitectureLayer, ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    number: "01",
    title: "Discovery",
    description:
      "Clarify goals, constraints, users, and success metrics before a single line of production code.",
  },
  {
    id: "architecture",
    number: "02",
    title: "Architecture",
    description:
      "Define system boundaries, data models, API contracts, and deployment topology.",
  },
  {
    id: "uiux",
    number: "03",
    title: "UI/UX",
    description:
      "Shape clear interfaces with hierarchy, accessibility, and conversion-focused flows.",
  },
  {
    id: "development",
    number: "04",
    title: "Development",
    description:
      "Build frontend and backend in iterative vertical slices with clean, maintainable code.",
  },
  {
    id: "api",
    number: "05",
    title: "API Integration",
    description:
      "Connect services, payments, auth providers, and third-party platforms reliably.",
  },
  {
    id: "testing",
    number: "06",
    title: "Testing",
    description:
      "Validate flows, edge cases, permissions, and performance before release.",
  },
  {
    id: "deployment",
    number: "07",
    title: "Deployment",
    description:
      "Ship with Docker, CI/CD, cloud infrastructure, and monitoring-ready environments.",
  },
  {
    id: "maintenance",
    number: "08",
    title: "Maintenance",
    description:
      "Iterate, harden, and evolve the product with ongoing improvements and support.",
  },
];

export const architectureLayers: ArchitectureLayer[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Product UI, interaction design, and client rendering.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "api",
    title: "API Layer",
    description: "Contracts, auth gates, and service orchestration.",
    technologies: ["REST APIs", "Node.js", "Laravel API"],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Domain logic, workflows, and business rules.",
    technologies: ["Laravel", "Node.js", "Express.js"],
  },
  {
    id: "database",
    title: "Database",
    description: "Persistent data models and query performance.",
    technologies: ["MySQL", "PostgreSQL", "Redis"],
  },
  {
    id: "external",
    title: "External Services",
    description: "Payments, AI, messaging, and third-party platforms.",
    technologies: ["Stripe", "AI APIs", "n8n"],
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure",
    description: "Hosting, containers, reverse proxies, and pipelines.",
    technologies: ["AWS", "Docker", "Nginx", "GitHub Actions"],
  },
];

export const aiWorkflow = [
  { id: "trigger", label: "Trigger" },
  { id: "ai", label: "AI" },
  { id: "processing", label: "Processing" },
  { id: "database", label: "Database" },
  { id: "notification", label: "Notification" },
  { id: "action", label: "Action" },
];
