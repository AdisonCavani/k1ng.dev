import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export const mdxToHtml = async (source: string) => {
  const mdxSource = await serialize(source, {
    mdxOptions: {
      format: "mdx",
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        // Order matters!
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ],
    },
  });

  return mdxSource;
};

export function getHeadings(source: string) {
  const headingLines = source.split("\n").filter((line) => {
    return line.match(/^(#{1,6}\s*[\S]+)/);
  });

  return headingLines.map((raw) => {
    const text = raw.replace(/^#*\s/, "");
    const level = raw.lastIndexOf("#") + 1;

    return { text, level };
  });
}
