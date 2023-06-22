"use client";

import { postQuery } from "@lib/queries";
import { PostSchema } from "@lib/types";
import { useLiveQuery } from "next-sanity/preview";
import Post from "./post";

type Props = {
  initialData: PostSchema;
  slug: string;
};

function PostPreview({ initialData, slug }: Props) {
  const [post, loading] = useLiveQuery<PostSchema>(initialData, postQuery, {
    slug: slug,
  });

  if (loading) return <p>Loading...</p>;

  return <Post {...post} />;
}

export default PostPreview;
