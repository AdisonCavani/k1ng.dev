import "@styles/globals.css";
import Footer from "@components/layout/footer";
import Header from "@components/layout/header";
import NProgressWrapper from "@components/layout/nprogress-wrapper";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL, TWITTER_HANDLE } from "config";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { PropsWithChildren, Suspense } from "react";

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s - ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/static/images/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "Website image",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    creator: TWITTER_HANDLE,
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL(SITE_URL),

  alternates: {
    canonical: SITE_URL,
    types: {
      "application/atom+xml": new URL("/atom.xml", SITE_URL),
      "application/rss+xml": new URL("/rss.xml", SITE_URL),
    },
  },

  manifest: "/static/manifest.json",

  icons: {
    icon: [
      {
        url: "/static/favicons/favicon.ico",
      },
    ],
    apple: [
      {
        url: "/static/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

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
          </>
        )}
      </head>
      <body>
        <Suspense>
          <NProgressWrapper>
            <Header />
          </NProgressWrapper>
        </Suspense>
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
