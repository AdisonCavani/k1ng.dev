"use client";

import { getClient } from "@sanity/lib/client";
import { LiveQueryProvider } from "next-sanity/preview";
import { useMemo, type PropsWithChildren } from "react";

type Props = {
  token: string;
};

function PreviewProvider({ children, token }: PropsWithChildren<Props>) {
  const client = useMemo(() => getClient({ token }), [token]);

  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>;
}

export default PreviewProvider;
