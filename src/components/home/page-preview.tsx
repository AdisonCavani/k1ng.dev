"use client";

import { projectsQuery, techCategoryQuery, techItemsQuery } from "@lib/queries";
import type {
  ProjectSchema,
  TechCategorySchema,
  TechItemSchema,
} from "@lib/types";
import { useLiveQuery } from "next-sanity/preview";
import HomePage from "./page";

type Props = {
  initialCategories: TechCategorySchema[];
  initialItems: TechItemSchema[];
  initialProjects: ProjectSchema[];
};

function HomePagePreview({
  initialCategories,
  initialItems,
  initialProjects,
}: Props) {
  const [categories] = useLiveQuery<TechCategorySchema[]>(
    initialCategories,
    techCategoryQuery
  );
  const [items] = useLiveQuery<TechItemSchema[]>(initialItems, techItemsQuery);
  const [projects] = useLiveQuery<ProjectSchema[]>(
    initialProjects,
    projectsQuery
  );

  return <HomePage categories={categories} items={items} projects={projects} />;
}

export default HomePagePreview;
