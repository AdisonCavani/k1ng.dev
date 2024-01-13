import { slugify } from "./helpers";
import type { WikiSidebarItemSchema } from "./types";

const token = process.env.GITHUB_PAT;
const owner = "AdisonCavani";
const repo = "distro-grub-themes";

export const getBySlug = async (slug: string | undefined) => {
  if (!slug) slug = "index";

  const path = `/docs/${slug.charAt(0).toUpperCase() + slug.slice(1)}.mdx`;
  const response = await fetchGithubApi(
    `/repos/${owner}/${repo}/contents/${path}`,
  );

  return Buffer.from(response.content, "base64").toString("utf-8");
};

export const getDocsDir = async () => {
  const response = await fetchGithubApi(
    `/repos/${owner}/${repo}/contents/docs`,
  );

  return (response as any[])
    .map((item) => {
      const slug = slugify(item.name.split(".")[0]);

      if (slug === "index") return "";

      return slug;
    })
    .filter((slug) => slug !== "preview");
};

export const getSidebarData = async () => {
  const response = (await fetchGithubApi(
    `/repos/${owner}/${repo}/contents/docs`,
  )) as any[];

  const result: WikiSidebarItemSchema[] = response.map((item) => {
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
  });

  result.push({
    name: "Preview",
    href: "preview",
  });

  return result;
};

export const getReleaseData = async () => {
  const response = await fetchGithubApi(
    `/repos/${owner}/${repo}/releases/latest`,
  );

  return response.tag_name;
};

async function fetchGithubApi(path: string) {
  const headers = new Headers();

  headers.append("Accept", "application/vnd.github.v3+json");
  headers.append("User-Agent", "k1ng.dev");

  if (typeof window === "undefined")
    headers.append("Authorization", `Bearer ${token}`);

  const response = await fetch(`https://api.github.com${path}`, {
    method: "GET",
    headers: headers,
  });

  return await response.json();
}
