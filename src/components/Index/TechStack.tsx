import { Tab } from "@headlessui/react";
import { urlFor } from "@lib/Queries";
import type { TechCategorySchema, TechItemSchema } from "@lib/Types";
import TechIcon from "./TechIcon";

type Props = {
  categories: Array<TechCategorySchema>;
  items: Array<TechItemSchema>;
};

const TechStack = ({ categories, items }: Props) => {
  return (
    <Tab.Group>
      <Tab.List className="mb-3 flex flex-wrap justify-center gap-2">
        {categories.map((value, index) => (
          <Tab
            key={index}
            className="focus:outline-none rounded-3xl bg-neutral-200 px-4 py-2"
          >
            <div className="flex flex-row items-center gap-2 text-sm font-bold text-neutral-600">
              <img
                src={urlFor(value.image).url()}
                alt="Category logo"
                width={18}
                height={18}
                className="text-neutral-600"
              />
              <p>{value.name}</p>
            </div>
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {categories.map((category, catIndex) => (
          <Tab.Panel key={catIndex}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {items
                .filter((item) => item.category.id === category.id)
                .map((value, index) => (
                  <TechIcon key={index} {...value} />
                ))}
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default TechStack;
