import "./globals.css";
import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import RootLayoutClient from "./layout.client";

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
        <RootLayoutClient>
          <Header />
          {children}
          {/* @ts-expect-error */}
          <Footer />
        </RootLayoutClient>
      </body>
    </html>
  );
}

export default RootLayout;
