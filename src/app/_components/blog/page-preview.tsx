"use client";

import { blogQuery } from "@lib/queries";
import { PostSchema } from "@lib/types";
import { useLiveQuery } from "next-sanity/preview";
import BlogPage from "./page";

type Props = {
  initialData: any;
};

function BlogPagePreview({ initialData }: Props) {
  const [posts, loading] = useLiveQuery<PostSchema[]>(initialData, blogQuery);

  if (loading) return <p>Loading...</p>;

  return <BlogPage posts={posts} />;
}

export default BlogPagePreview;
