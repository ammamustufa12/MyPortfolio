import { ArrowUpRight, GitFork, Star } from "lucide-react";
import {
  fetchGitHubProfile,
  fetchGitHubRepos,
  GITHUB_USER,
} from "@/lib/github";
import { getSocial } from "@/data/socials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";

export async function GitHubSection() {
  const [profileData, repos] = await Promise.all([
    fetchGitHubProfile(),
    fetchGitHubRepos(6),
  ]);
  const githubUrl =
    getSocial("github")?.url || `https://github.com/${GITHUB_USER}`;

  return (
    <section id="github" className="section-pad">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="GitHub"
            title="Engineering Activity"
            description="Live profile data and repository highlights via the GitHub API — no hardcoded stats."
          />
          <Button href={githubUrl} external variant="secondary">
            View GitHub Profile
            <ArrowUpRight className="size-4" />
          </Button>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {[
            { label: "Username", value: profileData?.login || GITHUB_USER },
            {
              label: "Public Repos",
              value: profileData ? String(profileData.public_repos) : "—",
            },
            {
              label: "Followers",
              value: profileData ? String(profileData.followers) : "—",
            },
            {
              label: "Following",
              value: profileData ? String(profileData.following) : "—",
            },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.05}>
              <div className="rounded-2xl border border-white/10 p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-dim">
                  {stat.label}
                </p>
                <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-dim">
            Contribution graph
          </p>
          <p className="mt-3 text-sm text-muted">
            Live contribution activity loads from your GitHub profile. Open
            GitHub to view the full graph.
          </p>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm text-accent hover:underline"
            data-cursor="link"
          >
            github.com/{GITHUB_USER} →
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {repos.length ? (
            repos.map((repo, i) => (
              <Reveal key={repo.id} delay={i * 0.04}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-accent/30"
                  data-cursor="link"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-medium">{repo.name}</h3>
                    <ArrowUpRight className="size-4 text-dim" />
                  </div>
                  <p className="mt-3 line-clamp-2 text-sm text-muted">
                    {repo.description || "No description"}
                  </p>
                  <div className="mt-5 flex items-center gap-4 text-xs text-dim">
                    <span>{repo.language || "Language n/a"}</span>
                    <span className="inline-flex items-center gap-1">
                      <Star className="size-3.5" />
                      {repo.stargazers_count}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitFork className="size-3.5" />
                      Updated
                    </span>
                  </div>
                </a>
              </Reveal>
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-white/15 p-6 text-sm text-muted md:col-span-2 xl:col-span-3">
              GitHub repositories will appear here when the API is reachable.
              Set <code className="text-accent">NEXT_PUBLIC_GITHUB_USERNAME</code>{" "}
              (and optional <code className="text-accent">GITHUB_TOKEN</code>) in
              your environment.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
