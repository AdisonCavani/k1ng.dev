import { indexQuery } from '@lib/queries'
import { GetClient } from '@lib/sanityServer'
import { Category, Post } from '@lib/types'
import { GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { PageSEO } from '@components/seo'
import BlogCard from '@components/blogCard'
import { useState, Fragment } from 'react'
import { IconCaretDown, IconCheck, IconSearch } from '@tabler/icons'
import { Listbox, Transition } from '@headlessui/react'

type PageProps = {
  posts: Array<Post>
  categories: Array<Category>
}

const BlogPage: NextPage<PageProps> = ({ posts, categories }) => {
  const allIds = posts.map(post => post._id)
  // Store Array of ids. We don't need to mutate ``posts`` object, and only change filtered indexes
  const [ids, setIds] = useState<Array<string>>(allIds)
  const [filters, setFilters] = useState<Array<Category>>(categories)

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

          <div className="flex w-full">
            <Listbox value={filters} onChange={setFilters} multiple>
              <div className="relative z-10">
                <Listbox.Button className="flex text-sm font-medium justify-center items-center rounded-l-md bg-gray-200 dark:bg-dark-500 px-4 py-2 cursor-pointer border border-gray-400 dark:border-dark-400 border-r-0">
                  <p>Filters</p>
                  <IconCaretDown size={18} className="ml-2" />
                </Listbox.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Listbox.Options className="absolute mt-2 flex flex-col min-w-[200px] bg-white dark:bg-dark-600 border border-gray-400 dark:border-dark-400 rounded-md text-sm shadow-xl">
                    <h3 className="py-2 pl-4 pr-2 font-medium">
                      Filter Categories
                    </h3>
                    {categories.map((value, index) => (
                      <Listbox.Option
                        key={index}
                        value={value}
                        className="flex items-center border-t border-gray-400 dark:border-dark-400 py-2 px-4 cursor-pointer ui-selected:font-medium hover:bg-gray-100 dark:hover:bg-dark-500"
                      >
                        <IconCheck
                          className="ui-selected:visible invisible mr-2"
                          size={16}
                        />
                        {value.name}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
            <input
              type="text"
              aria-label="Search articles"
              placeholder="Search articles"
              className="rounded-r dark:bg-dark-600 w-full border border-gray-400 dark:border-dark-400 py-1 placeholder-gray-500 dark:placeholder-dark-300 pr-3 pl-3 focus-visible:border-blue-500 dark:focus-visible:border-blue-800 outline-none transition-colors"
              onChange={async e => {
                const { value } = e.currentTarget

                if (!value.length) return setIds(allIds)

                // Dynamically load fuse.js
                const Fuse = (await import('fuse.js')).default
                const fuse = new Fuse<Post>(posts, {
                  keys: ['title', ['description']]
                })

                setIds(fuse.search(value).map(result => result.item._id))
              }}
            />
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
            All Posts
          </h2>

          {ids.length > 0 ? (
            posts
              .filter(post => ids.includes(post._id))
              .filter(post =>
                filters
                  .map(filter => filter.slug.current)
                  .some(cat =>
                    post.categories.map(cat => cat.slug.current).includes(cat)
                  )
              )
              .map((post, index) => (
                <BlogCard key={index} {...post} index={index} />
              ))
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
