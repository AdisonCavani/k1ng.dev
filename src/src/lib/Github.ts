import { Octokit } from "@octokit/core";

const octokit = new Octokit({ auth: import.meta.env.GITHUB_PAT });

export const getBySlug = async (slug: string) => {
  const res = await octokit.request(
    "GET /repos/{owner}/{repo}/contents/{path}{?ref}",
    {
      owner: "AdisonCavani",
      repo: "distro-grub-themes",
      path: `/docs/${slug.charAt(0).toUpperCase() + slug.slice(1)}.mdx`,
    }
  );

  return Buffer.from(res.data.content, "base64").toString("utf-8");
};

export const getDocsDir = async () => {
  const res = await octokit.request(
    "GET /repos/{owner}/{repo}/contents/{path}{?ref}",
    {
      owner: "AdisonCavani",
      repo: "distro-grub-themes",
      path: "/docs",
    }
  );

  return (res.data as any[]).map((item) => slugify(item.name.split(".")[0]));
};

const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
