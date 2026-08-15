import type { Metadata } from "next";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Experience",
  description:
    "Full Stack Developer experience timeline — Laravel, Next.js, React, Node.js, SaaS architecture, APIs, AWS and CI/CD.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <ExperienceSection />
      <ProcessSection />
      <ArchitectureSection />
    </>
  );
}
