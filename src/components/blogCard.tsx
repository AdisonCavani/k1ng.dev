import { urlFor } from '@lib/sanity'
import { Post } from '@lib/types'
import Image from 'next/future/image'
import NextLink from 'next/link'
import PostCategory from './postCategory'

const BlogCard = ({
  title,
  authors,
  categories,
  publishedAt,
  coverImage,
  slug
}: Post) => {
  return (
    <NextLink href={`/blog/${encodeURIComponent(slug)}`}>
      <div className="ease-[spring(1 100 10 10)] w-full cursor-pointer bg-white border dark:border-dark-500 dark:bg-dark-600 rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
        <div className="flex flex-col justify-between md:flex-row">
          <Image
            src={urlFor(coverImage).width(320).height(180).url()}
            alt="Cover image"
            width={320}
            height={180}
            className="flex-shrink-0 rounded-lg"
          />
          <div className="flex-grow space-y-4 px-6 py-4">
            <div className="flex flex-wrap space-x-2">
              {categories.map((value, index) => (
                <PostCategory key={index} {...value} />
              ))}
            </div>
            <h2 className="text-xl font-semibold">{title}</h2>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <NextLink href={`/blog/author/${authors[0].slug.current}`}>
                  <Image
                    src={urlFor(authors[0].image).width(40).height(40).url()}
                    alt="Author image"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </NextLink>
              </div>
              <div className="ml-4">
                <NextLink href={`/blog/author/${authors[0].slug.current}`}>
                  <a className="text-sm font-medium">
                    {authors[0].firstName} {authors[0].lastName}
                  </a>
                </NextLink>
                <p className="text-sm text-gray-600">
                  Published on{' '}
                  {new Intl.DateTimeFormat('en-US', {
                    dateStyle: 'medium'
                  }).format(new Date(publishedAt))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NextLink>
  )
}

export default BlogCard
