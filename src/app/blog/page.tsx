import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, blogCategories } from "@/lib/blog";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Engineering Journal",
  description:
    "Articles on Laravel, Next.js, React, AI, DevOps, freelancing and web development by Ammar Mustafa.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="section-pad !pt-16">
      <div className="container-wide">
        <p className="eyebrow">Engineering Journal</p>
        <h1 className="display mt-4 max-w-4xl">Notes From Production</h1>
        <p className="lead mt-5">
          MDX posts with reading time, tags, and related articles — ready for
          ongoing publishing.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {blogCategories.map((c) => (
            <Badge key={c}>{c}</Badge>
          ))}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-accent/30"
              data-cursor="link"
            >
              <p className="text-xs text-dim">
                {formatDate(post.date)} · {post.readingTime}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                {post.title}
              </h2>
              <p className="mt-3 text-sm text-muted">{post.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
