import { Post } from '@lib/types'
import SecondaryText from '@ui/text/secondary'
import NextLink from 'next/link'

const BlogCard = ({ title, description, slug, publishedAt }: Post) => {
  return (
    <NextLink href={`/blog/${encodeURIComponent(slug)}`}>
      <div className="w-full mb-8 cursor-pointer">
        <div className="flex flex-col justify-between md:flex-row">
          <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
            {title}
          </h4>
          <p className="w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0">
            {new Intl.DateTimeFormat('en-US', {
              dateStyle: 'medium'
            }).format(new Date(publishedAt))}
          </p>
        </div>
        <SecondaryText>{description}</SecondaryText>
      </div>
    </NextLink>
  )
}

export default BlogCard
