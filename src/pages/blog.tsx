import { indexQuery } from '@lib/queries'
import { GetClient } from '@lib/sanityServer'
import { Category, Post } from '@lib/types'
import { GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { PageSEO } from '@components/seo'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const BlogComponent = dynamic(() => import('@components/blogComponent'), {
  suspense: true
})

export type BlogPageProps = {
  posts: Array<Post>
  categories: Array<Category>
}

const BlogPage: NextPage<BlogPageProps> = props => {
  return (
    <>
      <PageSEO title="Blog" description="Blog" />

      <Suspense fallback={null}>
        <BlogComponent {...props} />
      </Suspense>
    </>
  )
}

export default BlogPage

type Props = {
  posts: Array<Post>
  categories: Array<Category>
}

interface Params extends ParsedUrlQuery {
  slug: string
}

type QueryResult = {
  posts: Array<Post>
  categories: Array<Category>
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  preview = false
}) => {
  const { posts, categories }: QueryResult = await GetClient(preview).fetch(
    indexQuery
  )

  return {
    props: {
      posts: posts,
      categories: categories
    }
  }
}
