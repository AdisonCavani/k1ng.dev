import { urlFor } from '@lib/sanity'
import { Slug } from '@lib/types'
import Image from 'next/future/image'

type Props = {
  firstName: string
  lastName: string
  image: string
  github: string
  slug: Slug
}

const AuthorCard = ({ firstName, lastName, image, github, slug }: Props) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Image
        src={urlFor(image).width(80).height(80).url()}
        alt="Author image"
        width={40}
        height={40}
        className="flex-shrink-0 rounded-full border-2 dark:border-dark-200"
      />
      <div className="whitespace-no-wrap text-left text-sm font-medium leading-5">
        <p className="text-sm leading-4">
          {firstName} {lastName}
        </p>
        <a
          href={`https://github.com/${github}`}
          target="_blank"
          rel="noreferrer"
          className="mt-1 inline-flex items-center rounded-full dark:text-blue-300 text-xs font-medium text-blue-900"
        >
          @{github}
        </a>
      </div>
    </div>
  )
}

export default AuthorCard
