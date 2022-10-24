import sanityClient, { ClientConfig } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type {
  FooterSchema,
  PostSchema,
  ProjectSchema,
  TagSchema,
  TechCategorySchema,
  TechItemSchema,
} from "./Types";

const config: ClientConfig = {
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || "production",
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  useCdn: import.meta.env.PROD,
};

const client = sanityClient(config);

const builder = imageUrlBuilder(client);

export const urlFor = (source: string) => {
  return builder.image(source);
};

// Blog queries
const TagsQuery = `
*[_type == "category"] {
  name,
  "slug": slug.current
}`;

export const GetTagsData = async (): Promise<Array<TagSchema>> => {
  return await client.fetch(TagsQuery);
};

const AuthorFields = `
  firstName,
  lastName,
  "slug": slug.current,
  image,
  github
`;

const TagFields = `
  name,
  "slug": slug.current
`;

const PostFields = `
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

const BlogQuery = `
*[_type == "post"] | order(_createdAt desc) {
  ${PostFields}
}
`;

export const GetBlogData = async (): Promise<Array<PostSchema>> => {
  return await client.fetch(BlogQuery);
};

const BlogTagQuery = `
*[_type == "post" && $tag in categories[]->slug.current] {
  ${PostFields}
}
`;

export const GetBlogTagData = async (
  tag: string
): Promise<Array<PostSchema>> => {
  return await client.fetch(BlogTagQuery, { tag: tag });
};

const PostQuery = `
*[_type == "post" && slug.current == $slug] | order(_createdAt desc) [0] {
  ${PostFields},
  content
}
`;

export const GetPostData = async (slug: string): Promise<PostSchema> => {
  return await client.fetch(PostQuery, { slug: slug });
};

const PostSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const GetPostSlugsData = async (): Promise<Array<string>> => {
  return await client.fetch(PostSlugsQuery);
};

// Index queries
const FooterQuery = `
*[_type == "footer"] {
  name,
  url
}`;

export const GetFooterData = async (): Promise<Array<FooterSchema>> => {
  return await client.fetch(FooterQuery);
};

const TechCategoryFields = `
  "id": _id
`;

const TechCategoryQuery = `
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
  return await client.fetch(TechCategoryQuery);
};

const TechItemsQuery = `
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
  return await client.fetch(TechItemsQuery);
};

const ProjectsQuery = `
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
  return await client.fetch(ProjectsQuery);
};
