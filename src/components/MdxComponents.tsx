import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";
import { isUrlInternal } from "@lib/helpers";
import Link from "next/link";

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
      <Link href={href} className="text-blue-600 no-underline">
        {children}
      </Link>
    );

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-blue-600 no-underline underline-offset-2 hover:underline"
    >
      {children}
    </a>
  );
};

export default MdxComponents;
