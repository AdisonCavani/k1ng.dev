import { SITE_URL } from "config";
import { NextSeo, NextSeoProps } from "next-seo";
import { NEXT_SEO_DEFAULT } from "next-seo.config";

type Props = {
  params: {
    slugs: string[];
  };
};

function Head({ params: { slugs } }: Props) {
  const name = slugs
    ? slugs[0]?.toLowerCase().charAt(0).toUpperCase()! +
      slugs[0]?.toLowerCase().substring(1)
    : "Index";

  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: `${name} / Wiki`,
    description: `${name} wiki page. Official documentation for distro-grub-themes.`,
    canonical: `${SITE_URL}/distro-grub-themes${slugs ? `/${slugs[0]}` : ""}`,
  };

  return <NextSeo {...updateMeta} useAppDir={true} />;
}

export default Head;
