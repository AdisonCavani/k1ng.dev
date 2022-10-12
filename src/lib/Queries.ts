import sanityClient, { ClientConfig } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { FooterSchema, PostSchema, TagSchema } from "./Types";

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

const FooterQuery = `
*[_type == "footer"] {
  name,
  url
}`;

export const GetFooterData = async (): Promise<Array<FooterSchema>> => {
  return await client.fetch(FooterQuery);
};

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
  publishedAt,
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
*[_type == "post"] | order(publishedAt desc) {
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
*[_type == "post" && slug.current == $slug] | order(publishedAt desc) [0] {
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
