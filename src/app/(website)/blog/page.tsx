import BlogPage from "@components/blog/page";
import BlogPagePreview from "@components/blog/page-preview";
import PreviewProvider from "@components/studio/preview-provider";
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

  if (isEnabled)
    return (
      <PreviewProvider>
        <BlogPagePreview initialData={posts} />
      </PreviewProvider>
    );

  return <BlogPage posts={posts} />;
}

export default Blog;
