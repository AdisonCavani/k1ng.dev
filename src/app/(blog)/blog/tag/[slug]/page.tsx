import BlogLayout from "@layouts/Blog";
import { GetBlogData, GetTagsData } from "@lib/queries";

type Props = {
  params: {
    tag: string;
  };
};

async function Tag({ params: { tag } }: Props) {
  const posts = await GetBlogData();

  // @ts-expect-error
  return <BlogLayout currentTag={tag} posts={posts} />;
}

export default Tag;

export async function generateStaticParams() {
  const tags = await GetTagsData();

  return tags.map(({ slug }) => ({
    slug: slug,
  }));
}
