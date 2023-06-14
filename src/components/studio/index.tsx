"use client";

import { NextStudio } from "next-sanity/studio";
import config from "sanity.config";

function Studio() {
  return <NextStudio config={config} />;
}

export default Studio;
