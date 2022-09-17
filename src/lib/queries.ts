import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  description,
  publishedAt,
  coverImage,
  "slug": slug.current
`

export const indexQuery = groq`
*[_type == "post"] | order(publishedAt desc) {
  ${postFields}
}`

export const postQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(publishedAt desc) [0] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`
