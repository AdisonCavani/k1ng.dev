import { getBySlug, getSidebarData } from "@lib/github";
import { getHeadings, slugify } from "@lib/helpers";
import type { WikiHeadingsSchema } from "@lib/types";
import Summary from "./Summary";

async function Sidebar() {
  const { count, items } = await getSidebarData();

  let slug = "preview";
  if (slug === "distro-grub-themes") slug = "index";

  let data: string | undefined;
  let headings: WikiHeadingsSchema[] | undefined;
  if (slug !== "preview") {
    data = await getBySlug(slug);
    headings = getHeadings(data);
  }

  return (
    <aside className="flex flex-col w-full lg:w-80 border rounded-lg h-min">
      <div className="px-4 py-2 bg-neutral-200 w-full inline-flex items-center gap-x-2">
        <p className="font-bold text-sm">Pages</p>
        <span className="bg-neutral-600 text-white rounded-full w-5 h-5 inline-flex items-center justify-center text-xs">
          {count}
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
              slug={slug}
            />
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
