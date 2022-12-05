import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL, TWITTER_HANDLE } from "config";
import type { NextSeoProps } from "next-seo";

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  title: "Home",
  titleTemplate: `%s - ${SITE_TITLE}`,
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
    handle: TWITTER_HANDLE,
    cardType: "summary_large_image",
  },
};
