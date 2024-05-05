import TodoListAlert from "@components/layout/todolist-alert";
import "@styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import Script from "next/script";
import type { PropsWithChildren } from "react";

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={`bg-white font-sans text-slate-900 antialiased ${fontInter.variable}`}
    >
      <head>
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              strategy="lazyOnload"
              data-website-id="49cda9c6-378d-4c19-b985-35f1dcd0b891"
              src="https://insights.k1ng.dev/script.js"
            />
            <SpeedInsights />
          </>
        )}
      </head>
      <body>
        {children}
        <TodoListAlert />
      </body>
    </html>
  );
}

export default RootLayout;
