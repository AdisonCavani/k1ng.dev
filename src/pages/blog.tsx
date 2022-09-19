import { indexQuery } from '@lib/queries'
import { GetClient } from '@lib/sanityServer'
import { Post } from '@lib/types'
import { GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { PageSEO } from '@components/seo'
import BlogCard from '@components/blogCard'
import { useState } from 'react'
import { IconSearch } from '@tabler/icons'

type PageProps = {
  posts: Array<Post>
}

const BlogPage: NextPage<PageProps> = ({ posts }) => {
  // Store Array of ids. We don't need to mutate ``posts`` object, and only change filtered indexes
  const [results, setResults] = useState<Array<string>>(
    posts.map(post => post._id)
  )

  return (
    <>
      <PageSEO title="Blog" description="Blog" />

      <div className="mx-auto mb-6 max-w-4xl px-4">
        <div className="flex flex-col gap-6">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
            Blog
          </h1>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            I&apos;ve been writing online since 2014, mostly about web
            development and tech careers. In total, I&apos;ve written{' '}
            {posts.length} articles on my blog. Use the search below to filter
            by title.
          </p>

          <div className="relative w-full mb-4">
            <input
              type="text"
              aria-label="Search articles"
              placeholder="Search articles"
              onChange={async e => {
                const { value } = e.currentTarget

                if (!value.length)
                  return setResults(posts.map(post => post._id))

                // Dynamically load fuse.js
                const Fuse = (await import('fuse.js')).default
                const fuse = new Fuse<Post>(posts, {
                  keys: ['title', ['description']]
                })

                setResults(fuse.search(value).map(result => result.item._id))
              }}
              className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
            />
            <IconSearch
              size={20}
              className="absolute text-gray-400 right-3 top-3 dark:text-gray-300"
            />
          </div>

          <h2 className="mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
            All Posts
          </h2>

          {results.map((value, index) => (
            <BlogCard
              key={index}
              {...(posts.find(post => post._id === value) as Post)}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default BlogPage

type Props = {
  posts: Array<Post>
}

interface Params extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  preview = false
}) => {
  const posts: Array<Post> = await GetClient(preview).fetch(indexQuery)

  return {
    props: {
      posts: posts
    }
  }
}
