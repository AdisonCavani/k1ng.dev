import { Button } from "@mantine/core";
import { NextLink } from "@mantine/next";

const Post = ({ title, publishedAt, summary, slug }) => {
  return (
    <NextLink href={`posts/${slug}`}>
      <Button>{title}</Button>
    </NextLink>
  );
};

export default Post;
