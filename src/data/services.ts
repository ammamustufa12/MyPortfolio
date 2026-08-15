import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "fullstack",
    title: "Full Stack Development",
    slug: "full-stack-development",
    description:
      "End-to-end Laravel, Next.js and React applications built for real production workloads.",
    icon: "layers",
    technologies: ["Laravel", "Next.js", "React", "Node.js", "MySQL"],
    deliverables: [
      "Architecture & implementation",
      "Frontend + backend delivery",
      "Auth, APIs and data models",
      "Deployment-ready codebase",
    ],
    cta: "Discuss a build",
  },
  {
    id: "saas",
    title: "SaaS Development",
    slug: "saas-development",
    description:
      "Multi-tenant SaaS platforms, subscription flows and operational dashboards.",
    icon: "boxes",
    technologies: ["Laravel", "Next.js", "PostgreSQL", "Stripe", "AWS"],
    deliverables: [
      "Multi-tenant architecture",
      "Role-based access",
      "Billing integrations",
      "Admin & customer dashboards",
    ],
    cta: "Plan a SaaS product",
  },
  {
    id: "ecommerce",
    title: "eCommerce Development",
    slug: "ecommerce-development",
    description:
      "Custom eCommerce platforms, catalogs, checkout flows and payment integrations.",
    icon: "shopping-bag",
    technologies: ["Laravel", "React", "Stripe", "MySQL"],
    deliverables: [
      "Product & catalog systems",
      "Checkout & payments",
      "Order management",
      "Integrations & reporting",
    ],
    cta: "Build store systems",
  },
  {
    id: "api",
    title: "API Development",
    slug: "api-development",
    description:
      "REST APIs and third-party integrations designed for reliability and clarity.",
    icon: "network",
    technologies: ["Laravel", "Node.js", "Express.js", "REST"],
    deliverables: [
      "API design & docs",
      "Auth & permissions",
      "Third-party connectors",
      "Monitoring-ready endpoints",
    ],
    cta: "Integrate systems",
  },
  {
    id: "ai",
    title: "AI Integration",
    slug: "ai-integration",
    description:
      "AI-powered applications, assistants and automation embedded into real products.",
    icon: "sparkles",
    technologies: ["AI APIs", "Next.js", "Node.js", "n8n"],
    deliverables: [
      "AI feature architecture",
      "Prompt/API orchestration",
      "Product UI integration",
      "Automation handoff flows",
    ],
    cta: "Explore AI features",
  },
  {
    id: "n8n",
    title: "n8n Automation",
    slug: "n8n-automation",
    description:
      "Custom workflows that connect tools, data and AI into business automation.",
    icon: "workflow",
    technologies: ["n8n", "APIs", "Webhooks", "AI"],
    deliverables: [
      "Workflow mapping",
      "Tool integrations",
      "Error handling",
      "Ops-ready automations",
    ],
    cta: "Automate operations",
  },
  {
    id: "dashboard",
    title: "Dashboard Development",
    slug: "dashboard-development",
    description:
      "Admin panels, analytics interfaces and internal management systems.",
    icon: "layout-dashboard",
    technologies: ["React", "Next.js", "Laravel", "MySQL"],
    deliverables: [
      "Role-aware admin UI",
      "Data visualization",
      "CRUD workflows",
      "Operational tooling",
    ],
    cta: "Design a dashboard",
  },
  {
    id: "devops",
    title: "DevOps & Deployment",
    slug: "devops-deployment",
    description:
      "Docker, AWS, VPS, Nginx and CI/CD pipelines for stable releases.",
    icon: "cloud",
    technologies: ["Docker", "AWS", "Nginx", "GitHub Actions", "Linux"],
    deliverables: [
      "Environment setup",
      "CI/CD pipelines",
      "Server hardening basics",
      "Release automation",
    ],
    cta: "Harden delivery",
  },
];
