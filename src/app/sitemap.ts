import { getSidebarData } from "@lib/github";
import { getBlogData } from "@lib/query-methods";
import { SITE_URL } from "config";
import type { MetadataRoute } from "next";

async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = (await getBlogData()).map(({ slug, dateModified }) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: dateModified,
  }));

  const wikiPages = (await getSidebarData())
    .filter((x) => x.href !== "")
    .map(({ href }) => ({
      url: `${SITE_URL}/distro-grub-themes/${href}`,
      lastModified: new Date(),
    }));

  const routes = [
    "",
    "/blog",
    "/distro-grub-themes",
    "/distro-grub-themes/preview",
  ].map((route) => ({
    url: SITE_URL + route,
    lastModified: new Date(),
  }));

  return [...routes, ...wikiPages, ...posts];
}

export default sitemap;
