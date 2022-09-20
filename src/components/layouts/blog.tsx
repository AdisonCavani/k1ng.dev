import { ReactNode, Suspense } from 'react'
import Image from 'next/future/image'
import Avatar from '@images/avatar.webp'

type Props = {
  title: string
  description: string
  publishedAt: string
  readingTime: string
  children: ReactNode
}

const BlogLayout = ({ children, title, publishedAt, readingTime }: Props) => {
  return (
    <article className="mx-auto mb-6 max-w-4xl px-4">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        {title}
      </h1>
      <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
        <div className="flex items-center">
          <Image
            alt="Adison Cavani"
            height={24}
            width={24}
            sizes="20vw"
            src={Avatar}
            className="rounded-full"
          />
          <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
            Adison Cavani /{' '}
            {new Intl.DateTimeFormat('en-US', {
              dateStyle: 'medium'
            }).format(new Date(publishedAt))}
          </p>
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
          {readingTime}
        </p>
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
