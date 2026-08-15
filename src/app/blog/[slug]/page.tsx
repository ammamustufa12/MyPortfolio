import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { createPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return createPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || !post.published) notFound();
  const related = getRelatedPosts(slug);

  return (
    <article className="section-pad !pt-12">
      <div className="container-page max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-white"
        >
          <ArrowLeft className="size-4" />
          Journal
        </Link>

        <p className="mt-8 text-xs text-dim">
          {formatDate(post.date)} · {post.readingTime}
        </p>
        <h1 className="display mt-4 text-[clamp(2rem,5vw,3.5rem)]">
          {post.title}
        </h1>
        <p className="lead mt-5">{post.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <div className="prose-blog mt-12">
          <MDXRemote source={post.content} />
        </div>

        {related.length ? (
          <aside className="mt-16 border-t border-white/10 pt-10">
            <h2 className="text-xl font-semibold">Related posts</h2>
            <ul className="mt-5 space-y-4">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/blog/${r.slug}`}
                    className="text-accent hover:underline"
                  >
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        ) : null}
      </div>
    </article>
  );
}
