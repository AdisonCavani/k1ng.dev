"use client";

import { postQuery } from "@lib/queries";
import type { PostSchema } from "@lib/types";
import { useLiveQuery } from "next-sanity/preview";
import Post from "./post";

type Props = {
  slug: string;
};

function PostPreview({ slug }: Props) {
  const [post, loading] = useLiveQuery<PostSchema | null>(null, postQuery, {
    slug: slug,
  });

  if (loading)
    return (
      <main className="container relative mt-16 max-w-3xl py-6 lg:py-10">
        <p>Loading...</p>
      </main>
    );

  return <Post {...post!} />;
}

export default PostPreview;
