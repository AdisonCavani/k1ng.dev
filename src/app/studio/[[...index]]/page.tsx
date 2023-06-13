"use client";

import { NextStudio } from "next-sanity/studio";
import config from "sanity.config";

function Page() {
  return <NextStudio config={config} />;
}

export default Page;
