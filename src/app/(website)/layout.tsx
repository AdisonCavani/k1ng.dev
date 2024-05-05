import Footer from "@components/layout/footer";
import Header from "@components/layout/header";
import NProgressWrapper from "@components/layout/nprogress-wrapper";
import PreviewProvider from "@components/studio/preview-provider";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL, TWITTER_HANDLE } from "config";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { Suspense, type PropsWithChildren } from "react";

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

function Layout({ children }: PropsWithChildren) {
  const { isEnabled } = draftMode();

  const layout = (
    <>
      <Suspense>
        <NProgressWrapper>
          <Header />
        </NProgressWrapper>
      </Suspense>
      {children}
      <Footer />
    </>
  );

  if (isEnabled) return <PreviewProvider>{layout}</PreviewProvider>;

  return layout;
}

export default Layout;
