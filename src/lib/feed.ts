import { GetBlogData, GetTagsData } from "@lib/queries";
import { urlForImage } from "@sanity/lib/image";
import { GITHUB_PROFILE, SITE_AUTHOR, SITE_URL } from "config";
import { Feed } from "feed";

async function GetFeed(): Promise<Feed> {
  const blogData = await GetBlogData();
  const allTags = await GetTagsData();

  const feed = new Feed({
    title: `Feed - ${SITE_AUTHOR}`,
    description: "k1ng.dev RSS feed",
    id: SITE_URL,
    link: SITE_URL,
    language: "en-US",
    image: `${SITE_URL}/static/images/og-image.webp`,
    favicon: `${SITE_URL}/static/favicons/favicon.ico`,
    copyright: `${new Date().getUTCFullYear()} ${SITE_AUTHOR}. All rights reserved.`,
    updated: new Date(),
    feedLinks: {
      atom: `${SITE_URL}/atom.xml`,
      rss: `${SITE_URL}/rss.xml`,
    },
    author: {
      name: SITE_AUTHOR,
      email: "srodonadrian@proton.me",
      link: GITHUB_PROFILE,
    },
  });

  blogData.map(
    ({ authors, coverImage, datePublished, description, slug, title }) => {
      feed.addItem({
        title: title,
        id: `${SITE_URL}/blog/${slug}`,
        link: `${SITE_URL}/blog/${slug}`,
        description: description,
        date: new Date(datePublished),
        image: urlForImage(coverImage).url(),
        author: authors.map(({ firstName, lastName, github }) => ({
          name: `${firstName} ${lastName}`,
          link: `https://github.com/${github}`,
        })),
      });
    }
  );

  allTags.forEach((tag) => {
    feed.addCategory(tag.name);
  });

  return feed;
}

export default GetFeed;
