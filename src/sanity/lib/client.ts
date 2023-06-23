import { apiVersion, dataset, projectId, useCdn } from "@sanity/env";
import { createClient, type SanityClient } from "next-sanity";

function getClient(_?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
  });

  return client;
}

export { getClient };
