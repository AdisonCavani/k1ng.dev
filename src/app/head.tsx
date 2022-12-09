import { NextSeo } from "next-seo";
import { NEXT_SEO_DEFAULT } from "next-seo.config";
import Script from "next/script";

function Head() {
  return <NextSeo {...NEXT_SEO_DEFAULT} useAppDir={true} />;
}

export default Head;
