"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { useIsTouchDevice, usePrefersReducedMotion } from "@/hooks/useMediaQuery";

type CursorMode = "normal" | "link" | "project" | "image" | "drag" | "click";

export function CustomCursor() {
  const isTouch = useIsTouchDevice();
  const reduced = usePrefersReducedMotion();
  const [mode, setMode] = useState<CursorMode>("normal");
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 35, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 400, damping: 35, mass: 0.4 });

  useEffect(() => {
    if (isTouch || reduced) return;

    document.documentElement.classList.add("custom-cursor-active");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.(
        "[data-cursor]",
      ) as HTMLElement | null;
      const next = (target?.dataset.cursor as CursorMode) || "normal";
      setMode(next);
    };

    const onDown = () => setMode((m) => (m === "normal" ? "click" : m));
    const onUp = () => setMode("normal");
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [isTouch, reduced, x, y]);

  if (isTouch || reduced) return null;

  const size =
    mode === "project" || mode === "image"
      ? 64
      : mode === "link"
        ? 44
        : mode === "drag"
          ? 52
          : mode === "click"
            ? 18
            : 16;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
        opacity: visible ? 1 : 0,
      }}
    >
      <motion.div
        className="rounded-full border border-white bg-white/10"
        animate={{
          width: size,
          height: size,
          backgroundColor:
            mode === "link" || mode === "project"
              ? "rgba(255,255,255,0.15)"
              : "rgba(255,255,255,0.08)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      />
    </motion.div>
  );
}
