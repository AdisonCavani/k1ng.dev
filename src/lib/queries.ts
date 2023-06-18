import { groq } from "next-sanity";

// Blog queries
export const tagsQuery = groq`
*[_type == "category"] {
  name,
  "slug": slug.current
}`;

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

export const postQuery = groq`
*[_type == "post" && slug.current == $slug] | order(_createdAt desc) [0] {
  ${postFields},
  content
}
`;

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;

// Index queries
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

export const postUpdatedQuery = groq`
*[_type == "post" && _id == $id].slug.current
`;
