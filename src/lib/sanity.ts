import { sanityConfig } from "./sanityConfig";
import createImageUrlBuilder from "@sanity/image-url";
import type { SanityProjectDetails } from "@sanity/image-url/lib/types/types";

export const urlFor = (source: string) =>
  createImageUrlBuilder(sanityConfig as SanityProjectDetails).image(source);
