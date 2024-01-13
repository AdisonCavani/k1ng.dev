import "@styles/globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import { PropsWithChildren } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"

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
              data-domain="k1ng.dev"
              src="https://insights.k1ng.dev/js/script.js"
            />
            <Script strategy="lazyOnload" id="plausible-script">
              {`window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
            </Script>
            <SpeedInsights />
          </>
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
