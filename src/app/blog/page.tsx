import { formatDate } from "@lib/helpers";
import { GetBlogData } from "@lib/queries";
import { urlFor } from "@lib/sanity";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog",
  description: "A blog built using Sanity CMS. Posts are written in MDX.",
};

async function Blog() {
  const posts = await GetBlogData();

  return (
    <main className="container mx-auto mt-16 max-w-4xl py-6 lg:py-10">
      <div className="flex-1 space-y-4">
        <h1 className="inline-block text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl">
          Blog
        </h1>
        <p className="text-xl text-slate-600">
          A blog built using Sanity CMS. Posts are written in MDX.
        </p>
      </div>

      <hr className="my-8 border-slate-200" />

      <section className="grid gap-10 sm:grid-cols-2">
        {posts.map(
          ({ coverImage, datePublished, description, slug, title }, index) => (
            <article
              key={index}
              className="group relative flex flex-col space-y-2"
            >
              <Image
                src={urlFor(coverImage).width(804).height(452).url()}
                width={804}
                height={452}
                alt="Cover image"
                priority={index <= 1}
                className="rounded-md border border-slate-200 bg-slate-200 transition-colors group-hover:border-slate-900"
              />
              <h2 className="text-2xl font-extrabold">{title}</h2>
              <p className="text-slate-600">{description}</p>
              <time dateTime={datePublished} className="text-sm text-slate-600">
                {formatDate(datePublished)}
              </time>
              <Link href={`/blog/${slug}`} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          )
        )}
      </section>
    </main>
  );
}

export default Blog;
