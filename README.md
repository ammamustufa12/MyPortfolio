# Ammar Mustafa — Portfolio

Ultra-premium personal portfolio for **Ammar Mustafa**, Full Stack Developer.

Built with **Next.js 16**, TypeScript, Tailwind CSS, Motion, GSAP-ready architecture, MDX, and centralized content data.

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Update your content

All portfolio content lives in `src/data/`:

| File | Purpose |
| --- | --- |
| `profile.ts` | Name, headline, summary, achievements |
| `experience.ts` | Roles & responsibilities |
| `projects.ts` | Project gallery + case studies |
| `skills.ts` | Technology ecosystem |
| `services.ts` | Service offerings |
| `education.ts` | Degrees & coursework |
| `certifications.ts` | Credential vault |
| `testimonials.ts` | Client quotes (placeholders ready) |
| `socials.ts` | Social / hire links |
| `upwork.ts` / `linkedin.ts` | Profile sections |

Blog posts: `src/content/blog/*.mdx`

## Features

- Cinematic hero + interactive terminal (AmmarOS easter eggs)
- Command palette (`⌘K` / `Ctrl+K`)
- Custom desktop cursor (auto-disabled on touch)
- Project filters + case-study routes
- Upwork / LinkedIn / GitHub sections
- Interactive resume
- SEO: metadata, sitemap, robots, JSON-LD
- Accessibility: focus states, reduced motion, semantic HTML

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Notes

- Replace placeholder social URLs in `src/data/socials.ts`
- Drop your PDF at `public/resume/ammar-mustafa-resume.pdf`
- Set `NEXT_PUBLIC_GITHUB_USERNAME` for live GitHub stats
- Do not invent testimonials, employment history, or Upwork metrics
