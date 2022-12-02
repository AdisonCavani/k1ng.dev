import { isUrlInternal } from "@lib/helpers";
import Link from "next/link";
import type { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface Props
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

function HeaderLink(props: Props) {
  const classes = `flex items-center text-lg font-semibold sm:text-sm leading-none text-slate-600 ${
    props.href && isUrlInternal(props.href) ? "" : "hover:underline"
  }`;

  return (
    <>
      {props.href && isUrlInternal(props.href) ? (
        <Link href={props.href} className={classes}>
          {props.children}
        </Link>
      ) : (
        <a className={classes} {...props}>
          {props.children}
        </a>
      )}
    </>
  );
}

export default HeaderLink;
