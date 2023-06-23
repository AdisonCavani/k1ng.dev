"use client";

import { client } from "@sanity/lib/client";
import { LiveQueryProvider } from "next-sanity/preview";
import type { PropsWithChildren } from "react";

function PreviewProvider({ children }: PropsWithChildren) {
  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>;
}

export default PreviewProvider;
