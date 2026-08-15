"use client";

import { aiWorkflow } from "@/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { motion } from "motion/react";

const expertise = [
  "AI API integrations",
  "AI-powered SaaS",
  "AI automation",
  "n8n workflows",
  "Business process automation",
  "AI assistants",
  "API orchestration",
  "Automated workflows",
];

export function AISection() {
  return (
    <section id="ai" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="AI & Automation"
          title="Building With AI"
          description="Practical AI systems that connect triggers, models, data, and actions into reliable product workflows."
        />

        <div className="mt-10 flex flex-wrap gap-3">
          {expertise.map((item, i) => (
            <Reveal key={item} delay={i * 0.03}>
              <span className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-muted">
                {item}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-dim">
              Animated workflow
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-4 md:flex-row md:items-center md:gap-0">
              {aiWorkflow.map((step, i) => (
                <div key={step.id} className="flex flex-1 items-center">
                  <motion.div
                    className="relative w-full rounded-xl border border-accent/30 bg-accent-soft px-4 py-5 text-center"
                    animate={{
                      boxShadow: [
                        "0 0 0 rgba(45,212,191,0)",
                        "0 0 28px rgba(45,212,191,0.25)",
                        "0 0 0 rgba(45,212,191,0)",
                      ],
                    }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      delay: i * 0.35,
                    }}
                  >
                    <span className="font-mono text-[10px] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-1 text-sm font-medium">{step.label}</p>
                  </motion.div>
                  {i < aiWorkflow.length - 1 ? (
                    <div className="mx-2 hidden h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent md:block" />
                  ) : null}
                </div>
              ))}
            </div>
            <p className="mt-6 font-mono text-xs text-dim">
              Trigger → AI → Processing → Database → Notification → Action
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
