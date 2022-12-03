import type { ClientConfig } from "next-sanity";

export const sanityConfig: ClientConfig = {
  apiVersion: process.env.PUBLIC_SANITY_API_VERSION,
  dataset: process.env.PUBLIC_SANITY_DATASET,
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
  useCdn: false,
};
