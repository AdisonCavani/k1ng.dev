import RSS from "rss";
import type { GetServerSideProps } from "next";
import { GetBlogData, GetTagsData } from "@lib/queries";
import { SITE_URL } from "config";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const blogData = await GetBlogData();
  const allTags = await GetTagsData();

  const feed = new RSS({
    title: "Feed - Adison Cavani",
    description: "adison.me RSS feed",
    language: "en",
    site_url: SITE_URL,
    feed_url: `${SITE_URL}/rss.xml`,
    image_url: `${SITE_URL}/og-image.webp`,
    categories: allTags.map((tag) => tag.name),
  });

  blogData.map(
    ({ authors, categories, datePublished, description, slug, title }) => {
      feed.item({
        title: title,
        description: description,
        date: datePublished,
        author: `${authors[0]?.firstName} ${authors[0]?.lastName}`,
        categories: categories.map((category) => category.name),
        url: `https://adison.me/blog/${slug}`,
      });
    }
  );

  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );
  res.write(feed.xml({ indent: true }));
  res.end();

  return {
    props: {},
  };
};

export default function RSSFeed() {
  return null;
}
