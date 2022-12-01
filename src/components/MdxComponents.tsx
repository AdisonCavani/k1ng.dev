"use client";

import type { MDXComponents } from "mdx/types";
import type { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import Link from "next/link";

const MdxComponents: MDXComponents = {
  a: (props) => <CustomLink {...props} />,
};

const CustomLink = (
  props: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) => {
  const href = props.href;
  const isInternal = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternal && href)
    return (
      <Link href={href} className="text-blue-600 no-underline" {...props}>
        {props.children}
      </Link>
    );

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-blue-600 no-underline hover:underline underline-offset-2"
      {...props}
    >
      {props.children}
    </a>
  );
};

export default MdxComponents;
