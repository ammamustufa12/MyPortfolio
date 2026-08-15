import type { Project, ProjectCategory } from "@/types";

export const projectFilters: Array<"All" | ProjectCategory> = [
  "All",
  "SaaS",
  "eCommerce",
  "Business",
  "Web Apps",
  "Dashboards",
  "AI",
  "Laravel",
  "Next.js",
  "React",
  "Node.js",
];

/**
 * Central project catalog.
 * Technologies listed only when known; update freely without touching UI.
 */
export const projects: Project[] = [
  {
    id: "kprverse",
    title: "KPRVERSE",
    slug: "kprverse",
    description:
      "Cinematic brand universe for Keep Protect Reimagine — immersive storytelling, layered motion, and a production-grade full-stack foundation.",
    shortDescription:
      "Immersive cyber-fantasy brand experience at kprverse.com.",
    category: ["Web Apps", "Next.js", "React", "Laravel", "Business"],
    technologies: [
      "Next.js",
      "React",
      "GSAP",
      "Tailwind",
      "Laravel",
      "Node.js",
      "MySQL",
    ],
    image: "/images/projects/kprverse.png",
    gallery: ["/images/projects/kprverse.png"],
    liveUrl: "https://www.kprverse.com/",
    featured: true,
    year: "2024",
    role: "Full Stack Developer",
    businessProblem:
      "Launch a distinctive digital universe that feels like a high-budget game / film experience — not a brochure site.",
    solution:
      "Built a motion-first Next.js frontend with layered typography, cinematic hero presentation, and GSAP-driven storytelling, backed by Laravel/Node services and MySQL.",
    caseStudy: {
      problem:
        "KPR needed a world-class interactive presence — KEEP. PROTECT. REIMAGINE. — with depth, atmosphere, and technical polish that holds up for a global audience.",
      solution:
        "Delivered an immersive site experience with full-bleed character art, HUD-style UI framing, scroll storytelling, and a scalable full-stack architecture.",
      architecture:
        "Next.js presentation layer → API/services → Laravel/Node backend → MySQL → optimized asset delivery on modern hosting.",
      frontend:
        "React/Next.js UI with layered z-index compositions, fluid display typography, Tailwind systems, and GSAP timeline/scroll sequences.",
      backend:
        "Laravel and Node.js services for application logic, content, and integrations.",
      api: "Structured API communication between the cinematic frontend and backend systems.",
      database: "MySQL for reliable relational data storage.",
      animations:
        "GSAP-powered entrances, parallax layers, neon atmosphere, and scroll-driven narrative beats.",
      performance:
        "Optimized imagery, lazy loading, and motion paths that respect device capability and reduced-motion preferences.",
      deployment:
        "Production deployment with continuous delivery practices for a live brand experience.",
      keyFeatures: [
        "Full-bleed cinematic hero",
        "Layered typography & character depth",
        "HUD-style navigation chrome",
        "Scroll-driven storytelling",
        "Live production site at kprverse.com",
      ],
      outcomes: [
        "Awwwards-level brand differentiation",
        "High-engagement interactive presentation",
        "Scalable technical foundation for the KPR universe",
      ],
    },
  },
  {
    id: "socialcash",
    title: "SocialCash",
    slug: "socialcash",
    description:
      "UAE influencer marketing platform connecting brands and creators — verified campaigns, dual journeys, and mobile app distribution.",
    shortDescription:
      "Where brands & creators grow together — socialcash.ae",
    category: ["SaaS", "Business", "Web Apps", "Next.js", "Laravel"],
    technologies: ["Next.js", "Laravel", "MySQL", "Tailwind CSS", "GSAP"],
    image: "/images/projects/socialcash.png",
    gallery: ["/images/projects/socialcash.png"],
    liveUrl: "https://socialcash.ae/",
    featured: true,
    year: "2025",
    role: "Full Stack Developer",
    businessProblem:
      "Give Social Cash a clear dual-audience web presence so brands and influencers can instantly understand the platform and take action.",
    solution:
      "Built a conversion-focused marketing site with Brand / Creator CTAs, lifestyle creator collage, and app-store download paths for Google Play, App Store, and AppGallery.",
    caseStudy: {
      problem:
        "Social Cash needed a premium UAE marketplace presence that speaks to both brands and creators without confusing the two journeys.",
      solution:
        "Delivered a bright, modern platform homepage with clear segmentation (For Influencers / For Brands), glowing CTAs, and a creator-first visual grid that reinforces trust and scale.",
      keyFeatures: [
        "Dual audience hero (Brand + Creator)",
        "Influencer / Brand nav switching",
        "App download links (Play · App Store · AppGallery)",
        "Creator lifestyle collage layout",
        "Live production site at socialcash.ae",
      ],
      outcomes: [
        "Clear acquisition paths for brands and creators",
        "Strong UAE MarTech brand presence",
        "Mobile-ready download funnel from the web",
      ],
    },
  },
  {
    id: "investouae",
    title: "Investo UAE",
    slug: "investo-uae",
    description:
      "Premium investment & asset management platform for Dubai — leasehold, car leasing, and micro-development products with a cinematic product hero.",
    shortDescription:
      "Dubai investment platform — Mobility. Money. Momentum.",
    category: ["Business", "Web Apps", "Dashboards", "Next.js", "Laravel"],
    technologies: ["Next.js", "Laravel", "MySQL", "Tailwind CSS", "GSAP"],
    image: "/images/projects/investouae.png",
    gallery: ["/images/projects/investouae.png"],
    liveUrl: "https://investouae.com/",
    featured: true,
    year: "2025",
    role: "Full Stack Developer",
    businessProblem:
      "Present Investo’s diversified investment products with trust, clarity, and a premium brand experience for UAE and international investors.",
    solution:
      "Delivered a polished production website with product storytelling, hero carousels, ratings social proof, and clear conversion paths to Explore More / Investo Portal.",
    caseStudy: {
      problem:
        "Investo needed a credible Dubai investment presence that communicates asset-backed products — leasehold, Cars Now mobility investments, and micro development — without feeling like a generic brochure.",
      solution:
        "Built a premium dark lifestyle presentation with immersive hero slides, product navigation (01–03), trust badges, and strong CTAs into investment journeys and the client portal.",
      keyFeatures: [
        "Full-bleed lifestyle hero storytelling",
        "Multi-product slider (Leasehold · Cars Now · Micro Development)",
        "Google / Trustpilot social proof",
        "Investo Portal CTA",
        "Live production site at investouae.com",
      ],
      outcomes: [
        "Premium brand positioning for UAE investors",
        "Clear product discovery across investment verticals",
        "Conversion-ready pathways to portal and enquire flows",
      ],
    },
  },
  {
    id: "pioneer-facility-management",
    title: "Pioneer Facility Management",
    slug: "pioneer-facility-management",
    description:
      "Sydney cleaning & facility services platform with polished Next.js UI, Laravel backend, and GSAP motion — quotes, services, and conversion-focused booking flows.",
    shortDescription:
      "Sydney cleaning services site — Next.js · Laravel · GSAP.",
    category: ["Business", "Web Apps", "Next.js", "Laravel"],
    technologies: ["Next.js", "Laravel", "GSAP", "React", "Tailwind"],
    image: "/images/projects/pioneer-facility-management.png",
    gallery: ["/images/projects/pioneer-facility-management.png"],
    liveUrl: "https://pioneerfacilitymanagement.com.au/",
    featured: true,
    year: "2026",
    role: "Full Stack Developer",
    businessProblem:
      "Give a Sydney facility management brand a premium, trustworthy web presence that converts visitors into free quotes and service bookings.",
    solution:
      "Built a production site on Next.js + Laravel with GSAP-powered section motion, service storytelling, ratings social proof, and clear Free Quote CTAs.",
    caseStudy: {
      problem:
        "Pioneer needed more than a basic brochure — a modern service website that feels professional, friendly, and ready to capture residential and commercial cleaning leads across Sydney.",
      solution:
        "Delivered a Next.js frontend with GSAP animations and a Laravel-backed foundation for forms, content, and service workflows — framed around trust signals (reviews, trained team) and conversion paths.",
      architecture:
        "Next.js presentation layer with GSAP motion → Laravel APIs / forms → production hosting for the Australian market.",
      frontend:
        "Next.js + React UI with rounded hero compositions, service grids, FAQ accordion patterns, and GSAP scroll/reveal animation.",
      backend:
        "Laravel for application logic, quote/contact handling, and maintainable service content structure.",
      animations:
        "GSAP-driven section reveals and micro-interactions across the marketing journey.",
      keyFeatures: [
        "Trusted hero with Free Quote / Services CTAs",
        "Residential, office, deep clean & specialty services",
        "Google reviews social proof",
        "Booking and quote capture flows",
        "Live site at pioneerfacilitymanagement.com.au",
      ],
      outcomes: [
        "Premium local-service brand presence in Sydney",
        "Clear lead capture for quotes and bookings",
        "Motion-rich Next.js + Laravel production stack",
      ],
    },
  },
  {
    id: "upbrandindia",
    title: "UpBrand India",
    slug: "upbrand-india",
    description:
      "Intelligence-led branding and marketing platform for UpBrand — data-first growth positioning across marketing, branding, design, and technology.",
    shortDescription:
      "We don't chase trends. We build growth. — upbrandindia.in",
    category: ["Business", "Web Apps"],
    technologies: [
      "WordPress",
      "MySQL",
      "Tailwind CSS",
      "GSAP",
      "Custom Theme",
    ],
    image: "/images/projects/upbrandindia.png",
    gallery: ["/images/projects/upbrandindia.png"],
    liveUrl: "https://upbrandindia.in/",
    featured: true,
    year: "2026",
    role: "Full Stack Developer",
    businessProblem:
      "Present UpBrand as a premium, data-first agency partner with clear service disciplines and strong enquiry conversion.",
    solution:
      "Built a WordPress custom theme with Tailwind CSS and GSAP motion — dark, high-contrast brand UI, service architecture, and Get In Touch CTAs.",
    caseStudy: {
      problem:
        "UpBrand needed a distinctive digital presence that separates them from trend-chasing agencies and communicates intelligence-led growth.",
      solution:
        "Delivered a production WordPress site with a custom theme, MySQL-backed content, Tailwind styling, GSAP animations, bold hero storytelling, four-pillar services, blogs, and contact funnels.",
      frontend:
        "Custom WordPress theme with Tailwind CSS and GSAP-powered interactions.",
      backend: "WordPress + MySQL for content, blogs, and service pages.",
      animations: "GSAP motion across hero and section storytelling.",
      keyFeatures: [
        "Bold MOVE UP hero messaging",
        "Traditional agency vs UpBrand contrast",
        "Four service pillars with deep offerings",
        "Blog / insights surface",
        "Live site at upbrandindia.in",
      ],
      outcomes: [
        "Premium agency brand positioning",
        "Clear service discovery",
        "Strong lead-oriented Get In Touch paths",
      ],
    },
  },
  {
    id: "upsportacademy",
    title: "UpSport Academy",
    slug: "upsport-academy",
    description:
      "Football academy platform for UPSPORT — player pathways, centre locations, programs, coaches, and academy enrolment across Kochi and Bengaluru.",
    shortDescription:
      "Developing the next generation of footballers — upsportacademy.com",
    category: ["Business", "Web Apps", "Next.js", "Laravel"],
    technologies: ["Next.js", "Laravel", "Tailwind CSS", "GSAP"],
    image: "/images/projects/upsportacademy.png",
    gallery: ["/images/projects/upsportacademy.png"],
    liveUrl: "https://upsportacademy.com/",
    featured: true,
    year: "2026",
    role: "Full Stack Developer",
    businessProblem:
      "Give UPSPORT Football Academy a bold digital presence that showcases programs, centres, coaches, and a clear path to join.",
    solution:
      "Built a Next.js + Laravel production site with Tailwind CSS and GSAP motion — dark sports-led storytelling, location batches, development pathway, and enquiry / join CTAs.",
    caseStudy: {
      problem:
        "The academy needed more than a brochure — a platform that communicates elite youth development, multi-city centres, and conversion into demos and registrations.",
      solution:
        "Delivered a production website on Next.js and Laravel with Tailwind UI and GSAP animations — program discovery, centre timings, coach profiles, parent social proof, and strong Join Our Academy funnels.",
      frontend:
        "Next.js + Tailwind CSS sports marketing UI with GSAP-powered hero and section motion.",
      backend: "Laravel for enquiries, content, and academy workflows.",
      animations: "GSAP scroll/reveal sequences across the academy journey.",
      keyFeatures: [
        "Cinematic football academy hero",
        "Multi-city centres & batch timings",
        "Programs and player development pathway",
        "Coach profiles and parent reviews",
        "Live site at upsportacademy.com",
      ],
      outcomes: [
        "Strong sports brand presence",
        "Clear enrolment and demo booking paths",
        "Structured showcase of academy offerings",
      ],
    },
  },
  {
    id: "smilecreations",
    title: "Smile Creations Events",
    slug: "smile-creations",
    description:
      "Dubai dance & music academy platform with public website plus Smile Creations ERP admin — students, fees, classes, batches, attendance, and operations.",
    shortDescription:
      "Academy site + ERP admin — smilecreations.ae",
    category: ["Business", "Web Apps", "Dashboards", "React", "Laravel"],
    technologies: ["Laravel", "React", "Tailwind CSS", "MySQL"],
    image: "/images/projects/smilecreations.png",
    gallery: [
      "/images/projects/smilecreations.png",
      "/images/projects/smilecreations-erp.png",
    ],
    liveUrl: "https://smilecreations.ae/",
    featured: true,
    year: "2026",
    role: "Full Stack Developer",
    businessProblem:
      "Give Smile Creations a vibrant UAE digital presence and an internal ERP to manage students, fees, classes, and day-to-day academy operations.",
    solution:
      "Built a Laravel + React stack with Tailwind CSS and MySQL — public marketing site for enquiries plus an Admin ERP dashboard for students, fees, enrollments, attendance, and reports.",
    caseStudy: {
      problem:
        "The academy needed both a premium Dubai-facing website and a backend ERP to run students, batches, fees, and operations — not just a brochure site.",
      solution:
        "Delivered a production marketing site plus Smile Creations ERP admin console on Laravel and React with Tailwind UI and MySQL — immersive public hero, class catalogues, and live operational dashboards.",
      frontend:
        "React + Tailwind CSS for the academy website and ERP admin console UI.",
      backend:
        "Laravel ERP modules for users, students, parents, classes, batches, enrollments, fees, attendance, leaves, and reports.",
      database: "MySQL for academy, fees, and operational data.",
      keyFeatures: [
        "Cinematic dance studio website",
        "Smile Creations ERP admin dashboard",
        "Students, fees, classes & batch management",
        "Attendance, leaves, and quick-access modules",
        "Live site at smilecreations.ae",
      ],
      outcomes: [
        "Public brand + internal operations in one system",
        "Clear class enquiry conversion on the website",
        "Centralized ERP for academy management",
      ],
    },
  },
  {
    id: "raameen",
    title: "Raameen Auto Accessories",
    slug: "raameen-auto-accessories",
    description:
      "UAE auto accessories & customization platform — ambient lighting, Android screens, audio upgrades, and appointment booking for Raameen Auto Accessories.",
    shortDescription:
      "Premium solutions for your vehicle — raameenautoaccessories.com",
    category: ["Business", "eCommerce", "Web Apps"],
    technologies: ["WordPress", "MySQL", "Custom Theme"],
    image: "/images/projects/raameen.png",
    gallery: ["/images/projects/raameen.png"],
    liveUrl: "https://raameenautoaccessories.com/",
    featured: true,
    year: "2026",
    role: "Full Stack Developer",
    businessProblem:
      "Give Raameen a credible Dubai/Abu Dhabi web presence that showcases auto upgrade services and converts visitors into appointment bookings.",
    solution:
      "Built a WordPress business site with service catalogue, product listings, appointment form, and clear contact paths across UAE locations.",
    caseStudy: {
      problem:
        "The workshop needed more than a basic brochure — a service-led site for Android screens, CarPlay, speakers, ambient lighting, and reverse cameras with easy booking.",
      solution:
        "Delivered a production WordPress website with hero appointment capture, service grid, process steps, products, and enquiry CTAs.",
      frontend: "WordPress custom theme for the automotive service marketing UI.",
      backend: "WordPress + MySQL for services, products, blogs, and forms.",
      keyFeatures: [
        "Premium vehicle solutions hero",
        "Schedule appointment lead form",
        "Service catalogue (screens, audio, lighting, cameras)",
        "Product listings and enquiry paths",
        "Live site at raameenautoaccessories.com",
      ],
      outcomes: [
        "Strong UAE automotive brand presence",
        "Clear appointment booking funnel",
        "Structured showcase of installation services",
      ],
    },
  },
  {
    id: "prestige",
    title: "Prestige Management Group",
    slug: "prestige-management-group",
    description:
      "Australia's outsourced housekeeping atelier — hotel, commercial and residential cleaning across Sydney, Melbourne & Queensland. Built with Next.js and Laravel.",
    shortDescription:
      "Premium cleaning platform — Next.js · Laravel · Australia.",
    category: ["Business", "Web Apps", "Next.js", "Laravel"],
    technologies: ["Next.js", "Laravel", "React", "Tailwind"],
    image: "/images/projects/prestige.png",
    gallery: ["/images/projects/prestige.png"],
    liveUrl: "https://prestigemanagementgroup.com.au/",
    featured: true,
    year: "2026",
    role: "Full Stack Developer",
    businessProblem:
      "Position Prestige as a premium multi-state cleaning and housekeeping partner with clear quote capture and service discovery.",
    solution:
      "Delivered a Next.js + Laravel production site with refined brand UI, multi-service storytelling, diligence sectors, and Request a Quote conversion paths.",
    caseStudy: {
      problem:
        "Prestige needed a high-trust Australian web presence for hotels, commercial facilities, and residences — not a generic cleaner template.",
      solution:
        "Built a polished Next.js frontend with Laravel backend support for quotes, content, and service flows — covering Sydney, Melbourne, and Queensland operations.",
      architecture:
        "Next.js presentation layer → Laravel APIs / forms → production hosting for the Australian market.",
      frontend:
        "Next.js + React marketing UI with hero storytelling, service grids, testimonials, and quote CTAs.",
      backend:
        "Laravel for lead capture, enquiry handling, and maintainable service content.",
      keyFeatures: [
        "Professional cleaning hero with quote CTAs",
        "Multi-service catalogue (house, commercial, strata, office)",
        "Diligence / sector storytelling",
        "Client testimonials and free assessment funnel",
        "Live site at prestigemanagementgroup.com.au",
      ],
      outcomes: [
        "Premium brand positioning across 3 Australian states",
        "Clear lead generation for quotes and consultations",
        "Production Next.js + Laravel stack",
      ],
    },
  },
  {
    id: "female-bazar",
    title: "Female Bazar Clothing",
    slug: "female-bazar-clothing",
    description:
      "Full multi-vendor eCommerce marketplace with Admin, Vendor, and Customer roles — fashion/lifestyle commerce powered by Next.js, Laravel APIs, and MySQL.",
    shortDescription:
      "Multi-vendor marketplace — Admin · Vendor · Customer.",
    category: ["eCommerce", "Web Apps", "SaaS", "Next.js", "Laravel"],
    technologies: [
      "Next.js",
      "Laravel",
      "Tailwind CSS",
      "MySQL",
      "GSAP",
      "REST API",
    ],
    image: "/images/projects/female-bazar.png",
    gallery: [
      "/images/projects/female-bazar.png",
      "/images/projects/female-bazar-dashboard.png",
    ],
    liveUrl: "https://femalebazarclothing.com/",
    featured: true,
    year: "2026",
    role: "Full Stack Developer",
    businessProblem:
      "Launch a scalable multi-seller marketplace where admins govern the platform, vendors manage stores/products, and customers shop with confidence.",
    solution:
      "Built an API-driven Next.js + Laravel multi-vendor eCommerce system with role-based access, catalogue/search, cart/checkout, and vendor onboarding flows.",
    caseStudy: {
      problem:
        "Female Bazar needed a complete multi-vendor commerce platform — not a single-store shop — with separate experiences for Admin, Vendor, and Customer.",
      solution:
        "Delivered a production marketplace on Next.js (storefront/UI) and Laravel (APIs/business logic) with MySQL data, Tailwind UI, GSAP motion, and REST API architecture across all roles.",
      architecture:
        "Next.js client → REST API layer → Laravel backend → MySQL — role-based modules for Admin, Vendor, and Customer.",
      frontend:
        "Next.js + Tailwind CSS marketplace UI with search, categories, flash sales, cart, wishlist, and GSAP-enhanced interactions.",
      backend:
        "Laravel APIs for auth, catalogue, orders, vendor stores, and admin operations.",
      api: "REST API contracts connecting storefront and role dashboards to Laravel services.",
      database: "MySQL for products, vendors, customers, orders, and platform configuration.",
      animations: "GSAP for hero and marketplace micro-interactions.",
      keyFeatures: [
        "Admin · Vendor · Customer role system",
        "Multi-seller catalogue and storefront",
        "Admin console dashboard (orders, vendors, catalog, revenue)",
        "Become a Seller / vendor onboarding",
        "Search, categories, flash sales, cart & wishlist",
        "Live site at femalebazarclothing.com",
      ],
      outcomes: [
        "Full multi-vendor eCommerce platform in production",
        "Clear separation of admin, seller, and buyer workflows",
        "Scalable Next.js + Laravel API architecture",
      ],
    },
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(
  category: "All" | ProjectCategory,
): Project[] {
  if (category === "All") return projects;
  return projects.filter((p) => p.category.includes(category));
}
