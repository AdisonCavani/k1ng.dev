import { urlFor } from '@lib/sanity'
import { Slug } from '@lib/types'
import Image from 'next/future/image'
import NextLink from 'next/link'

type Props = {
  firstName: string
  lastName: string
  image: string
  slug: Slug
}

const AuthorCard = ({ firstName, lastName, image, slug }: Props) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <NextLink href={`/blog/author/${slug.current}`}>
        <Image
          src={urlFor(image).width(40).height(40).url()}
          alt="Author image"
          width={40}
          height={40}
          className="flex-shrink-0 rounded-full cursor-pointer border-2 dark:border-dark-200"
        />
      </NextLink>
      <div className="whitespace-no-wrap text-left text-sm font-medium leading-5">
        <NextLink href={`/blog/author/${slug.current}`}>
          <p className="text-sm leading-4">
            {firstName} {lastName}
          </p>
        </NextLink>
        <span className="mt-1 inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
          <svg
            className="-ml-0.5 mr-1.5 h-2 w-2 text-red-400"
            fill="currentColor"
            viewBox="0 0 8 8"
          >
            <circle cx="4" cy="4" r="3"></circle>
          </svg>
          Author
        </span>
      </div>
    </div>
  )
}

export default AuthorCard
