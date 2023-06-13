import { clientFetch } from "@sanity/lib/client";
import { groq } from "next-sanity";
import type {
  FooterSchema,
  PostSchema,
  ProjectSchema,
  TagSchema,
  TechCategorySchema,
  TechItemSchema,
} from "./types";

// Blog queries
export const tagsQuery = groq`
*[_type == "category"] {
  name,
  "slug": slug.current
}`;

export const getTagsData = async (): Promise<Array<TagSchema>> => {
  return await clientFetch(tagsQuery);
};

export const authorFields = groq`
  firstName,
  lastName,
  "slug": slug.current,
  image,
  github
`;

export const tagFields = groq`
  name,
  "slug": slug.current
`;

export const postFields = groq`
  title,
  description,
  "datePublished": _createdAt,
  "dateModified": _updatedAt,
  coverImage,
  "authors": authors[]-> {
    ${authorFields}
  },
  "categories": categories[]-> {
    ${tagFields}
  },
  "slug": slug.current
`;

export const blogQuery = groq`
*[_type == "post"] | order(_createdAt desc) {
  ${postFields}
}
`;

export const getBlogData = async (): Promise<Array<PostSchema>> => {
  return await clientFetch(blogQuery);
};

export const postQuery = groq`
*[_type == "post" && slug.current == $slug] | order(_createdAt desc) [0] {
  ${postFields},
  content
}
`;

export const getPostData = async (slug: string): Promise<PostSchema> => {
  return await clientFetch(postQuery, { slug: slug });
};

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const getPostSlugsData = async (): Promise<Array<string>> => {
  return await clientFetch(postSlugsQuery);
};

// Index queries
export const footerQuery = groq`
*[_type == "footer"] | order(lower(name) asc)  {
  name,
  url
}`;

export const getFooterData = async (): Promise<Array<FooterSchema>> => {
  return await clientFetch(footerQuery);
};

export const techCategoryFields = groq`
  "id": _id
`;

export const techCategoryQuery = groq`
*[_type == "tech-category"] | order(lower(name) asc) {
  ${techCategoryFields},
  name,
  image,
  "color": color.hex,
  "background": background.hex
}`;

export const getTechCategoryData = async (): Promise<
  Array<TechCategorySchema>
> => {
  return await clientFetch(techCategoryQuery);
};

export const techItemsQuery = groq`
*[_type == "tech-item"] | order(lower(name) asc) {
  name,
  description,
  href,
  image,
  "background": background.hex,
  category -> {
    ${techCategoryFields}
  }
}`;

export const getTechItemsData = async (): Promise<Array<TechItemSchema>> => {
  return await clientFetch(techItemsQuery);
};

export const projectsQuery = groq`
*[_type == "project"] | order(lower(name) asc) {
  name,
  description,
  url,
  github,
  image,
  technology,
  "color": color.hex
}`;

export const getProjectsData = async (): Promise<Array<ProjectSchema>> => {
  return await clientFetch(projectsQuery);
};

export const postUpdatedQuery = groq`
*[_type == "post" && _id == $id].slug.current
`;
