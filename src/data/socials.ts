import type { SocialLink } from "@/types";

/**
 * Only links with valid, non-placeholder URLs are displayed in the UI.
 * Update these values with your real profiles.
 */
export const socials: SocialLink[] = [
  {
    platform: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/ammar-mustafa-57355a248/",
    external: true,
  },
  {
    platform: "upwork",
    label: "Upwork",
    url: "https://www.upwork.com/freelancers/~011441ee23d3ff9908",
    external: true,
  },
  {
    platform: "github",
    label: "GitHub",
    url: "https://github.com/ammamustufa12",
    external: true,
  },
  {
    platform: "fiverr",
    label: "Fiverr",
    url: "https://www.fiverr.com/users/ammarmustafa445",
    external: true,
  },
  {
    platform: "email",
    label: "Email",
    url: "mailto:ammar12mustufa@gmail.com",
  },
];

export function getValidSocials(links: SocialLink[] = socials): SocialLink[] {
  return links.filter(
    (link) =>
      Boolean(link.url) &&
      !link.url.includes("YOUR_") &&
      link.url !== "#" &&
      link.url.trim().length > 0,
  );
}

export function getSocial(
  platform: SocialLink["platform"],
): SocialLink | undefined {
  return getValidSocials().find((s) => s.platform === platform);
}
