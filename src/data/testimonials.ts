import type { Testimonial } from "@/types";

/**
 * Do not invent testimonials.
 * Replace placeholders with real client feedback when available.
 */
export const testimonials: Testimonial[] = [
  {
    id: "placeholder-1",
    name: "Client Name",
    position: "Role",
    company: "Company",
    country: "Country",
    project: "Project",
    rating: 5,
    content:
      "Add a verified client testimonial here. Keep the original wording and attribution.",
    placeholder: true,
  },
  {
    id: "placeholder-2",
    name: "Client Name",
    position: "Role",
    company: "Company",
    country: "Country",
    project: "Project",
    rating: 5,
    content:
      "Placeholder for a second recommendation. Update from Upwork, LinkedIn, or direct feedback.",
    placeholder: true,
  },
  {
    id: "placeholder-3",
    name: "Client Name",
    position: "Role",
    company: "Company",
    country: "Country",
    project: "Project",
    rating: 5,
    content:
      "Placeholder for a third recommendation. Only publish authenticated client quotes.",
    placeholder: true,
  },
];
