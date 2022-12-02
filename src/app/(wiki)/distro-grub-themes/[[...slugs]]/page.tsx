import "@styles/prose.css";

import Markdown from "@components/Markdown";
import { getBySlug } from "@lib/github";
import { mdxToHtml } from "@lib/markdown";

type Props = {
  params: {
    slugs: string[];
  };
};

async function Wiki({ params: { slugs } }: Props) {
  const content = await getBySlug(slugs ? slugs[0] : undefined);
  const mdxSource = await mdxToHtml(content);

  return (
    <article className="w-full max-w-none prose">
      <Markdown mdxSource={mdxSource} />
    </article>
  );
}

export default Wiki;
