"use client";

import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { ScrollProgress } from "@/components/animations/ScrollProgress";

const CustomCursor = dynamic(
  () =>
    import("@/components/animations/CustomCursor").then((m) => m.CustomCursor),
  { ssr: false },
);

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Header />
      <main className="relative z-10 flex-1 pt-[72px]">{children}</main>
      <Footer />
      <CommandPalette />
    </>
  );
}
