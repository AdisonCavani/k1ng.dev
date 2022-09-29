import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { SanityClient } from '@lib/sanityServer'
import { postQuery, postSlugsQuery } from '@lib/queries'
import { Post } from '@lib/types'
import { ParsedUrlQuery } from 'querystring'
import mdxToHtml from '@lib/mdx'
import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from '@components/mdxComponents'
import readingTime from 'reading-time'
import { BlogSEO } from '@components/seo'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const BlogLayout = dynamic(() => import('@components/layouts/blog'), {
  suspense: true
})

type PageProps = {
  post: Post
}

const PostPage: NextPage<PageProps> = ({ post }) => {
  return (
    <>
      <BlogSEO {...post} />

      <Suspense fallback={null}>
        <BlogLayout {...post}>
          <MDXRemote {...post.content} components={{ ...MDXComponents }} />
        </BlogLayout>
      </Suspense>
    </>
  )
}

export default PostPage

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await SanityClient.fetch(postSlugsQuery)

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: 'blocking'
  }
}

type Props = {
  post: Post
}

interface Params extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params
}) => {
  const { post } = await SanityClient.fetch(postQuery, {
    slug: params?.slug
  })

  if (!post) {
    return { notFound: true }
  }

  const { html } = await mdxToHtml(post.content)

  return {
    props: {
      post: {
        ...post,
        content: html,
        readingTime: readingTime(post.content).text
      }
    }
  }
}
