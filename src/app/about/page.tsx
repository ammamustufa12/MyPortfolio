import type { Metadata } from "next";
import { ProfileSection } from "@/components/sections/ProfileSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Meet Ammar Mustafa — Senior Full-Stack Engineer with 5+ years building scalable web apps, mobile apps, SaaS platforms, and AI-powered products.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <ProfileSection />
      <AchievementsSection />
      <EducationSection />
    </>
  );
}
