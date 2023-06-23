import { client } from "@sanity/lib/client";
import {
  blogQuery,
  postQuery,
  postSlugsQuery,
  projectsQuery,
  tagsQuery,
  techCategoryQuery,
  techItemsQuery,
} from "./queries";
import type {
  PostSchema,
  ProjectSchema,
  TagSchema,
  TechCategorySchema,
  TechItemSchema,
} from "./types";

export const getProjectsData = async (): Promise<Array<ProjectSchema>> => {
  return await client.fetch(projectsQuery);
};

export const getTechItemsData = async (): Promise<Array<TechItemSchema>> => {
  return await client.fetch(techItemsQuery);
};

export const getTechCategoryData = async (): Promise<
  Array<TechCategorySchema>
> => {
  return await client.fetch(techCategoryQuery);
};

export const getPostSlugsData = async (): Promise<Array<string>> => {
  return await client.fetch(postSlugsQuery);
};

export const getPostData = async (slug: string): Promise<PostSchema> => {
  return await client.fetch(postQuery, { slug: slug });
};

export const getBlogData = async (): Promise<Array<PostSchema>> => {
  return await client.fetch(blogQuery);
};

export const getTagsData = async (): Promise<Array<TagSchema>> => {
  return await client.fetch(tagsQuery);
};
