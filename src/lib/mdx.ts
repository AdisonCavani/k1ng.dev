import type { SerializeOptions } from "next-mdx-remote/dist/types";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export const mdxOptions: SerializeOptions = {
  mdxOptions: {
    format: "mdx",
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      // Order matters!
      rehypeSlug,
      rehypeCodeTitles,
      // @ts-expect-error
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
