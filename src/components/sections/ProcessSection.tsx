"use client";

import { useRef, useState } from "react";
import { processSteps } from "@/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

export function ProcessSection() {
  const [active, setActive] = useState(processSteps[0].id);
  const scrollerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="process" className="section-pad overflow-hidden">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Development Process"
          title="From Discovery to Maintenance"
          description="A clear delivery process designed for founders and product teams."
        />
      </div>

      <Reveal>
        <div
          ref={scrollerRef}
          className="mt-10 flex gap-4 overflow-x-auto px-4 pb-4 md:px-[max(1rem,calc((100vw-1400px)/2+1rem))]"
        >
          {processSteps.map((step) => {
            const open = active === step.id;
            return (
              <button
                key={step.id}
                type="button"
                onMouseEnter={() => setActive(step.id)}
                onFocus={() => setActive(step.id)}
                onClick={() => setActive(step.id)}
                className={cn(
                  "min-h-[260px] shrink-0 rounded-2xl border p-6 text-left transition-all duration-500",
                  open
                    ? "w-[min(420px,85vw)] border-accent/40 bg-accent-soft"
                    : "w-[240px] border-white/10 bg-white/[0.02] hover:border-white/20",
                )}
                data-cursor="link"
              >
                <p className="font-mono text-sm text-accent">{step.number}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p
                  className={cn(
                    "mt-4 text-sm leading-relaxed text-muted transition",
                    open ? "opacity-100" : "line-clamp-3 opacity-70",
                  )}
                >
                  {step.description}
                </p>
              </button>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
