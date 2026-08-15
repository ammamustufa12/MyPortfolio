import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { absoluteUrl } from "@/lib/utils";

const siteName = `${profile.name} — ${profile.shortTitle}`;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(absoluteUrl()),
  title: {
    default: siteName,
    template: `%s | ${profile.name}`,
  },
  description: profile.positioning,
  keywords: profile.keywords,
  authors: [{ name: profile.name, url: absoluteUrl() }],
  creator: profile.name,
  publisher: profile.name,
  alternates: {
    canonical: absoluteUrl(),
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: absoluteUrl(),
    siteName,
    title: siteName,
    description: profile.positioning,
    images: [
      {
        url: absoluteUrl("/og.png"),
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: profile.positioning,
    images: [absoluteUrl("/og.png")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export function createPageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${profile.name}`,
      description,
      url,
    },
    twitter: {
      title: `${title} | ${profile.name}`,
      description,
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.shortTitle,
    description: profile.positioning,
    url: absoluteUrl(),
    email: profile.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    knowsAbout: profile.keywords,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: absoluteUrl(),
    description: profile.positioning,
    publisher: {
      "@type": "Person",
      name: profile.name,
    },
  };
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${profile.name} — Full Stack Development`,
    description: profile.positioning,
    url: absoluteUrl(),
    areaServed: ["Dubai", "UAE", "Worldwide"],
    provider: {
      "@type": "Person",
      name: profile.name,
    },
    serviceType: [
      "Full Stack Development",
      "SaaS Development",
      "API Development",
      "AI Automation",
    ],
  };
}
