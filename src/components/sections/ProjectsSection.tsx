"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projectFilters, projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";
import type { Project, ProjectCategory } from "@/types";
import { AnimatePresence, motion } from "motion/react";

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  return (
    <article
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition hover:border-accent/30"
      data-cursor="project"
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="block w-full text-left"
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
            {project.category.slice(0, 2).map((c) => (
              <Badge key={c} className="bg-black/50 backdrop-blur">
                {c}
              </Badge>
            ))}
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-semibold tracking-tight">
              {project.title}
            </h3>
            <ArrowUpRight className="size-4 shrink-0 text-dim transition group-hover:text-accent" />
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {project.shortDescription}
          </p>
          {project.technologies.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          ) : null}
        </div>
      </button>
    </article>
  );
}

export function ProjectsSection({
  limit,
  showHeading = true,
}: {
  limit?: number;
  showHeading?: boolean;
}) {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [slide, setSlide] = useState(0);

  const filtered = useMemo(() => {
    const list =
      filter === "All"
        ? projects
        : projects.filter((p) => p.category.includes(filter));
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }, [filter, limit]);

  const openProject = (p: Project) => {
    setSelected(p);
    setSlide(0);
  };

  const selectedGallery =
    selected?.gallery?.length ? selected.gallery : selected ? [selected.image] : [];

  return (
    <section id="projects" className="section-pad">
      <div className="container-wide">
        {showHeading ? (
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Project Showcase"
              title="Work That Ships"
              description="Interactive gallery of production websites and digital products. Open any project for a cinematic case study."
            />
            <Link
              href="/projects"
              className="text-sm text-accent hover:underline"
              data-cursor="link"
            >
              View all projects →
            </Link>
          </div>
        ) : null}

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm transition",
                filter === f
                  ? "border-accent/40 bg-accent-soft text-white"
                  : "border-white/10 text-muted hover:text-white",
              )}
              data-cursor="link"
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.04}>
              <ProjectCard project={project} onOpen={openProject} />
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-end justify-center bg-black/75 p-4 backdrop-blur-sm md:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${selected.title} case study`}
              className="glass max-h-[90vh] w-full max-w-3xl overflow-auto rounded-2xl"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/9] border-b border-white/10">
                <Image
                  src={selectedGallery[slide] || selected.image}
                  alt={selected.title}
                  fill
                  className="object-cover object-top"
                  data-cursor="image"
                />
                {selectedGallery.length > 1 ? (
                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                    {selectedGallery.map((src, i) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setSlide(i)}
                        className={cn(
                          "h-1.5 rounded-full transition-all",
                          i === slide
                            ? "w-7 bg-accent"
                            : "w-2.5 bg-white/40",
                        )}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-accent">
                      Case Study
                    </p>
                    <h3 className="mt-2 text-3xl font-semibold tracking-tight">
                      {selected.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{selected.role}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    className="rounded-full border border-white/10 px-3 py-1 text-sm text-muted hover:text-white"
                  >
                    Close
                  </button>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted">
                  {selected.description}
                </p>

                {(selected.businessProblem || selected.caseStudy?.problem) && (
                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-white/10 p-4">
                      <h4 className="text-xs uppercase tracking-[0.16em] text-dim">
                        Problem
                      </h4>
                      <p className="mt-2 text-sm text-white/85">
                        {selected.caseStudy?.problem ||
                          selected.businessProblem}
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/10 p-4">
                      <h4 className="text-xs uppercase tracking-[0.16em] text-dim">
                        Solution
                      </h4>
                      <p className="mt-2 text-sm text-white/85">
                        {selected.caseStudy?.solution || selected.solution}
                      </p>
                    </div>
                  </div>
                )}

                {selected.caseStudy?.keyFeatures?.length ? (
                  <div className="mt-6">
                    <h4 className="text-xs uppercase tracking-[0.16em] text-dim">
                      Key Features
                    </h4>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {selected.caseStudy.keyFeatures.map((f) => (
                        <li key={f} className="text-sm text-muted">
                          • {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {selected.technologies.length ? (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {selected.technologies.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                ) : null}

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={`/projects/${selected.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-black"
                    data-cursor="link"
                  >
                    Full case study
                    <ArrowUpRight className="size-4" />
                  </Link>
                  {selected.liveUrl ? (
                    <a
                      href={selected.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white hover:bg-white/5"
                      data-cursor="link"
                    >
                      Live website
                      <ExternalLink className="size-4" />
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
