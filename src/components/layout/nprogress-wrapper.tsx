"use client";

import RouterContext from "./router-context";
import { usePathname, useSearchParams } from "next/navigation";
import { configure, start, done } from "nprogress";
import type { PropsWithChildren } from "react";
import { useCallback, useState, useEffect } from "react";

function NProgressWrapper({ children }: PropsWithChildren) {
  configure({
    showSpinner: false,
  });

  const onStart = useCallback(() => start(), []);
  const onComplete = useCallback(() => done(), []);

  const [isChanging, setIsChanging] = useState<boolean>(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => setIsChanging(false), [pathname, searchParams]);

  useEffect(() => {
    if (isChanging) onStart();
    else onComplete();
  }, [isChanging, onComplete, onStart]);

  return (
    <RouterContext.Provider value={() => setIsChanging(true)}>
      {children}
    </RouterContext.Provider>
  );
}

export default NProgressWrapper;
