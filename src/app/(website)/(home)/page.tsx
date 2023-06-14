import HomePage from "@components/home/page";
import PreviewSuspense from "@components/layout/preview-suspense";
import {
  getProjectsData,
  // getTechCategoryData,
  // getTechItemsData,
} from "@lib/query-methods";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { lazy } from "react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Home",
};

const HomePagePreview = lazy(() => import("@components/home/page-preview"));

async function Home() {
  const { isEnabled } = draftMode();

  if (isEnabled)
    return (
      <PreviewSuspense fallback="Loading">
        <HomePagePreview />
      </PreviewSuspense>
    );

  // const categories = await getTechCategoryData();
  // const items = await getTechItemsData();
  const projects = await getProjectsData();

  return (
    <HomePage
      // categories={categories} items={items}
      projects={projects}
    />
  );
}

export default Home;
