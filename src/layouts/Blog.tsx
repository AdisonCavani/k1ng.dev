import Anchor from "@components/Anchor";
import { GetTagsData } from "@lib/queries";
import type { PostSchema } from "@lib/types";

type Props = {
  currentTag?: string | undefined;
  posts: PostSchema[];
};

async function BlogLayout({ posts, currentTag }: Props) {
  const allTags = await GetTagsData();

  return (
    <main className="max-w-5xl pt-8 px-8 mx-auto mt-16">
      <h1 className="text-5xl font-bold">Blog</h1>

      <div className="flow-root mt-8 text-sm text-gray-600">
        <div className="-m-4 flex flex-row">
          {allTags.map(({ name, slug }, index) => (
            <a
              key={index}
              href={`/blog/tag/${slug}`}
              className={`m-2 px-2 py-1 ${
                slug === currentTag
                  ? "rounded bg-neutral-200"
                  : "hover:underline"
              }`}
            >
              {name}
            </a>
          ))}
        </div>
      </div>

      <section className="mt-8">
        {posts.map(
          ({ categories, description, datePublished, title, slug }, index) => (
            <div
              key={index}
              className="py-8 border-t border-gray-200 grid sm:grid-cols-3 gap-2"
            >
              <div className="w-56">
                <time dateTime={datePublished} className="text-gray-800">
                  {new Date(datePublished).toLocaleDateString("en-us", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <div className="flow-root mt-8 text-sm text-gray-600">
                  <div className="-m-2 flex flex-wrap">
                    {categories.map(({ name, slug }, index) => (
                      <a
                        key={index}
                        href={`/blog/tag/${slug}`}
                        className="m-2 hover:underline"
                      >
                        {name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <Anchor href={`/blog/${slug}`} className="sm:col-span-2 mt-2">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="mt-4">{description}</p>
              </Anchor>
            </div>
          )
        )}
      </section>
    </main>
  );
}

export default BlogLayout;
