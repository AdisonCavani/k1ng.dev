import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import type { SerializeOptions } from "next-mdx-remote/dist/types";

export const mdxOptions: SerializeOptions = {
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
};
