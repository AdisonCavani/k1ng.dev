import Anchor from "@components/Anchor";
import { isUrlInternal } from "@lib/helpers";
import type { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

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
        <Anchor href={props.href} className={classes}>
          {props.children}
        </Anchor>
      ) : (
        <a className={classes} {...props}>
          {props.children}
        </a>
      )}
    </>
  );
}

export default HeaderLink;
