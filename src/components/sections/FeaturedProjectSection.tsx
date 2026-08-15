import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { getProjectBySlug } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";
import { GsapParallax } from "@/components/animations/GsapScroll";

export function FeaturedProjectSection({
  slug = "kprverse",
}: {
  slug?: string;
}) {
  const project = getProjectBySlug(slug);
  if (!project?.caseStudy) return null;

  const layers = [
    { label: "Problem", value: project.caseStudy.problem },
    { label: "Solution", value: project.caseStudy.solution },
    { label: "Architecture", value: project.caseStudy.architecture },
    { label: "Frontend", value: project.caseStudy.frontend },
    { label: "Backend", value: project.caseStudy.backend },
    { label: "API", value: project.caseStudy.api },
    { label: "Database", value: project.caseStudy.database },
    { label: "Animations", value: project.caseStudy.animations },
    { label: "Performance", value: project.caseStudy.performance },
    { label: "Deployment", value: project.caseStudy.deployment },
  ].filter((l) => l.value);

  const stackLabel = project.technologies.join(" · ");

  return (
    <section className="section-pad">
      <div className="container-wide">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Featured Project"
            title={project.title}
            description={stackLabel}
          />
          {project.liveUrl ? (
            <Button href={project.liveUrl} external size="lg">
              Visit kprverse.com
              <ExternalLink className="size-4" />
            </Button>
          ) : null}
        </div>

        <Reveal>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-10 block overflow-hidden rounded-3xl border border-white/10"
            data-cursor="project"
            aria-label="Open KPRVERSE live website"
          >
            <div className="pointer-events-none absolute inset-3 z-20 rounded-2xl border border-white/15" />
            <div className="pointer-events-none absolute left-6 top-6 z-20 font-mono text-[10px] uppercase tracking-[0.22em] text-white/60">
              HTTPS://WWW.KPRVERSE.COM
            </div>
            <div className="pointer-events-none absolute bottom-6 right-6 z-20 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">
              Live Site
              <ExternalLink className="size-3.5" />
            </div>

            <div className="relative aspect-[16/9] md:aspect-[16/8]">
              <GsapParallax speed={0.28} className="absolute inset-0">
                <Image
                  src={project.image}
                  alt={`${project.title} - KEEP PROTECT REIMAGINE`}
                  fill
                  className="object-cover object-center scale-105 transition duration-700 group-hover:scale-110"
                  priority
                  sizes="100vw"
                />
              </GsapParallax>

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />
              <div className="absolute inset-0 bg-emerald-400/10" />

              <div className="absolute bottom-0 left-0 z-10 max-w-2xl p-6 md:p-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-emerald-400">
                  01K · 02P · 03R
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  KEEP. PROTECT.
                  <br />
                  REIMAGINE.
                </h3>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/75">
                  {project.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm text-accent transition group-hover:underline">
                  Open live experience <ArrowUpRight className="size-4" />
                </span>
              </div>
            </div>
          </a>
        </Reveal>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {project.technologies.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
          <Link
            href={`/projects/${project.slug}`}
            className="ml-auto text-sm text-muted transition hover:text-accent"
            data-cursor="link"
          >
            Full case study →
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {layers.map((layer, i) => (
            <Reveal key={layer.label} delay={i * 0.04}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <h3 className="text-xs uppercase tracking-[0.18em] text-accent">
                  {layer.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {layer.value}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
