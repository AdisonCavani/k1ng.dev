import BlogLayout from "@layouts/Blog";
import { GetBlogData } from "@lib/queries";

export const dynamic = "force-static";

async function Blog() {
  const posts = await GetBlogData();

  // @ts-expect-error
  return <BlogLayout posts={posts} />;
}

export default Blog;
