import { Inter as FontSans } from "@next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { cn } from "@lib/helpers";
import { NextSeo } from "next-seo";
import Script from "next/script";

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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
        <link href="/static/favicons/site.webmanifest" rel="manifest" />
        <link
          href="/static/favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/static/favicons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/static/favicons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          color="#4a9885"
          href="/static/favicons/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta
          content="/static/favicons/browserconfig.xml"
          name="msapplication-config"
        />
        <link rel="alternate" type="application/atom+xml" href="/atom.xml" />
        <link rel="alternate" type="application/rss+xml" href="/rss.xml" />

        <NextSeo
          useAppDir={true}
          themeColor="#ffffff"
          titleTemplate="%s | Adison Cavani"
        />

        {process.env.NODE_ENV === "production" && (
          <Script
            type="application/javascript"
            data-domain="adison.me"
            src="https://analytics.adison.me/js/script.js"
            strategy="lazyOnload"
          />
        )}
      </head>
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
