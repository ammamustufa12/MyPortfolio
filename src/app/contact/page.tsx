import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Ammar Mustafa — Full Stack Developer in Dubai, UAE. Available for selected projects via email, LinkedIn and Upwork.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <div className="container-wide pt-16">
        <p className="eyebrow">Contact</p>
        <h1 className="display mt-4 max-w-4xl">
          Have a Product in Mind? Let&apos;s Build It.
        </h1>
      </div>
      <ContactSection />
    </>
  );
}
