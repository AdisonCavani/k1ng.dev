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
  const [ids, setIds] = useState<Array<string>>(posts.map(post => post._id))

  return (
    <>
      <PageSEO title="Blog" description="Blog" />

      <div className="mx-auto mb-6 max-w-4xl px-4">
        <div className="flex flex-col gap-y-6">
          <h1 className="text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
            Blog
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            I&apos;m writing mostly about web development and backend
            technologies. In total, I&apos;ve written {posts.length} articles on
            my blog. Use the search below to filter by title and description.
          </p>

          <div className="block relative w-full">
            <input
              type="text"
              aria-label="Search articles"
              placeholder="Search articles"
              className="rounded dark:bg-dark-600 w-full border border-gray-400 dark:border-dark-400 py-1 placeholder-gray-500 dark:placeholder-dark-300 pr-3 pl-10 focus-visible:border-blue-500 dark:focus-visible:border-blue-800 outline-none transition-colors"
              onChange={async e => {
                const { value } = e.currentTarget

                if (!value.length) return setIds(posts.map(post => post._id))

                // Dynamically load fuse.js
                const Fuse = (await import('fuse.js')).default
                const fuse = new Fuse<Post>(posts, {
                  keys: ['title', ['description']]
                })

                setIds(fuse.search(value).map(result => result.item._id))
              }}
            />
            <div className="h-full absolute left-0 top-0 flex items-center justify-center ml-3 text-gray-500 dark:text-dark-200">
              <IconSearch size={18} />
            </div>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
            All Posts
          </h2>

          {ids.length > 0 ? (
            posts
              .filter(post => ids.includes(post._id))
              .map((post, index) => <BlogCard key={index} {...post} />)
          ) : (
            <p>No articles found...</p>
          )}
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
