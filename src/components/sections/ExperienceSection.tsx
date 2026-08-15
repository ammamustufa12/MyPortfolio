"use client";

import { useState } from "react";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

export function ExperienceSection({ compact = false }: { compact?: boolean }) {
  const items = compact ? experience.filter((e) => e.current || !e.company.includes("Add Later")) : experience;
  const [active, setActive] = useState(items[0]?.id);

  const current = items.find((e) => e.id === active) || items[0];

  return (
    <section id="experience" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Experience"
          title="Production Engineering Timeline"
          description="Roles, responsibilities and systems ownership — editable from centralized data."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[280px_1fr]">
          <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
            {items.map((role) => (
              <button
                key={role.id}
                type="button"
                onClick={() => setActive(role.id)}
                className={cn(
                  "min-w-[220px] rounded-xl border px-4 py-3 text-left transition lg:min-w-0",
                  active === role.id
                    ? "border-accent/40 bg-accent-soft"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20",
                )}
                data-cursor="link"
              >
                <p className="text-sm font-medium text-white">{role.title}</p>
                <p className="mt-1 text-xs text-muted">{role.company}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-dim">
                  {role.startDate} — {role.endDate}
                </p>
              </button>
            ))}
          </div>

          {current ? (
            <Reveal key={current.id}>
              <article className="glass rounded-2xl p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {current.title}
                    </h3>
                    <p className="mt-1 text-muted">{current.company}</p>
                    <p className="mt-2 text-sm text-dim">
                      {current.location}
                      {current.employmentType
                        ? ` · ${current.employmentType}`
                        : ""}
                    </p>
                  </div>
                  {current.current ? (
                    <Badge className="border-accent/30 text-accent">Current</Badge>
                  ) : null}
                </div>

                <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
                  {current.summary}
                </p>

                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.18em] text-dim">
                      Responsibilities
                    </h4>
                    <ul className="mt-4 space-y-2">
                      {current.responsibilities.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm text-white/85"
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-[0.18em] text-dim">
                      Technologies
                    </h4>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {current.technologies.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>

                    {current.highlights?.length ? (
                      <>
                        <h4 className="mt-8 text-xs uppercase tracking-[0.18em] text-dim">
                          Highlights
                        </h4>
                        <ul className="mt-4 space-y-2">
                          {current.highlights.map((h) => (
                            <li key={h} className="text-sm text-muted">
                              {h}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
