import { urlFor } from '@lib/sanity'
import Image from 'next/future/image'

type Props = {
  firstName: string
  lastName: string
  image: string
  github: string
}

const AuthorCard = ({ firstName, lastName, image, github }: Props) => {
  return (
    <div className="flex flex-shrink-0 items-center whitespace-nowrap mx-4 space-x-2">
      <Image
        src={urlFor(image).width(80).height(80).url()}
        alt="Author image"
        width={40}
        height={40}
        className="rounded-full border-2 dark:border-dark-200"
      />
      <div className="text-left text-sm font-medium leading-5">
        <p className="text-sm leading-4">
          {firstName} {lastName}
        </p>
        <a
          href={`https://github.com/${github}`}
          target="_blank"
          rel="noreferrer"
          className="mt-1 rounded-full dark:text-blue-300 text-xs font-medium text-blue-900"
        >
          @{github}
        </a>
      </div>
    </div>
  )
}

export default AuthorCard
