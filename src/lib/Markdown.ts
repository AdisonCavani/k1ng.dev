import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const mdxToHtml = async (source: string) => {
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

export default mdxToHtml;
