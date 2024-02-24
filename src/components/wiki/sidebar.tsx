import { getBySlug, getSidebarData } from "@lib/github";
import { getHeadings, slugify } from "@lib/helpers";
import type { WikiHeadingsSchema } from "@lib/types";
import Summary from "./summary";

type Props = {
  slug?: string | undefined;
};

async function Sidebar({ slug }: Props) {
  const items = await getSidebarData();

  if (!slug) slug = "index";

  let data: string | undefined;
  let headings: WikiHeadingsSchema[] | undefined;
  if (slug !== "preview") {
    data = await getBySlug(slug);
    headings = getHeadings(data);
  }

  return (
    <aside className="flex h-min w-full flex-col rounded-lg border lg:w-80">
      <div className="inline-flex w-full items-center gap-x-2 bg-neutral-200 px-4 py-2">
        <p className="text-sm font-bold">Pages</p>
        <span className="inline-flex size-5 items-center justify-center rounded-full bg-neutral-600 text-xs text-white">
          {items.length}
        </span>
      </div>
      <ul>
        {items.map(({ name, href }, index) => {
          if (headings && slugify(name) === slug)
            return (
              <Summary
                key={index}
                index={index}
                itemsCount={items.length}
                name={name}
                href={href}
                slug={slug}
                headings={headings}
              />
            );
          return (
            <Summary
              key={index}
              index={index}
              itemsCount={items.length}
              name={name}
              href={href}
              slug={slug!}
            />
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
