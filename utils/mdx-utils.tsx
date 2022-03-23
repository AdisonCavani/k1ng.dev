import fs from "fs";
import matter from "gray-matter";
import path from "path";

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), "posts");

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(POSTS_PATH);

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(process.cwd(), type, postSlug),
      "utf8"
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
}
