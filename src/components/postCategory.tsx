import { Slug } from '@lib/types'
import NextLink from 'next/link'

type Props = {
  name: string
  slug: Slug
}

const PostCategory = ({ name, slug }: Props) => {
  return (
    <NextLink href={`/blog/category/${slug.current}`}>
      <a className="inline-flex items-center rounded bg-gray-300 dark:bg-dark-800/40 text-gray-800 dark:text-gray-100 px-2 py-1 text-xs font-medium">
        {name}
      </a>
    </NextLink>
  )
}

export default PostCategory
