import sanityClient, { ClientConfig } from "@sanity/client";
import type { FooterData } from "./Types";

const config: ClientConfig = {
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || "production",
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
};

const client = sanityClient(config);

const FooterQuery = `
*[_type == "footer"] {
  name,
  url
}`;

export const GetFooterData = async (): Promise<Array<FooterData>> => {
  return await client.fetch(FooterQuery);
};
