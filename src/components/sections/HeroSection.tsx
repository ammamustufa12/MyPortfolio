import { ArrowUpRight, Download } from "lucide-react";
import { profile, achievements } from "@/data/profile";
import { getValidSocials } from "@/data/socials";
import { Button } from "@/components/ui/Button";
import { TextSplit } from "@/components/animations/TextSplit";
import { Reveal } from "@/components/animations/Reveal";
import { HeroTerminal } from "@/components/sections/HeroTerminal";
import { Magnetic } from "@/components/ui/Magnetic";

const heroStats = achievements.filter((a) =>
  ["years", "websites", "apps", "projects"].includes(a.id),
);

export function HeroSection() {
  const socials = getValidSocials().filter((s) =>
    ["linkedin", "upwork", "github", "fiverr"].includes(s.platform),
  );

  return (
    <section className="relative overflow-hidden section-pad !pt-16 !pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container-wide relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-muted">
              <span className="avail-dot" aria-hidden />
              {profile.availability.label}
            </div>
          </Reveal>

          <p className="eyebrow mb-5">{profile.name}</p>

          <TextSplit text={profile.headline} className="display max-w-4xl" />

          <Reveal delay={0.15}>
            <p className="lead mt-6 max-w-2xl">{profile.subheadline}</p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Magnetic>
                <Button href="/projects" size="lg">
                  View My Work
                  <ArrowUpRight className="size-4" />
                </Button>
              </Magnetic>
              <Magnetic>
                <Button href="/contact" variant="secondary" size="lg">
                  Hire Me
                </Button>
              </Magnetic>
              <Magnetic>
                <Button href={profile.resumeUrl} variant="outline" size="lg">
                  <Download className="size-4" />
                  View Resume
                </Button>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-muted">
              {socials.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-accent"
                  data-cursor="link"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {heroStats.map((stat) => (
                <div
                  key={stat.id}
                  className="border-t border-white/10 pt-4"
                >
                  <dt className="text-xs uppercase tracking-[0.16em] text-dim">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-2xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="animate-float">
          <HeroTerminal />
        </Reveal>
      </div>
    </section>
  );
}
