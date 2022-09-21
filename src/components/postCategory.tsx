import { Slug } from '@lib/types'
import NextLink from 'next/link'

type Props = {
  name: string
  slug: Slug
}

const PostCategory = ({ name, slug }: Props) => {
  return (
    <NextLink href={`/blog/category/${slug.current}`}>
      <a className="inline-flex items-center rounded bg-gray-300 px-2 py-0.5 text-xs font-medium text-gray-800">
        {name}
      </a>
    </NextLink>
  )
}

export default PostCategory
