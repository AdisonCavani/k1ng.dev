import HomePage from "@components/home/page";
import HomePagePreview from "@components/home/page-preview";
import PreviewProvider from "@components/studio/preview-provider";
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
  const categories = await getTechCategoryData();
  const items = await getTechItemsData();
  const projects = await getProjectsData();

  if (isEnabled)
    return (
      <PreviewProvider>
        <HomePagePreview initialCategories={categories} initialItems={items} initialProjects={projects} />
      </PreviewProvider>
    );

  return <HomePage categories={categories} items={items} projects={projects} />;
}

export default Home;
