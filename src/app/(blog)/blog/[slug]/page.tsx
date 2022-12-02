import "@styles/prose.css";
import Markdown from "@components/Markdown";
import { mdxToHtml } from "@lib/markdown";
import { GetPostData } from "@lib/queries";
import { urlFor } from "@lib/sanity";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

async function BlogPost({ params: { slug } }: Props) {
  const {
    authors,
    categories,
    content,
    coverImage,
    dateModified,
    datePublished,
    description,
    title,
  } = await GetPostData(slug);
  const mdxSource = await mdxToHtml(content);

  return (
    <main className="max-w-5xl pt-8 px-8 mx-auto mt-14">
      <article>
        <header>
          <Image
            width={720}
            height={360}
            src={urlFor(coverImage).url()}
            alt="Cover image"
            className="mx-auto max-w-lg w-full mt-4 sm:mt-0 rounded-xl"
            loading="eager"
          />

          <h1 className="pt-8 md:pt-16 sm:text-5xl text-3xl font-bold">
            {title}
          </h1>

          <div className="mt-8 text-gray-600 block space-y-4">
            {/* Date */}
            <p className="flex gap-2 items-center sm:text-base text-sm">
              <time dateTime={datePublished}>
                {new Date(datePublished).toLocaleDateString("en-us", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <a
                href="/rss.xml"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-700"
                title="RSS feed"
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
            </p>

            {/* Authors */}
            <div>
              {authors.map((value, index) => (
                <a
                  key={index}
                  href={`https://github.com/${value.github}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  {`${value.firstName} ${value.lastName}`}
                </a>
              ))}
            </div>

            {/* Categories */}
            <div className="flow-root mt-8 text-neutral-800 text-xs font-medium">
              <p className="-m-2 flex flex-row">
                {categories.map(({ name, slug }, index) => (
                  <a
                    key={index}
                    href={`/blog/tag/${slug}`}
                    className="m-2 px-2 py-1 rounded bg-neutral-200"
                  >
                    {name}
                  </a>
                ))}
              </p>
            </div>
          </div>
        </header>

        <hr className="border-t border-neutral-200 my-8" />

        <section className="w-full max-w-none prose">
          <Markdown mdxSource={mdxSource} />
        </section>
      </article>
    </main>
  );
}

export default BlogPost;
