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
    <article className="mx-auto mb-6 max-w-4xl px-4 space-y-12">
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
        <div className="pt-4 flex justify-center items-center sm:space-y-0 space-y-6 space-x-0 sm:space-x-6 flex-col sm:flex-row">
          {authors.map((author, index) => (
            <AuthorCard key={index} {...author} />
          ))}
        </div>
      </header>

      <Divider />

      <Suspense fallback={null}>
        <div className="w-full mt-4 prose dark:prose-invert max-w-none">
          {children}
        </div>
      </Suspense>
    </article>
  )
}

export default BlogLayout
