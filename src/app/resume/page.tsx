import type { Metadata } from "next";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Resume",
  description:
    "Interactive resume of Ammar Mustafa — Full Stack Developer specializing in Laravel, Next.js, React, Node.js and AI automation.",
  path: "/resume",
});

export default function ResumePage() {
  return <ResumeSection />;
}
