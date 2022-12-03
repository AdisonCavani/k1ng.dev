"use client";

import { MouseEventHandler, PropsWithChildren, useContext } from "react";
import StartRouterChange from "@lib/startRouterChangeContext";
import Link from "next/link";

function Anchor({
  children,
  className,
  href,
  onClick,
}: PropsWithChildren<{
  className?: string;
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
}>) {
  const startChange = useContext(StartRouterChange);

  return (
    <Link
      href={href}
      onClick={(e) => {
        if (onClick) onClick(e);
        const { pathname, search, hash } = window.location;
        if (href !== pathname + search + hash) startChange();
      }}
      className={className}
    >
      {children}
    </Link>
  );
}

export default Anchor;
