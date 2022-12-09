import { NextSeo } from "next-seo";
import { NEXT_SEO_DEFAULT } from "next-seo.config";
import Script from "next/script";

function Head() {
  return (
    <>
      <NextSeo {...NEXT_SEO_DEFAULT} useAppDir={true} />

      {process.env.NODE_ENV === "production" && (
        <>
          <Script
            strategy="lazyOnload"
            data-domain="adison.me"
            src="https://analytics.adison.me/js/script.js"
          />
          <Script strategy="lazyOnload" id="plausible-script">
            {`window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
          </Script>
        </>
      )}
    </>
  );
}

export default Head;
