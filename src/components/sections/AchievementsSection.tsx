import { achievements } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Achievements"
          title="Verified Delivery Stats"
          description="Only confirmed metrics — no inflated vanity numbers."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.05}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-8 text-center">
                <p className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  {typeof item.numericValue === "number" ? (
                    <AnimatedCounter
                      value={item.numericValue}
                      suffix={item.suffix || ""}
                    />
                  ) : (
                    item.value
                  )}
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.16em] text-dim">
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
