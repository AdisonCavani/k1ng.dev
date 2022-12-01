import { isUrlInternal } from "@lib/helpers";
import type { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface Props
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: ReactNode;
}

function HeaderLink(props: Props) {
  return (
    <a
      className={`flex items-center text-lg font-semibold sm:text-sm leading-none ${
        isUrlInternal("") ? "" : "hover:underline"
      } ${false ? "text-slate-900" : "text-slate-600"}`}
      {...props}
    >
      {props.children}
    </a>
  );
}

export default HeaderLink;
