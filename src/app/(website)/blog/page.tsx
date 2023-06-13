import BlogPage from "@components/blog/page";
import PreviewSuspense from "@components/layout/preview-suspense";
import { getBlogData } from "@lib/queries";
import { SITE_URL } from "config";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { lazy } from "react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog",
  description: "A blog built using Sanity CMS. Posts are written in MDX.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

const BlogPagePreview = lazy(() => import("@components/blog/page-preview"));

async function Blog() {
  const { isEnabled } = draftMode();

  if (isEnabled)
    return (
      <PreviewSuspense fallback="Loading">
        <BlogPagePreview />
      </PreviewSuspense>
    );

  const posts = await getBlogData();

  return <BlogPage posts={posts} />;
}

export default Blog;
