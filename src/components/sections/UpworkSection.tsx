import { ArrowUpRight } from "lucide-react";
import { upworkProfile } from "@/data/upwork";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function UpworkSection() {
  return (
    <section id="upwork" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Upwork Profile"
          title="Professional Freelance Dashboard"
          description="A clean profile surface for client evaluation — stats stay honest with placeholders until live numbers are added."
        />

        <Reveal>
          <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r">
                <p className="text-xs uppercase tracking-[0.18em] text-accent">
                  Upwork
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                  {upworkProfile.title}
                </h3>
                <p className="mt-2 text-muted">{upworkProfile.headline}</p>

                <div className="mt-8 space-y-3">
                  {upworkProfile.summary.map((p) => (
                    <p key={p} className="text-sm leading-relaxed text-dim">
                      {p}
                    </p>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {upworkProfile.services.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>

                <Button
                  href={upworkProfile.profileUrl}
                  external
                  className="mt-8"
                  size="lg"
                >
                  View My Upwork Profile
                  <ArrowUpRight className="size-4" />
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-3 p-6 md:p-8">
                {upworkProfile.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-black/30 p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.14em] text-dim">
                      {item.label}
                      {item.placeholder ? " · TBD" : ""}
                    </p>
                    <p className="mt-3 text-2xl font-semibold tracking-tight">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
