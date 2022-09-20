const postFields = `
  _id,
  title,
  description,
  publishedAt,
  coverImage,
  "slug": slug.current
`

export const indexQuery = `
*[_type == "post"] | order(publishedAt desc) {
  ${postFields}
}`

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(publishedAt desc) [0] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = `*[_type == "post" && defined(slug.current)][].slug.current`

export const postUpdatedQuery = `*[_type == "post" && _id == $id].slug.current`
