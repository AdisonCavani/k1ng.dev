import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  description,
  publishedAt,
  coverImage,
  "slug": slug.current,
`

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const postQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

export const postUpdatedQuery = groq`*[_type == "post" && _id == $id].slug.current`
