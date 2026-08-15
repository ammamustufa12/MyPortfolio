"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { getSocial, getValidSocials } from "@/data/socials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";

const projectTypes = [
  "SaaS Platform",
  "eCommerce",
  "Business Website",
  "Dashboard",
  "API / Integration",
  "AI Automation",
  "Other",
];

const budgets = [
  "Under $2k",
  "$2k – $5k",
  "$5k – $15k",
  "$15k+",
  "Not sure yet",
];

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");
  const socials = getValidSocials().filter((s) =>
    ["email", "linkedin", "upwork", "github"].includes(s.platform),
  );
  const calendar = getSocial("calendar");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          projectType: data.get("projectType"),
          budget: data.get("budget"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });

      const json = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !json.ok) {
        setStatus("error");
        setErrorMessage(json.error || "Could not send. Please try again.");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or email directly.");
    }
  }

  return (
    <section id="contact" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Contact"
          title="Have a Product in Mind? Let's Build It."
          description="Tell me about the product, timeline, and constraints — I'll respond with a clear next step."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <Reveal>
            <form
              className="glass rounded-2xl p-6 md:p-8"
              onSubmit={onSubmit}
            >
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
                aria-hidden
              />

              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Name" id="name" required />
                <Field label="Email" id="email" type="email" required />
                <Field label="Company" id="company" />
                <div>
                  <label htmlFor="projectType" className="text-sm text-muted">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-accent/50"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select type
                    </option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="budget" className="text-sm text-muted">
                    Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-accent/50"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select range
                    </option>
                    {budgets.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="text-sm text-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-accent/50"
                    placeholder="Share goals, timeline, and links…"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button type="submit" size="lg" disabled={status === "loading"}>
                  {status === "loading"
                    ? "Sending…"
                    : "Start a Conversation"}
                </Button>
                {status === "sent" ? (
                  <p className="text-sm text-accent" role="status">
                    Message sent — I&apos;ll get back to you soon.
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="text-sm text-red-400" role="alert">
                    {errorMessage}{" "}
                    <a
                      href={`mailto:${profile.email}`}
                      className="underline hover:text-white"
                    >
                      Email me directly
                    </a>
                  </p>
                ) : null}
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="rounded-2xl border border-white/10 p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-dim">
                Direct channels
              </p>
              <ul className="mt-6 space-y-4">
                {socials.map((s) => (
                  <li key={s.platform}>
                    <a
                      href={s.url}
                      target={s.external ? "_blank" : undefined}
                      rel={s.external ? "noopener noreferrer" : undefined}
                      className="text-lg text-white transition hover:text-accent"
                      data-cursor="link"
                    >
                      {s.platform === "email" ? profile.email : s.label}
                    </a>
                  </li>
                ))}
                <li>
                  <p className="text-sm text-dim">Location</p>
                  <p className="mt-1 text-lg">{profile.location}</p>
                </li>
              </ul>

              {calendar ? (
                <Button
                  href={calendar.url}
                  external
                  variant="outline"
                  className="mt-8"
                >
                  Book a Call
                </Button>
              ) : (
                <p className="mt-8 text-sm text-dim">
                  Optional calendar booking link can be added in{" "}
                  <code className="text-accent">data/socials.ts</code>.
                </p>
              )}

              <div className="mt-10 rounded-xl border border-white/10 p-4 font-mono text-xs text-dim">
                <p>status: {profile.availability.label}</p>
                <p className="mt-2">channel: founders · CTOs · agencies</p>
                <p className="mt-2">sla: selected projects only</p>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  required,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm text-muted">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-accent/50"
      />
    </div>
  );
}
