"use client";

import { postQuery } from "@lib/queries";
import { PostSchema } from "@lib/types";
import { usePreview } from "@sanity/lib/preview";
import Post from "./post";

function PostPreview({ slug }: { slug: string }) {
  const data = usePreview(null, postQuery, { slug: slug }) as PostSchema;

  return <Post {...data} />;
}

export default PostPreview;
