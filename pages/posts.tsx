import Post from "@components/post";
import { getAllFilesFrontMatter } from "@utils/mdx-utils";
import { useState } from "react";

export default function Posts({ posts }) {
  const [searchValue, setSearchValue] = useState("");

  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <div>
      {!filteredBlogPosts.length && "No posts found :("}
      {filteredBlogPosts.map((frontMatter) => (
        <Post key={frontMatter.title} {...frontMatter} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("posts");

  return { props: { posts } };
}
