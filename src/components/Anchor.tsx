"use client";

import { PropsWithChildren, useContext } from "react";
import StartRouterChange from "@lib/startRouterChangeContext";
import Link from "next/link";

function Anchor({
  children,
  className,
  href,
}: PropsWithChildren<{
  className?: string;
  href: string;
}>) {
  const startChange = useContext(StartRouterChange);

  return (
    <Link
      href={href}
      onClick={() => {
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
