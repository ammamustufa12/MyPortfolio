export interface GitHubProfile {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
  updated_at: string;
}

const GITHUB_USER = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "ammamustufa12";

async function githubFetch(url: string) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 2500);

  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 },
      signal: controller.signal,
      headers: {
        Accept: "application/vnd.github+json",
        ...(process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : {}),
      },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export async function fetchGitHubProfile(): Promise<GitHubProfile | null> {
  const data = await githubFetch(
    `https://api.github.com/users/${GITHUB_USER}`,
  );
  return (data as GitHubProfile | null) ?? null;
}

export async function fetchGitHubRepos(limit = 6): Promise<GitHubRepo[]> {
  const data = await githubFetch(
    `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=20`,
  );
  if (!Array.isArray(data)) return [];
  return (data as GitHubRepo[]).filter((r) => !r.fork).slice(0, limit);
}

export { GITHUB_USER };
