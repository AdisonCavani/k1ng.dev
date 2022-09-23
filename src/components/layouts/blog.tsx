import { ReactNode, Suspense } from 'react'
import { Author } from '@lib/types'
import AuthorCard from '@components/authorCard'
import Divider from '@ui/text/divider'

type Props = {
  title: string
  description: string
  publishedAt: string
  readingTime: string
  authors: Array<Author>
  children: ReactNode
}

const BlogLayout = ({
  children,
  title,
  publishedAt,
  readingTime,
  authors
}: Props) => {
  return (
    <article className="mx-auto mb-6 max-w-4xl px-4">
      <header>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-black md:text-5xl dark:text-white text-center">
          {title}
        </h1>
        <p className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-center my-4">
          {new Intl.DateTimeFormat('en-US', {
            dateStyle: 'medium'
          }).format(new Date(publishedAt))}{' '}
          ({readingTime})
        </p>
        <div className="relative mt-8">
          <div className="flex flex-row sm:block text-center sm:overflow-x-visible overflow-x-scroll pb-8 px-2 sm:justify-center">
            {authors.map((author, index) => (
              <AuthorCard key={index} {...author} />
            ))}
          </div>
          <div
            aria-hidden
            className="block sm:hidden absolute h-[80%] w-8 top-0 left-0 bg-gradient-to-r from-neutral-100 to-white/0 dark:from-dark-700"
          />
          <div
            aria-hidden
            className="block sm:hidden absolute h-[80%] w-8 top-0 right-0 bg-gradient-to-l from-neutral-100 to-white/0 dark:from-dark-700"
          />
        </div>
      </header>

      <Divider className="mt-4 mb-12" />

      <Suspense fallback={null}>
        <div className="w-full mt-4 prose dark:prose-invert max-w-none">
          {children}
        </div>
      </Suspense>
    </article>
  )
}

export default BlogLayout
