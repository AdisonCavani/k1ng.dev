import { cache } from "react";
import { client } from "./client";

const clientFetch = cache(client.fetch.bind(client));

export { clientFetch, client };
