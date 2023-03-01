"use client";

import TechIcon from "./tech-icon";
import { Tab } from "@headlessui/react";
import type { TechCategorySchema, TechItemSchema } from "@lib/types";
import { Fragment } from "react";

type Props = {
  categories: Array<TechCategorySchema>;
  items: Array<TechItemSchema>;
};

function TechStack({ categories, items }: Props) {
  return (
    <Tab.Group>
      <Tab.List className="mb-3 flex flex-wrap justify-center gap-2">
        {categories.map(({ color, background, image, name }, index) => (
          <Tab as={Fragment} key={index}>
            {({ selected }) => (
              <button
                className="rounded-3xl bg-neutral-200 px-4 py-2 text-neutral-600 focus:outline-none"
                style={{
                  color: selected ? color : undefined,
                  backgroundColor: selected ? background : undefined,
                }}
              >
                <div className="flex flex-row items-center gap-2 text-sm font-bold">
                  <div dangerouslySetInnerHTML={{ __html: image }} />
                  <p>{name}</p>
                </div>
              </button>
            )}
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
}

export default TechStack;
