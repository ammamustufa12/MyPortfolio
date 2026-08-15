import { education } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { Badge } from "@/components/ui/Badge";

export function EducationSection() {
  return (
    <section id="education" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Education"
          title="Engineering Foundation"
          description="Academic training connected directly to a career of shipping production systems."
        />

        <div className="relative mt-14">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent md:left-1/2" />

          <div className="space-y-8">
            {education.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.08}>
                <article
                  className={`relative grid gap-4 md:grid-cols-2 ${
                    i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  <div
                    className={`pl-12 md:pl-0 ${
                      i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-accent">
                      {item.startYear} — {item.endYear}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-muted">{item.institution}</p>
                    {item.description ? (
                      <p className="mt-4 text-sm leading-relaxed text-dim">
                        {item.description}
                      </p>
                    ) : null}
                  </div>

                  <div
                    className={`glass rounded-2xl p-6 pl-12 md:pl-6 ${
                      i % 2 === 0 ? "md:ml-12" : "md:mr-12"
                    }`}
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-dim">
                      Relevant Coursework
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.coursework?.map((c) => (
                        <Badge key={c}>{c}</Badge>
                      ))}
                    </div>
                  </div>

                  <span className="absolute left-[11px] top-3 size-2.5 rounded-full bg-accent shadow-[0_0_0_4px_rgba(45,212,191,0.15)] md:left-1/2 md:-translate-x-1/2" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
