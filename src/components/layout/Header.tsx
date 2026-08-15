"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const nav = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/resume", label: "Resume" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/8 bg-black/55 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="container-wide flex h-[72px] items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex flex-col leading-none"
          data-cursor="link"
        >
          <span className="text-sm font-semibold tracking-tight text-white transition group-hover:text-accent">
            {profile.name}
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.22em] text-dim">
            {profile.shortTitle}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                data-cursor="link"
                className={cn(
                  "rounded-full px-3 py-2 text-sm transition",
                  active
                    ? "bg-white/5 text-white"
                    : "text-muted hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs text-muted">
            <span className="avail-dot" aria-hidden />
            {profile.availability.label}
          </div>
          <Button href="/contact" size="sm">
            Hire Me
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex rounded-full border border-white/10 p-2 text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-white/10 bg-black/90 backdrop-blur-xl lg:hidden"
          >
            <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-3 text-sm text-muted hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <Button href="/contact" className="mt-2">
                Hire Me
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
