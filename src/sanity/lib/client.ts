import { apiVersion, dataset, projectId, useCdn } from "@sanity/env";
import { createClient } from "next-sanity";

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

export { client };
