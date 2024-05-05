import BlogPage from "@components/blog/page-comp";
import BlogPagePreview from "@components/blog/page-preview";
import { getBlogData } from "@lib/query-methods";
import { SITE_URL } from "config";
import type { Metadata } from "next";
import { draftMode } from "next/headers";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog",
  description: "A blog built using Sanity CMS. Posts are written in MDX.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

async function Blog() {
  const { isEnabled } = draftMode();
  const posts = await getBlogData();

  if (isEnabled) return <BlogPagePreview initialData={posts} />;

  return <BlogPage posts={posts} />;
}

export default Blog;
