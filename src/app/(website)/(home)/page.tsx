import HomePage from "@components/home/page-comp";
import HomePagePreview from "@components/home/page-preview";
import {
  getProjectsData,
  getTechCategoryData,
  getTechItemsData,
} from "@lib/query-methods";
import type { Metadata } from "next";
import { draftMode } from "next/headers";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Home",
};

async function Home() {
  const { isEnabled } = draftMode();

  const [categories, items, projects] = await Promise.all([
    getTechCategoryData(),
    getTechItemsData(),
    getProjectsData(),
  ]);

  if (isEnabled)
    return (
      <HomePagePreview
        initialCategories={categories}
        initialItems={items}
        initialProjects={projects}
      />
    );

  return <HomePage categories={categories} items={items} projects={projects} />;
}

export default Home;
