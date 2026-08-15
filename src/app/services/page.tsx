import type { Metadata } from "next";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AISection } from "@/components/sections/AISection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Full Stack Development, SaaS, eCommerce, APIs, AI integration, n8n automation, dashboards and DevOps by Ammar Mustafa.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <div className="container-wide pt-16">
        <p className="eyebrow">Services</p>
        <h1 className="display mt-4 max-w-4xl">
          Engineering Services for Serious Products
        </h1>
      </div>
      <ServicesSection />
      <AISection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}
