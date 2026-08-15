import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { FeaturedProjectSection } from "@/components/sections/FeaturedProjectSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description:
    "Interactive project gallery and case studies by Ammar Mustafa — SaaS, eCommerce, business platforms and modern web apps.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <div className="container-wide pt-16">
        <p className="eyebrow">Projects</p>
        <h1 className="display mt-4 max-w-4xl">Selected Work & Case Studies</h1>
        <p className="lead mt-5">
          Filter by category, open cinematic case studies, and explore live
          production websites.
        </p>
      </div>
      <FeaturedProjectSection />
      <ProjectsSection showHeading={false} />
    </>
  );
}
