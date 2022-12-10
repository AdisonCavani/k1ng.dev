import { Octokit } from "@octokit/core";
import { slugify } from "./helpers";
import type { WikiSidebarSchema } from "./types";

const octokit = new Octokit({ auth: process.env.GITHUB_PAT });

export const getBySlug = async (slug: string | undefined) => {
  if (!slug) slug = "index";

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

  return (res.data as any[])
    .map((item) => {
      const slug = slugify(item.name.split(".")[0]);

      if (slug === "index") return "";

      return slug;
    })
    .filter((slug) => slug !== "preview");
};

export const getSidebarData = async () => {
  const res = await octokit.request(
    "GET /repos/{owner}/{repo}/contents/{path}{?ref}",
    {
      owner: "AdisonCavani",
      repo: "distro-grub-themes",
      path: "/docs",
    }
  );

  const arr = res.data as any[];

  const result: WikiSidebarSchema = {
    count: arr.length,
    items: arr.map((item) => {
      const name = item.name.split(".")[0] as string;

      if (name.toLowerCase() === "index")
        return {
          name: "Index",
          href: "",
        };

      return {
        name: name,
        href: slugify(item.name.split(".")[0]),
      };
    }),
  };

  return result;
};

export const getReleaseData = async () => {
  const res = await octokit.request(
    "GET /repos/{owner}/{repo}/releases/latest",
    {
      owner: "AdisonCavani",
      repo: "distro-grub-themes",
    }
  );

  return res.data.tag_name;
};
