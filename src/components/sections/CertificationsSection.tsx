import { certifications } from "@/data/certifications";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { Badge } from "@/components/ui/Badge";

const categories = [
  "AWS",
  "AI",
  "Full Stack",
  "DevOps",
  "Cloud",
  "Programming",
] as const;

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Certification Vault"
          title="Credentials & Verification"
          description="Structured slots for AWS, AI, Full Stack, DevOps, Cloud and Programming credentials."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <Badge key={c}>{c}</Badge>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 0.04}>
              <article className="rounded-2xl border border-dashed border-white/15 bg-white/[0.015] p-5">
                <Badge className="mb-4">{cert.category}</Badge>
                <h3 className="text-lg font-semibold tracking-tight">
                  {cert.name}
                </h3>
                <p className="mt-2 text-sm text-muted">{cert.issuer}</p>
                <dl className="mt-5 space-y-2 text-xs text-dim">
                  <div className="flex justify-between gap-3">
                    <dt>Date</dt>
                    <dd>{cert.date || "Add date"}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt>Credential ID</dt>
                    <dd>{cert.credentialId || "Add ID"}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt>Verification</dt>
                    <dd>
                      {cert.verificationUrl ? (
                        <a
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline"
                        >
                          Verify
                        </a>
                      ) : (
                        "Add URL"
                      )}
                    </dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
