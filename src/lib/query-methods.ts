import { clientFetch } from "@sanity/lib/cached-client";
import {
  blogQuery,
  footerQuery,
  postQuery,
  postSlugsQuery,
  projectsQuery,
  tagsQuery,
  techCategoryQuery,
  techItemsQuery,
} from "./queries";
import type {
  FooterSchema,
  PostSchema,
  ProjectSchema,
  TagSchema,
  TechCategorySchema,
  TechItemSchema,
} from "./types";

export const getProjectsData = async (): Promise<Array<ProjectSchema>> => {
  return await clientFetch(projectsQuery);
};

export const getTechItemsData = async (): Promise<Array<TechItemSchema>> => {
  return await clientFetch(techItemsQuery);
};

export const getTechCategoryData = async (): Promise<
  Array<TechCategorySchema>
> => {
  return await clientFetch(techCategoryQuery);
};

export const getFooterData = async (): Promise<Array<FooterSchema>> => {
  return await clientFetch(footerQuery);
};

export const getPostSlugsData = async (): Promise<Array<string>> => {
  return await clientFetch(postSlugsQuery);
};

export const getPostData = async (slug: string): Promise<PostSchema> => {
  return await clientFetch(postQuery, { slug: slug });
};

export const getBlogData = async (): Promise<Array<PostSchema>> => {
  return await clientFetch(blogQuery);
};

export const getTagsData = async (): Promise<Array<TagSchema>> => {
  return await clientFetch(tagsQuery);
};
