import { GetPostData } from "@lib/queries";
import { urlFor } from "@lib/sanity";
import { SITE_URL } from "config";
import { NextSeo, NextSeoProps } from "next-seo";
import { NEXT_SEO_DEFAULT } from "next-seo.config";

type Props = {
  params: {
    slug: string;
  };
};

async function Head({ params: { slug } }: Props) {
  const {
    authors,
    categories,
    coverImage,
    dateModified,
    datePublished,
    description,
    title,
  } = await GetPostData(slug);

  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: title,
    description: description,
    canonical: `${SITE_URL}/blog/${slug}`,
    openGraph: {
      type: "article",
      locale: "en_US",
      url: `${SITE_URL}/blog/${slug}`,
      title: title,
      description: description,
      images: [
        {
          url: urlFor(coverImage).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: "Article cover image",
        },
      ],
      article: {
        authors: authors.map(
          (author) => `${author.firstName} ${author.lastName}`
        ),
        publishedTime: datePublished,
        modifiedTime: dateModified,
        tags: categories.map((category) => category.name),
      },
    },
  };

  return <NextSeo {...updateMeta} useAppDir={true} />;
}

export default Head;
