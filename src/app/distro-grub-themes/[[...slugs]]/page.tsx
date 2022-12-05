import "@styles/prose.css";

import Markdown from "@components/Markdown";
import { getBySlug, getDocsDir } from "@lib/github";
import { mdxToHtml } from "@lib/markdown";
import Sidebar from "../Sidebar";

type Props = {
  params: {
    slugs: string[];
  };
};

async function Wiki({ params: { slugs } }: Props) {
  const content = await getBySlug(slugs ? slugs[0] : undefined);
  const mdxSource = await mdxToHtml(content);

  return (
    <main className="max-w-7xl py-8 px-8 mx-auto mt-16 flex gap-4 flex-col lg:flex-row">
      <article className="w-full max-w-none prose">
        <Markdown mdxSource={mdxSource} />
      </article>

      {/* @ts-expect-error */}
      <Sidebar slug={slugs ? slugs[0] : undefined} />
    </main>
  );
}

export default Wiki;

export async function generateStaticParams() {
  const slugs = await getDocsDir();

  return slugs.map((slug) => ({
    slugs: [slug],
  }));
}
