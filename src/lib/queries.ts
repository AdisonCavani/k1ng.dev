import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  description,
  publishedAt,
  coverImage,
  "authors": authors[]->,
  "categories": categories[]->,
  "slug": slug.current
`

export const indexQuery = groq`
{
  "posts": *[_type == "post"] | order(publishedAt desc) {
    ${postFields}
  },
  "categories": *[_type == "category"] {
    name,
    slug
  }
}`

export const postQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(publishedAt desc) [0] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = groq`*[_type == "post" && defined(slug.current)][].slug.current`

export const postUpdatedQuery = groq`*[_type == "post" && _id == $id].slug.current`

export const categoriesQuery = groq`
*[_type == "category"] {
  name,
  "slug": slug.current
}`
