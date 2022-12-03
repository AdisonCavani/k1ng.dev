import { Inter as FontSans } from "@next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { cn } from "@lib/helpers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-inter",
});

type Props = {
  children: ReactNode;
};

function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white font-sans text-slate-900 antialiased",
        fontSans.variable
      )}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        {children}
        {/* @ts-expect-error */}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
