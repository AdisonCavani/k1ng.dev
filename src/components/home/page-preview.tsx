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
  const [categories, loading1] = useLiveQuery<TechCategorySchema[]>(
    initialCategories,
    techCategoryQuery
  );
  const [items, loading2] = useLiveQuery<TechItemSchema[]>(
    initialItems,
    techItemsQuery
  );
  const [projects, loading3] = useLiveQuery<ProjectSchema[]>(
    initialProjects,
    projectsQuery
  );

  if (!loading1 && !loading2 && !loading3)
    return (
      <HomePage categories={categories} items={items} projects={projects} />
    );

  return <p>Loading...</p>;
}

export default HomePagePreview;
