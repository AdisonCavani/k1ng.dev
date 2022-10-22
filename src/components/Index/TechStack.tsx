import { urlFor } from "@lib/Queries";
import type { TechCategorySchema, TechItemSchema } from "@lib/Types";
import { createSignal } from "solid-js";
import TechIcon from "./TechIcon";

type Props = {
  categories: Array<TechCategorySchema>;
  items: Array<TechItemSchema>;
};

const TechStack = ({ categories, items }: Props) => {
  const [id, setId] = createSignal<string>(categories.find(() => true)!.id);

  return (
    <>
      <div
        class="mb-3 flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-orientation="horizontal"
      >
        {categories.map(({ id, image, name }) => (
          <button
            class="focus:outline-none rounded-3xl bg-neutral-200 px-4 py-2"
            onClick={() => setId(id)}
          >
            <div class="flex flex-row items-center gap-2 text-sm font-bold text-neutral-600">
              <img
                src={urlFor(image).url()}
                alt="Category image"
                width={18}
                height={18}
              />
              <p>{name}</p>
            </div>
          </button>
        ))}
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items
          .filter((item) => item.category.id === id())
          .map((value) => (
            <TechIcon {...value} />
          ))}
      </div>
    </>
  );
};

export default TechStack;
