import Link from "next/link";
import { profile } from "@/data/profile";
import { getValidSocials } from "@/data/socials";

const links = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/resume", label: "Resume" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const socials = getValidSocials();

  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="container-wide section-pad !py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-2xl font-semibold tracking-tight">
              {profile.name}
            </p>
            <p className="mt-2 text-muted">{profile.shortTitle}</p>
            <p className="mt-4 max-w-md text-sm text-dim">
              Laravel • Next.js • React • Node.js • AI
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs text-muted">
              <span className="avail-dot" aria-hidden />
              {profile.availability.label}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-dim">
              Navigation
            </p>
            <ul className="mt-4 space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition hover:text-white"
                    data-cursor="link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-dim">Social</p>
            <ul className="mt-4 space-y-2">
              {socials.map((s) => (
                <li key={s.platform}>
                  <a
                    href={s.url}
                    className="text-sm text-muted transition hover:text-white"
                    target={s.external ? "_blank" : undefined}
                    rel={s.external ? "noopener noreferrer" : undefined}
                    data-cursor="link"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-dim md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p className="font-mono text-xs">
            system.status = production_ready · press ⌘K
          </p>
        </div>
      </div>
    </footer>
  );
}
