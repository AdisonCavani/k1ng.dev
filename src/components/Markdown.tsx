"use client";

import { MDXRemote } from "next-mdx-remote";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import type { MDXComponents } from "mdx/types";

type Props = {
  mdxComponents?: MDXComponents | undefined;
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
};

function Markdown({ mdxComponents, mdxSource }: Props) {
  return <MDXRemote {...mdxSource} components={mdxComponents} />;
}

export default Markdown;
