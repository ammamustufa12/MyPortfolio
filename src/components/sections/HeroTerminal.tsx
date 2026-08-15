"use client";

import { useEffect, useMemo, useState } from "react";
import { profile } from "@/data/profile";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

const lines = [
  { cmd: "whoami", out: profile.name },
  { cmd: "role", out: profile.shortTitle },
  { cmd: "experience", out: `${profile.experienceYears}+ Years` },
  {
    cmd: "stack",
    out: "Laravel • Next.js • React • Node.js • AI",
  },
  {
    cmd: "projects",
    out: "400+ Websites • 30+ Apps",
  },
];

const easterEggs: Record<string, string> = {
  "npm run build": "✓ compiled successfully in 1.28s",
  "php artisan optimize": "Configuration / routes / views cached.",
  "git push origin main": "Enumerating objects… done. main -> main",
  "docker compose up": "Creating network… Starting services… healthy",
  help: "Try: whoami, role, stack, clear, npm run build",
  clear: "__CLEAR__",
};

export function HeroTerminal() {
  const reduced = usePrefersReducedMotion();
  const [visibleLines, setVisibleLines] = useState(0);
  const [typed, setTyped] = useState("");
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [uptime, setUptime] = useState(0);

  const active = useMemo(
    () => lines[Math.min(visibleLines, lines.length - 1)],
    [visibleLines],
  );

  useEffect(() => {
    const id = window.setInterval(() => setUptime((u) => u + 1), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (reduced) {
      setVisibleLines(lines.length);
      return;
    }

    if (visibleLines >= lines.length) return;

    const full = active.cmd;
    if (typed.length < full.length) {
      const t = window.setTimeout(
        () => setTyped(full.slice(0, typed.length + 1)),
        45,
      );
      return () => clearTimeout(t);
    }

    const t = window.setTimeout(() => {
      setVisibleLines((v) => v + 1);
      setTyped("");
    }, 550);
    return () => clearTimeout(t);
  }, [typed, visibleLines, active.cmd, reduced]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = input.trim();
    if (!value) return;
    const response =
      easterEggs[value] ||
      lines.find((l) => l.cmd === value)?.out ||
      `command not found: ${value}`;

    if (response === "__CLEAR__") {
      setHistory([]);
    } else {
      setHistory((h) => [...h, `$ ${value}`, response]);
    }
    setInput("");
  };

  const formatUptime = (s: number) => {
    const hh = String(Math.floor(s / 3600)).padStart(2, "0");
    const mm = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const ss = String(s % 60).padStart(2, "0");
    return `${hh}:${mm}:${ss}`;
  };

  return (
    <div
      className="glass relative overflow-hidden rounded-2xl"
      data-cursor="project"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-dim">
            ammar@dev:~ /portfolio
          </span>
        </div>
        <span className="font-mono text-[10px] text-dim">
          uptime {formatUptime(uptime)}
        </span>
      </div>

      <div className="min-h-[320px] space-y-3 p-5 font-mono text-sm leading-relaxed">
        {lines.slice(0, visibleLines).map((line) => (
          <div key={line.cmd}>
            <p className="text-accent">
              <span className="text-dim">$</span> {line.cmd}
            </p>
            <p className="text-white/90">{line.out}</p>
          </div>
        ))}

        {visibleLines < lines.length ? (
          <p className="text-accent">
            <span className="text-dim">$</span> {typed}
            <span className="terminal-caret" />
          </p>
        ) : null}

        {history.map((line, i) => (
          <p
            key={`${line}-${i}`}
            className={line.startsWith("$") ? "text-accent" : "text-white/85"}
          >
            {line}
          </p>
        ))}

        {visibleLines >= lines.length ? (
          <form onSubmit={onSubmit} className="flex items-center gap-2">
            <span className="text-dim">$</span>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full bg-transparent text-accent outline-none"
              aria-label="Terminal command input"
              placeholder="type a command…"
              autoComplete="off"
              spellCheck={false}
            />
          </form>
        ) : null}
      </div>
    </div>
  );
}
