import { apiVersion, dataset, projectId, useCdn } from "@sanity/env";
import { createClient, type SanityClient } from "next-sanity";

function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
  });
  if (!preview) return client;

  if (!preview.token)
    throw new Error("You must provide a token to preview drafts");

  return client.withConfig({
    token: preview.token,
    useCdn: false,
    ignoreBrowserTokenWarning: true,
  });
}

export { getClient };
