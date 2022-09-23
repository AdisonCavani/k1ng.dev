import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type Post = {
  _id: string
  title: string
  description: string
  publishedAt: string
  readingTime: string
  coverImage: string
  authors: Array<Author>
  categories: Array<Category>
  content: MDXRemoteSerializeResult
  slug: string
}

export type Author = {
  firstName: string
  lastName: string
  image: string
  github: string
  slug: Slug
}

export type Category = {
  name: string
  slug: Slug
}

export type Slug = {
  current: string
}
