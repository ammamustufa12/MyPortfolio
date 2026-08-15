import { Download, Eye } from "lucide-react";
import {
  profile,
  achievements,
  resumeSkillGroups,
} from "@/data/profile";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { getSocial } from "@/data/socials";
import { getFeaturedProjects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/animations/Reveal";

export function ResumeSection() {
  const roles = experience;
  const projects = getFeaturedProjects().slice(0, 6);
  const linkedin = getSocial("linkedin");
  const github = getSocial("github");

  return (
    <section id="resume" className="section-pad">
      <div className="container-wide">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Resume / CV"
            title="Interactive Resume"
            description="A living CV that mirrors the professional résumé — experience, skills, education, and key projects."
          />
          <div className="flex flex-wrap gap-3">
            <Button href="#interactive-resume">
              <Eye className="size-4" />
              View Interactive Resume
            </Button>
            <Button
              href="/resume/ammar-mustafa-resume.pdf"
              external
              variant="secondary"
            >
              <Download className="size-4" />
              Download Resume PDF
            </Button>
          </div>
        </div>

        <Reveal>
          <article
            id="interactive-resume"
            className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-black/40"
          >
            <div className="border-b border-white/10 bg-gradient-to-r from-accent/10 to-transparent px-6 py-8 md:px-10">
              <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
                {profile.name}
              </h3>
              <p className="mt-2 text-muted">{profile.title}</p>
              <p className="mt-3 text-sm text-dim">
                {profile.location}
                {" · "}
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-accent"
                >
                  {profile.email}
                </a>
                {profile.phone ? (
                  <>
                    {" · "}
                    <a
                      href={`tel:${profile.phone.replace(/\s/g, "")}`}
                      className="hover:text-accent"
                    >
                      {profile.phone}
                    </a>
                  </>
                ) : null}
              </p>
              <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted">
                {linkedin ? (
                  <a
                    href={linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
                  >
                    LinkedIn
                  </a>
                ) : null}
                {github ? (
                  <a
                    href={github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
                  >
                    GitHub
                  </a>
                ) : null}
              </div>
            </div>

            <div className="grid gap-10 p-6 md:p-10 lg:grid-cols-[1fr_300px]">
              <div className="space-y-10">
                <section>
                  <h4 className="text-xs uppercase tracking-[0.18em] text-accent">
                    Professional Summary
                  </h4>
                  <div className="mt-4 space-y-3">
                    {profile.summary.map((p) => (
                      <p key={p} className="text-sm leading-relaxed text-muted">
                        {p}
                      </p>
                    ))}
                  </div>
                </section>

                <section>
                  <h4 className="text-xs uppercase tracking-[0.18em] text-accent">
                    Professional Experience
                  </h4>
                  <div className="mt-4 space-y-8">
                    {roles.map((role) => (
                      <div key={role.id}>
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <p className="font-medium text-white">
                            {role.title} | {role.company}
                            {role.location?.includes("Dubai")
                              ? `, Dubai`
                              : role.location?.includes("Hyderabad")
                                ? `, Hyderabad, Pakistan`
                                : ""}
                          </p>
                          <p className="text-xs text-dim">
                            {role.startDate} – {role.endDate}
                          </p>
                        </div>
                        {role.employmentType ? (
                          <p className="mt-1 text-xs text-dim">
                            {role.employmentType}
                          </p>
                        ) : null}
                        <ul className="mt-3 space-y-1.5">
                          {role.responsibilities.map((r) => (
                            <li
                              key={r}
                              className="text-sm leading-relaxed text-muted"
                            >
                              • {r}
                            </li>
                          ))}
                        </ul>
                        {role.technologies.length ? (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {role.technologies.map((t) => (
                              <Badge key={t}>{t}</Badge>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h4 className="text-xs uppercase tracking-[0.18em] text-accent">
                    Key Projects
                  </h4>
                  <ul className="mt-4 space-y-4">
                    {projects.map((p) => (
                      <li key={p.id} className="text-sm">
                        <p className="font-medium text-white">{p.title}</p>
                        {p.technologies.length ? (
                          <p className="mt-1 text-xs text-dim">
                            {p.technologies.join(", ")}
                          </p>
                        ) : null}
                        <p className="mt-1 text-muted">
                          {p.shortDescription || p.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <aside className="space-y-8">
                <section>
                  <h4 className="text-xs uppercase tracking-[0.18em] text-accent">
                    Education
                  </h4>
                  <ul className="mt-4 space-y-4">
                    {education.map((ed) => (
                      <li key={ed.id}>
                        <p className="text-sm font-medium">{ed.degree}</p>
                        <p className="text-xs text-muted">{ed.institution}</p>
                        <p className="mt-1 text-xs text-dim">
                          {ed.startYear} – {ed.endYear}
                        </p>
                        {ed.description ? (
                          <p className="mt-2 text-xs leading-relaxed text-dim">
                            {ed.description}
                          </p>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h4 className="text-xs uppercase tracking-[0.18em] text-accent">
                    Technical Skills
                  </h4>
                  <div className="mt-4 space-y-4">
                    {resumeSkillGroups.map((group) => (
                      <div key={group.title}>
                        <p className="text-xs font-medium text-white/80">
                          {group.title}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {group.items.map((item) => (
                            <Badge key={item}>{item}</Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {profile.languages?.length ? (
                  <section>
                    <h4 className="text-xs uppercase tracking-[0.18em] text-accent">
                      Languages
                    </h4>
                    <ul className="mt-4 space-y-2">
                      {profile.languages.map((lang) => (
                        <li key={lang.name} className="text-sm text-muted">
                          <span className="text-white">{lang.name}</span>{" "}
                          ({lang.level})
                        </li>
                      ))}
                    </ul>
                  </section>
                ) : null}

                <section>
                  <h4 className="text-xs uppercase tracking-[0.18em] text-accent">
                    Highlights
                  </h4>
                  <ul className="mt-4 space-y-2">
                    {achievements.map((a) => (
                      <li key={a.id} className="text-sm text-muted">
                        <span className="text-white">{a.value}</span> {a.label}
                      </li>
                    ))}
                  </ul>
                </section>
              </aside>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
