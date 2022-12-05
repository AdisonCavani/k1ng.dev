import "@styles/prose.css";
import Markdown from "@components/Markdown";
import { mdxToHtml } from "@lib/markdown";
import { GetPostData, GetPostSlugsData } from "@lib/queries";
import { urlFor } from "@lib/sanity";
import Image from "next/image";
import MdxComponents2 from "@components/MdxComponents2";
import Link from "next/link";
import { formatDate } from "@lib/helpers";

type Props = {
  params: {
    slug: string;
  };
};

async function BlogPost({ params: { slug } }: Props) {
  const { authors, content, coverImage, datePublished, title } =
    await GetPostData(slug);
  const mdxSource = await mdxToHtml(content);

  return (
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
        <time dateTime={datePublished} className="block text-sm text-slate-600">
          Published on {formatDate(datePublished)}
        </time>
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
        src={urlFor(coverImage).url()}
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
  );
}

export default BlogPost;

export async function generateStaticParams() {
  const slugs = await GetPostSlugsData();

  return slugs.map((slug) => ({
    slug: slug,
  }));
}
