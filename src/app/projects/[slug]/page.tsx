import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectGallerySlider } from "@/components/ui/ProjectGallerySlider";
import { createPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return createPageMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const cs = project.caseStudy;
  const gallery = project.gallery?.length
    ? project.gallery
    : [project.image];
  const galleryLabels =
    project.slug === "female-bazar-clothing"
      ? ["Storefront", "Admin Dashboard"]
      : project.slug === "smile-creations"
        ? ["Website", "ERP Admin Dashboard"]
        : undefined;

  return (
    <article className="section-pad !pt-12">
      <div className="container-wide">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-white"
        >
          <ArrowLeft className="size-4" />
          All projects
        </Link>

        <div className="mt-8 max-w-4xl">
          <p className="eyebrow">Case Study</p>
          <h1 className="display mt-4">{project.title}</h1>
          <p className="lead mt-5">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.category.map((c) => (
              <Badge key={c}>{c}</Badge>
            ))}
          </div>
        </div>

        <ProjectGallerySlider
          images={gallery}
          title={project.title}
          liveUrl={project.liveUrl}
          labels={galleryLabels}
        />

        <div className="mt-8 flex flex-wrap gap-3">
          {project.liveUrl ? (
            <Button href={project.liveUrl} external>
              {project.slug === "kprverse"
                ? "Visit kprverse.com"
                : "Live website"}
              <ExternalLink className="size-4" />
            </Button>
          ) : null}
          {project.githubUrl ? (
            <Button href={project.githubUrl} external variant="secondary">
              GitHub
              <Code2 className="size-4" />
            </Button>
          ) : null}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Info label="Role" value={project.role} />
          <Info label="Year" value={project.year || "—"} />
          <Info
            label="Stack"
            value={
              project.technologies.length
                ? project.technologies.join(" • ")
                : "Details available on request"
            }
          />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Block
            title="Business Problem"
            body={cs?.problem || project.businessProblem || "—"}
          />
          <Block
            title="Solution"
            body={cs?.solution || project.solution || "—"}
          />
          {cs?.architecture ? (
            <Block title="Architecture" body={cs.architecture} />
          ) : null}
          {cs?.frontend ? <Block title="Frontend" body={cs.frontend} /> : null}
          {cs?.backend ? <Block title="Backend" body={cs.backend} /> : null}
          {cs?.api ? <Block title="API" body={cs.api} /> : null}
          {cs?.database ? <Block title="Database" body={cs.database} /> : null}
          {cs?.animations ? (
            <Block title="Animations" body={cs.animations} />
          ) : null}
          {cs?.performance ? (
            <Block title="Performance" body={cs.performance} />
          ) : null}
          {cs?.deployment ? (
            <Block title="Deployment" body={cs.deployment} />
          ) : null}
        </div>

        {cs?.keyFeatures?.length ? (
          <div className="mt-10 rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl font-semibold">Key Features</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {cs.keyFeatures.map((f) => (
                <li key={f} className="text-sm text-muted">
                  • {f}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 p-5">
      <p className="text-xs uppercase tracking-[0.16em] text-dim">{label}</p>
      <p className="mt-2 text-sm text-white/90">{value}</p>
    </div>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
      <h2 className="text-xs uppercase tracking-[0.16em] text-accent">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
    </section>
  );
}
