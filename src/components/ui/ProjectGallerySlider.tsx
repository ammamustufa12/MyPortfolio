"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectGallerySlider({
  images,
  title,
  liveUrl,
  labels,
}: {
  images: string[];
  title: string;
  liveUrl?: string;
  labels?: string[];
}) {
  const slides = images.length ? images : [];
  const [index, setIndex] = useState(0);

  if (!slides.length) return null;

  const go = (dir: -1 | 1) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  };

  const current = slides[index];
  const label = labels?.[index];

  return (
    <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/10">
      <div className="relative aspect-[16/9] md:aspect-[16/8]">
        <Image
          key={current}
          src={current}
          alt={`${title}${label ? ` — ${label}` : ""}`}
          fill
          className="object-cover object-top"
          priority={index === 0}
          sizes="100vw"
          data-cursor="image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15" />

        {label ? (
          <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-white backdrop-blur">
            {label}
          </span>
        ) : null}

        {liveUrl && index === 0 ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-sm backdrop-blur transition hover:bg-black/70"
            data-cursor="link"
          >
            Visit live site
            <ExternalLink className="size-4" />
          </a>
        ) : null}

        {slides.length > 1 ? (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-4 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur transition hover:bg-black/70"
              aria-label="Previous image"
              data-cursor="link"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-4 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur transition hover:bg-black/70"
              aria-label="Next image"
              data-cursor="link"
            >
              <ChevronRight className="size-5" />
            </button>

            <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {slides.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === index
                      ? "w-8 bg-accent"
                      : "w-2.5 bg-white/35 hover:bg-white/60",
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>

      {slides.length > 1 ? (
        <div className="flex gap-2 overflow-x-auto border-t border-white/10 bg-black/30 p-3">
          {slides.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                "relative h-16 w-28 shrink-0 overflow-hidden rounded-lg border transition",
                i === index
                  ? "border-accent"
                  : "border-white/10 opacity-70 hover:opacity-100",
              )}
              aria-label={`Thumbnail ${i + 1}`}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover object-top"
                sizes="112px"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
