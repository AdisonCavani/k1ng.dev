import { NextSeo } from "next-seo";
import { NEXT_SEO_DEFAULT } from "next-seo.config";
import Script from "next/script";

function Head() {
  return (
    <>
      <NextSeo {...NEXT_SEO_DEFAULT} useAppDir={true} />

      {process.env.NODE_ENV === "production" && (
        <Script
          type="application/javascript"
          data-domain="adison.me"
          src="https://analytics.adison.me/js/script.js"
          strategy="lazyOnload"
        />
      )}
    </>
  );
}

export default Head;
