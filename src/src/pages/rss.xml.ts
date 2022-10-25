import rss from "@astrojs/rss";
import { GetBlogData } from "@lib/Queries";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from "../config";

const data = await GetBlogData()

export const get = () =>
  rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: import.meta.env.SITE,
    items: data.map(post => ({
      title: post.title,
      description: post.description,
      pubDate: new Date(post.datePublished),
      link: `${SITE_URL}/blog/${post.slug}`
    })),
  });
