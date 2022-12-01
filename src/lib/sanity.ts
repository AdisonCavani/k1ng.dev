import type { ClientConfig } from "@sanity/client";
import client from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const config: ClientConfig = {
  apiVersion: process.env.PUBLIC_SANITY_API_VERSION || "2021-10-21",
  dataset: process.env.PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || "2eho6ken",
  useCdn: false,
};

export const sanityClient = client(config);

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: string) => {
  return builder.image(source);
};
