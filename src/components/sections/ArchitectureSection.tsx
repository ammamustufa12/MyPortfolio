"use client";

import { useState } from "react";
import { architectureLayers } from "@/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

export function ArchitectureSection() {
  const [active, setActive] = useState(architectureLayers[0].id);
  const current =
    architectureLayers.find((l) => l.id === active) || architectureLayers[0];

  return (
    <section id="architecture" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="How I Build"
          title="Systems Architecture"
          description="An interactive map of how frontend, APIs, backend, data, services, and cloud infrastructure fit together."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_360px]">
          <Reveal>
            <div className="space-y-3">
              {architectureLayers.map((layer, i) => (
                <button
                  key={layer.id}
                  type="button"
                  onMouseEnter={() => setActive(layer.id)}
                  onFocus={() => setActive(layer.id)}
                  onClick={() => setActive(layer.id)}
                  className={cn(
                    "flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition",
                    active === layer.id
                      ? "border-accent/40 bg-accent-soft"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20",
                  )}
                  data-cursor="link"
                >
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <p className="font-medium">{layer.title}</p>
                    <p className="mt-1 text-sm text-muted">
                      {layer.description}
                    </p>
                  </div>
                  {i < architectureLayers.length - 1 ? (
                    <span className="hidden text-dim md:inline">↓</span>
                  ) : null}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="glass sticky top-28 rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-accent">
                Layer detail
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                {current.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {current.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {current.technologies.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              <div className="mt-8 rounded-xl border border-white/10 p-4 font-mono text-xs text-dim">
                Next.js → Laravel/Node → MySQL/PostgreSQL → Redis → AWS →
                Docker → Nginx → GitHub Actions
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
