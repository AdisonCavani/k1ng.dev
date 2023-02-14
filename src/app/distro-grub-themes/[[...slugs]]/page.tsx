import "@styles/prose.css";

import Sidebar from "../Sidebar";
import { getBySlug, getDocsDir } from "@lib/github";
import MdxComponents2 from "@components/MdxComponents2";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxOptions } from "@lib/mdx";

type Props = {
  params: {
    slugs: string[];
  };
};

async function Wiki({ params: { slugs } }: Props) {
  const content = await getBySlug(slugs ? slugs[0] : undefined);

  return (
    <main className="max-w-7xl py-8 px-8 mx-auto mt-16 flex gap-4 flex-col lg:flex-row">
      <article className="w-full max-w-none prose">
        {/* @ts-expect-error */}
        <MDXRemote
          source={content}
          options={mdxOptions}
          components={MdxComponents2}
        />
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
