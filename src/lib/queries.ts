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
const TagsQuery = groq`
*[_type == "category"] {
  name,
  "slug": slug.current
}`;

export const GetTagsData = async (): Promise<Array<TagSchema>> => {
  return await clientFetch(TagsQuery);
};

const AuthorFields = groq`
  firstName,
  lastName,
  "slug": slug.current,
  image,
  github
`;

const TagFields = groq`
  name,
  "slug": slug.current
`;

const PostFields = groq`
  title,
  description,
  "datePublished": _createdAt,
  "dateModified": _updatedAt,
  coverImage,
  "authors": authors[]-> {
    ${AuthorFields}
  },
  "categories": categories[]-> {
    ${TagFields}
  },
  "slug": slug.current
`;

const BlogQuery = groq`
*[_type == "post"] | order(_createdAt desc) {
  ${PostFields}
}
`;

export const GetBlogData = async (): Promise<Array<PostSchema>> => {
  return await clientFetch(BlogQuery);
};

const BlogTagQuery = groq`
*[_type == "post" && $tag in categories[]->slug.current] {
  ${PostFields}
}
`;

export const GetBlogTagData = async (
  tag: string
): Promise<Array<PostSchema>> => {
  return await clientFetch(BlogTagQuery, { tag: tag });
};

const PostQuery = groq`
*[_type == "post" && slug.current == $slug] | order(_createdAt desc) [0] {
  ${PostFields},
  content
}
`;

export const GetPostData = async (slug: string): Promise<PostSchema> => {
  return await clientFetch(PostQuery, { slug: slug });
};

const PostSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const GetPostSlugsData = async (): Promise<Array<string>> => {
  return await clientFetch(PostSlugsQuery);
};

// Index queries
const FooterQuery = groq`
*[_type == "footer"] | order(lower(name) asc)  {
  name,
  url
}`;

export const GetFooterData = async (): Promise<Array<FooterSchema>> => {
  return await clientFetch(FooterQuery);
};

const TechCategoryFields = groq`
  "id": _id
`;

const TechCategoryQuery = groq`
*[_type == "tech-category"] | order(lower(name) asc) {
  ${TechCategoryFields},
  name,
  image,
  "color": color.hex,
  "background": background.hex
}`;

export const GetTechCategoryData = async (): Promise<
  Array<TechCategorySchema>
> => {
  return await clientFetch(TechCategoryQuery);
};

const TechItemsQuery = groq`
*[_type == "tech-item"] | order(lower(name) asc) {
  name,
  description,
  href,
  image,
  "background": background.hex,
  category -> {
    ${TechCategoryFields}
  }
}`;

export const GetTechItemsData = async (): Promise<Array<TechItemSchema>> => {
  return await clientFetch(TechItemsQuery);
};

const ProjectsQuery = groq`
*[_type == "project"] | order(lower(name) asc) {
  name,
  description,
  url,
  github,
  image,
  technology,
  "color": color.hex
}`;

export const GetProjectsData = async (): Promise<Array<ProjectSchema>> => {
  return await clientFetch(ProjectsQuery);
};

export const PostUpdatedQuery = groq`
*[_type == "post" && _id == $id].slug.current
`;
