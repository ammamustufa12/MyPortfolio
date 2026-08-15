import { ArrowUpRight } from "lucide-react";
import { linkedInProfile } from "@/data/linkedin";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { getFeaturedProjects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function LinkedInSection() {
  const featured = getFeaturedProjects().slice(0, 3);
  const roles = experience.filter((e) => !e.company.includes("Add Later"));

  return (
    <section id="linkedin" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Professional Network"
          title="LinkedIn Presence"
          description="A structured overview of headline, about, experience, skills, education and featured work."
        />

        <Reveal>
          <div className="mt-12 rounded-3xl border border-white/10 p-6 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-3xl font-semibold tracking-tight">
                  {profile.name}
                </h3>
                <p className="mt-2 max-w-2xl text-muted">
                  {linkedInProfile.headline}
                </p>
                <p className="mt-3 text-sm text-dim">{profile.location}</p>
              </div>
              <Button href={linkedInProfile.profileUrl} external>
                Connect on LinkedIn
                <ArrowUpRight className="size-4" />
              </Button>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <div>
                <h4 className="text-xs uppercase tracking-[0.18em] text-dim">
                  About
                </h4>
                <div className="mt-4 space-y-3">
                  {linkedInProfile.about.map((p) => (
                    <p key={p} className="text-sm leading-relaxed text-muted">
                      {p}
                    </p>
                  ))}
                </div>

                <h4 className="mt-8 text-xs uppercase tracking-[0.18em] text-dim">
                  Experience
                </h4>
                <ul className="mt-4 space-y-3">
                  {roles.map((role) => (
                    <li key={role.id} className="text-sm">
                      <p className="font-medium">{role.title}</p>
                      <p className="text-muted">
                        {role.company} · {role.startDate} — {role.endDate}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-[0.18em] text-dim">
                  Skills
                </h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {linkedInProfile.featuredSkills.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>

                <h4 className="mt-8 text-xs uppercase tracking-[0.18em] text-dim">
                  Education
                </h4>
                <ul className="mt-4 space-y-3">
                  {education.map((ed) => (
                    <li key={ed.id} className="text-sm">
                      <p className="font-medium">{ed.degree}</p>
                      <p className="text-muted">
                        {ed.institution} · {ed.startYear} — {ed.endYear}
                      </p>
                    </li>
                  ))}
                </ul>

                <h4 className="mt-8 text-xs uppercase tracking-[0.18em] text-dim">
                  Featured Projects
                </h4>
                <ul className="mt-4 space-y-2">
                  {featured.map((p) => (
                    <li key={p.id}>
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-accent hover:underline"
                      >
                        {p.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
