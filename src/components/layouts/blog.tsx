import { ReactNode, Suspense } from 'react'
import Image from 'next/future/image'
import { Author } from '@lib/types'
import AuthorCard from '@components/authorCard'
import { urlFor } from '@lib/sanity'

type Props = {
  title: string
  description: string
  publishedAt: string
  readingTime: string
  coverImage: string
  authors: Array<Author>
  children: ReactNode
}

const BlogLayout = ({
  children,
  title,
  publishedAt,
  readingTime,
  coverImage,
  authors
}: Props) => {
  return (
    <article className="mx-auto mb-6 max-w-4xl px-4">
      <div>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-4xl dark:text-white text-center">
          {title}
        </h1>
        <p className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-center my-4">
          {new Intl.DateTimeFormat('en-US', {
            dateStyle: 'medium'
          }).format(new Date(publishedAt))}{' '}
          ({readingTime})
        </p>
        <div className="pt-4 flex justify-center space-x-6">
          {authors.map((author, index) => (
            <AuthorCard key={index} {...author} />
          ))}
        </div>
        <Image
          src={urlFor(coverImage).width(960).height(540).url()}
          alt="Cover image"
          width={960}
          height={540}
          className="w-full object-cover my-10 rounded-xl"
          priority
        />
      </div>

      <Suspense fallback={null}>
        <div className="w-full mt-4 prose dark:prose-invert max-w-none">
          {children}
        </div>
      </Suspense>
    </article>
  )
}

export default BlogLayout
