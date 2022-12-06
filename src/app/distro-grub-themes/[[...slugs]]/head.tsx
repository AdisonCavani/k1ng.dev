import { NextSeo, NextSeoProps } from "next-seo";
import { NEXT_SEO_DEFAULT } from "next-seo.config";

type Props = {
  params: {
    slugs: string[];
  };
};

async function Head({ params: { slugs } }: Props) {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: `${
      slugs
        ? slugs[0]?.toLowerCase().charAt(0).toUpperCase()! +
          slugs[0]?.toLowerCase().substring(1)
        : "Index"
    } / Wiki`,
    description: `${""} wiki page. Official documentation for distro-grub-themes.`,
  };

  return <NextSeo {...updateMeta} useAppDir={true} />;
}

export default Head;
