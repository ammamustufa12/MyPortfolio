import {
  Boxes,
  Cloud,
  LayoutDashboard,
  Layers3,
  Network,
  ShoppingBag,
  Sparkles,
  Workflow,
} from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";

const icons = {
  layers: Layers3,
  boxes: Boxes,
  "shopping-bag": ShoppingBag,
  network: Network,
  sparkles: Sparkles,
  workflow: Workflow,
  "layout-dashboard": LayoutDashboard,
  cloud: Cloud,
};

export function ServicesSection() {
  return (
    <section id="services" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Services"
          title="What I Can Build For You"
          description="Clear engagements for founders, CTOs, and agencies who need production software — not demos."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, i) => {
            const Icon =
              icons[service.icon as keyof typeof icons] || Layers3;
            return (
              <Reveal key={service.id} delay={i * 0.04}>
                <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-accent/30 hover:bg-white/[0.04]">
                  <div className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-accent-soft text-accent">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.technologies.slice(0, 3).map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                  <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
                    {service.deliverables.map((d) => (
                      <li key={d} className="text-xs text-dim">
                        • {d}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="/contact"
                    variant="ghost"
                    className="mt-5 justify-start px-0 text-accent hover:bg-transparent"
                  >
                    {service.cta} →
                  </Button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
