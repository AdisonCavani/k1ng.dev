import { SITE_URL } from "config";
import { NextSeo, NextSeoProps } from "next-seo";
import { NEXT_SEO_DEFAULT } from "next-seo.config";

function Head() {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: "Blog",
    description: "A blog built using Sanity CMS. Posts are written in MDX.",
    canonical: `${SITE_URL}/blog`,
  };

  return <NextSeo {...updateMeta} useAppDir={true} />;
}

export default Head;
