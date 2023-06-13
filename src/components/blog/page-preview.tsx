"use client";

import { blogQuery } from "@lib/queries";
import { PostSchema } from "@lib/types";
import { usePreview } from "@sanity/lib/preview";
import BlogPage from "./page";

function BlogPagePreview() {
  const posts = usePreview(null, blogQuery) as PostSchema[];

  return <BlogPage posts={posts} />;
}

export default BlogPagePreview;
