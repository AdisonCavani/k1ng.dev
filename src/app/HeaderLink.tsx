import { isUrlInternal } from "@lib/helpers";
import clsx from "clsx";
import Link from "next/link";
import type { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

interface Props
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

function HeaderLink(props: Props) {
  const classes = clsx(
    "flex items-center text-lg font-semibold sm:text-sm leading-none text-slate-600",
    props.href && isUrlInternal(props.href) && "hover:underline"
  );

  if (props.href && isUrlInternal(props.href))
    return (
      <Link href={props.href} className={classes}>
        {props.children}
      </Link>
    );

  return (
    <a className={classes} {...props}>
      {props.children}
    </a>
  );
}

export default HeaderLink;
