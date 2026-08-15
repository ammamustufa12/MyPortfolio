"use client";

import { useMemo, useState } from "react";
import { skillCategories, skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";
import type { SkillCategory } from "@/types";

export function SkillsSection() {
  const [category, setCategory] = useState<SkillCategory | "All">("All");
  const [activeId, setActiveId] = useState(skills[0]?.id);

  const filtered = useMemo(
    () =>
      category === "All"
        ? skills
        : skills.filter((s) => s.category === category),
    [category],
  );

  const active = skills.find((s) => s.id === activeId) || filtered[0];
  const related = skills.filter((s) => active?.related?.includes(s.id));

  return (
    <section id="skills" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Technology Ecosystem"
          title="An Interactive Engineering Stack"
          description="Hover skill nodes to inspect experience level, project usage, and how technologies connect."
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {(["All", ...skillCategories] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition",
                category === cat
                  ? "border-accent/40 bg-accent-soft text-white"
                  : "border-white/10 text-muted hover:border-white/20 hover:text-white",
              )}
              data-cursor="link"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.08),transparent_55%)] p-6">
              <div className="absolute inset-8 rounded-full border border-dashed border-white/10" />
              <div className="absolute inset-20 rounded-full border border-white/5" />

              <div className="relative flex flex-wrap content-center justify-center gap-3 py-10">
                {filtered.map((skill, i) => (
                  <button
                    key={skill.id}
                    type="button"
                    onMouseEnter={() => setActiveId(skill.id)}
                    onFocus={() => setActiveId(skill.id)}
                    onClick={() => setActiveId(skill.id)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm transition duration-300",
                      activeId === skill.id
                        ? "border-accent bg-accent text-black shadow-[0_0_30px_rgba(45,212,191,0.35)]"
                        : "border-white/10 bg-black/40 text-muted hover:border-accent/40 hover:text-white",
                    )}
                    style={{
                      transform: `translateY(${(i % 5) * 2}px)`,
                    }}
                    data-cursor="link"
                  >
                    {skill.name}
                  </button>
                ))}
              </div>

              {related.length ? (
                <div className="relative mt-4 border-t border-white/10 pt-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-dim">
                    Connected nodes
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {related.map((r) => (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => setActiveId(r.id)}
                        className="text-sm text-accent hover:underline"
                      >
                        {r.name}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="glass sticky top-28 rounded-2xl p-6">
              {active ? (
                <>
                  <p className="text-xs uppercase tracking-[0.18em] text-accent">
                    {active.category}
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold tracking-tight">
                    {active.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {active.description}
                  </p>
                  <dl className="mt-8 grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-white/10 p-4">
                      <dt className="text-xs text-dim">Level</dt>
                      <dd className="mt-1 text-lg font-medium">{active.level}</dd>
                    </div>
                    <div className="rounded-xl border border-white/10 p-4">
                      <dt className="text-xs text-dim">Years</dt>
                      <dd className="mt-1 text-lg font-medium">
                        {active.years ? `${active.years}+` : "—"}
                      </dd>
                    </div>
                    <div className="col-span-2 rounded-xl border border-white/10 p-4">
                      <dt className="text-xs text-dim">Projects used in</dt>
                      <dd className="mt-1 text-lg font-medium">
                        {active.projectsUsedIn
                          ? `${active.projectsUsedIn}+`
                          : "—"}
                      </dd>
                    </div>
                  </dl>
                </>
              ) : null}
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
