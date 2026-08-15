"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

export function TextSplit({
  text,
  className,
  as: Tag = "h1",
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const reduced = usePrefersReducedMotion();
  const words = text.split(" ");

  return (
    <Tag ref={ref as never} className={cn(className)} aria-label={text}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden mr-[0.28em]">
          <motion.span
            className="inline-block"
            initial={reduced ? false : { y: "110%" }}
            animate={reduced || inView ? { y: 0 } : { y: "110%" }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * 0.045,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
