import { SITE_URL } from "config";
import { NextSeo, NextSeoProps } from "next-seo";
import { NEXT_SEO_DEFAULT } from "next-seo.config";

function Head() {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: "Preview / Wiki",
    description:
      "Preview wiki page. Official documentation for distro-grub-themes.",
    canonical: `${SITE_URL}/distro-grub-themes/preview`,
  };

  return <NextSeo {...updateMeta} useAppDir={true} />;
}

export default Head;
