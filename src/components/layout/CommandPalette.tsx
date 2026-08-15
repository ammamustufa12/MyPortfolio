"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import {
  BookOpen,
  Briefcase,
  Code2,
  FileText,
  FolderKanban,
  Home,
  Mail,
  Share2,
  Sparkles,
  User,
  Wrench,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getSocial } from "@/data/socials";

const commands = [
  { id: "home", label: "Go Home", href: "/", icon: Home, group: "Navigate" },
  { id: "about", label: "About", href: "/about", icon: User, group: "Navigate" },
  {
    id: "experience",
    label: "Experience",
    href: "/experience",
    icon: Briefcase,
    group: "Navigate",
  },
  {
    id: "projects",
    label: "Projects",
    href: "/projects",
    icon: FolderKanban,
    group: "Navigate",
  },
  {
    id: "skills",
    label: "Skills",
    href: "/#skills",
    icon: Code2,
    group: "Navigate",
  },
  {
    id: "services",
    label: "Services",
    href: "/services",
    icon: Wrench,
    group: "Navigate",
  },
  {
    id: "resume",
    label: "Resume",
    href: "/resume",
    icon: FileText,
    group: "Navigate",
  },
  {
    id: "blog",
    label: "Engineering Journal",
    href: "/blog",
    icon: BookOpen,
    group: "Navigate",
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
    icon: Mail,
    group: "Navigate",
  },
  {
    id: "upwork",
    label: "Upwork",
    href: getSocial("upwork")?.url || "/#upwork",
    icon: Sparkles,
    group: "Profiles",
    external: Boolean(getSocial("upwork")?.url),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: getSocial("linkedin")?.url || "/#linkedin",
    icon: Share2,
    group: "Profiles",
    external: Boolean(getSocial("linkedin")?.url),
  },
  {
    id: "github",
    label: "GitHub",
    href: getSocial("github")?.url || "/#github",
    icon: Code2,
    group: "Profiles",
    external: Boolean(getSocial("github")?.url),
  },
];

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => c.label.toLowerCase().includes(q));
  }, [query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setActive(0);
  }, [query, open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const run = (cmd: (typeof commands)[number]) => {
    setOpen(false);
    setQuery("");
    if (cmd.external) {
      window.open(cmd.href, "_blank", "noopener,noreferrer");
      return;
    }
    router.push(cmd.href);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 hidden items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-2 text-xs text-muted backdrop-blur md:inline-flex"
        aria-label="Open AmmarOS command palette"
        data-cursor="link"
      >
        <span className="text-accent">AmmarOS</span>
        <kbd className="rounded border border-white/10 px-1.5 py-0.5 font-mono text-[10px]">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 px-4 pt-[12vh] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="AmmarOS command palette"
              className="glass w-full max-w-xl overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="border-b border-white/10 px-4 py-3">
                <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-dim">
                  <span>AmmarOS</span>
                  <span>Command Center</span>
                </div>
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown") {
                      e.preventDefault();
                      setActive((i) => Math.min(i + 1, filtered.length - 1));
                    }
                    if (e.key === "ArrowUp") {
                      e.preventDefault();
                      setActive((i) => Math.max(i - 1, 0));
                    }
                    if (e.key === "Enter" && filtered[active]) {
                      run(filtered[active]);
                    }
                  }}
                  placeholder="Type a command…"
                  className="w-full bg-transparent text-base text-white outline-none placeholder:text-dim"
                  aria-label="Search commands"
                />
              </div>
              <ul className="max-h-80 overflow-auto p-2" role="listbox">
                {filtered.map((cmd, i) => {
                  const Icon = cmd.icon;
                  return (
                    <li key={cmd.id}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={i === active}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition",
                          i === active
                            ? "bg-accent-soft text-white"
                            : "text-muted hover:bg-white/5 hover:text-white",
                        )}
                        onMouseEnter={() => setActive(i)}
                        onClick={() => run(cmd)}
                      >
                        <Icon className="size-4 text-accent" />
                        <span>{cmd.label}</span>
                        <span className="ml-auto text-[10px] uppercase tracking-wider text-dim">
                          {cmd.group}
                        </span>
                      </button>
                    </li>
                  );
                })}
                {filtered.length === 0 ? (
                  <li className="px-3 py-6 text-center text-sm text-dim">
                    No commands found
                  </li>
                ) : null}
              </ul>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
