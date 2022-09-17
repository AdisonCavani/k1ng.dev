import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type Post = {
  _id: string
  title: string
  description: string
  publishedAt: string
  readingTime: string
  coverImage: string
  content: MDXRemoteSerializeResult
  slug: string
}
