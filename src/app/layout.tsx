import "./globals.css";
import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

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
      <body className="bg-neutral-100">
        <Header />
        {children}
        {/* @ts-expect-error */}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
