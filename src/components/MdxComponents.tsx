import type { MDXComponents } from "mdx/types";
import type { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

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

  if (isInternal)
    return (
      <a href={href} {...props} className="text-blue-600 no-underline">
        {props.children}
      </a>
    );

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      {...props}
      className="text-blue-600 no-underline hover:underline underline-offset-2"
    >
      {props.children}
    </a>
  );
};

export default MdxComponents;
