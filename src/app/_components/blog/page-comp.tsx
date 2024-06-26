import { formatDate } from "@lib/helpers";
import type { PostSchema } from "@lib/types";
import { urlForImage } from "@sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

type Props = {
  posts: PostSchema[];
};

function BlogPage({ posts }: Props) {
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
              <div className="overflow-hidden rounded-md border border-slate-200 transition-colors ease-in group-hover:border-slate-900">
                <Image
                  src={urlForImage(coverImage).width(804).height(452).url()}
                  width={804}
                  height={452}
                  alt="Cover image"
                  priority={index <= 1}
                  className="transition-transform group-hover:scale-105"
                />
              </div>
              <h2 className="text-2xl font-extrabold">{title}</h2>
              <p className="text-slate-600">{description}</p>
              <time dateTime={datePublished} className="text-sm text-slate-600">
                {formatDate(datePublished)}
              </time>
              <Link href={`/blog/${slug}`} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ),
        )}
      </section>
    </main>
  );
}

export default BlogPage;
