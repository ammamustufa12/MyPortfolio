import { Suspense } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProfileSection } from "@/components/sections/ProfileSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { FeaturedProjectSection } from "@/components/sections/FeaturedProjectSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AISection } from "@/components/sections/AISection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { UpworkSection } from "@/components/sections/UpworkSection";
import { LinkedInSection } from "@/components/sections/LinkedInSection";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { BlogPreviewSection } from "@/components/sections/BlogPreviewSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";

function GitHubFallback() {
  return (
    <section className="section-pad">
      <div className="container-wide">
        <div className="h-64 animate-pulse rounded-2xl border border-white/10 bg-white/[0.02]" />
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProfileSection />
      <ExperienceSection compact />
      <SkillsSection />
      <FeaturedProjectSection />
      <ProjectsSection limit={6} />
      <ServicesSection />
      <AISection />
      <ArchitectureSection />
      <ProcessSection />
      <AchievementsSection />
      <UpworkSection />
      <LinkedInSection />
      <Suspense fallback={<GitHubFallback />}>
        <GitHubSection />
      </Suspense>
      <EducationSection />
      <CertificationsSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <ContactSection />
    </>
  );
}
