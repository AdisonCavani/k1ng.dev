import DetailsComponent from "@components/Wiki/Details";
import { getHeadings, slugify } from "@lib/Helpers";
import type { WikiHeadingsSchema } from "@lib/Types";
import { useState } from "react";

type Props = {
  index: number;
  itemsCount: number;
  name: string;
  href: string;
  slug: string;
  headings?: WikiHeadingsSchema[];
};

const Summary = ({ index, itemsCount, name, href, slug, headings }: Props) => {
  const currentSlug = slugify(name);
  const revealed =
    headings !== undefined && headings.length !== 0 && slug !== "preview";

  const [state, setState] = useState<boolean>(revealed);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<WikiHeadingsSchema[] | undefined>(headings);
  const [visible, setVisible] = useState<boolean>(
    currentSlug !== "preview" &&
      !(
        currentSlug === slug &&
        (headings === undefined || headings.length === 0)
      )
  );

  return (
    <li
      className={`block px-2 py-2 ${
        index !== 0 && index !== itemsCount - 1 && "border-y"
      }`}
    >
      <summary className="flex items-center gap-x-2">
        <button
          aria-hidden={!visible}
          className={`hover:bg-neutral-200 rounded aspect-square text-neutral-500 fill-neutral-500 p-1 ${
            visible ? "" : "invisible"
          }`}
          onClick={async () => {
            if (data && data.length > 0) return setState(!state);

            setLoading(true);

            const json = await fetch(
              `https://api.github.com/repos/AdisonCavani/distro-grub-themes/contents/docs/${
                currentSlug.charAt(0).toUpperCase() + currentSlug.slice(1)
              }.mdx`
            );
            const res = await json.json();
            const markdown = atob(res.content);
            const items = getHeadings(markdown);

            if (items.length === 0) {
              setVisible(false);
            } else {
              setData(items);
              setState(true);
            }

            setLoading(false);
          }}
        >
          {loading ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="animate-spin"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 3a9 9 0 1 0 9 9"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              stroke="currentColor"
              className={`transition-transform ${state ? "" : "-rotate-90"}`}
            >
              <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z" />
            </svg>
          )}
        </button>
        <a
          href={`/distro-grub-themes/${href}`}
          className="flex-1 font-semibold text-blue-600 text-sm"
        >
          {name}
        </a>
      </summary>

      {data && state && (
        <DetailsComponent
          headings={data}
          slug={currentSlug === "index" ? "" : currentSlug}
        />
      )}
    </li>
  );
};

export default Summary;
