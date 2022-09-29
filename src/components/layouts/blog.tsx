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
      <header className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-black md:text-5xl dark:text-white text-center">
          {title}
        </h1>
        <p className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
          {new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          }).format(new Date(publishedAt))}{' '}
          ({readingTime})
        </p>
        <div className="relative">
          <div className="flex flex-row sm:block text-center sm:overflow-x-visible overflow-x-scroll pb-8 px-2 sm:justify-center sm:space-y-4 space-y-0">
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
        <div className="w-full max-w-none prose dark:prose-invert">
          {children}
        </div>
      </Suspense>
    </article>
  )
}

export default BlogLayout
