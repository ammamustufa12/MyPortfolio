import type { Certification } from "@/types";

/**
 * Certification vault — add real credentials when available.
 * Entries marked as placeholders will render as "Add credential" slots.
 */
export const certifications: Certification[] = [
  {
    id: "aws-placeholder",
    name: "AWS Certification — Add Details",
    issuer: "Amazon Web Services",
    category: "AWS",
  },
  {
    id: "ai-placeholder",
    name: "AI / LLM Credential — Add Details",
    issuer: "Issuer",
    category: "AI",
  },
  {
    id: "fullstack-placeholder",
    name: "Full Stack Certification — Add Details",
    issuer: "Issuer",
    category: "Full Stack",
  },
  {
    id: "devops-placeholder",
    name: "DevOps Certification — Add Details",
    issuer: "Issuer",
    category: "DevOps",
  },
  {
    id: "cloud-placeholder",
    name: "Cloud Certification — Add Details",
    issuer: "Issuer",
    category: "Cloud",
  },
  {
    id: "programming-placeholder",
    name: "Programming Credential — Add Details",
    issuer: "Issuer",
    category: "Programming",
  },
];
