import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { Badge } from "@/components/ui/Badge";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Client Feedback"
          title="Testimonial Wall"
          description="Placeholders are ready for verified client quotes. No fabricated testimonials."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.05}>
              <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: t.rating || 5 }).map((_, idx) => (
                      <Star key={idx} className="size-3.5 fill-current" />
                    ))}
                  </div>
                  {t.placeholder ? (
                    <Badge className="border-white/10 text-dim">
                      Placeholder
                    </Badge>
                  ) : null}
                </div>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-muted">
                  “{t.content}”
                </p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-medium">{t.name}</p>
                  <p className="mt-1 text-xs text-dim">
                    {[t.position, t.company, t.country]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                  {t.project ? (
                    <p className="mt-2 text-xs text-accent">{t.project}</p>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
