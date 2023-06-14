import "@styles/prose.css";
import Post from "@components/blog/post";
import PreviewSuspense from "@components/layout/preview-suspense";
import { getPostData, getPostSlugsData } from "@lib/query-methods";
import { urlForImage } from "@sanity/lib/image";
import { SITE_URL } from "config";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { lazy } from "react";

type Props = {
  params: {
    slug: string;
  };
};

const PostPreview = lazy(() => import("@components/blog/post-preview"));

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { isEnabled } = draftMode();

  if (isEnabled) {
    return {};
  }

  const {
    authors,
    categories,
    coverImage,
    dateModified,
    datePublished,
    description,
    title,
  } = await getPostData(slug);

  return {
    title: title,
    description: description,

    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },

    openGraph: {
      type: "article",
      locale: "en_US",
      url: `${SITE_URL}/blog/${slug}`,
      title: title,
      description: description,
      images: [
        {
          url: urlForImage(coverImage).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: "Article cover image",
        },
      ],
      authors: authors.map(
        (author) => `${author.firstName} ${author.lastName}`
      ),
      publishedTime: datePublished,
      modifiedTime: dateModified,
      tags: categories.map((category) => category.name),
    },
  };
}

async function BlogPost({ params: { slug } }: Props) {
  const { isEnabled } = draftMode();

  if (isEnabled)
    return (
      <PreviewSuspense fallback="Loading">
        <PostPreview slug={slug} />
      </PreviewSuspense>
    );

  const data = await getPostData(slug);

  return <Post {...data} />;
}

export default BlogPost;

export async function generateStaticParams() {
  const slugs = await getPostSlugsData();

  return slugs.map((slug) => ({
    slug: slug,
  }));
}
