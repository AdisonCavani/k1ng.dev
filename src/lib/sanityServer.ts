/**
 * Server-side Sanity utilities. By having these in a separate file from the
 * utilities we use on the client side, we are able to tree-shake (remove)
 * code that is not used on the client side.
 */
import { createClient } from "next-sanity";
import { sanityConfig } from "./sanityConfig";

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(sanityConfig);