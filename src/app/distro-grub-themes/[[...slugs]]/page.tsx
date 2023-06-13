import "@styles/prose.css";
import MdxComponents2 from "@components/mdx/mdx-components2";
import Sidebar from "@components/wiki/sidebar";
import { getBySlug, getDocsDir } from "@lib/github";
import { mdxOptions } from "@lib/mdx";
import { SITE_URL } from "config";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";

export const dynamic = "force-static";

type Props = {
  params: {
    slugs: string[];
  };
};

export function generateMetadata({ params: { slugs } }: Props): Metadata {
  const name = slugs
    ? slugs[0]?.toLowerCase().charAt(0).toUpperCase()! +
      slugs[0]?.toLowerCase().substring(1)
    : "Index";

  return {
    title: `${name} / Wiki`,
    description: `${name} wiki page. Official documentation for distro-grub-themes.`,
    alternates: {
      canonical: `${SITE_URL}/distro-grub-themes${slugs ? `/${slugs[0]}` : ""}`,
    },
  };
}

async function Wiki({ params: { slugs } }: Props) {
  const content = await getBySlug(slugs ? slugs[0] : undefined);

  return (
    <main className="mx-auto mt-16 flex max-w-7xl flex-col gap-4 p-8 lg:flex-row">
      <article className="prose w-full max-w-none">
        <MDXRemote
          source={content}
          options={mdxOptions}
          components={MdxComponents2}
        />
      </article>

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
