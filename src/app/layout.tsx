import "@styles/globals.css";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
