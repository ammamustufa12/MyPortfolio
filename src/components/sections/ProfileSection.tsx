"use client";

import {
  Briefcase,
  Building2,
  Cloud,
  Code2,
  Globe2,
  Layers3,
  Sparkles,
} from "lucide-react";
import { careerTimeline, profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

const icons = {
  code: Code2,
  briefcase: Briefcase,
  building: Building2,
  globe: Globe2,
  layers: Layers3,
  sparkles: Sparkles,
  cloud: Cloud,
};

export function ProfileSection() {
  return (
    <section id="about" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Developer Profile"
          title="The Developer Behind The Code"
          description={profile.summary[0]}
        />

        <Reveal delay={0.1}>
          <p className="lead mt-6 max-w-3xl">{profile.summary[1]}</p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {careerTimeline.map((item, i) => {
            const Icon =
              icons[item.icon as keyof typeof icons] || Code2;
            return (
              <Reveal key={item.id} delay={i * 0.05}>
                <article
                  className={cn(
                    "group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-500 hover:border-accent/30 hover:bg-white/[0.04]",
                  )}
                  data-cursor="link"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-accent-soft text-accent">
                      <Icon className="size-5" />
                    </div>
                    {item.period ? (
                      <span className="text-xs uppercase tracking-[0.14em] text-dim">
                        {item.period}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition group-hover:opacity-100" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
