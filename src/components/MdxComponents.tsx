"use client";

import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";
import { isUrlInternal } from "@lib/helpers";
import Anchor from "./Anchor";

const MdxComponents: MDXComponents = {
  a: (props) => <CustomLink {...props} />,
};

type Props = {
  href?: string | undefined;
  children?: ReactNode;
};

const CustomLink = ({ children, href }: Props) => {
  if (href && isUrlInternal(href))
    return (
      <Anchor href={href} className="text-blue-600 no-underline">
        {children}
      </Anchor>
    );

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-blue-600 no-underline hover:underline underline-offset-2"
    >
      {children}
    </a>
  );
};

export default MdxComponents;
