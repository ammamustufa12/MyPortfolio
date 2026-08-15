import Link from "next/link";
import { getAllPosts, blogCategories } from "@/lib/blog";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/animations/Reveal";
import { formatDate } from "@/lib/utils";

export function BlogPreviewSection() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section id="journal" className="section-pad">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Engineering Journal"
            title="Notes From Production"
            description="MDX-powered writing on Laravel, Next.js, React, AI, DevOps and freelancing."
          />
          <Link
            href="/blog"
            className="text-sm text-accent hover:underline"
            data-cursor="link"
          >
            Browse journal →
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {blogCategories.map((c) => (
            <Badge key={c}>{c}</Badge>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {posts.length ? (
            posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.05}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-accent/30"
                  data-cursor="link"
                >
                  <p className="text-xs text-dim">
                    {formatDate(post.date)} · {post.readingTime}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted">{post.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-white/15 p-6 text-sm text-muted md:col-span-3">
              Add MDX posts under <code className="text-accent">src/content/blog</code>{" "}
              to populate the Engineering Journal.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
