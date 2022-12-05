import { NextSeo, NextSeoProps } from "next-seo";
import { NEXT_SEO_DEFAULT } from "next-seo.config";

function Head() {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: "Blog",
    description: "A blog built using Sanity CMS. Posts are written in MDX.",
  };

  return <NextSeo {...updateMeta} useAppDir={true} />;
}

export default Head;
