import "@styles/prose.css";
import Markdown from "@components/Markdown";
import { mdxToHtml } from "@lib/markdown";
import { GetPostData, GetPostSlugsData } from "@lib/queries";
import { urlFor } from "@lib/sanity";
import Image from "next/image";
import MdxComponents2 from "@components/MdxComponents2";
import Link from "next/link";
import { formatDate } from "@lib/helpers";
import { ArticleJsonLd } from "next-seo";
import { SITE_URL } from "config";

type Props = {
  params: {
    slug: string;
  };
};

async function BlogPost({ params: { slug } }: Props) {
  const {
    authors,
    content,
    coverImage,
    dateModified,
    datePublished,
    description,
    title,
  } = await GetPostData(slug);
  const mdxSource = await mdxToHtml(content);

  return (
    <>
      <main className="container relative mt-16 max-w-3xl py-6 lg:py-10">
        <Link
          href="/blog"
          className="absolute top-14 -left-[200px] hidden items-center justify-center text-sm font-medium text-slate-600 hover:text-slate-900 xl:inline-flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          See all posts
        </Link>
        <div>
          <div className="inline-flex items-center text-slate-600">
            <time dateTime={datePublished} className="block text-sm">
              Published on {formatDate(datePublished)}
            </time>
            <span className="px-2 text-xs font-medium" aria-hidden={true}>
              |
            </span>
            <a
              href="/rss.xml"
              target="_blank"
              rel="noreferrer"
              aria-label="RSS Feed"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"></path>
                <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"></path>
              </svg>
            </a>
          </div>
          <h1 className="mt-2 inline-block text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
            {title}
          </h1>
          <div className="mt-4 flex space-x-4">
            {authors.map((author, index) => (
              <a
                key={index}
                target="_blank"
                rel="noreferrer"
                href={`https://github.com/${author.github}`}
                className="flex items-center space-x-2 text-sm"
              >
                <Image
                  src={urlFor(author.image).width(42).height(42).url()}
                  alt="Author image"
                  width={42}
                  height={42}
                  className="rounded-full aspect-square"
                />
                <div className="flex-1 text-left leading-tight">
                  <p className="font-medium text-slate-900">
                    {author.firstName} {author.lastName}
                  </p>
                  <p className="text-[12px] text-slate-600">@{author.github}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        <Image
          src={urlFor(coverImage).width(720).height(405).url()}
          alt={title}
          width={720}
          height={405}
          className="my-8 rounded-md border border-slate-200 bg-slate-200 transition-colors group-hover:border-slate-900"
          priority
        />
        <article className="prose">
          <Markdown mdxSource={mdxSource} mdxComponents={MdxComponents2} />
        </article>
        <hr className="my-4 border-slate-200" />
        <div className="flex justify-center py-6 lg:py-10">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            See all posts
          </Link>
        </div>
      </main>
      <ArticleJsonLd
        useAppDir={true}
        url={`${SITE_URL}/blog/${slug}`}
        title={title}
        description={description}
        datePublished={datePublished}
        dateModified={dateModified}
        isAccessibleForFree={true}
        authorName={authors.map(({ firstName, lastName, github }) => ({
          name: `${firstName} ${lastName}`,
          url: `https://github.com/${github}`,
        }))}
        images={[urlFor(coverImage).width(1200).height(630).url()]}
      />
    </>
  );
}

export default BlogPost;

export async function generateStaticParams() {
  const slugs = await GetPostSlugsData();

  return slugs.map((slug) => ({
    slug: slug,
  }));
}
